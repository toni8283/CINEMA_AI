interface Props {
  classification: 'positive' | 'mixed' | 'negative';
}

// Color map based on sentiment
const config = {
  positive: {
    bg: 'bg-green-500/20',
    border: 'border-green-500/30',
    text: 'text-green-400',
    emoji: '😊',
    label: 'Positive'
  },
  mixed: {
    bg: 'bg-yellow-500/20',
    border: 'border-yellow-500/30',
    text: 'text-yellow-400',
    emoji: '😐',
    label: 'Mixed'
  },
  negative: {
    bg: 'bg-red-500/20',
    border: 'border-red-500/30',
    text: 'text-red-400',
    emoji: '😞',
    label: 'Negative'
  }
};

export default function SentimentBadge({ classification }: Props) {
  const c = config[classification];

  return (
    <span className={`${c.bg} ${c.border} ${c.text} 
                      border text-sm font-medium 
                      px-4 py-1.5 rounded-none`}>
      {c.emoji} {c.label} Sentiment
    </span>
  );
}
