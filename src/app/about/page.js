"use client";
import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';

export default function About() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const rotateX = useSpring(useTransform(scrollYProgress, [0, 1], [15, -15]));
  const rotateZ = useSpring(useTransform(scrollYProgress, [0, 1], [5, -5]));
  
  // Mouse-based transforms
  const mouseX = useTransform(() => mousePosition.x, [0, typeof window !== 'undefined' ? window.innerWidth : 1920], [-50, 50]);
  const mouseY = useTransform(() => mousePosition.y, [0, typeof window !== 'undefined' ? window.innerHeight : 1080], [-50, 50]);
  const mouseXReverse = useTransform(() => mousePosition.x, [0, typeof window !== 'undefined' ? window.innerWidth : 1920], [30, -30]);
  const mouseYReverse = useTransform(() => mousePosition.y, [0, typeof window !== 'undefined' ? window.innerHeight : 1080], [30, -30]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    if (typeof window !== 'undefined') {
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const FloatingCard = ({ children, delay = 0, className = "" }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    
    return (
      <motion.div
        ref={ref}
        className={className}
        initial={{ opacity: 0, y: 100, rotateX: 45 }}
        animate={isInView ? { 
          opacity: 1, 
          y: 0, 
          rotateX: 0,
          x: typeof window !== 'undefined' ? (mousePosition.x - window.innerWidth / 2) * 0.02 : 0,
          rotateY: typeof window !== 'undefined' ? (mousePosition.x - window.innerWidth / 2) * 0.01 : 0
        } : {}}
        transition={{ 
          duration: 0.8, 
          delay,
          ease: "easeOut",
          type: "spring",
          stiffness: 100
        }}
        style={{ 
          transformStyle: "preserve-3d",
          perspective: "1000px"
        }}
      >
        {children}
      </motion.div>
    );
  };

  const AnimatedText = ({ text, className = "" }) => {
    const words = text.split(" ");
    return (
      <div className={className}>
        {words.map((word, index) => (
          <motion.span
            key={index}
            className="inline-block mr-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.5, 
              delay: index * 0.1,
              ease: "easeOut"
            }}
          >
            {word}
          </motion.span>
        ))}
      </div>
    );
  };

  const stats = [
    { number: "50+", label: "Projects Completed", icon: "🚀" },
    { number: "3+", label: "Years Experience", icon: "⚡" },
    { number: "100%", label: "Client Satisfaction", icon: "💎" },
    { number: "24/7", label: "Support Available", icon: "🛡️" }
  ];

  const values = [
    {
      title: "Innovation First",
      description: "We stay ahead of the curve, constantly exploring new technologies and methodologies to deliver cutting-edge solutions.",
      icon: "🧠",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Quality Obsessed",
      description: "Every line of code, every pixel, every interaction is crafted with meticulous attention to detail and perfection.",
      icon: "✨",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Client Centric",
      description: "Your success is our success. We build long-term partnerships based on trust, transparency, and mutual growth.",
      icon: "🤝",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Future Ready",
      description: "We don't just build for today, we architect solutions that scale and evolve with your business needs.",
      icon: "🔮",
      color: "from-orange-500 to-red-500"
    }
  ];

  const timeline = [
    {
      year: "2021",
      title: "The Beginning",
      description: "Devshift was born from a passion for creating exceptional digital experiences. Started as a small team with big dreams."
    },
    {
      year: "2022",
      title: "Rapid Growth",
      description: "Expanded our services and team. Delivered our first major enterprise projects and established key partnerships."
    },
    {
      year: "2023",
      title: "Innovation Focus",
      description: "Introduced AI and automation services. Became early adopters of cutting-edge technologies like Next.js 13+ and modern frameworks."
    },
    {
      year: "2024",
      title: "Global Reach",
      description: "Serving clients worldwide with a focus on performance, scalability, and user experience. Building the future, one project at a time."
    }
  ];

  return (
    <div ref={containerRef} className="min-h-screen relative overflow-hidden" style={{ backgroundColor: 'var(--background)' }}>
      {/* Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{
            background: `linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(147, 51, 234, 0.3))`,
            x: mouseX,
            y: mouseY
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-15 blur-3xl"
          style={{
            background: `linear-gradient(135deg, rgba(147, 51, 234, 0.4), rgba(236, 72, 153, 0.4))`,
            x: mouseXReverse,
            y: mouseYReverse
          }}
        />
        </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-6 py-20">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="text-sm font-semibold uppercase tracking-wider mb-6"
                style={{ color: 'var(--accent)' }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                ABOUT US
              </motion.div>
              
              <motion.h1
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight"
                style={{ color: 'var(--foreground)' }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <AnimatedText 
                  text="We Shape Digital"
                  className="block"
                />
                <motion.span
                  className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mt-2"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  Experiences
                </motion.span>
              </motion.h1>
              
              <motion.p
                className="text-xl sm:text-2xl max-w-4xl mx-auto leading-relaxed mb-12"
                style={{ color: 'var(--text-muted)' }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                We&apos;re a passionate team of developers, designers, and digital strategists who believe in the power of technology to transform ideas into extraordinary digital experiences.
              </motion.p>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              {stats.map((stat, index) => (
                <FloatingCard key={index} delay={1.2 + index * 0.1}>
                  <div className="text-center p-6 rounded-2xl border-2 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                       style={{
                         backgroundColor: 'var(--card-bg)',
                         borderColor: 'var(--card-border)'
                       }}>
                    <div className="text-4xl mb-3">{stat.icon}</div>
                    <div className="text-3xl font-bold mb-2" style={{ color: 'var(--accent)' }}>
                      {stat.number}
                    </div>
                    <div className="text-sm font-medium" style={{ color: 'var(--text-muted)' }}>
                      {stat.label}
                    </div>
                  </div>
                </FloatingCard>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <FloatingCard delay={0}>
              <div className="text-center mb-16">
                <h2 className="text-4xl sm:text-5xl font-bold mb-8" style={{ color: 'var(--foreground)' }}>
                  Our Mission
                </h2>
                <p className="text-xl sm:text-2xl max-w-4xl mx-auto leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              To empower businesses with cutting-edge digital solutions that drive growth, efficiency, and innovation. 
                  We believe in the power of technology to transform ideas into reality and create meaningful connections between brands and their audiences.
            </p>
              </div>
            </FloatingCard>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <FloatingCard delay={0}>
              <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16" style={{ color: 'var(--foreground)' }}>
                Our Core Values
              </h2>
            </FloatingCard>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <FloatingCard key={index} delay={0.2 + index * 0.1}>
                  <div className="relative group h-full">
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                         style={{
                           background: `linear-gradient(135deg, ${value.color})`,
                           filter: 'blur(20px)'
                         }}></div>
                    
                    <div className="relative p-8 rounded-2xl border-2 transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl h-full"
                         style={{
                           backgroundColor: 'var(--card-bg)',
                           borderColor: 'var(--card-border)'
                         }}>
                      <div className="text-4xl mb-4">{value.icon}</div>
                      <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
                        {value.title}
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                        {value.description}
                      </p>
                    </div>
                  </div>
                </FloatingCard>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <FloatingCard delay={0}>
              <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16" style={{ color: 'var(--foreground)' }}>
                Our Journey
              </h2>
            </FloatingCard>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full rounded-full"
                   style={{ backgroundColor: 'var(--accent)', opacity: 0.3 }}></div>
              
              {timeline.map((item, index) => (
                <FloatingCard key={index} delay={0.2 + index * 0.1}>
                  <div className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className="w-1/2 px-8">
                      <div className="p-8 rounded-2xl border-2 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                           style={{
                             backgroundColor: 'var(--card-bg)',
                             borderColor: 'var(--card-border)'
                           }}>
                        <div className="text-2xl font-bold mb-2" style={{ color: 'var(--accent)' }}>
                          {item.year}
                        </div>
                        <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--foreground)' }}>
                          {item.title}
                        </h3>
                        <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                          {item.description}
                        </p>
          </div>
        </div>

                    {/* Timeline Dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4"
                         style={{ 
                           backgroundColor: 'var(--background)',
                           borderColor: 'var(--accent)'
                         }}></div>
                    
                    <div className="w-1/2"></div>
                  </div>
                </FloatingCard>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <FloatingCard delay={0}>
              <div className="p-12 rounded-3xl border-2 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                   style={{
                     backgroundColor: 'var(--card-bg)',
                     borderColor: 'var(--card-border)'
                   }}>
                <h2 className="text-4xl sm:text-5xl font-bold mb-6" style={{ color: 'var(--foreground)' }}>
                  Ready to Build Something Amazing?
                </h2>
                <p className="text-xl mb-8 leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                  Let&apos;s discuss how we can help bring your vision to life and create digital experiences that truly matter.
                </p>
                <motion.a
              href="/contact"
                  className="inline-flex items-center px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  style={{
                    background: 'linear-gradient(135deg, var(--accent), var(--accent-hover))',
                    boxShadow: '0 10px 30px rgba(59, 130, 246, 0.3)'
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Your Project
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.a>
              </div>
            </FloatingCard>
          </div>
        </section>
      </div>
    </div>
  );
}
