"use client";
import LatestEventsText from "@/assets/images/texts/LatestEventsSection-LatestEventsText-1.png";
import EventImage1 from "@/assets/images/assets/LatestEventsSection-EventImage-1.png";
import EventImage2 from "@/assets/images/assets/LatestEventsSection-EventImage-2.png";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import styles from "./LatestEventsSection.module.scss";
import { Button } from "primereact/button";
import { Carousel } from "primereact/carousel";
import { useEffect, useState } from "react";

const LatestEventsSection = () => {
  const { lang } = useLanguage();
  const [autoplay, setAutoplay] = useState<number>(0);

  useEffect(() => {
    const checkMobile = () => {
      // Kiểm tra nếu chiều rộng màn hình < 1024px (breakpoint lg của Tailwind)
      if (window.innerWidth < 1024) {
        setAutoplay(5000); // Chạy auto mỗi 4s trên Mobile
      } else {
        setAutoplay(0); // Tắt auto trên Desktop
      }
    };

    checkMobile(); // Kiểm tra lần đầu

    // Lắng nghe sự kiện thay đổi kích thước màn hình
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  const events = [
    {
      image: EventImage1,
      url: "https://www.linkedin.com/posts/tran-thanh-nu-tuong-vy-a9252732_aiesec-aiesecinvietnam-h4tf-ugcPost-7450400637424668672-o5Zv?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD1t6NcB8uGFvBjMG1iEdjvS794c0SIPOq0",
      title: {
        Viet: 'WORKSHOP SERIES DAY 2: "WHO\'S REALLY IN CONTROL?"',
        Eng: 'WORKSHOP SERIES DAY 2: "WHO\'S REALLY IN CONTROL?"',
      },
      guest: { Viet: "Diễn giả", Eng: "Speaker" },
      time: "3/5/2026",
      destination: "Online",
    },
    {
      image: EventImage2,
      url: "https://www.linkedin.com/posts/tran-thanh-nu-tuong-vy-a9252732_for-professionals-in-banking-and-finance-share-7450433602925801472-Ft21?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD1t6NcB8uGFvBjMG1iEdjvS794c0SIPOq0",
      title: {
        Viet: "WORLD FINANCIAL INNOVATION SERIES",
        Eng: "WORLD FINANCIAL INNOVATION SERIES",
      },
      guest: { Viet: "Khách mời", Eng: "Guests" },
      time: "19 - 20/5/2026",
      destination: { Viet: "Meliá Hà Nội", Eng: "Meliá Ha Noi" },
    },
  ];
  const renderInfoBox = (
    title: string,
    guest: string,
    time: string,
    destination: string,
  ) => {
    return (
      <div className="w-full bg-linear-to-br from-[#999999]/30 from-0% via-[#FFFFFF]/30 via-48% to-[#999999]/30 to-100% text-white rounded-tl-[40px] rounded-br-[40px] rounded-bl-[15px] rounded-tr-[15px] lg:rounded-tl-[61px] lg:rounded-br-[61px] lg:rounded-bl-[20px] lg:rounded-tr-[20px]">
        {/* Title Box */}
        <div
          className={`
          /* Mobile: size nhỏ hơn, padding ít hơn */
          text-[15px] lg:text-[clamp(25px,-15px+2.604vw,35px)]
          lg:min-h-[clamp(105px,73px+2.083vw,113px)]
          px-6 lg:px-12 
          
          leading-tight lg:leading-normal 
          #text-balance
          text-left
          line-clamp-2
          font-bold py-2 w-full border-b-[1px] lg:border-b-2 border-white
          justify-center items-center flex
        `}
        >
          {title}
        </div>

        {/* Info Row (Guest - Time - Destination) */}
        <div
          className={`
          flex flex-row 
          justify-between items-center 
          px-6 lg:px-12 py-3 lg:py-2 
          w-full 
          
          /* Mobile: text nhỏ hơn, Desktop: 25px */
          text-[12px] lg:text-[clamp(20px,-12px+2.083vw,28px)]
          gap-2 lg:gap-0
          ${styles.infoBox}
        `}
        >
          <span className="font-medium lg:font-normal text-center">
            {guest}
          </span>
          <span className="font-medium lg:font-normal text-center">{time}</span>
          <span className="font-medium lg:font-normal text-center">
            {destination}
          </span>
        </div>
      </div>
    );
  };

  const eventItemTemplate = (event: any) => {
    return (
      <div className="flex flex-col h-full lg:gap-8 px-4 lg:px-10">
        {/* Phần Ảnh */}
        <div className="flex-1 flex flex-col justify-center min-h-[250px]">
          <Image
            src={event.image}
            alt="Event"
            className="w-full h-auto object-contain rounded-xl"
          />
        </div>

        {/* Phần Thông tin */}
        <div className="flex flex-col items-center gap-8">
          {renderInfoBox(
            lang === "Viet" ? event.title.Viet : event.title.Eng,
            lang === "Viet" ? event.guest.Viet : event.guest.Eng,
            event.time,
            typeof event.destination === "string"
              ? event.destination
              : lang === "Viet"
                ? event.destination.Viet
                : event.destination.Eng,
          )}
          <a href={event.url} target="_blank" rel="noopener noreferrer">
            <Button
              unstyled
              className="px-10 lg:px-15 py-3 bg-linear-to-r from-[#12F4FE] to-white text-black font-bold text-[16px] lg:text-[28px] border-white border-2 rounded-2xl lg:rounded-4xl hover:cursor-pointer transition-transform hover:scale-105 animate-heartbeat"
            >
              {lang === "Viet" ? "TÌM HIỂU THÊM" : "EXPLORE MORE"}
            </Button>
          </a>
        </div>
      </div>
    );
  };

  return (
    <div id="latest-events" className={`${styles.container} py-10 lg:py-20`}>
      {/* <Image
        src={lang == "Viet" ? LatestEventsText : LatestEventsText}
        alt="Latest Events"
        className="mx-auto mb-8 w-4/5"
      /> */}
      <div className={`mb-5 lg:mb-15`}>
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
          <div className="flex flex-row justify-center text-[30px] lg:text-[65px] gap-2 lg:gap-4 font-bold">
            <span className={`text-white`}>
              {lang == "Viet" ? "SỰ KIỆN" : "LATEST"}
            </span>
            <span className={`text-[#12F4FE]`}>
              {lang == "Viet" ? "MỚI NHẤT" : "EVENTS"}
            </span>
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
      <div className="lg:mt-10">
        <Carousel
          key={autoplay > 0 ? "auto-on" : "auto-off"}
          value={events}
          numVisible={2} // Hiện 2 item trên Desktop
          numScroll={1}
          responsiveOptions={[
            {
              breakpoint: "1024px",
              numVisible: 2,
              numScroll: 1,
            },
            {
              breakpoint: "768px",
              numVisible: 1, // Hiện 1 item trên Mobile
              numScroll: 1,
            },
          ]}
          itemTemplate={eventItemTemplate}
          circular // Lặp vô tận
          autoplayInterval={autoplay} // Tự động chạy
          showIndicators={false} // Hiện các dấu chấm bên dưới
          showNavigators={false} // Hiện mũi tên trái/phải
          className={`w-9/10 mx-auto`}
        />
      </div>
    </div>
  );
};

export default LatestEventsSection;
