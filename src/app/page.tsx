"use client";
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
        <IntroductionSection />
        <ExperienceSection />
        <LatestEventsSection />
        <CoreValueSection />
        <ExplotionPeriodSection />
        {/* <TrainingInformationSection /> */}
        <CareerPathSection />
        <HotTopicsSection />
        <CertificateSection />
        <ConsultationFormSection />
        <SharingExpSection />
      </ContactProvider>
    </div>
  );
}
