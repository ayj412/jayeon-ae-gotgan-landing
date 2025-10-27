"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const MenuIcon = () => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
)

const XIcon = () => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
)

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-trevor-green/20 bg-background/95 backdrop-blur-xl supports-[backdrop-filter]:bg-background/80 shadow-sm">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-trevor-forest via-trevor-green to-trevor-green-light opacity-80" />
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image src="/trevor_logo.png" alt="Trevor Korea" width={180} height={80} className="h-12 w-auto" priority />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#brand" className="text-sm font-semibold tracking-wide hover:text-accent transition-all duration-300 relative group">
              <span className="relative z-10">브랜드 스토리</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-accent/60 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="#menu" className="text-sm font-semibold tracking-wide hover:text-accent transition-all duration-300 relative group">
              <span className="relative z-10">메뉴</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-accent/60 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="#quality" className="text-sm font-semibold tracking-wide hover:text-accent transition-all duration-300 relative group">
              <span className="relative z-10">품질 보증</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-accent/60 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="#benefits" className="text-sm font-semibold tracking-wide hover:text-accent transition-all duration-300 relative group">
              <span className="relative z-10">창업 혜택</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-accent/60 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="#pricing" className="text-sm font-semibold tracking-wide hover:text-accent transition-all duration-300 relative group">
              <span className="relative z-10">가맹 비용</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-accent/60 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Button
              asChild
              className="hidden md:inline-flex korean-luxury-gradient hover:opacity-90 text-white font-bold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-accent/30 border-0"
            >
              <Link href="#contact">가맹 상담 신청</Link>
            </Button>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
              {mobileMenuOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-6 border-t border-border/30">
            <div className="flex flex-col gap-5">
              <Link
                href="#brand"
                className="text-sm font-medium hover:text-accent transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                브랜드 스토리
              </Link>
              <Link
                href="#menu"
                className="text-sm font-medium hover:text-accent transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                메뉴
              </Link>
              <Link
                href="#quality"
                className="text-sm font-medium hover:text-accent transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                품질 보증
              </Link>
              <Link
                href="#benefits"
                className="text-sm font-medium hover:text-accent transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                창업 혜택
              </Link>
              <Link
                href="#pricing"
                className="text-sm font-medium hover:text-accent transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                가맹 비용
              </Link>
              <Button asChild className="korean-luxury-gradient hover:opacity-90 text-white font-bold border-0">
                <Link href="#contact" onClick={() => setMobileMenuOpen(false)}>
                  가맹 상담 신청
                </Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
