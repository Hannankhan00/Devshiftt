"use client";
import { cn } from "@/lib/utils";
import React, { useState, useEffect } from "react";
import HeroParticles from "./hero-particles.js";

export default function Hero() {
    const [accentColor, setAccentColor] = useState("#4c00ff");

    useEffect(() => {
        const color = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim();
        if (color) {
            setAccentColor(color);
        }
    }, []);

    return (
    <section className="relative flex h-screen items-center justify-center overflow-hidden w-full"
        style={{ backgroundColor: 'var(--background)' }}
    >
      <HeroParticles
        className="absolute inset-0"
        quantity={150}
        ease={80}
        color={accentColor}
        size={0.4}
        staticity={50}
      />
      
      {/* Content */}
            <div className="relative z-10 text-center max-w-4xl px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight"
                    style={{ color: 'var(--foreground)' }}
                >
                    Transform Your Digital Presence
                </h1>
                <p className="text-base sm:text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed"
                    style={{ color: 'var(--text-muted)' }}
                >
                    We create exceptional digital experiences through cutting-edge web
                    development, beautiful design, and intelligent automation solutions.
                </p>
                <button className="px-6 py-3 font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 text-white"
                    style={{
                        backgroundColor: 'var(--accent)',
                        '--hover-bg': 'var(--accent-hover)'
                    }}
                >
                    Get a Quote
                </button>
            </div>
        </section>
    );
}