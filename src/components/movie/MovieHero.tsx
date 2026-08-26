import { Movie } from '@/types/movie';

interface Props {
  movie: Movie;
}

// Inline SVG Icons
const CalendarIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
  </svg>
);

const ClockIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const GlobeIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m-18.432 0A8.959 8.959 0 013 12c0-.778.099-1.533.284-2.253" />
  </svg>
);

const DirectorIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
  </svg>
);

const StarIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
  </svg>
);

const AwardIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
  </svg>
);

export default function MovieHero({ movie }: Props) {
  return (
    <div className="flex flex-col md:flex-row gap-8">
      {/* Poster */}
      <div className="flex-shrink-0 relative group">
        <div className="relative overflow-hidden rounded-lg shadow-2xl border border-red-900/70">
          <img
            src={movie.Poster !== 'N/A' ? movie.Poster : '/no-poster.png'}
            alt={movie.Title}
            className="w-48 h-auto mx-auto md:mx-0 transform transition-transform duration-300 group-hover:scale-105"
          />
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        
        {/* Rating badge on poster */}
        {movie.imdbRating && parseFloat(movie.imdbRating) > 0 && (
          <div className="absolute top-2 right-2 bg-black/80 backdrop-blur-sm px-2 py-1 rounded-md border border-yellow-500/30">
            <span className="text-yellow-400 text-sm font-bold">{movie.imdbRating}</span>
          </div>
        )}
      </div>

      {/* Details */}
      <div className="flex flex-col gap-4">
        {/* Title Section */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
            {movie.Title}
          </h1>
          {movie.Year && (
            <p className="text-sm text-gray-500 mt-1">
              {movie.Year} • {movie.Type || 'Movie'}
            </p>
          )}
        </div>

        {/* Genre badges */}
        <div className="flex flex-wrap gap-2">
          {movie.Genre.split(',').map(g => (
            <span
              key={g}
              className="group inline-flex items-center gap-1.5
                         bg-red-900/20 text-red-200 text-xs font-medium
                         px-3 py-1.5 rounded-md border border-red-800/50
                         hover:bg-red-900/30 hover:border-red-700/60
                         transition-all duration-200 cursor-default"
            >
              <span className="w-1 h-1 rounded-full bg-red-400/60 group-hover:bg-red-400"></span>
              {g.trim()}
            </span>
          ))}
        </div>

        {/* Movie Metadata */}
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-gray-400 text-sm">
          {movie.Year && (
            <div className="flex items-center gap-2">
              <CalendarIcon className="w-4 h-4 text-red-400/70" />
              <span>{movie.Year}</span>
            </div>
          )}
          
          {movie.Runtime && movie.Runtime !== 'N/A' && (
            <div className="flex items-center gap-2">
              <ClockIcon className="w-4 h-4 text-red-400/70" />
              <span>{movie.Runtime}</span>
            </div>
          )}
          
          {movie.Language && movie.Language !== 'N/A' && (
            <div className="flex items-center gap-2">
              <GlobeIcon className="w-4 h-4 text-red-400/70" />
              <span>{movie.Language}</span>
            </div>
          )}
          
          {movie.Director && movie.Director !== 'N/A' && (
            <div className="flex items-center gap-2">
              <DirectorIcon className="w-4 h-4 text-red-400/70" />
              <span>{movie.Director}</span>
            </div>
          )}
        </div>

        {/* IMDb Rating Section */}
        <div className="flex items-center gap-4 mt-2 p-4 bg-black/30 rounded-lg border border-red-900/40">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-yellow-500/10 rounded-md">
              <StarIcon className="w-6 h-6 text-yellow-400" />
            </div>
            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-yellow-400 leading-none">
                  {movie.imdbRating}
                </span>
                <span className="text-sm text-gray-500">/ 10</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">IMDb Rating</p>
            </div>
          </div>

          {/* Rating indicator bar */}
          <div className="flex-1 hidden sm:block">
            <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-yellow-500/70 rounded-full"
                style={{ width: `${(parseFloat(movie.imdbRating) / 10) * 100}%` }}
              />
            </div>
            <div className="flex justify-between text-[10px] text-gray-600 mt-1">
              <span>0</span>
              <span>5</span>
              <span>10</span>
            </div>
          </div>
        </div>

        {/* Awards/Additional Info */}
        {movie.Awards && movie.Awards !== 'N/A' && (
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <AwardIcon className="w-4 h-4 text-red-400/60" />
            <span className="line-clamp-1">{movie.Awards}</span>
          </div>
        )}
      </div>
    </div>
  );
}
