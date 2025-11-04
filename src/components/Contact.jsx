import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-gradient-to-br from-white to-neutral-50 dark:from-neutral-900 dark:to-neutral-950 p-8 shadow-sm">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <p className="text-sm uppercase tracking-widest text-primary/80">Kontak</p>
              <h3 className="mt-2 text-2xl font-semibold text-neutral-900 dark:text-white">Mari berkolaborasi</h3>
              <p className="mt-3 text-neutral-600 dark:text-neutral-300">
                Siap membantu membangun produk yang berdampak. Kirim pesan dan saya akan balas secepatnya.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <a href="mailto:you@example.com" className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-white shadow hover:shadow-md transition">
                  <Mail className="h-4 w-4" /> Email
                </a>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-neutral-300 dark:border-neutral-700 px-4 py-2 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition">
                  <Github className="h-4 w-4" /> GitHub
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-neutral-300 dark:border-neutral-700 px-4 py-2 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition">
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
              </div>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const data = new FormData(e.currentTarget);
                const name = data.get('name');
                const email = data.get('email');
                const message = data.get('message');
                const subject = encodeURIComponent(`Halo, saya ${name}`);
                const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
                window.location.href = `mailto:you@example.com?subject=${subject}&body=${body}`;
              }}
              className="grid gap-4"
            >
              <div>
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">Nama</label>
                <input name="name" required className="mt-1 w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-3 py-2 text-neutral-900 dark:text-white outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">Email</label>
                <input type="email" name="email" required className="mt-1 w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-3 py-2 text-neutral-900 dark:text-white outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">Pesan</label>
                <textarea name="message" rows={4} required className="mt-1 w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-3 py-2 text-neutral-900 dark:text-white outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <div>
                <button type="submit" className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-white shadow hover:shadow-md transition">
                  Kirim
                </button>
              </div>
            </form>
          </div>
        </div>
        <p className="mt-6 text-center text-sm text-neutral-500 dark:text-neutral-400">© {new Date().getFullYear()} — Dibuat dengan cinta dan kopi.</p>
      </div>
    </section>
  );
}
