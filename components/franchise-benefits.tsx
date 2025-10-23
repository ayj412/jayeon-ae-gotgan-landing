"use client"

export function FranchiseBenefits() {
  return (
    <section id="benefits" className="relative py-0">
      <div className="dancheong-pattern absolute top-0 left-0 right-0 h-2 opacity-60 z-20" />

      <div className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] min-h-[500px] sm:min-h-[700px]">
        <img
          src="/modern-korean-restaurant-exterior.jpg"
          alt="자연애곳간 매장"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl px-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-white text-balance">
                <span className="gold-accent">검증된 노하우</span>로
                <br />
                함께 성공합니다
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-white/90 text-pretty leading-relaxed mb-8 sm:mb-12">
                전통시장 떡갈비 명가의 경험과 외식브랜드 운영 노하우가 만든 성공 시스템
              </p>

              <div className="grid grid-cols-3 gap-4 sm:gap-8">
                <div>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold gold-accent mb-1 sm:mb-2 glow-pulse">30+</div>
                  <div className="text-white/80 text-xs sm:text-base font-medium">년 경력</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold gold-accent mb-1 sm:mb-2 glow-pulse">2가지</div>
                  <div className="text-white/80 text-xs sm:text-base font-medium">핵심 노하우</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold gold-accent mb-1 sm:mb-2 glow-pulse">100%</div>
                  <div className="text-white/80 text-xs sm:text-base font-medium">지원 체계</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-2">
        {/* Benefit 1 */}
        <div className="relative h-[400px] sm:h-[500px] group overflow-hidden">
          <img
            src="/korean-restaurant-interior-traditional-wooden.jpg"
            alt="전통시장 명가의 노하우"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
          <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-12 text-white">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 gold-accent">전통시장 명가의 경험</h3>
            <p className="text-base sm:text-lg text-white/90 leading-relaxed max-w-md">
              '용철이떡갈비' 30년 이상의 전통시장 떡갈비 노하우를 그대로 전수합니다
            </p>
          </div>
        </div>

        {/* Benefit 2 */}
        <div className="relative h-[400px] sm:h-[500px] group overflow-hidden">
          <img
            src="/71.png"
            alt="외식 브랜드 시스템"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
          <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-12 text-white">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 gold-accent">외식 브랜드 시스템</h3>
            <p className="text-base sm:text-lg text-white/90 leading-relaxed max-w-md">
              '자연곳간' 외식 운영 노하우로 체계적인 매장 운영과 브랜드 관리를 지원합니다
            </p>
          </div>
        </div>

        {/* Benefit 3 */}
        <div className="relative h-[400px] sm:h-[500px] group overflow-hidden">
          <img
            src="/grilled-tteokgalbi-on-charcoal-fire--korean-tradit.jpg"
            alt="온·오프라인 통합"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
          <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-12 text-white">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 gold-accent">온·오프라인 통합</h3>
            <p className="text-base sm:text-lg text-white/90 leading-relaxed max-w-md mb-2">
              온라인 쇼핑몰과 오프라인 매장을 동시 운영하며 다양한 수익 채널을 확보하세요
            </p>
            <p className="text-sm text-white/70">
              메뉴 실험과 소비자 피드백을 통한 지속적인 브랜드 성장
            </p>
          </div>
        </div>

        {/* Benefit 4 */}
        <div className="relative h-[400px] sm:h-[500px] group overflow-hidden">
          <img
            src="/outer_brand.png"
            alt="전통을 현대적으로 재해석"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
          <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-12 text-white">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 gold-accent">현대적 한식 공간</h3>
            <p className="text-base sm:text-lg text-white/90 leading-relaxed max-w-md">
              전통을 현대적으로 재해석한 건강한 밥상 외식 공간으로 차별화된 경쟁력을 갖추세요
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
