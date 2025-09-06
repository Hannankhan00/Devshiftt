export const metadata = {
  title: "About Us - Devshift",
  description: "Learn about our team, mission, and commitment to delivering exceptional digital solutions.",
};

export default function About() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-6xl">
            About Devshift
          </h1>
          <p className="mt-6 text-lg leading-8 text-neutral-600 dark:text-neutral-300">
            We&apos;re a team of passionate developers, designers, and digital strategists dedicated to creating exceptional digital experiences.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">Our Mission</h2>
            <p className="mt-4 text-neutral-600 dark:text-neutral-300">
              To empower businesses with cutting-edge digital solutions that drive growth, efficiency, and innovation. 
              We believe in the power of technology to transform ideas into reality.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">Our Values</h2>
            <ul className="mt-4 space-y-2 text-neutral-600 dark:text-neutral-300">
              <li>• Quality and attention to detail</li>
              <li>• Client-focused approach</li>
              <li>• Innovation and continuous learning</li>
              <li>• Transparent communication</li>
              <li>• Long-term partnerships</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">Ready to Work Together?</h2>
          <p className="mt-4 text-neutral-600 dark:text-neutral-300">
            Let&apos;s discuss how we can help bring your vision to life.
          </p>
          <div className="mt-8">
            <a
              href="/contact"
              className="inline-flex items-center rounded-xl bg-black px-6 py-3 text-sm font-semibold text-white hover:opacity-90 dark:bg-white dark:text-black"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
