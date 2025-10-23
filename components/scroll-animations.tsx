"use client"

import type React from "react"

import { useEffect, useRef } from "react"

export function ScrollAnimations() {
  useEffect(() => {
    // Enhanced observer with more dramatic animations
    const observerOptions = {
      threshold: 0.15,
      rootMargin: "0px 0px -80px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in")

          // Apply epic animations based on data attribute
          const element = entry.target as HTMLElement

          // Epic reveal for main sections
          if (element.classList.contains("scroll-animate")) {
            element.style.animation = "epic-reveal-up 1.4s cubic-bezier(0.16, 1, 0.3, 1) forwards"
          }

          // Dramatic slide effects for alternating sections
          if (element.classList.contains("scroll-animate-left")) {
            element.style.animation = "dramatic-slide-left 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards"
          }

          if (element.classList.contains("scroll-animate-right")) {
            element.style.animation = "dramatic-slide-right 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards"
          }

          // Epic zoom for special elements
          if (element.classList.contains("scroll-animate-scale")) {
            element.style.animation = "epic-zoom 1.6s cubic-bezier(0.16, 1, 0.3, 1) forwards"
          }

          // 3D flip for cards
          if (element.classList.contains("scroll-flip-3d")) {
            element.style.animation = "flip-3d 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards"
          }
        }
      })
    }, observerOptions)

    // Observe all scroll-animated elements
    const animatedElements = document.querySelectorAll(
      ".scroll-animate, .scroll-animate-left, .scroll-animate-right, .scroll-animate-scale, .scroll-flip-3d"
    )

    animatedElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return null
}

export function ParallaxSection({ children, speed = 0.5 }: { children: React.ReactNode; speed?: number }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return
      const scrolled = window.scrollY
      const rect = ref.current.getBoundingClientRect()
      const elementTop = rect.top + scrolled
      const offset = (scrolled - elementTop) * speed
      ref.current.style.transform = `translateY(${offset}px)`
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [speed])

  return <div ref={ref}>{children}</div>
}

// Enhanced 3D Parallax with depth effect
export function Parallax3DSection({
  children,
  speed = 0.5,
  depth = 0,
}: {
  children: React.ReactNode
  speed?: number
  depth?: number
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return
      const scrolled = window.scrollY
      const rect = ref.current.getBoundingClientRect()
      const elementTop = rect.top + scrolled
      const offset = (scrolled - elementTop) * speed

      // Add 3D depth effect
      const rotateX = offset * 0.02
      const rotateY = offset * 0.01
      const translateZ = depth * offset

      ref.current.style.transform = `
        translateY(${offset}px)
        perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateZ(${translateZ}px)
      `
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [speed, depth])

  return (
    <div ref={ref} className="parallax-3d">
      {children}
    </div>
  )
}
