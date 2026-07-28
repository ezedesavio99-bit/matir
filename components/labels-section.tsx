"use client"

const labels = [
  "Under No Illusion",
  "HappyTechno",
  "ANDDANCE",
  "Manicomio",
  "LaBlueLabel",
  "CrazyNutz",
  "Samba",
  "Safari",
  "Latitud 62",
  "Only Friends",
  "Génesis BA",
  "Notsoserious",
  "iWantmusic",
]

export function LabelsSection() {
  return (
    <section id="labels" className="min-h-screen bg-black py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <h2 className="text-6xl md:text-8xl lg:text-9xl font-light tracking-[0.2em] text-white mb-8">LABELS</h2>
        <p className="text-xs tracking-[0.3em] text-white/50">RELEASES EN SELLOS INTERNACIONALES</p>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        {/* Fade Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />

        {/* Marquee */}
        <div className="flex animate-marquee">
          {[...labels, ...labels].map((label, index) => (
            <div key={index} className="flex-shrink-0 px-12 py-8 group cursor-pointer">
              <span className="text-3xl md:text-5xl font-light tracking-[0.3em] text-white/20 group-hover:text-white transition-colors duration-500">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Second Row - Reverse Direction */}
      <div className="relative mt-8">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />

        <div
          className="flex"
          style={{
            animation: "marquee 30s linear infinite reverse",
          }}
        >
          {[...labels]
            .reverse()
            .concat([...labels].reverse())
            .map((label, index) => (
              <div key={index} className="flex-shrink-0 px-12 py-8 group cursor-pointer">
                <span className="text-3xl md:text-5xl font-light tracking-[0.3em] text-white/20 group-hover:text-white transition-colors duration-500">
                  {label}
                </span>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}
