interface Props {
  plot: string;
}

// Inline SVG Icons
const BookIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
  </svg>
);

const DocumentIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
  </svg>
);

const ChevronIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
  </svg>
);

export default function PlotSummary({ plot }: Props) {
  // Calculate word count for display
  const wordCount = plot.trim().split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / 200); // Average reading speed

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-red-900/30">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-red-900/20 rounded-md">
            <BookIcon className="w-5 h-5 text-red-400" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-white tracking-tight leading-tight">
              Plot Summary
            </h2>
            <p className="text-xs text-gray-500 mt-0.5">
              Story synopsis and details
            </p>
          </div>
        </div>
      </div>

      {/* Plot Content */}
      <div className="relative">
        {/* Decorative quote mark */}
        <div className="absolute -top-4 -left-2 text-6xl text-red-900/20 select-none leading-none">
          "
        </div>
        
        <p className="text-gray-400 leading-relaxed text-sm pl-6 relative z-10">
          {plot}
        </p>
      </div>

      {/* Metadata Footer */}
      <div className="pt-3 border-t border-red-900/30 flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-4">
          {/* Word Count */}
          <div className="flex items-center gap-1.5">
            <DocumentIcon className="w-3.5 h-3.5 text-red-400/60" />
            <span className="text-xs text-gray-500">
              {wordCount} words
            </span>
          </div>
          
          {/* Reading Time */}
          <div className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-red-400/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-xs text-gray-500">
              {readingTime} min read
            </span>
          </div>
        </div>

        {/* Expand/Collapse indicator (visual only) */}
        <div className="flex items-center gap-1 text-xs text-gray-600">
          <span>Synopsis</span>
          <ChevronIcon className="w-3 h-3" />
        </div>
      </div>
    </div>
  );
}
