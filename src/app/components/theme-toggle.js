"use client";
import { useTheme } from "../../contexts/ThemeContext";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  // Don't render until mounted to prevent hydration mismatch
  if (typeof window === 'undefined') {
    return (
      <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg border"
           style={{
             backgroundColor: 'var(--card-bg)',
             borderColor: 'var(--card-border)',
             color: 'var(--foreground)'
           }}
      >
        <div className="w-5 h-5" />
      </div>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="inline-flex items-center justify-center w-10 h-10 rounded-lg border transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2"
      style={{
        backgroundColor: 'var(--card-bg)',
        borderColor: 'var(--card-border)',
        color: 'var(--foreground)',
        '--tw-ring-offset-color': 'var(--background)',
        '--tw-ring-color': 'var(--accent)'
      }}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5" />
      ) : (
        <Moon className="w-5 h-5" />
      )}
    </button>
  );
}
