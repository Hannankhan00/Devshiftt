export const metadata = {
  title: "Automation & AI Services - Devshift",
  description: "Intelligent automation solutions and AI-powered tools to streamline your business operations.",
};

export default function Automation() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-6xl">
            Automation & AI
          </h1>
          <p className="mt-6 text-lg leading-8 text-neutral-600 dark:text-neutral-300">
            Intelligent automation solutions and AI-powered tools to streamline your business operations and boost productivity.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">Automation Solutions</h2>
            <ul className="mt-4 space-y-3 text-neutral-600 dark:text-neutral-300">
              <li>• Workflow automation</li>
              <li>• Data processing automation</li>
              <li>• Email and notification systems</li>
              <li>• API integrations</li>
              <li>• Business process automation</li>
              <li>• Custom automation tools</li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">AI Services</h2>
            <ul className="mt-4 space-y-3 text-neutral-600 dark:text-neutral-300">
              <li>• Chatbots and virtual assistants</li>
              <li>• Machine learning models</li>
              <li>• Natural language processing</li>
              <li>• Predictive analytics</li>
              <li>• Computer vision solutions</li>
              <li>• AI-powered recommendations</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
