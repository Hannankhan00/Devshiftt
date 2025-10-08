"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";

export const HeroParallax = ({
  products,
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="min-h-[300vh] md:min-h-[280vh] py-20 md:py-40 pb-20 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d] mb-32"
      style={{ backgroundColor: 'var(--background)' }}
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        {/* Desktop parallax rows */}
        <div className="hidden md:block pb-72">
          <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
            {firstRow.map((product) => (
              <ProductCard
                product={product}
                translate={translateX}
                key={product.title}
              />
            ))}
          </motion.div>
          <motion.div className="flex flex-row mb-20 space-x-20">
            {secondRow.map((product) => (
              <ProductCard
                product={product}
                translate={translateXReverse}
                key={product.title}
              />
            ))}
          </motion.div>
          <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
            {thirdRow.map((product) => (
              <ProductCard
                product={product}
                translate={translateX}
                key={product.title}
              />
            ))}
          </motion.div>
        </div>

        {/* Mobile/Tablet grid layout */}
        <div className="md:hidden px-6 pb-32">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {products.map((product, index) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.7, 
                  delay: index * 0.15,
                  ease: "easeOut"
                }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <MobileProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-12 sm:py-20 md:py-40 px-6 w-full left-0 top-0">
      <motion.h1 
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 leading-tight"
        style={{ color: 'var(--foreground)' }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Our Portfolio
        <motion.span 
          className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 mt-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Showcase
        </motion.span>
      </motion.h1>
      <motion.p 
        className="max-w-2xl text-lg sm:text-xl md:text-xl leading-relaxed"
        style={{ color: 'var(--text-muted)' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
      >
        We build exceptional digital experiences with cutting-edge web development,
        beautiful design, and intelligent automation solutions. Explore our portfolio
        of successful projects that drive real business results.
      </motion.p>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-80 md:h-96 w-[25rem] md:w-[30rem] relative shrink-0"
    >
      <a
        href={product.link}
        className="block group-hover/product:shadow-2xl transition-all duration-300"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0 rounded-xl md:rounded-2xl"
          alt={product.title}
        />
      </a>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-gradient-to-t from-black/90 to-transparent pointer-events-none rounded-xl md:rounded-2xl transition-opacity duration-300"></div>
      <h2 className="absolute bottom-3 md:bottom-4 left-3 md:left-4 opacity-0 group-hover/product:opacity-100 text-white font-semibold text-base md:text-lg transition-opacity duration-300">
        {product.title}
      </h2>
      <p className="absolute bottom-3 md:bottom-4 right-3 md:right-4 opacity-0 group-hover/product:opacity-100 text-white text-xs md:text-sm transition-opacity duration-300">
        {product.tech}
      </p>
    </motion.div>
  );
};

export const MobileProductCard = ({ product }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl border-2 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
         style={{ 
           backgroundColor: 'var(--card-bg)',
           borderColor: 'var(--card-border)',
           boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
         }}
    >
      <a
        href={product.link}
        className="block"
        target="_blank"
        rel="noopener noreferrer"
      >
        {/* Enhanced image container with gradient overlay */}
        <div className="relative aspect-video overflow-hidden">
          <img
            src={product.thumbnail}
            className="object-cover w-full h-full transition-all duration-500 group-hover:scale-110"
            alt={product.title}
          />
          
          {/* Gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          {/* Tech stack badge */}
          <div className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm bg-white/20 text-white border border-white/30 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
            {product.tech}
          </div>
        </div>
        
        {/* Enhanced content area */}
        <div className="p-6">
          <h3 className="text-xl font-bold mb-3 leading-tight group-hover:text-blue-500 transition-colors duration-300"
              style={{ color: 'var(--foreground)' }}
          >
            {product.title}
          </h3>
          
          {/* Enhanced tech stack display */}
          <div className="flex flex-wrap gap-2">
            {product.tech.split(', ').map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs font-medium rounded-full transition-all duration-300"
                style={{
                  backgroundColor: 'var(--card-border)',
                  color: 'var(--text-muted)'
                }}
              >
                {tech.trim()}
              </span>
            ))}
          </div>
          
          {/* Call to action */}
          <div className="mt-4 flex items-center text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-2 group-hover:translate-x-0"
               style={{ color: 'var(--accent)' }}
          >
            View Project
            <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </div>
        </div>
      </a>
      
      {/* Enhanced hover effect with glow */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
           style={{
             background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(147, 51, 234, 0.1) 100%)',
             boxShadow: 'inset 0 0 0 1px rgba(59, 130, 246, 0.2)'
           }}
      ></div>
    </div>
  );
};
