import type React from "react"
import type { Metadata } from "next"
import { Noto_Serif_KR, Geist_Mono } from "next/font/google"
import "./globals.css"

const notoSerifKR = Noto_Serif_KR({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
})
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Trevor Korea | 건강한 프리미엄 먹거리 전문 브랜드",
  description:
    "내 가족, 내 아이가 먹는다는 마음으로 만드는 건강한 먹거리. 유해 첨가물 제로, 국내산 한우·한돈 100%, HACCP 인증. 트레버코리아",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body className={`${notoSerifKR.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
