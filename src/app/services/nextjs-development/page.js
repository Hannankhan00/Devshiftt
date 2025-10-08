"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Head from "next/head";
import { 
  Zap, 
  Search, 
  Layers, 
  Database, 
  Palette, 
  Accessibility, 
  BarChart3, 
  FileText, 
  ArrowRight, 
  CheckCircle, 
  Code2, 
  Rocket, 
  Shield, 
  Clock, 
  DollarSign,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import { useState } from "react";

// SEO handled via head tags in layout

export default function NextJSDevelopment() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      },
    },
  };

  const whyNextJS = [
    {
      icon: Zap,
      title: "Speed that ranks",
      description: "SSR/ISR and image optimization for better Core Web Vitals and search rankings.",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: Search,
      title: "SEO architecture",
      description: "Semantic HTML, internal links, and structured data for maximum visibility.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Layers,
      title: "Scalable",
      description: "Component libraries and clean routing architecture for future growth.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Database,
      title: "Flexible CMS",
      description: "Sanity, Contentful, WP Headless, or Notion - choose what works for you.",
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  const deliverables = [
    {
      icon: Palette,
      title: "Custom design system & component library",
      description: "Consistent, reusable components built for scale"
    },
    {
      icon: Accessibility,
      title: "Responsive, accessible UI (WCAG‑minded)",
      description: "Inclusive design that works for everyone"
    },
    {
      icon: Database,
      title: "Headless CMS setup & training",
      description: "Easy content management with full training"
    },
    {
      icon: BarChart3,
      title: "Analytics, events, and funnels",
      description: "Data-driven insights for better decisions"
    },
    {
      icon: FileText,
      title: "Technical SEO (schema, sitemaps, canonicals)",
      description: "Search engine optimization from the ground up"
    },
    {
      icon: BarChart3,
      title: "Performance budget & reports",
      description: "Monitor and optimize your site&apos;s speed"
    }
  ];

  const processSteps = [
    { title: "Discover", description: "Understanding your goals and requirements" },
    { title: "Information architecture", description: "Planning site structure and user flow" },
    { title: "Design", description: "Creating beautiful, functional interfaces" },
    { title: "Development", description: "Building with clean, scalable code" },
    { title: "QA", description: "Testing across devices and browsers" },
    { title: "Launch & handover", description: "Going live with full documentation" }
  ];

  const techStack = [
    { name: "Next.js", description: "React framework for production" },
    { name: "React", description: "Component-based UI library" },
    { name: "Tailwind", description: "Utility-first CSS framework" },
    { name: "Node.js", description: "Server-side JavaScript runtime" },
    { name: "Vercel", description: "Optimized deployment platform" },
    { name: "Sanity/Contentful", description: "Headless CMS solutions" },
    { name: "Cloudinary", description: "Image optimization and delivery" }
  ];

  const pricingPlans = [
    {
      name: "Launch Site",
      price: "from $999",
      description: "1–5 pages",
      features: [
        "Custom design",
        "Mobile responsive",
        "Basic SEO",
        "Contact forms",
        "Analytics setup"
      ],
      gradient: "from-green-500 to-emerald-500"
    },
    {
      name: "Business Site",
      price: "from $2,499",
      description: "6–12 pages, CMS, blog, basic SEO",
      features: [
        "Everything in Launch",
        "Headless CMS",
        "Blog functionality",
        "Advanced SEO",
        "Performance optimization",
        "Content training"
      ],
      gradient: "from-blue-500 to-purple-500"
    },
    {
      name: "Pro Site",
      price: "from $4,999",
      description: "Custom components, integrations, animations",
      features: [
        "Everything in Business",
        "Custom animations",
        "Third-party integrations",
        "Advanced analytics",
        "Priority support",
        "Performance monitoring"
      ],
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  const faqs = [
    {
      question: "How long does a typical build take?",
      answer: "2–6 weeks depending on scope. Launch sites typically take 2-3 weeks, while Pro sites can take 4-6 weeks."
    },
    {
      question: "Do you handle hosting?",
      answer: "Yes! We deploy to Vercel (recommended for Next.js) or your preferred cloud platform."
    },
    {
      question: "Will I be able to edit content?",
      answer: "Absolutely! We provide a simple CMS with a comprehensive Loom walkthrough video for easy content management."
    },
    {
      question: "Can you migrate from my current React site?",
      answer: "Yes! We specialize in React to Next.js migrations, preserving your content and improving SEO in the process."
    },
    {
      question: "What about WordPress migration?",
      answer: "We handle WordPress to Next.js migrations with careful planning for redirects and SEO preservation."
    }
  ];

  return (
    <>
      <Head>
        <title>Next.js Development Agency — Fast, SEO‑Ready Sites | Devshift</title>
        <meta name="description" content="Custom Next.js websites with Core Web Vitals, headless CMS, and clean code. Migrate from React, improve rankings, and convert more." />
        <meta name="keywords" content="Next.js development, React development, SEO websites, headless CMS, web development" />
      </Head>
      
      <motion.div
        className="min-h-screen"
        style={{ backgroundColor: 'var(--background)' }}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
      {/* Animated background gradients */}
      <motion.div
        className="absolute inset-0 opacity-5 pointer-events-none"
        initial={{ scale: 0, rotate: 0 }}
        animate={{ 
          scale: [0, 1.2, 1],
          rotate: [0, 360],
        }}
        transition={{
          duration: 50,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 rounded-full blur-3xl"></div>
      </motion.div>

      <div className="relative z-10 container mx-auto px-4 py-20 max-w-7xl">
        {/* Hero Section */}
        <motion.div className="text-center mb-20" variants={itemVariants}>
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 leading-tight"
            style={{ color: 'var(--foreground)' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Next.js Development
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
              Services
            </span>
          </motion.h1>
          
          <motion.div 
            className="max-w-4xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-xl md:text-2xl leading-relaxed"
               style={{ color: 'var(--text-muted)' }}
            >
              Devshift builds lightning‑fast, SEO‑ready websites with Next.js. From strategy to launch, 
              we deliver clean, scalable code, headless CMS integration, and performance that improves 
              rankings and conversions. Whether you&apos;re migrating from React or starting fresh, we craft 
              sites your users and Google will love.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 text-white"
              style={{ 
                background: 'linear-gradient(135deg, var(--accent), var(--accent-hover))',
                boxShadow: '0 10px 30px rgba(79, 70, 229, 0.3)'
              }}
            >
              Plan your Next.js build
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </motion.div>

        {/* Why Next.js Section */}
        <motion.section className="mb-20" variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16"
              style={{ color: 'var(--foreground)' }}
          >
            Why Next.js for business
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyNextJS.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  className="relative group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Glowing background */}
                  <motion.div
                    className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${item.gradient} blur-xl opacity-0 group-hover:opacity-20`}
                    transition={{ duration: 0.3 }}
                  />
                  
                  <div className="relative p-8 rounded-3xl border transition-all duration-300 group-hover:scale-105"
                       style={{ 
                         backgroundColor: 'var(--card-bg)',
                         borderColor: 'var(--card-border)'
                       }}
                  >
                    <motion.div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-6`}
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon size={32} className="text-white" />
                    </motion.div>
                    
                    <h3 className="text-xl font-bold mb-4"
                        style={{ color: 'var(--foreground)' }}
                    >
                      {item.title}
                    </h3>
                    
                    <p className="text-sm leading-relaxed"
                       style={{ color: 'var(--text-muted)' }}
                    >
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* What We Deliver Section */}
        <motion.section className="mb-20" variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16"
              style={{ color: 'var(--foreground)' }}
          >
            What we deliver
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {deliverables.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  className="group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="p-6 rounded-2xl border transition-all duration-300 group-hover:scale-105"
                       style={{ 
                         backgroundColor: 'var(--card-bg)',
                         borderColor: 'var(--card-border)'
                       }}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                           style={{ backgroundColor: 'var(--accent)' }}
                      >
                        <Icon size={24} className="text-white" />
                      </div>
                      <h3 className="text-lg font-semibold"
                          style={{ color: 'var(--foreground)' }}
                      >
                        {item.title}
                      </h3>
                    </div>
                    
                    <p className="text-sm"
                       style={{ color: 'var(--text-muted)' }}
                    >
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Migration Section */}
        <motion.section className="mb-20" variants={itemVariants}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8"
                style={{ color: 'var(--foreground)' }}
            >
              Migration from React or WordPress
            </h2>
            
            <motion.div
              className="p-8 rounded-3xl border"
              style={{ 
                backgroundColor: 'var(--card-bg)',
                borderColor: 'var(--card-border)'
              }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-lg leading-relaxed"
                 style={{ color: 'var(--text-muted)' }}
              >
                Keep your content and rankings. We plan redirects, map metadata, and validate 
                indexation in Search Console to ensure a smooth transition without losing SEO value.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Process Section */}
        <motion.section className="mb-20" variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16"
              style={{ color: 'var(--foreground)' }}
          >
            Process
          </h2>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="relative group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Connection line */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5"
                         style={{ backgroundColor: 'var(--card-border)' }}
                    >
                      <motion.div
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  )}
                  
                  <div className="p-6 rounded-2xl border transition-all duration-300 group-hover:scale-105"
                       style={{ 
                         backgroundColor: 'var(--card-bg)',
                         borderColor: 'var(--card-border)'
                       }}
                  >
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-white font-bold"
                         style={{ backgroundColor: 'var(--accent)' }}
                    >
                      {index + 1}
                    </div>
                    
                    <h3 className="text-lg font-semibold mb-2"
                        style={{ color: 'var(--foreground)' }}
                    >
                      {step.title}
                    </h3>
                    
                    <p className="text-sm"
                       style={{ color: 'var(--text-muted)' }}
                    >
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Tech Stack Section */}
        <motion.section className="mb-20" variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16"
              style={{ color: 'var(--foreground)' }}
          >
            Tech stack
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                className="group text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="p-6 rounded-2xl border transition-all duration-300 group-hover:scale-110"
                     style={{ 
                       backgroundColor: 'var(--card-bg)',
                       borderColor: 'var(--card-border)'
                     }}
                >
                  <Code2 size={32} className="mx-auto mb-3"
                         style={{ color: 'var(--accent)' }}
                  />
                  <h3 className="font-semibold mb-1"
                      style={{ color: 'var(--foreground)' }}
                  >
                    {tech.name}
                  </h3>
                  <p className="text-xs"
                     style={{ color: 'var(--text-muted)' }}
                  >
                    {tech.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Pricing Section */}
        <motion.section className="mb-20" variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16"
              style={{ color: 'var(--foreground)' }}
          >
            Pricing guide
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Glowing background */}
                <motion.div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${plan.gradient} blur-xl opacity-0 group-hover:opacity-20`}
                  transition={{ duration: 0.3 }}
                />
                
                <div className="relative p-8 rounded-3xl border transition-all duration-300 group-hover:scale-105"
                     style={{ 
                       backgroundColor: 'var(--card-bg)',
                       borderColor: 'var(--card-border)'
                     }}
                >
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2"
                        style={{ color: 'var(--foreground)' }}
                    >
                      {plan.name}
                    </h3>
                    <div className="text-3xl font-bold mb-2"
                         style={{ color: 'var(--accent)' }}
                    >
                      {plan.price}
                    </div>
                    <p className="text-sm"
                       style={{ color: 'var(--text-muted)' }}
                    >
                      {plan.description}
                    </p>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle size={16} style={{ color: 'var(--accent)' }} />
                        <span className="text-sm" style={{ color: 'var(--text-muted)' }}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    href="/contact"
                    className="w-full py-3 rounded-xl font-semibold text-center transition-all duration-300"
                    style={{ 
                      backgroundColor: 'var(--accent)',
                      color: 'white'
                    }}
                  >
                    Get Started
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* FAQs Section */}
        <motion.section className="mb-20" variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16"
              style={{ color: 'var(--foreground)' }}
          >
            FAQs
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="border rounded-2xl overflow-hidden"
                style={{ 
                  backgroundColor: 'var(--card-bg)',
                  borderColor: 'var(--card-border)'
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <button
                  className="w-full p-6 text-left flex items-center justify-between transition-all duration-300"
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  style={{ color: 'var(--foreground)' }}
                >
                  <span className="text-lg font-semibold">{faq.question}</span>
                  {openFAQ === index ? (
                    <ChevronUp size={24} style={{ color: 'var(--accent)' }} />
                  ) : (
                    <ChevronDown size={24} style={{ color: 'var(--accent)' }} />
                  )}
                </button>
                
                <motion.div
                  initial={false}
                  animate={{
                    height: openFAQ === index ? 'auto' : 0,
                    opacity: openFAQ === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6">
                    <p style={{ color: 'var(--text-muted)' }}>
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section className="text-center" variants={itemVariants}>
          <div className="max-w-4xl mx-auto p-12 rounded-3xl border"
               style={{ 
                 backgroundColor: 'var(--card-bg)',
                 borderColor: 'var(--card-border)'
               }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6"
                style={{ color: 'var(--foreground)' }}
            >
              Ready to build something amazing?
            </h2>
            
            <p className="text-xl mb-8"
               style={{ color: 'var(--text-muted)' }}
            >
              Let&apos;s discuss your Next.js project and create a solution that drives results.
            </p>
            
            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 text-white"
              style={{ 
                background: 'linear-gradient(135deg, var(--accent), var(--accent-hover))',
                boxShadow: '0 10px 30px rgba(79, 70, 229, 0.3)'
              }}
            >
              Plan your Next.js build
              <ArrowRight size={20} />
            </Link>
          </div>
        </motion.section>
      </div>
    </motion.div>
    </>
  );
}
