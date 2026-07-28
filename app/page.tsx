import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { MusicSection } from "@/components/music-section"
import { SetsSection } from "@/components/sets-section"

import { InstagramSection } from "@/components/instagram-section"
import { BioSection } from "@/components/bio-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Header />
      <HeroSection />
      <MusicSection />
      <SetsSection />

      <InstagramSection />
      <BioSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
