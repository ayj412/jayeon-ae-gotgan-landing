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
  title: "자연애곳간 가맹점 모집 | 전통의 맛, 건강한 한식",
  description:
    "200번 손으로 치대는 정성, 48시간 이내 도축 한우·한돈으로 만든 수제 떡갈비. 자연애곳간 가맹점을 모집합니다.",
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
