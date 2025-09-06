export const metadata = {
  title: "Services - Devshift",
  description: "Professional web development, UI/UX design, automation & AI solutions, and digital marketing services.",
};

export default function Services() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-6xl">
            Our Services
          </h1>
          <p className="mt-6 text-lg leading-8 text-neutral-600 dark:text-neutral-300">
            Comprehensive digital solutions to help your business grow and succeed in the modern world.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-neutral-200 p-6 dark:border-neutral-800">
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">Web Development</h3>
            <p className="mt-2 text-neutral-600 dark:text-neutral-300">
              Modern, responsive websites and web applications built with the latest technologies.
            </p>
          </div>
          
          <div className="rounded-xl border border-neutral-200 p-6 dark:border-neutral-800">
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">UI/UX Design</h3>
            <p className="mt-2 text-neutral-600 dark:text-neutral-300">
              Beautiful, user-centered designs that provide exceptional user experiences.
            </p>
          </div>
          
          <div className="rounded-xl border border-neutral-200 p-6 dark:border-neutral-800">
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">Automation & AI</h3>
            <p className="mt-2 text-neutral-600 dark:text-neutral-300">
              Intelligent automation solutions and AI-powered tools to streamline your business.
            </p>
          </div>
          
          <div className="rounded-xl border border-neutral-200 p-6 dark:border-neutral-800">
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">Digital Marketing</h3>
            <p className="mt-2 text-neutral-600 dark:text-neutral-300">
              Strategic digital marketing campaigns to boost your online presence and growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
