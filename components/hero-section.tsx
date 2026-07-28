"use client"

import { useEffect, useState } from "react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center bg-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/img-9742.jpg"
          alt="Matias Ricardes"
          className="w-full h-full object-cover object-top opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
      </div>

      {/* Content */}
      <div
        className={`relative z-10 text-center transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-[0.3em] text-white mb-4">
          MATIAS RICARDES
        </h1>
        <p className="text-sm md:text-base tracking-[0.4em] text-white/70 mb-6">DJ / PRODUCER</p>

        <a
          href="https://open.spotify.com/intl-es/artist/3d5cuyH4VoweDlD7AQx9eV?si=jCpqFBFVRf-KWnDyv6hLAg&nd=1&dlsi=d7416dfb6006440b"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border border-white/30 px-8 py-3 text-xs tracking-[0.3em] text-white hover:bg-white hover:text-black transition-all duration-500"
        >
          LISTEN ON SPOTIFY
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-px h-16 bg-gradient-to-b from-white/50 to-transparent" />
      </div>
    </section>
  )
}
