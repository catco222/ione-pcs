export function CatalogSkeleton() {
  return (
    <div aria-busy="true" aria-live="polite" className="mt-6">
      <p className="text-sm text-[#3A4F66]">Loading the catalog…</p>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 6 }, (_, index) => (
          <div
            key={index}
            className="animate-pulse overflow-hidden rounded-lg border border-[#d5dee6] bg-white"
          >
            <div className="aspect-[4/3] bg-[#e1e8ed]" />
            <div className="space-y-3 p-4">
              <div className="h-3 w-24 rounded bg-[#e1e8ed]" />
              <div className="h-5 w-3/4 rounded bg-[#e1e8ed]" />
              <div className="h-4 w-1/2 rounded bg-[#e1e8ed]" />
              <div className="h-8 w-1/3 rounded bg-[#e1e8ed]" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ProductSkeleton() {
  return (
    <div aria-busy="true" aria-live="polite" className="mx-auto w-full max-w-[1290px] px-4 py-8 sm:px-6">
      <p className="text-sm text-[#3A4F66]">Loading this system…</p>
      <div className="mt-4 grid animate-pulse gap-8 lg:grid-cols-2">
        <div className="aspect-[4/3] rounded-lg bg-[#e1e8ed]" />
        <div className="space-y-4">
          <div className="h-4 w-32 rounded bg-[#e1e8ed]" />
          <div className="h-8 w-3/4 rounded bg-[#e1e8ed]" />
          <div className="h-16 w-1/2 rounded bg-[#e1e8ed]" />
          <div className="grid grid-cols-2 gap-3">
            {Array.from({ length: 4 }, (_, index) => (
              <div key={index} className="h-16 rounded bg-[#e1e8ed]" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function CompareSkeleton() {
  return (
    <div aria-busy="true" aria-live="polite">
      <p className="text-sm text-[#3A4F66]">Loading the comparison…</p>
      <div className="mt-4 grid animate-pulse gap-4 sm:grid-cols-3">
        {Array.from({ length: 3 }, (_, index) => (
          <div key={index} className="h-64 rounded-lg bg-[#e1e8ed]" />
        ))}
      </div>
    </div>
  );
}
