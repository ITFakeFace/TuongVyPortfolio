"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import styles from "./SharingExpSection.module.scss";
import { Carousel } from "primereact/carousel";
import ExpImage1 from "@/assets/images/assets/SharingExpSection-ExpImage-1.png";
import ExpImage2 from "@/assets/images/assets/SharingExpSection-ExpImage-2.png";
import ExpImage3 from "@/assets/images/assets/SharingExpSection-ExpImage-3.png";
import ImageGroup from "@/assets/images/assets/SharingExpSection-ImageGroup-1.png";
import { Button } from "primereact/button";

interface SharingExpItemProps {
  image: string | StaticImageData;
  url?: string;
  text: {
    Viet: {
      title: string;
      description: string;
      author: string;
    };
    Eng: {
      title: string;
      description: string;
      author: string;
    };
  };
}

const SharingExpSection = () => {
  const { lang } = useLanguage();

  const sharingExpItems: SharingExpItemProps[] = [
    {
      image: ExpImage2,
      url: "https://nld.com.vn/toa-dam-xu-huong-va-giai-phap-cho-thi-truong-tuyen-dung-lao-dong-so-luong-lon-196240911091937972.htm",
      text: {
        Viet: {
          title:
            "TỌA ĐÀM: XU HƯỚNG VÀ GIẢI PHÁP CHO THỊ TRƯỜNG TUYỂN DỤNG LAO ĐỘNG SỐ LƯỢNG LỚN",
          description: "Báo Người Lao Động",
          author:
            "Nhấn mạnh các giải pháp như ứng dụng công nghệ trong tuyển dụng và nâng cao trải nghiệm nhân viên nhằm  tuyển dụng và giữ chân lao động số lượng lớn trong bối cảnh tỷ lệ nhảy việc cao, đặc biệt ở nhóm Gen Z.",
        },
        Eng: {
          title: "PANEL: TRENDS AND SOLUTIONS FOR MASS RECRUITMENT",
          description: "Nguoi Lao Dong Newspaper",
          author:
            "Emphasizing solutions such as applying technology in recruitment and enhancing employee experience to attract and retain large-scale workforces amid high job-hopping rates, especially among Gen Z.",
        },
      },
    },
    {
      image: ExpImage3,
      url: "https://thitruongtaichinhtiente.vn/tap-chi-thi-truong-tai-chinh-tien-te-gap-mat-cong-tac-vien-tai-tp-ho-chi-minh-nam-2025-75663.html",
      text: {
        Viet: {
          title:
            "TẠP CHÍ THỊ TRƯỜNG TÀI CHÍNH TIỀN TỆ GẶP MẶT CỘNG TÁC VIÊN TẠI TP. HỒ CHÍ MÌNH NĂM 2025",
          description: "Tạp chí Thị trường Tài Chính Tiền Tệ ",
          author:
            "Sự kiện tri ân đội ngũ chuyên gia, cộng tác viên đã đóng góp bài viết chuyên sâu, đồng thời định hướng nội dung tuyên truyền về chính sách tiền tệ và chuyển đổi số ngành ngân hàng.",
        },
        Eng: {
          title:
            "FINANCIAL & MONETARY MARKET MAGAZINE – CONTRIBUTORS MEETUP IN HO CHI MINH CITY 2025",
          description: "Financial & Monetary Market Magazine",
          author:
            "An appreciation event for experts and contributors who have delivered in-depth articles, while also setting directions for communication on monetary policy and digital transformation in the banking sector.",
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
          <div className="w-full font-bold leading-snug text-[clamp(15px,9.853px+1.31vw,35px)] text-center lg:text-left">
            {item.text[lang].title}
          </div>

          <div className="flex flex-col gap-2 md:gap-3 text-justify md:mr-2 text-[clamp(12px,8.654px+0.851vw,25px)]">
            <div className="leading-relaxed text-left">
              <span className="font-semibold ">
                {lang == "Viet" ? "Đơn vị đăng tin: " : "Organizer: "}
              </span>
              {item.text[lang].author}
            </div>
            <div className="leading-relaxed text-left">
              <span className="font-semibold ">
                {lang == "Viet" ? "Nội dung chia sẻ: " : "Content: "}
              </span>
              {item.text[lang].description}
            </div>
          </div>
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`mx-auto`}
          >
            <Button
              unstyled
              className={`bg-linear-to-r from-[#0B54BE] to-[#1F2833] text-[15px] lg:text-[25px] border-2 border-white px-10 py-2 lg:px-15 lg:py-3 font-bold rounded-2xl lg:rounded-3xl`}
              label={lang == "Viet" ? "XEM BÀI VIẾT" : "READ THE ARTICLE"}
            />
          </a>
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
        {lang === "Viet" ? "TỌA ĐÀM NỔI BẬT" : "FEATURED PANEL DISCUSSIONS"}
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
