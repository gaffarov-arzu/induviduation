import '../styles/globals.css';
import type { ReactNode } from 'react';

export const metadata = {
  title: '100% Mən - Shadow & Light Journey',
  description: 'Özünü tanımaq üçün 100%-lik aydın və kölgə səyahəti.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="az">
      <body className="min-h-screen bg-slate-950 text-slate-50">
        <div className="mx-auto flex min-h-screen max-w-4xl flex-col px-4 py-6">
          {children}
        </div>
      </body>
    </html>
  );
}

