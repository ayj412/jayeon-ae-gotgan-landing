import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { BrandStory } from "@/components/brand-story"
import { BrandPhilosophy } from "@/components/brand-philosophy"
import { BrandTimeline } from "@/components/brand-timeline"
import { MenuSection } from "@/components/menu-section"
import { VideoShowcase } from "@/components/video-showcase"
import { QualityProof } from "@/components/quality-proof"
import { SocialProof } from "@/components/social-proof"
import { SocialContribution } from "@/components/social-contribution"
import { FranchiseBenefits } from "@/components/franchise-benefits"
import { StoreGallery } from "@/components/store-gallery"
import { FranchiseProcess } from "@/components/franchise-process"
import { PricingSection } from "@/components/pricing-section"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"
import { ScrollAnimations } from "@/components/scroll-animations"
import { ScrollProgress } from "@/components/scroll-progress"

export default function Home() {
  return (
    <div className="min-h-screen">
      <ScrollAnimations />
      <ScrollProgress />
      <Header />
      <main>
        <HeroSection />
        <div className="scroll-animate">
          <BrandStory />
        </div>
        <div className="scroll-animate">
          <BrandPhilosophy />
        </div>
        <div className="scroll-animate">
          <BrandTimeline />
        </div>
        <div className="scroll-animate">
          <MenuSection />
        </div>
        <div className="scroll-animate">
          <VideoShowcase />
        </div>
        <div className="scroll-animate">
          <QualityProof />
        </div>
        <div className="scroll-animate">
          <SocialProof />
        </div>
        <div className="scroll-animate">
          <SocialContribution />
        </div>
        <div className="scroll-animate">
          <FranchiseBenefits />
        </div>
        <div className="scroll-animate">
          <StoreGallery />
        </div>
        <div className="scroll-animate">
          <PricingSection />
        </div>
        <div className="scroll-animate">
          <FranchiseProcess />
        </div>
        <div className="scroll-animate">
          <FinalCTA />
        </div>
      </main>
      <Footer />
    </div>
  )
}
