"use client";
import { cn } from "@/lib/utils";
import React, { useState } from "react";

/**
 * InteractiveGridPattern is a component that renders a grid pattern with interactive squares.
 *
 * @param {Object} props - The component props
 * @param {number} [props.width=40] - The width of each square
 * @param {number} [props.height=40] - The height of each square
 * @param {[number, number]} [props.squares=[24, 24]] - The number of squares in the grid [horizontal, vertical]
 * @param {string} [props.className] - The class name of the grid
 * @param {string} [props.squaresClassName] - The class name of the squares
 * @param {Object} props - Additional SVG props
 */
export function InteractiveGridPattern({
  width = 40,
  height = 40,
  squares = [24, 24],
  className,
  squaresClassName,
  ...props
}) {
  const [horizontal, vertical] = squares;
  const [hoveredSquare, setHoveredSquare] = useState(null);
  
  // Calculate square size to maintain perfect squares
  const squareSize = Math.min(width, height);
  
  return (
    <svg
      className={cn(
        "absolute inset-0 h-full w-full border border-gray-400/30",
        className,
      )}
      viewBox={`0 0 ${squareSize * horizontal} ${squareSize * vertical}`}
      preserveAspectRatio="xMidYMid slice"
      {...props}
    >
      {Array.from({ length: horizontal * vertical }).map((_, index) => {
        const x = (index % horizontal) * squareSize;
        const y = Math.floor(index / horizontal) * squareSize;
        return (
          <rect
            key={index}
            x={x}
            y={y}
            width={squareSize}
            height={squareSize}
            className={cn(
              "stroke-gray-400/30 transition-all duration-100 ease-in-out [&:not(:hover)]:duration-1000",
              squaresClassName,
            )}
            fill={hoveredSquare === index ? "#4c00ff" : "transparent"}
            fillOpacity={hoveredSquare === index ? "0.6" : "0"}
            onMouseEnter={() => setHoveredSquare(index)}
            onMouseLeave={() => setHoveredSquare(null)}
          />
        );
      })}
    </svg>
  );
}

export default function Hero() {
    return (
    <section className="relative flex h-screen items-center justify-center overflow-hidden w-full"
        style={{ backgroundColor: 'var(--background)' }}
    >
      {/* Interactive Grid Pattern Background */}
      <InteractiveGridPattern
        width={40}
        height={40}
        squares={[24, 24]}
        className="border-gray-800/50"
        squaresClassName="stroke-gray-800/50"
        style={{
          '--hover-fill': '#4c00ff',
          '--hover-opacity': '0.5'
        }}
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
                    development, beautiful design, intelligent automation, and strategic
                    marketing solutions.
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
