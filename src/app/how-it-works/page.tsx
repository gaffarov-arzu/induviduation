import Link from 'next/link';

export default function HowItWorksPage() {
  return (
    <main className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-4xl flex-col gap-10 py-8 px-4">
      <header className="space-y-3 text-left">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-indigo-400/80">
          Necə işləyir
        </p>
        <h1 className="text-2xl font-semibold text-slate-50 sm:text-3xl">
          100% özünü tanıma journey-in
        </h1>
        <p className="max-w-2xl text-sm text-slate-400">
          Bu app səndən mükəmməllik gözləmir. Sadəcə hər gün 2–5 dəqiqəlik
          dürüstlük istəyir. Aydın tərəflərin, kölgə tərəflərin və digərlərinin
          reaksiyaları birləşib, 100%-də tam bir personaj yaradır.
        </p>
      </header>

      <section className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
            Addım 1
          </p>
          <h2 className="mt-2 text-sm font-semibold text-slate-50">
            Gündəlik aydınlıq
          </h2>
          <p className="mt-2 text-xs text-slate-400">
            Hər gün 2–5 dəqiqə özündən soruşursan: bugün səndə hansı aydın
            xüsusiyyət daha çox görünürdü? Səbir, empatiya, dürüstlük, səmimilik
            və s.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
            Addım 2
          </p>
          <h2 className="mt-2 text-sm font-semibold text-slate-50">
            Kölgə trigger-ləri
          </h2>
          <p className="mt-2 text-xs text-slate-400">
            Özündə çətin tərəflər görünəndə (qısqanclıq, qorxu, özünü
            günahlandırma, aqressiya) onları gizletmədən qısa şəkildə
            qeyd edirsən.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
            Addım 3
          </p>
          <h2 className="mt-2 text-sm font-semibold text-slate-50">
            100%-də personaj
          </h2>
          <p className="mt-2 text-xs text-slate-400">
            Toplanan məlumatlar yavaş-yavaş avatarını işıqlandırır. 100%-də
            həm aydın, həm kölgə tərəflərinlə inteqrə olunmuş şəxsiyyət
            xəritən görünür.
          </p>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2 rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
          <h3 className="text-sm font-semibold text-slate-50">
            Sən nə edirsən?
          </h3>
          <ul className="space-y-1.5 text-xs text-slate-400">
            <li>— Gündə bir neçə dəqiqəlik qısa cavablar yazırsan.</li>
            <li>— Özündə gördüyün aydın və kölgə tərəfləri qeyd edirsən.</li>
            <li>— Vaxtaşırı geriyə baxıb, pattern-lərə baxırsan.</li>
          </ul>
        </div>
        <div className="space-y-2 rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
          <h3 className="text-sm font-semibold text-slate-50">
            Sistem nə edir?
          </h3>
          <ul className="space-y-1.5 text-xs text-slate-400">
            <li>— Girdiyin məlumatları gündən-günə birləşdirir.</li>
            <li>— Hangi xüsusiyyətlərin tez-tez təkrarlanmasını izləyir.</li>
            <li>
              — Avatarının və proqres barının necə dəyişməli olduğunu hesablayır.
            </li>
          </ul>
        </div>
      </section>

      <section className="mt-auto flex justify-between border-t border-slate-800 pt-4 text-xs text-slate-400">
        <Link
          href="/"
          className="rounded-full border border-slate-700 px-4 py-1.5 text-xs font-medium text-slate-100 hover:border-slate-500"
        >
          Geri qayıt
        </Link>
        <Link
          href="/onboarding"
          className="rounded-full bg-indigo-500 px-5 py-1.5 text-xs font-medium text-white shadow shadow-indigo-500/30 hover:bg-indigo-400"
        >
          Səyahətə başla
        </Link>
      </section>
    </main>
  );
}

