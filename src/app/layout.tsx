import '../styles/globals.css';
import type { ReactNode } from 'react';
import Link from 'next/link';

export const metadata = {
  title: '100% Mən - Shadow & Light Journey',
  description: 'Özünü tanımaq üçün 100%-lik aydın və kölgə səyahəti.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="az">
      <body className="min-h-screen bg-slate-950 text-slate-50">
        <div className="mx-auto flex min-h-screen max-w-4xl flex-col px-4 py-4 sm:py-6">
          <header className="mb-4 flex items-center justify-between border-b border-slate-800 pb-2 text-xs text-slate-400">
            <Link href="/" className="font-semibold text-slate-100 hover:text-indigo-300">
              100% Mən
            </Link>
            <Link
              href="/"
              className="rounded-full border border-slate-700 px-3 py-1 text-[11px] font-medium text-slate-100 hover:border-slate-500"
            >
              Home
            </Link>
          </header>
          <div className="flex-1">{children}</div>
        </div>
      </body>
    </html>
  );
}

