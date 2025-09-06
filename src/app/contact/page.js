export const metadata = {
  title: "Contact Us - Devshift",
  description: "Get in touch with our team to discuss your project and how we can help.",
};

export default function Contact() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-6xl">
            Contact Us
          </h1>
          <p className="mt-6 text-lg leading-8 text-neutral-600 dark:text-neutral-300">
            Ready to start your next project? We&apos;d love to hear from you.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">Get in Touch</h2>
            <p className="mt-4 text-neutral-600 dark:text-neutral-300">
              Have a project in mind? Let&apos;s discuss how we can help bring your vision to life. 
              We&apos;re here to answer any questions and provide guidance on your digital journey.
            </p>
            
            <div className="mt-8 space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">Email</h3>
                <p className="text-neutral-600 dark:text-neutral-300">hello@devshift.com</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">Phone</h3>
                <p className="text-neutral-600 dark:text-neutral-300">+1 (555) 123-4567</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">Office</h3>
                <p className="text-neutral-600 dark:text-neutral-300">
                  123 Digital Street<br />
                  Tech City, TC 12345
                </p>
              </div>
            </div>
          </div>
          
          <div className="rounded-xl border border-neutral-200 p-6 dark:border-neutral-800">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-900 dark:text-white">
                  Name
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
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full rounded-lg border border-neutral-300 px-3 py-2 dark:border-neutral-600 dark:bg-neutral-800 dark:text-white"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-900 dark:text-white">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 block w-full rounded-lg border border-neutral-300 px-3 py-2 dark:border-neutral-600 dark:bg-neutral-800 dark:text-white"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white hover:opacity-90 dark:bg-white dark:text-black"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
