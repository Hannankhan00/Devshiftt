export const metadata = {
  title: "UI/UX Design Services - Devshift",
  description: "Professional UI/UX design services to create beautiful, user-centered digital experiences.",
};

export default function Design() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-6xl">
            UI/UX Design
          </h1>
          <p className="mt-6 text-lg leading-8 text-neutral-600 dark:text-neutral-300">
            Beautiful, user-centered designs that provide exceptional user experiences and drive business results.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">Our Design Process</h2>
            <ul className="mt-4 space-y-3 text-neutral-600 dark:text-neutral-300">
              <li>• User research and analysis</li>
              <li>• Wireframing and prototyping</li>
              <li>• Visual design and branding</li>
              <li>• User testing and iteration</li>
              <li>• Design system creation</li>
              <li>• Handoff to development</li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">Design Services</h2>
            <ul className="mt-4 space-y-3 text-neutral-600 dark:text-neutral-300">
              <li>• Website and app design</li>
              <li>• Brand identity and logo design</li>
              <li>• User experience strategy</li>
              <li>• Design system development</li>
              <li>• Mobile app design</li>
              <li>• E-commerce design</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
