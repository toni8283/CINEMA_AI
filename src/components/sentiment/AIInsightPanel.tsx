import { SentimentResult } from '@/types/movie';
import SentimentBadge from './SentimentBadge';

interface Props {
  sentiment: SentimentResult;
}

// Inline SVG Icons
const SparklesIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
  </svg>
);

const MessageIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
  </svg>
);

const TagIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
  </svg>
);

const ActivityIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
  </svg>
);

const TrendingIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
  </svg>
);

export default function AIInsightPanel({ sentiment }: Props) {
  return (
    <div className="bg-black/40 border border-red-900/60 rounded-lg p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-3 pb-4 border-b border-red-900/30">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-red-900/20 rounded-md">
            <SparklesIcon className="w-5 h-5 text-red-400" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-white tracking-tight leading-tight">
              Sentiment Analysis
            </h2>
            <p className="text-xs text-gray-500 mt-0.5">
              AI-powered audience insights
            </p>
          </div>
        </div>
        <SentimentBadge classification={sentiment.classification} />
      </div>

      {/* Summary Section */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <MessageIcon className="w-4 h-4 text-red-400/70" />
          <h3 className="text-sm font-medium text-gray-300 uppercase tracking-wider">
            Analysis Summary
          </h3>
        </div>
        <p className="text-gray-400 leading-relaxed text-sm pl-6">
          {sentiment.summary}
        </p>
      </div>

      {/* Key Themes Section */}
      {sentiment.keyThemes.length > 0 && (
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <TagIcon className="w-4 h-4 text-red-400/70" />
            <h3 className="text-sm font-medium text-gray-300 uppercase tracking-wider">
              Key Themes
            </h3>
          </div>
          <div className="flex flex-wrap gap-2 pl-6">
            {sentiment.keyThemes.map((theme) => (
              <span
                key={theme}
                className="group inline-flex items-center gap-1.5
                           bg-red-900/20 text-red-200 text-xs font-medium
                           px-3 py-1.5 rounded-md border border-red-800/50
                           hover:bg-red-900/30 hover:border-red-700/60
                           transition-all duration-200 cursor-default"
              >
                <span className="w-1 h-1 rounded-full bg-red-400/60 group-hover:bg-red-400"></span>
                {theme}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="pt-4 border-t border-red-900/30 flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <ActivityIcon className="w-3.5 h-3.5" />
          <span>Real-time sentiment detection</span>
        </div>
        <div className="flex items-center gap-1.5">
          <TrendingIcon className="w-3.5 h-3.5 text-red-400/70" />
          <span className="text-xs text-gray-500">Confidence-based analysis</span>
        </div>
      </div>
    </div>
  );
}
