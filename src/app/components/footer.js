"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Instagram, Linkedin, MessageCircle, ArrowUpRight, Heart } from "lucide-react";
import { useState } from "react";

export default function Footer() {
  const [hoveredLink, setHoveredLink] = useState(null);

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

  const socialLinks = [
    { name: "LinkedIn", icon: Linkedin, href: "#", color: "hover:text-blue-600" },
    { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/devshift_official?igsh=djcyNHRjYzJxcTM0", color: "hover:text-pink-500" },
    { name: "GitHub", icon: Github, href: "https://github.com/devshiftofficials", color: "hover:text-gray-400" },
    { name: "WhatsApp", icon: MessageCircle, href: "https://wa.me/923397197970", color: "hover:text-green-500" },
  ];

  const footerLinks = [
    {
      title: "Services",
      links: [
        { name: "Web Development", href: "/services/web" },
        { name: "UI/UX Design", href: "/services/design" },
        { name: "Automation & AI", href: "/services/automation" },
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Portfolio", href: "/work" },
        { name: "Contact", href: "/contact" },
        { name: "Get a Quote", href: "/quote" },
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Blog", href: "/blog" },
        { name: "Careers", href: "/careers" },
      ]
    }
  ];

  return (
    <motion.footer
      className="relative overflow-hidden"
      style={{ backgroundColor: 'var(--background)' }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
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
        <div className="absolute top-10 left-10 w-80 h-80 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full blur-3xl"></div>
      </motion.div>

      <div className="relative z-10 container mx-auto px-4 py-20 max-w-7xl">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 mb-16">
          {/* Left Column - Brand & Contact */}
          <motion.div className="space-y-8" variants={itemVariants}>
            {/* Brand Section */}
            <div className="space-y-6">
              <motion.div
                className="flex items-center"
                whileHover={{ scale: 1.05 }}
                animate={{
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  hover: { duration: 0.3 }
                }}
              >
                <Image
                  src="/assets/logo.png"
                  alt="Devshift"
                  width={160}
                  height={60}
                  className="h-16 w-auto"
                />
              </motion.div>

              <motion.p 
                className="text-lg leading-relaxed max-w-md"
                style={{ color: 'var(--text-muted)' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                We create exceptional digital experiences through cutting-edge development, 
                beautiful design, and strategic solutions that transform businesses.
              </motion.p>
            </div>

            {/* Contact Info */}
            <motion.div className="space-y-4" variants={itemVariants}>
              <h3 className="text-lg font-semibold"
                  style={{ color: 'var(--foreground)' }}
              >
                Let&apos;s Connect
              </h3>
              <div className="space-y-3">
                <motion.div 
                  className="flex items-center gap-3"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Mail size={18} style={{ color: 'var(--accent)' }} />
                  <span style={{ color: 'var(--text-muted)' }}>hello@devshift.com</span>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-3"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Phone size={18} style={{ color: 'var(--accent)' }} />
                  <span style={{ color: 'var(--text-muted)' }}>+1 (555) 123-4567</span>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-3"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <MapPin size={18} style={{ color: 'var(--accent)' }} />
                  <span style={{ color: 'var(--text-muted)' }}>123 Digital Street, Tech City</span>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Links */}
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8" variants={itemVariants}>
            {footerLinks.map((section, sectionIndex) => (
              <motion.div key={section.title} className="space-y-4">
                <h3 className="text-lg font-semibold"
                    style={{ color: 'var(--foreground)' }}
                >
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: linkIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Link
                        href={link.href}
                        className="group flex items-center gap-2 text-sm transition-all duration-300"
                        style={{ color: 'var(--text-muted)' }}
                        onMouseEnter={() => setHoveredLink(`${sectionIndex}-${linkIndex}`)}
                        onMouseLeave={() => setHoveredLink(null)}
                      >
                        <span className="group-hover:text-white transition-colors duration-300">
                          {link.name}
                        </span>
                        <motion.div
                          animate={{
                            x: hoveredLink === `${sectionIndex}-${linkIndex}` ? 3 : 0,
                            opacity: hoveredLink === `${sectionIndex}-${linkIndex}` ? 1 : 0
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <ArrowUpRight size={14} style={{ color: 'var(--accent)' }} />
                        </motion.div>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-6">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target={["WhatsApp", "Instagram", "GitHub"].includes(social.name) ? "_blank" : "_self"}
                  rel={["WhatsApp", "Instagram", "GitHub"].includes(social.name) ? "noopener noreferrer" : undefined}
                  className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300"
                  style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-border)' }}
                  whileHover={{ 
                    scale: 1.1,
                    backgroundColor: 'var(--accent)',
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Icon 
                    size={20} 
                    style={{ color: 'var(--text-muted)' }}
                    className="transition-colors duration-300"
                  />
                </motion.a>
              );
            })}
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t pt-8"
          style={{ borderColor: 'var(--card-border)' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col items-center justify-between sm:flex-row gap-4">
            <motion.p
              className="text-sm flex items-center gap-2"
              style={{ color: 'var(--text-muted)' }}
              animate={{
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              © 2024 Devshift. Made with
              <motion.span
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Heart size={16} style={{ color: 'var(--accent)' }} />
              </motion.span>
              All rights reserved.
            </motion.p>

            <motion.div
              className="flex items-center gap-6 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              viewport={{ once: true }}
            >
              <Link
                href="/privacy"
                className="transition-colors duration-300"
                style={{ color: 'var(--text-muted)' }}
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="transition-colors duration-300"
                style={{ color: 'var(--text-muted)' }}
              >
                Terms of Service
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
