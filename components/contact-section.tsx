"use client"

import type React from "react"

import { useState } from "react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  return (
    <section id="contact" className="min-h-screen bg-black py-32">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-6xl md:text-8xl lg:text-9xl font-light tracking-[0.2em] text-white mb-8">CONTACT</h2>
        <p className="text-xs tracking-[0.3em] text-white/50 mb-24">BOOKINGS & INQUIRIES</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-12">
            <div></div>
            <div>
              <p className="text-xs tracking-[0.3em] text-white/40 mb-2">SEND PROMOS</p>
              <a
                href="mailto:management@matiasricardes.com"
                className="text-lg text-white/80 hover:text-white transition-colors duration-500"
              >
                {"matiasricardespromos@gmail.com\n\n"}
              </a>
            </div>
            <div>
              <p className="text-xs tracking-[0.3em] text-white/40 mb-2">CONTACT</p>
              <a
                href="mailto:press@matiasricardes.com"
                className="text-lg text-white/80 hover:text-white transition-colors duration-500"
              >
                {"matiasricardes7@gmail.com"}
              </a>
            </div>

            <a
              href="mailto:bookings@matiasricardes.com"
              className="inline-block border border-white/30 px-8 py-3 text-xs tracking-[0.3em] text-white hover:bg-white hover:text-black transition-all duration-500 mt-8"
            >
              SEND PROMO
            </a>

          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label htmlFor="name" className="block text-xs tracking-[0.2em] text-white/40 mb-3">
                NAME
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:border-white focus:outline-none transition-colors duration-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs tracking-[0.2em] text-white/40 mb-3">
                EMAIL
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:border-white focus:outline-none transition-colors duration-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-xs tracking-[0.2em] text-white/40 mb-3">
                MESSAGE
              </label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:border-white focus:outline-none transition-colors duration-500 resize-none"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
