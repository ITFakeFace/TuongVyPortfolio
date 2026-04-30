"use client";
import React from "react";
import TuongVyUpward from "@/assets/images/assets/CoreValueSection-UpwardTuongVy-1.png";
import TuongVyDownward from "@/assets/images/assets/CoreValueSection-DownwardTuongVy-1.png";
import FinancialProfessor from "@/assets/images/assets/CoreValueSection-FinancialProfessor-1.png";
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
        <div className="">
          <p className="text-[clamp(10px,3.565px+1.637vw,35px)] text-white mt-2 font-semibold">
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
          <p className="text-[clamp(10px,3.565px+1.637vw,35px)] text-[#011B40] mt-2 font-semibold">
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
          className={`w-1/2 pt-10 bg-[linear-gradient(to_bottom,#08377C_8%,#84BBE27D_85%,#FFFFFF00_100%)] pl-[5%] pr-5 lg:pr-0`}
        >
          <div
            className={`bg-clip-text bg-linear-to-br from-[#FFFFFF] to-[#999999] text-transparent
                text-[clamp(20px,4.565px+3.929vw,80px)] font-bold lg:mt-20`}
          >
            {lang == "Viet" ? "07 NĂNG LỰC" : "07 NĂNG LỰC "} <br />
            {lang == "Viet" ? "CỐT LÕI" : "CỐT LÕI"}
          </div>
          <div className={`flex flex-col mt-10 lg:mt-30 mb-50 gap-10`}>
            {renderLeftItem(
              "01",
              lang == "Viet"
                ? "Lãnh đạo trong xây dựng đội ngũ và phát triển năng lực"
                : "Lãnh đạo trong xây dựng đội ngũ và phát triển năng lực",
              "lg:w-8/10",
            )}
            {renderLeftItem(
              "02",
              lang == "Viet"
                ? "Quản trị nhân sự dựa trên KPI"
                : "Quản trị nhân sự dựa trên KPI",
              "lg:w-4/5",
            )}
            {renderLeftItem(
              "03",
              lang == "Viet"
                ? "Xây dựng nền tảng và vận hành doanh nghiệp"
                : "Xây dựng nền tảng và vận hành doanh nghiệp",
              "lg:w-3/5",
            )}
          </div>
        </div>
        <div className={`w-1/2 pt-10 bg-[#E6F4FF] pl-5 lg:pl-0`}>
          <div
            className={`flex flex-col pr-[5%] w-full items-end mt-15 lg:mt-100 gap-10`}
          >
            {renderRightItem(
              "04",
              lang == "Viet"
                ? "Chuyển đổi số và hợp tác fintech"
                : "Chuyển đổi số và hợp tác fintech",
              "lg:w-9/10",
            )}
            {renderRightItem(
              "05",
              lang == "Viet"
                ? "Phân tích chiến lược và để ra giải pháp"
                : "Phân tích chiến lược và để ra giải pháp",
              "lg:w-6/10",
            )}
            {renderRightItem(
              "06",
              lang == "Viet"
                ? "Tối ưu chi phí và giám sát tài chính"
                : "Tối ưu chi phí và giám sát tài chính",
              "lg:w-1/2",
            )}
            {renderRightItem(
              "07",
              lang == "Viet"
                ? "Quản trị quan hệ đối tác và Đàm phán"
                : "Quản trị quan hệ đối tác và Đàm phán",
              "lg:w-1/2",
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
          src={FinancialProfessor}
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
