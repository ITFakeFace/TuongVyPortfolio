"use client";
import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import styles from "./ExplotionPeriodSection.module.scss";
import EventImage1 from "@/assets/images/assets/ExplotionPeriodSection-EventImage-1.png";
import EventImage2 from "@/assets/images/assets/ExplotionPeriodSection-EventImage-2.png";
import EventImage3 from "@/assets/images/assets/ExplotionPeriodSection-EventImage-3.png";
import ProffessorViewText1 from "@/assets/images/texts/ExplotionPeriodSection-ProffessorViewText-1.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import Image, { StaticImageData } from "next/image";
import { SwiperOptions } from "swiper/types";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "primereact/button";
import DecorBGImage from "@/assets/images/assets/ExplotionPeriodSection-DecorBGImage-2.png";
import StreakImage from "@/assets/images/assets/ExplotionPeriodSection-StreakImage-1.png";
import StreakImage2 from "@/assets/images/assets/ExplotionPeriodSection-StreakImage-2.png";
import StreakImage3 from "@/assets/images/assets/ExplotionPeriodSection-StreakImage-3.png";
import StreakImageEng from "@/assets/images/assets/ExplotionPeriodSection-StreakImageEng-1.png";
import StreakImageEng2 from "@/assets/images/assets/ExplotionPeriodSection-StreakImageEng-2.png";
import StreakImageEng3 from "@/assets/images/assets/ExplotionPeriodSection-StreakImageEng-3.png";
import StreakMobileImage1 from "@/assets/images/assets/ExplotionPeriodSection-StreakMobileImage-1.png";
import StreakMobileImage2 from "@/assets/images/assets/ExplotionPeriodSection-StreakMobileImage-2.png";
import StreakMobileImage3 from "@/assets/images/assets/ExplotionPeriodSection-StreakMobileImage-3.png";
import StreakMobileImageEng1 from "@/assets/images/assets/ExplotionPeriodSection-StreakImageMobileEng-1.png";
import StreakMobileImageEng2 from "@/assets/images/assets/ExplotionPeriodSection-StreakMobileImageEng-2.png";
import StreakMobileImageEng3 from "@/assets/images/assets/ExplotionPeriodSection-StreakMobileImageEng-3.png";
import MethodEnd from "@/assets/images/assets/ExplotionPeriodSection-MethodEnd-2.png";
import EndImage from "@/assets/images/assets/ExplotionPeriodSection-EndImage-1.png";
import EndImageEng from "@/assets/images/assets/ExplotionPeriodSection-EndImageEng-1.png";
import EndMobileImage from "@/assets/images/assets/ExplotionPeriodSection-EndMobileImage-1.png";
import EndMobileImageEng from "@/assets/images/assets/ExplotionPeriodSection-EndMobileImageEng-1.png";
import BusinessGrowth from "@/assets/images/assets/ExplotionPeriodSection-BusinessGrowth-1.png";
import BusinessGrowthEng from "@/assets/images/assets/ExplotionPeriodSection-BusinessGrowthEng-1.png";
import HumanImage from "@/assets/images/assets/ExplotionPeriodSection-HumanImage-1.png";
import BannerImage from "@/assets/images/assets/ExplotionPeriodSection-Banner-1.png";
import { useContactForm } from "@/context/ContactContext";
import { motion } from "framer-motion";

interface Event {
  image: StaticImageData | string;
  title: string;
  subtitle?: string;
  description: string;
  url?: string;
}

const EventSwiper = ({ events }: { events: Event[] }) => {
  const { lang } = useLanguage();
  const { openContactForm } = useContactForm();
  const swiperConfig: SwiperOptions = {
    modules: [Navigation, Pagination, EffectCoverflow],
    loop: true,
    navigation: { nextEl: ".custom-next-btn", prevEl: ".custom-prev-btn" },
    centeredSlides: true,
    effect: "coverflow",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
    },
    // Responsive breakpoints
    breakpoints: {
      // Mobile (< 768px)
      320: {
        slidesPerView: 1.2, // Hiện 1 slide chính và 1 phần slide phụ
        spaceBetween: 20,
      },
      // Tablet (768px - 1024px)
      768: {
        slidesPerView: 1.8,
        spaceBetween: 40,
      },
      // Desktop (>= 1024px)
      1024: {
        slidesPerView: 2.35,
        spaceBetween: 60,
      },
      1920: {
        slidesPerView: 2.35,
        spaceBetween: 80,
      },
    },
  };
  return (
    <>
      <div className={`relative `}>
        <Swiper
          {...swiperConfig}
          className={`w-full !overflow-hidden ${styles.mySwiper}`}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
        >
          {[...events, ...events].map((event, index) => (
            <SwiperSlide
              key={index}
              className="flex justify-center items-center transition-all duration-500"
            >
              {({ isActive }) => (
                <div
                  className={`
                  w-full rounded-[30px] lg:rounded-[40px] text-white transition-all duration-500
                  /* Padding linh hoạt */
                  p-[15px] lg:p-[25px] 
                  #border-2 #border-[#d4af37]
                  ${
                    isActive
                      ? "scale-100 shadow-lg z-10 bg-[linear-gradient(135deg,rgba(153,153,153,0.1)_0%,rgba(255,255,255,0.1)_32%,rgba(255,255,255,0.1)_72%,rgba(153,153,153,0.1)_100%)]"
                      : "scale-[0.83] bg-[linear-gradient(135deg,rgba(153,153,153,0.1)_0%,rgba(255,255,255,0.3)_32%,rgba(255,255,255,0.3)_72%,rgba(153,153,153,0.3)_100%)]"
                  }
                `}
                >
                  {/* Image Box */}
                  <div className="w-full rounded-[25px] lg:rounded-[30px] overflow-hidden mb-5 lg:mb-10">
                    <Image
                      src={event.image}
                      alt="event"
                      className="w-full h-auto object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="text-center mt-3 lg:mt-[15px] mx-2 lg:mx-10 lg:px-10">
                    {/* Title: Mobile ~20px, Desktop 32px */}
                    <div className="text-[16px] lg:text-[clamp(1.25rem,0.125rem+1.1719vw,2rem)] font-bold uppercase leading-normal ">
                      {event.title}
                    </div>

                    {/* Subtitle: Mobile 14px, Desktop 18px */}
                    <div className="text-[12px] lg:text-[clamp(1rem,0.4375rem+0.5859vw,1.375rem)] opacity-90">
                      {event.subtitle}
                    </div>

                    {/* Description: Mobile 14px, Desktop 20px - Ẩn bớt trên mobile nếu quá dài */}
                    <div className="text-[12px] lg:text-[clamp(0.875rem,0.2188rem+0.6836vw,1.3125rem)] my-5 lg:my-[10px] italic leading-relaxed lg:leading-loose  lg:mt-5">
                      {event.description}
                    </div>

                    {/* Button: Dùng clamp hoặc Mobile/Desktop size */}
                    <a
                      href={event.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div
                        className={`
                          w-fit mx-auto
                        bg-linear-to-r from-[#2F3945]/50 to-[#042B63]/50
                        border-2 lg:border-3 border-white rounded-full
                        /* Font size & Padding thu nhỏ */
                        text-[12px] lg:text-[24px] font-bold 
                        px-10 lg:px-20 py-2 lg:py-4 mt-3 lg:mt-5
                        transition-all duration-300 hover:brightness-110
                        hover:cursor-pointer
                        hover:scale-110
                        `}
                      >
                        {lang == "Viet" ? "XEM BÀI VIẾT" : "READ THE ARTICLE"}
                      </div>
                    </a>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Nút Prev - Style y hệt ảnh */}
        <button
          className={`custom-prev-btn absolute left-2 lg:left-[2%] top-1/2 -translate-y-1/2 z-20 
          w-10 h-10 lg:w-16 lg:h-16 flex items-center justify-center 
          bg-[#1F2833]/50 hover:bg-[#FFFFFF] hover:text-[#1F2833] rounded-full text-[#FFFFFF] font-bold shadow-md transition-all active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed hover:cursor-pointer`}
        >
          <ArrowLeft strokeWidth={3} size={24} className="lg:hidden" />{" "}
          {/* Size nhỏ cho mobile */}
          <ArrowLeft
            strokeWidth={3}
            size={36}
            className="hidden lg:block"
          />{" "}
          {/* Size lớn cho desktop */}
        </button>

        {/* Nút Next - Style y hệt ảnh */}
        <button
          className={`custom-next-btn absolute right-[2%] top-1/2 -translate-y-1/2 z-20 
          w-10 h-10 lg:w-16 lg:h-16 flex items-center justify-center 
          bg-[#1F2833]/50 hover:bg-[#FFFFFF] hover:text-[#1F2833] rounded-full text-[#FFFFFF] font-bold shadow-md transition-all active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed hover:cursor-pointer`}
        >
          {/* Dùng icon mũi tên mỏng, trắng */}
          <ArrowRight strokeWidth={3} size={24} className="lg:hidden" />
          <ArrowRight strokeWidth={3} size={36} className="hidden lg:block" />
        </button>
      </div>
    </>
  );
};

const ExplotionPeriodSection = () => {
  const { lang } = useLanguage();
  const { openContactForm } = useContactForm();

  return (
    <>
      <div
        id="covid-period"
        className={`${styles.container} bg-linear-to-b from-[#1F2833] to-[#07367B] relative`}
      >
        <div
          className={`w-full relative flex flex-col items-center gap-12 lg:gap-10 py-50 lg:py-40`}
        >
          <div
            className={`z-10 bg-clip-text text-transparent bg-linear-to-r from-[#F3C85F] from-26% via-[#FFECBF] via-66% to-[#C28900] text-[clamp(16px,3.389px+3.209vw,65px)] font-extrabold text-center`}
          >
            {lang == "Viet"
              ? "CHINH PHỤC THÀNH CÔNG"
              : "CONQUERING SUCCESS DURING"}
            <br />
            {lang == "Viet"
              ? "GIAI ĐOẠN KHỦNG HOẢNG NGÀNH"
              : "AN INDUSTRY CRISIS"}
          </div>
          <div
            className={`text-white text-center z-10 flex flex-col gap-10 lg:gap-10`}
          >
            <div
              className={`font-light font-playfair italic w-14/20 lg:w-10/20 text-balance text-[12px] lg:text-[clamp(2rem,1.25rem+0.7813vw,2.5rem)] mx-auto`}
            >
              {lang == "Viet"
                ? "Trong giai đoạn chống dịch, ngành tài chính Việt Nam lao đao khi phải đối mặt với loạt vấn đề. Dòng tiền tắc nghẽn, nhu cầu tín dụng giảm, nợ xấu gia tăng, buộc các tổ chức phải tái cấu trúc và siết chặt quản trị rủi ro để tồn tại."
                : "During the pandemic, the banking and financial sector faced unprecedented challenges—businesses struggled, many even suspended operations. As individuals lost or saw reductions in income, credit demand increased, yet bad debt doubled, driving up credit risk, reducing revenue, and impacting the entire industry."}
            </div>
            <div
              className={`font-playfair font-bold w-16/20 lg:w-13/20 text-[14px] lg:text-[clamp(14px,8.59px+1.375vw,35px)] mx-auto`}
            >
              {lang == "Viet"
                ? "Có thể nói: “Covid - 19 bùng nổ cũng chính là lúc các tổ chức tài chính gặp khó khăn. Nhưng với tôi, đó là lúc bắt đầu chinh phục và gặt hái thành công”"
                : "It can be said: “The outbreak of COVID-19 was when many emerging financial institutions faced even greater challenges, as their operating models and asset structures were not yet resilient enough. But for me, it marked the beginning of conquering challenges and achieving success.”"}
            </div>
          </div>
          <div className={` relative z-20 flex justify-center`}>
            <Button
              unstyled
              className={`
              relative overflow-hidden
              px-5 py-4 lg:px-30 lg:py-6 lg:p-5
              rounded-full lg:rounded-full border-2 border-[#C8971F]
              bg-[linear-gradient(90deg,#1F2833,#042B63)]
              text-[10px] lg:text-[24px] font-bold hover:scale-110 transition-all duration-300 hover:cursor-pointer
              `}
              onClick={openContactForm}
            >
              {/* overlay để làm màu sâu hơn */}
              <div className="absolute inset-0 bg-black/10" />
              <span
                className={`
                relative z-10
                bg-linear-to-r from-[#F3C85F] from-26% via-[#FFECBF] via-66% to-[#C28900]
                bg-clip-text text-transparent font-bold
                `}
              >
                {lang == "Viet"
                  ? "TRAO ĐỔI VỀ CHIẾN LƯỢC CỦA BẠN!"
                  : "LET’S DISCUSS YOUR STRATEGY!"}
              </span>
            </Button>
          </div>
          {/* <Image
            src={DecorBGImage}
            alt="Hard Period"
            className={`w-full h-auto absolute top-[25%] left-0 z-0`}
          /> */}
        </div>

        <div className={`hidden lg:block`}>
          <Image
            src={lang == "Viet" ? StreakImage : StreakImageEng}
            alt="Streak Image"
            className={`w-full h-auto mt-20`}
          />
          <Image
            src={lang == "Viet" ? StreakImage2 : StreakImageEng2}
            alt="Streak Image"
            className={`w-8/10 lg:w-full h-auto mt-20 lg:mt-80 mx-auto lg:px-[15%]`}
          />
          <div
            className={`lg:text-[clamp(45px,25px+1.302vw,50px)] font-bold text-center 
            bg-clip-text text-transparent bg-linear-to-r from-[#F3C85F] from-26% via-[#FFECBF] via-66% to-[#C28900]
            lg:mt-80`}
          >
            {lang == "Viet"
              ? "TƯ DUY PHÁT TRIỂN"
              : "BUSINESS DEVELOPMENT MINDSET IN"}
            <br />
            {lang == "Viet"
              ? "DOANH NGHIỆP TRƯỚC THIÊN TAI"
              : "TIMES OF CRISIS"}
          </div>
          <Image
            src={lang == "Viet" ? StreakImage3 : StreakImageEng3}
            alt="Streak Image"
            className={`w-7/10 lg:w-full h-auto mx-auto lg:px-[15%] lg:mt-15`}
          />
        </div>

        <div className={`block lg:hidden`}>
          <Image
            src={lang == "Viet" ? StreakMobileImage1 : StreakMobileImageEng1}
            alt="Streak Mobile Image"
            className={`w-full h-auto mt-20 lg:mt-20`}
          />
          <Image
            src={lang == "Viet" ? StreakMobileImage2 : StreakMobileImageEng2}
            alt="Streak Mobile Image"
            className={`w-full h-auto mt-40 lg:mt-20`}
          />
          <div
            className={`text-[18px] lg:text-[clamp(45px,-15px+3.9vw,60px)] font-bold text-center mt-40 lg:mt-5
            bg-clip-text text-transparent bg-linear-to-r from-[#F3C85F] from-26% via-[#FFECBF] via-66% to-[#C28900]`}
          >
            {lang == "Viet"
              ? "TƯ DUY PHÁT TRIỂN DOANH"
              : "BUSINESS DEVELOPMENT "}
            <br />
            {lang == "Viet"
              ? "DOANH NGHIỆP TRƯỚC THIÊN TAI"
              : "MINDSET IN TIMES OF CRISIS"}
          </div>
          <Image
            src={lang == "Viet" ? StreakMobileImage3 : StreakMobileImageEng3}
            alt="Streak Mobile Image"
            className={`w-19/20 lg:w-19/20 h-auto mx-auto mt-5`}
          />
        </div>

        <div
          className={`
          relative z-10
          text-[18px] lg:text-[clamp(25px,19.853px+1.31vw,45px)] text-balance text-center my-5 lg:my-10 mt-40
          bg-linear-to-r from-[#F3C85F] from-26% via-[#FFECBF] via-66% to-[#C28900]
          bg-clip-text text-transparent font-bold w-4/5 lg:w-full mx-auto
          lg:mt-80
          `}
        >
          {lang == "Viet"
            ? "GÓC NHÌN CHUYÊN GIA GIAI ĐOẠN BÙNG NỔ"
            : "EXPERT PERSPECTIVES DURING THE BREAKOUT PERIOD"}
        </div>
        <EventSwiper
          events={[
            {
              image: EventImage1,
              title:
                lang == "Viet"
                  ? "TỌA ĐÀM TÁI KHỞI ĐỘNG NỀN KINH TẾ - CƠ HỘI CHO TÀI CHÍNH TIÊU DÙNG"
                  : "ECONOMIC RESTART FORUM – OPPORTUNITIES FOR CONSUMER FINANCE",
              subtitle:
                lang == "Viet"
                  ? "Diễn đàn Đầu tư & Kinh Doanh"
                  : "Investment & Business Forum",
              description:
                lang == "Viet"
                  ? "Đại diện SHBFC nêu lên thực trạng về quy định pháp lý chưa thắt chặt đối với người tiêu dùng trong việc tuân thủ trả nợ dẫn đến thiệt hại cả về vật chất lẫn con người lại thuộc về Công ty Tài chính."
                  : "The representative of SHBFC highlighted that lax regulations on consumer debt repayment have left finance companies bearing the brunt of both financial losses and human safety risks.",
              url: "https://baodautu.vn/live-toa-dam-tai-khoi-dong-nen-kinh-te---co-hoi-cho-tai-chinh-tieu-dung-d122530.html",
            },
            {
              image: EventImage2,
              title:
                lang == "Viet"
                  ? "NĂM KHÓ KHĂN CỦA TÀI CHÍNH TIÊU DÙNG ĐÃ QUA"
                  : "THE TOUGHEST YEAR FOR CONSUMER FINANCE IS OVER",
              subtitle:
                lang == "Viet"
                  ? "Trang Đầu tư, Chứng Khoán"
                  : "Investment & Securities News",
              description:
                lang == "Viet"
                  ? "“Giai đoạn hậu dịch sẽ mở ra nhiều định hướng mới trong việc phát triển kinh doanh, là dịp để các công ty mới cấu trúc lại mô hình hoạt động phù hợp và nhanh chóng ứng dụng công nghệ số để tiết giảm chi phí, đáp ứng xu hướng cho vay tiêu dùng mới”"
                  : "“The post-pandemic phase will open new directions for business development, offering companies the opportunity to restructure their operating models and accelerate digital adoption to reduce costs and meet evolving consumer lending trends.”",
              url: "https://www.tinnhanhchungkhoan.vn/nam-kho-cua-nganh-tai-chinh-tieu-dung-da-qua-post258945.html",
            },
            {
              image: EventImage3,
              title:
                lang == "Viet"
                  ? "“VÀNG THAU LẪN LỘN” - CÔNG TY TÀI CHÍNH TIÊU DÙNG GẶP NHIỀU THÁCH THỨC"
                  : "“A MIX OF GOLD AND GRAVEL” – CONSUMER FINANCE COMPANIES FACE MULTIPLE CHALLENGES",
              subtitle:
                lang == "Viet"
                  ? "Báo Kinh tế & Đô thị"
                  : "Economic & Urban Newspaper",
              description:
                lang == "Viet"
                  ? "Thời gian ngắn hạn chế tăng trưởng dư nợ, làm giảm thu nhập; đồng thời công nghệ phát triển khiến tài chính tiêu dùng phải cạnh tranh gay gắt với Fintech."
                  : "Short-term constraints on credit growth reduced income, while rapid technological advancements intensified competition between consumer finance companies and fintech players.",
              url: "https://kinhtedothi.vn/vang-thau-lan-lon-cong-ty-tai-chinh-tieu-dung-dung-truoc-nhieu-thach-thuc.html",
            },
          ]}
        />
        <div
          className={`flex flex-col lg:flex-row mt-60 lg:mt-40 relative z-20 items-center ${styles.strategyConsultingSection}`}
        >
          <div
            className={`flex flex-col items-center justify-center text-center w-fit lg:w-full shrink-0 mx-auto lg:mx-0 lg:gap-2 3xl:gap-5`}
          >
            <div
              className={`font-playfair text-white italic font-medium text-[16px] lg:text-[clamp(25px,22.427px+0.655vw,35px)] leading-loose mb-2 lg:mb-0`}
            >
              {lang == "Viet" ? "Tư vấn chiến lược" : "Strategic Consulting"}
            </div>
            <div
              className={`
              text-[20px] lg:text-[clamp(3rem,1.125rem+1.9531vw,4.25rem)]
              bg-linear-to-r from-[#F3C85F] from-26% via-[#FFECBF] via-66% to-[#C28900]
              bg-clip-text text-transparent font-bold
              leading-tight
              `}
            >
              <div>{lang == "Viet" ? "GIẢI PHÁP" : "BUSINESS GROWTH"}</div>
              <div>
                {lang == "Viet" ? "PHÁT TRIỂN DOANH NGHIỆP" : " SOLUTIONS"}
              </div>
            </div>
            <div
              className={`w-full lg:w-full text-white font-semibold text-xs lg:text-[clamp(1.125rem,0.5625rem+0.5859vw,1.5rem)] mx-auto lg:mx-0 mt-3`}
            >
              {lang == "Viet"
                ? "Quản lý tốt mô hình doanh nghiệp từ"
                : "Strong in managing business models from"}
            </div>
            <div
              className={`flex flex-row gap-3 lg:gap-5 items-center mt-5 mx-auto lg:mx-0`}
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }} // Bắt đầu ở dưới và mờ
                whileInView={{ opacity: 1, y: 0 }} // Khi hiện vào màn hình thì hiện lên
                viewport={{ once: true }} // Chỉ chạy một lần
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                }}
                className={`text-white font-bold text-center 
                  bg-linear-to-br from-[#999999]/30 via-[#FFFFFF]/30 via-48% to-[#999999]/30 
                  text-[40px] lg:text-[clamp(3.5rem,1.25rem+2.3438vw,5rem)] leading-tight px-5 lg:px-15 py-2 lg:py-5 rounded-tl-[40px] lg:rounded-tl-[70px] rounded-br-[40px] lg:rounded-br-[70px] rounded-tr-[10px] lg:rounded-tr-[20px] rounded-bl-[10px] lg:rounded-bl-[20px]`}
              >
                +50 <br />
                <div className={`text-sm lg:text-[20px] font-semibold`}>
                  {lang == "Viet" ? "Nhân sự" : "Employees"}
                </div>
              </motion.div>
              <span
                className={`text-sm lg:text-[clamp(1.125rem,0.5625rem+0.5859vw,1.5rem)] font-seminbold text-white`}
              >
                {lang == "Viet" ? " đến " : " to "}
              </span>
              <motion.div
                initial={{ opacity: 0, y: 30 }} // Bắt đầu ở dưới và mờ
                whileInView={{ opacity: 1, y: 0 }} // Khi hiện vào màn hình thì hiện lên
                viewport={{ once: true }} // Chỉ chạy một lần
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  delay: 0.8, // Delay để tạo hiệu ứng nối tiếp
                }}
                className={`text-white font-bold text-center 
                  bg-linear-to-br from-[#999999]/30 via-[#FFFFFF]/30 via-48% to-[#999999]/30 
                  text-[40px] lg:text-[clamp(3.5rem,1.25rem+2.3438vw,5rem)] leading-tight px-5 lg:px-15 py-2 lg:py-5 rounded-tl-[40px] lg:rounded-tl-[70px] rounded-br-[40px] lg:rounded-br-[70px] rounded-tr-[10px] lg:rounded-tr-[20px] rounded-bl-[10px] lg:rounded-bl-[20px]`}
              >
                +5000
                <br />
                <div className={`text-sm lg:text-[20px] font-semibold`}>
                  {lang == "Viet" ? "Nhân sự" : "Employees"}
                </div>
              </motion.div>
            </div>
            <Button
              unstyled
              className={`
                relative overflow-hidden
                px-10 lg:px-35 py-2 lg:py-4 mt-5 lg:mt-15
                rounded-full border-2 border-[#C8971F]
                bg-[linear-gradient(90deg,#1F2833,#042B63)]
                text-[14px] lg:text-[clamp(25px,21.14px+0.982vw,40px)]
                animate-heartbeat
                hover:cursor-pointer hover:opacity-80 opacity-100 transition-all duration-300
              `}
              onClick={openContactForm}
            >
              <span
                className={`
                relative z-10
                bg-linear-to-r from-[#F3C85F] from-26% via-[#FFECBF] via-66% to-[#C28900]
                bg-clip-text text-transparent font-extrabold
                `}
              >
                {lang == "Viet" ? "TRAO ĐỔI NGAY!" : "LET’S TALK NOW!"}
              </span>
            </Button>
          </div>
        </div>
        <div className={`w-full flex flex-col`}>
          <div
            className={`flex flex-col lg:flex-row pt-30 pb-5 lg:py-60 lg:px-[15%] justify-between items-center w-8/10 mx-auto lg:mx-0 lg:w-full `}
          >
            <div
              className={`bg-clip-text bg-linear-to-r from-[#FFFFFF] to-[#999999] text-transparent 
                text-center lg:text-left`}
            >
              <div
                className={`font-playfair text-2xl lg:text-[clamp(2.25rem,-0.375rem+2.7344vw,4rem)] font-medium`}
              >
                {lang == "Viet" ? "Đồng hành toàn diện" : "End-to-end support"}
              </div>
              <div
                className={`font-semibold text-[8px] lg:text-[clamp(1.25rem,-0.25rem+1.5625vw,2.25rem)]`}
              >
                {lang == "Viet"
                  ? "Phát triển vững mạnh cùng đội ngũ chuyên gia tại PNP"
                  : "Growing stronger with the expert team at PNP"}
              </div>
            </div>
            <a>
              <Button
                unstyled
                className={`px-4 lg:px-10 border-2 border-white rounded-full py-2 lg:py-4 mt-5 lg:mt-0 bg-[linear-gradient(90deg,#E3B266,#F5EEDB_91%)] text-[10px] lg:text-[clamp(1rem,0.25rem+0.7813vw,1.5rem)] font-bold hover:scale-110 transition-all duration-300 hover:cursor-pointer`}
                label={
                  lang == "Viet"
                    ? "HIỂU THÊM VỀ ĐỘI NGŨ PNP"
                    : "LEARN ABOUT THE PNP TEAM"
                }
              />
            </a>
          </div>
          <Image
            src={BannerImage}
            alt="Banner Image"
            className={`w-full h-auto mt-5`}
          />
        </div>
        <div className={`relative ${styles.growthHackSection}`}>
          <Image
            src={lang == "Viet" ? BusinessGrowth : BusinessGrowthEng}
            alt="Hard Period"
            className={`w-9/10 lg:w-7/10 h-auto bottom-0 left-0 z-0 pb-40 lg:pb-50 3xl:pb-60 4xl:pb-80 pt-10 lg:pt-40 mx-auto`}
          />
          <Image
            src={HumanImage}
            alt="Hard Period"
            className={`w-full h-auto absolute bottom-35 lg:bottom-0 left-0 z-10`}
          />
          <div
            className={`absolute bottom-0 left-0 z-20 h-150 lg:h-200 flex justify-center items-center w-full bg-linear-to-t from-[#095DF1] from-22% to-transparent to-44%`}
          >
            <div
              id="growth-hack"
              className={`mt-auto text-[14px] lg:text-[clamp(13px,8.625px+1.113vw,30px)] text-white pt-10 lg:pt-20 pb-20 lg:pb-20 text-center`}
            >
              <div>
                {lang == "Viet"
                  ? "Bạn là Leader trẻ đang cảm thấy "
                  : "Are you a young leader feeling "}
                <span className={`text-[#12F4FE] font-bold`}>
                  {lang == "Viet" ? "“MẮC KẸT”" : "“STUCK”"}
                </span>
              </div>
              <div>
                {lang == "Viet"
                  ? "trên hành trình sự nghiệp của chính mình?"
                  : "in your own career journey?"}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image
        src={lang == "Viet" ? EndImage : EndImageEng}
        alt="End Image"
        className={`w-full h-auto hidden lg:block -mt-10`}
      />
      <Image
        src={lang == "Viet" ? EndMobileImage : EndMobileImageEng}
        alt="End Mobile Image"
        className={`w-full h-auto block lg:hidden`}
      />
    </>
  );
};

export default ExplotionPeriodSection;
