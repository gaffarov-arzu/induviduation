import Link from 'next/link';

export default function DashboardPage() {
  // Sadə statik dashboard skeleti – auth sonradan əlavə olunacaq.
  return (
    <main className="mx-auto flex max-w-2xl flex-col gap-6 py-8">
      <section>
        <h1 className="text-xl font-semibold text-slate-50">
          Dashboard köhnə route
        </h1>
        <p className="mt-1 text-xs text-slate-500">
          Zəhmət olmasa yeni dashboard ünvanından istifadə et:
        </p>
      </section>

      <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
              Yeni ünvan
            </p>
            <p className="mt-1 text-sm text-slate-100">/dashboard</p>
          </div>
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-500" />
        </div>
        <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-slate-800">
          <div className="h-full w-1/6 rounded-full bg-indigo-500" />
        </div>
      </section>

      <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h2 className="text-sm font-semibold text-slate-50">
              Dashboard-a keç
            </h2>
            <p className="mt-1 text-xs text-slate-400">
              Əsas panel üçün yeni route əlavə olundu.
            </p>
          </div>
          <Link
            href="/dashboard"
            className="rounded-full bg-indigo-500 px-4 py-1.5 text-xs font-medium text-white hover:bg-indigo-400"
          >
            Aç
          </Link>
        </div>
      </section>
    </main>
  );
}

