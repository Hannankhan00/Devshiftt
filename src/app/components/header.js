"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import ThemeToggle from "./theme-toggle";

const NAV = [
    { label: "Home", href: "/" },
    {
        label: "Services",
        items: [
            { label: "Web Development", href: "/services/web" },
            { label: "UI/UX Design", href: "/services/design" },
            { label: "Automation & AI", href: "/services/automation" },
        ],
    },
    { label: "Work", href: "/work" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
];

const LOGO = "/assets/logo.png"; // single source of truth

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const mobileRef = useRef(null);

    // change background when scrolling
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // close mobile on Escape or outside
    useEffect(() => {
        const onKey = (e) => {
            if (e.key === "Escape") setMobileOpen(false);
        };
        const onClick = (e) => {
            if (mobileRef.current && !mobileRef.current.contains(e.target)) {
                setMobileOpen(false);
            }
        };
        if (mobileOpen) {
            document.addEventListener("keydown", onKey);
            document.addEventListener("mousedown", onClick);
            document.body.style.overflow = "hidden";
        }
        return () => {
            document.removeEventListener("keydown", onKey);
            document.removeEventListener("mousedown", onClick);
            document.body.style.overflow = "";
        };
    }, [mobileOpen]);

    return (
        <header
            className={[
                "fixed inset-x-0 top-0 z-50 transition-all duration-300",
                scrolled
                    ? "backdrop-blur-md border-b"
                    : "bg-transparent",
            ].join(" ")}
            style={{
                backgroundColor: scrolled ? 'var(--background)' : 'transparent',
                borderColor: scrolled ? 'var(--card-border)' : 'transparent',
                opacity: scrolled ? 0.95 : 1
            }}
            role="banner"
        >
            <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo only (no text) */}
                    <Link href="/" aria-label="Home" className="flex items-center">
                        <Image
                            src={LOGO}
                            alt="Logo"
                            width={152}
                            height={44}
                            priority
                            className="h-12 w-auto"
                        />
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-2">
                        {NAV.map((item) =>
                            item.items ? (
                                <div
                                    key={item.label}
                                    className="relative"
                                    onMouseLeave={() => setServicesOpen(false)}
                                >
                                    <button
                                        className="group inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200"
                                        style={{
                                            color: 'var(--foreground)',
                                            '--hover-bg': 'var(--card-bg)'
                                        }}
                                        aria-haspopup="true"
                                        aria-expanded={servicesOpen}
                                        onMouseEnter={() => setServicesOpen(true)}
                                        onClick={() => setServicesOpen((s) => !s)}
                                    >
                                        {item.label}
                                        <ChevronDown
                                            className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""
                                                }`}
                                        />
                                    </button>
                                    <AnimatePresence>
                                        {servicesOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 8 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 8 }}
                                                transition={{ duration: 0.16, ease: "easeOut" }}
                                                className="absolute left-0 mt-2 w-64 rounded-xl border p-2 shadow-lg"
                                                style={{
                                                    backgroundColor: 'var(--card-bg)',
                                                    borderColor: 'var(--card-border)'
                                                }}
                                            >
                                                {item.items.map((sub) => (
                                                    <Link
                                                        key={sub.label}
                                                        href={sub.href}
                                                        className="block rounded-lg px-3 py-2 text-sm transition-colors duration-200"
                                                        style={{
                                                            color: 'var(--foreground)',
                                                            '--hover-bg': 'var(--card-bg)'
                                                        }}
                                                    >
                                                        {sub.label}
                                                    </Link>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ) : (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className="rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200"
                                    style={{
                                        color: 'var(--foreground)',
                                        '--hover-bg': 'var(--card-bg)'
                                    }}
                                >
                                    {item.label}
                                </Link>
                            )
                        )}
                    </div>

                    {/* Right actions */}
                    <div className="hidden md:flex items-center gap-3">
                        <ThemeToggle />
                        <Link
                            href="/contact"
                            className="rounded-xl border px-4 py-2 text-sm font-medium transition-colors duration-200"
                            style={{
                                color: 'var(--foreground)',
                                borderColor: 'var(--card-border)',
                                '--hover-bg': 'var(--card-bg)'
                            }}
                        >
                            Contact
                        </Link>
                        <Link
                            href="/quote"
                            className="rounded-xl px-4 py-2 text-sm font-semibold text-white transition-colors duration-200"
                            style={{
                                backgroundColor: 'var(--accent)',
                                '--hover-bg': 'var(--accent-hover)'
                            }}
                        >
                            Get a Quote
                        </Link>
                    </div>

                    {/* Mobile toggle */}
                    <div className="flex items-center gap-2 md:hidden">
                        <ThemeToggle />
                        <button
                            aria-label="Open menu"
                            aria-expanded={mobileOpen}
                            onClick={() => setMobileOpen(true)}
                            className="inline-flex items-center rounded-lg p-2 transition-colors duration-200"
                            style={{
                                color: 'var(--foreground)',
                                '--hover-bg': 'var(--card-bg)'
                            }}
                        >
                            <Menu className="h-6 w-6" />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {mobileOpen && (
                    <>
                        {/* overlay */}
                        <motion.div
                            className="fixed inset-0 z-40 bg-black/40"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        />
                        {/* panel */}
                        <motion.aside
                            ref={mobileRef}
                            className="fixed right-0 top-0 z-50 h-full w-[86%] max-w-sm overflow-y-auto border-l p-4 shadow-xl"
                            style={{
                                backgroundColor: 'var(--card-bg)',
                                borderColor: 'var(--card-border)'
                            }}
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "tween", duration: 0.2 }}
                            aria-label="Mobile menu"
                        >
                            <div className="mb-2 flex items-center justify-between">
                                <Link
                                    href="/"
                                    onClick={() => setMobileOpen(false)}
                                    aria-label="Home"
                                    className="flex items-center"
                                >
                                    <Image
                                        src={LOGO}
                                        alt="Logo"
                                        width={112}
                                        height={32}
                                        priority
                                        className="h-8 w-auto"
                                    />
                                </Link>
                                <button
                                    aria-label="Close menu"
                                    onClick={() => setMobileOpen(false)}
                                    className="rounded-lg p-2 transition-colors duration-200"
                                    style={{
                                        color: 'var(--foreground)',
                                        '--hover-bg': 'var(--card-bg)'
                                    }}
                                >
                                    <X className="h-6 w-6" />
                                </button>
                            </div>

                            <div className="mt-4 space-y-1">
                                {NAV.map((item) =>
                                    item.items ? (
                                        <details key={item.label} className="group rounded-lg">
                                            <summary className="flex cursor-pointer list-none items-center justify-between rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200"
                                                style={{
                                                    color: 'var(--foreground)',
                                                    '--hover-bg': 'var(--card-bg)'
                                                }}
                                            >
                                                {item.label}
                                                <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
                                            </summary>
                                            <div className="ml-2 mt-1 space-y-1">
                                                {item.items.map((sub) => (
                                                    <Link
                                                        key={sub.label}
                                                        href={sub.href}
                                                        onClick={() => setMobileOpen(false)}
                                                        className="block rounded-lg px-3 py-2 text-sm transition-colors duration-200"
                                                        style={{
                                                            color: 'var(--foreground)',
                                                            '--hover-bg': 'var(--card-bg)'
                                                        }}
                                                    >
                                                        {sub.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        </details>
                                    ) : (
                                        <Link
                                            key={item.label}
                                            href={item.href}
                                            onClick={() => setMobileOpen(false)}
                                            className="block rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200"
                                            style={{
                                                color: 'var(--foreground)',
                                                '--hover-bg': 'var(--card-bg)'
                                            }}
                                        >
                                            {item.label}
                                        </Link>
                                    )
                                )}
                            </div>

                            <div className="mt-4 border-t pt-4" style={{ borderColor: 'var(--card-border)' }}>
                                <Link
                                    href="/contact"
                                    onClick={() => setMobileOpen(false)}
                                    className="mb-2 block rounded-lg border px-4 py-2 text-center text-sm font-medium transition-colors duration-200"
                                    style={{
                                        color: 'var(--foreground)',
                                        borderColor: 'var(--card-border)',
                                        '--hover-bg': 'var(--card-bg)'
                                    }}
                                >
                                    Contact
                                </Link>
                                <Link
                                    href="/quote"
                                    onClick={() => setMobileOpen(false)}
                                    className="block rounded-lg px-4 py-2 text-center text-sm font-semibold text-white transition-colors duration-200"
                                    style={{
                                        backgroundColor: 'var(--accent)',
                                        '--hover-bg': 'var(--accent-hover)'
                                    }}
                                >
                                    Get a Quote
                                </Link>
                            </div>
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
}
