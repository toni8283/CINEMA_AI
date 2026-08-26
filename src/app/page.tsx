'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import SearchBar from '@/components/search/SearchBar';

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSearch = (id: string) => {
    setIsLoading(true);
    router.push(`/movie/${id}`);
  };

  return (
    <main className="relative min-h-screen bg-black flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* Ambient background */}
      <div className="red-ambient" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,0.78)_100%)]" />
      
      {/* Subtle grid pattern for premium feel */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(220,38,38,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(220,38,38,0.5) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }} />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-10 text-center w-full max-w-4xl">
        
        {/* Logo/Title Section */}
        <div className="space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-950/30 border border-red-900/40">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            <p className="text-sm tracking-[0.2em] text-red-200/80 uppercase font-medium">
              Intelligent Movie Search
            </p>
          </div>
          
          {/* Main Title */}
          <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-red-500 via-red-600 to-red-800 tracking-tight leading-none">
            CINEMA AI
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Discover deep insights and sentiment analysis for your favorite films
          </p>
        </div>

        {/* Search Section */}
        <div className="w-full space-y-4">
          <SearchBar onSearch={handleSearch} isLoading={isLoading} />
          
          {/* Loading indicator */}
          {isLoading && (
            <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
              <span className="w-4 h-4 border-2 border-red-600 border-t-transparent rounded-full animate-spin" />
              <span>Searching...</span>
            </div>
          )}
        </div>

        {/* Quick Picks Section */}
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-red-900/50" />
            <p className="text-sm text-gray-400 tracking-[0.2em] uppercase font-medium">
              Quick Picks
            </p>
            <span className="h-px w-8 bg-red-900/50" />
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { id: 'tt0133093', name: 'The Matrix', year: '1999' },
              { id: 'tt0468569', name: 'The Dark Knight', year: '2008' },
              { id: 'tt1375666', name: 'Inception', year: '2010' },
            ].map(movie => (
              <button
                key={movie.id}
                onClick={() => handleSearch(movie.id)}
                disabled={isLoading}
                className="group flex flex-col items-center gap-1
                           text-left px-6 py-4 rounded-lg
                           bg-black/40 hover:bg-red-950/40
                           border border-red-900/50 hover:border-red-700/70
                           transition-all duration-300 hover:scale-[1.02]
                           disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="text-base font-semibold text-red-200 group-hover:text-white transition-colors">
                  {movie.name}
                </span>
                <span className="text-xs text-gray-500 font-mono">
                  {movie.year}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Footer hint */}
        <div className="text-xs text-gray-600">
          <span>Search by movie title or IMDb ID</span>
        </div>
      </div>
    </main>
  );
}
