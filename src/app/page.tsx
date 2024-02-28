import HeroSection from "@/components/HeroSection";
import FeaturedPrograms from "@/components/FeaturedPrograms";
import Image from "next/image";
import WhyChooseUs from "@/components/WhyChooseUs";
import GymTestimonials from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import Trainers from "@/components/Trainers";


export default function Home() {
  return (
    <main className="bg-black/[0.96] min-h-screen antialiased bg-grid-white/[0.02]">
      <HeroSection/>
      <FeaturedPrograms/>
      <WhyChooseUs/>
      <GymTestimonials/>
      <UpcomingWebinars/>
      <Trainers/>
    </main>
  );
}
