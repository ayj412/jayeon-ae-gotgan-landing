"use client"

import { useEffect, useRef } from "react"

export function QualityProof() {
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
    <section ref={sectionRef} id="quality" className="relative py-0">
      <div className="dancheong-pattern absolute top-0 left-0 right-0 h-2 opacity-60 z-20" />

      {/* Top section with traditional pattern overlay */}
      <div className="relative bg-black py-16 sm:py-24 md:py-32 overflow-hidden">
        <div className="hanji-texture absolute inset-0 opacity-10" />

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-white text-balance px-4">
              <span className="gold-accent">철저한 품질관리</span>가
              <br />
              경쟁력입니다
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/80 text-pretty leading-relaxed px-4 font-medium mb-4">
              원재료 선별부터 생산, 포장, 배송까지 각 단계마다 철저한 위생 기준 적용
            </p>
            <p className="text-sm sm:text-base md:text-lg text-white/70 text-pretty leading-relaxed px-4">
              대기업들이 사용하는 정제 설탕, 아질산나트륨, 색소 등 해로운 성분을 철저히 배제합니다
            </p>
          </div>

          {/* Large stat cards with images */}
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-8 max-w-6xl mx-auto">
            <div className="scroll-fade relative h-[300px] sm:h-[400px] rounded-xl sm:rounded-2xl overflow-hidden group">
              <img
                src="/factory.png"
                alt="HACCP 인증 시설"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8 text-white">
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 gold-accent">HACCP 인증</h3>
                <p className="text-sm sm:text-base text-white/90 leading-relaxed">
                  식품안전관리인증 획득한 위생제조시설에서 엄격한 기준으로 생산합니다
                </p>
              </div>
            </div>

            <div className="scroll-fade relative h-[300px] sm:h-[400px] rounded-xl sm:rounded-2xl overflow-hidden group" style={{ transitionDelay: "0.1s" }}>
              <img
                src="/traditional-korean-tteokgalbi-grilling-on-charcoal.jpg"
                alt="무첨가 제조"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8 text-white">
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 gold-accent">유해 첨가물 제로</h3>
                <p className="text-sm sm:text-base text-white/90 leading-relaxed">
                  정제 설탕, 아질산나트륨, 인공 색소 등 해로운 성분을 철저히 배제합니다
                </p>
              </div>
            </div>

            <div className="scroll-fade relative h-[300px] sm:h-[400px] rounded-xl sm:rounded-2xl overflow-hidden group" style={{ transitionDelay: "0.2s" }}>
              <img
                src="/natural.png"
                alt="신선한 재료"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8 text-white">
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 gold-accent">엄선된 원재료</h3>
                <p className="text-sm sm:text-base text-white/90 leading-relaxed">
                  내 가족에게 먹일 것처럼, 신선하고 좋은 재료만을 선별합니다
                </p>
              </div>
            </div>

            <div className="scroll-fade relative h-[300px] sm:h-[400px] rounded-xl sm:rounded-2xl overflow-hidden group" style={{ transitionDelay: "0.3s" }}>
              <img
                src="/korean-chef-hand-kneading-meat-for-tteokgalbi--tra.jpg"
                alt="정기 점검"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8 text-white">
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 gold-accent">철저한 검수</h3>
                <p className="text-sm sm:text-base text-white/90 leading-relaxed">
                  내부 검수는 물론 외부 기관의 정기적인 점검을 성실히 이행합니다
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Product Info */}
      <div className="relative bg-gradient-to-br from-accent/5 via-background to-accent/5 py-16 sm:py-24 overflow-hidden">
        <div className="hanji-texture absolute inset-0 opacity-30" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-balance">
                <span className="gold-accent">진짜 재료</span>만 사용합니다
              </h3>
              <p className="text-base sm:text-lg text-muted-foreground">
                한우·한돈과 11가지 채소·과일만 담았습니다
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
              <div className="bg-card rounded-2xl p-6 sm:p-8 border-2 border-border hover:border-accent/40 transition-all duration-300 hover-lift-subtle">
                <h4 className="text-lg sm:text-xl font-bold mb-3 gold-accent">한우·한돈</h4>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  국내산 프리미엄 한우와 한돈만을 엄선하여 사용합니다
                </p>
              </div>

              <div className="bg-card rounded-2xl p-6 sm:p-8 border-2 border-border hover:border-accent/40 transition-all duration-300 hover-lift-subtle">
                <h4 className="text-lg sm:text-xl font-bold mb-3 gold-accent">11가지 채소·과일</h4>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  신선한 채소와 과일로 자연의 맛과 영양을 담았습니다
                </p>
              </div>

              <div className="bg-card rounded-2xl p-6 sm:p-8 border-2 border-border hover:border-accent/40 transition-all duration-300 hover-lift-subtle">
                <h4 className="text-lg sm:text-xl font-bold mb-3 gold-accent">저온숙팀 방식</h4>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  안전하게 조리하여 육즙과 영양을 그대로 보존합니다
                </p>
              </div>
            </div>

            <div className="mt-12 sm:mt-16 text-center bg-card/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-border">
              <p className="text-base sm:text-lg md:text-xl font-medium text-muted-foreground leading-relaxed">
                <span className="font-bold text-accent">HACCP 인증 공장</span>에서 저온숙팀 방식으로 안전하게 만들고,
                <br />
                <span className="font-bold text-accent">신선한 냉장육</span>만을 고집합니다
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Certification badges section with hanji texture */}
      <div className="relative hanji-texture py-12 sm:py-16 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-wrap justify-center gap-8 sm:gap-12 items-center max-w-4xl mx-auto">
            <div className="text-center group">
              <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-3 sm:mb-4 rounded-full korean-luxury-gradient flex items-center justify-center border-4 border-white/20 shadow-xl group-hover:scale-110 transition-transform">
                <span className="text-4xl sm:text-5xl text-white">✓</span>
              </div>
              <div className="text-lg sm:text-xl font-bold">HACCP 인증</div>
            </div>
            <div className="text-center group">
              <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-3 sm:mb-4 rounded-full korean-luxury-gradient flex items-center justify-center border-4 border-white/20 shadow-xl group-hover:scale-110 transition-transform">
                <span className="text-4xl sm:text-5xl text-white">✓</span>
              </div>
              <div className="text-lg sm:text-xl font-bold">식품제조허가</div>
            </div>
            <div className="text-center group">
              <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-3 sm:mb-4 rounded-full korean-luxury-gradient flex items-center justify-center border-4 border-white/20 shadow-xl group-hover:scale-110 transition-transform">
                <span className="text-4xl sm:text-5xl text-white">✓</span>
              </div>
              <div className="text-lg sm:text-xl font-bold">위생등급 우수</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
