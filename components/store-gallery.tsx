"use client"

import { useState } from "react"

const galleryImages = [
  { src: "/home1.jpeg", alt: "매장 외관", span: "md:col-span-2" },
  { src: "/home3.jpeg", alt: "매장 내부", span: "" },
  { src: "/home4.jpeg", alt: "매장 사인", span: "" },
  { src: "/home5.png", alt: "메뉴 사진", span: "" },
  { src: "/house.png", alt: "식사 공간", span: "" },
]

export function StoreGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <section className="relative py-32 md:py-40 hanji-texture overflow-hidden">
      <div className="dancheong-pattern absolute top-0 left-0 right-0 h-2 opacity-40" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-balance leading-tight">
              <span className="gold-accent">한결같은 맛</span>,
              <br />
              어디서나 같은 품질
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed font-medium">
              전통 한옥의 따뜻함과 현대적 감각이 조화를 이룬 매장 콘셉트
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={`${image.span} relative overflow-hidden rounded-2xl cursor-pointer group hover-lift border-2 border-border hover:border-accent/50 transition-all duration-300`}
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                    <span className="text-white text-lg font-bold mb-2 block gold-accent">{image.alt}</span>
                    <span className="text-white/80 text-sm">클릭하여 확대</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-accent transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img
            src={galleryImages[selectedImage].src || "/placeholder.svg"}
            alt={galleryImages[selectedImage].alt}
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}
    </section>
  )
}
