"use client"

export function SetsSection() {
  const sets = [
    {
      id: "emZ1rX182Mg",
      title: "TECH SET",
      subtitle: "Featured Performance",
      url: "https://youtu.be/emZ1rX182Mg?si=MRFFiOSi5ZpTuGSS",
    },
    {
      id: "1K3cHUVIzfU",
      title: "SAMBA SET",
      subtitle: "Club Session",
      url: "https://www.youtube.com/watch?v=1K3cHUVIzfU",
    },
  ]

  return (
    <section id="sets" className="min-h-screen bg-black py-32">
      <div className="mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-6xl md:text-8xl lg:text-9xl font-light tracking-[0.2em] text-white mb-8 max-w-7xl mx-auto">
          SETS
        </h2>
        <p className="text-sm tracking-[0.15em] text-white/50 mb-16 max-w-xl mx-auto lg:mx-0 lg:ml-[calc((100%-80rem)/2+1.5rem)]">
          Live performances and DJ sets from clubs and festivals around the world.
        </p>

        <div className="flex flex-col gap-24">
          {sets.map((set) => (
            <div key={set.id} className="relative max-w-5xl mx-auto w-full">
              {/* YouTube Video Embed - larger aspect ratio container */}
              <div className="relative w-full aspect-video overflow-hidden group">
                {/* Decorative border */}
                <div className="absolute inset-0 border border-white/10 group-hover:border-white/20 transition-colors duration-700 pointer-events-none z-10" />

                <iframe
                  src={`https://www.youtube.com/embed/${set.id}?rel=0&modestbranding=1`}
                  title={set.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>

              {/* Video info */}
              <div className="mt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="text-sm tracking-[0.2em] text-white/70">{set.title}</h3>
                  <p className="text-xs tracking-[0.15em] text-white/40 mt-1">{set.subtitle}</p>
                </div>
                <a
                  href={set.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs tracking-[0.2em] text-white/50 hover:text-white transition-colors duration-500 border-b border-white/20 hover:border-white/50 pb-1"
                >
                  WATCH ON YOUTUBE
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
