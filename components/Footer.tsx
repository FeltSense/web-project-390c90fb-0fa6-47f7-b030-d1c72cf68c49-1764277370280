'use client';

import { motion } from 'framer-motion';
import { Heart, Instagram, Twitter, Youtube, Linkedin, Mail, MapPin, Phone, ArrowUpRight, Sparkles } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Product',
      links: [
        { name: 'Features', href: '#services' },
        { name: 'Pricing', href: '#pricing' },
        { name: 'Testimonials', href: '#testimonials' },
        { name: 'FAQ', href: '#faq' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#about' },
        { name: 'Careers', href: '#contact' },
        { name: 'Press Kit', href: '#contact' },
        { name: 'Blog', href: '#contact' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Community', href: '#contact' },
        { name: 'Growth Guide', href: '#services' },
        { name: 'Success Stories', href: '#testimonials' },
        { name: 'Support', href: '#contact' }
      ]
    }
  ];

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-slate-950 relative overflow-hidden">
      {/* Decorative accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rose-500/50 to-transparent" />
      
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-24 pb-12">
        {/* Top Section - CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mb-20"
        >
          <div className="bg-slate-900 rounded-3xl p-10 md:p-14 border border-slate-800 relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <Sparkles className="w-6 h-6 text-cyan-400" />
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="text-center lg:text-left">
                <h3 className="text-3xl md:text-4xl font-bold tracking-tight leading-[1.1] text-white mb-3">
                  Ready to transform your presence?
                </h3>
                <p className="text-slate-500 text-lg max-w-xl">
                  Join thousands who've elevated their personal brand with Ego
                </p>
              </div>
              <a
                href="#contact"
                className="group bg-rose-500 hover:bg-rose-600 text-white font-semibold rounded-xl px-8 py-4 transition-all duration-300 shadow-sm hover:shadow-md flex items-center gap-2 whitespace-nowrap"
              >
                Start Your Journey
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Middle Section - Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <a href="#" className="inline-flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-rose-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">E</span>
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">Ego</span>
            </a>
            <p className="text-slate-500 mb-6 max-w-sm leading-relaxed">
              Elevate your digital identity. Build authentic connections. 
              Become the best version of yourself online and offline.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a href="mailto:hello@ego.app" className="flex items-center gap-3 text-slate-400 hover:text-rose-500 transition-colors">
                <Mail className="w-5 h-5" />
                <span>hello@ego.app</span>
              </a>
              <div className="flex items-center gap-3 text-slate-400">
                <MapPin className="w-5 h-5" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </motion.div>

          {/* Link Columns */}
          {footerLinks.map((column, index) => (
            <motion.div
              key={column.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
            >
              <h4 className="text-white font-semibold mb-5">{column.title}</h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-slate-500 hover:text-rose-500 transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-slate-800 mb-8" />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* Copyright */}
          <div className="flex items-center gap-1 text-slate-500 text-sm">
            <span>© {currentYear} Ego. Made with</span>
            <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
            <span>for personal growth</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-rose-500 hover:border-rose-500/50 transition-all duration-300"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-slate-500 hover:text-rose-500 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-slate-500 hover:text-rose-500 transition-colors">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  </div></div>);
}
