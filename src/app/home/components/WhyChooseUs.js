"use client";
import { Rocket, Users, GitMerge, LifeBuoy } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { motion } from "framer-motion";

const features = [
  {
    title: "Speed & SEO",
    description: "We build websites and apps that are optimized for performance, scoring high on Lighthouse and ranking better on search engines.",
    icon: <Rocket />,
    area: "md:col-span-7",
  },
  {
    title: "Expert Team",
    description: "Work directly with our senior developers, designers, and AI specialists—no middle layers, just results.",
    icon: <Users />,
    area: "md:col-span-5",
  },
  {
    title: "Seamless Experience",
    description: "From UI/UX to AI automation, we ensure every solution is intuitive, user-friendly, and future-proof.",
    icon: <GitMerge />,
    area: "md:col-span-5",
  },
  {
    title: "Ongoing Support",
    description: "Get clear reports, smooth handovers, and dedicated support long after launch.",
    icon: <LifeBuoy />,
    area: "md:col-span-7",
  },
];

export default function WhyChooseUs() {
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

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 80,
      scale: 0.9,
      rotateX: 15
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 0.7,
      },
    },
  };

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
        className="absolute inset-0 opacity-10"
        initial={{ scale: 0, rotate: 0 }}
        animate={{ 
          scale: [0, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full blur-xl"></div>
      </motion.div>

      <div className="relative z-10 container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-20">
          <motion.div
            variants={titleVariants}
            className="relative"
          >
            <motion.h2
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 leading-tight relative z-10"
              style={{ color: 'var(--foreground)' }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            >
              Why Choose Devshift
              
              {/* Animated underline */}
              <motion.div
                className="absolute -bottom-2 left-1/2 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
                initial={{ width: 0, x: "-50%" }}
                animate={{ width: "60%" }}
                transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
              />
            </motion.h2>
          </motion.div>
        </div>
        
        <motion.ul
          className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-8"
          variants={containerVariants}
        >
          {features.map((feature, index) => (
            <GridItem
              key={index}
              index={index}
              area={feature.area}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              variants={itemVariants}
            />
          ))}
        </motion.ul>
      </div>
    </motion.section>
  );
}

const GridItem = ({ area, icon, title, description, variants, index }) => {
  return (
    <motion.li 
      className={`min-h-[14rem] list-none ${area}`} 
      variants={variants}
      whileHover={{ 
        scale: 1.02,
        y: -8,
        transition: { 
          type: "spring",
          stiffness: 300,
          damping: 20
        }
      }}
      whileTap={{ scale: 0.98 }}
    >
      <motion.div 
        className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3 group cursor-pointer" 
        style={{borderColor: 'var(--card-border)'}}
        whileHover={{
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
          borderColor: "rgba(139, 92, 246, 0.3)",
        }}
        transition={{ duration: 0.3 }}
      >
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01} 
        />
        
        <motion.div 
          className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6" 
          style={{backgroundColor: 'var(--card-bg)'}}
          whileHover={{
            backgroundColor: "rgba(139, 92, 246, 0.05)",
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            {/* Animated icon container */}
            <motion.div 
              className="w-fit rounded-lg border p-2" 
              style={{borderColor: 'var(--card-border)', color: 'var(--accent)'}}
              whileHover={{
                scale: 1.1,
                rotate: [0, -5, 5, 0],
                backgroundColor: "rgba(139, 92, 246, 0.1)",
                borderColor: "rgba(139, 92, 246, 0.5)",
              }}
              transition={{ 
                scale: { duration: 0.2 },
                rotate: { duration: 0.5, ease: "easeInOut" },
                backgroundColor: { duration: 0.3 },
                borderColor: { duration: 0.3 }
              }}
            >
              <motion.div
                initial={{ rotateY: 0 }}
                whileHover={{ rotateY: 360 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                {icon}
              </motion.div>
            </motion.div>
            
            <div className="space-y-3">
              <motion.h3 
                className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance md:text-2xl/[1.875rem]" 
                style={{color: 'var(--foreground)'}}
                whileHover={{
                  color: "rgb(139, 92, 246)",
                  x: 5,
                }}
                transition={{ duration: 0.3 }}
              >
                {title}
              </motion.h3>
              
              <motion.p 
                className="font-sans text-sm/[1.125rem] md:text-base/[1.375rem] [&_b]:md:font-semibold [&_strong]:md:font-semibold" 
                style={{color: 'var(--text-muted)'}}
                whileHover={{
                  color: "rgba(139, 92, 246, 0.8)",
                  x: 5,
                }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                {description}
              </motion.p>
            </div>
          </div>
          
          {/* Hover overlay effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 rounded-xl"
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Animated corner accent */}
          <motion.div
            className="absolute top-2 right-2 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full opacity-0"
            whileHover={{ 
              opacity: 0.2,
              scale: [1, 1.5, 1],
            }}
            transition={{ 
              opacity: { duration: 0.3 },
              scale: { duration: 0.6, repeat: Infinity }
            }}
          />
        </motion.div>
      </motion.div>
    </motion.li>
  );
};