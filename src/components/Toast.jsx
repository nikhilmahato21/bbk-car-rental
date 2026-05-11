import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, XCircle, X } from 'lucide-react'

export default function Toast({ message, type = 'success', onClose }) {
  return (
    <div role="alert" aria-live="polite" className="fixed bottom-6 right-6 z-50">
      <motion.div initial={{ opacity: 0, y: 20, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 10 }}
        className={`flex items-start gap-3 px-5 py-4 max-w-sm rounded-xl backdrop-blur-2xl border shadow-glass-lg bg-white
          ${type === 'success' ? 'border-blue-200' : 'border-red-200'}`}>
        {type === 'success'
          ? <CheckCircle size={18} className="text-blue-500 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
          : <XCircle size={18} className="text-red-500 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
        }
        <p className="font-body text-sm text-slate-700 flex-1">{message}</p>
        <button onClick={onClose} className="text-slate-400 hover:text-slate-600 ml-2" aria-label="Close">
          <X size={15} />
        </button>
      </motion.div>
    </div>
  )
}
