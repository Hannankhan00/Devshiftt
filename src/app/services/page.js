export const metadata = {
  title: "Services - Devshift",
  description: "Professional web development, UI/UX design, and automation & AI solutions.",
};

export default function Services() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--background)' }}>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl"
              style={{ color: 'var(--foreground)' }}
          >
            Our Services
          </h1>
          <p className="mt-6 text-lg leading-8"
             style={{ color: 'var(--text-muted)' }}
          >
            Comprehensive digital solutions to help your business grow and succeed in the modern world.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border p-6"
               style={{
                 backgroundColor: 'var(--card-bg)',
                 borderColor: 'var(--card-border)'
               }}
          >
            <h3 className="text-xl font-semibold"
                style={{ color: 'var(--foreground)' }}
            >
              Web Development
            </h3>
            <p className="mt-2"
               style={{ color: 'var(--text-muted)' }}
            >
              Modern, responsive websites and web applications built with the latest technologies.
            </p>
          </div>
          
          <div className="rounded-xl border p-6"
               style={{
                 backgroundColor: 'var(--card-bg)',
                 borderColor: 'var(--card-border)'
               }}
          >
            <h3 className="text-xl font-semibold"
                style={{ color: 'var(--foreground)' }}
            >
              UI/UX Design
            </h3>
            <p className="mt-2"
               style={{ color: 'var(--text-muted)' }}
            >
              Beautiful, user-centered designs that provide exceptional user experiences.
            </p>
          </div>
          
          <div className="rounded-xl border p-6"
               style={{
                 backgroundColor: 'var(--card-bg)',
                 borderColor: 'var(--card-border)'
               }}
          >
            <h3 className="text-xl font-semibold"
                style={{ color: 'var(--foreground)' }}
            >
              Automation & AI
            </h3>
            <p className="mt-2"
               style={{ color: 'var(--text-muted)' }}
            >
              Intelligent automation solutions and AI-powered tools to streamline your business.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
