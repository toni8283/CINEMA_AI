import { GoogleGenerativeAI } from "@google/generative-ai";
import { SentimentResult } from "@/types/movie";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function analyzeSentiment(
    title: string,
    plot: string,
    genre: string,
    rating: string
): Promise<SentimentResult> {
    try {
        const model = genAI.getGenerativeModel({ 
            model: 'gemini-1.5-flash',
            generationConfig: {
                temperature: 0.3, // Lower temperature for more consistent output
                maxOutputTokens: 500,
            }
        });

        const prompt = `Analyze the audience sentiment for this movie and provide a structured response.

Movie Details:
- Title: ${title}
- Genre: ${genre}
- IMDb Rating: ${rating}/10
- Plot: ${plot}

Provide your analysis in valid JSON format with these exact fields:
{
  "summary": "A concise 2-3 sentence analysis of audience sentiment",
  "classification": "positive|mixed|negative",
  "keyThemes": ["3-5 main themes or emotions"]
}

Rules:
- classification must be exactly "positive", "mixed", or "negative"
- keyThemes should be lowercase, 1-3 words each
- Keep summary factual and analytical
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

        // Log the raw response for debugging (remove in production)
        console.log('Raw Gemini response:', text);

        // More robust JSON extraction
        let cleanText = text.trim();
        
        // Remove markdown code blocks if present
        cleanText = cleanText.replace(/```json\s*/gi, '');
        cleanText = cleanText.replace(/```\s*/gi, '');
        
        // Find JSON object in the response
        const jsonMatch = cleanText.match(/\{[\s\S]*\}/);
        if (!jsonMatch) {
            throw new Error('No JSON object found in response');
        }
        
        cleanText = jsonMatch[0];
        
        // Attempt to parse the JSON
        const parsed = JSON.parse(cleanText);
        
        // Validate required fields
        if (!parsed.summary || !parsed.classification || !Array.isArray(parsed.keyThemes)) {
            throw new Error('Missing required fields in parsed response');
        }

        // Validate classification value
        const validClassifications = ['positive', 'mixed', 'negative'];
        if (!validClassifications.includes(parsed.classification)) {
            parsed.classification = 'mixed'; // Default to mixed if invalid
        }

        // Ensure keyThemes are strings and limit to reasonable number
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
        // Log the actual error for debugging
        console.error('Sentiment analysis error:', error);
        
        // Create a meaningful fallback response
        return {
            summary: `Based on the available information, "${title}" (${genre}, rated ${rating}/10) appears to evoke a ${getSentimentFromRating(rating)} response from audiences. The plot elements suggest themes that resonate with viewers.`,
            classification: getSentimentFromRating(rating),
            keyThemes: extractThemesFromPlot(plot),
        };
    }
}

// Helper function to derive sentiment from IMDb rating
function getSentimentFromRating(rating: string): "positive" | "mixed" | "negative" {
    const ratingNum = parseFloat(rating);
    if (isNaN(ratingNum)) return "mixed";
    if (ratingNum >= 7.0) return "positive";
    if (ratingNum >= 5.0) return "mixed";
    return "negative";
}

// Helper function to extract basic themes from plot
function extractThemesFromPlot(plot: string): string[] {
    const commonThemes = [
        'drama', 'action', 'romance', 'adventure', 
        'mystery', 'conflict', 'relationships', 
        'journey', 'discovery', 'challenge'
    ];
    
    const plotLower = plot.toLowerCase();
    return commonThemes.filter(theme => plotLower.includes(theme)).slice(0, 4);
}
