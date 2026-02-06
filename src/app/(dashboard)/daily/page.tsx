import DailyForm from '../../../components/daily/DailyForm';

export default function DailyPage() {
  return (
    <main className="mx-auto max-w-2xl py-8">
      <h1 className="text-2xl font-semibold text-slate-50">
        Bugünkü səyahətin
      </h1>
      <p className="mt-2 text-sm text-slate-400">
        Hisslərini, aydın tərəflərini və kölgə trigger-lərini qısa şəkildə
        qeyd et.
      </p>
      <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
        <DailyForm />
      </div>
    </main>
  );
}

