import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Users, Fuel, Zap, Car, Phone, MessageCircle } from 'lucide-react'
import { siteContent } from '../data/siteContent'

const badgeColors = {
  Economy: 'bg-blue-50 text-blue-700 border-blue-200',
  Popular: 'bg-red-50 text-red-600 border-red-200',
  Bestseller: 'bg-violet-50 text-violet-700 border-violet-200',
  Premium: 'bg-amber-50 text-amber-700 border-amber-200',
  'Top Pick': 'bg-cyan-50 text-cyan-700 border-cyan-200',
  'Premium SUV': 'bg-rose-50 text-rose-700 border-rose-200',
  Family: 'bg-green-50 text-green-700 border-green-200',
  Luxury: 'bg-yellow-50 text-yellow-700 border-yellow-200',
}

function FleetCard({ car, index }) {
  const [imgErr, setImgErr] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ delay: index * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="glass-card rounded-2xl overflow-hidden group cursor-default"
    >
      {/* Image area */}
      <div className="relative h-48 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${car.color} z-10`} />

        {!imgErr ? (
          <img src={car.img} alt={car.name} loading="lazy" onError={() => setImgErr(true)}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-blue-50">
            <Car size={40} className="text-slate-300 mb-2" />
            <span className="font-display font-bold text-xl text-slate-400 text-center px-4 leading-tight">{car.name}</span>
          </div>
        )}

        {/* Badge */}
        <div className="absolute top-3 left-3 z-20">
          <span className={`font-heading font-semibold text-[10px] tracking-widest uppercase px-3 py-1 rounded-full border backdrop-blur-md ${badgeColors[car.badge] || 'bg-blue-50 text-blue-600 border-blue-200'}`}>
            {car.badge}
          </span>
        </div>

        {/* Self Drive badge */}
        <div className="absolute top-3 right-3 z-20">
          <span className="font-heading font-semibold text-[10px] tracking-widest uppercase px-3 py-1 rounded-full border bg-blue-50 border-blue-300 text-blue-700 backdrop-blur-md">
            Self Drive
          </span>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/90 to-transparent z-10" />
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="font-heading font-medium text-[10px] tracking-[0.3em] text-slate-400 uppercase mb-1">{car.category}</p>
        <div className="flex items-end justify-between mb-3">
          <h3 className="font-display font-bold text-2xl text-slate-900 leading-none tracking-wide">{car.name}</h3>
          <div className="text-right">
            <span className="font-display font-bold text-xl text-blue-600 leading-none">
              ₹{car.price.toLocaleString('en-IN')}
            </span>
            <p className="font-heading text-[10px] tracking-wider text-slate-400 uppercase mt-0.5">/day</p>
          </div>
        </div>

        {/* Specs row */}
        <div className="flex flex-wrap gap-3 mb-5">
          <div className="flex items-center gap-1.5 glass rounded-full px-3 py-1.5">
            <Users size={11} className="text-blue-500" strokeWidth={2.5} />
            <span className="font-heading text-[11px] tracking-wider text-slate-600">{car.seats} Seats</span>
          </div>
          <div className="flex items-center gap-1.5 glass rounded-full px-3 py-1.5">
            <Fuel size={11} className="text-blue-600" strokeWidth={2.5} />
            <span className="font-heading text-[11px] tracking-wider text-slate-600">{car.fuel}</span>
          </div>
          <div className="flex items-center gap-1.5 glass rounded-full px-3 py-1.5">
            <Zap size={11} className="text-sky-500" strokeWidth={2.5} />
            <span className="font-heading text-[11px] tracking-wider text-slate-600">{car.transmission}</span>
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-blue-200/50 to-transparent mb-4" />

        {/* Book button */}
        <a href={`tel:${siteContent.brand.phone}`}
          className="flex items-center justify-center gap-2 w-full bg-blue-50 rounded-xl py-3 font-heading font-semibold text-sm tracking-widest uppercase text-slate-600
                     hover:bg-blue-100 hover:text-blue-700 transition-all duration-200 group/btn">
          <Phone size={14} className="text-blue-500 group-hover/btn:text-blue-600" strokeWidth={2.5} />
          Book This Car
        </a>
      </div>
    </motion.div>
  )
}

export default function Fleet() {
  const { fleet, brand } = siteContent
  const categories = ['All', ...Array.from(new Set(fleet.map(c => c.category)))]
  const [filter, setFilter] = useState('All')
  const filtered = filter === 'All' ? fleet : fleet.filter(c => c.category === filter)

  return (
    <section id="fleet" className="relative py-28 overflow-hidden" aria-label="Our fleet">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/30 to-white" />
      <div className="orb w-[500px] h-[500px] bg-blue-500/8 top-0 right-0" />
      <div className="orb w-[400px] h-[400px] bg-blue-700/6 bottom-0 left-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="mb-16">
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="section-eyebrow mb-4">Choose Your Car</motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.1 }} className="section-title text-7xl md:text-8xl mb-4">
            <span className="text-slate-900">OUR </span>
            <span className="gradient-text">FLEET</span>
          </motion.h2>
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.2 }} className="flex items-center gap-4">
            <div className="h-px w-16 bg-gradient-to-r from-electric-500 to-glow" />
            <span className="font-heading text-sm text-slate-400 tracking-wider">ALL SELF DRIVE · LUCKNOW ONLY</span>
          </motion.div>
        </div>

        {/* Filter tabs */}
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="flex flex-wrap gap-2 mb-12">
          {categories.map(cat => (
            <button key={cat} onClick={() => setFilter(cat)}
              className={`font-heading font-semibold text-xs tracking-widest uppercase px-5 py-2.5 rounded-full border transition-all duration-200 ${
                filter === cat
                  ? 'bg-gradient-to-r from-electric-500 to-glow border-transparent text-white shadow-glow-purple'
                  : 'bg-white border-slate-200 text-slate-500 hover:text-slate-700 hover:border-blue-300'
              }`}>
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Cars grid */}
        <AnimatePresence mode="wait">
          <motion.div key={filter} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filtered.map((car, i) => <FleetCard key={car.id} car={car} index={i} />)}
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="mt-16 flex flex-col items-center gap-4">
          <p className="font-body text-slate-400 text-sm text-center">All cars available for self drive in Lucknow, UP</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={`tel:${brand.phone}`}
              className="flex items-center justify-center gap-3 btn-glow rounded-xl px-12 py-5 text-base">
              <Phone size={18} strokeWidth={2.5} />
              Call {brand.phone}
            </a>
            <a href={`https://wa.me/${brand.whatsapp}?text=Hi, I want to book a self drive car`}
              target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 btn-whatsapp rounded-xl px-12 py-5 text-base">
              <MessageCircle size={18} strokeWidth={2.5} />
              WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
