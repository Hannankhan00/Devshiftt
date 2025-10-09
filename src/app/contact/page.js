"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    budget: '',
    message: '',
    scheduleDemo: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: 'var(--background)' }}>
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full opacity-20 animate-pulse"
             style={{ background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.4), rgba(147, 51, 234, 0.4))' }}></div>
        <div className="absolute top-1/2 -left-40 w-96 h-96 rounded-full opacity-10 animate-pulse"
             style={{ background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.3), rgba(59, 130, 246, 0.3))' }}></div>
        <div className="absolute -bottom-40 right-1/3 w-64 h-64 rounded-full opacity-15 animate-pulse"
             style={{ background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2))' }}></div>
        </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 sm:py-24">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="text-sm font-semibold uppercase tracking-wider mb-4"
            style={{ color: 'var(--accent)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            CONTACT
          </motion.div>
          
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            style={{ color: 'var(--foreground)' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Get in Touch
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
              with Us
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed"
            style={{ color: 'var(--text-muted)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Please fill out the form below to share your feedback or request information about our services.
          </motion.p>
        </motion.div>

        {/* Contact Form */}
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="rounded-2xl p-8 sm:p-12 border-2 transition-all duration-300 hover:shadow-2xl"
               style={{ 
                 backgroundColor: 'var(--card-bg)',
                 borderColor: 'var(--card-border)',
                 boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)'
               }}>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="block text-sm font-semibold"
                         style={{ color: 'var(--foreground)' }}>
                    First name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="Enter your first name"
                    className="w-full px-4 py-4 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                    style={{
                      backgroundColor: 'var(--background)',
                      borderColor: 'var(--card-border)',
                      color: 'var(--foreground)'
                    }}
                    required
                  />
              </div>
              
                <div className="space-y-2">
                  <label htmlFor="lastName" className="block text-sm font-semibold"
                         style={{ color: 'var(--foreground)' }}>
                    Last name
                </label>
                <input
                  type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Enter your last name"
                    className="w-full px-4 py-4 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                    style={{
                      backgroundColor: 'var(--background)',
                      borderColor: 'var(--card-border)',
                      color: 'var(--foreground)'
                    }}
                  required
                />
                </div>
              </div>
              
              {/* Email and Budget */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-semibold"
                         style={{ color: 'var(--foreground)' }}>
                    Work email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter work email"
                    className="w-full px-4 py-4 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                    style={{
                      backgroundColor: 'var(--background)',
                      borderColor: 'var(--card-border)',
                      color: 'var(--foreground)'
                    }}
                  required
                />
              </div>
              
                <div className="space-y-2">
                  <label htmlFor="budget" className="block text-sm font-semibold"
                         style={{ color: 'var(--foreground)' }}>
                    Project Budget
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 appearance-none bg-no-repeat bg-right bg-[length:20px] pr-12"
                    style={{
                      backgroundColor: 'var(--background)',
                      borderColor: 'var(--card-border)',
                      color: 'var(--foreground)',
                      backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`
                    }}
                    required
                  >
                    <option value="">Select Budget Range</option>
                    <option value="under-5k">Under $5,000</option>
                    <option value="5k-10k">$5,000 - $10,000</option>
                    <option value="10k-25k">$10,000 - $25,000</option>
                    <option value="25k-50k">$25,000 - $50,000</option>
                    <option value="50k-100k">$50,000 - $100,000</option>
                    <option value="100k+">$100,000+</option>
                  </select>
                </div>
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-semibold"
                       style={{ color: 'var(--foreground)' }}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  placeholder="Tell us about your project..."
                  className="w-full px-4 py-4 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 resize-none"
                  style={{
                    backgroundColor: 'var(--background)',
                    borderColor: 'var(--card-border)',
                    color: 'var(--foreground)'
                  }}
                  required
                ></textarea>
              </div>
              
              {/* Schedule Demo Toggle */}
              <div className="flex items-center justify-between p-4 rounded-xl border-2 transition-all duration-300"
                   style={{ 
                     backgroundColor: 'var(--background)',
                     borderColor: 'var(--card-border)'
                   }}>
                <div>
                  <h3 className="font-semibold mb-1" style={{ color: 'var(--foreground)' }}>
                    Schedule a Demo Call
                  </h3>
                  <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                    Our manager will contact you shortly to help with all your questions.
                  </p>
                </div>
                
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    name="scheduleDemo"
                    checked={formData.scheduleDemo}
                    onChange={handleInputChange}
                    className="sr-only peer"
                  />
                  <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="w-full py-4 px-8 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl"
                style={{
                  background: 'linear-gradient(135deg, var(--accent), var(--accent-hover))',
                  boxShadow: '0 10px 30px rgba(59, 130, 246, 0.3)'
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Submit
              </motion.button>

              {/* Terms and Privacy */}
              <p className="text-center text-sm" style={{ color: 'var(--text-muted)' }}>
                By contacting with us you agree to our{' '}
                <a href="#" className="underline hover:no-underline" style={{ color: 'var(--accent)' }}>
                  Terms
                </a>{' '}
                and{' '}
                <a href="#" className="underline hover:no-underline" style={{ color: 'var(--accent)' }}>
                  Privacy Policy
                </a>
              </p>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
