import React from 'react'
import { motion } from 'framer-motion'
import { Key, MapPin, Shield, Clock, Fuel, CreditCard } from 'lucide-react'
import { siteContent } from '../data/siteContent'

const iconMap = { Key, MapPin, Shield, Clock, Fuel, CreditCard }

const iconGradients = [
  'from-electric-500 to-glow',
  'from-neon to-electric-400',
  'from-glow to-rose-400',
  'from-amber-400 to-orange-500',
  'from-green-400 to-emerald-500',
  'from-cyan-400 to-blue-500',
]

export default function WhyUs() {
  return (
    <section id="why" className="relative py-28 overflow-hidden" aria-label="Why choose BBK">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-blue-50/40" />
      <div className="orb w-[600px] h-[600px] bg-blue-500/8 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="section-eyebrow mb-4">Why Choose Us</motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.1 }} className="section-title text-6xl md:text-8xl">
            <span className="text-slate-900">THE </span>
            <span className="gradient-text">BBK</span>
            <br />
            <span className="text-stroke-white">PROMISE</span>
          </motion.h2>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteContent.whyUs.map((item, i) => {
            const Icon = iconMap[item.icon] || Key
            return (
              <motion.div key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="glass-card rounded-2xl p-8 group"
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${iconGradients[i]} p-0.5 mb-6`}>
                  <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center group-hover:bg-transparent transition-colors duration-300">
                    <Icon size={22} className="text-slate-700 group-hover:text-white transition-colors duration-300" strokeWidth={2} />
                  </div>
                </div>

                <h3 className="font-display font-bold text-2xl text-slate-900 tracking-wide mb-3">{item.title}</h3>
                <p className="font-body text-sm text-slate-500 leading-relaxed">{item.desc}</p>

                {/* Bottom glow line */}
                <div className={`mt-6 h-[1px] w-0 group-hover:w-full bg-gradient-to-r ${iconGradients[i]} transition-all duration-500`} />
              </motion.div>
            )
          })}
        </div>

        {/* Self Drive highlight */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="mt-16 glass-strong rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
          <div className="orb w-[400px] h-[400px] bg-blue-500/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          <div className="relative z-10">
            <p className="section-eyebrow mb-4">The BBK Way</p>
            <h3 className="font-display font-bold text-5xl md:text-7xl text-slate-900 leading-none mb-4">
              TAKE THE <span className="gradient-text">WHEEL</span>
            </h3>
            <p className="font-body text-slate-500 text-base leading-relaxed max-w-2xl mx-auto mb-8">
              BBK Car Rental is Lucknow's only dedicated self-drive fleet. No driver. No surveillance. Just a well-maintained car handed to you with the keys — drive it your way.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={`tel:${siteContent.brand.phone}`}
                className="btn-glow rounded-xl px-10 py-4 flex items-center gap-2">
                <Key size={16} strokeWidth={2.5} />
                Book Self Drive
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
