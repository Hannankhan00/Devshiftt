import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-6xl">
            Transform Your Digital Presence
          </h1>
          <p className="mt-6 text-lg leading-8 text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            We create exceptional digital experiences through cutting-edge web development, 
            beautiful design, intelligent automation, and strategic marketing solutions.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/quote"
              className="rounded-xl bg-black px-6 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black dark:bg-white dark:text-black"
            >
              Get Started
            </Link>
            <Link
              href="/work"
              className="text-sm font-semibold leading-6 text-neutral-900 dark:text-white hover:text-neutral-700 dark:hover:text-neutral-300"
            >
              View Our Work <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
