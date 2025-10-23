"use client"

import { useEffect, useState } from "react"

export function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Top Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-[100] h-1">
        <div
          className="h-full korean-luxury-gradient transition-all duration-200"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Side Decorative Progress Indicator */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-center gap-3">
        {["hero", "brand", "menu", "benefits", "pricing", "contact"].map((section, index) => (
          <button
            key={section}
            onClick={() => {
              document.getElementById(section)?.scrollIntoView({ behavior: "smooth" })
            }}
            className="group relative"
          >
            <div
              className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                scrollProgress > (index / 6) * 100 - 5 && scrollProgress < ((index + 1) / 6) * 100 + 5
                  ? "korean-luxury-gradient border-transparent scale-150 glow-pulse"
                  : "border-accent/30 bg-background hover:bg-accent/20"
              }`}
            />
            <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="bg-accent text-white px-3 py-1 rounded-lg text-xs font-bold whitespace-nowrap shadow-xl">
                {section === "hero"
                  ? "홈"
                  : section === "brand"
                    ? "브랜드"
                    : section === "menu"
                      ? "메뉴"
                      : section === "benefits"
                        ? "창업혜택"
                        : section === "pricing"
                          ? "비용"
                          : "상담"}
              </div>
            </div>
          </button>
        ))}
      </div>
    </>
  )
}
