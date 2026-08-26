interface Props {
  actors: string;
}

// Inline SVG Icons
const UsersIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
  </svg>
);

const UserIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
  </svg>
);

const StarIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
  </svg>
);

export default function CastList({ actors }: Props) {
  const castArray = actors.split(',').map(a => a.trim()).filter(Boolean);

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-red-900/30">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-red-900/20 rounded-md">
            <UsersIcon className="w-5 h-5 text-red-400" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-white tracking-tight leading-tight">
              Cast
            </h2>
            <p className="text-xs text-gray-500 mt-0.5">
              {castArray.length} {castArray.length === 1 ? 'actor' : 'actors'}
            </p>
          </div>
        </div>
      </div>

      {/* Cast List */}
      <div className="flex flex-wrap gap-2">
        {castArray.map((actor, index) => (
          <div
            key={actor}
            className="group inline-flex items-center gap-2
                       bg-black/50 text-gray-300 text-sm
                       px-3 py-2 rounded-md border border-red-900/60
                       hover:bg-red-900/20 hover:border-red-700/70
                       hover:text-white transition-all duration-200"
          >
            {/* Actor Avatar Placeholder */}
            <div className="w-6 h-6 rounded-full bg-red-900/30 border border-red-800/50 
                          flex items-center justify-center flex-shrink-0
                          group-hover:bg-red-900/40 transition-colors">
              <UserIcon className="w-3.5 h-3.5 text-red-400/80" />
            </div>
            
            {/* Actor Name */}
            <span className="font-medium">
              {actor}
            </span>

            {/* Lead Actor Indicator for first actor */}
            {index === 0 && (
              <span className="inline-flex items-center gap-1 ml-1">
                <StarIcon className="w-3 h-3 text-yellow-500/80" />
                <span className="text-[10px] text-yellow-500/80 font-medium uppercase tracking-wide">
                  Lead
                </span>
              </span>
            )}
          </div>
        ))}
      </div>

      {/* Footer */}
      {castArray.length > 0 && (
        <div className="pt-3 flex items-center gap-2 text-xs text-gray-500">
          <UsersIcon className="w-3.5 h-3.5 text-red-400/60" />
          <span>Ensemble cast featuring {castArray.length} performers</span>
        </div>
      )}
    </div>
  );
}
