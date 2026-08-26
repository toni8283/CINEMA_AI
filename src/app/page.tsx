'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import SearchBar from '@/components/search/SearchBar';

const MOVIE_POOL = [
  { id: 'tt0133093', name: 'The Matrix', year: '1999' },
  { id: 'tt0468569', name: 'The Dark Knight', year: '2008' },
  { id: 'tt1375666', name: 'Inception', year: '2010' },
  { id: 'tt0111161', name: 'The Shawshank Redemption', year: '1994' },
  { id: 'tt0068646', name: 'The Godfather', year: '1972' },
  { id: 'tt0109830', name: 'Forrest Gump', year: '1994' },
  { id: 'tt0137523', name: 'Fight Club', year: '1999' },
  { id: 'tt0110912', name: 'Pulp Fiction', year: '1994' },
  { id: 'tt0120737', name: 'LOTR: Fellowship', year: '2001' },
  { id: 'tt0167260', name: 'LOTR: Return of King', year: '2003' },
  { id: 'tt0816692', name: 'Interstellar', year: '2014' },
  { id: 'tt0114369', name: 'Se7en', year: '1995' },
  { id: 'tt0102926', name: 'Silence of the Lambs', year: '1991' },
  { id: 'tt0120689', name: 'The Green Mile', year: '1999' },
  { id: 'tt0482571', name: 'The Prestige', year: '2006' },
  { id: 'tt0209144', name: 'Memento', year: '2000' },
  { id: 'tt0172495', name: 'Gladiator', year: '2000' },
  { id: 'tt0407887', name: 'The Departed', year: '2006' },
  { id: 'tt0118799', name: 'Life Is Beautiful', year: '1997' },
  { id: 'tt0099685', name: 'Goodfellas', year: '1990' },
  { id: 'tt0076759', name: 'Star Wars: A New Hope', year: '1977' },
  { id: 'tt0088763', name: 'Back to the Future', year: '1985' },
  { id: 'tt0108052', name: "Schindler's List", year: '1993' },
  { id: 'tt0080684', name: 'Empire Strikes Back', year: '1980' },
  { id: 'tt0120815', name: 'Saving Private Ryan', year: '1998' },
  { id: 'tt0110413', name: 'Léon: The Professional', year: '1994' },
  { id: 'tt0120586', name: 'American History X', year: '1998' },
  { id: 'tt0090605', name: 'Aliens', year: '1986' },
  { id: 'tt0169547', name: 'American Beauty', year: '1999' },
  { id: 'tt0081505', name: 'The Shining', year: '1980' },
  { id: 'tt0071562', name: 'Godfather Part II', year: '1974' },
  { id: 'tt0112573', name: 'Braveheart', year: '1995' },
  { id: 'tt1345836', name: 'The Dark Knight Rises', year: '2012' },
  { id: 'tt0993846', name: 'The Wolf of Wall Street', year: '2013' },
  { id: 'tt2267998', name: 'Gone Girl', year: '2014' },
  { id: 'tt0910970', name: 'WALL·E', year: '2008' },
  { id: 'tt1049413', name: 'Up', year: '2009' },
  { id: 'tt0266543', name: 'Finding Nemo', year: '2003' },
  { id: 'tt0317705', name: 'The Incredibles', year: '2004' },
  { id: 'tt2096673', name: 'Inside Out', year: '2015' },
  { id: 'tt0435761', name: 'Toy Story 3', year: '2010' },
  { id: 'tt0120338', name: 'Titanic', year: '1997' },
  { id: 'tt0167404', name: 'The Sixth Sense', year: '1999' },
  { id: 'tt0253474', name: 'The Pianist', year: '2002' },
  { id: 'tt6751668', name: 'Parasite', year: '2019' },
  { id: 'tt7286456', name: 'Joker', year: '2019' },
  { id: 'tt2582802', name: 'Whiplash', year: '2014' },
  { id: 'tt0477348', name: 'No Country for Old Men', year: '2007' },
  { id: 'tt0119217', name: 'Good Will Hunting', year: '1997' },
  { id: 'tt1853728', name: 'Django Unchained', year: '2012' },
];

function getRandomMovies(count: number) {
  const shuffled = [...MOVIE_POOL].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(false);
  const [quickPicks, setQuickPicks] = useState<typeof MOVIE_POOL>([]);
  const router = useRouter();

  useEffect(() => {
    setQuickPicks(getRandomMovies(18));
  }, []);

  const handleSearch = (id: string) => {
    setIsLoading(true);
    router.push(`/movie/${id}`);
  };

  const handleRefresh = () => {
    setQuickPicks(getRandomMovies(18));
  };

  return (
    <main className="relative min-h-screen bg-black flex flex-col items-center justify-center px-4 py-10 overflow-hidden">
      <div className="red-ambient" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,0.78)_100%)]" />

      <div className="relative z-10 flex flex-col items-center gap-8 text-center w-full max-w-5xl">
        
        {/* Logo/Title */}
        <div className="space-y-3">
          <p className="text-xs tracking-[0.35em] text-white/55 uppercase">Intelligent Movie Search</p>
          <h1 className="text-5xl md:text-7xl font-black text-red-600 tracking-tight">
            CINEMA AI
          </h1>
        </div>

        {/* Search */}
        <SearchBar onSearch={handleSearch} isLoading={isLoading} />

        {/* Quick Picks */}
        <div className="flex flex-col items-center gap-4 w-full">
          <div className="flex items-center gap-4">
            <p className="text-gray-500 text-xs tracking-[0.25em] uppercase">Quick Picks</p>
            <button
              onClick={handleRefresh}
              disabled={isLoading}
              className="text-gray-600 hover:text-red-300 text-xs transition-colors disabled:opacity-50"
              title="Shuffle movies"
            >
              ↻ Shuffle
            </button>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 w-full">
            {quickPicks.map(movie => (
              <button
                key={movie.id}
                onClick={() => handleSearch(movie.id)}
                disabled={isLoading}
                className="text-left text-xs text-red-200 hover:text-white
                           bg-black/50 hover:bg-red-950/60
                           border border-red-900/70 hover:border-red-700
                           px-3 py-2.5 rounded-none transition-all duration-300
                           disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="block font-medium truncate">{movie.name}</span>
                <span className="block text-gray-600 text-[10px] mt-0.5">{movie.year}</span>
              </button>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}
