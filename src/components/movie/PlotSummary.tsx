interface Props {
  plot: string;
}

export default function PlotSummary({ plot }: Props) {
  return (
    <div>
      <h2 className="text-xl font-semibold text-white mb-3">📖 Plot</h2>
      <p className="text-gray-400 leading-relaxed">{plot}</p>
    </div>
  );
}