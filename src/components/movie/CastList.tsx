interface Props {
  actors: string;
}

export default function CastList({ actors }: Props) {
  const castArray = actors.split(',').map(a => a.trim());

  return (
    <div>
      <h2 className="text-xl font-semibold text-white mb-3">🎭 Cast</h2>
      <div className="flex flex-wrap gap-2">
        {castArray.map(actor => (
          <span
            key={actor}
            className="bg-black/50 text-gray-300 text-sm px-3 py-1 
                       rounded-none border border-red-900/60"
          >
            {actor}
          </span>
        ))}
      </div>
    </div>
  );
}
