"use client"

import Image from "next/image"

export default function BeatportIcon({ className }: { className?: string }) {
  return (
    <div className={`relative ${className} group`}>
      <Image
        src="/images/images-20-20editado-20-281-29.png"
        alt="Beatport"
        width={20}
        height={20}
        className="brightness-[3] group-hover:brightness-100 transition-all duration-300"
        style={{ filter: "invert(1) brightness(0.5)" }}
      />
      <style jsx>{`
        div:hover img {
          filter: invert(0) brightness(1) !important;
        }
      `}</style>
    </div>
  )
}
