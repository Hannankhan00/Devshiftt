"use client";

import { cn } from "@/lib/utils";
import React, {
  useEffect,
  useRef,
  useState,
  useCallback,
} from "react";

// Removed global state-based mouse tracking to avoid re-rendering on every move

function hexToRgb(hex) {
  hex = hex.replace("#", "");

  if (hex.length === 3) {
    hex = hex
      .split("")
      .map((char) => char + char)
      .join("");
  }

  const hexInt = parseInt(hex, 16);
  const red = (hexInt >> 16) & 255;
  const green = (hexInt >> 8) & 255;
  const blue = hexInt & 255;
  return [red, green, blue];
}

export default function HeroParticles({
  className = "",
  quantity = 100,
  staticity = 50,
  ease = 50,
  size = 0.4,
  refresh = false,
  color = "#ffffff",
  vx = 0,
  vy = 0,
  mouseRadius = 180,
  mouseStrength = 2,
  followStrength = 0.2,
  ...props
}) {
  const canvasRef = useRef(null);
  const canvasContainerRef = useRef(null);
  const context = useRef(null);
  const circles = useRef([]);
  const mouse = useRef({ x: 0, y: 0 });
  const canvasSize = useRef({ w: 0, h: 0 });
  const dpr = typeof window !== "undefined" ? window.devicePixelRatio : 1;
  const rafID = useRef(null);
  const resizeTimeout = useRef(null);
  const isPointerInside = useRef(false);
  const pendingPointer = useRef(null);
  const pointerVelocity = useRef({ x: 0, y: 0 });
  const lastPointerPos = useRef({ x: 0, y: 0 });
  const hasLastPointer = useRef(false);
  const [accentColor, setAccentColor] = useState(color);

  useEffect(() => {
    const cssAccent = getComputedStyle(document.documentElement)
      .getPropertyValue('--accent')
      .trim();
    if (cssAccent) setAccentColor(cssAccent);
  }, []);

  const rgb = hexToRgb(accentColor);

  const circleParams = useCallback(() => {
    const x = Math.floor(Math.random() * canvasSize.current.w);
    const y = Math.floor(Math.random() * canvasSize.current.h);
    const translateX = 0;
    const translateY = 0;
    const pSize = Math.floor(Math.random() * 2) + size;
    const alpha = 0;
    const targetAlpha = parseFloat((Math.random() * 0.5 + 0.5).toFixed(1));
    const dx = (Math.random() - 0.5) * 0.2;
    const dy = (Math.random() - 0.5) * 0.2;
    const magnetism = 0.1 + Math.random() * 4;
    return {
      x,
      y,
      translateX,
      translateY,
      size: pSize,
      alpha,
      targetAlpha,
      dx,
      dy,
      magnetism,
    };
  }, [size]);

  const drawCircle = useCallback((circle, update = false) => {
    if (context.current) {
      const { x, y, translateX, translateY, size, alpha } = circle;
      context.current.translate(translateX, translateY);
      context.current.beginPath();
      context.current.arc(x, y, size, 0, 2 * Math.PI);
      context.current.fillStyle = `rgba(${rgb.join(", ")}, ${alpha})`;
      context.current.fill();
      context.current.setTransform(dpr, 0, 0, dpr, 0, 0);

      if (!update) {
        circles.current.push(circle);
      }
    }
  }, [dpr, rgb]);

  const clearContext = useCallback(() => {
    if (context.current) {
      context.current.clearRect(
        0,
        0,
        canvasSize.current.w,
        canvasSize.current.h,
      );
    }
  }, []);

  const drawParticles = useCallback(() => {
    clearContext();
    const particleCount = quantity;
    for (let i = 0; i < particleCount; i++) {
      const circle = circleParams();
      drawCircle(circle);
    }
  }, [quantity, circleParams, drawCircle, clearContext]);

  const resizeCanvas = useCallback(() => {
    if (canvasContainerRef.current && canvasRef.current && context.current) {
      canvasSize.current.w = canvasContainerRef.current.offsetWidth;
      canvasSize.current.h = canvasContainerRef.current.offsetHeight;

      canvasRef.current.width = canvasSize.current.w * dpr;
      canvasRef.current.height = canvasSize.current.h * dpr;
      canvasRef.current.style.width = `${canvasSize.current.w}px`;
      canvasRef.current.style.height = `${canvasSize.current.h}px`;
      context.current.scale(dpr, dpr);

      circles.current = [];
      for (let i = 0; i < quantity; i++) {
        const circle = circleParams();
        drawCircle(circle);
      }
    }
  }, [dpr, quantity, circleParams, drawCircle]);

  const initCanvas = useCallback(() => {
    resizeCanvas();
    drawParticles();
  }, [resizeCanvas, drawParticles]);

  const onPointerMove = useCallback((event) => {
    const px = event.clientX;
    const py = event.clientY;
    pendingPointer.current = { x: px, y: py };
    if (hasLastPointer.current) {
      // Raw delta in screen coordinates; will be applied in canvas space
      const dx = px - lastPointerPos.current.x;
      const dy = py - lastPointerPos.current.y;
      // Low-pass filter to smooth velocity
      pointerVelocity.current.x = pointerVelocity.current.x * 0.8 + dx * 0.2;
      pointerVelocity.current.y = pointerVelocity.current.y * 0.8 + dy * 0.2;
    }
    lastPointerPos.current = { x: px, y: py };
    hasLastPointer.current = true;
  }, []);

  const applyPendingPointer = useCallback(() => {
    if (!canvasRef.current || !pendingPointer.current) return;
    const rect = canvasRef.current.getBoundingClientRect();
    const { w, h } = canvasSize.current;
    const relX = pendingPointer.current.x - rect.left - w / 2;
    const relY = pendingPointer.current.y - rect.top - h / 2;
    const clampedX = Math.max(Math.min(relX, w / 2), -w / 2);
    const clampedY = Math.max(Math.min(relY, h / 2), -h / 2);
    isPointerInside.current =
      relX < w / 2 && relX > -w / 2 && relY < h / 2 && relY > -h / 2;
    if (isPointerInside.current) {
      mouse.current.x = clampedX;
      mouse.current.y = clampedY;
    }
  }, []);

  const remapValue = (
    value,
    start1,
    end1,
    start2,
    end2,
  ) => {
    const remapped =
      ((value - start1) * (end2 - start2)) / (end1 - start1) + start2;
    return remapped > 0 ? remapped : 0;
  };

  const animate = useCallback(() => {
    clearContext();
    // Smoothly reset target when pointer leaves
    if (!isPointerInside.current) {
      mouse.current.x += (0 - mouse.current.x) / Math.max(ease, 1);
      mouse.current.y += (0 - mouse.current.y) / Math.max(ease, 1);
    } else {
      applyPendingPointer();
    }
    // Apply global drift to all particles based on pointer velocity
    const driftX = pointerVelocity.current.x * followStrength;
    const driftY = pointerVelocity.current.y * followStrength;
    circles.current.forEach((circle, i) => {
      const edge = [
        circle.x + circle.translateX - circle.size,
        canvasSize.current.w - circle.x - circle.translateX - circle.size,
        circle.y + circle.translateY - circle.size,
        canvasSize.current.h - circle.y - circle.translateY - circle.size,
      ];
      const closestEdge = edge.reduce((a, b) => Math.min(a, b));
      const remapClosestEdge = parseFloat(
        remapValue(closestEdge, 0, 20, 0, 1).toFixed(2),
      );
      if (remapClosestEdge > 1) {
        circle.alpha += 0.02;
        if (circle.alpha > circle.targetAlpha) {
          circle.alpha = circle.targetAlpha;
        }
      } else {
        circle.alpha = circle.targetAlpha * remapClosestEdge;
      }
      circle.x += circle.dx + vx;
      circle.y += circle.dy + vy;
      circle.translateX += driftX;
      circle.translateY += driftY;
      // Cursor attraction similar to demo: stronger when closer to cursor
      const mx = mouse.current.x;
      const my = mouse.current.y;
      const toMouseX = circle.x + circle.translateX - (canvasSize.current.w / 2 + mx);
      const toMouseY = circle.y + circle.translateY - (canvasSize.current.h / 2 + my);
      const dist = Math.hypot(toMouseX, toMouseY);
      const influence = Math.max(0, 1 - dist / Math.max(mouseRadius, 1));
      const attractionX = (mx * mouseStrength) * influence;
      const attractionY = (my * mouseStrength) * influence;

      const denom = staticity / circle.magnetism;
      const targetX = mx / denom + attractionX;
      const targetY = my / denom + attractionY;
      circle.translateX += (targetX - circle.translateX) / ease;
      circle.translateY += (targetY - circle.translateY) / ease;

      drawCircle(circle, true);

      if (
        circle.x < -circle.size ||
        circle.x > canvasSize.current.w + circle.size ||
        circle.y < -circle.size ||
        circle.y > canvasSize.current.h + circle.size
      ) {
        circles.current.splice(i, 1);
        const newCircle = circleParams();
        drawCircle(newCircle);
      }
    });
    // Decay global drift over time for natural easing
    pointerVelocity.current.x *= 0.9;
    pointerVelocity.current.y *= 0.9;
    rafID.current = window.requestAnimationFrame(animate);
  }, [clearContext, vx, vy, staticity, ease, circleParams, drawCircle, applyPendingPointer, followStrength, mouseRadius, mouseStrength]);

  useEffect(() => {
    if (canvasRef.current) {
      context.current = canvasRef.current.getContext("2d");
    }
    initCanvas();
    animate();

    const handleResize = () => {
      if (resizeTimeout.current) {
        clearTimeout(resizeTimeout.current);
      }
      resizeTimeout.current = setTimeout(() => {
        initCanvas();
      }, 200);
    };

    window.addEventListener("resize", handleResize);
    // Pointer listeners on window for smoother tracking
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    const handleWindowPointerLeave = () => {
      isPointerInside.current = false;
      pendingPointer.current = null;
    };
    window.addEventListener("pointerleave", handleWindowPointerLeave);

    return () => {
      if (rafID.current != null) {
        window.cancelAnimationFrame(rafID.current);
      }
      if (resizeTimeout.current) {
        clearTimeout(resizeTimeout.current);
      }
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", handleWindowPointerLeave);
    };
  }, [accentColor, initCanvas, animate, onPointerMove]);

  useEffect(() => {
    initCanvas();
  }, [refresh, initCanvas]);

  return (
    <section
      className={cn("relative flex h-screen items-center justify-center overflow-hidden w-full", className)}
      style={{ backgroundColor: 'var(--background)' }}
      {...props}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        ref={canvasContainerRef}
        aria-hidden="true"
      >
        <canvas ref={canvasRef} className="size-full" />
      </div>

      <div className="relative z-10 text-center max-w-4xl px-4 sm:px-6 lg:px-8">
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight"
          style={{ color: 'var(--foreground)' }}
        >
          Transform Your Digital Presence
        </h1>
        <p
          className="text-base sm:text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed"
          style={{ color: 'var(--text-muted)' }}
        >
          We create exceptional digital experiences through cutting-edge web development, beautiful design, and intelligent automation solutions.
        </p>
        <button
          className="px-6 py-3 font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 text-white"
          style={{ backgroundColor: 'var(--accent)', '--hover-bg': 'var(--accent-hover)' }}
        >
          Get a Quote
        </button>
      </div>
    </section>
  );
};