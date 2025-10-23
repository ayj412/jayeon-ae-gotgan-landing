"use client"

import { TvIcon } from "./icons"

export function SocialProof() {
  return (
    <section className="py-32 md:py-40 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="dancheong-pattern absolute top-0 left-0 right-0 h-2 opacity-60" />
      <div className="hanji-texture absolute inset-0 opacity-20" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-20">
            <div className="flex-1">
              <div className="inline-flex items-center gap-3 bg-accent/20 px-7 py-4 rounded-full mb-10 border-2 border-accent/30 korean-luxury-gradient shadow-lg">
                <TvIcon />
                <span className="text-base font-bold text-white">방송 출연</span>
              </div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-10 text-balance leading-tight">
                진심은
                <br />
                <span className="gold-accent">전해집니다</span>
              </h2>
              <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed mb-10 font-medium">
                생생정보마당이 주목한 자연애곳간의 이야기.
                <br />
                정성과 전통이 만들어낸 맛, 전국에 알려졌습니다.
              </p>
              <div className="space-y-5">
                <div className="flex items-center gap-5 group">
                  <div className="w-4 h-4 rounded-full korean-luxury-gradient flex-shrink-0 shadow-lg group-hover:scale-125 transition-transform" />
                  <span className="text-lg lg:text-xl text-primary-foreground/90 font-medium">장인의 손길로 빚는 과정</span>
                </div>
                <div className="flex items-center gap-5 group">
                  <div className="w-4 h-4 rounded-full korean-luxury-gradient flex-shrink-0 shadow-lg group-hover:scale-125 transition-transform" />
                  <span className="text-lg lg:text-xl text-primary-foreground/90 font-medium">신선함에 대한 고집</span>
                </div>
                <div className="flex items-center gap-5 group">
                  <div className="w-4 h-4 rounded-full korean-luxury-gradient flex-shrink-0 shadow-lg group-hover:scale-125 transition-transform" />
                  <span className="text-lg lg:text-xl text-primary-foreground/90 font-medium">자연애곳간의 철학</span>
                </div>
              </div>
            </div>

            <div className="flex-1 w-full">
              <div className="relative rounded-3xl overflow-hidden border-4 border-primary-foreground/20 shadow-2xl hover:shadow-accent/30 transition-all duration-500 group hover-lift">
                <div className="relative w-full" style={{ paddingBottom: '75%' }}>
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src="https://www.youtube.com/embed/bHGYqEeyPd8?start=39"
                    title="생생정보마당 - 자연애곳간"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
