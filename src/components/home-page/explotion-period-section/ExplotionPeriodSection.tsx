"use client";
import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import styles from "./ExplotionPeriodSection.module.scss";
import EventImage1 from "@/assets/images/assets/ExplotionPeriodSection-EventImage-1.png";
import ProffessorViewText1 from "@/assets/images/texts/ExplotionPeriodSection-ProffessorViewText-1.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import Image, { StaticImageData } from "next/image";
import { SwiperOptions } from "swiper/types";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "primereact/button";
import DecorBGImage from "@/assets/images/assets/ExplotionPeriodSection-DecorBGImage-1.png";
import StreakImage from "@/assets/images/assets/ExplotionPeriodSection-StreakImage-1.png";
import StreakMobileImage from "@/assets/images/assets/ExplotionPeriodSection-StreakMobileImage-1.png";
interface Event {
  image: StaticImageData | string;
  title: string;
  subtitle?: string;
  description: string;
}

const EventSwiper = ({ events }: { events: Event[] }) => {
  const { lang } = useLanguage();
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
    },
  };
  return (
    <div className={`relative `}>
      <Swiper
        {...swiperConfig}
        className={`w-full !overflow-hidden ${styles.mySwiper}`}
      >
        {[...events, ...events].map((event, index) => (
          <SwiperSlide
            key={index}
            className="flex justify-center items-center transition-all duration-500"
          >
            {({ isActive }) => (
              <div
                className={`
                  w-full rounded-[30px] lg:rounded-[61px] text-white transition-all duration-500
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
                <div className="w-full rounded-[25px] lg:rounded-[52px] overflow-hidden">
                  <Image
                    src={event.image}
                    alt="event"
                    className="w-full h-auto object-cover"
                  />
                </div>

                {/* Content */}
                <div className="text-center mt-3 lg:mt-[15px] mx-2 lg:mx-5">
                  {/* Title: Mobile ~20px, Desktop 32px */}
                  <div className="text-[20px] lg:text-[32px] font-bold uppercase leading-tight line-clamp-2">
                    {event.title}
                  </div>

                  {/* Subtitle: Mobile 14px, Desktop 18px */}
                  <div className="text-[14px] lg:text-[18px] opacity-90">
                    {event.subtitle}
                  </div>

                  {/* Description: Mobile 14px, Desktop 20px - Ẩn bớt trên mobile nếu quá dài */}
                  <div className="text-[14px] lg:text-[20px] my-2 lg:my-[10px] italic leading-relaxed lg:leading-loose lg:mt-5 line-clamp-3 lg:line-clamp-none">
                    {event.description}
                  </div>

                  {/* Button: Dùng clamp hoặc Mobile/Desktop size */}
                  <button
                    className={`
                      bg-[radial-gradient(circle,#5268D2_0%,#7DB3E2_100%)] 
                      border-2 lg:border-3 border-white rounded-full
                      /* Font size & Padding thu nhỏ */
                      text-[16px] lg:text-[30px] font-bold 
                      px-4 lg:px-8 py-2 mt-3 lg:mt-5
                      transition-all duration-300 hover:brightness-110
                    `}
                  >
                    {lang == "Viet" ? "XEM THÊM" : "VIEW MORE"}
                  </button>
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
          bg-[#6ca0f5] hover:bg-[#4a85f0] rounded-full text-white font-bold shadow-md transition-all active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed hover:cursor-pointer`}
      >
        <ArrowLeft strokeWidth={3} size={24} className="lg:hidden" />{" "}
        {/* Size nhỏ cho mobile */}
        <ArrowLeft strokeWidth={3} size={36} className="hidden lg:block" />{" "}
        {/* Size lớn cho desktop */}
      </button>

      {/* Nút Next - Style y hệt ảnh */}
      <button
        className={`custom-next-btn absolute right-[2%] top-1/2 -translate-y-1/2 z-20 
          w-10 h-10 lg:w-16 lg:h-16 flex items-center justify-center 
          bg-[#6ca0f5] hover:bg-[#4a85f0] rounded-full text-white font-bold shadow-md transition-all active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed hover:cursor-pointer`}
      >
        {/* Dùng icon mũi tên mỏng, trắng */}
        <ArrowRight strokeWidth={3} size={24} className="lg:hidden" />{" "}
        <ArrowRight
          strokeWidth={3}
          size={36}
          className="hidden lg:block"
        />{" "}
      </button>
    </div>
  );
};

const ExplotionPeriodSection = () => {
  const { lang } = useLanguage();

  return (
    <div
      className={`${styles.container} bg-linear-to-b from-[#1F2833] to-[#07367B] relative`}
    >
      <div
        className={`lg:hidden bg-clip-text text-transparent bg-linear-to-r from-[#F3C85F] from-26% via-[#FFECBF] via-66% to-[#C28900] text-[clamp(16px,3.389px+3.209vw,65px)] font-extrabold text-center mb-10`}
      >
        {lang == "Viet" ? "CHINH PHỤC THÀNH CÔNG" : "CHINH PHỤC THÀNH CÔNG"}
        <br />
        {lang == "Viet"
          ? "GIAI ĐOẠN KHỦNG HOẢNG NGÀNH"
          : "GIAI ĐOẠN KHỦNG HOẢNG NGÀNH"}
      </div>
      <div
        className={`w-full relative aspect-19/12 max-w-480 flex flex-col items-center lg:gap-10 lg:py-35`}
      >
        <div
          className={`hidden lg:block bg-clip-text text-transparent bg-linear-to-r from-[#F3C85F] from-26% via-[#FFECBF] via-66% to-[#C28900] text-[clamp(16px,3.389px+3.209vw,65px)] font-extrabold text-center mb-10`}
        >
          {lang == "Viet" ? "CHINH PHỤC THÀNH CÔNG" : "CHINH PHỤC THÀNH CÔNG"}
          <br />
          {lang == "Viet"
            ? "GIAI ĐOẠN KHỦNG HOẢNG NGÀNH"
            : "GIAI ĐOẠN KHỦNG HOẢNG NGÀNH"}
        </div>
        <div className={`text-white text-center mt-15`}>
          <div
            className={`font-light italic w-17/20 lg:w-13/20 text-[clamp(10px,6.136px+0.982vw,25px)] mx-auto`}
          >
            {lang == "Viet"
              ? "Trong giai đoạn chống dịch, ngành tài chính Việt Nam lao đao khi phải đối mặt với loạt vấn đề. Dòng tiền tắc nghẽn, nhu cầu tín dụng giảm, nợ xấu gia tăng, buộc các tổ chức phải tái cấu trúc và siết chặt quản trị rủi ro để tồn tại."
              : "Trong giai đoạn chống dịch, ngành tài chính Việt Nam lao đao khi phải đối mặt với loạt vấn đề. Dòng tiền tắc nghẽn, nhu cầu tín dụng giảm, nợ xấu gia tăng, buộc các tổ chức phải tái cấu trúc và siết chặt quản trị rủi ro để tồn tại."}
          </div>
          <div
            className={`font-bold w-18/20 lg:w-15/20 text-[clamp(14px,2.273px+1.964vw,30px)] mx-auto lg:mt-5`}
          >
            {lang == "Viet"
              ? "“Covid - 19 bùng nổ cũng chính là lúc các tổ chức tài chính gặp khó khăn. Nhưng với tôi, đó là lúc bắt đầu chinh phục và gặt hái thành công”"
              : "“Covid - 19 bùng nổ cũng chính là lúc các tổ chức tài chính gặp khó khăn. Nhưng với tôi, đó là lúc bắt đầu chinh phục và gặt hái thành công”"}
          </div>
        </div>
        <div className={`mt-15 relative z-20 flex justify-center`}>
          <Button
            unstyled
            className={`
              relative overflow-hidden
              px-15 py-4
              rounded-2xl border-2 border-[#C8971F]
              bg-[linear-gradient(90deg,#1F2833,#042B63)]
              text-[clamp(16px,2.273px+1.964vw,35px)] font-bold
            `}
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
              {lang == "Viet" ? "TÌM HIỂU NGAY" : "LEARN MORE"}
            </span>
          </Button>
        </div>
        <Image
          src={DecorBGImage}
          alt="Hard Period"
          className={`w-full h-auto absolute top-0 left-0 z-0`}
        />
      </div>

      <div>
        <Image
          src={StreakImage}
          alt="Streak Image"
          className={`hidden lg:block w-full h-auto mt-20`}
        />
        <Image
          src={StreakMobileImage}
          alt="Streak Mobile Image"
          className={`block lg:hidden w-full h-auto mt-20`}
        />
      </div>

      <div
        className={`
          relative z-10
          text-[clamp(25px,14.705px+2.619vw,65px)] text-balance text-center my-10
          bg-linear-to-r from-[#F3C85F] from-26% via-[#FFECBF] via-66% to-[#C28900]
          bg-clip-text text-transparent font-bold
        `}
      >
        {lang == "Viet"
          ? "GÓC NHÌN CHUYÊN GIA GIAI ĐOẠN BÙNG NỔ"
          : "GÓC NHÌN CHUYÊN GIA GIAI ĐOẠN BÙNG NỔ"}
      </div>
      <EventSwiper
        events={[
          {
            image: EventImage1,
            title:
              "TỌA ĐÀM TÁI KHỞI ĐỘNG NỀN KINH TẾ - CƠ HỘI CHO TÀI CHÍNH TIÊU DÙNG",
            subtitle: "Diễn đàn Đầu tư & Kinh Doanh",
            description:
              "Đại diện SHBFC nêu lên thực trạng về quy định pháp lý chưa thắt chặt đối với người tiêu dùng trong việc tuân thủ trả nợ dẫn đến thiệt hại cả về vật chất lẫn con người lại thuộc về Công ty Tài chính, được đúc kết từ dữ liệu thực tế trong khảo sát tại 6000+ doanh nghiệp SMEs mùa Covid-19",
          },
          {
            image: EventImage1,
            title:
              "TỌA ĐÀM TÁI KHỞI ĐỘNG NỀN KINH TẾ - CƠ HỘI CHO TÀI CHÍNH TIÊU DÙNG",
            subtitle: "Diễn đàn Đầu tư & Kinh Doanh",
            description:
              "Đại diện SHBFC nêu lên thực trạng về quy định pháp lý chưa thắt chặt đối với người tiêu dùng trong việc tuân thủ trả nợ dẫn đến thiệt hại cả về vật chất lẫn con người lại thuộc về Công ty Tài chính, được đúc kết từ dữ liệu thực tế trong khảo sát tại 6000+ doanh nghiệp SMEs mùa Covid-19",
          },
          {
            image: EventImage1,
            title:
              "TỌA ĐÀM TÁI KHỞI ĐỘNG NỀN KINH TẾ - CƠ HỘI CHO TÀI CHÍNH TIÊU DÙNG",
            subtitle: "Diễn đàn Đầu tư & Kinh Doanh",
            description:
              "Đại diện SHBFC nêu lên thực trạng về quy định pháp lý chưa thắt chặt đối với người tiêu dùng trong việc tuân thủ trả nợ dẫn đến thiệt hại cả về vật chất lẫn con người lại thuộc về Công ty Tài chính, được đúc kết từ dữ liệu thực tế trong khảo sát tại 6000+ doanh nghiệp SMEs mùa Covid-19",
          },
        ]}
      />
      <div className={`flex flex-col lg:flex-row mt-15 lg:mt-30 relative z-20`}>
        <div
          className={`text-center lg:text-left lg:pl-[15%] w-fit shrink-0 mx-auto lg:mx-0`}
        >
          <div
            className={`text-white italic font-medium text-[clamp(25px,19.846px+1.311vw,45px)]`}
          >
            {lang == "Viet" ? "TƯ VẤN CHIẾN LƯỢC" : "CONSULTING STRATEGY"}
          </div>
          <div
            className={`
              text-[clamp(40px,6.25vw,90px)]
              bg-linear-to-r from-[#F3C85F] from-26% via-[#FFECBF] via-66% to-[#C28900]
              bg-clip-text text-transparent font-bold
            `}
          >
            <div>{lang == "Viet" ? "GIẢI PHÁP" : "GIẢI PHÁP"}</div>
            <div>{lang == "Viet" ? "PHÁT TRIỂN" : "PHÁT TRIỂN"}</div>
            <div>{lang == "Viet" ? "DOANH NGHIỆP" : "DOANH NGHIỆP"}</div>
          </div>
          <Button
            unstyled
            className={`
              relative overflow-hidden
              px-10 lg:px-35 py-4 mt-5
              rounded-2xl lg:rounded-4xl border-2 border-[#C8971F]
              bg-[linear-gradient(90deg,#1F2833,#042B63)]
              text-[clamp(25px,17.273px+1.965vw,55px)]
            `}
          >
            <span
              className={`
                relative z-10
                bg-linear-to-r from-[#F3C85F] from-26% via-[#FFECBF] via-66% to-[#C28900]
                bg-clip-text text-transparent font-extrabold
              `}
            >
              {lang == "Viet" ? "TƯ VẤN NGAY" : "TƯ VẤN NGAY"}
            </span>
          </Button>
        </div>
        <div
          className={`lg:w-7/20! w-11/20 h-50 lg:h-120 bg-white ml-auto mt-10`}
        ></div>
      </div>
      <div
        className={`relative z-20 mt-15 lg:mt-40 w-9/10 lg:w-15/20 text-center mx-auto`}
      >
        <div
          className={`mt-auto text-[clamp(13px,3.473px+2.423vw,50px)] text-white`}
        >
          <div>
            {lang == "Viet"
              ? "Bạn là Leader trẻ đang cảm thấy "
              : "Bạn là Leader trẻ đang cảm thấy "}
            <span className={`text-[#12F4FE] font-bold`}>
              {lang == "Viet" ? "“MẮC KẸT”" : "“MẮC KẸT”"}
            </span>
          </div>
          <div>
            {lang == "Viet"
              ? "trên hành trình sự nghiệp của chính mình?"
              : "trên hành trình sự nghiệp của chính mình?"}
          </div>
        </div>
      </div>
      <div
        className={`absolute bottom-0 left-0 z-0 h-100 lg:h-200 w-full bg-linear-to-t from-[#095DF1] from-22% to-transparent to-44%`}
      ></div>
    </div>
  );
};

export default ExplotionPeriodSection;
