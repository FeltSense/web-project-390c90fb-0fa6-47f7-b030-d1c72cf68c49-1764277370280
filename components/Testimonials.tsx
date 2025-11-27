'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Growth Lead',
    company: 'Spotify',
    avatar: 'https://i.pravatar.cc/150?img=23',
    quote: 'Ego transformed how I present myself online. My engagement tripled in just 3 months.',
  },
  {
    name: 'Marcus Williams',
    role: 'Content Creator',
    company: 'TikTok',
    avatar: 'https://i.pravatar.cc/150?img=12',
    quote: 'The personal branding insights are incredible. Finally understand what makes my audience tick.',
  },
  {
    name: 'Elena Rodriguez',
    role: 'Brand Strategist',
    company: 'Meta',
    avatar: 'https://i.pravatar.cc/150?img=45',
    quote: 'Every influencer and entrepreneur needs Ego. It\'s like having a personal coach in your pocket.',
  },

const companyLogos: Record<string, string> = {
  Spotify: 'SPOTIFY',
  TikTok: 'TIKTOK',
  Meta: 'META',

export default function Testimonials() {
  
  ];

  return (
    <section id="testimonials" className="bg-slate-50 py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-rose-500 font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.2] text-slate-900 mt-4">
            Loved by top creators
          </h2>
          <p className="text-slate-500 mt-4 max-w-2xl mx-auto text-lg">
            Join thousands who've elevated their personal brand with Ego.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className="mb-6">
                <span className="text-xs font-bold tracking-widest text-slate-400">
                  {companyLogos[testimonial.company]}
                </span>
              </div>
              
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold text-slate-900">{testimonial.name}</p>
                  <p className="text-sm text-slate-500">{testimonial.role} at {testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
