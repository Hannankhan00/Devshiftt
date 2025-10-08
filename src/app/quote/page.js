export const metadata = {
  title: "Get a Quote - Devshift",
  description: "Request a custom quote for your web development, design, or automation project.",
};

export default function Quote() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-6xl">
            Get a Quote
          </h1>
          <p className="mt-6 text-lg leading-8 text-neutral-600 dark:text-neutral-300">
            Tell us about your project and we&apos;ll provide a detailed quote tailored to your needs.
          </p>
        </div>

        <div className="mt-16">
          <form className="space-y-8">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-900 dark:text-white">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full rounded-lg border border-neutral-300 px-3 py-2 dark:border-neutral-600 dark:bg-neutral-800 dark:text-white"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-900 dark:text-white">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full rounded-lg border border-neutral-300 px-3 py-2 dark:border-neutral-600 dark:bg-neutral-800 dark:text-white"
                  required
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-neutral-900 dark:text-white">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="mt-1 block w-full rounded-lg border border-neutral-300 px-3 py-2 dark:border-neutral-600 dark:bg-neutral-800 dark:text-white"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-neutral-900 dark:text-white">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="mt-1 block w-full rounded-lg border border-neutral-300 px-3 py-2 dark:border-neutral-600 dark:bg-neutral-800 dark:text-white"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="services" className="block text-sm font-medium text-neutral-900 dark:text-white">
                Services Needed *
              </label>
              <select
                id="services"
                name="services"
                className="mt-1 block w-full rounded-lg border border-neutral-300 px-3 py-2 dark:border-neutral-600 dark:bg-neutral-800 dark:text-white"
                required
              >
                <option value="">Select a service</option>
                <option value="web-development">Web Development</option>
                <option value="ui-ux-design">UI/UX Design</option>
                <option value="automation-ai">Automation & AI</option>
                <option value="multiple">Multiple Services</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="budget" className="block text-sm font-medium text-neutral-900 dark:text-white">
                Project Budget
              </label>
              <select
                id="budget"
                name="budget"
                className="mt-1 block w-full rounded-lg border border-neutral-300 px-3 py-2 dark:border-neutral-600 dark:bg-neutral-800 dark:text-white"
              >
                <option value="">Select budget range</option>
                <option value="under-5k">Under $5,000</option>
                <option value="5k-10k">$5,000 - $10,000</option>
                <option value="10k-25k">$10,000 - $25,000</option>
                <option value="25k-50k">$25,000 - $50,000</option>
                <option value="over-50k">Over $50,000</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="timeline" className="block text-sm font-medium text-neutral-900 dark:text-white">
                Project Timeline
              </label>
              <select
                id="timeline"
                name="timeline"
                className="mt-1 block w-full rounded-lg border border-neutral-300 px-3 py-2 dark:border-neutral-600 dark:bg-neutral-800 dark:text-white"
              >
                <option value="">Select timeline</option>
                <option value="asap">ASAP</option>
                <option value="1-month">Within 1 month</option>
                <option value="2-3-months">2-3 months</option>
                <option value="3-6-months">3-6 months</option>
                <option value="flexible">Flexible</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-neutral-900 dark:text-white">
                Project Description *
              </label>
              <textarea
                id="description"
                name="description"
                rows={6}
                className="mt-1 block w-full rounded-lg border border-neutral-300 px-3 py-2 dark:border-neutral-600 dark:bg-neutral-800 dark:text-white"
                placeholder="Please describe your project in detail..."
                required
              ></textarea>
            </div>
            
            <div className="text-center">
              <button
                type="submit"
                className="inline-flex items-center rounded-xl bg-black px-8 py-3 text-sm font-semibold text-white hover:opacity-90 dark:bg-white dark:text-black"
              >
                Request Quote
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
