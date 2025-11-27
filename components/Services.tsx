'use client';

import { motion } from 'framer-motion';
import { Sparkles, Target, TrendingUp, Users } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'Personal Brand Builder',
    description: 'Craft an authentic online presence that reflects your true self. Our AI-powered tools help you discover and amplify your unique voice across all platforms.'
  },
  {
    icon: Target,
    title: 'Goal Tracking',
    description: 'Set meaningful milestones and watch your growth unfold with visual progress tracking.'
  },
  {
    icon: TrendingUp,
    title: 'Growth Analytics',
    description: 'Deep insights into your engagement patterns and audience growth.'
  },
  {
    icon: Users,
    title: 'Community Connection',
    description: 'Join a supportive network of like-minded individuals on their self-improvement journey. Share wins, get feedback, and grow together.'
  }
];

export default function Services() {
  return (
    <motion.section
      id="services"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-24 md:py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <span className="text-rose-500 font-semibold tracking-wide uppercase text-sm">Features</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.2] text-slate-900 mt-4">
            Elevate Your Digital Self
          </h2>
          <p className="text-slate-500 text-lg mt-4 max-w-2xl mx-auto">
            Everything you need to build confidence, grow your presence, and become the best version of yourself online.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* First Card - Spans 2 columns */}
          <div className="md:col-span-2 bg-rose-50 rounded-3xl p-8 min-h-[300px] hover:shadow-md transition-all duration-300">
            <div className="w-14 h-14 rounded-2xl bg-rose-500/10 flex items-center justify-center mb-6">
              <Sparkles className="w-7 h-7 text-rose-500" />
            </div>
            <h3 className="text-2xl font-bold tracking-tight text-slate-900 mb-3">{features[0].title}</h3>
            <p className="text-slate-500 text-lg leading-relaxed">{features[0].description}</p>
          </div>

          {/* Second Card - Single column, tall */}
          <div className="bg-slate-50 rounded-3xl p-6 min-h-[300px] hover:shadow-md transition-all duration-300">
            <div className="w-14 h-14 rounded-2xl bg-cyan-400/10 flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-cyan-400" />
            </div>
            <h3 className="text-xl font-bold tracking-tight text-slate-900 mb-3">{features[1].title}</h3>
            <p className="text-slate-500">{features[1].description}</p>
          </div>

          {/* Third Card - Smaller */}
          <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
            <div className="w-14 h-14 rounded-2xl bg-rose-50 flex items-center justify-center mb-6">
              <TrendingUp className="w-7 h-7 text-rose-500" />
            </div>
            <h3 className="text-xl font-bold tracking-tight text-slate-900 mb-3">{features[2].title}</h3>
            <p className="text-slate-500">{features[2].description}</p>
          </div>

          {/* Fourth Card - Spans 2 columns, dark */}
          <div className="md:col-span-2 bg-slate-900 text-white rounded-3xl p-8 hover:shadow-md transition-all duration-300">
            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
              <Users className="w-7 h-7 text-cyan-400" />
            </div>
            <h3 className="text-2xl font-bold tracking-tight mb-3">{features[3].title}</h3>
            <p className="text-slate-400 text-lg leading-relaxed">{features[3].description}</p>
            <a
              href="#contact"
              className="inline-block mt-6 bg-rose-500 hover:bg-rose-600 text-white font-semibold rounded-xl px-8 py-4 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              Join the Community
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
