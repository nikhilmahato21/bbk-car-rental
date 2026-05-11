import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Menu, X } from 'lucide-react'
import { siteContent } from '../data/siteContent'

const navLinks = [
  { label: 'Fleet', href: '#fleet' },
  { label: 'Why BBK', href: '#why' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
      const sections = navLinks.map(l => l.href.replace('#', ''))
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) { setActive(id); break }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const go = (href) => {
    setMenuOpen(false)
    document.getElementById(href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-2xl border-b border-blue-100 shadow-[0_4px_24px_rgba(37,99,235,0.08)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="focus:outline-none group">
              <div className="flex items-center gap-3">
                <div className="w-32 h-32 rounded-lg overflow-hidden flex-shrink-0">
                  <img src="https://res.cloudinary.com/dynbpb9u0/image/upload/v1778519659/Gemini_Generated_Image_7083l07083l07083__1_-removebg-preview_1_grnjcc.png"
                    alt="BBK Logo" className="w-full h-full object-contain" />
                </div>
                <div>
                 
                </div>
              </div>
            </button>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map(link => (
                <button key={link.href} onClick={() => go(link.href)}
                  className={`font-heading font-medium text-sm tracking-wider transition-all duration-200 relative group ${
                    active === link.href.replace('#', '') ? 'text-slate-900' : 'text-slate-500 hover:text-slate-800'
                  }`}>
                  {link.label}
                  <span className={`absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-electric-500 to-glow transition-all duration-300 rounded-full ${
                    active === link.href.replace('#', '') ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </button>
              ))}
            </div>

            {/* CTA */}
            <a href={`tel:${siteContent.brand.phone}`}
              className="hidden md:flex items-center gap-2 btn-glow rounded-lg text-sm px-5 py-2.5"
              aria-label="Call BBK">
              <Phone size={14} strokeWidth={2.5} />
              {siteContent.brand.phone}
            </a>

            <button onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 text-slate-700 focus:outline-none" aria-label="Toggle menu">
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 bg-white/98 backdrop-blur-2xl border-b border-blue-100 md:hidden shadow-[0_8px_24px_rgba(37,99,235,0.08)]">
            <div className="px-4 py-6 space-y-1">
              {navLinks.map((link, i) => (
                <motion.button key={link.href} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }} onClick={() => go(link.href)}
                  className="w-full text-left font-heading font-medium text-slate-600 hover:text-slate-900 py-3 px-4 hover:bg-blue-50 rounded-lg transition-colors border-b border-slate-100 last:border-0">
                  {link.label}
                </motion.button>
              ))}
              <div className="pt-4">
                <a href={`tel:${siteContent.brand.phone}`}
                  className="flex items-center justify-center gap-2 w-full btn-glow rounded-lg py-3">
                  <Phone size={16} />
                  Call: {siteContent.brand.phone}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
