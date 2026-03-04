interface Props {
  message: string;
}

export default function ErrorCard({ message }: Props) {
  return (
    <div className="bg-red-500/10 border border-red-500/30 rounded-none p-6 text-center">
      <p className="text-red-400 text-2xl mb-2">⚠️</p>
      <p className="text-red-400 font-medium">{message}</p>
      <p className="text-gray-500 text-sm mt-1">
        Try a valid IMDb ID like tt0133093
      </p>
    </div>
  );
}
