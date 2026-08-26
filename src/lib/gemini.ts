import { GoogleGenerativeAI } from "@google/generative-ai";
import { SentimentResult } from "@/types/movie";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

interface MovieAnalysisInput {
    title: string;
    plot: string;
    genre: string;
    rating: string;
    cast?: string[];
    director?: string;
    releaseYear?: string;
    runtime?: string;
}

export async function analyzeSentiment(
    title: string,
    plot: string,
    genre: string,
    rating: string,
    cast?: string[],
    director?: string,
    releaseYear?: string,
    runtime?: string
): Promise<SentimentResult> {
    try {
        const model = genAI.getGenerativeModel({ 
            model: 'gemini-1.5-flash',
            generationConfig: {
                temperature: 0.3,
                maxOutputTokens: 500,
            }
        });

        // Build cast information if provided
        const castInfo = cast && cast.length > 0 
            ? `- Main Cast: ${cast.slice(0, 5).join(', ')}${cast.length > 5 ? ' and others' : ''}`
            : '';
        
        const directorInfo = director ? `- Director: ${director}` : '';
        const yearInfo = releaseYear ? `- Release Year: ${releaseYear}` : '';
        const runtimeInfo = runtime ? `- Runtime: ${runtime} minutes` : '';

        const prompt = `Analyze the audience sentiment for this movie considering all available information.

Movie Details:
- Title: ${title}
- Genre: ${genre}
- IMDb Rating: ${rating}/10
${yearInfo}
${runtimeInfo}
${directorInfo}
${castInfo}
- Plot: ${plot}

Consider how the cast performances, director's style, and overall production might influence audience reception.

Provide your analysis in valid JSON format with these exact fields:
{
  "summary": "A concise 2-3 sentence analysis of audience sentiment, mentioning cast/director impact if notable",
  "classification": "positive|mixed|negative",
  "keyThemes": ["3-5 main themes, emotions, or standout elements"]
}

Rules:
- classification must be exactly "positive", "mixed", or "negative"
- keyThemes should be lowercase, 1-3 words each
- Consider cast chemistry and star power in the analysis
- Return ONLY the JSON object, no other text`;

        const result = await model.generateContent(prompt);
        const response = result.response;
        
        if (!response) {
            throw new Error('No response from Gemini API');
        }

        const text = response.text();
        
        if (!text || text.trim().length === 0) {
            throw new Error('Empty response from Gemini API');
        }

        console.log('Raw Gemini response:', text);

        let cleanText = text.trim();
        cleanText = cleanText.replace(/```json\s*/gi, '');
        cleanText = cleanText.replace(/```\s*/gi, '');
        
        const jsonMatch = cleanText.match(/\{[\s\S]*\}/);
        if (!jsonMatch) {
            throw new Error('No JSON object found in response');
        }
        
        cleanText = jsonMatch[0];
        const parsed = JSON.parse(cleanText);
        
        if (!parsed.summary || !parsed.classification || !Array.isArray(parsed.keyThemes)) {
            throw new Error('Missing required fields in parsed response');
        }

        const validClassifications = ['positive', 'mixed', 'negative'];
        if (!validClassifications.includes(parsed.classification)) {
            parsed.classification = 'mixed';
        }

        parsed.keyThemes = parsed.keyThemes
            .filter((theme: any) => typeof theme === 'string' && theme.trim().length > 0)
            .slice(0, 5)
            .map((theme: string) => theme.trim());

        return {
            summary: parsed.summary,
            classification: parsed.classification,
            keyThemes: parsed.keyThemes
        } as SentimentResult;

    } catch (error) {
        console.error('Sentiment analysis error:', error);
        
        // Enhanced fallback with cast consideration
        const fallbackSummary = generateFallbackSummary(
            title, 
            genre, 
            rating, 
            cast, 
            director, 
            releaseYear
        );
        
        return {
            summary: fallbackSummary,
            classification: getSentimentFromRating(rating),
            keyThemes: generateFallbackThemes(plot, genre, cast),
        };
    }
}

// Enhanced fallback summary generation
function generateFallbackSummary(
    title: string,
    genre: string,
    rating: string,
    cast?: string[],
    director?: string,
    releaseYear?: string
): string {
    const ratingNum = parseFloat(rating);
    let sentimentWord = 'mixed';
    if (!isNaN(ratingNum)) {
        if (ratingNum >= 7.0) sentimentWord = 'positive';
        else if (ratingNum < 5.0) sentimentWord = 'negative';
    }

    let summary = `"${title}"`;
    if (releaseYear) summary += ` (${releaseYear})`;
    summary += ` is a ${genre.toLowerCase()} film with a ${rating}/10 IMDb rating, indicating ${sentimentWord} audience reception.`;
    
    if (cast && cast.length > 0) {
        summary += ` The cast including ${cast.slice(0, 2).join(' and ')}`;
        if (director) summary += ` under the direction of ${director}`;
        summary += ` appears to have ${sentimentWord === 'positive' ? 'resonated well' : sentimentWord === 'negative' ? 'faced challenges' : 'received varied responses'} with viewers.`;
    } else if (director) {
        summary += ` Director ${director}'s vision ${sentimentWord === 'positive' ? 'has been well-received' : 'has received mixed reactions'}.`;
    }
    
    return summary;
}

// Enhanced fallback themes including cast-related themes
function generateFallbackThemes(plot: string, genre: string, cast?: string[]): string[] {
    const commonThemes = [
        'drama', 'action', 'romance', 'adventure', 
        'mystery', 'conflict', 'relationships', 
        'journey', 'discovery', 'challenge',
        'performance', 'chemistry', 'direction',
        'storytelling', 'visuals', 'pacing'
    ];
    
    const plotLower = plot.toLowerCase();
    const genreLower = genre.toLowerCase();
    
    let themes = commonThemes.filter(theme => 
        plotLower.includes(theme) || genreLower.includes(theme)
    );
    
    // Add cast-related themes if cast is provided
    if (cast && cast.length > 0) {
        themes.push('ensemble cast', 'star power');
    }
    
    // If no themes found, provide defaults based on genre
    if (themes.length === 0) {
        themes = ['entertainment', 'storytelling', genreLower];
    }
    
    return themes.slice(0, 5);
}

// Helper function to derive sentiment from IMDb rating
function getSentimentFromRating(rating: string): "positive" | "mixed" | "negative" {
    const ratingNum = parseFloat(rating);
    if (isNaN(ratingNum)) return "mixed";
    if (ratingNum >= 7.0) return "positive";
    if (ratingNum >= 5.0) return "mixed";
    return "negative";
}
