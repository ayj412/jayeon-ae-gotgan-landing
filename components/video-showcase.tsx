"use client"

import { PlayIcon } from "./icons"
import { useState } from "react"

export function VideoShowcase() {
  const [isPlaying, setIsPlaying] = useState(false)

  return 
  // (
  //   <section className="relative py-28 md:py-36 bg-background overflow-hidden">
  //     <div className="hanji-texture absolute inset-0 opacity-20" />
  //     <div className="dancheong-pattern absolute top-0 left-0 right-0 h-2 opacity-40" />

  //     <div className="container mx-auto px-6 lg:px-12 relative z-10">
  //       <div className="max-w-6xl mx-auto">
  //         <div className="text-center mb-20">
  //           <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-balance leading-tight">
  //             <span className="gold-accent">시간</span>이
  //             <br />
  //             맛이 됩니다
  //           </h2>
  //           <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed font-medium">
  //             빠르게만 만들 수 없는 것들이 있습니다. 정성스러운 손길로 빚어내는 과정을 보세요.
  //           </p>
  //         </div>

  //         <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl hover:shadow-accent/30 transition-all duration-500 group border-4 border-border hover-lift">
  //           <video
  //             className="w-full h-full object-cover"
  //             controls={isPlaying}
  //             poster="/chef-hand-kneading-korean-tteokgalbi-meat-in-profe.jpg"
  //             onClick={() => setIsPlaying(true)}
  //           >
  //             <source src="/kneading-process-video.mp4" type="video/mp4" />
  //           </video>

  //           {!isPlaying && (
  //             <button
  //               onClick={() => setIsPlaying(true)}
  //               className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/30 transition-all duration-300"
  //             >
  //               <div className="w-28 h-28 rounded-full korean-luxury-gradient flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xl">
  //                 <PlayIcon className="h-14 w-14 text-white ml-1" />
  //               </div>
  //             </button>
  //           )}
  //         </div>

  //         <div className="grid md:grid-cols-3 gap-12 mt-20">
  //           <div className="text-center group">
  //             <div className="text-6xl font-bold gold-accent mb-6 group-hover:scale-110 transition-transform">01</div>
  //             <h3 className="text-2xl lg:text-3xl font-bold mb-4">좋은 시작</h3>
  //             <p className="text-muted-foreground leading-relaxed text-base lg:text-lg font-medium">
  //               좋은 재료는 거짓말하지 않습니다. 가장 신선한 것부터 시작합니다.
  //             </p>
  //           </div>
  //           <div className="text-center group">
  //             <div className="text-6xl font-bold gold-accent mb-6 group-hover:scale-110 transition-transform">02</div>
  //             <h3 className="text-2xl lg:text-3xl font-bold mb-4">정성의 시간</h3>
  //             <p className="text-muted-foreground leading-relaxed text-base lg:text-lg font-medium">
  //               서두르지 않습니다. 손끝의 온기로 한 번 한 번 빚어냅니다.
  //             </p>
  //           </div>
  //           <div className="text-center group">
  //             <div className="text-6xl font-bold gold-accent mb-6 group-hover:scale-110 transition-transform">03</div>
  //             <h3 className="text-2xl lg:text-3xl font-bold mb-4">불의 마법</h3>
  //             <p className="text-muted-foreground leading-relaxed text-base lg:text-lg font-medium">
  //               숯불의 향이 더해지는 순간, 완성됩니다.
  //             </p>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </section>
  // )
}
