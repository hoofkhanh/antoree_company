
export default function Loading() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-4">
      {Array.from({ length: 8 }).map((_, index) => (
        <SkeletonCard key={index} />
      ))}
    </div>
  );
}

const SkeletonCard = () => {
  return (
    <div className="h-48 bg-gray-200 rounded-md animate-pulse" />
  )
}
