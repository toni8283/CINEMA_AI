import { Movie } from '@/types/movie';

interface Props {
  movie: Movie;
}

export default function MovieHero({ movie }: Props) {
  return (
    <div className="flex flex-col md:flex-row gap-8">
      {/* Poster */}
      <div className="flex-shrink-0">
        <img
          src={movie.Poster !== 'N/A' ? movie.Poster : '/no-poster.png'}
          alt={movie.Title}
          className="w-48 h-auto rounded-none shadow-2xl mx-auto md:mx-0 border border-red-900/70"
        />
      </div>

      {/* Details */}
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl md:text-4xl font-bold text-white">
          {movie.Title}
        </h1>

        <div className="flex flex-wrap gap-2">
          {/* Genre badges */}
          {movie.Genre.split(',').map(g => (
            <span
              key={g}
              className="bg-red-900/25 text-red-200 text-xs px-3 py-1 rounded-none border border-red-800/70"
            >
              {g.trim()}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 text-gray-400 text-sm">
          <span>📅 {movie.Year}</span>
          <span>⏱ {movie.Runtime}</span>
          <span>🌐 {movie.Language}</span>
          <span>🎬 {movie.Director}</span>
        </div>

        {/* IMDb Rating */}
        <div className="flex items-center gap-2 mt-1">
          <span className="text-yellow-400 text-2xl font-bold">
            ⭐ {movie.imdbRating}
          </span>
          <span className="text-gray-500 text-sm">/ 10 on IMDb</span>
        </div>
      </div>
    </div>
  );
}
