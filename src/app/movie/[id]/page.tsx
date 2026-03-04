'use client';
import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Movie, SentimentResult } from '@/types/movie';
import MovieHero from '@/components/movie/MovieHero';
import CastList from '@/components/movie/CastList';
import PlotSummary from '@/components/movie/PlotSummary';
import AIInsightPanel from '@/components/sentiment/AIInsightPanel';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import ErrorCard from '@/components/ui/ErrorCard';

export default function MoviePage() {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [sentiment, setSentiment] = useState<SentimentResult | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const router = useRouter();
  const params = useParams<{ id?: string | string[] }>();
  const movieId = Array.isArray(params.id) ? params.id[0] : params.id;

  useEffect(() => {
    async function loadMovieData() {
      if (!movieId) {
        setError('Movie ID is missing from the URL');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError('');

        // Step 1 — fetch movie details
        const movieRes = await fetch(`/api/movie?id=${encodeURIComponent(movieId)}`);
        const movieData = await movieRes.json();

        if (!movieRes.ok) {
          throw new Error(movieData.error || 'Movie not found');
        }

        setMovie(movieData);

        // Step 2 — fetch AI sentiment (runs after movie loads)
        const sentRes = await fetch('/api/sentiment', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            title: movieData.Title,
            plot: movieData.Plot,
            genre: movieData.Genre,
            rating: movieData.imdbRating,
          }),
        });

        const sentData = await sentRes.json();
        setSentiment(sentData);

      } catch (err: unknown) {
        const message = err instanceof Error ? err.message : 'Something went wrong';
        setError(message);
      } finally {
        setLoading(false);
      }
    }

    loadMovieData();
  }, [movieId]);

  return (
    <main className="relative min-h-screen bg-black px-4 py-10 overflow-hidden">
      <div className="red-ambient" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,0.78)_100%)]" />

      <div className="relative z-10 max-w-4xl mx-auto space-y-8">

        {/* Back button */}
        <button
          onClick={() => router.push('/')}
          className="text-red-200/90 hover:text-white text-sm tracking-wide
                     flex items-center gap-1 transition-colors duration-300
                     border border-red-900/70 bg-black/40 px-4 py-2 rounded-none"
        >
          ← Back to Search
        </button>

        {/* Loading state */}
        {loading && (
          <div className="flex justify-center py-20">
            <LoadingSpinner />
          </div>
        )}

        {/* Error state */}
        {error && !loading && (
          <ErrorCard message={error} />
        )}

        {/* Movie content */}
        {movie && !loading && !error && (
          <div className="space-y-8 animate-fade-in">
            
            {/* Hero section — poster, title, rating */}
            <div className="bg-black/60 border border-red-900/60 rounded-none p-6">
              <MovieHero movie={movie} />
            </div>

            {/* Plot */}
            <div className="bg-black/60 border border-red-900/60 rounded-none p-6">
              <PlotSummary plot={movie.Plot} />
            </div>

            {/* Cast */}
            <div className="bg-black/60 border border-red-900/60 rounded-none p-6">
              <CastList actors={movie.Actors} />
            </div>

            {/* AI Sentiment — shows loading state while sentiment loads */}
            <div className="bg-black/60 border border-red-900/60 rounded-none p-6">
              {sentiment ? (
                <AIInsightPanel sentiment={sentiment} />
              ) : (
                <div className="flex items-center gap-3 text-gray-500">
                  <div className="w-4 h-4 border-2 border-red-600
                                  border-t-transparent rounded-full animate-spin" />
                  <span className="text-sm">Running AI analysis...</span>
                </div>
              )}
            </div>

          </div>
        )}

      </div>
    </main>
  );
}
