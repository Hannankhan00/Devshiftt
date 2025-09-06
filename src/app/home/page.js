// app/layout.js

import Header from "../components/header";

export const metadata = { title: "Devshift", description: "…" };

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="min-h-dvh bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100 antialiased">
                <Header />
                <main className="pt-16">{children}</main>
            </body>
        </html>
    );
}
