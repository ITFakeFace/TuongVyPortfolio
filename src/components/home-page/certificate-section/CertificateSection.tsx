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
import CertificateImage6 from "@/assets/images/assets/CertificateSection-CertificateImage-6.png";
import CertificateImage7 from "@/assets/images/assets/CertificateSection-CertificateImage-7.png";
import CertificateImage8 from "@/assets/images/assets/CertificateSection-CertificateImage-8.png";
import CertificateImage9 from "@/assets/images/assets/CertificateSection-CertificateImage-9.png";
import PartnerCertificateImage1 from "@/assets/images/assets/CertificateSection-PartnerCertificateImage-1.png";
import PartnerCertificateImage2 from "@/assets/images/assets/CertificateSection-PartnerCertificateImage-2.png";
import PartnerCertificateImage3 from "@/assets/images/assets/CertificateSection-PartnerCertificateImage-3.png";
import PartnerCertificateImage4 from "@/assets/images/assets/CertificateSection-PartnerCertificateImage-4.png";
import PartnerCertificateImage5 from "@/assets/images/assets/CertificateSection-PartnerCertificateImage-5.png";
import FilmStrip from "@/components/generals/FilmStrip";
import { Button } from "primereact/button";
import { Carousel } from "primereact/carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

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
    CertificateImage6,
    CertificateImage9,
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
            "Certified Professional Coach after a 3-month program, delivering 1-on-1 coaching sessions to unlock and develop high-potential leaders.",
        },
      },
    },
    {
      image: CertificateImage7,
      text: {
        Viet: {
          title: "MIDDLE MANAGER MINDSET",
          author: "Top Pion",
          description:
            "Thay đổi tư duy quản lý bằng mô hình NLP, phá bỏ giới hạn bản thân, chuyển đổi từ thực thi sang lãnh đạo chiến lược và quản trị sự thay đổi.",
        },
        Eng: {
          title: "MIDDLE MANAGER MINDSET",
          author: "Top Pion",
          description:
            "Transforming management mindset through NLP models—breaking personal limitations and transitioning from execution to strategic leadership and change management.",
        },
      },
    },
    {
      image: CertificateImage8,
      text: {
        Viet: {
          title: "LEADERSHIP EXCELLENCE",
          author: "New Mind Academy",
          description:
            "trang bị tư duy lãnh đạo đột phá, kỹ năng truyền cảm hứng, xây dựng đội ngũ và quản trị thay đổi, giúp nhà quản lý tối ưu hiệu suất và khẳng định vị thế dẫn dắt.",
        },
        Eng: {
          title: "LEADERSHIP EXCELLENCE",
          author: "New Mind Academy",
          description:
            "Equipping breakthrough leadership thinking, inspirational communication, team building, and change management—enabling leaders to optimize performance and strengthen their leadership presence.",
        },
      },
    },
  ];

  const renderCcertificateCarouselItems = (item: CertificateCarouselProps) => {
    return (
      <div className="w-8/10 lg:w-full h-full flex flex-col gap-5 md:flex-row md:gap-10 md:items-stretch mx-auto my-auto px-2 text-white">
        <div className="w-full md:w-4/7 flex-none flex items-center justify-center">
          <Image
            src={item.image}
            alt="Certificate Image"
            className="w-full h-auto object-contain" // Dùng contain để ảnh không bị cắt khi khung cố định
          />
        </div>

        <div className="w-full md:w-3/7 md:flex-1 flex flex-col items-start gap-3 md:gap-5 my-auto">
          <div className="w-full font-bold leading-snug text-[16px] lg:text-[clamp(1.75rem,0.25rem+1.5625vw,2.75rem)] text-center lg:text-left">
            {item.text[lang].title}
          </div>

          <div className="flex flex-col gap-2 md:gap-3 text-justify md:mr-2 text-[14px] font-light lg:text-[clamp(1.25rem,0.125rem+1.1719vw,2rem)]">
            <div className=" leading-loose ">
              <span className="font-semibold text-left">
                {lang == "Viet" ? "Đơn vị cấp bằng: " : "Issued by: "}
              </span>
              {item.text[lang].author}
            </div>

            <div className="leading-loose text-left">
              <span className="font-semibold ">
                {lang == "Viet" ? "Nội dung: " : "Content: "}
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
        src={PartnerCertificateImage4}
        alt="Partner Certificate 1"
        className="h-[200px] lg:h-[clamp(25rem,-3.125rem+29.2969vw,43.75rem)] w-auto object-contain"
      />
      <Image
        src={PartnerCertificateImage5}
        alt="Partner Certificate 2"
        className="h-[200px] lg:h-[clamp(25rem,-3.125rem+29.2969vw,43.75rem)] w-auto object-contain"
      />
    </div>,
    <div className={`flex flex-row justify-around`}>
      <Image
        src={PartnerCertificateImage3}
        alt="Partner Certificate 1"
        className="h-[200px] lg:h-[clamp(25rem,-3.125rem+29.2969vw,43.75rem)] w-auto object-contain"
      />
      <Image
        src={PartnerCertificateImage2}
        alt="Partner Certificate 2"
        className="h-[200px] lg:h-[clamp(25rem,-3.125rem+29.2969vw,43.75rem)] w-auto object-contain"
      />
    </div>,
    <div className={`w-full flex justify-around`}>
      <Image
        src={PartnerCertificateImage1}
        alt="Partner Certificate 3"
        className=" h-[200px] lg:h-[clamp(25rem,-3.125rem+29.2969vw,43.75rem)] w-auto object-contain"
      />
    </div>,
  ];

  const renderPartnerCerts = (item: React.ReactNode) => {
    return item;
  };

  return (
    <div
      className={`${styles.container} -my-100 w-full min-h-screen relative z-30 pb-20 lg:pb-0 pt-15 lg:pt-30 rounded-[70px] lg:rounded-[201px] shadow-[20px_-10px_10px_0px_rgba(0,0,0,0.3)]`}
    >
      <div
        className={`4xl:pt-20 bg-clip-text bg-linear-to-r from-[#FFFFFF] from-19% to-[#999999] 
        text-transparent text-[1.5rem] lg:text-[clamp(3rem,0.75rem+2.3438vw,4.5rem)] font-extrabold text-center ${styles.title}`}
      >
        {lang === "Viet" ? "THÀNH TỰU SỰ NGHIỆP" : " CAREER ACHIEVEMENTS"}
      </div>
      <div
        className={`text-white font-playfair text-center px-4 w-8/10 lg:w-full mx-auto text-[0.625rem] lg:text-[clamp(1rem,0.25rem+0.7813vw,1.5rem)] font-medium`}
      >
        {lang === "Viet"
          ? "Mỗi hành trình trải qua đều mang theo giá trị ý nghĩa được chứng nhận bởi các đơn vị, doanh nghiệp đồng hành"
          : "Every journey carries meaningful value, recognized by partner organizations and businesses."}
      </div>
      <div className={`mt-10 lg:mt-20 lg:mb-30`}>
        <FilmStrip
          items={certificates}
          gap={`gap-5 lg:gap-10`}
          className={`overflow-visible overflow-x-clip!`}
          itemClassName={`w-[400px] lg:w-[700px] 4xl:w-[1000px] h-auto rounded-2xl lg:rounded-4xl object-cover my-auto hover:scale-130 hover:z-30 transition-transform duration-300`}
        />
      </div>
      <div
        className={`pt-50 lg:pt-20 4xl:pt-60 bg-clip-text bg-linear-to-r from-[#FFFFFF] from-19% to-[#999999] 
          text-transparent lg:px-[15%] flex flex-col items-center justify-center lg:items-start`}
      >
        <div
          className={`text-center lg:text-left text-[1.5rem] lg:text-[clamp(3rem,0.75rem+2.3438vw,4.5rem)] font-extrabold`}
        >
          {lang === "Viet" ? "GIẤY CHỨNG NHẬN" : "CERTIFICATION"}
        </div>
        <div
          className={`font-playfair w-8/10 lg:w-full text-white text-center lg:text-left px-4 text-[0.625rem] lg:text-[clamp(1rem,0.25rem+0.7813vw,1.5rem)] font-medium mx-0 lg:mx-auto`}
        >
          {lang === "Viet"
            ? "Minh chứng cụ thể từ các đơn vị đào tạo cho những kỹ năng “làm nghề” quan trọng"
            : "Tangible validation from training institutions for essential professional competencies."}
        </div>
      </div>
      <div
        className={`${styles.carouselWrapper} w-9/10 lg:w-full mx-auto mt-5 lg:mt-20`}
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
            prevIcon={
              <FontAwesomeIcon
                icon={faArrowLeft}
                className={`text-sm lg:text-[clamp(1.5rem,-0.75rem+2.3438vw,3rem)]`}
              />
            }
            nextIcon={
              <FontAwesomeIcon
                icon={faArrowRight}
                className={`text-sm lg:text-[clamp(1.5rem,-0.75rem+2.3438vw,3rem)]`}
              />
            }
            className="w-full"
          />
        </div>
      </div>
      <div
        className={`mt-50 lg:mt-60 4xl:mt-80 bg-clip-text bg-linear-to-r from-[#FFFFFF] from-19% to-[#999999] 
          text-transparent lg:mx-40 flex flex-col items-center justify-center`}
      >
        <div
          //   className={`text-center text-[clamp(25px,8.28px+4.254vw,90px)] font-extrabold`}
          className={`text-center text-[1.5rem] lg:text-[clamp(3rem,0.75rem+2.3438vw,4.5rem)] font-extrabold`}
        >
          {lang === "Viet" ? "CHỨNG NHẬN ĐỒNG HÀNH" : "CERTIFIED PARTNERSHIPS"}
        </div>
        <div
          className={`font-playfair text-white text-center px-4 w-9/10 lg:w-20/20 mx-auto text-[0.625rem] lg:text-[clamp(1rem,0.25rem+0.7813vw,1.5rem)] font-medium`}
        >
          {lang === "Viet"
            ? "Mỗi hành trình trải qua đều mang theo giá trị ý nghĩa được chứng nhận bởi các đơn vị, doanh nghiệp đồng hành."
            : "Every journey is marked by meaningful value, recognized and validated by partner organizations and businesses"}
        </div>
      </div>
      <div
        className={`${styles.carouselWrapper2} w-9/10! mx-auto mt-10 lg:mt-20 pb-20 lg:pb-30`}
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
