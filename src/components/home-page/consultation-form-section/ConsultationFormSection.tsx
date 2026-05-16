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
    <div className={`${styles.container} pt-150 lg:pt-120 pb-40 lg:pb-40 `}>
      <div id="strategic-partnerships" className={`lg:pb-15 pb-5 lg:px-[15%]`}>
        <div>
          <div
            className={`flex flex-row justify-center text-[1.5rem] lg:text-[clamp(3rem,0.75rem+2.3438vw,4.5rem)] gap-2 lg:gap-4 font-bold 
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
              ry="1" // Độ dẹt của elipse
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
        <div
          className={`text-white font-playfair text-center text-[10px] lg:text-[clamp(1.125rem,-0.1875rem+1.3672vw,2rem)]`}
        >
          {lang == "Viet"
            ? "18 năm hành trình hợp tác cùng các tổ chức"
            : "18 years of collaborating with organizations"}
        </div>
      </div>
      <Image
        src={LogoListImage}
        alt="Logo List"
        className="lg:px-[15%] w-9/10 lg:w-full h-auto object-contain mx-auto pb-10 lg:pb-0"
      />
      <div
        className={`w-full lg:w-full lg:px-[15%] mx-auto lg:mr-auto lg:my-60 lg:py-20 bg-[radial-gradient(circle_at_center,_#011B40_9%,_#0346A6_100%)]`}
      >
        <ContactForm lang={lang} />
      </div>
    </div>
  );
};

export default ConsultationFormSection;
