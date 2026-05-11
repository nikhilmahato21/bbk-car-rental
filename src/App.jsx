import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Fleet from './sections/Fleet'
import WhyUs from './sections/WhyUs'
import Owner from './sections/Owner'
import Testimonials from './sections/Testimonials'
import FAQ from './sections/FAQ'
import Contact from './sections/Contact'
import Footer from './components/Footer'
import Toast from './components/Toast'

export default function App() {
  const [toast, setToast] = useState(null)
  const showToast = (msg, type = 'success') => {
    setToast({ message: msg, type })
    setTimeout(() => setToast(null), 4000)
  }
  return (
    <div className="min-h-screen bg-[#f0f6ff] text-slate-900">
      <Navbar />
      <Hero />
      <Fleet />
      <WhyUs />
      <Owner />
      <Testimonials />
      <FAQ />
      <Contact onToast={showToast} />
      <Footer />
      {toast && <Toast {...toast} onClose={() => setToast(null)} />}
    </div>
  )
}
