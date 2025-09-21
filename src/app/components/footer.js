import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t"
            style={{
              backgroundColor: 'var(--card-bg)',
              borderColor: 'var(--card-border)'
            }}
    >
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.svg"
                alt="Devshift"
                width={24}
                height={24}
                className="h-6 w-6"
              />
              <span className="text-lg font-semibold tracking-tight"
                    style={{ color: 'var(--foreground)' }}
              >
                Devshift
              </span>
            </Link>
            <p className="text-sm"
               style={{ color: 'var(--text-muted)' }}
            >
              Professional web development, design, and digital marketing services to help your business grow.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold"
                style={{ color: 'var(--foreground)' }}
            >
              Services
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/services/web" className="text-sm transition-colors duration-200"
                      style={{
                        color: 'var(--text-muted)',
                        '--hover-color': 'var(--foreground)'
                      }}
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services/design" className="text-sm transition-colors duration-200"
                      style={{
                        color: 'var(--text-muted)',
                        '--hover-color': 'var(--foreground)'
                      }}
                >
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link href="/services/automation" className="text-sm transition-colors duration-200"
                      style={{
                        color: 'var(--text-muted)',
                        '--hover-color': 'var(--foreground)'
                      }}
                >
                  Automation & AI
                </Link>
              </li>
              <li>
                <Link href="/services/marketing" className="text-sm transition-colors duration-200"
                      style={{
                        color: 'var(--text-muted)',
                        '--hover-color': 'var(--foreground)'
                      }}
                >
                  Digital Marketing
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold"
                style={{ color: 'var(--foreground)' }}
            >
              Company
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/about" className="text-sm transition-colors duration-200"
                      style={{
                        color: 'var(--text-muted)',
                        '--hover-color': 'var(--foreground)'
                      }}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/work" className="text-sm transition-colors duration-200"
                      style={{
                        color: 'var(--text-muted)',
                        '--hover-color': 'var(--foreground)'
                      }}
                >
                  Our Work
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm transition-colors duration-200"
                      style={{
                        color: 'var(--text-muted)',
                        '--hover-color': 'var(--foreground)'
                      }}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/quote" className="text-sm transition-colors duration-200"
                      style={{
                        color: 'var(--text-muted)',
                        '--hover-color': 'var(--foreground)'
                      }}
                >
                  Get a Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold"
                style={{ color: 'var(--foreground)' }}
            >
              Contact
            </h3>
            <ul className="mt-4 space-y-2 text-sm"
                style={{ color: 'var(--text-muted)' }}
            >
              <li>hello@devshift.com</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Digital Street<br />Tech City, TC 12345</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t pt-8"
             style={{ borderColor: 'var(--card-border)' }}
        >
          <div className="flex flex-col items-center justify-between sm:flex-row">
            <p className="text-sm"
               style={{ color: 'var(--text-muted)' }}
            >
              © 2024 Devshift. All rights reserved.
            </p>
            <div className="mt-4 flex space-x-6 sm:mt-0">
              <Link href="/privacy" className="text-sm transition-colors duration-200"
                    style={{
                      color: 'var(--text-muted)',
                      '--hover-color': 'var(--foreground)'
                    }}
              >
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm transition-colors duration-200"
                    style={{
                      color: 'var(--text-muted)',
                      '--hover-color': 'var(--foreground)'
                    }}
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
