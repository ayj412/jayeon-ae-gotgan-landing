"use client"

import { useEffect, useRef } from "react"

export function BrandStory() {
  const featuresRef = useRef<HTMLDivElement>(null)

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

    if (featuresRef.current) {
      const elements = featuresRef.current.querySelectorAll(".scroll-fade")
      elements.forEach((el) => observer.observe(el))
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="brand" className="relative overflow-hidden">
      <div className="relative h-[75vh] min-h-[650px]">
        <img
          src="/korean-chef-hand-kneading-meat-for-tteokgalbi--tra.jpg"
          alt="장인의 손길"
          className="w-full h-full object-cover object-bottom"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/65 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-6 lg:px-12 pb-24">
            <div className="max-w-5xl elegant-border">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-10 text-white text-balance leading-[1.1] tracking-tight">
                전통시장 떡갈비 명가에서
                <br />
                <span className="gold-accent text-4xl md:text-6xl lg:text-7xl">프리미엄 브랜드로</span>
              </h2>
              <p className="text-base md:text-xl lg:text-2xl text-white/95 text-pretty leading-relaxed font-semibold tracking-wide mb-6">
                '용철이떡갈비'의 전통과 '자연곳간' 외식 노하우가 결합된 온·오프라인 식품 전문 브랜드
              </p>
              <p className="text-sm md:text-base lg:text-lg text-white/85 text-pretty leading-relaxed mb-6">
                전통시장 떡갈비의 경험과 외식브랜드의 노하우를 바탕으로 탄생한 자연애곳간은,
                온라인과 오프라인 모두에서 만날 수 있는 프리미엄 먹거리 브랜드입니다.
              </p>
              <div className="inline-block bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4 border-l-4 border-accent">
                <p className="text-sm md:text-base text-white/95 font-semibold">
                  "내 아이가 먹는다는 마음으로" 만듭니다
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2">
        <div className="relative h-[600px] bg-gradient-to-br from-black to-zinc-900 overflow-hidden">
          <div className="hanji-texture absolute inset-0 opacity-10" />
          <div className="absolute inset-0 flex items-center justify-center p-12">
            <div className="text-center text-white max-w-lg">
              <div className="text-3xl md:text-4xl font-black mb-8 gold-accent">0%</div>
              <div className="text-xl md:text-2xl font-bold mb-6 tracking-wider">유해 첨가물 제로</div>
              <div className="mt-7 text-base md:text-lg text-white/90 leading-relaxed font-medium space-y-3">
                <p>정제 설탕, 아질산나트륨,</p>
                <p>인공 색소 등 해로운 성분을</p>
                <p className="font-bold text-accent">철저히 배제합니다</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative h-[600px] bg-black overflow-hidden">
          <img
            src="/familly.png"
            alt="신선한 재료"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-bl from-red-900/30 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center p-12">
            <div className="text-center text-white">
              <div className="text-5xl md:text-6xl font-black mb-5 gold-accent">100%</div>
              <div className="text-xl md:text-2xl font-bold mb-2 tracking-wider">내 가족 기준</div>
              <div className="mt-7 text-base md:text-lg text-white/90 max-w-sm mx-auto leading-relaxed font-medium">
                "내 가족, 내 아이가 먹는다는 마음"으로 음식을 만듭니다
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hanji-texture py-32 md:py-40 relative" ref={featuresRef}>
        <div className="dancheong-pattern absolute top-0 left-0 right-0 h-1 opacity-40" />
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 md:mb-20">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
                모두가 건강한 음식을 먹는 <span className="gold-accent">그날까지</span>
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                누구나 안심하고 먹을 수 있는 건강한 한끼를 위해, 첨가물 없는 건강한 먹거리를 위해 노력합니다
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12 md:gap-16">
              <div className="scroll-fade bg-card/30 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-border hover:border-accent/30 transition-all duration-300">
                <div className="mb-4">
                  <div className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent font-bold text-sm">01</div>
                </div>
                <h3 className="text-xl lg:text-2xl font-bold mb-4 tracking-tight">전통시장의 경험</h3>
                <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">
                  '용철이떡갈비' 전통시장 명가의 노하우와 손맛을 그대로 계승한 정통 떡갈비입니다
                </p>
              </div>
              <div className="scroll-fade bg-card/30 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-border hover:border-accent/30 transition-all duration-300" style={{ transitionDelay: "0.1s" }}>
                <div className="mb-4">
                  <div className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent font-bold text-sm">02</div>
                </div>
                <h3 className="text-xl lg:text-2xl font-bold mb-4 tracking-tight">외식 운영 노하우</h3>
                <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">
                  '자연곳간' 외식브랜드의 체계적인 시스템과 운영 노하우로 안정적인 브랜드를 구축했습니다
                </p>
              </div>
              <div className="scroll-fade bg-card/30 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-border hover:border-accent/30 transition-all duration-300" style={{ transitionDelay: "0.2s" }}>
                <div className="mb-4">
                  <div className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent font-bold text-sm">03</div>
                </div>
                <h3 className="text-xl lg:text-2xl font-bold mb-4 tracking-tight">온·오프라인 브랜드</h3>
                <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">
                  온라인과 오프라인 모두에서 만날 수 있는 프리미엄 먹거리 브랜드로 다양한 채널을 운영합니다
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="dancheong-pattern absolute bottom-0 left-0 right-0 h-1 opacity-40 rotate-180" />
      </div>
    </section>
  )
}
