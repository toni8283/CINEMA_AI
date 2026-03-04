'use client';
import { useState } from 'react';

interface Props {
  onSearch: (id: string) => void;
  isLoading: boolean;
}

export default function SearchBar({ onSearch, isLoading }: Props) {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (!input.trim()) {
      setError('Please enter an IMDb ID');
      return;
    }
    if (!/^tt\d{7,8}$/.test(input.trim())) {
      setError('Invalid format. Example: tt0133093');
      return;
    }
    setError('');
    onSearch(input.trim());
  };

  // Allow pressing Enter to search
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSubmit();
  };

  return (
    <div className="w-full max-w-xl">
      <div className="flex gap-2 items-end">
        <div
          className="relative flex-1 after:content-[''] after:absolute after:left-0 after:-bottom-1
                     after:h-[2px] after:w-0 after:bg-red-600 after:transition-all after:duration-300
                     hover:after:w-full focus-within:after:w-full"
        >
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Enter IMDb ID (e.g. tt0133093)"
            className="w-full bg-black/70 text-white placeholder-gray-500 
                     border border-white/15 rounded-none px-4 py-3
                     focus:outline-none focus:border-red-700 transition-colors duration-300"
          />
        </div>
        <button
          onClick={handleSubmit}
          disabled={isLoading}
          className="bg-red-700 hover:bg-red-600 disabled:bg-red-950
                     disabled:cursor-not-allowed text-white font-medium 
                     px-6 py-3 rounded-none border border-red-900 transition-colors duration-300"
        >
          {isLoading ? 'Loading...' : 'Search'}
        </button>
      </div>
      {error && (
        <p className="text-red-400 text-sm mt-2 ml-1">{error}</p>
      )}
    </div>
  );
}
