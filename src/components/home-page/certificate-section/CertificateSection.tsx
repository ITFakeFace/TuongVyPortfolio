"use client";
import React from "react";
import styles from "./CertificateSection.module.scss";
import Image, { StaticImageData } from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import CertificateImage1 from "@/assets/images/assets/CertificateSection-CertificateImage-1.png";
import CertificateImage2 from "@/assets/images/assets/CertificateSection-CertificateImage-2.png";
import CertificateImage3 from "@/assets/images/assets/CertificateSection-CertificateImage-3.png";
import CertificateImage4 from "@/assets/images/assets/CertificateSection-CertificateImage-4.png";
import CertificateImage5 from "@/assets/images/assets/CertificateSection-CertificateImage-5.png";
import PartnerCertificateImage1 from "@/assets/images/assets/CertificateSection-PartnerCertificateImage-1.png";
import PartnerCertificateImage2 from "@/assets/images/assets/CertificateSection-PartnerCertificateImage-2.png";
import PartnerCertificateImage3 from "@/assets/images/assets/CertificateSection-PartnerCertificateImage-3.png";
import FilmStrip from "@/components/generals/FilmStrip";
import { Button } from "primereact/button";
import { Carousel } from "primereact/carousel";

interface CertificateCarouselProps {
  image: string | StaticImageData;
  text: {
    Eng: {
      title: string;
      author: string;
      description: string;
    };
    Viet: {
      title: string;
      author: string;
      description: string;
    };
  };
}

const CertificateSection = () => {
  const { lang } = useLanguage();
  const certificates = [
    CertificateImage1,
    CertificateImage2,
    CertificateImage3,
    CertificateImage4,
    CertificateImage5,
  ];
  const certificateCarouselItems: CertificateCarouselProps[] = [
    {
      image: CertificateImage5,
      text: {
        Viet: {
          title: "PROFESSIONAL COACHING FOUNDATION",
          author: "Mind Coach Global",
          description:
            "Nhà khai vấn chuyên nghiệp trải qua 03 tháng đào tạo với các phiên Coach 1 - 1 giúp khai phóng và phát triển nhiều lãnh đạo tiềm năng.",
        },
        Eng: {
          title: "PROFESSIONAL COACHING FOUNDATION",
          author: "Mind Coach Global",
          description:
            "Nhà khai vấn chuyên nghiệp trải qua 03 tháng đào tạo với các phiên Coach 1 - 1 giúp khai phóng và phát triển nhiều lãnh đạo tiềm năng.",
        },
      },
    },
  ];

  const renderCcertificateCarouselItems = (item: CertificateCarouselProps) => {
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
            <div className=" leading-relaxed">
              <span className="font-semibold text-left">
                {lang == "Viet" ? "Đơn vị cấp bằng: " : "Đơn vị cấp bằng: "}
              </span>
              {item.text[lang].author}
            </div>

            <div className="leading-relaxed text-left">
              <span className="font-semibold ">
                {lang == "Viet" ? "Nội dung: " : "Nội dung: "}
              </span>
              {item.text[lang].description}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const partnerCerts = [
    <div className={`flex flex-row justify-around`}>
      <Image
        src={PartnerCertificateImage3}
        alt="Partner Certificate 1"
        className="h-[clamp(200px,122.724px+19.659vw,500px)] w-auto object-contain"
      />
      <Image
        src={PartnerCertificateImage2}
        alt="Partner Certificate 2"
        className="h-[clamp(200px,122.724px+19.659vw,500px)] w-auto object-contain"
      />
    </div>,
    <div className={`w-full flex justify-around`}>
      <Image
        src={PartnerCertificateImage1}
        alt="Partner Certificate 3"
        className=" h-[clamp(200px,122.724px+19.659vw,500px)] w-auto object-contain"
      />
    </div>,
  ];

  const renderPartnerCerts = (item: React.ReactNode) => {
    return item;
  };

  return (
    <div
      className={`${styles.container} -my-100 w-full min-h-screen relative z-30 pt-15 lg:pt-30 rounded-[70px] lg:rounded-[201px] shadow-[20px_-10px_10px_0px_rgba(0,0,0,0.3)]`}
    >
      <div
        className={`bg-clip-text bg-linear-to-r from-[#FFFFFF] from-19% to-[#999999] 
        text-transparent text-[clamp(25px,8.28px+4.254vw,90px)] font-extrabold text-center ${styles.title} text-white `}
      >
        {lang === "Viet" ? "THÀNH TỰU SỰ NGHIỆP" : "THÀNH TỰU SỰ NGHIỆP"}
      </div>
      <div
        className={`text-white text-center px-4 w-8/10 lg:w-11/20 mx-auto text-[clamp(10px,6.136px+0.982vw,25px)] font-medium`}
      >
        {lang === "Viet"
          ? "Mỗi hành trình trải qua đều mang theo giá trị ý nghĩa được chứng nhận bởi các đơn vị, doanh nghiệp đồng hành"
          : "Mỗi hành trình trải qua đều mang theo giá trị ý nghĩa được chứng nhận bởi các đơn vị, doanh nghiệp đồng hành"}
      </div>
      <div className={`mt-10`}>
        <FilmStrip
          items={certificates}
          gap={`gap-5 lg:gap-10`}
          className={``}
          itemClassName={`w-[400px] lg:w-[700px] h-auto rounded-2xl lg:rounded-4xl object-cover my-auto`}
        />
      </div>
      <div
        className={`mt-10 lg:mt-20 bg-clip-text bg-linear-to-r from-[#FFFFFF] from-19% to-[#999999] 
        text-transparent lg:mx-40 flex flex-col items-center justify-center lg:items-start`}
      >
        <div
          className={`text-center lg:text-left text-[clamp(25px,8.28px+4.254vw,90px)] font-extrabold`}
        >
          {lang === "Viet" ? "GIẤY CHỨNG NHẬN" : "CERTIFICATES"}
        </div>
        <div
          className={`w-8/10 lg:w-full text-white text-center lg:text-left px-4 text-[clamp(10px,6.136px+0.982vw,25px)] font-medium mx-0 lg:mx-auto`}
        >
          {lang === "Viet"
            ? "Minh chứng cụ thể từ các đơn vị đào tạo cho những kỹ năng “làm nghề” quan trọng"
            : "Minh chứng cụ thể từ các đơn vị đào tạo cho những kỹ năng “làm nghề” quan trọng"}
        </div>
      </div>
      <div
        className={`${styles.carouselWrapper} w-9/10! mx-auto mt-5 lg:mt-10`}
      >
        <div className="">
          <Carousel
            value={certificateCarouselItems} // Đã sửa Harvard đúng chính tả
            itemTemplate={renderCcertificateCarouselItems}
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
      <div
        className={`mt-10 lg:mt-20 bg-clip-text bg-linear-to-r from-[#FFFFFF] from-19% to-[#999999] 
        text-transparent lg:mx-40 flex flex-col items-center justify-center`}
      >
        <div
          //   className={`text-center text-[clamp(25px,8.28px+4.254vw,90px)] font-extrabold`}
          className={`text-center text-[clamp(20px,1.987px+4.584vw,90px)] font-extrabold`}
        >
          {lang === "Viet" ? "CHỨNG NHẬN ĐỒNG HÀNH" : "CHỨNG NHẬN ĐỒNG HÀNH"}
        </div>
      </div>
      <div
        className={`${styles.carouselWrapper} w-9/10! mx-auto mt-5 lg:mt-10 pb-20 lg:pb-30`}
      >
        <div className="">
          <Carousel
            value={partnerCerts} // Đã sửa Harvard đúng chính tả
            itemTemplate={renderPartnerCerts} // Vì partnerCerts đã là JSX element, nên chỉ cần trả về item
            showIndicators={false}
            showNavigators={false}
            numVisible={2}
            numScroll={1}
            // 2. RESPONSIVE ĐỂ ĐIỀU CHỈNH KHI MÀN HÌNH NHỎ LẠI
            responsiveOptions={[
              {
                breakpoint: "1024px", // Dưới 1024px (Tablet) vẫn hiện 2
                numVisible: 2,
                numScroll: 1,
              },
              {
                breakpoint: "767px", // Dưới 767px (Mobile) hiện 1
                numVisible: 1,
                numScroll: 1,
              },
            ]}
            circular
            autoplayInterval={5000}
            prevIcon={<i className="pi pi-chevron-left text-3xl!" />}
            nextIcon={<i className="pi pi-chevron-right text-3xl!" />}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default CertificateSection;
