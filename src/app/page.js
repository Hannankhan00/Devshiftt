import Hero from "./home/components/hero";

export default function Home() {
  return (
    <div>
      <Hero />
      
      {/* Services Section */}
      <section className="py-24 bg-neutral-50 dark:bg-neutral-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
              Our Services
            </h2>
            <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300">
              Comprehensive digital solutions to help your business succeed
            </p>
          </div>
          
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto h-12 w-12 rounded-lg bg-black dark:bg-white flex items-center justify-center">
                <span className="text-white dark:text-black font-bold">W</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-neutral-900 dark:text-white">Web Development</h3>
              <p className="mt-2 text-neutral-600 dark:text-neutral-300">
                Modern, responsive websites and applications
              </p>
            </div>
            
            <div className="text-center">
              <div className="mx-auto h-12 w-12 rounded-lg bg-black dark:bg-white flex items-center justify-center">
                <span className="text-white dark:text-black font-bold">D</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-neutral-900 dark:text-white">UI/UX Design</h3>
              <p className="mt-2 text-neutral-600 dark:text-neutral-300">
                Beautiful, user-centered design solutions
              </p>
            </div>
            
            <div className="text-center">
              <div className="mx-auto h-12 w-12 rounded-lg bg-black dark:bg-white flex items-center justify-center">
                <span className="text-white dark:text-black font-bold">A</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-neutral-900 dark:text-white">Automation & AI</h3>
              <p className="mt-2 text-neutral-600 dark:text-neutral-300">
                Intelligent automation and AI solutions
              </p>
            </div>
            
            <div className="text-center">
              <div className="mx-auto h-12 w-12 rounded-lg bg-black dark:bg-white flex items-center justify-center">
                <span className="text-white dark:text-black font-bold">M</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-neutral-900 dark:text-white">Digital Marketing</h3>
              <p className="mt-2 text-neutral-600 dark:text-neutral-300">
                Strategic marketing to grow your business
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
