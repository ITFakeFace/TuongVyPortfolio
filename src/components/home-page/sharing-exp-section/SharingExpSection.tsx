"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import styles from "./SharingExpSection.module.scss";
import { Carousel } from "primereact/carousel";
import ExpImage1 from "@/assets/images/assets/SharingExpSection-ExpImage-1.png";
import ExpImage2 from "@/assets/images/assets/SharingExpSection-ExpImage-2.png";
import ExpImage3 from "@/assets/images/assets/SharingExpSection-ExpImage-3.png";
import ExpImage4 from "@/assets/images/assets/SharingExpSection-ExpImage-4.png";
import ImageGroup from "@/assets/images/assets/SharingExpSection-ImageGroup-1.png";
import { Button } from "primereact/button";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
          description:
            "Emphasizing solutions such as applying technology in recruitment and enhancing employee experience to attract and retain large-scale workforces amid high job-hopping rates, especially among Gen Z.",
          author: "Nguoi Lao Dong Newspaper",
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
          description:
            "An appreciation event for experts and contributors who have delivered in-depth articles, while also setting directions for communication on monetary policy and digital transformation in the banking sector.",
          author: "Financial & Monetary Market Magazine",
        },
      },
    },
    {
      image: ExpImage4,
      url: "https://www.linkedin.com/posts/tran-thanh-nu-tuong-vy-a9252732_bnpl-digitalbanking-consumerfinance-activity-7459776646338863105-yi7y?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD1t6NcB8uGFvBjMG1iEdjvS794c0SIPOq0",
      text: {
        Viet: {
          title: "NGÂN HÀNG SỐ, TÀI CHÍNH SỐ - BNPL LÀ GÌ? (BUY NOW PAY LATER)",
          description:
            "BNPL không chỉ là Buy Now Pay Later mà là động lực tăng trưởng mới của tài chính số: thúc đẩy tiêu dùng tức thời, mở rộng tín dụng, nhưng thành công dài hạn phụ thuộc vào quản trị rủi ro, dữ liệu và khả năng tích hợp hệ sinh thái.",
          author: "",
        },
        Eng: {
          title:
            "DIGITAL BANKING & DIGITAL FINANCE – WHAT IS BNPL (BUY NOW, PAY LATER)?",
          description:
            "BNPL is not just Buy Now, Pay Later—it is a new growth driver for digital finance, enabling instant consumption and expanding credit access. Long-term success, however, depends on risk management, data capabilities, and ecosystem integration.",
          author: "",
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

        <div className="w-full md:w-3/7 md:flex-1 flex flex-col items-start gap-3 md:gap-8 4xl:gap-10 my-auto">
          <div className="w-full font-bold leading-loose lg:leading-relaxed text-[0.875rem] lg:text-[clamp(1.5rem,0.375rem+1.1719vw,2.25rem)] text-center lg:text-left">
            {item.text[lang].title}
          </div>

          <div className="flex flex-col gap-2 md:gap-3 text-justify md:mr-2 text-[0.75rem] lg:text-[clamp(1rem,-0.125rem+1.1719vw,1.75rem)]">
            {item.text[lang].author != "" && (
              <div className="leading-loose text-left">
                <span className="font-semibold ">
                  {lang == "Viet" ? "Đơn vị đăng tin: " : "Organizer: "}
                </span>
                {item.text[lang].author}
              </div>
            )}
            <div className="leading-loose text-left">
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
            <div
              className={`bg-linear-to-r from-[#07367B] from-69% to-[#1F2833] text-[12px] lg:text-[clamp(1rem,-0.125rem+1.1719vw,1.75rem)] border-2 border-white px-10 py-2 lg:px-20 4xl:px-30 lg:py-3 font-bold rounded-full`}
            >
              {lang == "Viet" ? "XEM THÊM BÀI VIẾT" : "READ THE ARTICLE"}
            </div>
          </a>
        </div>
      </div>
    );
  };

  return (
    <div className={`${styles.container}`}>
      <div
        className={`pt-10 lg:pt-30 bg-clip-text bg-linear-to-r from-[#FFFFFF] to-[#999999] lg:pb-10
        text-transparent lg:px-[15%] text-center lg:text-left text-[24px] lg:text-[clamp(2.5rem,-0.5rem+3.125vw,4.5rem)] font-extrabold `}
      >
        {lang === "Viet"
          ? "GÓC NHÌN NGHỀ TÀI CHÍNH"
          : "FINANCE CAREER INSIGHTS"}
      </div>
      <div
        className={`${styles.carouselWrapper} w-9/10! lg:w-full! mx-auto mt-5 lg:mt-10`}
      >
        <div className="">
          <Carousel
            value={sharingExpItems}
            itemTemplate={renderSharingExpCarouselItems}
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
      <div className={`mt-10 lg:mt-30`}>
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
