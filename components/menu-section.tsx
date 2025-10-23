"use client"

import { useEffect, useRef } from "react"

const menuCategories = [
  {
    name: "시그니처 메뉴",
    subtitle: "장인의 손길과 가마솥 불에 담긴 진심",
    items: [

      {
        name: "전통떡갈비",
        description: "할머니가 빚어주시던 그 맛 그대로",
        price: "12,000원",
        badge: "추천",
        traditional: true,
      },
      {
        name: "한우떡갈비",
        description: "특별한 날, 가족과 함께 나누는 정성",
        price: "15,000원",
        badge: "프리미엄",
        premium: true,
      },
      {
        name: "청양떡갈비",
        description: "입 안 가득 퍼지는 알싸한 행복",
        price: "13,000원",
        spicy: true,
      },
      {
        name: "마늘떡갈비",
        description: "건강한 마늘 향이 감싸는 든든함",
        price: "13,000원",
      },
      {
        name: "깻잎떡갈비",
        description: "싱그러운 깻잎이 더하는 향긋함",
        price: "13,000원",
      },
    ],
  },
  {
    name: "인기 사이드",
    subtitle: "함께 나누면 더 풍성한 식탁",
    items: [
      {
        name: "떡갈비카츠",
        description: "바삭함과 부드러움이 만나는 새로운 즐거움",
        price: "14,000원",
        badge: "NEW",
      },
      {
        name: "함박소시지",
        description: "아이들도 어른도 좋아하는 수제 소시지",
        price: "8,000원",
      },
    ],
  },
]

export function MenuSection() {
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
    <section ref={sectionRef} id="menu" className="relative py-10 sm:py-10 overflow-hidden bg-background">
      <div className="absolute inset-0 hanji-texture" />
      <div className="cloud-pattern absolute inset-0 opacity-50" />
      <div className="premium-texture absolute inset-0" />

      <div className="dancheong-pattern absolute top-0 left-0 right-0 h-2 opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 sm:mb-24">
            <div className="inline-block mb-6">
              <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-accent/10 to-accent/5 border-2 border-accent/20">
                <span className="text-sm font-bold text-accent tracking-wider">SIGNATURE MENU</span>
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-8 text-balance leading-tight">
              <span className="block mb-3">진심으로 차린</span>
              <span className="gold-accent text-4xl sm:text-5xl md:text-6xl lg:text-7xl">우리 집 밥상</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-medium px-4">
              시간과 정성으로 빚은 한 끼, 가족의 건강을 생각하는 마음을 담았습니다
            </p>
          </div>

          {/* Menu Categories - All Displayed */}
          {menuCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-20 sm:mb-32">
              {/* Category Header */}
              <div className="text-center mb-12 sm:mb-16">
                <div className="inline-block elegant-border bg-card/50 backdrop-blur-sm rounded-2xl px-8 py-4 mb-6">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-black gold-accent mb-2">
                    {category.name}
                  </h3>
                  {category.subtitle && (
                    <p className="text-sm sm:text-base md:text-lg text-muted-foreground font-semibold">
                      {category.subtitle}
                    </p>
                  )}
                </div>
              </div>

              {/* Category Items */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {category.items.map((item, index) => (
                  <div
                    key={index}
                    className="scroll-fade group relative bg-gradient-to-br from-card to-card/50 rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-border hover:border-accent/40 transition-all duration-300 hover-lift-subtle shadow-lg hover:shadow-2xl"
                    style={{ transitionDelay: `${index * 0.1}s` }}
                  >
                    {/* Decorative Background Pattern */}
                    <div className="absolute inset-0 opacity-[0.03] hanji-texture" />
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/10 to-transparent rounded-bl-full" />

                    {item.badge && (
                      <div
                        className={`absolute top-4 right-4 z-20 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold shadow-lg ${
                          item.badge === "베스트"
                            ? "bg-red-500 text-white"
                            : item.badge === "추천"
                              ? "korean-luxury-gradient text-white"
                              : item.badge === "프리미엄"
                                ? "bg-yellow-500 text-black"
                                : "bg-green-500 text-white"
                        }`}
                      >
                        {item.badge}
                      </div>
                    )}

                    <div className="relative p-6 sm:p-8">
                      <div className="mb-6">
                        <h3 className="text-xl sm:text-2xl font-bold mb-3 text-foreground group-hover:text-accent transition-colors">
                          {item.name}
                        </h3>
                        {item.description && (
                          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-medium">
                            {item.description}
                          </p>
                        )}
                      </div>
{/* 
                      {item.sizes ? (
                        <div className="space-y-3">
                          {item.sizes.map((size, sizeIndex) => (
                            <div
                              key={sizeIndex}
                              className="flex justify-between items-center p-4 rounded-xl bg-accent/5 border border-accent/10 hover:bg-accent/10 transition-colors"
                            >
                              <span className="font-semibold text-xs sm:text-sm">{size.portion}</span>
                              <span className="text-base sm:text-lg font-black gold-accent">{size.price}</span>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="pt-4 border-t-2 border-dashed border-accent/20">
                          <div className="flex justify-between items-center">
                            <span className="text-base font-semibold text-muted-foreground">가격</span>
                            <span className="text-2xl sm:text-3xl font-black gold-accent">{item.price}</span>
                          </div>
                        </div>
                      )} */}
                    </div>

                    {/* Decorative corner elements */}
                    <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-accent/20 rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-accent/20 rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Footer Note */}

        </div>
      </div>

      <div className="dancheong-pattern absolute bottom-0 left-0 right-0 h-2 opacity-50 rotate-180" />
    </section>
  )
}
