"use client";
import React from "react";
import TuongVyUpward from "@/assets/images/assets/CoreValueSection-UpwardTuongVy-1.png";
import TuongVyDownward from "@/assets/images/assets/CoreValueSection-DownwardTuongVy-1.png";
import FinancialProfessor from "@/assets/images/assets/CoreValueSection-FinancialProfessor-1.png";
import FinancialProfessorEng from "@/assets/images/assets/CoreValueSection-FinancialProfessorEng-1.png";
import BottomBg from "@/assets/images/assets/CoreValueSection-BottomBg-1.png";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import { cl } from "@/utils/cn";
import { render } from "sass";

const CoreValueSection = () => {
  const { lang } = useLanguage();

  const renderLeftItem = (
    index: string,
    description: string,
    className: string,
  ) => {
    return (
      <div
        className={cl(
          `w-full flex flex-row gap-2 lg:gap-8 items-center`,
          className,
        )}
      >
        <div
          className={`
                  w-[clamp(25px,13.402px+2.95vw,70px)]
                  h-[clamp(25px,13.402px+2.95vw,70px)]
                  text-[clamp(20px,13.565px+1.637vw,45px)]
                  aspect-square shrink-0 p-5 lg:p-10
                  rounded-full border-2 lg:border-4 border-white 
                  text-white font-bold flex items-center justify-center 
              `}
        >
          {index}
        </div>
        <div className="h-full flex items-center">
          <p className="text-[11px] lg:text-[clamp(10px,3.565px+1.637vw,35px)] text-white mt-2 font-semibold">
            {description}
          </p>
        </div>
      </div>
    );
  };

  const renderRightItem = (
    index: string,
    description: string,
    className: string,
  ) => {
    return (
      <div
        className={cl(
          `w-full flex flex-row gap-2 lg:gap-8 items-center justify-end`,
          className,
        )}
      >
        <div className="">
          <p className="text-[11px] lg:text-[clamp(10px,3.565px+1.637vw,35px)] text-[#011B40] mt-2 font-semibold">
            {description}
          </p>
        </div>
        <div
          className={`
                  w-[clamp(25px,13.402px+2.95vw,70px)]
                  h-[clamp(25px,13.402px+2.95vw,70px)]
                  text-[clamp(20px,13.565px+1.637vw,45px)]
                  aspect-square shrink-0 p-5 lg:p-10
                  rounded-full border-2 lg:border-4 border-[#011B40] 
                  text-[#011B40] font-bold flex items-center justify-center 
              `}
        >
          {index}
        </div>
      </div>
    );
  };

  return (
    <div className={`flex flex-col`}>
      <div className={`flex flex-row relative`}>
        <Image
          src={TuongVyUpward}
          alt="Tuong Vy Upward"
          className={`absolute w-8/19 h-auto object-cover bottom-[-3%] lg:bottom-[-7%] left-[50%] -translate-x-1/2 z-100`}
        />
        <div
          className={`w-1/2 pt-10 bg-[linear-gradient(to_bottom,#08377C_8%,#84BBE27D_85%,#FFFFFF00_100%)]  pr-5 lg:pr-0`}
        >
          <div
            className={`bg-clip-text bg-linear-to-br from-[#FFFFFF] to-[#999999] text-transparent
                text-[21px] lg:text-[clamp(20px,3.271px+4.257vw,85px)] font-extrabold ml-4 lg:ml-0 lg:mt-20 w-fit mx-auto`}
          >
            {lang == "Viet" ? "07 NĂNG LỰC" : "07 CORE "} <br />
            {lang == "Viet" ? "CỐT LÕI" : "COMPETENCIES"}
          </div>
          <div
            className={`flex flex-col mt-10 lg:mt-10 mb-50 gap-5 lg:gap-10 pl-[5%]`}
          >
            {renderLeftItem(
              "01",
              lang == "Viet"
                ? "Lãnh đạo trong xây dựng đội ngũ và phát triển năng lực"
                : "Leadership in Team Building and Capability Development",
              "lg:w-8/10",
            )}
            {renderLeftItem(
              "02",
              lang == "Viet"
                ? "Quản trị nhân sự dựa trên KPI"
                : "KPI-Driven Human Resource Management",
              "lg:w-4/5",
            )}
            {renderLeftItem(
              "03",
              lang == "Viet"
                ? "Xây dựng nền tảng và vận hành doanh nghiệp"
                : "Business Foundation Development and Operations",
              "lg:w-7/10",
            )}
          </div>
        </div>
        <div className={`w-1/2 pt-10 bg-[#E6F4FF] pl-5 lg:pl-0`}>
          <div
            className={`flex flex-col pr-[5%] w-full items-end mt-15 lg:mt-60 gap-5 lg:gap-10`}
          >
            {renderRightItem(
              "04",
              lang == "Viet"
                ? "Chuyển đổi số và hợp tác fintech"
                : "Digital Transformation and Fintech Collaboration",
              "lg:w-9/10",
            )}
            {renderRightItem(
              "05",
              lang == "Viet"
                ? "Phân tích chiến lược và để ra giải pháp"
                : "Strategic Analysis and Solution Design",
              "lg:w-6/10",
            )}
            {renderRightItem(
              "06",
              lang == "Viet"
                ? "Tối ưu chi phí và giám sát tài chính"
                : "Cost Optimization & Financial Oversight",
              "lg:w-6/10",
            )}
            {renderRightItem(
              "07",
              lang == "Viet"
                ? "Quản trị quan hệ đối tác và Đàm phán"
                : "Partnership Management and Negotiation",
              "lg:w-6/10",
            )}
          </div>
        </div>
      </div>
      <div
        className={`w-full relative flex items-center justify-center bg-[#E6F4FF]`}
      >
        <div
          className={`absolute w-full h-25 lg:h-100 bg-linear-to-b from-[#07367B] to-[#E6F4FF] top-0 left-0 z-10`}
        ></div>
        <Image
          src={TuongVyDownward}
          alt="Tuong Vy Downward"
          className={`absolute w-8/19 h-auto object-cover top-[-2%] lg:top-[-7%] left-[50%] -translate-x-1/2 z-30`}
        />
        <Image
          src={lang == "Viet" ? FinancialProfessor : FinancialProfessorEng}
          alt="Financial Professor"
          className={`w-8/10 h-auto object-cover my-10 lg:my-40 z-50`}
        />
        <Image
          src={BottomBg}
          alt="Bottom Background"
          className={`absolute w-full h-auto object-cover bottom-0 left-0`}
        />
      </div>
    </div>
  );
};

export default CoreValueSection;
