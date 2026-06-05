import { Skeleton } from '@/components/ui/skeleton';

export default function AdminLoading() {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8 animate-pulse">
      <div className="flex justify-between items-center">
        <Skeleton className="h-10 w-64 bg-cacao-200" />
        <Skeleton className="h-10 w-32 bg-cacao-200" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map(i => (
          <Skeleton key={i} className="h-32 rounded-xl bg-cacao-100" />
        ))}
      </div>

      <div className="bg-white rounded-xl border border-cacao-200 shadow-sm p-6 space-y-4">
        <Skeleton className="h-8 w-48 bg-cacao-200" />
        <div className="space-y-2 mt-4">
          {[1, 2, 3, 4, 5].map(i => (
            <Skeleton key={i} className="h-12 w-full bg-cacao-100" />
          ))}
        </div>
      </div>
    </div>
  );
}
