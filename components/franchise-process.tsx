"use client"

import { useEffect, useRef } from "react"
import { MessageSquareIcon, UsersIcon, HandshakeIcon, WrenchIcon, RocketIcon } from "./icons"

const steps = [
  {
    icon: MessageSquareIcon,
    title: "첫 만남",
    description: "편하게 문의주세요. 궁금한 것, 걱정되는 것 모두 함께 이야기 나눕니다.",
  },
  {
    icon: UsersIcon,
    title: "함께 고민하기",
    description: "당신의 상황을 이해하고, 가장 적합한 입지를 함께 찾아갑니다.",
  },
  {
    icon: HandshakeIcon,
    title: "약속하기",
    description: "서로를 믿고 함께 성공하겠다는 약속을 나눕니다.",
  },
  {
    icon: WrenchIcon,
    title: "준비하기",
    description: "매장을 준비하는 동안, 성공 운영을 위한 모든 것을 배웁니다.",
  },
  {
    icon: RocketIcon,
    title: "시작하기",
    description: "오픈 후에도 끝이 아닙니다. 계속해서 당신 곁에 있겠습니다.",
  },
]

export function FranchiseProcess() {
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
    <section ref={sectionRef} id="process" className="relative py-24 md:py-32 hanji-texture overflow-hidden">
      <div className="dancheong-pattern absolute top-0 left-0 right-0 h-2 opacity-40" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
              <span className="gold-accent">함께 걷는</span> 창업의 길
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty font-medium">
              처음부터 끝까지, 당신의 성공이 우리의 기쁨입니다
            </p>
          </div>

          <div className="relative">
            {/* Connection Line */}
            <div
              className="hidden md:block absolute top-16 left-0 right-0 h-1 korean-luxury-gradient opacity-30"
              style={{ left: "10%", right: "10%" }}
            />

            <div className="grid md:grid-cols-5 gap-8 relative">
              {steps.map((step, index) => {
                const IconComponent = step.icon
                return (
                  <div key={index} className="scroll-fade text-center group" style={{ transitionDelay: `${index * 0.1}s` }}>
                    <div className="relative inline-flex items-center justify-center w-32 h-32 rounded-full bg-card border-4 border-accent mb-6 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-accent/30 hover-lift">
                      <div className="absolute inset-0 rounded-full korean-luxury-gradient opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                      <IconComponent />
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full korean-luxury-gradient text-white flex items-center justify-center font-bold text-sm shadow-lg">
                        {index + 1}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="mt-16 luxury-card rounded-xl p-8 text-center relative overflow-hidden">
            <div className="hanji-texture absolute inset-0 opacity-30" />
            <div className="relative z-10">
              <p className="text-lg md:text-xl font-medium mb-2">
                평균 <span className="gold-accent font-bold text-2xl">일주일</span>이면 시작할 수 있습니다
              </p>
              <p className="text-sm md:text-base text-muted-foreground font-medium">혼자가 아닙니다. 처음부터 끝까지 함께 걷겠습니다</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
