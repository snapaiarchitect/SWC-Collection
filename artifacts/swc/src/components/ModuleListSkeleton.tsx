export function ModuleListSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0 pl-2" aria-hidden="true">
      {Array.from({ length: 10 }).map((_, i) => (
        <div
          key={i}
          className="flex items-center gap-5 py-5 border-b border-foreground/[0.04]"
        >
          <div className="w-6 h-6 rounded-full animate-shimmer shrink-0" />
          <div className="flex-1 space-y-2">
            <div
              className="h-2.5 rounded-full animate-shimmer"
              style={{ width: `${55 + (i % 4) * 10}%` }}
            />
            <div className="h-2 rounded-full animate-shimmer w-16" />
          </div>
        </div>
      ))}
    </div>
  );
}
