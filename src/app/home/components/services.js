"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Utility function for className merging
function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

const ServiceCard = ({ title, description, icon, gradient, delay = 0, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9,
      rotateX: 15
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
        delay: delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        delay: delay + 0.3
      }
    }
  };

  const hoverVariants = {
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  return (
    <motion.div
      className="relative group cursor-pointer"
      style={{ perspective: '1000px' }}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      whileHover="hover"
      animate={hoverVariants}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-xl border transition-all duration-700 shadow-2xl h-full" style={{backgroundColor: isHovered ? 'var(--accent)' : 'var(--card-bg)', borderColor: 'var(--card-border)'}}>
        
        <motion.div 
          className="absolute inset-0 opacity-0"
          style={{ background: gradient }}
          animate={{ opacity: isHovered ? 0.1 : 0 }}
          transition={{ duration: 0.5 }}
        />
        
        <motion.div 
          className="absolute top-4 right-4 w-20 h-20 rounded-full blur-xl"
          style={{backgroundColor: 'var(--accent)', opacity: 0.1}}
          animate={{ 
            x: isHovered ? [0, 10, -10, 0] : 0,
            y: isHovered ? [0, -5, 5, 0] : 0
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div 
          className="relative z-10 p-8 h-full flex flex-col"
          variants={contentVariants}
        >
          <motion.div 
            className="mb-6"
            whileHover={{ 
              rotate: [0, -5, 5, 0],
              scale: 1.1
            }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-16 h-16 rounded-2xl backdrop-blur-sm border flex items-center justify-center shadow-lg" style={{backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-border)'}}>
              <motion.div 
                animate={{ 
                  scale: isHovered ? 1.1 : 1
                }}
                transition={{ duration: 0.3 }}
                style={{
                  color: 'var(--accent)'
                }}
              >
                {icon}
              </motion.div>
            </div>
          </motion.div>
          
          <motion.h3 
            className="text-2xl font-bold mb-4 leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: delay + 0.4 }}
            style={{color: isHovered ? 'white' : 'var(--foreground)'}}
          >
            {title}
          </motion.h3>
          
          <motion.p 
            className="leading-relaxed flex-grow text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: delay + 0.5 }}
            style={{color: isHovered ? 'white' : 'var(--text-muted)'}}
          >
            {description}
          </motion.p>
          
          <motion.div 
            className="mt-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ 
              opacity: isHovered ? 1 : 0.7,
              x: isHovered ? 0 : -10
            }}
            transition={{ duration: 0.3 }}
          >
            <span className="inline-flex items-center font-medium text-sm tracking-wide uppercase transition-colors" style={{color: isHovered ? 'white' : 'var(--accent)'}}>
              Learn More 
              <motion.span
                className="ml-2"
                animate={{ x: isHovered ? 5 : 0 }}
                transition={{ duration: 0.3 }}
              >
                →
              </motion.span>
            </span>
          </motion.div>
        </motion.div>
        
      </div>
    </motion.div>
  );
};

// Enhanced SVG Icons with Animation
const WebDevIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
    <motion.path 
      d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" 
      stroke="currentColor" 
      strokeWidth="2" 
      fill="none" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, ease: "easeInOut" }}
    />
  </svg>
);

const AppDevIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
    <motion.rect 
      x="2" y="3" width="20" height="14" rx="2" ry="2" 
      stroke="currentColor" strokeWidth="2" fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    />
    <motion.line 
      x1="8" y1="21" x2="16" y2="21" 
      stroke="currentColor" strokeWidth="2" strokeLinecap="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
    />
    <motion.line 
      x1="12" y1="17" x2="12" y2="21" 
      stroke="currentColor" strokeWidth="2" strokeLinecap="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1, delay: 0.7, ease: "easeInOut" }}
    />
  </svg>
);

const DesignIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
    <motion.path 
      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" 
      stroke="currentColor" 
      strokeWidth="2" 
      fill="none" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      initial={{ pathLength: 0, scale: 0 }}
      animate={{ pathLength: 1, scale: 1 }}
      transition={{ duration: 2, ease: "easeInOut" }}
    />
  </svg>
);

const AiIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
    <motion.path 
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
      stroke="currentColor" 
      strokeWidth="2" 
      fill="none" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      initial={{ pathLength: 0, rotate: -180 }}
      animate={{ pathLength: 1, rotate: 0 }}
      transition={{ duration: 2, ease: "easeInOut" }}
    />
    <motion.circle
      cx="12" cy="8" r="1"
      fill="currentColor"
      initial={{ scale: 0 }}
      animate={{ scale: [0, 1.2, 1] }}
      transition={{ duration: 1, delay: 1, ease: "easeOut" }}
    />
  </svg>
);

// Floating Background Elements
const FloatingElements = () => (
  <>
    {Array.from({ length: 6 }, (_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full blur-xl"
        style={{
          width: Math.random() * 200 + 50,
          height: Math.random() * 200 + 50,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          backgroundColor: 'var(--accent)',
          opacity: 0.1
        }}
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -100, 50, 0],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{
          duration: Math.random() * 10 + 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: Math.random() * 5,
        }}
      />
    ))}
  </>
);

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const services = [
    {
      title: "Web Development",
      description: "Cutting-edge web applications built with modern technologies. From responsive designs to complex web platforms that scale with your business and deliver exceptional performance.",
      icon: <WebDevIcon />,
      gradient: "linear-gradient(135deg, rgba(76, 0, 255, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)",
      delay: 0.2
    },
    {
      title: "App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences. iOS, Android, and React Native solutions that engage your audience.",
      icon: <AppDevIcon />,
      gradient: "linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%)",
      delay: 0.4
    },
    {
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces that users love. We craft designs that not only look stunning but also drive engagement, conversions, and business growth.",
      icon: <DesignIcon />,
      gradient: "linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%)",
      delay: 0.6
    },
    {
      title: "AI Automation",
      description: "Leverage the power of artificial intelligence to automate your business processes, improve efficiency, and unlock new opportunities for sustainable growth.",
      icon: <AiIcon />,
      gradient: "linear-gradient(135deg, rgba(236, 72, 153, 0.1) 0%, rgba(239, 68, 68, 0.1) 100%)",
      delay: 0.8
    }
  ];

  return (
    <section className="relative py-24 md:py-32 lg:py-40 overflow-hidden min-h-screen" style={{backgroundColor: 'var(--background)'}}>
      <FloatingElements />
      
      <div className="absolute inset-0" 
           style={{
             background: 'radial-gradient(circle at center, transparent 0%, var(--background) 100%)'
           }} />
      
      <motion.div 
        className="relative z-10 container mx-auto px-4 max-w-7xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div 
          className="text-center mb-20"
          variants={headerVariants}
        >
          
          <motion.h2 
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{color: 'var(--foreground)'}}
          >
            Our Services
          </motion.h2>
          
          <motion.p 
            className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{color: 'var(--text-muted)'}}
          >
            We create exceptional digital experiences through cutting-edge development, 
            beautiful design, and strategic solutions that transform your business into digital success stories.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-10"
          variants={containerVariants}
        >
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              gradient={service.gradient}
              delay={service.delay}
              index={index}
            />
          ))}
        </motion.div>

      </motion.div>
    </section>
  );
}