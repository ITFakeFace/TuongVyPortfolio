"use client";
import { useLanguage } from "@/context/LanguageContext";
import styles from "./HotTopicsSection.module.scss";
import { cl } from "@/utils/cn";
import HotTopicImage from "@/assets/images/assets/HotTopicsSection-HotTopicImage-1.png";
import TuongVyImage from "@/assets/images/assets/HotTopicsSection-TuongVyImage-1.png";
import TuongVyImage3 from "@/assets/images/assets/HotTopicsSection-TuongVyImage-4.png";
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
import YoungPartnerImage6 from "@/assets/images/assets/HotTopicsSection-YoungPartnerImage-6.png";
import TrainingDecor from "@/assets/images/assets/HotTopicsSection-TrainingDecor-1.png";
import Image, { StaticImageData } from "next/image";
import { Button } from "primereact/button";
import { Carousel } from "primereact/carousel";
import { useContactForm } from "@/context/ContactContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import LatestEventsSection from "../latest-events-section/LatestEventsSection";

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
                w-[clamp(3rem,0.75rem+2.3438vw,4.5rem)]
                h-[clamp(3rem,0.75rem+2.3438vw,4.5rem)]
                text-[20px] lg:text-[clamp(1.75rem,0.25rem+1.5625vw,2.75rem)]
                aspect-square shrink-0 p-4 lg:p-8 4xl:p-15
                rounded-full border-3 lg:border-2 4xl:border-4 border-white 
                text-white font-semibold 4xl:font-bold flex items-center justify-center 
            `}
        >
          {index}
        </div>
        <div className="">
          <h3 className="text-[16px] lg:text-[clamp(1.125rem,-0.1875rem+1.3672vw,2rem)] font-bold text-white">
            {title}
          </h3>
          <p className="text-[12px] lg:text-[clamp(1rem,0.25rem+0.7813vw,1.5rem)] text-white mt-2">
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
      <div className="font-sans flex flex-col w-8/10 gap-4 text-white items-center mx-auto min-h-full">
        {/* Phần ảnh */}
        <Image
          src={item.image}
          alt="Partner Image"
          className="w-full h-auto object-cover object-center md:scale-100"
        />

        {/* Phần nội dung: Sử dụng flex-1 và flex-col để đẩy nút xuống */}
        <div className="w-full flex-1 flex flex-col justify-between gap-2 lg:gap-4">
          <div className="w-full text-lg md:text-[clamp(1.5rem,0.375rem+1.1719vw,2.25rem)] font-bold leading-snug text-center line-clamp-2 min-h-[2.4em] md:min-h-[2.8em] flex items-center justify-center">
            {item.text[lang].title}
          </div>
          {/* Khối chữ */}
          <div
            className={`flex flex-col gap-1 lg:gap-2 text-justify 
            text-[12px] lg:text-[clamp(1rem,0.25rem+0.7813vw,1.5rem)] leading-loose`}
          >
            <div className="">
              <span className="font-semibold">
                {lang == "Viet" ? "Đơn vị hợp tác: " : "Partner: "}
              </span>
              {item.text[lang].partner}
            </div>

            <div className="">
              <span className="font-semibold">
                {lang == "Viet" ? "Vai trò hợp tác: " : "Role: "}
              </span>
              {item.text[lang].role}
            </div>

            <div className="">
              <span className="font-semibold">
                {lang == "Viet" ? "Nội dung chương trình: " : "Content: "}
              </span>
              {item.text[lang].description}
            </div>
          </div>

          {/* Khối nút: Luôn nằm dưới cùng nhờ justify-between của div cha hoặc mt-auto */}
          <div className="pt-5 lg:pt-4 w-full flex justify-center mt-auto">
            <Button
              unstyled
              label={lang == "Viet" ? "LIÊN HỆ ĐÀO TẠO" : "TRAINING INQUIRIES"}
              className="bg-linear-to-r from-[#07367B] to-[#1F2833] text-white text-[12px] lg:text-[clamp(1rem,-0.5rem+1.5625vw,2rem)] font-bold rounded-full border-2 border-white w-fit px-10 lg:px-15 4xl:px-20 py-2 lg:py-3 4xl:py-5 cursor-pointer hover:scale-110 transition-all duration-300"
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
    {
      image: YoungPartnerImage6,
      text: {
        Eng: {
          title: "WORKSHOP: WHO’S REALLY IN CONTROL?",
          partner: "AIESEC",
          role: "Speaker",
          description:
            "Offering new perspectives to help young people switch off autopilot mode, overcome fear, and build deeper self-awareness—enabling stronger thinking and more confident career direction.",
        },
        Viet: {
          title: "WORKSHOP: WHO’S REALLY IN CONTROL?",
          partner: "AIESEC",
          role: "Diễn giả",
          description:
            "Mở ra góc nhìn mới giúp người trẻ tắt chế độ tự động, vượt qua nỗi sợ để nhận thức bản thân sâu sắc, từ đó làm chủ tư duy và định hướng sự nghiệp vững vàng.",
        },
      },
    },
  ];

  const renderYoungPartnerItem = (item: YoungPartnerItemProps) => {
    return (
      <div
        className={`font-sans flex flex-col w-[90%] gap-4 text-[#white] items-center mx-auto min-h-full 
            px-5 py-5 lg:px-10 lg:py-10 rounded-2xl lg:rounded-4xl
        `}
      >
        {/* Phần ảnh */}
        <Image
          src={item.image}
          alt="Partner Image"
          className="w-full h-auto object-cover object-center scale-110 md:scale-100"
        />

        {/* Phần nội dung: Sử dụng flex-1 và flex-col để đẩy nút xuống */}
        <div className="w-full flex flex-col justify-between gap-4 lg:gap-6 4xl:gap-8 ">
          <div className="w-full text-base md:text-[clamp(1.5rem,-0.375rem+1.9531vw,2.75rem)] font-bold leading-relaxed lg:leading-snug text-center lg:mt-5">
            {item.text[lang].title}
          </div>
          {/* Khối chữ */}
          <div className="flex flex-col gap-1 lg:gap-2 text-justify text-[10px] lg:text-[clamp(1.0625rem,-0.3437rem+1.4648vw,2rem)] ">
            <ul
              className={`list-disc list-outside lg:pl-10 font-light leading-loose`}
            >
              <li>
                <div className="">
                  <span className="font-semibold">
                    {lang == "Viet" ? "Đơn vị hợp tác: " : "Partner: "}
                  </span>
                  {item.text[lang].partner}
                </div>
              </li>
              <li>
                <div className="">
                  <span className="font-semibold">
                    {lang == "Viet" ? "Vai trò hợp tác: " : "Role: "}
                  </span>
                  {item.text[lang].role}
                </div>
              </li>
              <li>
                <div className="">
                  <span className="font-semibold">
                    {lang == "Viet" ? "Nội dung chương trình: " : "Content: "}
                  </span>
                  {item.text[lang].description}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      className={`${styles.container} relative overflow-hidden pb-110 4xl:pb-120 lg:pb-80`}
    >
      <div
        className={`flex flex-col-reverse lg:flex-row relative pt-5 lg:py-40 4xl:py-60 lg:px-[15%] items-stretch`}
      >
        {/* Background Image của Section */}
        <Image
          src={HotTopicImage}
          alt="Hot Topic"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-70 lg:opacity-100"
        />

        {/* BOX TRÁI: Chứa Ảnh nhân vật và Button */}
        <div className="flex-1 w-full lg:w-1/2 relative flex flex-col z-20 pt-10 lg:pt-0">
          <div
            className={`flex-1 w-full h-full flex flex-col justify-end items-center`}
          >
            <Image
              src={TuongVyImage2}
              alt="Tuong Vy"
              className="w-5/10 lg:w-9/15 h-auto block align-bottom z-30  lg:translate-x-[0%]"
            />
            <Button
              unstyled
              className={`
            bg-linear-to-r from-[#07367B] from-69% to-[#1F2833] 
            border-2 lg:border-1 border-white rounded-2xl lg:rounded-full
            text-[14px] lg:text-[clamp(1.25rem,-1rem+2.3438vw,2.75rem)] font-bold text-white
            px-10 lg:px-20 py-2 lg:py-4
            transition-all duration-300 hover:brightness-110
            relative z-20 hover:cursor-pointer
          `}
              onClick={openContactForm}
            >
              {lang == "Viet" ? "TRAO ĐỔI TRỰC TIẾP" : "LET’S DISCUSSION"}
            </Button>
          </div>
        </div>

        {/* BOX PHẢI: Chứa Tiêu đề và Danh sách Topic */}
        <div
          className={`flex-1 w-full lg:w-1/2 pt-20 lg:pt-10 z-30 flex flex-col`}
        >
          <div className="flex-1 flex flex-col lg:items-center lg:justify-center">
            <div className={`mb-5 lg:mb-10`}>
              <div
                className={`flex flex-row justify-center text-[35px] lg:text-[clamp(2.5rem,-0.5rem+3.125vw,4.5rem)] gap-2 lg:gap-4 font-bold 
            text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-[#999999]
          `}
              >
                {lang == "Viet" ? "CHỦ ĐỀ NỔI BẬT" : "FEATURED TOPICS"}
              </div>
            </div>

            <div
              className={`flex flex-col gap-5 lg:gap-12 4xl:gap-20 items-center lg:items-start justify-between`}
            >
              {lang == "Viet"
                ? renderTopicItem(
                    "01",
                    "TRÍ TUỆ NHÂN TẠO (AI)",
                    "AI không thay thế bạn, nhưng người biết sử dụng AI sẽ làm được điều đó.",
                    "ml-4 w-6/7 lg:w-6/7",
                  )
                : renderTopicItem(
                    "01",
                    "ARTIFICIAL INTELLIGENCE (AI)",
                    "AI won’t replace you—but those who use AI will.",
                    "ml-4 w-6/7 lg:w-6/7",
                  )}
              {lang == "Viet"
                ? renderTopicItem(
                    "02",
                    "KỸ NĂNG LÃNH ĐẠO",
                    "Lãnh đạo là xây dựng hệ thống vận hành hiệu quả, không chỉ kiểm soát con người.",
                    "ml-4 w-6/7 lg:ml-16 lg:w-6/7",
                  )
                : renderTopicItem(
                    "02",
                    "LEADERSHIP SKILLS",
                    "Leadership is about building effective systems, not just managing people.",
                    "ml-4 w-6/7 lg:ml-16 lg:w-6/7",
                  )}
              {lang == "Viet"
                ? renderTopicItem(
                    "03",
                    "TÀI CHÍNH VÀ CHUYỂN ĐỔI SỐ",
                    "Giai đoạn chuyển mình của mỗi doanh nghiệp trong thời đại ngân hàng số",
                    "ml-4 w-6/7 lg:ml-16 lg:w-6/7 ",
                  )
                : renderTopicItem(
                    "03",
                    "FINANCE & DIGITAL TRANSFORMATION",
                    "A pivotal phase for businesses in the digital banking era.",
                    "ml-4 w-6/7 lg:ml-16 lg:w-6/7",
                  )}
              {lang == "Viet"
                ? renderTopicItem(
                    "04",
                    "KINH TẾ THỊ TRƯỜNG",
                    "Hiểu kinh tế thị trường là hiểu dòng tiền và hành vi khách hàng.",
                    "ml-4 w-6/7 lg:w-6/7",
                  )
                : renderTopicItem(
                    "04",
                    "MARKET ECONOMY",
                    "Understanding the market means understanding cash flow and customer behavior.",
                    "ml-4 w-6/7 lg:w-6/7",
                  )}
            </div>
          </div>
        </div>
      </div>
      <div id="training-partners" className={`pt-20 lg:pt-20`}>
        <div
          id="partners"
          className={`flex flex-row justify-center text-[1.125rem] lg:text-[clamp(3rem,2.25rem+0.7813vw,3.5rem)] gap-2 lg:gap-4 font-extrabold lg:font-bold 
                    text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-[#999999]/93
                    my-10 lg:my-15 text-center 
                `}
        >
          {lang == "Viet"
            ? "ĐỐI TÁC HỢP TÁC ĐÀO TẠO"
            : "TRAINING & DEVELOPMENT PARTNERS"}
        </div>
        <div className={`${styles.carouselWrapper} w-full`}>
          <div className="w-full">
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
              className="w-full mx-auto"
            />
          </div>
        </div>
      </div>
      <div
        id="training-programs"
        className={`relative px-5 lg:px-[15%] flex flex-row lg:justify-center items-end pt-50 lg:pt-40 4xl:pt-80`}
      >
        <Image
          src={TrainingDecor}
          alt="Training Decor"
          className={`absolute h-[39%] lg:h-[38%] left-0 bottom-0 z-10`}
        />
        <div
          className={`w-6/8 lg:w-5/7 4xl:w-5/7 text-left text-white lg:pb-10 flex flex-col justify-center items-start z-50 px-8 lg:px-0`}
        >
          {/* Thêm lg:pb-10 để phần chữ không dính sát đáy như ảnh */}
          <div
            className={`bg-clip-text text-transparent bg-gradient-to-br from-[#FFFFFF] to-[#5A5B5B]`}
          >
            <div
              className={`bg-clip-text text-transparent bg-gradient-to-br from-[#FFFFFF] to-[#5A5B5B]
                font-playfair font-semibold italic text-[12px] lg:text-[clamp(2rem,-0.25rem+2.3438vw,3.5rem)]`}
            >
              {lang == "Viet" ? "Đào tạo nội bộ" : "In-house training"}
            </div>

            <div
              className={`text-[20px] lg:text-[clamp(3rem,-0.375rem+3.5156vw,5.25rem)] leading-tight font-bold lg:font-bold mt-1 lg:mt-0`}
            >
              {lang == "Viet" ? "PHƯƠNG PHÁP" : "TAILORED"}
              <br />
              {lang == "Viet" ? "RIÊNG BIỆT" : "METHODOLOGIES"}
              <br />
              {lang == "Viet" ? "CHO DOANH NGHIỆP" : "FOR ENTERPRISES"}
            </div>

            {/* List description */}
            <div
              className={`w-9/10 lg:w-8/10 flex items-center justify-center text-left text-[10px] lg:text-[clamp(1.25rem,0.125rem+1.1719vw,2rem)] text-white leading-relaxed lg:leading-normal mt-8 lg:mt-10 4xl:mt-20`}
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
          <div className={`lg:w-full flex justify-center items-center`}>
            <Button
              unstyled
              label={
                lang == "Viet" ? "TƯ VẤN TRỰC TIẾP" : "DIRECT CONSULTATION"
              }
              className="w-fit mt-5 lg:mt-15 mb-5 lg:mb-0 bg-linear-to-r from-[#0B54BE] to-[#1F2833] text-white text-[10px] lg:text-[clamp(1.25rem,0.125rem+1.1719vw,2rem)] font-bold rounded-full border-2 border-white px-5 lg:px-15 py-2 lg:py-3 cursor-pointer hover:scale-110 transition-all duration-300 mx-auto lg:mx-0 animate-light-heartbeat"
              onClick={openContactForm}
            />
          </div>
        </div>

        {/* Khối chứa ảnh */}
        <div
          className={`w-9/20 lg:w-auto lg:h-full flex items-end justify-end z-50 absolute lg:static -right-5 bottom-0`}
        >
          <Image
            src={TuongVyImage3}
            alt="Tuong Vy"
            className="w-full lg:w-9/10  h-auto object-contain block align-bottom mx-auto lg:mx-0"
            /* align-bottom và block giúp triệt tiêu khoảng hở inline phía dưới */
          />
        </div>
      </div>

      <div
        id="young-partners"
        className={`flex flex-col lg:flex-row text-center lg:text-left justify-center lg:justify-between pt-50 lg:pt-60 4xl:pt-80 lg:pb-0 text-white w-9/10 lg:w-full lg:pl-[15%] mx-auto`}
      >
        <div className={`w-full lg:w-3/9 lg:pt-20`}>
          <div
            className={`bg-clip-text text-transparent bg-linear-to-bl from-[#FFFFFF] to-[#5A5B5B]
            font-extrabold lg:font-extrabold text-[1.5rem] lg:text-[clamp(3.5rem,0.125rem+3.5156vw,5.75rem)] leading-tight
            `}
          >
            {lang == "Viet" ? "DẤU ẤN " : "COMMUNITY "}
            <br className={`hidden`} />
            {lang == "Viet" ? "CỘNG ĐỒNG" : "IMPACT"}
          </div>
          <div
            className={`font-playfair pt-2 lg:pt-0 lg:pl-1 4xl:pl-2 italic bg-clip-text text-transparent bg-linear-to-bl from-[#FFFFFF] to-[#5A5B5B] lg:w-full w-7/10 mx-auto lg:mx-0 text-[7px] lg:text-[clamp(1.5rem,0.75rem+0.7813vw,2rem)]`}
          >
            {lang == "Viet"
              ? "Chia sẻ về hành trình lan tỏa giá trị và kiến thức giúp phát triển cộng đồng trẻ"
              : "Sharing my journey of creating value and knowledge to empower the younger generation"}
          </div>
          <Button
            unstyled
            label={
              lang == "Viet" ? "ĐẶT LỊCH CHIA SẺ" : "BOOK A SPEAKING SESSION"
            }
            className={`mt-10 lg:mt-15 lg:mb-0 bg-linear-to-r from-[#0B54BE] to-[#1F2833] text-white text-[12px] lg:text-[clamp(1.25rem,0.125rem+1.1719vw,2rem)] font-bold 
            rounded-full border-2 border-white w-fit px-10 lg:px-25 py-2 cursor-pointer hover:scale-110 transition-all duration-300
            `}
            onClick={openContactForm}
          />
        </div>
        <div className={`w-full lg:w-3/5 mt-10 lg:mt-0`}>
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
                className="w-full mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={`pt-30 lg:pt-0`}></div>
      <LatestEventsSection />
    </div>
  );
};

export default HotTopicsSection;
