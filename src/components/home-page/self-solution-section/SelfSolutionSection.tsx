"use client";
import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import ImageBox1 from "@/assets/images/assets/SelfSolutionSection-ImageBox-1.png";
import ImageBox2 from "@/assets/images/assets/SelfSolutionSection-ImageBox-2.png";
import ImageBox3 from "@/assets/images/assets/SelfSolutionSection-ImageBox-3.png";
import ImageBox4 from "@/assets/images/assets/SelfSolutionSection-ImageBox-4.png";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const SelftSolutionSection = () => {
  const { lang } = useLanguage();
  const router = useRouter();
  const AdaptiveLink = ({
    href,
    children,
    className,
  }: {
    href: string;
    children: React.ReactNode;
    className?: string;
  }) => {
    const router = useRouter();
    const lastClickTime = React.useRef<number>(0);

    const handleClick = (e: React.MouseEvent) => {
      // Kiểm tra thiết bị có hỗ trợ cảm ứng
      const isTouchDevice =
        "ontouchstart" in window || navigator.maxTouchPoints > 0;

      if (isTouchDevice) {
        const now = Date.now();
        // Nếu khoảng cách giữa 2 lần chạm < 300ms thì chuyển trang
        if (now - lastClickTime.current < 300) {
          router.push(href);
        } else {
          // Chạm lần đầu: chặn chuyển hướng và lưu thời gian
          e.preventDefault();
          lastClickTime.current = now;
        }
      } else {
        // Desktop: Để thẻ <a> hoạt động mặc định (1 click)
        // Không cần gọi router.push ở đây để giữ tính năng "Open in new tab" của trình duyệt
      }
    };

    return (
      <a href={href} onClick={handleClick} className={className}>
        {children}
      </a>
    );
  };
  return (
    <div
      className={`bg-linear-to-tr from-[#1F2833] from-15% to-[#0D326A] to-91% pt-10 lg:pt-15 -mt-1`}
    >
      <div className={`text-center mb-10`}>
        <div className={`text-white lg:text-[50px] font-semibold`}>
          {lang === "Viet" ? "Khám phá nhanh" : "Quick Explore"}
        </div>
        <div
          className={`text-transparent bg-clip-text bg-linear-to-r from-[#FFFFFF] to-[#999999] text-xl font-extrabold
            lg:text-[clamp(55px,-25px+5.208vw,75px)]`}
        >
          {lang === "Viet"
            ? "GIẢI PHÁP CHO RIÊNG BẠN"
            : "SOLUTIONS TAILORED FOR YOU"}
        </div>
      </div>
      <div
        className={`grid grid-cols-2 grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 lg:gap-5 lg:mx-20`}
      >
        <AdaptiveLink href="#covid-period" className="relative">
          <Image
            src={ImageBox1}
            alt="Image Box 1"
            className={`w-full h-auto`}
          />
          <div
            className={`
              absolute flex flex-col justify-between top-0 left-0 w-full h-full p-4 lg:p-8
              text-white z-10
              /* Tạo lớp gradient ẩn bằng before */
              before:content-[''] before:absolute before:inset-0 
              before:bg-[linear-gradient(to_bottom,rgba(3,70,166,0.8),rgba(1,27,64,0.8))] 
              before:opacity-0 hover:before:opacity-100 
              before:transition-opacity before:duration-300 before:-z-10
            `}
          >
            <div
              className={`font-bold lg:text-[clamp(25px,5.05px+1.302vw,30px)]`}
            >
              {lang == "Viet"
                ? "TƯ VẤN CHIẾN LƯỢC PHÁT TRIỂN DOANH NGHIỆP"
                : "STRATEGIC BUSINESS DEVELOPMENT CONSULTING"}
            </div>
            <div
              className={`font-medium text-[10px] lg:text-[clamp(15px,-4.92px+1.302vw,20px)]`}
            >
              {lang == "Viet"
                ? "Từ câu chuyện chuyển mình đầy “ngoạn mục” mùa đại dịch, hãy cùng tôi tìm kiếm giải pháp thực tế cho doanh nghiệp của bạn."
                : "From a remarkable transformation during the pandemic, let’s uncover practical solutions for your business."}
            </div>
          </div>
        </AdaptiveLink>
        <AdaptiveLink href="#training-programs" className={`relative`}>
          <Image
            src={ImageBox2}
            alt="Image Box 2"
            className={`w-full h-auto`}
          />
          <div
            className={`
              absolute flex flex-col justify-between top-0 left-0 w-full h-full p-4 lg:p-8
              text-white z-10
              
              /* Tạo lớp gradient ẩn bằng before */
              before:content-[''] before:absolute before:inset-0 
              before:bg-[linear-gradient(to_bottom,rgba(3,70,166,0.8),rgba(1,27,64,0.8))] 
              before:opacity-0 hover:before:opacity-100 
              before:transition-opacity before:duration-300 before:-z-10
            `}
          >
            <div
              className={`font-bold lg:text-[clamp(25px,5.05px+1.302vw,30px)]`}
            >
              {lang == "Viet"
                ? "CHƯƠNG TRÌNH ĐÀO TẠO NỘI BỘ"
                : "INTERNAL TRAINING PROGRAMS"}
            </div>
            <div
              className={`font-medium text-[10px] lg:text-[clamp(15px,-4.92px+1.302vw,20px)]`}
            >
              {lang == "Viet"
                ? "Để nhân sự không bao giờ rơi vào trạng thái “đuối năng lực” trước sự phát triển nhanh chóng, chương trình đào tạo nội bộ được xây dựng riêng phù hợp với định hướng doanh nghiệp."
                : "To ensure your team never falls behind in capability amid rapid change, customized training programs are designed to align with your business direction."}
            </div>
          </div>
        </AdaptiveLink>
        <AdaptiveLink href="#growth-hack" className={`relative`}>
          <Image
            src={ImageBox3}
            alt="Image Box 3"
            className={`w-full h-auto`}
          />
          <div
            className={`
              absolute flex flex-col justify-between top-0 left-0 w-full h-full p-4 lg:p-8
              text-white z-10
              
              /* Tạo lớp gradient ẩn bằng before */
              before:content-[''] before:absolute before:inset-0 
              before:bg-[linear-gradient(to_bottom,rgba(3,70,166,0.8),rgba(1,27,64,0.8))] 
              before:opacity-0 hover:before:opacity-100 
              before:transition-opacity before:duration-300 before:-z-10
            `}
          >
            <div
              className={`font-bold lg:text-[clamp(25px,5.05px+1.302vw,30px)]`}
            >
              {lang == "Viet"
                ? "BÍ KÍP BỨT PHÁ SỰ NGHIỆP TÀI CHÍNH"
                : "CAREER BREAKTHROUGH IN FINANCE"}
            </div>
            <div
              className={`font-medium text-[10px] lg:text-[clamp(15px,-4.92px+1.302vw,20px)]`}
            >
              {lang == "Viet"
                ? "Bạn là Leader nhưng đang cảm thấy “bế tắc” trong việc phát triển nghề nghiệp, hãy để tôi “tháo gỡ điểm nghẽn” đó cho bạn."
                : "If you’re a leader feeling “stuck” in your career growth, let me help you remove those bottlenecks."}
            </div>
          </div>
        </AdaptiveLink>
        <AdaptiveLink href="#young-partners" className={`relative`}>
          <Image
            src={ImageBox4}
            alt="Image Box 4"
            className={`w-full h-auto`}
          />
          <div
            className={`
              absolute flex flex-col justify-between top-0 left-0 w-full h-full p-4 lg:p-8
              text-white z-10
              
              /* Tạo lớp gradient ẩn bằng before */
              before:content-[''] before:absolute before:inset-0 
              before:bg-[linear-gradient(to_bottom,rgba(3,70,166,0.8),rgba(1,27,64,0.8))] 
              before:opacity-0 hover:before:opacity-100 
              before:transition-opacity before:duration-300 before:-z-10
            `}
          >
            <div
              className={`font-bold lg:text-[clamp(25px,5.05px+1.302vw,30px)]`}
            >
              {lang == "Viet"
                ? "DIỄN GIẢ CÙNG NGƯỜI TRẺ PHÁT TRIỂN"
                : "SPEAKING & YOUTH DEVELOPMENT"}
            </div>
            <div
              className={`font-medium text-[10px] lg:text-[clamp(15px,-4.92px+1.302vw,20px)]`}
            >
              {lang == "Viet"
                ? "Luôn đồng hành cùng người trẻ, hãy để tôi lan tỏa giá trị và kinh nghiệm của mình để đóng góp thêm vào hành trình nuôi dưỡng nhân tài trẻ."
                : "Committed to supporting young professionals, I aim to share my experience and create value in nurturing the next generation of talent."}
            </div>
          </div>
        </AdaptiveLink>
      </div>
      <div
        className={`h-10 lg:h-15 bg-linear-to-b from-[#1e2936] to-[#0a3472]`}
      ></div>
    </div>
  );
};

export default SelftSolutionSection;
