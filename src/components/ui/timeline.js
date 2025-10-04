"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import { cn } from "@/lib/utils";

export function Timeline({ data = [], maxWidth = "max-w-7xl" }) {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div ref={containerRef} className="w-full" style={{ background: 'var(--background)' }}>
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-4" style={{ color: 'var(--foreground)' }}>
          Our Process
        </h2>
        <p className="text-sm md:text-base max-w-xl" style={{ color: 'var(--text-muted)' }}>
          A clear, collaborative path from discovery to launch.
        </p>
      </div>

      <div ref={ref} className={cn("relative mx-auto pb-20", maxWidth)}>
        {data.map((item, index) => (
          <div key={index} className="flex justify-start pt-10 md:pt-32 md:gap-10">
            <div className="sticky z-40 top-32 self-start max-w-xs lg:max-w-sm md:w-full flex items-center">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full flex items-center justify-center" style={{ background: 'var(--background)' }}>
                <div className="h-4 w-4 rounded-full border" style={{ background: 'var(--card-bg)', borderColor: 'var(--card-border)' }} />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-4xl font-bold" style={{ color: 'var(--text-muted)' }}>
                {item.title}
              </h3>
            </div>
            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold" style={{ color: 'var(--text-muted)' }}>
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}
        <div
          style={{ height: height + "px" }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px]"
        >
          <div className="absolute inset-x-0 top-0 w-[2px] opacity-30" style={{ background: 'var(--card-border)' }} />
          <motion.div
            style={{ 
              height: heightTransform, 
              opacity: opacityTransform,
              background: 'linear-gradient(to top, var(--accent), transparent)'
            }}
            className="absolute inset-x-0 top-0 w-[2px] rounded-full"
          />
        </div>
      </div>
    </div>
  );
}


