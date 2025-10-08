"use client";
import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";
import Head from "next/head";

export default function PortfolioShowcase() {
  const products = [
    {
      title: "E-Commerce Platform",
      link: "https://example-ecommerce.com",
      thumbnail: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3",
      tech: "Next.js, Stripe, Sanity"
    },
    {
      title: "SaaS Dashboard",
      link: "https://example-saas.com",
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.0.3",
      tech: "React, TypeScript, Tailwind"
    },
    {
      title: "Portfolio Website",
      link: "https://example-portfolio.com",
      thumbnail: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
      tech: "Next.js, Framer Motion"
    },
    {
      title: "Corporate Website",
      link: "https://example-corporate.com",
      thumbnail: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3",
      tech: "Next.js, Contentful, Vercel"
    },
    {
      title: "Mobile App Landing",
      link: "https://example-mobile.com",
      thumbnail: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
      tech: "React, Tailwind, Animation"
    },
    {
      title: "Blog Platform",
      link: "https://example-blog.com",
      thumbnail: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3",
      tech: "Next.js, MDX, Notion API"
    },
    {
      title: "Restaurant Website",
      link: "https://example-restaurant.com",
      thumbnail: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
      tech: "Next.js, Sanity, Online Orders"
    },
    {
      title: "Agency Website",
      link: "https://example-agency.com",
      thumbnail: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=2126&auto=format&fit=crop&ixlib=rb-4.0.3",
      tech: "Next.js, Framer Motion, CMS"
    },
    {
      title: "Tech Startup",
      link: "https://example-startup.com",
      thumbnail: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
      tech: "React, TypeScript, D3.js"
    },
    {
      title: "Healthcare Platform",
      link: "https://example-healthcare.com",
      thumbnail: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
      tech: "Next.js, HIPAA Compliant"
    },
    {
      title: "Educational Portal",
      link: "https://example-education.com",
      thumbnail: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.0.3",
      tech: "Next.js, Video Streaming"
    },
    {
      title: "Real Estate Site",
      link: "https://example-realestate.com",
      thumbnail: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3",
      tech: "Next.js, Maps API, Search"
    },
    {
      title: "Non-Profit Website",
      link: "https://example-nonprofit.com",
      thumbnail: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.0.3",
      tech: "Next.js, Donation Integration"
    },
    {
      title: "Fitness App",
      link: "https://example-fitness.com",
      thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
      tech: "React Native, Firebase"
    },
    {
      title: "Finance Dashboard",
      link: "https://example-finance.com",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
      tech: "Next.js, Charts, Analytics"
    }
  ];

  return (
    <>
      <Head>
        <title>Our Portfolio — Showcase of Exceptional Projects | Devshift</title>
        <meta name="description" content="Explore our portfolio of successful web development projects. We build exceptional digital experiences with cutting-edge technology and beautiful design." />
        <meta name="keywords" content="portfolio, web development projects, React, Next.js, UI/UX design, automation" />
      </Head>
      
      <HeroParallax products={products} />
    </>
  );
}
