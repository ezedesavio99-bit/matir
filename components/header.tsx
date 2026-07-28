"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import SpotifyIcon from "./icons/SpotifyIcon"
import SoundCloudIcon from "./icons/SoundCloudIcon"
import InstagramIcon from "./icons/InstagramIcon"
import BeatportIcon from "./icons/BeatportIcon"
import YouTubeIcon from "./icons/YouTubeIcon"

const navItems = [
  { name: "HOME", href: "#home" },
  { name: "MUSIC", href: "#music" },
  { name: "SETS", href: "#sets" },
  { name: "BIO", href: "#bio" },
  { name: "CONTACT", href: "#contact" },
]

const socialLinks = [
  {
    name: "Spotify",
    href: "https://open.spotify.com/artist/3d5cuyH4VoweDlD7AQx9eV?si=jCpqFBFVRf-KWnDyv6hLAg",
    icon: SpotifyIcon,
  },
  { name: "SoundCloud", href: "https://on.soundcloud.com/Av2WzsmVoo9SxCYgJ5", icon: SoundCloudIcon },
  { name: "Instagram", href: "https://www.instagram.com/matiasricardes", icon: InstagramIcon },
  { name: "YouTube", href: "https://www.youtube.com/@MatiasRicardes", icon: YouTubeIcon },
  { name: "Beatport", href: "https://www.beatport.com/es/artist/matias-ricardes/1167831", icon: BeatportIcon },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled ? "bg-black/90 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="#home" className="relative">
          <img src="/images/logo-20blanco.png" alt="MATIAS RICARDES" className="h-10 md:h-14 w-auto" />
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-xs tracking-[0.2em] text-white/70 hover:text-white transition-colors duration-500 relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-500" />
            </Link>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          {socialLinks.map((social) => (
            <Link
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-white transition-colors duration-500"
              aria-label={social.name}
              title={social.name === "Beatport" ? "Matias Ricardes en Beatport" : social.name}
            >
              {social.icon({ className: "w-5 h-5" })}
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}
