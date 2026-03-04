import { GoogleGenerativeAI } from "@google/generative-ai";
import { SentimentResult } from "@/types/movie";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function analyzeSentiment(
    title: string,
    plot: string,
    genre: string,
    rating: string
): Promise<SentimentResult> {
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash'});
    const prompt = `
        You are movie analyst. Analyze sentiment for this movie.

        Tittle: ${title}
        Gernre: ${genre}
        IMDb Rating: ${rating}/10
        Plot: ${plot}
        Respond ONLY with valid JSON, no markdown, no extra text:
        {
          "summary": "2-3 sentences describing how audiences feel about this movie",
          "classification": "positive",
          "keyThemes": ["theme1", "theme2", "theme3"]
        }
        classification must be exactly one of: positive, mixed, negative
        `;
    const result = await model.generateContent(prompt);
    const text = result.response.text()
    // Strip markdown if Gemini wraps response in code blocks
    const clean = text.replace(/```json|```/g, '').trim();

    try {
        return JSON.parse(clean) as SentimentResult;

    } catch {
        // Fallback if parsing fails
        return {
            summary: 'Analysis unavailable at this moment.',
            classification: 'mixed',
            keyThemes: [],

        };
    }
}