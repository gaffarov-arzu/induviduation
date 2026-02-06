import Link from 'next/link';

export default function LandingPage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-10 text-center">
      <section>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          100% <span className="text-indigo-400">Mən</span>
        </h1>
        <p className="mt-4 max-w-xl text-base text-slate-300">
          Aydın və qaranlıq tərəflərini addım-addım kəşf etdiyin 100%-lik özünü
          tanıma səyahəti. Hər gün kiçik bir addım, sonda tam bir personaj.
        </p>
      </section>

      <section className="flex flex-col items-center gap-4">
        <div className="relative h-40 w-40 rounded-full bg-slate-800">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-500 opacity-60" />
          <div className="absolute inset-[18%] rounded-full border border-dashed border-slate-600" />
          <div className="absolute inset-[32%] rounded-full bg-slate-900/70 backdrop-blur-sm" />
        </div>
        <p className="max-w-sm text-sm text-slate-400">
          Başlanğıcda hər şey kölgədir. Yazdıqca, trigger-ləri gördükcə,
          feedback aldıqca personajın işıqlanır.
        </p>
      </section>

      <section className="flex flex-col items-center gap-3">
        <div className="flex gap-3">
          <Link
            href="/onboarding"
            className="rounded-full bg-indigo-500 px-6 py-2 text-sm font-medium text-white shadow-lg shadow-indigo-500/30 hover:bg-indigo-400"
          >
            Səyahətə başla
          </Link>
          <Link
            href="/how-it-works"
            className="rounded-full border border-slate-600 px-5 py-2 text-sm font-medium text-slate-100 hover:border-slate-400"
          >
            Necə işləyir?
          </Link>
        </div>
      </section>

      <section className="mt-4 grid w-full gap-4 text-left sm:grid-cols-3">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4">
          <h2 className="text-sm font-semibold text-slate-100">
            1. Gündəlik aydınlıq
          </h2>
          <p className="mt-2 text-xs text-slate-400">
            Hər gün 3–5 dəqiqə özün haqqında yazırsan. Aydın tərəflərin, günün
            anları, dəyərlərin.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4">
          <h2 className="text-sm font-semibold text-slate-100">
            2. Kölgə trigger-ləri
          </h2>
          <p className="mt-2 text-xs text-slate-400">
            Öz reaksiyalarını və digərlərinin sənin haqqındakı feedback-lərini
            bir yerdə görürsən.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4">
          <h2 className="text-sm font-semibold text-slate-100">
            3. 100%-də personaj
          </h2>
          <p className="mt-2 text-xs text-slate-400">
            Proqres 100%-ə çatanda həm aydın, həm kölgə tərəfləri ilə inteqrə
            olunmuş şəxsiyyət xəritən açılır.
          </p>
        </div>
      </section>
    </main>
  );
}

