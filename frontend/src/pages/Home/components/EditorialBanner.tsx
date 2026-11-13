export function EditorialBanner() {
  return (
    <section
      aria-labelledby="editorial-banner-heading"
      className="relative bg-[#FFF8EF] py-10 sm:py-14 md:py-18"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* WIDE EDITORIAL BANNER CONTAINER (Butter Yellow #F5D66B Background) */}
        <div className="relative overflow-hidden rounded-3xl bg-[#F5D66B] border border-[#E8C853] p-8 sm:p-12 lg:p-16">
          {/* Subtle decorative editorial accent lines */}
          <div
            className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/10 blur-2xl pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-10 -left-10 w-64 h-64 rounded-full bg-[#F4775B]/10 blur-xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* LEFT COLUMN: Editorial Text & Cobalt Blue CTA */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-left">
              {/* Eyebrow badge with Coral (#F4775B) accent */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 border border-[#F4775B]/25">
                <span
                  className="w-1.5 h-1.5 rounded-full bg-[#F4775B]"
                  aria-hidden="true"
                />
                <p className="text-xs font-bold tracking-widest text-[#F4775B] uppercase">
                  A LITTLE INSPIRATION • MỘT CHÚT CẢM HỨNG
                </p>
              </div>

              {/* Editorial Large Heading in Ink Black (#25272B) */}
              <h2
                id="editorial-banner-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#25272B] tracking-tight leading-[1.16]"
              >
                Some stories change the way you see the world.
              </h2>

              {/* Description */}
              <p className="text-sm sm:text-base lg:text-lg text-[#25272B]/85 leading-relaxed max-w-xl">
                Make room for new ideas, unexpected adventures and perspectives that stay with you.
              </p>

              {/* Call to Action Button (Cobalt Blue #3457E5 - Non-functional Visual CTA) */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  type="button"
                  title="Bộ sưu tập đang được cập nhật / Collection coming soon"
                  aria-label="Explore the collection (UI mẫu)"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#3457E5] hover:bg-[#2844BC] text-white font-bold text-sm sm:text-base transition-colors shadow-xs cursor-default focus:outline-hidden focus:ring-2 focus:ring-[#3457E5]/50"
                >
                  <span>Explore the collection • Khám phá bộ sưu tập</span>
                  <svg
                    className="w-4 h-4 shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </div>
            </div>

            {/* RIGHT COLUMN: Editorial Still-life Photography Container */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="w-full aspect-[4/3] rounded-2xl bg-[#FFFDF9] border border-[#25272B]/15 p-6 sm:p-8 flex flex-col justify-between shadow-xs">
                {/* Top Badge: Photo metadata */}
                <div className="flex items-center justify-between text-xs font-semibold text-[#25272B]/60">
                  <span className="inline-flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#F4775B]" />
                    BOOKLY Editorial Still-Life
                  </span>
                  <span className="font-mono text-[10px]">STILL-LIFE 01</span>
                </div>

                {/* Center: Graphic framing placeholder */}
                <div className="my-auto text-center space-y-3 py-4">
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-[#F5D66B]/40 border border-[#25272B]/10 flex items-center justify-center text-[#25272B]">
                    {/* Camera / Still-Life Photography SVG Emblem */}
                    <svg
                      className="w-7 h-7 text-[#25272B]/80"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
                      <circle cx="12" cy="13" r="3" />
                    </svg>
                  </div>

                  <p className="text-xs sm:text-sm font-bold text-[#25272B]">
                    Editorial Book Still-Life Photography
                  </p>
                  <p className="text-[11px] text-[#25272B]/65 max-w-xs mx-auto leading-relaxed">
                    Reserved for realistic photograph of open books on linen with soft natural lighting
                  </p>
                </div>

                {/* Bottom: Explicit Asset Dimensions */}
                <div className="pt-2 border-t border-[#E8DFC9] flex items-center justify-between text-[10px] font-mono text-[#25272B]/50">
                  <span>MISSING ASSET PLACEHOLDER</span>
                  <span>800 × 600 px (4:3)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

