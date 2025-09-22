import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

import { SpeedInsights } from "@vercel/speed-insights/next";
import ErrorBoundary from "./components/error-boundary";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Devshift - Professional Web Development Services",
  description: "Expert web development, UI/UX design, automation & AI solutions, and digital marketing services.",
  keywords: "web development, UI/UX design, automation, AI, digital marketing",
  authors: [{ name: "Devshift Team" }],
  openGraph: {
    title: "Devshift - Professional Web Development Services",
    description: "Expert web development, UI/UX design, automation & AI solutions, and digital marketing services.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-dvh antialiased`}
      >
        <ErrorBoundary>
          
            <Header />
            <main className="pt-16">{children}</main>
            <Footer />
            {process.env.NODE_ENV === 'production' && <SpeedInsights />}
          
        </ErrorBoundary>
      </body>
    </html>
  );
}
