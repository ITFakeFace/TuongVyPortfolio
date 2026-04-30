"use client";
import React from "react";
import styles from "./ConsultationFormSection.module.scss";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import LogoListImage from "@/assets/images/assets/ConsultaionFormSection-LogoListImage-1.png";
import TuongVyImage from "@/assets/images/assets/ConsultaionFormSection-TuongVyImage-1.png";
import ContactForm from "./contact-form/ContactForm";

const ConsultationFormSection = () => {
  const { lang } = useLanguage();
  return (
    <div className={`${styles.container} pt-110 lg:pt-120`}>
      <div className={`lg:mb-15 mb-5`}>
        <div>
          <div
            className={`flex flex-row justify-center text-[35px] lg:text-[80px] gap-2 lg:gap-4 font-bold 
                    text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-[#999999]
                `}
          >
            {lang == "Viet" ? "ĐỐI TÁC HỢP TÁC" : "STRATEGIC PARTNERSHIPS"}
          </div>
        </div>
        <div className="relative w-full h-[9px]">
          <svg
            className="absolute block inset-0 size-full"
            width="100%"
            height="100%"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 100 10" // Dùng hệ tọa độ đơn giản cho dễ quản lý
          >
            <ellipse
              cx="50" // Đưa vào chính giữa theo trục X
              cy="5" // Đưa vào chính giữa theo trục Y
              rx="50" // Bán kính 50 (tổng đường kính là 100, tức full width)
              ry="3" // Độ dẹt của elipse
              fill="url(#paint0_radial_custom)"
            />
            <defs>
              <radialGradient
                id="paint0_radial_custom"
                cx="50%" // Tâm gradient tại 50%
                cy="50%"
                r="50%" // Bán kính gradient lan ra hết elipse
                fx="50%"
                fy="50%"
                gradientUnits="userSpaceOnUse"
              >
                {/* Điểm trung tâm sáng nhất */}
                <stop offset="0%" stopColor="#F9FCFF" />

                {/* Thu nhỏ dần/Mờ dần. Offset 50% sẽ làm vùng sáng tập trung ở giữa */}
                <stop offset="50%" stopColor="#4E70FF" stopOpacity="0.5" />

                {/* Kết thúc mờ hẳn tại biên */}
                <stop offset="100%" stopColor="#4E70FF" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
      <Image
        src={LogoListImage}
        alt="Logo List"
        className="w-9/10 lg:w-4/5 h-auto object-contain mx-auto mb-10 lg:mb-0"
      />
      <div className={`flex flex-col lg:flex-row relative`}>
        <div className={`w-full lg:w-1/2`}>
          <Image
            src={TuongVyImage}
            alt="Tuong Vy"
            className="absolute lg:static w-4/7 lg:w-3/5 lg:mr-30 h-auto object-cover ml-auto bottom-0 right-0"
          />
        </div>
        <div className={`w-full lg:w-1/2 lg:pt-10`}>
          <div className={`w-8/10 mr-auto`}>
            <ContactForm lang={lang} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultationFormSection;
