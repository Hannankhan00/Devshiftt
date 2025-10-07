"use client";
import React from "react";
import { motion } from "framer-motion";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export default function Testimonials() {
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

  const testimonials = [
    {
      quote:
        "Working with Devshift transformed our digital presence completely. Their attention to detail and innovative approach exceeded all expectations.",
      name: "Sarah Chen",
      designation: "CEO, TechFlow Solutions",
      src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      quote:
        "The team delivered a flawless web application that significantly improved our conversion rates. Their expertise in modern technologies is unmatched.",
      name: "Michael Rodriguez",
      designation: "CTO, InnovateSphere",
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      quote:
        "Outstanding UI/UX design that our users love. The intuitive interface and smooth interactions have dramatically increased user engagement.",
      name: "Emily Watson",
      designation: "Product Director, CloudScale",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      quote:
        "Their AI automation solutions saved us countless hours and streamlined our entire workflow. The ROI was evident within the first month.",
      name: "James Kim",
      designation: "Operations Manager, DataPro",
      src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      quote:
        "Professional, responsive, and incredibly talented. They turned our vision into reality and delivered beyond what we imagined possible.",
      name: "Lisa Thompson",
      designation: "Founder, FutureNet",
      src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
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
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full blur-3xl"></div>
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
            Client Testimonials
          </motion.h2>
          
          <motion.p
            className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed"
            style={{ color: 'var(--text-muted)' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Don&apos;t just take our word for it. Hear what our clients have to say 
            about their experience working with us.
          </motion.p>
        </motion.div>

        {/* Animated Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
        </motion.div>
      </div>
    </motion.section>
  );
}

