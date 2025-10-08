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
        <div className="hidden md:block pb-32">
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
        <div className="md:hidden px-4 pb-32">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {products.map((product, index) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
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
    <div className="max-w-7xl relative mx-auto py-10 sm:py-20 md:py-40 px-4 w-full left-0 top-0">
      <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8"
          style={{ color: 'var(--foreground)' }}
      >
        Our Portfolio
        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
          Showcase
        </span>
      </h1>
      <p className="max-w-2xl text-base sm:text-lg md:text-xl leading-relaxed"
         style={{ color: 'var(--text-muted)' }}
      >
        We build exceptional digital experiences with cutting-edge web development, 
        beautiful design, and intelligent automation solutions. Explore our portfolio 
        of successful projects that drive real business results.
      </p>
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
    <div className="group relative overflow-hidden rounded-xl border transition-all duration-300 hover:scale-105"
         style={{ 
           backgroundColor: 'var(--card-bg)',
           borderColor: 'var(--card-border)'
         }}
    >
      <a
        href={product.link}
        className="block"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="aspect-video overflow-hidden">
          <img
            src={product.thumbnail}
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
            alt={product.title}
          />
        </div>
        
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2"
              style={{ color: 'var(--foreground)' }}
          >
            {product.title}
          </h3>
          <p className="text-sm"
             style={{ color: 'var(--text-muted)' }}
          >
            {product.tech}
          </p>
        </div>
      </a>
      
      {/* Hover effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
    </div>
  );
};
