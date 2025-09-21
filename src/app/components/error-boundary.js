"use client";
import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center"
             style={{ backgroundColor: 'var(--background)' }}
        >
          <div className="text-center p-8">
            <h1 className="text-2xl font-bold mb-4"
                style={{ color: 'var(--foreground)' }}
            >
              Something went wrong
            </h1>
            <p className="mb-4"
               style={{ color: 'var(--text-muted)' }}
            >
              We&apos;re sorry, but something unexpected happened.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 rounded-lg text-white transition-colors duration-200"
              style={{
                backgroundColor: 'var(--accent)',
                '--hover-bg': 'var(--accent-hover)'
              }}
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
