'use client';

import { useEffect, useRef, useState } from "react";
import { Lightbulb, Layers, Monitor, FlaskConical, Rocket, Headphones } from "lucide-react";

const steps = [
  {
    id: "discovery",
    icon: Lightbulb,
    title: "Discovery",
    description: "Analyze goals, audience, and requirements to create your strategic roadmap.",
    position: { x: 200, y: 100 },
    row: "top"
  },
  {
    id: "strategy",
    icon: Layers,
    title: "Strategy",
    description: "Comprehensive planning and architecture design for scalability and performance.",
    position: { x: 600, y: 100 },
    featured: true,
    row: "top"
  },
  {
    id: "development",
    icon: Monitor,
    title: "Development",
    description: "Building secure solutions using cutting-edge technologies and best practices.",
    position: { x: 1000, y: 100 },
    row: "top"
  },
  {
    id: "quality",
    icon: FlaskConical,
    title: "Quality Assurance",
    description: "Rigorous testing across all devices and browsers to ensure perfection.",
    position: { x: 200, y: 560 },
    row: "bottom"
  },
  {
    id: "deployment",
    icon: Rocket,
    title: "Deployment",
    description: "Seamless launch with zero downtime and comprehensive monitoring.",
    position: { x: 600, y: 560 },
    row: "bottom"
  },
  {
    id: "maintenance",
    icon: Headphones,
    title: "Support",
    description: "Ongoing maintenance and dedicated support to keep everything running smoothly.",
    position: { x: 1000, y: 560 },
    row: "bottom"
  },
];

export default function Process() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [screenSize, setScreenSize] = useState('desktop');
  const sectionRef = useRef(null);
  const pathRef = useRef(null);
  
  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth < 768 ? 'mobile' : 'desktop');
    };

    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      
      const startPoint = windowHeight;
      const endPoint = -sectionHeight;
      const scrollableDistance = startPoint - endPoint;
      
      let progress = (startPoint - sectionTop) / scrollableDistance;
      progress = Math.max(0, Math.min(1, progress));
      
      setScrollProgress(progress);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const activeStepIndex = Math.min(
    Math.floor(scrollProgress * steps.length),
    steps.length - 1
  );

  // Perfect S-shape with smooth rounded edges
  const topY = steps[0].position.y;
  const bottomY = steps[3].position.y;
  const midY = (topY + bottomY) / 2;
  
  // Extended curve points for smooth rounded edges
  const rightExtend = steps[2].position.x + 200;
  const curveRadius = 120;
  
  const pathD = `
    M ${steps[0].position.x} ${steps[0].position.y}
    L ${steps[1].position.x} ${steps[1].position.y}
    L ${steps[2].position.x} ${steps[2].position.y}
    L ${rightExtend - curveRadius} ${topY}
    Q ${rightExtend} ${topY} ${rightExtend} ${topY + curveRadius}
    L ${rightExtend} ${midY - curveRadius}
    Q ${rightExtend} ${midY} ${rightExtend - curveRadius} ${midY}
    L ${steps[3].position.x - rightExtend + steps[2].position.x + curveRadius} ${midY}
    Q ${steps[3].position.x - rightExtend + steps[2].position.x} ${midY} ${steps[3].position.x - rightExtend + steps[2].position.x} ${midY + curveRadius}
    L ${steps[3].position.x - rightExtend + steps[2].position.x} ${bottomY - curveRadius}
    Q ${steps[3].position.x - rightExtend + steps[2].position.x} ${bottomY} ${steps[3].position.x - rightExtend + steps[2].position.x + curveRadius} ${bottomY}
    L ${steps[3].position.x} ${steps[3].position.y}
    L ${steps[4].position.x} ${steps[4].position.y}
    L ${steps[5].position.x} ${steps[5].position.y}
  `;

  const pathLength = 5000;

  // Mobile card layout
  const renderMobileView = () => {
    const cardSpacing = 120; // Space between cards
    const lineLength = cardSpacing - 40; // Length of connecting lines
    
    return (
      <div className="space-y-8 px-4">
        {steps.map((step, index) => {
          const isActive = index <= activeStepIndex;
          const Icon = step.icon;
          
          return (
            <div key={step.id} className="relative">
              {/* Connecting line */}
              {index < steps.length - 1 && (
                <div 
                  className="absolute left-8 top-16 w-0.5 h-20 transition-all duration-500"
                  style={{ backgroundColor: 'var(--card-border)' }}
                >
                  <div 
                    className="w-full transition-all duration-500 ease-out"
                    style={{
                      backgroundColor: 'var(--accent)',
                      height: isActive ? '100%' : '0%',
                      transitionDelay: `${index * 100}ms`
                    }}
                  />
                </div>
              )}
              
              {/* Process card */}
              <div 
                className="relative rounded-xl p-6 shadow-lg border transition-all duration-500"
                style={{
                  backgroundColor: 'var(--card-bg)',
                  borderColor: isActive ? 'var(--accent)' : 'var(--card-border)',
                  boxShadow: isActive ? '0 10px 25px rgba(76, 0, 255, 0.15)' : '0 4px 6px rgba(0, 0, 0, 0.05)',
                  transform: isActive ? 'translateX(0)' : 'translateX(-10px)',
                  opacity: isActive ? 1 : 0.7
                }}
              >
                {/* Icon */}
                <div className="flex items-center mb-4">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500"
                    style={{
                      backgroundColor: isActive ? 'var(--accent)' : 'var(--card-border)',
                      color: isActive ? '#ffffff' : 'var(--text-muted)'
                    }}
                  >
                    <Icon size={24} />
                  </div>
                  <div className="ml-4">
                    <h3 
                      className="text-lg font-bold transition-colors"
                      style={{
                        color: isActive ? "var(--foreground)" : "var(--text-muted)"
                      }}
                    >
                      {step.title}
                    </h3>
                    {step.featured && (
                      <span 
                        className="text-xs px-2 py-1 rounded-full"
                        style={{
                          backgroundColor: isActive ? 'rgba(76, 0, 255, 0.1)' : 'var(--card-border)',
                          color: isActive ? 'var(--accent)' : 'var(--text-muted)'
                        }}
                      >
                        Featured
                      </span>
                    )}
                  </div>
                </div>
                
                {/* Description */}
                <p 
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--text-muted)" }}
                >
                  {step.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  // Desktop S-curve layout (unchanged)
  const renderDesktopView = () => (
    <div className="relative max-w-6xl mx-auto">
      <div className="relative w-full" style={{ height: "700px" }}>
        <svg 
          className="absolute inset-0 w-full h-full" 
          viewBox="0 0 1200 800"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Background path */}
          <path
            d={pathD}
            fill="none"
            stroke="var(--card-border)"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.3"
          />

          {/* Animated progress path */}
          <path
            ref={pathRef}
            d={pathD}
            fill="none"
            stroke="var(--accent)"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray={pathLength}
            strokeDashoffset={pathLength - scrollProgress * pathLength}
            style={{
              transition: "stroke-dashoffset 0.1s linear",
              filter: "drop-shadow(0 0 8px rgba(76, 0, 255, 0.5))"
            }}
          />

          {/* Step icons */}
          {steps.map((step, index) => {
            const isActive = index <= activeStepIndex;
            const Icon = step.icon;
            const radius = step.featured ? 42 : 32;
            const iconSize = step.featured ? 32 : 24;
            
            return (
              <g key={step.id}>
                {/* Outer circle (border effect) */}
                <circle
                  cx={step.position.x}
                  cy={step.position.y}
                  r={radius + 3}
                  className="transition-all duration-500"
                  fill="none"
                  stroke={isActive ? "var(--accent)" : "var(--card-border)"}
                  strokeWidth={step.featured ? "3" : "2"}
                  opacity={step.featured ? "0.4" : "0.6"}
                />
                
                {/* Inner circle */}
                <circle
                  cx={step.position.x}
                  cy={step.position.y}
                  r={radius}
                  className="transition-all duration-500"
                  fill={isActive ? "var(--accent)" : "var(--background)"}
                  stroke={isActive ? "var(--accent)" : "var(--card-border)"}
                  strokeWidth="2"
                  filter={isActive && step.featured ? "url(#glow)" : undefined}
                  style={{
                    boxShadow: isActive ? "0 0 20px rgba(76, 0, 255, 0.3)" : "none"
                  }}
                />
                
                {/* Icon */}
                <foreignObject
                  x={step.position.x - iconSize / 2}
                  y={step.position.y - iconSize / 2}
                  width={iconSize}
                  height={iconSize}
                  className="pointer-events-none"
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <Icon
                      className="transition-colors duration-500"
                      style={{
                        width: iconSize,
                        height: iconSize,
                        color: isActive ? "#ffffff" : "var(--text-muted)"
                      }}
                    />
                  </div>
                </foreignObject>
              </g>
            );
          })}
        </svg>

        {/* Step labels */}
        {steps.map((step, index) => {
          const isActive = index <= activeStepIndex;
          
          return (
            <div
              key={`label-${step.id}`}
              className="absolute"
              style={{
                left: `${(step.position.x / 1200) * 100}%`,
                top: `${(step.position.y / 800) * 100}%`,
                transform: "translate(-50%, 0)",
                width: "240px",
                paddingTop: "70px",
              }}
            >
              <h3
                className="text-lg font-bold transition-colors text-center mb-3"
                style={{
                  color: isActive ? "var(--foreground)" : "var(--text-muted)"
                }}
              >
                {step.title}
              </h3>
              <p 
                className="text-sm text-center leading-relaxed"
                style={{ color: "var(--text-muted)", lineHeight: "1.6" }}
              >
                {step.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <div
      ref={sectionRef}
      className="relative min-h-[200vh] py-20"
      style={{ backgroundColor: 'var(--background)' }}
    >
      <div className="sticky top-20 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: 'var(--foreground)' }}
          >
            Our Process
          </h2>
          <p 
            className="text-lg max-w-2xl mx-auto"
            style={{ color: 'var(--text-muted)' }}
          >
            Follow our proven methodology from concept to completion
          </p>
        </div>

        {/* Conditional rendering based on screen size */}
        {screenSize === 'mobile' ? renderMobileView() : renderDesktopView()}
      </div>
    </div>
  );
}
