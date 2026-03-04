import { NextRequest, NextResponse } from "next/server";
import { analyzeSentiment } from "@/lib/gemini";

export async function POST(req: NextRequest) {
    try{
        const { title, plot, genre, rating} = await req.json();
        if ( !title || !plot ){
            return NextResponse.json(
                {error: 'Title and plot are required'},
                {status: 400}
            );
        }
        const sentiment = await analyzeSentiment(title, plot, genre, rating);
        return NextResponse.json(sentiment);
        
    } catch (err: any) {
        return NextResponse.json(
            {summary: 'sentiment analysis unavailable at this time', classification: 'mixed', keyThemes: []}

        );

    }
  }
