'use client';

import { useEffect, useState } from 'react';

type DailyEntryResponse = {
  entry?: {
    mood: number | null;
    energy: number | null;
    lightAspect: string | null;
    shadowAspect: string | null;
    trigger: string | null;
    reflection: string | null;
  } | null;
};

export default function DailyForm() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [mood, setMood] = useState<number | ''>('');
  const [energy, setEnergy] = useState<number | ''>('');
  const [lightAspect, setLightAspect] = useState('');
  const [shadowAspect, setShadowAspect] = useState('');
  const [trigger, setTrigger] = useState('');
  const [reflection, setReflection] = useState('');
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch('/api/daily/today');
        if (!res.ok) throw new Error('Failed to load');
        const data: DailyEntryResponse = await res.json();
        const e = data.entry;
        if (e) {
          setMood(e.mood ?? '');
          setEnergy(e.energy ?? '');
          setLightAspect(e.lightAspect ?? '');
          setShadowAspect(e.shadowAspect ?? '');
          setTrigger(e.trigger ?? '');
          setReflection(e.reflection ?? '');
        }
      } catch {
        // ignore for now
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setMessage(null);
    try {
      const res = await fetch('/api/daily', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          mood: mood === '' ? null : Number(mood),
          energy: energy === '' ? null : Number(energy),
          lightAspect: lightAspect || null,
          shadowAspect: shadowAspect || null,
          trigger: trigger || null,
          reflection: reflection || null,
        }),
      });
      if (!res.ok) throw new Error('Failed to save');
      setMessage('Yadda saxlandı. Bir addım daha irəlilədin.');
    } catch {
      setMessage('Yadda saxlamaq alınmadı. Bir az sonra yenə yoxla.');
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return <p className="text-sm text-slate-400">Yüklənir...</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-slate-300">
            Bugünkü əhvalın (0–10)
          </label>
          <input
            type="number"
            min={0}
            max={10}
            value={mood}
            onChange={(e) =>
              setMood(e.target.value === '' ? '' : Number(e.target.value))
            }
            className="mt-1 w-full rounded-md border border-slate-700 bg-slate-900 px-2 py-1 text-sm text-slate-50 outline-none focus:border-indigo-400"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-slate-300">
            Enerji səviyyən (0–10)
          </label>
          <input
            type="number"
            min={0}
            max={10}
            value={energy}
            onChange={(e) =>
              setEnergy(e.target.value === '' ? '' : Number(e.target.value))
            }
            className="mt-1 w-full rounded-md border border-slate-700 bg-slate-900 px-2 py-1 text-sm text-slate-50 outline-none focus:border-indigo-400"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-medium text-slate-300">
          Bugünün aydın tərəfi
        </label>
        <textarea
          value={lightAspect}
          onChange={(e) => setLightAspect(e.target.value)}
          rows={2}
          placeholder="Bu gün səndə hansı xüsusiyyət ən çox özünü göstərdi?"
          className="mt-1 w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-50 outline-none focus:border-indigo-400"
        />
      </div>

      <div>
        <label className="block text-xs font-medium text-slate-300">
          Bugünün kölgə tərəfi (istəsən)
        </label>
        <textarea
          value={shadowAspect}
          onChange={(e) => setShadowAspect(e.target.value)}
          rows={2}
          placeholder="Səndə çətin, kölgə kimi hiss etdiyin tərəf nə idi?"
          className="mt-1 w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-50 outline-none focus:border-indigo-400"
        />
      </div>

      <div>
        <label className="block text-xs font-medium text-slate-300">
          Trigger nə idi?
        </label>
        <textarea
          value={trigger}
          onChange={(e) => setTrigger(e.target.value)}
          rows={2}
          placeholder="Bu reaksiyanı nə tetiklədi? İnsan, hadisə, söz..."
          className="mt-1 w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-50 outline-none focus:border-indigo-400"
        />
      </div>

      <div>
        <label className="block text-xs font-medium text-slate-300">
          Sabah özünə bir cümləlik mesajın
        </label>
        <textarea
          value={reflection}
          onChange={(e) => setReflection(e.target.value)}
          rows={2}
          placeholder="Sabahkı özünə nə demək istərdin?"
          className="mt-1 w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-50 outline-none focus:border-indigo-400"
        />
      </div>

      <div className="flex items-center justify-between pt-2">
        {message && (
          <p className="text-xs text-slate-400">
            {message}
          </p>
        )}
        <button
          type="submit"
          disabled={saving}
          className="rounded-full bg-indigo-500 px-4 py-1.5 text-xs font-medium text-white shadow shadow-indigo-500/30 hover:bg-indigo-400 disabled:opacity-60"
        >
          {saving ? 'Yadda saxlanır...' : 'Yadda saxla'}
        </button>
      </div>
    </form>
  );
}

