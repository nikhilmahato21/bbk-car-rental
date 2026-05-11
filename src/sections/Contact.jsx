import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, MessageCircle, MapPin, Mail, Clock, Send, Check } from 'lucide-react'
import { siteContent } from '../data/siteContent'

function FloatingInput({ label, id, type = 'text', value, onChange, error, required, as: Tag = 'input', rows }) {
  const [focused, setFocused] = useState(false)
  const isUp = focused || value
  const cls = `w-full bg-white border text-slate-900 px-4 pt-6 pb-2 font-body text-sm rounded-xl
               transition-all duration-200 focus:outline-none resize-none placeholder-transparent
               ${error ? 'border-red-400 focus:border-red-500' : isUp ? 'border-blue-400' : 'border-slate-200 focus:border-blue-400'}`
  return (
    <div className="relative">
      <Tag id={id} type={type} value={value} onChange={onChange}
        onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
        required={required} rows={rows} className={cls} placeholder=" "
        aria-describedby={error ? `${id}-error` : undefined} />
      <label htmlFor={id}
        className={`absolute left-4 pointer-events-none font-heading font-medium tracking-wider uppercase transition-all duration-200
          ${isUp ? 'top-2 text-[9px] ' + (error ? 'text-red-500' : 'text-blue-500') : 'top-4 text-xs text-slate-400'}`}>
        {label}{required && ' *'}
      </label>
      {error && <p id={`${id}-error`} className="text-[10px] text-red-500 font-heading tracking-wider uppercase mt-1 ml-1">{error}</p>}
    </div>
  )
}

export default function Contact({ onToast }) {
  const { contact, brand } = siteContent
  const [form, setForm] = useState({ name: '', phone: '', car: '', message: '' })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name required'
    if (!form.phone.trim()) e.phone = 'Phone required'
    else if (!/^[0-9]{10}$/.test(form.phone.trim())) e.phone = 'Enter valid 10-digit number'
    if (!form.message.trim()) e.message = 'Please describe your trip'
    return e
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    setErrors(errs)
    if (Object.keys(errs).length) return
    setLoading(true)
    await new Promise(r => setTimeout(r, 1800))
    setLoading(false)
    setDone(true)
    onToast("Request sent! We'll call you back shortly.", 'success')
    setForm({ name: '', phone: '', car: '', message: '' })
    setTimeout(() => setDone(false), 6000)
  }

  const infoItems = [
    { icon: Phone, label: 'Phone / Call', val: contact.phone, href: `tel:${contact.phone}`, color: 'text-blue-500' },
    { icon: MessageCircle, label: 'WhatsApp', val: contact.phone, href: `https://wa.me/${contact.whatsapp}`, color: 'text-green-500' },
    { icon: Mail, label: 'Email', val: contact.email, href: `mailto:${contact.email}`, color: 'text-blue-700' },
    { icon: MapPin, label: 'Location', val: contact.city, href: null, color: 'text-sky-500' },
    { icon: Clock, label: 'Hours', val: contact.hours, href: null, color: 'text-amber-500' },
  ]

  return (
    <section id="contact" className="relative py-28 overflow-hidden" aria-label="Contact">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/30 to-white" />
      <div className="orb w-[500px] h-[500px] bg-blue-700/7 top-0 right-0" />
      <div className="orb w-[400px] h-[400px] bg-blue-500/7 bottom-0 left-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="mb-16">
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="section-eyebrow mb-4">Book Your Drive</motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.1 }} className="section-title text-6xl md:text-8xl mb-4">
            <span className="text-slate-900">TAKE THE </span>
            <span className="gradient-text">WHEEL</span>
          </motion.h2>
          <div className="h-px w-16 bg-gradient-to-r from-electric-500 to-glow" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            {/* Phone Big */}
            <div className="glass-strong rounded-2xl p-8 mb-5 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-blue-50/20" />
              <div className="relative">
                <p className="section-eyebrow mb-3">Call or WhatsApp Now</p>
                <a href={`tel:${contact.phone}`}
                  className="block font-display font-bold text-6xl text-slate-900 hover:gradient-text transition-all duration-300 leading-none tracking-wide">
                  {contact.phone}
                </a>
                <p className="font-heading text-xs tracking-widest text-slate-400 uppercase mt-2">Available 24/7</p>
              </div>
            </div>

            {/* Location Big */}
            <div className="glass rounded-2xl p-7 mb-5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-28 h-28 bg-sky-400/10 rounded-full blur-2xl" />
              <div className="flex items-start gap-4">
                <MapPin size={26} className="text-neon mt-1 flex-shrink-0" />
                <div>
                  <p className="section-eyebrow mb-2">Service Zone</p>
                  <p className="font-display font-bold text-5xl text-slate-900 leading-none tracking-wide">LUCKNOW</p>
                  <p className="font-display font-bold text-4xl text-slate-400 leading-none tracking-wide">ONLY</p>
                  <p className="font-heading text-xs tracking-widest text-slate-400 uppercase mt-2">
                    Uttar Pradesh · PIN {contact.pin}
                  </p>
                </div>
              </div>
            </div>

            {/* Info list */}
            <div className="space-y-3">
              {infoItems.slice(1).map(({ icon: Icon, label, val, href, color }) => (
                <div key={label} className="flex items-center gap-4 glass rounded-xl p-4 hover:bg-blue-50/60 transition-colors group">
                  <div className="w-9 h-9 glass rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon size={15} className={`${color} group-hover:scale-110 transition-transform`} strokeWidth={2} />
                  </div>
                  <div>
                    <div className="font-heading text-[10px] tracking-widest text-slate-400 uppercase">{label}</div>
                    {href ? (
                      <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                        className="font-heading font-semibold text-sm text-slate-700 hover:text-slate-900 transition-colors">{val}</a>
                    ) : (
                      <span className="font-heading font-semibold text-sm text-slate-700">{val}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <a href={`https://wa.me/${brand.whatsapp}?text=Hi BBK, I want to book a self drive car in Lucknow`}
              target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full mt-5 btn-whatsapp rounded-xl py-5 text-base">
              <MessageCircle size={20} strokeWidth={2.5} />
              Chat on WhatsApp
            </a>
          </motion.div>

          {/* Right: Form */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="glass-strong rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent" />
              <div className="relative">
                <h3 className="font-display font-bold text-3xl text-slate-900 tracking-wide mb-1">REQUEST A BOOKING</h3>
                <p className="font-body text-xs text-slate-400 mb-8">Fill in the form and we'll call you back.</p>

                {done ? (
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-16 gap-4">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-electric-500 to-glow flex items-center justify-center shadow-glow-purple">
                      <Check size={36} className="text-white" strokeWidth={3} />
                    </div>
                    <p className="font-display font-bold text-3xl text-slate-900 tracking-wide text-center">REQUEST SENT!</p>
                    <p className="font-body text-sm text-slate-400 text-center">We'll call you back shortly.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-4" aria-label="Booking form">
                    <FloatingInput id="name" label="Your Name" value={form.name} required onChange={e => setForm({ ...form, name: e.target.value })} error={errors.name} />
                    <FloatingInput id="phone" label="Phone Number" type="tel" value={form.phone} required onChange={e => setForm({ ...form, phone: e.target.value })} error={errors.phone} />
                    <FloatingInput id="car" label="Preferred Car (optional)" value={form.car} onChange={e => setForm({ ...form, car: e.target.value })} />
                    <FloatingInput id="message" label="Trip Details & Dates" as="textarea" rows={4} required value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} error={errors.message} />

                    <button type="submit" disabled={loading}
                      className="w-full flex items-center justify-center gap-3 btn-glow rounded-xl py-5 text-base
                                 disabled:opacity-50 disabled:cursor-not-allowed">
                      {loading ? (
                        <>
                          <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                            className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full" />
                          Sending...
                        </>
                      ) : (
                        <><Send size={16} strokeWidth={2.5} />Send Enquiry</>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
