import { Movie } from '@/types/movie';

interface Props {
  movie: Movie;
}

export default function MovieHero({ movie }: Props) {
  return (
    <div className="flex flex-col md:flex-row gap-10">
      {/* Poster - with asymmetric frame */}
      <div className="relative flex-shrink-0 md:w-56">
        <div className="absolute -inset-2 border border-red-900/40 translate-x-3 translate-y-3 -z-10" />
        <div className="relative overflow-hidden border border-red-900/70 shadow-2xl">
          <img
            src={movie.Poster !== 'N/A' ? movie.Poster : '/no-poster.png'}
            alt={movie.Title}
            className="w-full h-auto block"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          
          {/* Rating stamp */}
          <div className="absolute bottom-3 left-3 flex flex-col items-center border border-yellow-500/40 bg-black/70 backdrop-blur-sm px-3 py-1.5">
            <span className="text-yellow-400 text-xl font-bold leading-none">{movie.imdbRating}</span>
            <span className="text-[10px] text-gray-400 tracking-widest uppercase mt-1">IMDb</span>
          </div>
        </div>
      </div>

      {/* Details */}
      <div className="flex-1 flex flex-col gap-5">
        {/* Title with rule line */}
        <div>
          <div className="flex items-baseline gap-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-none tracking-tight">
              {movie.Title}
            </h1>
            <span className="text-gray-600 text-sm font-mono whitespace-nowrap">
              {movie.Year}
            </span>
          </div>
          <div className="h-px bg-gradient-to-r from-red-900/60 to-transparent mt-4" />
        </div>

        {/* Genre as inline text */}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-red-300/80">
          {movie.Genre.split(',').map((g, i, arr) => (
            <span key={g} className="flex items-center gap-3">
              <span className="hover:text-red-200 cursor-default transition-colors">{g.trim()}</span>
              {i < arr.length - 1 && <span className="text-red-900/50">/</span>}
            </span>
          ))}
        </div>

        {/* Info grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-sm mt-2">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] text-gray-600 uppercase tracking-widest">Director</span>
            <span className="text-gray-300">{movie.Director}</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[10px] text-gray-600 uppercase tracking-widest">Runtime</span>
            <span className="text-gray-300">{movie.Runtime}</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[10px] text-gray-600 uppercase tracking-widest">Language</span>
            <span className="text-gray-300">{movie.Language}</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[10px] text-gray-600 uppercase tracking-widest">Cast</span>
            <span className="text-gray-300 truncate">
              {movie.Actors.split(',').slice(0, 2).join(', ')}
            </span>
          </div>
        </div>

        {/* Rating bar - minimal */}
        <div className="mt-auto pt-4">
          <div className="flex items-center gap-3">
            <span className="text-[10px] text-gray-600 uppercase tracking-widest">Rating</span>
            <div className="flex-1 h-[3px] bg-red-950/50 relative">
              <div 
                className="absolute inset-y-0 left-0 bg-red-400/70"
                style={{ width: `${(parseFloat(movie.imdbRating) / 10) * 100}%` }}
              />
            </div>
            <span className="text-sm text-gray-400 font-mono">{movie.imdbRating}/10</span>
          </div>
        </div>
      </div>
    </div>
  );
}
