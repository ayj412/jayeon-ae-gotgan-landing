import Link from "next/link"
import Image from "next/image"

const FacebookIcon = () => (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
)

const InstagramIcon = () => (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.07 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-4.358-.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.205.013 3.663.072 4.948.149 3.227 1.664 4.771 4.919 4.919 1.266.057 1.645.069 4.849.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
)

const YoutubeIcon = () => (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
)

export function Footer() {
  return (
    <footer className="relative bg-card border-t-2 border-trevor-green/30 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-trevor-forest via-trevor-green to-trevor-green-light opacity-80" />
      <div className="hanji-texture absolute inset-0 opacity-50" />
      <div className="cloud-pattern absolute inset-0 opacity-30" />

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Image src="/trevor_logo.png" alt="Trevor Korea" width={160} height={80} className="h-10 w-auto mb-6" />
            <p className="text-sm text-muted-foreground leading-relaxed mb-6 font-medium">
              <span className="gold-accent text-base font-bold block mb-2">자연의 재료로, 정직한 한 끼를</span>
              "내 가족, 내 아이가 먹는다는 마음으로" 음식을 만듭니다.
              <br />
              건강한 프리미엄 먹거리로 모두의 건강을 지킵니다.
            </p>
            <div className="flex gap-3">
              <Link
                href="#"
                className="w-11 h-11 rounded-full korean-luxury-gradient flex items-center justify-center hover:scale-110 transition-all duration-300 text-white shadow-lg ripple-container"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </Link>
              <Link
                href="#"
                className="w-11 h-11 rounded-full korean-luxury-gradient flex items-center justify-center hover:scale-110 transition-all duration-300 text-white shadow-lg ripple-container"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </Link>
              <Link
                href="#"
                className="w-11 h-11 rounded-full korean-luxury-gradient flex items-center justify-center hover:scale-110 transition-all duration-300 text-white shadow-lg ripple-container"
                aria-label="YouTube"
              >
                <YoutubeIcon />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4 text-lg tracking-tight">바로가기</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#brand" className="text-muted-foreground hover:text-accent transition-colors font-medium">
                  브랜드 스토리
                </Link>
              </li>
              <li>
                <Link href="#menu" className="text-muted-foreground hover:text-accent transition-colors font-medium">
                  메뉴
                </Link>
              </li>
              <li>
                <Link href="#quality" className="text-muted-foreground hover:text-accent transition-colors font-medium">
                  품질
                </Link>
              </li>
              <li>
                <Link href="#benefits" className="text-muted-foreground hover:text-accent transition-colors font-medium">
                  창업 혜택
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-muted-foreground hover:text-accent transition-colors font-medium">
                  가맹 비용
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold mb-4 text-lg tracking-tight">법적 정보</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-accent transition-colors">
                  이용약관
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-accent transition-colors">
                  개인정보처리방침
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-accent transition-colors">
                  가맹정보공개서
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t-2 border-border/50 mt-10 pt-8 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">

          </div>

          <div className="text-sm text-muted-foreground space-y-2 mt-4">
            <p className="font-semibold">상호명: (주)에이치피푸드코리아 | 대표: 박갑철</p>
            <p>사업자등록번호: 226-86-02792 | HACCP 인증제조시설</p>
            <p>주소: 울산 남구 번영로124번길21, 2층 210-2호</p>
            <p>전화: <span className="text-trevor-green font-semibold">1588-0000</span> | 이메일: <span className="text-trevor-green">info@hpfoodkorea.com</span></p>
          </div>

          <div className="mt-6 pt-6 border-t border-border/30 text-center">
            <p className="text-sm text-muted-foreground font-medium">
              © 2025 Trevor Korea (HP FOOD KOREA). All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground mt-2 gold-accent">
              모두가 건강한 음식을 먹는 그날까지
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
