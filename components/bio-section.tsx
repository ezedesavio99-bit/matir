"use client"

export function BioSection() {
  return (
    <section id="bio" className="min-h-screen bg-black py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[3/4] overflow-hidden">
            <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2532.JPEG-MumzEqgMOboYnLAL0EE0MC8h4mc4WO.jpeg" alt="Matias Ricardes" className="w-full h-full object-cover object-top" />
          </div>

          {/* Text Content */}
          <div className="lg:pl-8">
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-light tracking-[0.2em] text-white mb-8">BIO</h2>
            <div className="space-y-6">
              <p className="text-sm leading-relaxed text-white/60 tracking-wide">
                Matías Ricardes es un productor y DJ nacido el 20 de junio del 2000 en Buenos Aires, Argentina. Criado
                en Costa Rica, desarrolló una identidad artística marcada por diversas influencias culturales.
              </p>
              <p className="text-sm leading-relaxed text-white/60 tracking-wide">
                Apasionado por la música desde temprana edad, en 2023 emergió en la escena tech house y minimal deep tech de Buenos Aires. Su sonido se caracteriza por grooves hipnóticos, bajos potentes y vocales profundas.
              </p>
              <p className="text-sm leading-relaxed text-white/60 tracking-wide">
                Logro firmar música en sellos como Under No Illusion, Happy Techno, ANDDANCE, Manicomio, Samba entre otros, y se ha presentado en clubes destacados de la ciudad, consolidando una identidad sonora propia.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/10">
              <div>
                <p className="text-3xl font-light text-white">15+</p>
                <p className="text-xs tracking-[0.2em] text-white/40 mt-2">LABELS</p>
              </div>
              <div>
                <p className="text-3xl font-light text-white">20+</p>
                <p className="text-xs tracking-[0.2em] text-white/40 mt-2">EPs</p>
              </div>
              <div>
                <p className="text-3xl font-light text-white">BA</p>
                <p className="text-xs tracking-[0.2em] text-white/40 mt-2">BASED</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
