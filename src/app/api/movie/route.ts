import { NextRequest, NextResponse } from 'next/server';
import { fetchMovieById } from '@/lib/omdb';
import { isValidImdbId, sanitizeImdbId } from '@/lib/validator';

export async function GET(req: NextRequest) {
  const id = req.nextUrl.searchParams.get('id');

  if (!id) {
    return NextResponse.json(
      { error: 'Movie ID is required' },
      { status: 400 }
    );
  }

  const cleanID = sanitizeImdbId(id);

  if (!isValidImdbId(cleanID)) {
    return NextResponse.json(
      { error: 'Invalid IMDb ID, format must be tt1234567' },
      { status: 400 }
    );
  }

  try {
    const movie = await fetchMovieById(cleanID);
    return NextResponse.json(movie);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Movie not found';
    return NextResponse.json(
      { error: message },
      { status: 404 }
    );
  }
}
