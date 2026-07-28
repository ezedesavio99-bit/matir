"use client"

import Image from "next/image"

export default function BeatportIcon({ className }: { className?: string }) {
  return (
    <div className={`relative ${className} flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-500`}>
      <Image
        src="/images/images-20-20editado-20-281-29.png"
        alt="Beatport"
        width={20}
        height={20}
        className="invert brightness-0"
      />
    </div>
  )
}
