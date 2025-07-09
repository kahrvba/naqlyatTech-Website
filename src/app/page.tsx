import Hero from "@/components/sections/hero/Hero";
import About from "@/components/sections/about/About";
import Features from "@/components/sections/features/Features";
import Services from "@/components/sections/services/Services";
import AppShowcase from "@/components/sections/testimonials/Testimonials";
import CTA from "@/components/sections/cta/CTA";
import Footer from "@/components/sections/footer/Footer";
import Header from '@/components/layout/header/Header';

export default function Home() {
  return (
    <main className="bg-white">
      <Header />
      {/* Main content sections */}
         <Hero />
        <About />
        <Features />
        <Services />
        <AppShowcase />
        <CTA />
        <Footer />
      
    </main>
  );
}
