export const metadata = {
  title: "Digital Marketing Services - Devshift",
  description: "Strategic digital marketing campaigns to boost your online presence and drive business growth.",
};

export default function Marketing() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--background)' }}>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl"
              style={{ color: 'var(--foreground)' }}
          >
            Digital Marketing
          </h1>
          <p className="mt-6 text-lg leading-8"
             style={{ color: 'var(--text-muted)' }}
          >
            Strategic digital marketing campaigns to boost your online presence, attract customers, and drive business growth.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold"
                style={{ color: 'var(--foreground)' }}
            >
              Marketing Services
            </h2>
            <ul className="mt-4 space-y-3"
                style={{ color: 'var(--text-muted)' }}
            >
              <li>• Search Engine Optimization (SEO)</li>
              <li>• Pay-Per-Click (PPC) advertising</li>
              <li>• Social media marketing</li>
              <li>• Content marketing strategy</li>
              <li>• Email marketing campaigns</li>
              <li>• Analytics and reporting</li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold"
                style={{ color: 'var(--foreground)' }}
            >
              Our Approach
            </h2>
            <ul className="mt-4 space-y-3"
                style={{ color: 'var(--text-muted)' }}
            >
              <li>• Data-driven strategies</li>
              <li>• Target audience analysis</li>
              <li>• Conversion optimization</li>
              <li>• Multi-channel campaigns</li>
              <li>• Performance tracking</li>
              <li>• Continuous optimization</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
