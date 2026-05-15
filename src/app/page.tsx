"use client";
import GlassBox from "@/components/generals/GlassBlock";
import GlassCard from "@/components/generals/GlassCard";
import CareerPathSection from "@/components/home-page/career-path-section/CareerPathSection";
import CertificateSection from "@/components/home-page/certificate-section/CertificateSection";
import ConsultationFormSection from "@/components/home-page/consultation-form-section/ConsultationFormSection";
import CoreValueSection from "@/components/home-page/core-value-section/CoreValueSection";
import ExperienceSection from "@/components/home-page/experience-section/ExperienceSection";
import ExplotionPeriodSection from "@/components/home-page/explotion-period-section/ExplotionPeriodSection";
import HeroSection from "@/components/home-page/hero-section/HeroSection";
import HotTopicsSection from "@/components/home-page/hot-topics-section/HotTopicsSection";
import IntroductionSection from "@/components/home-page/introduction-section/IntroductionSection";
import LatestEventsSection from "@/components/home-page/latest-events-section/LatestEventsSection";
import SelftSolutionSection from "@/components/home-page/self-solution-section/SelfSolutionSection";
import SharingExpSection from "@/components/home-page/sharing-exp-section/SharingExpSection";
import TrainingInformationSection from "@/components/home-page/training-information-section/TrainingInformationSection";
import { ContactProvider } from "@/context/ContactContext";
import { useLanguage } from "@/context/LanguageContext";
import { div } from "framer-motion/client";
import Image from "next/image";

export default function Home() {
  const { lang } = useLanguage();
  return (
    <div>
      <ContactProvider lang={lang}>
        <HeroSection />
        {/* <IntroductionSection /> */}
        <SelftSolutionSection />
        <CoreValueSection />
        <ExperienceSection />
        {/* <LatestEventsSection /> */}
        <ExplotionPeriodSection />
        <CareerPathSection />
        <HotTopicsSection />
        <CertificateSection />
        <ConsultationFormSection />
        <SharingExpSection />
        {/* <GlassCard
          containerClassName="w-[300px] h-[400px] m-10"
          contentClassName="flex flex-col items-center justify-center h-full text-white"
        >
          <div className="w-16 h-16 bg-blue-500/20 rounded-full border border-blue-400 mb-4 flex items-center justify-center">
            🚀
          </div>
          <h2 className="text-xl font-bold">VIP PASS</h2>
          <p className="text-sm opacity-60 text-center px-4 mt-2">
            Nội dung này là động, bạn có thể thay đổi tùy ý!
          </p>
        </GlassCard> */}
      </ContactProvider>
    </div>
  );
}
