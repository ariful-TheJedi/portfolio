export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-text transition-colors duration-300">
      {/* HERO */}
      <section className="mx-auto flex max-w-7xl flex-col items-center justify-center px-6 py-24 text-center">
        <span className="mb-4 rounded-full border border-border bg-surface px-4 py-2 text-sm text-muted">
          Greek Warrior Portfolio
        </span>

        <h1 className="font-heading max-w-4xl text-5xl font-black uppercase leading-tight tracking-tight md:text-7xl">
          Warrior <span className="text-bronze">Of</span>{" "}
          Code
        </h1>

        <p className="font-primary mt-8 max-w-2xl text-lg text-muted">
          Building cinematic web experiences inspired by
          Troy, 300, and Hellenistic aesthetics using
          Next.js, Tailwind CSS, and modern frontend
          architecture.
        </p>

        <div className="mt-10 flex gap-4">
          <button className="rounded-xl bg-bronze px-6 py-3 font-semibold text-black transition hover:scale-105">
            View Projects
          </button>

          <button className="rounded-xl border border-border bg-card px-6 py-3 transition hover:bg-surface">
            Contact Me
          </button>
        </div>
      </section>

      {/* CARDS */}
      <section className="mx-auto grid max-w-7xl gap-6 px-6 pb-24 md:grid-cols-3">
        <div className="rounded-3xl border border-border bg-card p-8 transition hover:-translate-y-1">
          <h2 className="text-2xl font-bold text-bronze">
            Full Stack
          </h2>

          <p className="mt-4 text-muted">
            Scalable modern applications with Next.js,
            Laravel, and MariaDB.
          </p>
        </div>

        <div className="rounded-3xl border border-border bg-card p-8 transition hover:-translate-y-1">
          <h2 className="text-2xl font-bold text-bronze">
            UI Engineering
          </h2>

          <p className="mt-4 text-muted">
            Cinematic interfaces with Tailwind, GSAP,
            and Framer Motion.
          </p>
        </div>

        <div className="rounded-3xl border border-border bg-card p-8 transition hover:-translate-y-1">
          <h2 className="text-2xl font-bold text-bronze">
            AI Systems
          </h2>

          <p className="mt-4 text-muted">
            NLP and machine learning systems using
            Python, Flask, and Hugging Face.
          </p>
        </div>
      </section>
    </main>
  );
}