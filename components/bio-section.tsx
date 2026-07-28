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
                Matías Ricardes es un productor y DJ nacido el 20 de junio del 2000 en Buenos Aires, Argentina. Criado en Costa Rica, desarrolló una identidad artística marcada por diversas influencias culturales.
              </p>
              <p className="text-sm leading-relaxed text-white/60 tracking-wide">
                Desde temprana edad, la música marcó su camino. En 2024 emergió en la escena del tech house de Buenos Aires con un sonido definido por grooves hipnóticos, bajos potentes y vocales profundas.
              </p>
              <p className="text-sm leading-relaxed text-white/60 tracking-wide">
                Logró firmar música en sellos internacionales como Under No Illusion, Happy Techno, ANDDANCE, Manicomio, entre otros.
              </p>
              <p className="text-sm leading-relaxed text-white/60 tracking-wide">
                Se ha presentado en algunos de los clubes y fiestas más destacados de la ciudad, consolidando un estilo propio y una propuesta sonora distintiva.
              </p>

              {/* English Version */}
              <div className="pt-6 mt-6 border-t border-white/10 space-y-6">
                <p className="text-sm leading-relaxed text-white/60 tracking-wide italic">
                  Matías Ricardes is a producer and DJ born on June 20, 2000, in Buenos Aires, Argentina. Raised in Costa Rica, he developed an artistic identity marked by diverse cultural influences.
                </p>
                <p className="text-sm leading-relaxed text-white/60 tracking-wide italic">
                  From an early age, music shaped his path. In 2024 he emerged in the Buenos Aires tech house scene with a sound defined by hypnotic grooves, powerful basslines, and deep vocals.
                </p>
                <p className="text-sm leading-relaxed text-white/60 tracking-wide italic">
                  He has signed music on international labels such as Under No Illusion, Happy Techno, ANDDANCE, and Manicomio, among others.
                </p>
                <p className="text-sm leading-relaxed text-white/60 tracking-wide italic">
                  He has performed at some of the most prominent clubs and parties in the city, consolidating his own style and a distinctive sonic proposal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
