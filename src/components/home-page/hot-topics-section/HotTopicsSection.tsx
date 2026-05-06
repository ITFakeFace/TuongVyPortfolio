"use client";
import { useLanguage } from "@/context/LanguageContext";
import styles from "./HotTopicsSection.module.scss";
import { cl } from "@/utils/cn";
import HotTopicImage from "@/assets/images/assets/HotTopicsSection-HotTopicImage-1.png";
import TuongVyImage from "@/assets/images/assets/HotTopicsSection-TuongVyImage-1.png";
import TuongVyImage3 from "@/assets/images/assets/HotTopicsSection-TuongVyImage-3.png";
import TuongVyImage2 from "@/assets/images/assets/HotTopicsSection-TuongVyImage-2.png";
import PartnerImage1 from "@/assets/images/assets/HotTopicsSection-PartnerImage-1.png";
import PartnerImage2 from "@/assets/images/assets/HotTopicsSection-PartnerImage-2.png";
import PartnerImage3 from "@/assets/images/assets/HotTopicsSection-PartnerImage-3.png";
import PartnerImage4 from "@/assets/images/assets/HotTopicsSection-PartnerImage-4.png";
import PartnerImage5 from "@/assets/images/assets/HotTopicsSection-PartnerImage-5.png";
import PartnerImage6 from "@/assets/images/assets/HotTopicsSection-PartnerImage-6.png";
import YoungPartnerImage1 from "@/assets/images/assets/HotTopicsSection-YoungPartnerImage-1.png";
import YoungPartnerImage2 from "@/assets/images/assets/HotTopicsSection-YoungPartnerImage-2.png";
import YoungPartnerImage3 from "@/assets/images/assets/HotTopicsSection-YoungPartnerImage-3.png";
import YoungPartnerImage4 from "@/assets/images/assets/HotTopicsSection-YoungPartnerImage-4.png";
import YoungPartnerImage5 from "@/assets/images/assets/HotTopicsSection-YoungPartnerImage-5.png";
import Image, { StaticImageData } from "next/image";
import { Button } from "primereact/button";
import { Carousel } from "primereact/carousel";
import { useContactForm } from "@/context/ContactContext";

interface TrainingPartnerItemProps {
  image: string | StaticImageData;
  text: {
    Eng: { title: string; partner: string; role: string; description: string };
    Viet: { title: string; partner: string; role: string; description: string };
  };
}

interface YoungPartnerItemProps {
  image: string | StaticImageData;
  text: {
    Eng: { title: string; partner: string; role: string; description: string };
    Viet: { title: string; partner: string; role: string; description: string };
  };
}

const HotTopicsSection = () => {
  const { lang } = useLanguage();
  const { openContactForm } = useContactForm();

  const renderTopicItem = (
    index: string,
    title: string,
    description: string,
    className: string,
  ) => {
    return (
      <div className={cl(`w-full flex flex-row gap-3 lg:gap-8`, className)}>
        <div
          className={`
                w-[clamp(50px,44.846px+1.311vw,70px)]
                h-[clamp(50px,44.846px+1.311vw,70px)]
                text-[20px] lg:text-[clamp(30px,26.136px+0.982vw,45px)]
                aspect-square shrink-0 p-4 lg:p-10
                rounded-full border-3 lg:border-4 border-white 
                text-white font-bold flex items-center justify-center 
            `}
        >
          {index}
        </div>
        <div className="">
          <h3 className="text-[16px] lg:text-[clamp(20px,16.907px+0.786vw,32px)] font-bold text-white">
            {title}
          </h3>
          <p className="text-[12px] lg:text-[clamp(14px,11.423px+0.655vw,24px)] text-white mt-2">
            {description}
          </p>
        </div>
      </div>
    );
  };

  const partners: TrainingPartnerItemProps[] = [
    {
      image: PartnerImage1,
      text: {
        Viet: {
          title: "DESIGN SOLUTION AND BACK TO BASIC IN A MODERN WORKPLACE",
          partner: "Công ty Chuyển Phát Nhanh 247",
          role: "Huấn luyện đào tạo",
          description:
            "Thiết kế giải pháp, chiến lược và vận hành kinh doanh; Đào tạo thực chiến cho Phòng Kế Hoach Chiến Lược Kinh Doanh và Quản lý kinh doanh vùng.",
        },
        Eng: {
          title: "DESIGN SOLUTION AND BACK TO BASIC IN A MODERN WORKPLACE",
          partner: "247 Express Delivery Company",
          role: "Training & Coaching",
          description:
            "Solution design, business strategy and operations; hands-on training for the Business Strategy Planning Department and Regional Sales Management.",
        },
      },
    },
    {
      image: PartnerImage2,
      text: {
        Viet: {
          title: "X2 YOUR LIFE WITH LINKED IN & AI",
          partner: "SHE Global Community",
          role: "Diễn giả",
          description:
            "Góc nhìn về thời đại số trong cơn bùng nổ “ứng dụng AI”. AI và chuyển đổi số giúp tối ưu hiệu suất; giá trị tạo ra mới quyết định năng lực lãnh đạo.",
        },
        Eng: {
          title: "X2 YOUR LIFE WITH LINKED IN & AI",
          partner: "SHE Global Community",
          role: "Speaker",
          description:
            "Perspectives on the digital era amid the surge of AI adoption. AI and digital transformation enhance performance, but value creation defines leadership capability.",
        },
      },
    },
    {
      image: PartnerImage3,
      text: {
        Viet: {
          title: "THE ART OF NETWORKINGS",
          partner: "SHE Global Community",
          role: "Diễn giả",
          description:
            "Xây dựng tư duy và kỹ năng networking trong thời đại số, phát triển thương hiệu và sự nghiệp cá nhân bền vững.",
        },
        Eng: {
          title: "THE ART OF NETWORKINGS",
          partner: "SHE Global Community",
          role: "Speaker",
          description:
            "Building networking mindset and skills in the digital age; developing personal branding and sustainable career growth.",
        },
      },
    },
    {
      image: PartnerImage4,
      text: {
        Viet: {
          title: "AI UNLIMITED FUTURE: HỘI NGHỊ ĐỔI MỚI SÁNG TẠO VIỆT NAM",
          partner: "BOSSKOL",
          role: "Huấn luyện đào tạo",
          description:
            "Thiết kế giải pháp, chiến lược và vận hành kinh doanh; Đào tạo thực chiến cho Phòng Kế Hoach Chiến Lược Kinh Doanh và Quản lý kinh doanh vùng.",
        },
        Eng: {
          title: "AI UNLIMITED FUTURE: VIETNAM INNOVATION SUMMIT",
          partner: "BOSSKOL",
          role: "Training & Coaching",
          description:
            "Solution design, business strategy and operations; hands-on training for the Business Strategy Planning Department and Regional Sales Management.",
        },
      },
    },
    {
      image: PartnerImage5,
      text: {
        Viet: {
          title: "WORKSHOP: SHE SLAYS - RAISE AND SHINE",
          partner: "SHE Global Community",
          role: "Diễn giả",
          description:
            "Đồng hành cùng phái nữ định vị bản thân, xây dựng thương hiệu cá nhân chuyên nghiệp và rèn luyện kỹ năng giao tiếp tự tin để chủ động nắm bắt cơ hội, bứt phá lộ trình thăng tiến.",
        },
        Eng: {
          title: "WORKSHOP: SHE SLAYS - RAISE AND SHINE",
          partner: "SHE Global Community",
          role: "Speaker",
          description:
            "Empowering women to define their identity, build a professional personal brand, and develop confident communication skills to seize opportunities and accelerate career growth.",
        },
      },
    },
    {
      image: PartnerImage6,
      text: {
        Eng: {
          title: "WORKSHOP: NEW JOURNEY - NEW VALUE",
          partner: "SHE Global Community",
          role: "Speaker",
          description:
            "Supporting women in discovering new value, expanding networks, and building breakthrough career paths for future opportunities.",
        },
        Viet: {
          title: "WORKSHOP: NEW JOURNEY - NEW VALUE",
          partner: "SHE Global Community",
          role: "Diễn giả",
          description:
            "Cùng phái nữ khám phá giá trị mới, kết nối mạng lưới tài năng và xây dựng lộ trình bứt phá bản thân để sẵn sàng cho những hành trình sự nghiệp đầy tiềm năng.",
        },
      },
    },
  ];

  const renderPartnerItem = (item: TrainingPartnerItemProps) => {
    return (
      <div className="flex flex-col w-[90%] gap-4 text-white items-center mx-auto min-h-full">
        {/* Phần ảnh */}
        <Image
          src={item.image}
          alt="Partner Image"
          className="w-full h-auto object-cover object-center md:scale-100"
        />

        {/* Phần nội dung: Sử dụng flex-1 và flex-col để đẩy nút xuống */}
        <div className="w-full flex-1 flex flex-col justify-between gap-2 lg:gap-6">
          <div className="w-full text-[20px] md:text-4xl font-bold leading-snug text-center line-clamp-2 min-h-[2.4em] md:min-h-[2.8em] flex items-center justify-center">
            {item.text[lang].title}
          </div>
          {/* Khối chữ */}
          <div className="flex flex-col gap-1 lg:gap-4 text-justify">
            <div className="text-[12px] lg:text-[clamp(18px,14.073px+1.0vw,24px)] leading-relaxed">
              <span className="font-semibold">
                {lang == "Viet" ? "Đơn vị hợp tác: " : "Partner: "}
              </span>
              {item.text[lang].partner}
            </div>

            <div className="text-[12px] lg:text-[clamp(18px,14.073px+1.0vw,24px)] leading-relaxed">
              <span className="font-semibold">
                {lang == "Viet" ? "Vai trò hợp tác: " : "Role: "}
              </span>
              {item.text[lang].role}
            </div>

            <div className="text-[12px] lg:text-[clamp(18px,14.073px+1.0vw,24px)] leading-relaxed text-left">
              <span className="font-semibold">
                {lang == "Viet" ? "Nội dung chương trình: " : "Content: "}
              </span>
              {item.text[lang].description}
            </div>
          </div>

          {/* Khối nút: Luôn nằm dưới cùng nhờ justify-between của div cha hoặc mt-auto */}
          <div className="pt-5 lg:pt-6 w-full flex justify-center mt-auto">
            <Button
              unstyled
              label={lang == "Viet" ? "LIÊN HỆ ĐÀO TẠO" : "TRAINING INQUIRIES"}
              className="bg-linear-to-r from-[#07367B] to-[#1F2833] text-white text-[14px] lg:text-[clamp(18px,12px+1.5vw,32px)] font-bold rounded-2xl lg:rounded-4xl border-2 border-white w-fit px-10 py-3 cursor-pointer hover:scale-110 transition-all duration-300"
              onClick={openContactForm}
            />
          </div>
        </div>
      </div>
    );
  };

  const youngPartners: YoungPartnerItemProps[] = [
    {
      image: YoungPartnerImage1,
      text: {
        Eng: {
          title:
            "TALKSHOW: THE HAPPY LEADER – “NAVIGATING CHALLENGES AND FAILURE”",
          partner: "Ho Chi Minh City University of Economics and Finance (UEF)",
          role: "Speaker",
          description:
            "Multi-dimensional perspectives on the journey of modern leadership through both highs and lows—equipping young individuals with the knowledge and confidence to overcome challenges and pursue their desired career paths.",
        },
        Viet: {
          title:
            "TALKSHOW: NHÀ LÃNH ĐẠO HẠNH PHÚC CHỦ ĐỀ “ỨNG PHÓ VỚI KHÓ KHĂN VÀ THẤT BẠI” ",
          partner: "Đại Học Kinh Tế Tài Chính TP.HCM UEF",
          role: "Diễn giả",
          description:
            "Những góc nhìn đa chiều về hành trình của một người lãnh đạo trong thời đại mới, với những giai đoạn sáng - tối khác nhau. Từ đó có thêm kiến thức và niềm tin để bạn trẻ sẵn sàng đương đầu với khó khăn, từ đó chinh phục những vị trí mà mình mong muốn. ",
        },
      },
    },
    {
      image: YoungPartnerImage2,
      text: {
        Eng: {
          title: "COFFEE TALK: WORK SMART BY MASTERING AI AGENTS",
          partner: "FSB Institute of Management & Technology",
          role: "Speaker",
          description:
            "Transforming AI into a multi-functional virtual workforce. Emphasizing the use of tools like ChatGPT, Canva AI, and FPT AI Agents to automate workflows and enhance data-driven decision-making.",
        },
        Viet: {
          title:
            "COFFEE TALK: LÀM VIỆC THÔNG MINH PHẢI TINH THÔNG VỚI AI AGENTS",
          partner: "Viện Quản trị & Công nghệ FSB",
          role: "Diễn giả",
          description:
            "Tập trung biến AI thành nhân sự ảo đầy đa nhiệm. Nhấn mạnh việc ứng dụng các công cụ như ChatGPT, Canva AI, và FPT AI Agents để tự động hóa công việc, tăng cường khả năng ra quyết định dựa trên dữ liệu.",
        },
      },
    },
    {
      image: YoungPartnerImage3,
      text: {
        Eng: {
          title:
            "COMPETITION: ECONOMIC COMMENTARY SERIES 2025 (THEME: GIG ECONOMY)",
          partner: "UEH – ISB Talent School",
          role: "Judge",
          description:
            "Analyzing workforce transformation, the role of digital platforms (GIG Economy), and the impact of AI on the economy.",
        },
        Viet: {
          title:
            "CUỘC THI: CHUỖI BÌNH LUẬN SỰ KIỆN KINH TẾ 2025  (CHỦ ĐỀ: GIG ECONOMY)",
          partner: "Trường Tài Năng UEH - ISB",
          role: "Ban giám khảo",
          description:
            "Phân tích sự chuyển dịch của lực lượng lao động, vai trò của nền tảng số (GIG Economy) và tác động của AI đến nền kinh tế.",
        },
      },
    },
    {
      image: YoungPartnerImage4,
      text: {
        Eng: {
          title:
            "YEAR-END CLOSING: BUSINESS PLANNING & PRACTICAL MANAGEMENT WITH AI",
          partner: "FSB Institute of Management & Technology",
          role: "Speaker",
          description:
            "Guiding the use of AI as a strategic assistant for rapid 2025 planning, optimizing operations, and transitioning toward data-driven management to streamline structures and boost revenue.",
        },
        Viet: {
          title:
            "CHỐT SỔ CUỐI NĂM: KẾ HOẠCH KINH DOANH VÀ QUẢN TRỊ THỰC CHIẾN VỚI AI",
          partner: "Viện Quản trị & Công nghệ FSB",
          role: "Diễn giả",
          description:
            "Hướng dẫn sử dụng AI làm trợ lý chiến lược để lập kế hoạch 2025 nhanh chóng, tối ưu hóa vận hành, từ đó chuyển đổi sang quản trị dữ liệu (data-driven) nhằm tinh gọn bộ máy và thúc đẩy doanh số.",
        },
      },
    },
    {
      image: YoungPartnerImage5,
      text: {
        Eng: {
          title: "COMPETITION: CONQUER THE RECRUITER",
          partner: "Saigon University",
          role: "Judge",
          description:
            "An academic platform helping students refine skills and build confidence before entering the real job market.",
        },
        Viet: {
          title: "CUỘC THI: CHINH PHỤC NHÀ TUYỂN DỤNG",
          partner: "Trường Đại học Sài Gòn",
          role: "Ban giám khảo",
          description:
            "Sân chơi học thuật giúp sinh viên hoàn thiện kỹ năng và bản lĩnh trước khi bước vào thị trường lao động thực tế.",
        },
      },
    },
  ];

  const renderYoungPartnerItem = (item: YoungPartnerItemProps) => {
    return (
      <div
        className={`flex flex-col w-[90%] gap-4 text-[#011B40] items-center mx-auto min-h-full 
        bg-[linear-gradient(to_bottom,rgba(153,153,153,0.5)_0%,rgba(255,255,255,0.5)_10%,rgba(255,255,255,0.5)_84%,rgba(153,153,153,0.5)_100%)]
            px-5 py-5 lg:px-10 lg:py-10 border-4 border-[#C9FDFF] rounded-2xl lg:rounded-4xl
        `}
      >
        {/* Phần ảnh */}
        <Image
          src={item.image}
          alt="Partner Image"
          className="w-full h-auto object-cover object-center scale-110 md:scale-100"
        />

        {/* Phần nội dung: Sử dụng flex-1 và flex-col để đẩy nút xuống */}
        <div className="w-full flex flex-col justify-between gap-4 lg:gap-4">
          <div className="w-full text-xl md:text-3xl font-bold leading-snug text-center lg:mt-5">
            {item.text[lang].title}
          </div>
          {/* Khối chữ */}
          <div className="flex flex-col gap-1 lg:gap-2 text-justify">
            <div className="text-[14px] lg:text-[clamp(18px,14.073px+1.0vw,24px)] leading-relaxed">
              <span className="font-semibold">
                {lang == "Viet" ? "Đơn vị hợp tác: " : "Partner: "}
              </span>
              {item.text[lang].partner}
            </div>

            <div className="text-[14px] lg:text-[clamp(18px,14.073px+1.0vw,24px)] leading-relaxed">
              <span className="font-semibold">
                {lang == "Viet" ? "Vai trò hợp tác: " : "Role: "}
              </span>
              {item.text[lang].role}
            </div>

            <div className="text-[14px] lg:text-[clamp(18px,14.073px+1.0vw,24px)] leading-relaxed text-left">
              <span className="font-semibold">
                {lang == "Viet" ? "Nội dung chương trình: " : "Content: "}
              </span>
              {item.text[lang].description}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      className={`${styles.container} relative overflow-hidden pb-110 lg:pb-120`}
    >
      <div className={`flex flex-col lg:flex-row relative pt-5 lg:pt-20`}>
        <Image
          src={HotTopicImage}
          alt="Hot Topic"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="w-full h-full lg:w-1/2 relative flex justify-end items-end">
          <Image
            src={TuongVyImage2}
            alt="Tuong Vy"
            className="w-6/10 lg:w-11/14 h-auto block align-bottom z-30 translate-x-[-30%] lg:translate-x-[0%]"
          />
        </div>
        <div className={`w-full lg:w-1/2 lg:pt-10 z-30`}>
          <div className={`mb-10 lg:mb-10 lg:w-4/5`}>
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
            <div>
              <div
                className={`flex flex-row justify-center text-[35px] lg:text-[65px] gap-2 lg:gap-4 font-bold 
                    text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-[#999999]
                `}
              >
                {lang == "Viet" ? "CHỦ ĐỀ NỔI BẬT" : "FEATURED TOPICS"}
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
          <div
            className={`flex flex-col gap-5 lg:gap-10 items-center lg:items-start justify-between`}
          >
            {lang == "Viet"
              ? renderTopicItem(
                  "01",
                  "TRÍ TUỆ NHÂN TẠO (AI)",
                  "AI không thay thế bạn, nhưng người biết sử dụng AI sẽ làm được điều đó.",
                  "ml-4 w-6/7 lg:w-3/4",
                )
              : renderTopicItem(
                  "01",
                  "ARTIFICIAL INTELLIGENCE (AI)",
                  "AI won’t replace you—but those who use AI will.",
                  "ml-4 w-6/7 lg:w-3/4",
                )}
            {lang == "Viet"
              ? renderTopicItem(
                  "02",
                  "KỸ NĂNG LÃNH ĐẠO",
                  "Lãnh đạo là xây dựng hệ thống vận hành hiệu quả, không chỉ kiểm soát con người.",
                  "ml-4 w-6/7 lg:ml-16 lg:w-5/6",
                )
              : renderTopicItem(
                  "02",
                  "LEADERSHIP SKILLS",
                  "Leadership is about building effective systems, not just managing people.",
                  "ml-4 w-6/7 lg:ml-16 lg:w-5/6",
                )}
            {lang == "Viet"
              ? renderTopicItem(
                  "03",
                  "TÀI CHÍNH VÀ CHUYỂN ĐỔI SỐ",
                  "Giai đoạn chuyển mình của mỗi doanh nghiệp trong thời đại ngân hàng số",
                  "ml-4 w-6/7 lg:ml-16 lg:w-6/7",
                )
              : renderTopicItem(
                  "03",
                  "FIANANCE & DIGITAL TRANSFORMATION",
                  "A pivotal phase for businesses in the digital banking era.",
                  "ml-4 w-6/7 lg:ml-16 lg:w-6/7",
                )}
            {lang == "Viet"
              ? renderTopicItem(
                  "04",
                  "KINH TẾ THỊ TRƯỜNG",
                  "Hiểu kinh tế thị trường là hiểu dòng tiền và hành vi khách hàng.",
                  "ml-4 w-6/7 lg:w-3/4",
                )
              : renderTopicItem(
                  "04",
                  "MARKET ECONOMY",
                  "Understanding the market means understanding cash flow and customer behavior.",
                  "ml-4 w-6/7 lg:w-3/4",
                )}
          </div>
          <div className={`w-full lg:w-4/5 flex justify-center mt-5 lg:mt-5`}>
            <Button
              unstyled
              className={`
                      bg-linear-to-r from-[#042B63] from-50% to-[#2F3945] 
                      border-2 lg:border-3 border-white rounded-2xl lg:rounded-4xl
                      /* Font size & Padding thu nhỏ */
                      text-[16px] lg:text-[30px] font-bold text-white
                      px-4 lg:px-12 py-2 lg:py-4 mt-3 lg:mt-5
                      transition-all duration-300 hover:brightness-110
                      relative z-20  hover:cursor-pointer
                    `}
              onClick={openContactForm}
            >
              {lang == "Viet" ? "TRAO ĐỔI TRỰC TIẾP" : "LET’S DISCUSSION"}
            </Button>
          </div>
        </div>
      </div>
      <div id="training-partners">
        <div
          id="partners"
          className={`flex flex-row justify-center text-[20px] lg:text-[55px] gap-2 lg:gap-4 font-extrabold lg:font-bold 
                    text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-[#999999]/93
                    my-10 lg:my-15 text-center 
                `}
        >
          {lang == "Viet"
            ? "ĐỐI TÁC HỢP TÁC ĐÀO TẠO"
            : "TRAINING & DEVELOPMENT PARTNERS"}
        </div>
        <div className={`${styles.carouselWrapper} w-full`}>
          <div className="">
            <Carousel
              value={partners} // Đã sửa Harvard đúng chính tả
              itemTemplate={renderPartnerItem}
              showIndicators={false}
              numVisible={2}
              numScroll={2}
              circular
              responsiveOptions={[
                {
                  breakpoint: "768px",
                  numVisible: 2,
                  numScroll: 2,
                },
                {
                  breakpoint: "576px",
                  numVisible: 1,
                  numScroll: 1,
                },
              ]}
              autoplayInterval={8000}
              prevIcon={<i className="pi pi-chevron-left text-3xl!" />}
              nextIcon={<i className="pi pi-chevron-right text-3xl!" />}
              className="w-4/5 mx-auto"
            />
          </div>
        </div>
      </div>
      <div
        className={`bg-linear-to-br from-[#1F2833] from-33% to-[#0957C9] to-85%
            border-3 lg:border-4 border-white
            flex flex-col lg:flex-row w-8/10 mx-auto mt-20
            justify-center items-center /* Thay đổi ở đây để đẩy mọi thứ xuống đáy trên desktop */
            pl-5 lg:pl-20 pr-5 lg:pr-0 pt-5 lg:pt-10 pb-0 lg:pb-0 rounded-4xl lg:rounded-[60px] relative z-10`}
      >
        <div
          className={` lg:w-5/7 text-center lg:text-left text-white lg:pb-10 flex flex-col justify-center items-start`}
        >
          {/* Thêm lg:pb-10 để phần chữ không dính sát đáy như ảnh */}
          <div>
            <div
              className={`font-semibold italic text-[22px] lg:text-[clamp(25px,17.273px+1.965vw,55px)]`}
            >
              {lang == "Viet" ? "ĐÀO TẠO" : "TRAINING"}
            </div>

            <div
              className={`text-[30px] lg:text-[clamp(30px,19.705px+2.62vw,70px)] leading-tight font-bold lg:font-bold mt-1 lg:mt-0`}
            >
              {lang == "Viet" ? "PHƯƠNG PHÁP" : "TAILORED"}
              <br />
              {lang == "Viet" ? "RIÊNG BIỆT" : "METHODOLOGIES"}
              <br />
              {lang == "Viet" ? "CHO DOANH NGHIỆP" : "FOR ENTERPRISES"}
            </div>

            {/* List description */}
            <div
              className={`flex items-center justify-center text-left text-[14px] lg:text-[clamp(16px,14.456px+0.393vw,22px)] leading-relaxed lg:leading-normal lg:w-5/7 mt-5 lg:mt-10`}
            >
              <ul className={`list-disc list-inside lg:list-outside lg:pl-10`}>
                <li>
                  {lang == "Viet"
                    ? "Thiết kế chương trình đạo tạo và truyền tải cụ thể trên case study thực tế của doanh nghiệp."
                    : "Design customized training programs delivered through real business case studies."}
                </li>

                <li>
                  {lang == "Viet"
                    ? "Đưa ra tư duy giải quyết vấn đề về bài toán nhân sự, mô hình vận hành,...."
                    : "Provide problem-solving frameworks for HR challenges, operating models, and more."}
                </li>
              </ul>
            </div>
          </div>

          <Button
            unstyled
            label={lang == "Viet" ? "TƯ VẤN TRỰC TIẾP" : "DIRECT CONSULTATION"}
            className="w-fit mt-10 lg:mt-15 mb-5 lg:mb-10 lg:mb-0 bg-linear-to-r from-[#0B54BE] to-[#1F2833] text-white text-[15px] lg:text-[clamp(18px,15.426px+0.655vw,28px)] font-bold rounded-2xl lg:rounded-3xl border-2 border-white px-10 lg:px-15 py-2 lg:py-3 cursor-pointer hover:scale-110 transition-all duration-300 mx-auto lg:mx-0 animate-light-heartbeat"
            onClick={openContactForm}
          />
        </div>

        {/* Khối chứa ảnh */}
        <div className={`lg:w-4/9 flex items-end justify-end lg:h-full`}>
          <Image
            src={TuongVyImage3}
            alt="Tuong Vy"
            className="w-7/10 lg:w-full h-auto object-contain block align-bottom lg:translate-x-[-10%] translate-x-[0%] mx-auto lg:mx-0"
            /* align-bottom và block giúp triệt tiêu khoảng hở inline phía dưới */
          />
        </div>
      </div>
      <div
        id="young-partners"
        className={`flex flex-col lg:flex-row text-center lg:text-left justify-center lg:justify-between mt-10 lg:mt-20 text-white w-9/10 mx-auto`}
      >
        <div className={`w-full lg:w-1/2 lg:pt-20`}>
          <div
            className={`bg-clip-text text-transparent bg-linear-to-r from-[#FFFFFF] from-24% to-[#12F4FE]
            font-extrabold lg:font-extrabold text-[clamp(30px,17.13px+3.274vw,80px)] leading-tight
            `}
          >
            {lang == "Viet" ? "ĐỒNG HÀNH" : "SUPPORTING"}
            <br />
            {lang == "Viet" ? "CÙNG SỰ" : "YOUNG TALENT"} <br />
            {lang == "Viet" ? "PHÁT TRIỂN TRẺ" : "DEVELOPMENT"}
          </div>
          <Button
            unstyled
            label={lang == "Viet" ? "LIÊN HỆ NGAY" : "CONTACT NOW"}
            className={`mt-5 lg:mt-25 lg:mb-0 bg-linear-to-r from-[#12F4FE] from-69% to-[#FFFFFF] text-black text-[16px] lg:text-[clamp(18px,14.397px+0.917vw,32px)] font-bold 
            rounded-2xl lg:rounded-4xl border-2 border-white w-fit px-10 lg:px-25 py-2 cursor-pointer hover:scale-110 transition-all duration-300
            `}
            onClick={openContactForm}
          />
        </div>
        <div className={`w-full lg:w-1/2 mt-10 lg:mt-0`}>
          <div className={`${styles.carouselWrapper2} w-full`}>
            <div className="">
              <Carousel
                value={youngPartners} // Đã sửa Harvard đúng chính tả
                itemTemplate={renderYoungPartnerItem}
                showIndicators={false}
                numVisible={1}
                numScroll={1}
                circular
                autoplayInterval={8000}
                prevIcon={<i className="pi pi-chevron-left text-3xl!" />}
                nextIcon={<i className="pi pi-chevron-right text-3xl!" />}
                className="w-full mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotTopicsSection;
