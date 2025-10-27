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
    <section ref={sectionRef} className="relative min-h-screen overflow-hidden bg-gradient-to-br from-trevor-forest to-trevor-green-dark">
      <div className="absolute inset-0 z-0">
        <Image
          src="/house.png"
          alt="건강한 먹거리"
          fill
          className="object-cover object-center opacity-20"
          priority
          quality={75}
        />
      </div>

      <div className="absolute inset-0 z-10 bg-gradient-to-br from-trevor-forest/80 via-trevor-green/60 to-transparent" />

      <div className="relative z-20 min-h-screen flex items-center justify-center py-20 px-4 sm:py-24 pb-28 sm:pb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-6xl mx-auto text-center">
            <div className="mb-8 sm:mb-12 flex justify-center animate-fadeIn">
              <div className="relative">
                <Image
                  src="/trevor_logo.png"
                  alt="Trevor Korea"
                  width={200}
                  height={100}
                  className="h-16 sm:h-24 w-auto drop-shadow-2xl"
                  priority
                />
              </div>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 sm:mb-14 text-balance leading-[1.1] sm:leading-[1.05] px-2 animate-fadeIn-delay-1">
              <span className="block text-white drop-shadow-2xl mb-2 sm:mb-3 tracking-tight">자연의 재료로, 정직한 한 끼를</span>
              <span className="block text-white text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter" style={{
                textShadow: '0 0 30px rgba(168, 230, 184, 0.8), 0 0 60px rgba(168, 230, 184, 0.5), 0 4px 20px rgba(0, 0, 0, 0.8)'
              }}>
                모두가 건강한 음식을 먹는 그날까지
              </span>
            </h1>

            <div className="space-y-4 sm:space-y-7 mb-12 sm:mb-20 max-w-4xl mx-auto px-4 animate-fadeIn-delay-2">
              <p className="text-base sm:text-xl lg:text-2xl text-white font-semibold leading-relaxed tracking-tight drop-shadow-lg">
                "내 가족, 내 아이가 먹는다는 마음으로" 음식을 만듭니다
                <br />
                건강한 프리미엄 먹거리 전문 브랜드 <span className="font-black" style={{
                  color: '#a8e6b8',
                  textShadow: '0 0 20px rgba(168, 230, 184, 0.6)'
                }}>트레버코리아</span>
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-white/95 leading-relaxed drop-shadow-md">
                대기업들이 사용하는 정제된 설탕, 아질산나트륨, 색소 등 해로운 성분을 철저히 배제합니다
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 sm:gap-5 lg:gap-8 mb-12 sm:mb-20 max-w-4xl mx-auto px-2 animate-fadeIn-delay-3">
              <div className="text-center bg-white/20 backdrop-blur-md p-4 sm:p-8 lg:p-10 rounded-xl sm:rounded-2xl border-2 border-white/40 hover:border-white/60 transition-all shadow-xl">
                <div className="text-2xl sm:text-4xl lg:text-5xl font-black mb-2 sm:mb-4 tabular-nums" style={{
                  color: '#d4f4dd',
                  textShadow: '0 2px 10px rgba(0, 0, 0, 0.5), 0 0 20px rgba(168, 230, 184, 0.4)'
                }}>
                  {counts.orphanages}+
                </div>
                <div className="text-xs sm:text-sm lg:text-base text-white font-bold tracking-wider drop-shadow-md">보육원 후원</div>
              </div>
              <div className="text-center bg-white/20 backdrop-blur-md p-4 sm:p-8 lg:p-10 rounded-xl sm:rounded-2xl border-2 border-white/40 hover:border-white/60 transition-all shadow-xl">
                <div className="text-2xl sm:text-4xl lg:text-5xl font-black mb-2 sm:mb-4 tabular-nums" style={{
                  color: '#d4f4dd',
                  textShadow: '0 2px 10px rgba(0, 0, 0, 0.5), 0 0 20px rgba(168, 230, 184, 0.4)'
                }}>
                  {counts.additives}
                </div>
                <div className="text-xs sm:text-sm lg:text-base text-white font-bold tracking-wider drop-shadow-md">유해 첨가물</div>
              </div>
              <div className="text-center bg-white/20 backdrop-blur-md p-4 sm:p-8 lg:p-10 rounded-xl sm:rounded-2xl border-2 border-white/40 hover:border-white/60 transition-all shadow-xl">
                <div className="text-2xl sm:text-4xl lg:text-5xl font-black mb-2 sm:mb-4 tabular-nums" style={{
                  color: '#d4f4dd',
                  textShadow: '0 2px 10px rgba(0, 0, 0, 0.5), 0 0 20px rgba(168, 230, 184, 0.4)'
                }}>
                  {counts.handmade}%
                </div>
                <div className="text-xs sm:text-sm lg:text-base text-white font-bold tracking-wider drop-shadow-md">국내산</div>
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
