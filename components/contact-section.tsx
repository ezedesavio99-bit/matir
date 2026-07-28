export function ContactSection() {
  return (
    <section id="contact" className="min-h-screen bg-black py-32">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-6xl md:text-8xl lg:text-9xl font-light tracking-[0.2em] text-white mb-8">CONTACT</h2>
        <p className="text-xs tracking-[0.3em] text-white/50 mb-24">BOOKINGS & INQUIRIES</p>

        <div className="max-w-2xl">
          {/* Contact Info */}
          <div className="space-y-12">
            <div></div>
            <div>
              <p className="text-xs tracking-[0.3em] text-white/40 mb-2">SEND PROMOS</p>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=matiasricardespromos@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-white/80 hover:text-white transition-colors duration-500"
              >
                matiasricardespromos@gmail.com
              </a>
            </div>
            <div>
              <p className="text-xs tracking-[0.3em] text-white/40 mb-2">CONTACT</p>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=matiasricardes7@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-white/80 hover:text-white transition-colors duration-500"
              >
                matiasricardes7@gmail.com
              </a>
            </div>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=matiasricardespromos@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-white/30 px-8 py-3 text-xs tracking-[0.3em] text-white hover:bg-white hover:text-black transition-all duration-500 mt-8"
            >
              SEND PROMO
            </a>

          </div>


        </div>
      </div>
    </section>
  )
}
