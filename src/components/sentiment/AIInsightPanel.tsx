import { SentimentResult } from '@/types/movie';
import SentimentBadge from './SentimentBadge';

interface Props {
  sentiment: SentimentResult;
}

export default function AIInsightPanel({ sentiment }: Props) {
  return (
    <div className="relative">
      {/* Subtle left accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-red-600/60 via-red-900/30 to-transparent" />
      
      <div className="pl-6 space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div>
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Sentiment Analysis
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Audience reception & emotional response
            </p>
          </div>
          <SentimentBadge classification={sentiment.classification} />
        </div>

        {/* Summary - Editorial style with large quote */}
        <div className="relative">
          <span className="absolute -top-6 -left-2 text-7xl text-red-900/30 font-serif leading-none select-none">
            &ldquo;
          </span>
          <p className="text-gray-300 leading-relaxed text-base md:text-lg relative z-10 pt-4">
            {sentiment.summary}
          </p>
        </div>

        {/* Key Themes - Inline text style */}
        {sentiment.keyThemes.length > 0 && (
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-[0.25em]">
                Key Themes
              </h3>
              <span className="flex-1 h-px bg-gradient-to-r from-red-900/40 to-transparent" />
            </div>
            
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              {sentiment.keyThemes.map((theme, index) => (
                <div key={theme} className="flex items-center gap-3">
                  <span className="text-sm text-red-200/90 hover:text-red-100 transition-colors duration-300">
                    {theme}
                  </span>
                  {index < sentiment.keyThemes.length - 1 && (
                    <span className="text-red-900/40 text-xs">•</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Footer - Minimal meta info */}
        <div className="flex items-center gap-6 text-xs text-gray-600 border-t border-red-900/20 pt-4">
          <span>Real-time analysis</span>
          <span className="w-1 h-1 rounded-full bg-red-900/60" />
          <span>AI-powered insights</span>
        </div>
      </div>
    </div>
  );
}
