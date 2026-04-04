export default function Loading() {
  return (
    <section className="fade-up space-y-6">
      <div className="page-hero animate-pulse">
        <div className="h-3 w-28 rounded-full bg-bark/10" />
        <div className="mt-4 h-12 w-3/4 rounded-2xl bg-bark/10" />
        <div className="mt-4 h-5 w-full max-w-2xl rounded-full bg-bark/10" />
        <div className="mt-2 h-5 w-5/6 max-w-xl rounded-full bg-bark/10" />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="section-card animate-pulse">
            <div className="h-48 rounded-2xl bg-bark/10" />
            <div className="mt-4 h-6 w-2/3 rounded-full bg-bark/10" />
            <div className="mt-3 h-4 w-full rounded-full bg-bark/10" />
            <div className="mt-2 h-4 w-5/6 rounded-full bg-bark/10" />
          </div>
        ))}
      </div>
    </section>
  );
}