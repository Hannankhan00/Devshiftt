"use client";
import React, { useState } from 'react';
import { cn } from "@/lib/utils";

// Interactive Grid Pattern for Services Background
function ServicesGridPattern({
  width = 30,
  height = 30,
  squares = [20, 15],
  className,
  squaresClassName,
  ...props
}) {
  const [horizontal, vertical] = squares;
  const [hoveredSquare, setHoveredSquare] = useState(null);
  
  const squareSize = Math.min(width, height);
  
  return (
    <svg
      className={cn(
        "absolute inset-0 h-full w-full opacity-20",
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
              "stroke-gray-600/30 transition-all duration-300 ease-in-out",
              squaresClassName,
            )}
            fill={hoveredSquare === index ? "#4c00ff" : "transparent"}
            fillOpacity={hoveredSquare === index ? "0.3" : "0"}
            onMouseEnter={() => setHoveredSquare(index)}
            onMouseLeave={() => setHoveredSquare(null)}
          />
        );
      })}
    </svg>
  );
}

const ServiceCard = ({ title, description, icon, gradient, delay = 0 }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative overflow-hidden rounded-2xl border transition-all duration-500 ease-out hover:shadow-2xl"
      style={{
        animationDelay: `${delay}ms`,
        backgroundColor: 'var(--card-bg)',
        borderColor: 'var(--card-border)',
        '--hover-border': 'var(--accent)',
        '--hover-shadow': 'var(--accent)'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated Background Gradient */}
      <div 
        className={cn(
          "absolute inset-0 opacity-0 transition-opacity duration-500",
          isHovered && "opacity-100"
        )}
        style={{
          background: gradient
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 p-6 sm:p-8 h-full flex flex-col">
        {/* Icon */}
        <div className="mb-4 sm:mb-6">
          <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
               style={{
                 backgroundColor: 'var(--card-bg)',
                 borderColor: 'var(--card-border)',
                 border: '1px solid'
               }}
          >
            <div className="transition-colors duration-300"
                 style={{
                   color: 'var(--accent)',
                   '--hover-color': 'var(--foreground)'
                 }}
            >
              {icon}
            </div>
          </div>
        </div>
        
        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 transition-all duration-300"
            style={{ color: 'var(--foreground)' }}
        >
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-sm sm:text-base lg:text-lg leading-relaxed flex-grow transition-colors duration-300"
           style={{ color: 'var(--text-muted)' }}
        >
          {description}
        </p>
        
        {/* Learn More Link */}
        <div className="mt-4 sm:mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="font-medium text-sm tracking-wide uppercase"
                style={{ color: 'var(--accent)' }}
          >
            Learn More →
          </span>
        </div>
      </div>
      
      {/* Hover Glow Effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-purple-500/5" />
      </div>
    </div>
  );
};

// Modern SVG Icons
const WebDevIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const AppDevIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <line x1="8" y1="21" x2="16" y2="21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="12" y1="17" x2="12" y2="21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const DesignIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function Services() {
  const services = [
    {
      title: "Web Development",
      description: "Cutting-edge web applications built with modern technologies. From responsive designs to complex web platforms that scale with your business.",
      icon: <WebDevIcon />,
      gradient: "linear-gradient(135deg, rgba(76, 0, 255, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)",
      delay: 0
    },
    {
      title: "App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences. iOS, Android, and React Native solutions.",
      icon: <AppDevIcon />,
      gradient: "linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%)",
      delay: 200
    },
    {
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces that users love. We craft designs that not only look stunning but also drive engagement and conversions.",
      icon: <DesignIcon />,
      gradient: "linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%)",
      delay: 400
    }
  ];

  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden"
        style={{ backgroundColor: 'var(--background)' }}
    >
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-6 sm:mb-8 leading-tight"
              style={{ color: 'var(--foreground)' }}
          >
            Our Services
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed px-4"
              style={{ color: 'var(--text-muted)' }}
          >
            We create exceptional digital experiences through cutting-edge development, 
            beautiful design, and strategic solutions that transform your business.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              gradient={service.gradient}
              delay={service.delay}
            />
          ))}
        </div>


      </div>
    </section>
  );
}
