import Navbar from "@/components/layout/Navbar"
import HeroSection from "@/components/home/HeroSection"
import FeatureSection from "@/components/home/FeatureSection"
import Footer from "@/components/layout/Footer"

export default function Home() {
  return (
    <main className="bg-black min-h-screen">

      <Navbar />

      <HeroSection />

      <FeatureSection />

      <Footer />

    </main>
  )
}