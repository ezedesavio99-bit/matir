export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs tracking-[0.2em] text-white/40">© 2025 MATIAS RICARDES. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-8">
            <a
              href="https://open.spotify.com/artist/3d5cuyH4VoweDlD7AQx9eV?si=XHVt4qkmTsSHsAR00nhR9Q"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-[0.2em] text-white/40 hover:text-white transition-colors duration-500"
            >
              SPOTIFY
            </a>
            <a
              href="https://on.soundcloud.com/Av2WzsmVoo9SxCYgJ5"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-[0.2em] text-white/40 hover:text-white transition-colors duration-500"
            >
              SOUNDCLOUD
            </a>
            <a
              href="https://www.instagram.com/matiasricardes"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-[0.2em] text-white/40 hover:text-white transition-colors duration-500"
            >
              INSTAGRAM
            </a>
            <a
              href="https://www.beatport.com/es/artist/matias-ricardes/1167831"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-[0.2em] text-white/40 hover:text-white transition-colors duration-500"
            >
              BEATPORT
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
