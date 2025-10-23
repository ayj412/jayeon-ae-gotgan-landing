"use client"

import { useEffect, useRef } from "react"

export function SocialContribution() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll(".scroll-fade")
      elements.forEach((el) => observer.observe(el))
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-20 sm:py-32 overflow-hidden bg-gradient-to-br from-zinc-900 via-black to-zinc-900">
      <div className="dancheong-pattern absolute top-0 left-0 right-0 h-2 opacity-60 z-20" />
      <div className="hanji-texture absolute inset-0 opacity-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-20">
            <div className="inline-block mb-6">
              <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-accent/20 border-2 border-accent/30">
                <span className="text-2xl">❤️</span>
                <span className="text-sm font-bold text-accent tracking-wider">SOCIAL CONTRIBUTION</span>
              </div>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-8 text-white text-balance leading-tight">
              나눔은
              <br />
              <span className="gold-accent text-5xl sm:text-6xl md:text-8xl">우리의 책임입니다</span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              이윤을 추구하기 전에, 먼저 사회에 기여하는 기업이 되고자 합니다
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
            <div className="scroll-fade relative bg-gradient-to-br from-white/10 to-white/5 rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-white/20 p-8 sm:p-12 hover-lift-subtle">
              <div className="absolute top-0 right-0 w-40 h-40 bg-accent/10 rounded-bl-full" />
              <div className="relative z-10">
                <div className="text-6xl sm:text-7xl mb-6">🏠</div>
                <div className="text-5xl sm:text-6xl md:text-7xl font-black gold-accent mb-4 tabular-nums">30+</div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-white">개 보육원</h3>
                <p className="text-base sm:text-lg text-white/80 leading-relaxed">
                  전국 30여개 보육원에 매달 떡갈비를 후원합니다
                </p>
              </div>
            </div>

            <div className="scroll-fade relative bg-gradient-to-br from-white/10 to-white/5 rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-white/20 p-8 sm:p-12 hover-lift-subtle" style={{ transitionDelay: "0.1s" }}>
              <div className="absolute top-0 right-0 w-40 h-40 bg-accent/10 rounded-bl-full" />
              <div className="relative z-10">
                <div className="text-6xl sm:text-7xl mb-6">👶</div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-white gold-accent">건강한 진짜 먹거리</h3>
                <p className="text-base sm:text-lg text-white/80 leading-relaxed mb-4">
                  인스턴트 대신 건강한 진짜 먹거리를 아이들에게 제공합니다
                </p>
                <p className="text-sm sm:text-base text-white/60 leading-relaxed">
                  아이들이 건강하게 자라는 것, 그것이 우리의 가장 큰 보람입니다
                </p>
              </div>
            </div>
          </div>

          <div className="scroll-fade text-center bg-white/5 backdrop-blur-sm rounded-2xl p-8 sm:p-12 border border-white/10" style={{ transitionDelay: "0.2s" }}>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed font-medium mb-4">
              "우리가 만든 음식이 누군가의 따뜻한 기억이 되길 바랍니다"
            </p>
            <p className="text-sm sm:text-base text-white/60 mb-6">
              매달 정기적으로 보육원에 떡갈비를 후원하며, 아이들이 건강하고 맛있는 음식을 먹을 수 있도록 돕고 있습니다.
            </p>
            <div className="inline-block mt-4 px-6 py-3 bg-accent/20 rounded-full border-2 border-accent/30">
              <p className="text-base sm:text-lg font-bold gold-accent">
                자연애곳간 - 건강한 떡갈비의 기준이 됩니다
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="dancheong-pattern absolute bottom-0 left-0 right-0 h-2 opacity-60 z-20 rotate-180" />
    </section>
  )
}
