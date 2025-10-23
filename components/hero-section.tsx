"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronRightIcon } from "./icons"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export function HeroSection() {
  const [counts, setCounts] = useState({ orphanages: 0, additives: 0, handmade: 0 })
  const [hasAnimated, setHasAnimated] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          const duration = 2000
          const steps = 60
          const interval = duration / steps

          let step = 0
          const timer = setInterval(() => {
            step++
            const progress = step / steps
            setCounts({
              orphanages: Math.floor(30 * progress),
              additives: Math.floor(0 * progress),
              handmade: Math.floor(100 * progress),
            })
            if (step >= steps) clearInterval(timer)
          }, interval)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [hasAnimated])

  return (
    <section ref={sectionRef} className="relative min-h-screen overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <Image
          src="/house.png"
          alt="수제 떡갈비"
          fill
          className="object-cover object-center"
          priority
          quality={75}
        />
      </div>

      <div className="absolute inset-0 z-10 bg-gradient-to-br from-black/0 via-black/50 to-black/0" />

      <div className="relative z-20 min-h-screen flex items-center justify-center py-20 px-4 sm:py-24 pb-28 sm:pb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-6xl mx-auto text-center">
            <div className="mb-8 sm:mb-12 flex justify-center animate-fadeIn">
              <div className="relative">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-accent rounded-sm rotate-45 shadow-2xl shadow-accent/40" />
              </div>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 sm:mb-14 text-balance leading-[1.1] sm:leading-[1.05] px-2 animate-fadeIn-delay-1">
              <span className="block text-white drop-shadow-2xl mb-2 sm:mb-3 tracking-tight">전통시장 떡갈비 명가의 진심을,</span>
              <span className="block gold-accent text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter">
                프리미엄 브랜드로
              </span>
            </h1>

            <div className="space-y-4 sm:space-y-7 mb-12 sm:mb-20 max-w-4xl mx-auto px-4 animate-fadeIn-delay-2">
              <p className="text-base sm:text-xl lg:text-2xl text-white font-semibold leading-relaxed tracking-tight">
                '용철이떡갈비'의 전통과 '자연곳간' 외식 운영 노하우가 결합된
                <br />
                온·오프라인 식품 전문 브랜드 "자연애곳간"
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-white/80 leading-relaxed">
                내 가족, 내 아이가 먹는다는 마음으로 만드는 건강한 한 끼
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 sm:gap-5 lg:gap-8 mb-12 sm:mb-20 max-w-4xl mx-auto px-2 animate-fadeIn-delay-3">
              <div className="text-center bg-white/10 p-4 sm:p-8 lg:p-10 rounded-xl sm:rounded-2xl border-2 border-white/20">
                <div className="text-2xl sm:text-4xl lg:text-5xl font-black gold-accent mb-2 sm:mb-4 tabular-nums">
                  {counts.orphanages}+
                </div>
                <div className="text-xs sm:text-sm lg:text-base text-white font-bold tracking-wider">가맹점</div>
              </div>
              <div className="text-center bg-white/10 p-4 sm:p-8 lg:p-10 rounded-xl sm:rounded-2xl border-2 border-white/20">
                <div className="text-2xl sm:text-4xl lg:text-5xl font-black gold-accent mb-2 sm:mb-4 tabular-nums">
                  {counts.additives}
                </div>
                <div className="text-xs sm:text-sm lg:text-base text-white font-bold tracking-wider">유해 첨가물</div>
              </div>
              <div className="text-center bg-white/10 p-4 sm:p-8 lg:p-10 rounded-xl sm:rounded-2xl border-2 border-white/20">
                <div className="text-2xl sm:text-4xl lg:text-5xl font-black gold-accent mb-2 sm:mb-4 tabular-nums">
                  {counts.handmade}%
                </div>
                <div className="text-xs sm:text-sm lg:text-base text-white font-bold tracking-wider">국내산</div>
              </div>
            </div>

            {/* <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-16 sm:mb-20 px-4 animate-fadeIn-delay-3">
              <Button
                asChild
                size="lg"
                className="korean-luxury-gradient text-white text-sm sm:text-base px-8 sm:px-10 py-5 sm:py-6 h-auto w-full sm:w-auto rounded-xl font-bold border-0 hover-lift-subtle"
              >
                <Link href="#contact" className="flex items-center justify-center gap-3">
                  <span className="tracking-wide">가맹 상담 신청</span>
                  <ChevronRightIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-sm sm:text-base px-8 sm:px-10 py-5 sm:py-6 h-auto border-2 border-white/50 text-white bg-white/10 hover:bg-white/20 w-full sm:w-auto rounded-xl font-bold tracking-wide transition-colors duration-300"
              >
                <Link href="#brand">브랜드 스토리 보기</Link>
              </Button>
            </div> */}
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 z-30 animate-smoothBounce">
        <div className="flex flex-col items-center gap-2 sm:gap-2.5">
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/35 rounded-full flex items-start justify-center p-1 sm:p-1.5 bg-white/5">
            <div className="w-1 h-2 sm:h-2.5 bg-white/50 rounded-full" />
          </div>
          <span className="text-white/35 text-[9px] sm:text-[10px] font-bold tracking-[0.25em] uppercase">Scroll</span>
        </div>
      </div>
    </section>
  )
}
