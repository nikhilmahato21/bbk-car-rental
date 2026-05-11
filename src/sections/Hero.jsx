import React from 'react'
import { motion } from 'framer-motion'
import { Phone, MessageCircle, MapPin, ChevronDown, Key, Star, Shield } from 'lucide-react'
import { siteContent } from '../data/siteContent'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.13, duration: 0.7, ease: [0.22, 1, 0.36, 1] } }),
}

export default function Hero() {
  const { hero, brand, stats } = siteContent

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-to-br from-white via-blue-50 to-[#e8f2ff]" aria-label="Hero">
      {/* Radial accent overlays */}
      <div className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 70% 60% at 15% 10%, rgba(59,130,246,0.12) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 85% 90%, rgba(29,78,216,0.09) 0%, transparent 60%)' }} />
      <div className="absolute inset-0 dot-grid opacity-40" />

      {/* Floating orbs */}
      <div className="orb w-[600px] h-[600px] bg-blue-400/[0.08] -top-40 -left-40 animate-float" />
      <div className="orb w-[500px] h-[500px] bg-blue-600/[0.06] -bottom-20 -right-20 animate-float-delayed" />
      <div className="orb w-[300px] h-[300px] bg-sky-300/[0.07] top-1/2 left-1/2 animate-float" />

      {/* Glow lines */}
      <div className="absolute top-0 left-0 right-0 h-px glow-line" />
      <div className="absolute bottom-0 left-0 right-0 h-px glow-line" />

      {/* Giant background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden select-none">
        <span className="font-display font-bold text-[25vw] text-blue-900/[0.03] leading-none tracking-widest whitespace-nowrap">BBK</span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 pt-28 pb-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            {/* Location pill */}
            <motion.div custom={0} variants={fadeUp} initial="hidden" animate="show"
              className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8">
              <MapPin size={12} className="text-neon" strokeWidth={2.5} />
              <span className="font-heading font-medium text-xs tracking-widest text-slate-500 uppercase">
                {brand.city} · {brand.state}
              </span>
            </motion.div>

            {/* Badge */}
            <motion.div custom={1} variants={fadeUp} initial="hidden" animate="show"
              className="inline-flex items-center gap-2 bg-blue-100 border border-blue-300 rounded-full px-4 py-2 mb-6 ml-2">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="font-heading font-semibold text-xs tracking-widest text-blue-700 uppercase">{hero.badge}</span>
            </motion.div>

            {/* Sub label */}
            <motion.p custom={2} variants={fadeUp} initial="hidden" animate="show"
              className="section-eyebrow mb-3">{hero.subheadline}</motion.p>

            {/* Headline */}
            <motion.h1 custom={3} variants={fadeUp} initial="hidden" animate="show"
              className="section-title text-7xl sm:text-8xl lg:text-8xl xl:text-9xl mb-2">
              <span className="text-slate-900">{hero.headline}</span>
            </motion.h1>
            <motion.h1 custom={3.5} variants={fadeUp} initial="hidden" animate="show"
              className="section-title text-7xl sm:text-8xl lg:text-8xl xl:text-9xl mb-6">
              <span className="gradient-text">{hero.headlineAccent}</span>
            </motion.h1>

            {/* Self Drive pill */}
            <motion.div custom={4} variants={fadeUp} initial="hidden" animate="show" className="mb-6">
              <span className="font-display font-bold text-3xl sm:text-4xl gradient-text-neon tracking-wide">SELF DRIVE</span>
              <span className="font-heading text-sm tracking-widest text-slate-400 uppercase ml-3">No Driver Needed</span>
            </motion.div>

            <motion.p custom={5} variants={fadeUp} initial="hidden" animate="show"
              className="font-body text-slate-500 text-base leading-relaxed mb-10 max-w-lg">{hero.description}</motion.p>

            <motion.div custom={6} variants={fadeUp} initial="hidden" animate="show" className="flex flex-wrap gap-4">
              <a href={`tel:${brand.phone}`}
                className="flex items-center gap-3 btn-glow rounded-xl text-base px-10 py-4">
                <Phone size={18} strokeWidth={2.5} />
                {hero.ctaPrimary}
              </a>
              <a href={`https://wa.me/${brand.whatsapp}?text=Hi, I want to self drive rent a car`}
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 btn-whatsapp rounded-xl text-base px-10 py-4">
                <MessageCircle size={18} strokeWidth={2.5} />
                {hero.ctaSecondary}
              </a>
            </motion.div>

            {/* Trust row */}
            <motion.div custom={7} variants={fadeUp} initial="hidden" animate="show"
              className="flex flex-wrap items-center gap-6 mt-10 pt-8 border-t border-slate-200">
              {[
                { icon: Key, text: 'Self Drive' },
                { icon: Shield, text: 'Fully Insured' },
                { icon: Star, text: '5★ Rated' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2">
                  <Icon size={14} className="text-blue-500" strokeWidth={2.5} />
                  <span className="font-heading font-medium text-xs tracking-wider text-slate-400 uppercase">{text}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Stats + Info glass cards */}
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex flex-col gap-4">
            {/* Phone glass card */}
            <div className="glass rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/8 rounded-full blur-2xl" />
              <p className="section-eyebrow mb-3">Call or WhatsApp</p>
              <a href={`tel:${brand.phone}`}
                className="block font-display font-bold text-5xl xl:text-6xl text-slate-900 hover:gradient-text transition-all duration-300 leading-none tracking-wider">
                {brand.phone}
              </a>
              <p className="font-heading text-xs tracking-widest text-slate-400 uppercase mt-2">Available 24/7 · Lucknow Only</p>
            </div>

            {/* Location glass card */}
            <div className="glass rounded-2xl p-7 relative overflow-hidden">
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-700/8 rounded-full blur-2xl" />
              <div className="flex items-start gap-4">
                <MapPin size={28} className="text-glow mt-1 flex-shrink-0" />
                <div>
                  <p className="font-display font-bold text-5xl text-slate-900 leading-none tracking-wide">LUCKNOW</p>
                  <p className="font-display font-bold text-4xl text-slate-400 leading-none tracking-wide">ONLY</p>
                  <p className="font-heading text-xs tracking-widest text-slate-400 uppercase mt-2">Uttar Pradesh · 226001</p>
                </div>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-4 gap-3">
              {stats.map((s) => (
                <div key={s.label} className="glass rounded-xl p-4 text-center">
                  <div className="font-display font-bold text-2xl gradient-text leading-none">{s.value}</div>
                  <div className="font-heading text-[10px] tracking-widest text-slate-400 uppercase mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll down */}
      <motion.button onClick={() => document.getElementById('fleet')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 focus:outline-none"
        animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
        aria-label="Scroll to fleet">
        <span className="font-heading text-[10px] tracking-[0.35em] text-slate-400 uppercase">Explore Fleet</span>
        <ChevronDown size={18} className="text-blue-500" />
      </motion.button>
    </section>
  )
}
