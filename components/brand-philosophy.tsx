"use client"

export function BrandPhilosophy() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-zinc-50 via-white to-zinc-50">
      <div className="hanji-texture absolute inset-0 opacity-30" />

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Image */}
          <div className="relative h-[400px] sm:h-[500px] lg:h-[700px] overflow-hidden rounded-2xl shadow-2xl">
            <img
              src="/tteokgalbi-natural-dish.png"
              alt="자연애곳간 떡갈비"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right: Content */}
          <div className="py-16 sm:py-20 lg:py-24 px-6 sm:px-10 lg:px-16 relative z-10">
            {/* Quote Mark */}
            <div className="text-6xl sm:text-7xl font-serif text-accent/20 leading-none mb-8">
              "
            </div>

            {/* Main Message */}
            <div className="space-y-6 sm:space-y-8 mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold leading-relaxed text-foreground">
                자연의 재료로, 정직한 한 끼를 만듭니다.
              </h2>

              <div className="space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
                <p>
                  설탕도 색소도 넣지 않았지만, <span className="font-semibold text-foreground">맛은 그대로.</span>
                </p>
                <p>
                  진심을 담아 구워낸 떡갈비 한 조각이
                </p>
                <p>
                  당신의 하루를 따뜻하게 만들어줄 수 있다고 믿습니다.
                </p>
              </div>
            </div>

            {/* Highlighted Message */}
            <div className="relative bg-gradient-to-r from-accent/10 via-accent/5 to-transparent rounded-2xl p-6 sm:p-8 border-l-4 border-accent">
              <div className="hanji-texture absolute inset-0 opacity-20 rounded-2xl" />
              <div className="relative z-10">
                <p className="text-lg sm:text-xl font-bold leading-relaxed mb-2">
                  정직한 마음으로 만든 음식은,
                </p>
                <p className="text-lg sm:text-xl font-bold leading-relaxed gold-accent">
                  결국 마음을 채웁니다.
                </p>
              </div>
            </div>

            {/* Bottom Decorative Line */}
            <div className="mt-10 sm:mt-12 flex">
              <div className="w-24 h-1 korean-luxury-gradient rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
