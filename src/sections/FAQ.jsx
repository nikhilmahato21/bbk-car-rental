import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Phone } from 'lucide-react'
import { siteContent } from '../data/siteContent'

function FAQItem({ item, index, isOpen, onToggle }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ delay: index * 0.06 }}
      className={`glass rounded-xl overflow-hidden transition-all duration-300 ${isOpen ? 'border-blue-400/50' : 'border-slate-200 hover:border-slate-300'}`}>
      <button onClick={onToggle}
        className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left group focus:outline-none"
        aria-expanded={isOpen}>
        <span className={`font-heading font-semibold text-sm tracking-wide transition-colors duration-200 ${isOpen ? 'text-slate-900' : 'text-slate-700 group-hover:text-slate-900'}`}>
          {item.q}
        </span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.25 }} className="flex-shrink-0 mt-0.5">
          <ChevronDown size={16} className={isOpen ? 'text-blue-500' : 'text-slate-400'} strokeWidth={2.5} />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden">
            <div className="h-px mx-6 bg-gradient-to-r from-transparent via-blue-200/50 to-transparent" />
            <p className="font-body text-sm text-slate-500 leading-relaxed px-6 py-4">{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const [open, setOpen] = useState(0)
  return (
    <section id="faq" className="relative py-28 overflow-hidden" aria-label="FAQ">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/20 to-white" />
      <div className="orb w-[400px] h-[400px] bg-blue-500/8 top-0 left-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="section-eyebrow mb-4">Questions & Answers</motion.p>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: 0.1 }} className="section-title text-6xl md:text-7xl mb-6">
              <span className="text-slate-900">GOT </span>
              <br /><span className="gradient-text">QUESTIONS?</span>
            </motion.h2>
            <div className="h-px w-16 bg-gradient-to-r from-electric-500 to-glow mb-8" />
            <p className="font-body text-slate-500 leading-relaxed mb-8">
              Everything you need to know about self-drive car rentals in Lucknow. Still have questions? Call or WhatsApp us.
            </p>
            <a href={`tel:${siteContent.brand.phone}`} className="btn-glow rounded-xl inline-flex items-center gap-2 px-8 py-4">
              <Phone size={16} strokeWidth={2.5} />
              Call {siteContent.brand.phone}
            </a>

            {/* Info box */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="glass-strong rounded-2xl p-7 mt-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-blue-50/30" />
              <div className="relative">
                <p className="section-eyebrow mb-3">Service Zone</p>
                <p className="font-display font-bold text-5xl text-slate-900 leading-none tracking-wide">LUCKNOW</p>
                <p className="font-display font-bold text-4xl text-slate-400 leading-none tracking-wide">ONLY</p>
                <p className="font-heading text-xs tracking-widest text-slate-400 uppercase mt-3">Uttar Pradesh · 226001</p>
                <p className="font-body text-xs text-slate-400 mt-2">We do not operate outside Lucknow city limits.</p>
              </div>
            </motion.div>
          </div>

          <div className="space-y-3">
            {siteContent.faqs.map((item, i) => (
              <FAQItem key={i} item={item} index={i} isOpen={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
