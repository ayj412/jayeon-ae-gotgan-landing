import { Button } from "@/components/ui/button"
import Link from "next/link"

const pricingPlans = [
  {
    name: "신규 창업",
    price: "5,000만원~",
    description: "새로운 매장을 오픈하는 경우",
    features: [
      "입지 분석 및 컨설팅",
      "인테리어 설계 및 시공",
      "주방 설비 일체",
      "초도 물품 지원",
      "2주 집중 교육",
      "오픈 마케팅 지원",
    ],
    highlighted: false,
    image: "/modern-korean-restaurant-exterior.jpg",
  },
  {
    name: "리모델링",
    price: "3,000만원~",
    description: "기존 매장을 전환하는 경우",
    features: [
      "기존 설비 활용 컨설팅",
      "부분 리모델링",
      "필수 주방 설비",
      "초도 물품 지원",
      "1주 집중 교육",
      "오픈 마케팅 지원",
    ],
    highlighted: true,
    image: "/korean-restaurant-interior-traditional-wooden.jpg",
  },
  {
    name: "샵인샵",
    price: "2,500만원~",
    description: "기존 매장 내 입점",
    features: ["공간 활용 컨설팅", "최소 리모델링", "핵심 주방 설비", "초도 물품 지원", "1주 교육", "마케팅 자료 제공"],
    highlighted: false,
    image: "/korean-restaurant-signage-calligraphy.jpg",
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="relative py-16 sm:py-24 md:py-32 hanji-texture overflow-hidden">
      <div className="lattice-pattern absolute inset-0" />
      <div className="taegeuk-bg absolute inset-0" />
      <div className="dancheong-pattern absolute top-0 left-0 right-0 h-2 opacity-40" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-20">
            <div className="inline-block mb-6 float">
              <div className="seal-stamp text-sm sm:text-base">
                창업 비용 안내
              </div>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-balance px-4">
              부담 없이 <span className="gold-accent text-3xl sm:text-4xl md:text-5xl">시작하세요</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed px-4 font-medium">
              당신의 상황에 맞춰, 가장 적합한 방법을 함께 찾겠습니다
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative group ${plan.highlighted ? "md:col-span-2 lg:col-span-1 lg:-mt-8 lg:mb-8" : ""}`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 sm:-top-6 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-sm sm:text-base font-bold z-10 shadow-lg">
                    인기 옵션
                  </div>
                )}

                <div
                  className={`luxury-card relative overflow-hidden rounded-xl sm:rounded-2xl bg-card border-2 transition-all duration-300 ${
                    plan.highlighted
                      ? "border-accent shadow-2xl shadow-accent/20 glow-pulse"
                      : "border-border hover:border-accent/50 hover:shadow-xl"
                  }`}
                >
                  <div className="relative h-48 sm:h-64 overflow-hidden">
                    <img
                      src={plan.image || "/placeholder.svg"}
                      alt={plan.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                    <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 text-white">
                      <h3 className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">{plan.name}</h3>
                      <p className="text-sm sm:text-base text-white/80">{plan.description}</p>
                    </div>
                  </div>

                  <div className="p-6 sm:p-8">
                    <div className="text-center mb-6 sm:mb-8">
                      <div className="text-3xl sm:text-4xl font-black gold-accent mb-2">{plan.price}</div>
                      <div className="text-xs sm:text-sm text-muted-foreground font-semibold">부가세 별도</div>
                    </div>

                    <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2 sm:gap-3">
                          <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-accent/10 flex items-center justify-center mt-0.5">
                            <svg
                              className="h-3 w-3 sm:h-4 sm:w-4 text-accent"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-sm sm:text-base leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      asChild
                      size="lg"
                      className={`w-full text-sm sm:text-base py-5 sm:py-6 font-bold transition-all duration-500 ripple-container ${
                        plan.highlighted ? "korean-luxury-gradient text-white shadow-lg hover:scale-105 border-0" : ""
                      }`}
                      variant={plan.highlighted ? "default" : "outline"}
                    >
                      <Link href="#contact">상담 신청하기</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 sm:mt-16 text-center px-4">
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              * 상기 금액은 평균 예상 비용이며, 매장 규모와 입지에 따라 달라질 수 있습니다.
              <br />
              정확한 견적은 상담을 통해 안내드립니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
