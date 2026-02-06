import Link from 'next/link';

export default function OnboardingPage() {
  return (
    <main className="mx-auto flex max-w-2xl flex-col gap-6 py-8">
      <section>
        <h1 className="text-2xl font-semibold text-slate-50">
          Səyahətə xoş gəlmisən
        </h1>
        <p className="mt-2 text-sm text-slate-400">
          Bu journey boyunca hər gün qısa qeydlərlə aydın və kölgə tərəflərini
          kəşf edəcəksən. İstədiyin zaman dayandırıb yenidən başlaya bilərsən.
        </p>
      </section>

      <section className="space-y-3 rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-sm text-slate-300">
        <div>
          <p className="font-medium text-slate-100">1. Gündəlik yoxlama</p>
          <p className="text-slate-400">
            Hər gün 2–5 dəqiqə ayırıb hisslərini, günün aydın tərəfini və
            mümkün kölgə trigger-lərini yazacaqsan.
          </p>
        </div>
        <div>
          <p className="font-medium text-slate-100">
            2. Aydın və kölgə xəritəsi
          </p>
          <p className="text-slate-400">
            Zamanla, öz qeydlərin və gələcək feedback-lər əsasında şəxsiyyət
            xəritən formalaşacaq.
          </p>
        </div>
        <div>
          <p className="font-medium text-slate-100">
            3. 100%-də personajın açılır
          </p>
          <p className="text-slate-400">
            Proqres 100%-ə yaxınlaşdıqca avatarın daha çox detal qazanacaq və
            son mərhələdə inteqrə olunmuş bir obraz kimi görünəcək.
          </p>
        </div>
      </section>

      <section className="flex justify-end">
        <Link
          href="/dashboard"
          className="rounded-full bg-indigo-500 px-5 py-2 text-xs font-medium text-white shadow shadow-indigo-500/30 hover:bg-indigo-400"
        >
          Başla
        </Link>
      </section>
    </main>
  );
}

