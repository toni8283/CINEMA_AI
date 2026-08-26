interface Props {
  classification: 'positive' | 'mixed' | 'negative';
}

// Inline SVG Icons
const PositiveIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
  </svg>
);

const MixedIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9 9h.008v.008H9V9zm6 0h.008v.008H15V9zm-6 6h6" />
  </svg>
);

const NegativeIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
  </svg>
);

const config = {
  positive: {
    text: 'text-emerald-400',
    border: 'border-emerald-500/30',
    bg: 'bg-emerald-500/10',
    hoverBg: 'hover:bg-emerald-500/20',
    icon: PositiveIcon,
    label: 'Positive'
  },
  mixed: {
    text: 'text-amber-400',
    border: 'border-amber-500/30',
    bg: 'bg-amber-500/10',
    hoverBg: 'hover:bg-amber-500/20',
    icon: MixedIcon,
    label: 'Mixed'
  },
  negative: {
    text: 'text-red-400',
    border: 'border-red-500/30',
    bg: 'bg-red-500/10',
    hoverBg: 'hover:bg-red-500/20',
    icon: NegativeIcon,
    label: 'Negative'
  }
};

export default function SentimentBadge({ classification }: Props) {
  const c = config[classification];
  const Icon = c.icon;

  return (
    <div className={`inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full
                      ${c.bg} ${c.border} ${c.text} ${c.hoverBg}
                      border backdrop-blur-sm
                      transition-all duration-300 group cursor-default`}>
      <Icon className="w-4 h-4" />
      <span className="text-sm font-medium tracking-wide">
        {c.label}
      </span>
      <span className="text-xs opacity-60 font-normal">
        Sentiment
      </span>
    </div>
  );
}
