import { ExternalLink, Code, Star } from 'lucide-react';

const projects = [
  {
    title: 'Landing Page Modern',
    description:
      'Desain bersih dengan animasi halus dan performa optimal. Dibangun dengan React + Tailwind.',
    tags: ['React', 'Tailwind', 'SEO'],
    link: '#',
    stars: 12,
  },
  {
    title: 'Dashboard Analytics',
    description:
      'Dashboard interaktif dengan chart real-time dan filter cerdas. Fokus pada UX dan aksesibilitas.',
    tags: ['React', 'Charts', 'A11y'],
    link: '#',
    stars: 18,
  },
  {
    title: 'API FastAPI',
    description:
      'API performa tinggi dengan dokumentasi otomatis dan autentikasi JWT.',
    tags: ['FastAPI', 'Python', 'JWT'],
    link: '#',
    stars: 9,
  },
];

function ProjectCard({ title, description, tags, link, stars }) {
  return (
    <a
      href={link}
      target={link.startsWith('http') ? '_blank' : undefined}
      rel={link.startsWith('http') ? 'noreferrer' : undefined}
      className="group relative block overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5 shadow-sm hover:shadow-md transition"
    >
      <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-tr from-primary/20 to-fuchsia-400/20 blur-2xl" />
      <div className="relative z-10">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">{title}</h3>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{description}</p>
          </div>
          <ExternalLink className="h-4 w-4 text-neutral-400 group-hover:text-neutral-600 dark:group-hover:text-neutral-200" />
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-2">
          {tags.map((t) => (
            <span key={t} className="inline-flex items-center gap-1 rounded-md bg-neutral-100 dark:bg-neutral-800 px-2 py-1 text-xs text-neutral-700 dark:text-neutral-300">
              <Code className="h-3 w-3" /> {t}
            </span>
          ))}
          <span className="ml-auto inline-flex items-center gap-1 text-xs text-neutral-600 dark:text-neutral-400">
            <Star className="h-3 w-3 fill-yellow-400 stroke-yellow-400" /> {stars}
          </span>
        </div>
      </div>
    </a>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-widest text-primary/80">Karya</p>
            <h2 className="mt-2 text-2xl font-semibold text-neutral-900 dark:text-white">Proyek Pilihan</h2>
            <p className="mt-2 max-w-2xl text-sm text-neutral-600 dark:text-neutral-300">
              Cuplikan proyek yang merepresentasikan kualitas, perhatian terhadap detail, dan fokus bisnis.
            </p>
          </div>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
