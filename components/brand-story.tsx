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
          alt="정성스러운 손길"
          className="w-full h-full object-cover object-bottom"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-trevor-forest/95 via-trevor-green-dark/65 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-6 lg:px-12 pb-24">
            <div className="max-w-5xl elegant-border">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-10 text-white text-balance leading-[1.1] tracking-tight">
                건강한 먹거리를 위한
                <br />
                <span className="gold-accent text-4xl md:text-6xl lg:text-7xl">트레버코리아의 약속</span>
              </h2>
              <p className="text-base md:text-xl lg:text-2xl text-white/95 text-pretty leading-relaxed font-semibold tracking-wide mb-6">
                설탕도 색소도 밀가루도 없이, 오직 자연 그대로. 진심을 담아 구워낸 떡갈비 한 조각이
                당신의 하루를 따뜻하게 만들어줄 수 있다고 믿습니다.
              </p>
              <p className="text-sm md:text-base lg:text-lg text-white/85 text-pretty leading-relaxed mb-6">
                정직한 마음으로 만든 음식은, 결국 마음을 채웁니다
              </p>
              <div className="inline-block bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4 border-l-4 border-trevor-leaf">
                <p className="text-sm md:text-base text-white/95 font-semibold">
                  "내 가족, 내 아이가 먹는다는 마음으로" 만듭니다
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2">
        <div className="relative h-[600px] bg-gradient-to-br from-trevor-forest to-trevor-green-dark overflow-hidden">
          <div className="hanji-texture absolute inset-0 opacity-10" />
          <div className="absolute inset-0 flex items-center justify-center p-12">
            <div className="text-center text-white max-w-lg">
              <div className="text-3xl md:text-4xl font-black mb-8 drop-shadow-2xl" style={{
                color: '#d4f4dd',
                textShadow: '0 4px 20px rgba(0, 0, 0, 0.8), 0 0 30px rgba(168, 230, 184, 0.5)'
              }}>0%</div>
              <div className="text-xl md:text-2xl font-bold mb-6 tracking-wider drop-shadow-lg">유해 첨가물 제로</div>
              <div className="mt-7 text-base md:text-lg text-white/95 leading-relaxed font-medium space-y-3 drop-shadow-md">
                <p>정제 설탕, 아질산나트륨,</p>
                <p>인공 색소 등 해로운 성분을</p>
                <p className="font-bold" style={{
                  color: '#d4f4dd',
                  textShadow: '0 2px 10px rgba(0, 0, 0, 0.6)'
                }}>철저히 배제합니다</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative h-[600px] bg-trevor-green overflow-hidden">
          <img
            src="/familly.png"
            alt="가족과 함께하는 건강한 식사"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-bl from-black/40 via-trevor-forest/50 to-black/60" />
          <div className="absolute inset-0 flex items-center justify-center p-12">
            <div className="text-center text-white">
              <div className="text-5xl md:text-6xl font-black mb-5 drop-shadow-2xl" style={{
                color: '#d4f4dd',
                textShadow: '0 4px 20px rgba(0, 0, 0, 0.8), 0 0 30px rgba(168, 230, 184, 0.5)'
              }}>100%</div>
              <div className="text-xl md:text-2xl font-bold mb-2 tracking-wider drop-shadow-lg">국내산 한우·한돈</div>
              <div className="mt-7 text-base md:text-lg text-white/95 max-w-sm mx-auto leading-relaxed font-medium drop-shadow-md">
                신선한 냉장육 사용 / 저온스팀조리 / HACCP 인증제조
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hanji-texture py-32 md:py-40 relative" ref={featuresRef}>
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-trevor-forest via-trevor-green to-trevor-green-light opacity-60" />
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
              <div className="scroll-fade bg-card/30 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-trevor-green/30 hover:border-trevor-green transition-all duration-300 hover:shadow-lg hover:shadow-trevor-green/20">
                <div className="mb-4">
                  <div className="inline-block px-4 py-2 rounded-full bg-trevor-green/10 text-trevor-green font-bold text-sm">01</div>
                </div>
                <h3 className="text-xl lg:text-2xl font-bold mb-4 tracking-tight text-trevor-forest">HACCP 인증</h3>
                <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">
                  식품안전관리인증을 획득한 위생제조시설에서 철저한 품질관리 시스템으로 제품을 생산합니다
                </p>
              </div>
              <div className="scroll-fade bg-card/30 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-trevor-green/30 hover:border-trevor-green transition-all duration-300 hover:shadow-lg hover:shadow-trevor-green/20" style={{ transitionDelay: "0.1s" }}>
                <div className="mb-4">
                  <div className="inline-block px-4 py-2 rounded-full bg-trevor-green/10 text-trevor-green font-bold text-sm">02</div>
                </div>
                <h3 className="text-xl lg:text-2xl font-bold mb-4 tracking-tight text-trevor-forest">저온 스팀 조리</h3>
                <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">
                  100~105도의 저온 스팀 조리 방식으로 식재료 본연의 맛과 영양을 최대한 살립니다
                </p>
              </div>
              <div className="scroll-fade bg-card/30 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-trevor-green/30 hover:border-trevor-green transition-all duration-300 hover:shadow-lg hover:shadow-trevor-green/20" style={{ transitionDelay: "0.2s" }}>
                <div className="mb-4">
                  <div className="inline-block px-4 py-2 rounded-full bg-trevor-green/10 text-trevor-green font-bold text-sm">03</div>
                </div>
                <h3 className="text-xl lg:text-2xl font-bold mb-4 tracking-tight text-trevor-forest">사회공헌활동</h3>
                <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">
                  전국 30여개 보육원에 매달 떡갈비를 후원하며 건강한 먹거리로 아이들의 미래를 바꿉니다
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-trevor-green-light via-trevor-green to-trevor-forest opacity-60" />
      </div>
    </section>
  )
}
