import { ArrowRight, Github, Linkedin } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[90vh] items-center">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(ellipse_at_top_right,rgba(99,102,241,0.25),transparent_50%)]" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7 flex flex-col justify-center">
            <p className="text-sm uppercase tracking-widest text-primary/80">Portfolio</p>
            <h1 className="mt-3 text-4xl font-bold leading-tight text-neutral-900 dark:text-white md:text-5xl">
              Halo, saya <span className="text-primary">Developer</span> yang suka membangun pengalaman web indah.
            </h1>
            <p className="mt-4 max-w-2xl text-neutral-600 dark:text-neutral-300">
              Spesialis di React, Node/Python, dan desain antarmuka yang modern. Fokus pada kinerja, aksesibilitas, dan detail.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-white shadow hover:shadow-md transition">
                Lihat Proyek <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-md border border-neutral-300 dark:border-neutral-700 px-4 py-2 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition">
                Hubungi Saya
              </a>
            </div>
            <div className="mt-6 flex items-center gap-4">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative mx-auto aspect-square w-72 sm:w-80 lg:w-full">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary/20 via-fuchsia-300/20 to-emerald-300/20 blur-2xl" />
              <div className="relative z-10 h-full rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 flex items-center justify-center shadow-sm">
                <div className="text-center">
                  <div className="mx-auto h-24 w-24 rounded-full bg-gradient-to-tr from-primary to-fuchsia-500" />
                  <p className="mt-4 text-sm text-neutral-500 dark:text-neutral-400">Tersedia untuk freelance/kontrak</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
