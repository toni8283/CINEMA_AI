import { SentimentResult } from '@/types/movie';
import SentimentBadge from './SentimentBadge';

interface Props {
  sentiment: SentimentResult;
}

export default function AIInsightPanel({ sentiment }: Props) {
  return (
    <div className="bg-black/40 border border-red-900/60 rounded-none p-6 space-y-4">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <h2 className="text-xl font-semibold text-white">🤖 AI Sentiment Analysis</h2>
        <SentimentBadge classification={sentiment.classification} />
      </div>

      {/* AI Summary */}
      <p className="text-gray-400 leading-relaxed">{sentiment.summary}</p>

      {/* Key Themes */}
      {sentiment.keyThemes.length > 0 && (
        <div>
          <p className="text-gray-500 text-sm mb-2">Key Themes</p>
          <div className="flex flex-wrap gap-2">
            {sentiment.keyThemes.map(theme => (
              <span
                key={theme}
                className="bg-red-900/25 text-red-200 text-xs 
                           px-3 py-1 rounded-none border border-red-800/70"
              >
                {theme}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
