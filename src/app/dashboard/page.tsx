import Link from 'next/link';

export default function DashboardPage() {
  return (
    <main className="flex min-h-[calc(100vh-4rem)] items-center justify-center">
      <div className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-[1px] shadow-xl shadow-indigo-950/40">
        <div className="grid gap-0 bg-slate-950/80 backdrop-blur-xl sm:grid-cols-[1.2fr,1fr]">
          {/* Sol: mətn və bugünkü addım */}
          <div className="flex flex-col gap-5 p-6 sm:p-8">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-indigo-400/80">
                Sənin journey-in
              </p>
              <h1 className="mt-2 text-2xl font-semibold text-slate-50 sm:text-3xl">
                Hər gün bir az daha aydınlıq
              </h1>
              <p className="mt-3 text-sm text-slate-400">
                Özünü yazdıqca, trigger-lərini gördükcə və kölgə tərəflərini
                qəbul etdikcə personajın formalaşır. Bu panel sənin gündəlik
                başlanğıc nöqtəndir.
              </p>
            </div>

            <div className="space-y-3 rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                    Bugünkü addım
                  </p>
                  <p className="mt-1 text-sm text-slate-100">
                    3–5 dəqiqəlik aydınlıq və kölgə check-in.
                  </p>
                </div>
                <Link
                  href="/daily"
                  className="rounded-full bg-indigo-500 px-4 py-1.5 text-xs font-medium text-white shadow shadow-indigo-500/40 hover:bg-indigo-400"
                >
                  Günlük formu aç
                </Link>
              </div>
              <p className="text-xs text-slate-400">
                Özünü yorma, burada uzun esse lazım deyil. Bir-iki cümlə belə
                olsa, davamlılıq ən vacib hissədir.
              </p>
            </div>
          </div>

          {/* Sağ: avatar və proqres vizualı */}
          <div className="relative flex flex-col justify-between border-t border-slate-800/60 bg-gradient-to-b from-slate-900/80 via-slate-950 to-slate-950/90 p-6 sm:border-l sm:border-t-0 sm:p-7">
            <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-indigo-500/20 blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 right-0 h-40 w-40 rounded-full bg-fuchsia-500/10 blur-3xl" />

            <div className="relative flex flex-col items-center gap-3">
              <div className="relative h-28 w-28 rounded-full border border-slate-700/60 bg-slate-950/80 shadow-inner shadow-slate-900">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-slate-900 via-slate-800 to-indigo-500/70 opacity-70" />
                <div className="absolute inset-[18%] rounded-full border border-slate-700/70" />
                <div className="absolute inset-[32%] rounded-full bg-slate-950/90" />
              </div>
              <div className="text-center">
                <p className="text-xs font-medium text-slate-300 uppercase tracking-[0.18em]">
                  Personajın
                </p>
                <p className="mt-1 text-sm text-slate-400">
                  Hələ siluetdir. Yazdıqca aydınlanacaq.
                </p>
              </div>
            </div>

            <div className="relative mt-6 space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-300">
                <span>Proqres</span>
                <span className="font-medium text-indigo-300">~12%</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-slate-800">
                <div className="h-full w-1/6 rounded-full bg-gradient-to-r from-indigo-400 to-fuchsia-500" />
              </div>
              <p className="text-[11px] leading-relaxed text-slate-500">
                Hər bir günlük entry və gələcək feedback-lər bu zolağı bir az
                daha dolduracaq. 100%-də həm aydın, həm kölgə tərəflərdən
                ibarət inteqrə olunmuş xəritə açılacaq.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

