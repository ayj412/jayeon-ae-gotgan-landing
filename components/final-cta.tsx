"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"

export function FinalCTA() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    hasStore: "no",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Form submitted:", formData)
    alert("상담 신청이 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.")
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-gradient-to-br from-zinc-50 via-white to-zinc-50 text-foreground relative overflow-hidden">
      <div className="absolute inset-0 hanji-texture opacity-30" />
      <div className="dancheong-pattern absolute top-0 left-0 right-0 h-2 opacity-50" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 sm:mb-20">
            <div className="inline-block mb-6">
              <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-accent/10 border-2 border-accent/20">
                <span className="text-2xl">🤝</span>
                <span className="text-sm font-bold text-accent tracking-wider">함께 시작하세요</span>
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance leading-tight">
              당신의 꿈을
              <br />
              <span className="gold-accent text-4xl sm:text-5xl md:text-6xl lg:text-7xl">함께 이루고 싶습니다</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed font-medium">
              두려우신가요? 괜찮습니다. 처음부터 끝까지 함께 걷겠습니다.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <Card className="bg-white shadow-2xl border-2 border-border hover:border-accent/30 transition-all duration-300">
              <CardContent className="p-8 sm:p-10">
                <div className="mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">가맹 상담 신청</h3>
                  <p className="text-sm text-muted-foreground">빠른 시일 내에 연락드리겠습니다</p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">이름 *</Label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="mt-2"
                      placeholder="홍길동"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">연락처 *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="mt-2"
                      placeholder="010-1234-5678"
                    />
                  </div>
                  <div>
                    <Label>점포 보유 여부</Label>
                    <div className="flex gap-4 mt-2">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="hasStore"
                          value="yes"
                          checked={formData.hasStore === "yes"}
                          onChange={(e) => setFormData({ ...formData, hasStore: e.target.value })}
                          className="w-4 h-4"
                        />
                        <span>있음</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="hasStore"
                          value="no"
                          checked={formData.hasStore === "no"}
                          onChange={(e) => setFormData({ ...formData, hasStore: e.target.value })}
                          className="w-4 h-4"
                        />
                        <span>없음</span>
                      </label>
                    </div>
                  </div>
                  <Button
                    type="submit"
                    className="w-full korean-luxury-gradient hover:opacity-90 text-white text-lg py-6 shadow-lg hover:shadow-xl transition-all hover:scale-105 border-0"
                  >
                    상담 신청하기
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-5">
              <Card className="bg-card/50 backdrop-blur-sm border-2 border-border hover:border-accent/30 transition-all duration-300 hover-lift-subtle shadow-lg">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-full korean-luxury-gradient flex items-center justify-center flex-shrink-0 shadow-lg">
                      <svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-2">전화 상담</h4>
                      <p className="text-foreground text-lg font-semibold">1588-0000</p>
                      <p className="text-sm text-muted-foreground mt-1">평일 09:00 - 18:00</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-2 border-border hover:border-accent/30 transition-all duration-300 hover-lift-subtle shadow-lg">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-full korean-luxury-gradient flex items-center justify-center flex-shrink-0 shadow-lg">
                      <svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-2">이메일 문의</h4>
                      <p className="text-foreground text-lg font-semibold break-all">franchise@jayeonae.com</p>
                      <p className="text-sm text-muted-foreground mt-1">24시간 접수 가능</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-2 border-border hover:border-accent/30 transition-all duration-300 hover-lift-subtle shadow-lg">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-full korean-luxury-gradient flex items-center justify-center flex-shrink-0 shadow-lg">
                      <svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-2">본사 위치</h4>
                      <p className="text-foreground text-lg font-semibold">서울특별시 강남구 테헤란로 123</p>
                      <p className="text-sm text-muted-foreground mt-1">방문 상담 환영 (사전 예약 필수)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
