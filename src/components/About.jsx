import { User, Briefcase } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-widest text-primary/80">Tentang</p>
            <h2 className="mt-2 text-2xl font-semibold text-neutral-900 dark:text-white">Siapa saya</h2>
            <p className="mt-3 text-neutral-600 dark:text-neutral-300">
              Saya seorang pengembang web dengan fokus pada front-end dan pengalaman pengguna. Senang
              mengeksplorasi teknologi modern dan membangun antarmuka yang cepat, responsif, dan mudah digunakan.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary" /> React, TypeScript, Tailwind</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary" /> Node.js, Python (FastAPI)</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary" /> UX, aksesibilitas, dan performa</li>
            </ul>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5 shadow-sm">
              <User className="h-5 w-5 text-primary" />
              <h3 className="mt-2 font-semibold text-neutral-900 dark:text-white">Latar belakang</h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">Berpengalaman membangun aplikasi web untuk startup dan klien freelance.</p>
            </div>
            <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5 shadow-sm">
              <Briefcase className="h-5 w-5 text-primary" />
              <h3 className="mt-2 font-semibold text-neutral-900 dark:text-white">Keahlian</h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">SPA, dashboard analytics, sistem desain, integrasi API, dan optimasi.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
