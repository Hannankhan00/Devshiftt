"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Zap, Users, DollarSign } from "lucide-react";

// Enhanced Animated Counter Component
const AnimatedCounter = ({ end, duration = 2.5, suffix = "", prefix = "", decimals = 0 }) => {
  const [count, setCount] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView && !isAnimating) {
      setIsAnimating(true);
      
      let startTime;
      const startValue = 0;
      
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / (duration * 1000), 1);
        
        // Enhanced easing function for more dramatic effect
        const easeOutBack = 1 - Math.pow(1 - progress, 3) * Math.cos(progress * Math.PI / 2);
        const currentValue = startValue + (end - startValue) * easeOutBack;
        
        // Format number based on decimals
        const formattedValue = decimals > 0 ? currentValue.toFixed(decimals) : Math.floor(currentValue);
        setCount(parseFloat(formattedValue));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          // Ensure final value is exact
          setCount(end);
        }
      };
      
      // Small delay for better visual effect
      setTimeout(() => {
        requestAnimationFrame(animate);
      }, 300);
    }
  }, [isInView, end, duration, decimals, isAnimating]);

  return (
    <motion.span 
      ref={ref} 
      className="font-bold inline-block"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {prefix}{count.toLocaleString()}{suffix}
    </motion.span>
  );
};

// Metric Card Component
const MetricCard = ({ icon: Icon, value, label, description, delay = 0 }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="group relative h-full"
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      viewport={{ once: true }}
      whileHover={{ y: -8, scale: 1.02 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      {/* Glowing gradient background shadow */}
      <motion.div
        className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500 to-purple-500 blur-2xl"
        animate={{ 
          opacity: hovered ? 0.6 : 0,
          scale: hovered ? 1.1 : 1
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />
      
      <div 
        className="relative p-8 rounded-3xl border transition-all duration-500 overflow-hidden h-full flex flex-col"
        style={{
          backgroundColor: 'var(--card-bg)',
          borderColor: hovered ? 'var(--accent)' : 'var(--card-border)',
          boxShadow: hovered ? '0 25px 50px -12px rgba(76, 0, 255, 0.15)' : '0 4px 6px rgba(0, 0, 0, 0.05)'
        }}
      >
        {/* Animated gradient overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 opacity-0 transition-opacity duration-500"
          animate={{ opacity: hovered ? 0.05 : 0 }}
        />
        
        {/* Floating elements */}
        <motion.div
          className="absolute top-4 right-4 w-16 h-16 rounded-full blur-xl pointer-events-none"
          style={{ backgroundColor: 'var(--accent)', opacity: 0.1 }}
          animate={{
            x: hovered ? [0, 10, -5, 0] : 0,
            y: hovered ? [0, -5, 5, 0] : 0,
            scale: hovered ? [1, 1.1, 1] : 1
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        
        <div className="relative z-10">
          {/* Icon */}
          <motion.div
            className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300"
            style={{
              backgroundColor: hovered ? 'var(--accent)' : 'var(--card-border)',
              color: hovered ? '#ffffff' : 'var(--text-muted)'
            }}
            animate={{ rotate: hovered ? 360 : 0 }}
            transition={{ duration: 0.6 }}
          >
            <Icon size={28} />
          </motion.div>
          
          {/* Value */}
          <motion.h3
            className="text-4xl md:text-5xl font-extrabold mb-2 transition-colors duration-300 relative"
            style={{ color: hovered ? 'var(--accent)' : 'var(--foreground)' }}
          >
            {value}
            {/* Animated pulse effect during counting */}
            <motion.div
              className="absolute inset-0 rounded-lg"
              style={{ backgroundColor: 'var(--accent)', opacity: 0.1 }}
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.h3>
          
          {/* Label */}
          <motion.h4
            className="text-lg font-semibold mb-2 transition-colors duration-300"
            style={{ color: hovered ? 'var(--accent)' : 'var(--foreground)' }}
          >
            {label}
          </motion.h4>
          
          {/* Description */}
          <motion.p
            className="text-sm leading-relaxed transition-colors duration-300 flex-grow"
            style={{ color: 'var(--text-muted)' }}
          >
            {description}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default function Results() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
        duration: 0.6,
      },
    },
  };

  const titleVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  const metrics = [
    {
      icon: Zap,
      value: <AnimatedCounter end={95} suffix="%" duration={2.8} />,
      label: "Speed Improvement",
      description: "Average performance boost across all projects",
      delay: 0.2
    },
    {
      icon: Users,
      value: <AnimatedCounter end={150} suffix="+" duration={3.0} />,
      label: "Happy Clients",
      description: "Businesses transformed with our solutions",
      delay: 0.4
    },
    {
      icon: DollarSign,
      value: <AnimatedCounter end={300} suffix="%" duration={3.2} />,
      label: "Conversion Increase",
      description: "Average improvement in user engagement",
      delay: 0.6
    },
    {
      icon: DollarSign,
      value: <AnimatedCounter end={2.5} prefix="$" suffix="M+" decimals={1} duration={3.5} />,
      label: "Revenue Generated",
      description: "Total value created for our clients",
      delay: 0.8
    }
  ];

  return (
    <motion.section
      className="relative py-24 md:py-32 lg:py-40 overflow-hidden"
      style={{ backgroundColor: 'var(--background)' }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute inset-0 opacity-5 pointer-events-none"
        initial={{ scale: 0, rotate: 0 }}
        animate={{ 
          scale: [0, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full blur-3xl"></div>
      </motion.div>

      <div className="relative z-10 container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          variants={titleVariants}
        >
          <motion.h2
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 leading-tight"
            style={{ color: 'var(--foreground)' }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
          >
            Proven Results
          </motion.h2>
          
          <motion.p
            className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed"
            style={{ color: 'var(--text-muted)' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Real metrics from real projects. See how we&apos;ve transformed businesses 
            with cutting-edge development and strategic solutions.
          </motion.p>
        </motion.div>

        {/* Metrics Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-10"
          variants={containerVariants}
        >
          {metrics.map((metric, index) => (
            <MetricCard
              key={index}
              icon={metric.icon}
              value={metric.value}
              label={metric.label}
              description={metric.description}
              delay={metric.delay}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
