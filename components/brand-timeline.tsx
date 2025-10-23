"use client"

import { useEffect, useRef } from "react"

const timelineData = [
  {
    year: "2020",
    events: [
      { date: "2020", title: "용철이떡갈비 시판을 위한", description: "오프로드 매장 판매개시" },
    ],
  },
  {
    year: "2021",
    events: [
      { date: "2021.06", title: "울산시 덕하 공장(용철이푸드)", description: "설립" },
      { date: "2021.08", title: "정식 브랜드 '용철이떡갈비'", description: "1호 울산 태화시장점 오픈" },
      { date: "2021.11", title: "울산시 웅촌 약700평", description: "에이치피푸드 설립" },
    ],
  },
  {
    year: "2022",
    events: [
      { date: "2022.08", title: "HACCP 인증완료", description: "(에이치피푸드, 울원이푸드)" },
      { date: "2022.11", title: "용철이 떡갈비 상표등록 출원", description: "" },
    ],
  },
  {
    year: "2023",
    events: [
      { date: "2023.01", title: "자회사", description: "주식회사 에이치피푸드코리아 설립" },
    ],
  },
  {
    year: "2024",
    events: [
      { date: "2024.04", title: "자연곳간 상표등록 출원", description: "" },
      { date: "2024.05", title: "'자연곳간' 외식 브랜드 론칭", description: "" },
    ],
  },
  {
    year: "2025",
    events: [
      { date: "2025.04", title: "'자연애곳간' 제품 개발 및 런칭", description: "" },
      { date: "2025~", title: "HACCP 인증/개발 레시피", description: "유통채널 확장 중" },
    ],
  },
]

export function BrandTimeline() {
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
    <section ref={sectionRef} className="relative py-20 sm:py-32 overflow-hidden bg-background">
      <div className="hanji-texture absolute inset-0 opacity-50" />
      <div className="dancheong-pattern absolute top-0 left-0 right-0 h-2 opacity-50" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 sm:mb-24">
            <div className="inline-block mb-6">
              <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-accent/10 border-2 border-accent/20">
                <span className="text-2xl">📜</span>
                <span className="text-sm font-bold text-accent tracking-wider">BRAND HISTORY</span>
              </div>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
              <span className="gold-accent">5년간의 여정,</span>
              <br />
              검증된 성장
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              전통시장 떡갈비에서 프리미엄 브랜드로, 한 걸음 한 걸음 성장해온 자연애곳간의 이야기
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line - Desktop */}
            <div className="hidden lg:block absolute top-12 left-0 right-0 h-1 korean-luxury-gradient opacity-30" />

            {/* Timeline Items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-4">
              {timelineData.map((yearData, yearIndex) => (
                <div key={yearData.year} className="scroll-fade relative" style={{ transitionDelay: `${yearIndex * 0.1}s` }}>
                  {/* Year Badge */}
                  <div className="flex justify-center mb-6 lg:mb-8">
                    <div className="relative inline-flex items-center justify-center w-24 h-24 rounded-full korean-luxury-gradient border-4 border-background shadow-xl">
                      <span className="text-xl font-black text-white">{yearData.year}</span>
                      {/* Dot on line for desktop */}
                    </div>
                  </div>

                  {/* Events */}
                  <div className="space-y-6">
                    {yearData.events.map((event, eventIndex) => (
                      <div
                        key={eventIndex}
                        className="bg-card rounded-xl p-4 sm:p-5 border-2 border-border hover:border-accent/40 transition-all duration-300 hover-lift-subtle shadow-sm hover:shadow-md"
                      >
                        <div className="text-sm font-bold text-accent mb-2">{event.date}</div>
                        <div className="text-base font-bold text-foreground mb-1 leading-tight">{event.title}</div>
                        {event.description && (
                          <div className="text-sm text-muted-foreground leading-snug">{event.description}</div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Message */}
          <div className="mt-16 sm:mt-20 text-center">
            <div className="inline-block elegant-border bg-card/50 backdrop-blur-sm rounded-2xl px-8 py-6">
              <p className="text-lg sm:text-xl font-medium">
                <span className="gold-accent font-bold">2020년부터 2025년까지,</span> 끊임없는 도전과 성장
              </p>
              <p className="text-sm sm:text-base text-muted-foreground mt-2">
                앞으로도 더 나은 제품과 서비스로 보답하겠습니다
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="dancheong-pattern absolute bottom-0 left-0 right-0 h-2 opacity-50 rotate-180" />
    </section>
  )
}
