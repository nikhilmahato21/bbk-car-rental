import React from 'react'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { siteContent } from '../data/siteContent'

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-28 overflow-hidden" aria-label="Reviews">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 to-white" />
      <div className="orb w-[500px] h-[500px] bg-blue-600/7 -top-20 right-0" />
      <div className="orb w-[400px] h-[400px] bg-sky-400/7 bottom-0 left-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="section-eyebrow mb-4">Happy Drivers</motion.p>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: 0.1 }} className="section-title text-6xl md:text-7xl">
              <span className="text-slate-900">REAL </span>
              <span className="gradient-text">REVIEWS</span>
            </motion.h2>
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            className="glass rounded-2xl px-8 py-5 text-center">
            <div className="font-display font-bold text-5xl gradient-text leading-none">5.0</div>
            <div className="flex justify-center gap-0.5 my-1">
              {[...Array(5)].map((_, i) => <Star key={i} size={12} className="text-amber-400 fill-amber-400" />)}
            </div>
            <div className="font-heading text-[10px] tracking-widest text-slate-400 uppercase">Avg Rating</div>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteContent.testimonials.map((t, i) => (
            <motion.div key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="glass-card rounded-2xl p-6 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100/40 rounded-full blur-2xl group-hover:bg-blue-200/50 transition-colors duration-300" />
              <Quote size={28} className="text-blue-300 absolute top-4 right-4 group-hover:text-blue-400 transition-colors" />

              <div className="flex gap-0.5 mb-4">
                {[...Array(t.rating)].map((_, i) => <Star key={i} size={12} className="text-amber-400 fill-amber-400" />)}
              </div>

              <p className="font-body text-sm text-slate-500 leading-relaxed mb-5 italic">"{t.text}"</p>

              <div className="pt-4 border-t border-slate-200">
                <div className="font-heading font-semibold text-sm text-slate-900 tracking-wide">{t.name}</div>
                <div className="font-heading text-[10px] tracking-widest text-slate-400 uppercase mt-0.5">{t.location}</div>
                <div className="mt-2 inline-block glass rounded-full px-3 py-1">
                  <span className="font-heading text-[10px] tracking-widest text-blue-600 uppercase">{t.vehicle}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
