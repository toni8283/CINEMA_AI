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
      <div className="red-ambient" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,0.78)_100%)]" />

      <div className="relative z-10 flex flex-col items-center gap-8 text-center w-full max-w-3xl">
        
        {/* Logo/Title */}
        <div className="space-y-3">
          <p className="text-xs tracking-[0.35em] text-white/55 uppercase">Intelligent Movie Search</p>
          <h1 className="text-5xl md:text-7xl font-black text-red-600 tracking-tight">
            CINEMA AI
          </h1>
        </div>

        {/* Search */}
        <SearchBar onSearch={handleSearch} isLoading={isLoading} />

        {/* Example IDs */}
        <div className="flex flex-col items-center gap-3">
          <p className="text-gray-500 text-xs tracking-[0.25em] uppercase">Quick Picks</p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              { id: 'tt0133093', name: 'The Matrix' },
              { id: 'tt0468569', name: 'The Dark Knight' },
              { id: 'tt1375666', name: 'Inception' },
            ].map(movie => (
              <button
                key={movie.id}
                onClick={() => handleSearch(movie.id)}
                className="text-xs text-red-200 hover:text-white
                           bg-black/50 hover:bg-red-950/60
                           border border-red-900/70 hover:border-red-700
                           px-3 py-1.5 rounded-none transition-all duration-300"
              >
                {movie.name} ({movie.id})
              </button>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}
