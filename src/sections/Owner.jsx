import React from 'react'
import { motion } from 'framer-motion'
import { Quote, Phone, Star, Shield, Key } from 'lucide-react'
import { siteContent } from '../data/siteContent'

const OWNER_IMG = 'https://res.cloudinary.com/dynbpb9u0/image/upload/v1778519061/WhatsApp_Image_2026-05-11_at_09.39.27_fhlsre.jpg'

export default function Owner() {
  return (
    <section id="owner" className="relative py-28 overflow-hidden" aria-label="Meet the owner">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/40 via-white to-blue-50/20" />
      <div className="orb w-[500px] h-[500px] bg-blue-500/7 top-0 right-0" />
      <div className="orb w-[400px] h-[400px] bg-sky-400/6 bottom-0 left-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section label */}
        <div className="text-center mb-16">
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="section-eyebrow mb-4">Behind BBK</motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.1 }} className="section-title text-6xl md:text-8xl">
            <span className="text-slate-900">MEET THE </span>
            <span className="gradient-text">OWNER</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left — Photo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-blue-400 via-blue-600 to-blue-800 opacity-20 blur-lg" />
              <div className="absolute -inset-[2px] rounded-3xl bg-gradient-to-br from-blue-400 to-blue-700" />

              {/* Photo card */}
              <div className="relative rounded-3xl overflow-hidden w-[320px] sm:w-[380px] aspect-[3/4] shadow-glass-lg">
                <img
                  src={OWNER_IMG}
                  alt="BBK Car Rental Owner"
                  className="w-full h-full object-cover object-top"
                />
                {/* Bottom gradient overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-blue-900/70 to-transparent" />

                {/* Name card at bottom of photo */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="font-display font-bold text-2xl text-white leading-none tracking-wide">BBK Founder</p>
                  <p className="font-heading text-xs tracking-[0.3em] text-blue-200 uppercase mt-1">Owner & Director</p>
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 glass rounded-2xl px-5 py-3 shadow-glass-lg"
              >
                <div className="flex items-center gap-2">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={10} className="text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <span className="font-heading font-bold text-xs text-slate-700 tracking-wide">5.0 Rated</span>
                </div>
              </motion.div>

              {/* Est. badge */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-4 -left-4 glass rounded-2xl px-5 py-3 shadow-glass-lg"
              >
                <p className="font-heading text-[10px] tracking-widest text-slate-400 uppercase">Est.</p>
                <p className="font-display font-bold text-2xl gradient-text leading-none">{siteContent.brand.established}</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right — Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="flex flex-col gap-6"
          >
            {/* Quote */}
            <div className="glass-strong rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/60 to-transparent" />
              <Quote size={36} className="text-blue-200 mb-4" />
              <p className="relative font-body text-lg text-slate-600 leading-relaxed italic">
                "I started BBK because I wanted Lucknow to have a truly reliable self-drive option — no drivers, no hassle, just a clean car and freedom. Every car in my fleet is personally inspected and maintained. When you rent from BBK, you're not just a customer — you're a guest I take pride in serving."
              </p>
              <div className="mt-6 flex items-center gap-3 relative">
                <div className="h-px flex-1 bg-gradient-to-r from-blue-300 to-transparent" />
                <p className="font-heading font-bold text-sm text-blue-700 tracking-widest uppercase">— BBK Owner</p>
              </div>
            </div>

            {/* Trust pillars */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: Key, label: 'Self Drive', sub: 'Always' },
                { icon: Shield, label: 'Insured', sub: 'All Cars' },
                { icon: Star, label: 'Top Rated', sub: 'Lucknow' },
              ].map(({ icon: Icon, label, sub }) => (
                <div key={label} className="glass rounded-2xl p-4 text-center">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-electric-500 to-glow flex items-center justify-center mx-auto mb-3">
                    <Icon size={18} className="text-white" strokeWidth={2} />
                  </div>
                  <p className="font-heading font-bold text-sm text-slate-900 tracking-wide">{label}</p>
                  <p className="font-heading text-[10px] tracking-widest text-slate-400 uppercase mt-0.5">{sub}</p>
                </div>
              ))}
            </div>

            {/* Personal touch stats */}
            <div className="glass rounded-2xl p-6 flex flex-col sm:flex-row gap-6">
              {[
                { value: siteContent.brand.established, label: 'Year Founded', suffix: '' },
                { value: '8+', label: 'Cars in Fleet', suffix: '' },
                { value: '500+', label: 'Happy Customers', suffix: '' },
              ].map(({ value, label }) => (
                <div key={label} className="flex-1 text-center">
                  <div className="font-display font-bold text-4xl gradient-text leading-none mb-1">{value}</div>
                  <div className="font-heading text-[10px] tracking-widest text-slate-400 uppercase">{label}</div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a href={`tel:${siteContent.brand.phone}`}
              className="flex items-center justify-center gap-3 btn-glow rounded-xl py-4 text-base">
              <Phone size={18} strokeWidth={2.5} />
              Talk to the Owner Directly
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
