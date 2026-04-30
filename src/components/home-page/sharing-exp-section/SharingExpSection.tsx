"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import styles from "./SharingExpSection.module.scss";
import { Carousel } from "primereact/carousel";
import ExpImage1 from "@/assets/images/assets/SharingExpSection-ExpImage-1.png";
import ImageGroup from "@/assets/images/assets/SharingExpSection-ImageGroup-1.png";

interface SharingExpItemProps {
  image: string | StaticImageData;
  text: {
    Viet: {
      title: string;
      description: string;
    };
    Eng: {
      title: string;
      description: string;
    };
  };
}

const SharingExpSection = () => {
  const { lang } = useLanguage();

  const sharingExpItems: SharingExpItemProps[] = [
    {
      image: ExpImage1,
      text: {
        Viet: {
          title: "TÊN TIÊU ĐỀ",
          description: "NỘI DUNG",
        },
        Eng: {
          title: "TÊN TIÊU ĐỀ",
          description: "NỘI DUNG",
        },
      },
    },
  ];
  const renderSharingExpCarouselItems = (item: SharingExpItemProps) => {
    return (
      <div className="w-9/10 lg:w-full h-full flex flex-col gap-5 md:flex-row md:gap-10 md:items-stretch mx-auto my-auto px-2 text-white">
        <div className="w-full md:w-4/7 flex-none flex items-center justify-center">
          <Image
            src={item.image}
            alt="Certificate Image"
            className="w-full h-auto object-contain" // Dùng contain để ảnh không bị cắt khi khung cố định
          />
        </div>

        <div className="w-full md:w-3/7 md:flex-1 flex flex-col items-start gap-3 md:gap-10 my-auto">
          <div className="w-full font-bold leading-snug text-[clamp(25px,18.565px+1.637vw,50px)] text-center lg:text-left">
            {item.text[lang].title}
          </div>

          <div className="flex flex-col gap-2 md:gap-3 text-justify md:mr-2 text-[clamp(15px,11.136px+0.982vw,30px)]">
            <div className="leading-relaxed text-left">
              <span className="font-semibold ">
                {lang == "Viet" ? "Nội dung chia sẻ: " : "Nội dung chia sẻ: "}
              </span>
              {item.text[lang].description}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={`bg-linear-to-b from-[#0957C9] to-[#1F2833]`}>
      <div
        className={`pt-10 lg:pt-20 bg-clip-text bg-linear-to-r from-[#FFFFFF] from-19% to-[#999999] 
        text-transparent lg:mx-30 text-center lg:text-left text-[clamp(25px,8.28px+4.254vw,90px)] font-extrabold `}
      >
        {lang === "Viet" ? "CHIA SẺ CHUYỆN NGHỀ" : "CHIA SẺ CHUYỆN NGHỀ"}
      </div>
      <div
        className={`${styles.carouselWrapper} w-9/10! mx-auto mt-5 lg:mt-10`}
      >
        <div className="">
          <Carousel
            value={sharingExpItems} // Đã sửa Harvard đúng chính tả
            itemTemplate={renderSharingExpCarouselItems}
            showIndicators={false}
            numVisible={1}
            numScroll={1}
            circular
            autoplayInterval={8000}
            prevIcon={<i className="pi pi-chevron-left text-3xl!" />}
            nextIcon={<i className="pi pi-chevron-right text-3xl!" />}
            className="w-full"
          />
        </div>
      </div>
      <div className={`mt-10 lg:mt-15`}>
        <Image
          src={ImageGroup}
          alt="Image Group"
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default SharingExpSection;
