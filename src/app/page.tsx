import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Problems from "@/components/sections/Problems";
import Solutions from "@/components/sections/Solutions";
import UnifiedInbox from "@/components/sections/UnifiedInbox";
import DailyReport from "@/components/sections/DailyReport";
import ROI from "@/components/sections/ROI";
import WorkflowVisualization from "@/components/sections/WorkflowVisualization";
import WhyGymMate from "@/components/sections/WhyGymMate";
import Features from "@/components/sections/Features";
import Dashboard from "@/components/sections/Dashboard";
import CaseStudies from "@/components/sections/CaseStudies";
import Testimonials from "@/components/sections/Testimonials";
import FoundingOffer from "@/components/sections/FoundingOffer";
// import Pricing from "@/components/sections/Pricing"; // hidden for now — founding offer shown instead
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Problems />
      <Solutions />
      <UnifiedInbox />
      <DailyReport />
      <ROI />
      <WorkflowVisualization />
      <WhyGymMate />
      <Features />
      <Dashboard />
      <CaseStudies />
      <Testimonials />
      <FoundingOffer />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
