import React from 'react'
import { Phone, MessageCircle, MapPin, Mail } from 'lucide-react'
import { siteContent } from '../data/siteContent'
import { motion } from 'framer-motion'

export default function Footer() {
  const { brand, footer, contact } = siteContent
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-blue-100 overflow-hidden" aria-label="Footer">
      <div className="absolute inset-0 bg-white" />
      <div className="orb w-[400px] h-[400px] bg-blue-500/6 top-0 left-0" />
      <div className="orb w-[400px] h-[400px] bg-blue-700/5 top-0 right-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-32 h-32 rounded-xl overflow-hidden flex-shrink-0">
                <img src="https://res.cloudinary.com/dynbpb9u0/image/upload/v1778519659/Gemini_Generated_Image_7083l07083l07083__1_-removebg-preview_1_grnjcc.png"
                  alt="BBK Logo" className="w-full h-full object-contain" />
              </div>
              <div>
               \
              </div>
            </div>
            <p className="font-body text-sm text-slate-400 leading-relaxed mb-6">{footer.tagline}</p>
            <div className="flex gap-3">
              <a href={`tel:${brand.phone}`}
                className="w-10 h-10 glass rounded-xl flex items-center justify-center hover:bg-blue-100 transition-colors"
                aria-label="Call">
                <Phone size={15} className="text-slate-500" strokeWidth={2} />
              </a>
              <a href={`https://wa.me/${brand.whatsapp}`} target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 glass rounded-xl flex items-center justify-center hover:bg-green-100 transition-colors"
                aria-label="WhatsApp">
                <MessageCircle size={15} className="text-slate-500" strokeWidth={2} />
              </a>
              <a href={`mailto:${brand.email}`}
                className="w-10 h-10 glass rounded-xl flex items-center justify-center hover:bg-blue-100 transition-colors"
                aria-label="Email">
                <Mail size={15} className="text-slate-500" strokeWidth={2} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-heading font-semibold text-xs tracking-[0.35em] text-blue-500 uppercase mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {footer.links.map(link => (
                <li key={link.label}>
                  <a href={link.href}
                    onClick={e => { e.preventDefault(); document.getElementById(link.href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' }) }}
                    className="font-heading font-medium text-sm text-slate-400 hover:text-slate-900 transition-colors tracking-wide relative group">
                    <span className="absolute -left-4 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-xs tracking-[0.35em] text-blue-500 uppercase mb-6">Contact</h3>
            <div className="space-y-4">
              <a href={`tel:${contact.phone}`} className="flex items-center gap-3 group">
                <Phone size={13} className="text-blue-500 flex-shrink-0" strokeWidth={2.5} />
                <span className="font-heading font-medium text-sm text-slate-500 group-hover:text-slate-900 transition-colors">{contact.phone}</span>
              </a>
              <a href={`mailto:${contact.email}`} className="flex items-center gap-3 group">
                <Mail size={13} className="text-blue-700 flex-shrink-0" strokeWidth={2.5} />
                <span className="font-heading font-medium text-sm text-slate-500 group-hover:text-slate-900 transition-colors">{contact.email}</span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin size={13} className="text-neon flex-shrink-0 mt-1" strokeWidth={2.5} />
                <span className="font-heading font-medium text-sm text-slate-500">{contact.city}</span>
              </div>
              {/* Location box */}
              <div className="glass rounded-xl p-4 mt-2">
                <p className="section-eyebrow text-[10px] mb-1">Service Zone</p>
                <p className="font-display font-bold text-3xl text-slate-900 leading-none tracking-wide">LUCKNOW</p>
                <p className="font-display font-bold text-2xl text-slate-400 leading-none tracking-wide">ONLY · UP</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-blue-200/50 to-transparent mb-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-heading text-[11px] tracking-widest text-slate-400 uppercase">
            © {year} BBK Car Rental Service. All rights reserved.
          </p>
          <p className="font-heading text-[11px] tracking-widest text-slate-400 uppercase">
            Lucknow, Uttar Pradesh · Self Drive Only
          </p>
        </div>
      </div>
    </footer>
  )
}
