export const metadata = {
  title: "Web Development Services - Devshift",
  description: "Professional web development services including custom websites, web applications, and e-commerce solutions.",
};

export default function WebDevelopment() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-6xl">
            Web Development
          </h1>
          <p className="mt-6 text-lg leading-8 text-neutral-600 dark:text-neutral-300">
            Modern, responsive websites and web applications built with cutting-edge technologies.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">What We Build</h2>
            <ul className="mt-4 space-y-3 text-neutral-600 dark:text-neutral-300">
              <li>• Custom websites and web applications</li>
              <li>• E-commerce platforms and online stores</li>
              <li>• SaaS applications and dashboards</li>
              <li>• API development and integration</li>
              <li>• Progressive Web Apps (PWAs)</li>
              <li>• Content Management Systems</li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">Technologies We Use</h2>
            <ul className="mt-4 space-y-3 text-neutral-600 dark:text-neutral-300">
              <li>• React, Next.js, Vue.js</li>
              <li>• Node.js, Python, PHP</li>
              <li>• PostgreSQL, MongoDB, MySQL</li>
              <li>• AWS, Vercel, Netlify</li>
              <li>• Docker, Kubernetes</li>
              <li>• Git, CI/CD pipelines</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
