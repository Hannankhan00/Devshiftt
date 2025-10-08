"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function FinalCTA() {
  const [hoveredLink, setHoveredLink] = useState(null);

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

  const quickLinks = [
    {
      title: "All Services",
      description: "Explore our full range of solutions",
      href: "/services",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.0.3",
      gradient: "from-blue-500 to-purple-500",
    },
    {
      title: "Next.js Development",
      description: "Lightning-fast web applications",
      href: "/services/web",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Flutter Apps",
      description: "Cross-platform mobile excellence",
      href: "/services/web",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
      gradient: "from-pink-500 to-orange-500",
    },
    {
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces",
      href: "/services/design",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
      gradient: "from-orange-500 to-red-500",
    },
    {
      title: "Our Work",
      description: "See our portfolio of projects",
      href: "/work",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "Get In Touch",
      description: "Start your project today",
      href: "/contact",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=2126&auto=format&fit=crop&ixlib=rb-4.0.3",
      gradient: "from-cyan-500 to-blue-500",
    },
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
      {/* Animated background with multiple gradient orbs */}
      <motion.div
        className="absolute inset-0 opacity-10 pointer-events-none"
        initial={{ scale: 0, rotate: 0 }}
        animate={{ 
          scale: [0, 1.3, 1],
          rotate: [0, 360],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-56 h-56 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-48 h-48 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full blur-3xl"></div>
      </motion.div>

      <div className="relative z-10 container mx-auto px-4 max-w-7xl">
        {/* Main CTA */}
        <motion.div 
          className="text-center mb-20"
          variants={titleVariants}
        >
          {/* Decorative top element */}
          <motion.div
            className="flex justify-center mb-8"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="w-20 h-20 rounded-full flex items-center justify-center"
              style={{ backgroundColor: 'var(--accent)' }}
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Sparkles size={32} color="#ffffff" />
            </motion.div>
          </motion.div>

          <motion.h2
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 leading-tight"
            style={{ color: 'var(--foreground)' }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
          >
            Let&apos;s Build Your Next Big Thing
          </motion.h2>
          
          <motion.p
            className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed mb-12"
            style={{ color: 'var(--text-muted)' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Ready to transform your vision into reality? Let&apos;s create something 
            extraordinary together.
          </motion.p>

          {/* Primary CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="relative inline-block"
          >
            {/* Glowing effect behind button */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 blur-2xl"
              animate={{
                opacity: [0.5, 0.8, 0.5],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <Link href="/contact">
              <motion.button
                className="relative px-12 py-6 rounded-full font-bold text-lg text-white overflow-hidden group"
                style={{ backgroundColor: 'var(--accent)' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Button shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
                  animate={{
                    x: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                
                <span className="relative flex items-center gap-3">
                  Start Your Project
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <ArrowRight size={24} />
                  </motion.span>
                </span>
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Quick Links Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h3
            className="text-2xl md:text-3xl font-bold text-center mb-12"
            style={{ color: 'var(--foreground)' }}
          >
            Quick Links
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickLinks.map((link, index) => {
              const isHovered = hoveredLink === index;

              return (
                <Link key={index} href={link.href}>
                  <motion.div
                    className="group relative h-full"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    onHoverStart={() => setHoveredLink(index)}
                    onHoverEnd={() => setHoveredLink(null)}
                  >
                    {/* Glowing gradient background */}
                    <motion.div
                      className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${link.gradient} blur-xl`}
                      animate={{ 
                        opacity: isHovered ? 0.4 : 0,
                        scale: isHovered ? 1.1 : 1
                      }}
                      transition={{ duration: 0.3 }}
                    />

                    <div
                      className="relative rounded-2xl border transition-all duration-300 h-full overflow-hidden"
                      style={{
                        backgroundColor: 'var(--card-bg)',
                        borderColor: isHovered ? 'var(--accent)' : 'var(--card-border)',
                      }}
                    >
                      {/* Image */}
                      <motion.div
                        className="relative h-32 w-full overflow-hidden"
                        animate={{
                          scale: isHovered ? 1.05 : 1,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <img
                          src={link.image}
                          alt={link.title}
                          className="w-full h-full object-cover"
                        />
                        {/* Image overlay */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"
                          animate={{ opacity: isHovered ? 0.3 : 0.1 }}
                          transition={{ duration: 0.3 }}
                        />
                      </motion.div>

                      {/* Content */}
                      <div className="p-6">
                        {/* Gradient overlay */}
                        <motion.div
                          className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${link.gradient} opacity-0`}
                          animate={{ opacity: isHovered ? 0.05 : 0 }}
                          transition={{ duration: 0.3 }}
                        />

                        <div className="relative z-10">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              {/* Title */}
                              <h4
                                className="text-xl font-bold mb-2"
                                style={{ color: isHovered ? 'var(--accent)' : 'var(--foreground)' }}
                              >
                                {link.title}
                              </h4>

                              {/* Description */}
                              <p
                                className="text-sm"
                                style={{ color: 'var(--text-muted)' }}
                              >
                                {link.description}
                              </p>
                            </div>

                            {/* Round Arrow Button */}
                            <motion.button
                              className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                              style={{ 
                                backgroundColor: isHovered ? 'var(--accent)' : 'var(--card-border)',
                              }}
                              animate={{ 
                                x: isHovered ? 3 : 0,
                                scale: isHovered ? 1.1 : 1,
                              }}
                              transition={{ duration: 0.3 }}
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <ArrowRight 
                                size={16} 
                                style={{ color: isHovered ? '#ffffff' : 'var(--text-muted)' }}
                              />
                            </motion.button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </motion.div>

        {/* Bottom decorative text */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          viewport={{ once: true }}
        >
          <motion.p
            className="text-lg"
            style={{ color: 'var(--text-muted)' }}
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            🚀 Your success story starts here
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  );
}

