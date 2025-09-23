"use client";

import React, { useEffect, useRef, useState } from "react";

export default function CustomCursor({ size = 26, lerp = 0.18 }) {
  const rafId = useRef(null);
  const target = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });
  const cursorRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    setIsMounted(true);

    const handlePointerMove = (e) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
    };

    const handleMouseEnter = (e) => {
      const el = e.target;
      if (el && (el.closest("a") || el.closest("button") || el.getAttribute("role") === "button")) {
        setScale(1.6);
      }
    };

    const handleMouseLeave = (e) => {
      const related = e.relatedTarget;
      if (!related || !(related.closest && (related.closest("a") || related.closest("button") || related.getAttribute?.("role") === "button"))) {
        setScale(1);
      }
    };

    const animate = () => {
      pos.current.x += (target.current.x - pos.current.x) * lerp;
      pos.current.y += (target.current.y - pos.current.y) * lerp;
      if (cursorRef.current) {
        const half = size / 2;
        cursorRef.current.style.transform = `translate3d(${pos.current.x - half}px, ${pos.current.y - half}px, 0) scale(${scale})`;
      }
      rafId.current = requestAnimationFrame(animate);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("mouseover", handleMouseEnter, { passive: true });
    window.addEventListener("mouseout", handleMouseLeave, { passive: true });
    rafId.current = requestAnimationFrame(animate);

    return () => {
      if (rafId.current != null) cancelAnimationFrame(rafId.current);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("mouseover", handleMouseEnter);
      window.removeEventListener("mouseout", handleMouseLeave);
    };
  }, [lerp, size]);

  if (!isMounted) return null;

  return (
    <div
      ref={cursorRef}
      aria-hidden
      style={{
        width: size,
        height: size,
      }}
      className="fixed top-0 left-0 z-[100] rounded-full pointer-events-none mix-blend-difference bg-white/95 will-change-transform transition-transform duration-150 ease-out"
    />
  );
}


