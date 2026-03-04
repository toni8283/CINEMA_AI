export default function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <div className="w-12 h-12 border-4 border-red-600 border-t-transparent rounded-full animate-spin" />
      <p className="text-gray-400 text-sm animate-pulse">Analyzing movie...</p>
    </div>
  );
}
