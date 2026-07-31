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
import ExpImage5 from "@/assets/images/assets/SharingExpSection-ExpImage-5.png";
import ExpImage6 from "@/assets/images/assets/SharingExpSection-ExpImage-6.png";
import ExpImage7 from "@/assets/images/assets/SharingExpSection-ExpImage-7.png";
import ExpImage8 from "@/assets/images/assets/SharingExpSection-ExpImage-8.png";
import ExpImage9 from "@/assets/images/assets/SharingExpSection-ExpImage-9.png";
import ExpImage10 from "@/assets/images/assets/SharingExpSection-ExpImage-10.png";
import ExpImage11 from "@/assets/images/assets/SharingExpSection-ExpImage-11.png";
import ExpImage12 from "@/assets/images/assets/SharingExpSection-ExpImage-12.png";
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
      image: ExpImage12,
      url: "https://www.linkedin.com/pulse/khi-payment-tr%E1%BB%9F-th%C3%A0nh-h%E1%BA%A1-t%E1%BA%A7ng-ni%E1%BB%81m-tin-c%E1%BB%A7a-th%C6%B0%C6%A1ng-m%E1%BA%A1i-tran--9kr4c/?trackingId=A6on6BVYRjGcieFcbbBfaA%3D%3D",
      text: {
        Viet: {
          title:
            "KHI PAYMENT TRỞ THÀNH HẠ TẦNG NIỀM TIN CỦA THƯƠNG MẠI ĐIỆN TỬ",
          description:
            "Cuộc chơi payment không còn là nhận tiền nhanh hơn, mà là biến dữ liệu giao dịch thành niềm tin, hồ sơ tài chính và lợi thế cạnh tranh cho cả doanh nghiệp lẫn hệ sinh thái.",
          author: "",
        },
        Eng: {
          title: "WHEN PAYMENTS BECOME THE TRUST INFRASTRUCTURE OF E-COMMERCE",
          description:
            "The future of payments is no longer about processing transactions faster. It is about transforming transaction data into trust, financial identity, and sustainable competitive advantages for businesses and the entire digital ecosystem.",
          author: "",
        },
      },
    },
    {
      image: ExpImage11,
      url: "https://www.linkedin.com/pulse/thanh-to%C3%A1n-s%E1%BB%91-kh%C3%B4ng-c%C3%B2n-l%C3%A0-chuy%E1%BB%87n-qu%E1%BA%B9t-qu%C3%A9t-chuy%E1%BB%83n-tran--4bd0c/?trackingId=SZSmCfVaR%2BG0KsdUoEAB9w%3D%3D",
      text: {
        Viet: {
          title: "THANH TOÁN SỐ KHÔNG CÒN LÀ CHUYỆN “QUẸT, QUÉT, CHUYỂN KHOẢN”",
          description:
            "Thanh toán số không còn chỉ là giao dịch. Mỗi lần quét QR đang tạo nên dữ liệu tài chính giúp ngân hàng, fintech và SME mở ra lợi thế cạnh tranh mới.",
          author: "",
        },
        Eng: {
          title:
            "DIGITAL PAYMENTS ARE NO LONGER JUST ABOUT “TAP, SCAN, AND TRANSFER”",
          description:
            "Digital payments have evolved far beyond transactions. Every QR code scan generates valuable financial data, empowering banks, fintech companies, and SMEs to unlock new competitive advantages.",
          author: "",
        },
      },
    },
    {
      image: ExpImage10,
      url: "https://www.linkedin.com/pulse/v%C3%AC-sao-momo-c%C3%B3-th%E1%BB%83-%C4%91%C6%B0%E1%BB%A3c-%C4%91%E1%BB%8Bnh-gi%C3%A1-tr%C3%AAn-2-t%E1%BB%B7-usd-thanh-n%E1%BB%AF-t%C6%B0%E1%BB%9Dng-vy-9zgvc/?trackingId=hKxF6hRJS5ae0F5rQi5N%2FQ%3D%3D",
      text: {
        Viet: {
          title: "VÌ SAO MOMO CÓ THỂ ĐƯỢC ĐỊNH GIÁ TRÊN 2 TỶ ĐÔ?",
          description:
            "Từ ví điện tử đến nền tảng tài chính số, MoMo phản ánh sự chuyển dịch của fintech Việt Nam: cạnh tranh bằng dữ liệu, niềm tin và khả năng tạo lợi nhuận sau thanh toán.",
          author: "",
        },
        Eng: {
          title: "WHY IS MOMO VALUED AT OVER $2 BILLION?",
          description:
            "From an e-wallet to a digital financial platform, MoMo's journey reflects the evolution of Vietnam’s fintech industry—where competitive advantage is driven by data, customer trust, and the ability to generate value beyond payments.",
          author: "",
        },
      },
    },
    {
      image: ExpImage9,
      url: "https://www.linkedin.com/pulse/16-c%C3%B4ng-ty-t%C3%A0i-ch%C3%ADnh-3-nh%C3%B3m-s%E1%BB%91-ph%E1%BA%ADn-b%E1%BB%A9c-tranh-finance-tran--dosgc/?trackingId=insIA1S1RX6Hk5k9PWnzlA%3D%3D",
      text: {
        Viet: {
          title:
            "16 CÔNG TY TÀI CHÍNH, 3 NHÓM SỐ PHẬN — BỨC TRANH CONSUMER FINANCE VN 2024–2025",
          description:
            "Sau 24 tháng biến động, thị trường tài chính tiêu dùng đã đổi cuộc chơi. Ai thực sự phục hồi, ai đang dẫn đầu và đâu là xu hướng sẽ định hình ngành trong những năm tới?",
          author: "",
        },
        Eng: {
          title:
            "16 FINANCE COMPANIES, 3 DIFFERENT PATHS — THE VIETNAM CONSUMER FINANCE LANDSCAPE 2024–2025",
          description:
            "After 24 months of market turbulence, Vietnam’s consumer finance industry has entered a new era. Who has truly recovered, who is leading the market, and what trends will shape the industry's next phase of growth?",
          author: "",
        },
      },
    },
    {
      image: ExpImage8,
      url: "https://www.linkedin.com/pulse/5000-sales-agents-v%C3%A0-b%C3%A0i-h%E1%BB%8Dc-v%E1%BB%81-m%C3%A1y-gi%E1%BA%A3i-ng%C3%A2n-quy-m%C3%B4-tran--sm1yc/?trackingId=4zAlpE7rSv%2BB%2B859xr5zhg%3D%3D",
      text: {
        Viet: {
          title: "5.000 SALES AGENT VÀ BÀI HỌC VỀ MÁY GIẢI NGÂN QUY MÔ LỚN",
          description:
            "Vì sao tuyển thêm người chưa chắc giúp tăng trưởng? Bài viết hé lộ tư duy vận hành bộ máy 5.000 sales, nơi hệ thống quyết định hiệu quả hơn con người.",
          author: "",
        },
        Eng: {
          title:
            "5,000 SALES AGENTS & THE LESSON OF BUILDING A LARGE-SCALE DISBURSEMENT MACHINE",
          description:
            "Why doesn't hiring more people always lead to growth? Discover the operating mindset behind a 5,000-member sales force, where scalable systems—not headcount—are the true drivers of performance.",
          author: "",
        },
      },
    },
    {
      image: ExpImage7,
      url: "https://www.linkedin.com/posts/tran-thanh-n%E1%BB%AF-t%C6%B0%E1%BB%9Dng-vy-a9252732_tranthanhnutuongvy-businessstrategy-growthstrategy-share-7476101957607272448-awPs/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAbXM04B5wAt7jD3LZeXek7C3-FJXDd2FuE",
      text: {
        Viet: {
          title: "KHÉP LẠI NỬA ĐẦU NĂM - ĐỂ TĂNG TỐC NỬA CUỐI NĂM",
          description:
            "Hãy khép lại 6 tháng đầu năm, hãy nhìn lại điều tạo giá trị, mạnh dạn bỏ việc kém hiệu quả và kiên trì thực thi để tạo tăng trưởng bền vững.",
          author: "",
        },
        Eng: {
          title: "CLOSING THE FIRST HALF TO ACCELERATE THE SECOND HALF",
          description:
            "As the first half of the year comes to a close, reflect on what truly creates value, eliminate what no longer works, and stay disciplined in execution to drive sustainable growth.",
          author: "",
        },
      },
    },
    // {
    //   image: ExpImage2,
    //   url: "https://nld.com.vn/toa-dam-xu-huong-va-giai-phap-cho-thi-truong-tuyen-dung-lao-dong-so-luong-lon-196240911091937972.htm",
    //   text: {
    //     Viet: {
    //       title:
    //         "TỌA ĐÀM: XU HƯỚNG VÀ GIẢI PHÁP CHO THỊ TRƯỜNG TUYỂN DỤNG LAO ĐỘNG SỐ LƯỢNG LỚN",
    //       description:
    //         "Nhấn mạnh các giải pháp như ứng dụng công nghệ trong tuyển dụng và nâng cao trải nghiệm nhân viên nhằm  tuyển dụng và giữ chân lao động số lượng lớn trong bối cảnh tỷ lệ nhảy việc cao, đặc biệt ở nhóm Gen Z.",
    //       author: "Báo Người Lao Động",
    //     },
    //     Eng: {
    //       title: "PANEL: TRENDS AND SOLUTIONS FOR MASS RECRUITMENT",
    //       description:
    //         "Emphasizing solutions such as applying technology in recruitment and enhancing employee experience to attract and retain large-scale workforces amid high job-hopping rates, especially among Gen Z.",
    //       author: "Nguoi Lao Dong Newspaper",
    //     },
    //   },
    // },
    {
      image: ExpImage3,
      url: "https://thitruongtaichinhtiente.vn/tap-chi-thi-truong-tai-chinh-tien-te-gap-mat-cong-tac-vien-tai-tp-ho-chi-minh-nam-2025-75663.html",
      text: {
        Viet: {
          title:
            "TẠP CHÍ THỊ TRƯỜNG TÀI CHÍNH TIỀN TỆ GẶP MẶT CỘNG TÁC VIÊN TẠI TP. HỒ CHÍ MÌNH NĂM 2025",
          description:
            "Sự kiện tri ân đội ngũ chuyên gia, cộng tác viên đã đóng góp bài viết chuyên sâu, đồng thời định hướng nội dung tuyên truyền về chính sách tiền tệ và chuyển đổi số ngành ngân hàng.",
          author: "Tạp chí Thị trường Tài Chính Tiền Tệ ",
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
    // {
    //   image: ExpImage5,
    //   url: "https://www.linkedin.com/posts/tran-thanh-nu-tuong-vy-a9252732_careerabrmentoring-careerabrcoaching-aiforwork-activity-7461348799202906113-MeIZ?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD1t6NcB8uGFvBjMG1iEdjvS794c0SIPOq0",
    //   text: {
    //     Viet: {
    //       title:
    //         "THẾ HỆ TRẺ KHÔNG THIẾU KIẾN THỨC, HỌ CẦN MÔI TRƯỜNG ĐỂ TƯ DUY VÀ PHẢN BIỆN",
    //       description:
    //         "Người trẻ hôm nay giàu kiến thức số, nhưng giá trị lớn nhất nằm ở khả năng phản biện, tư duy thực chiến; AI và học tương tác đang thúc đẩy điều đó.",
    //       author: "",
    //     },
    //     Eng: {
    //       title: "YOUNG PEOPLE NEED MORE THAN KNOWLEDGE",
    //       description:
    //         "Today’s young generation is rich in digital knowledge, but their greatest value lies in critical thinking and practical problem-solving; AI and interactive learning are accelerating this transformation.",
    //       author: "",
    //     },
    //   },
    // },
    {
      image: ExpImage6,
      url: "https://www.youtube.com/watch?v=sP8gAklm8bQ",
      text: {
        Viet: {
          title: "[WE SAY, WE SHARE SEASON 1] TRÒ CHUYỆN VỀ PHỤ NỮ THỜI 4.0",
          description:
            "Nhấn mạnh bí quyết của người phụ nữ hiện đại đạt thành công và giữ sự bình yên nằm ở khả năng tự nhận thức, thói quen rèn luyện thân thể và tư duy chủ động thay đổi để thích nghi trước những định kiến giới hay áp lực cuộc sống.",
          author: "",
        },
        Eng: {
          title:
            "[WE SAY, WE SHARE SEASON 1] CONVERSATIONS ABOUT WOMEN IN THE 4.0 ERA",
          description:
            "Highlighting how modern women achieve success and maintain inner balance through self-awareness, physical well-being, and a proactive mindset to adapt and thrive amid gender stereotypes and life pressures.",
          author: "",
        },
      },
    },
  ];
  const renderSharingExpCarouselItems = (item: SharingExpItemProps) => {
    return (
      <div className="font-sans w-9/10 lg:w-full h-full flex flex-col gap-5 md:flex-row md:gap-10 md:items-stretch mx-auto my-auto px-2 text-white">
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
    <div
      className={`${styles.container} mt-30 lg:mt-30 mb-8 lg:mb-40`}
      id="sharing-exp"
    >
      <div
        className={` bg-clip-text bg-linear-to-r from-[#FFFFFF] to-[#999999] lg:pb-10
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
    </div>
  );
};

export default SharingExpSection;
