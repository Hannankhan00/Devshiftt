export const metadata = {
  title: "Our Work - Devshift",
  description: "Explore our portfolio of successful projects and client work.",
};

export default function Work() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-6xl">
            Our Work
          </h1>
          <p className="mt-6 text-lg leading-8 text-neutral-600 dark:text-neutral-300">
            Discover the projects we&apos;ve built and the impact we&apos;ve made for our clients.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl border border-neutral-200 p-6 dark:border-neutral-800">
            <div className="aspect-video bg-neutral-100 dark:bg-neutral-800 rounded-lg mb-4"></div>
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">E-commerce Platform</h3>
            <p className="mt-2 text-neutral-600 dark:text-neutral-300">
              A modern e-commerce solution with advanced features and seamless user experience.
            </p>
          </div>
          
          <div className="rounded-xl border border-neutral-200 p-6 dark:border-neutral-800">
            <div className="aspect-video bg-neutral-100 dark:bg-neutral-800 rounded-lg mb-4"></div>
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">SaaS Dashboard</h3>
            <p className="mt-2 text-neutral-600 dark:text-neutral-300">
              A comprehensive dashboard for managing business operations and analytics.
            </p>
          </div>
          
          <div className="rounded-xl border border-neutral-200 p-6 dark:border-neutral-800">
            <div className="aspect-video bg-neutral-100 dark:bg-neutral-800 rounded-lg mb-4"></div>
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">Mobile App</h3>
            <p className="mt-2 text-neutral-600 dark:text-neutral-300">
              A cross-platform mobile application with real-time features and offline capabilities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
