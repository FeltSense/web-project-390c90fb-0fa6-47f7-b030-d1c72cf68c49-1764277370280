'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  const monthlyPrice = 29;
  const yearlyPrice = 23;
  const yearlySavings = (monthlyPrice - yearlyPrice) * 12;

  const features = [
    'Unlimited personal growth tracking',
    'AI-powered self-reflection prompts',
    'Social accountability partners',
    'Progress analytics dashboard',
    'Daily mindset challenges',
    'Private community access',
    'Goal visualization tools',
    'Weekly progress reports'
  ];

  return (
    <section id="pricing" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-rose-50 text-rose-500 rounded-full text-sm font-semibold mb-6">
            Simple Pricing
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.2] text-slate-900 mb-6">
            Invest in Your Best Self
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            One plan. Everything you need to transform your mindset, build better habits, and become who you're meant to be.
          </p>
        </motion.div>

        {/* Toggle Switch */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center justify-center gap-4 mb-12"
        >
          <span className={`text-lg font-medium transition-colors duration-300 ${!isYearly ? 'text-slate-900' : 'text-slate-400'}`}>
            Monthly
          </span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            className={`relative w-16 h-8 rounded-full transition-colors duration-300 ${isYearly ? 'bg-rose-500' : 'bg-slate-200'}`}
            aria-label="Toggle billing period"
          >
            <span
              className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-300 ${isYearly ? 'translate-x-9' : 'translate-x-1'}`}
            />
          </button>
          <span className={`text-lg font-medium transition-colors duration-300 ${isYearly ? 'text-slate-900' : 'text-slate-400'}`}>
            Yearly
          </span>
          {isYearly && (
            <span className="ml-2 px-3 py-1 bg-cyan-400 text-slate-900 text-sm font-bold rounded-full">
              Save ${yearlySavings}/year
            </span>
          )}
        </motion.div>

        {/* Pricing Card - Centered */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-lg mx-auto"
        >
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 hover:shadow-md hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
            {/* Popular Badge */}
            <div className="absolute top-0 right-0">
              <div className="bg-rose-500 text-white text-xs font-bold px-4 py-1 rounded-bl-xl">
                MOST POPULAR
              </div>
            </div>

            {/* Plan Name */}
            <div className="text-center mb-8">
              <h3 className="text-xl md:text-2xl font-semibold tracking-tight leading-[1.3] text-slate-900 mb-2">
                Ego Pro
              </h3>
              <p className="text-slate-500">
                Everything you need to level up
              </p>
            </div>

            {/* Dynamic Price Display */}
            <div className="text-center mb-8">
              <div className="flex items-end justify-center gap-1">
                <span className="text-5xl md:text-6xl font-bold text-slate-900">
                  ${isYearly ? yearlyPrice : monthlyPrice}
                </span>
                <span className="text-slate-500 text-lg mb-2">/month</span>
              </div>
              {isYearly && (
                <p className="text-sm text-slate-500 mt-2">
                  Billed annually at ${yearlyPrice * 12}/year
                </p>
              )}
            </div>

            {/* Features List */}
            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-rose-500 mt-0.5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-600">{feature}</span>
                </li>
              ))}
            </ul>

            {/* Stripe Button */}
            <button
              onClick={() => window.location.href = 'https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00'}
              className="w-full py-4 bg-rose-500 hover:bg-rose-600 text-white font-bold rounded-xl transition-all duration-300 shadow-sm hover:shadow-md"
            >
              Pre-Order Now - $29
            </button>

            {/* Trust Badge */}
            <p className="text-center text-slate-400 text-sm mt-4">
              30-day money-back guarantee • Cancel anytime
            </p>
          </div>
        </motion.div>

        {/* Bottom Trust Elements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-slate-500 mb-6">Trusted by 10,000+ people on their growth journey</p>
          <div className="flex items-center justify-center gap-8 flex-wrap">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-slate-600 text-sm font-medium">Secure Payment</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-slate-600 text-sm font-medium">Instant Access</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-slate-600 text-sm font-medium">4.9/5 Rating</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  </span>);
}
