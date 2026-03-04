import { Movie } from "@/types/movie";
export async function fetchMovieById(imdbId: string): Promise<Movie> {
  const apikey = process.env.OMDB_API_KEY;
  const url = `https://www.omdbapi.com/?i=${imdbId}&apikey=${apikey}`;

  const res = await fetch(url,{ next: { revalidate: 3600 } });

  if (!res.ok) {
    throw new Error('Failed to connect to movie database');

  }

  const data: Movie = await res.json();

  if (data.Response == 'False') {
    throw new Error(data.Error || 'Movie not found');
  }
  return data;

}