"use client"

export function MusicSection() {
  return (
    <section id="music" className="min-h-screen bg-black py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-6xl md:text-8xl lg:text-9xl font-light tracking-[0.2em] text-white mb-24">MUSIC</h2>

        {/* Spotify Album Embeds - EPs */}
        <div className="pt-8">
          <h3 className="text-xs tracking-[0.3em] text-white/50 mb-8">EPs</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <iframe
              src="https://open.spotify.com/embed/album/5JXyACIG19yycD2IiPA7PU?utm_source=generator&theme=0"
              width="100%"
              height="352"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="opacity-80 hover:opacity-100 transition-opacity duration-500 rounded-xl"
            />
            <iframe
              src="https://open.spotify.com/embed/album/5I7jobRFhB93TnXICDQTiS?utm_source=generator&theme=0"
              width="100%"
              height="352"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="opacity-80 hover:opacity-100 transition-opacity duration-500 rounded-xl"
            />
          </div>
        </div>

        {/* Spotify Track Embeds - Singles */}
        <div className="pt-16">
          <h3 className="text-xs tracking-[0.3em] text-white/50 mb-8">SINGLES</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            <iframe
              src="https://open.spotify.com/embed/track/0zukwwkuKBuHuvEsVptbDR?utm_source=generator&theme=0"
              width="100%"
              height="152"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="opacity-80 hover:opacity-100 transition-opacity duration-500 rounded-xl"
            />
            <iframe
              src="https://open.spotify.com/embed/track/6DJXyeULadryOXDuTkvTNx?utm_source=generator&theme=0"
              width="100%"
              height="152"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="opacity-80 hover:opacity-100 transition-opacity duration-500 rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
