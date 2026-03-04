export interface Movie {
  imdbID: string;
  Title: string;
  Poster: string;
  Year: string;
  imdbRating: string;
  Plot: string;
  Actors: string;
  Director: string;
  Genre: string;
  Runtime: string;
  Language: string;
  Response: string;
  Error?: string;
}

export interface SentimentResult {
  summary: string;
  classification: 'positive' | 'mixed' | 'negative';
  keyThemes: string[];
}