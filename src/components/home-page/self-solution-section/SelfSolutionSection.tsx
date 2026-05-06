"use client";
import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import ImageBox1 from "@/assets/images/assets/SelfSolutionSection-ImageBox-1.png";
import ImageBox2 from "@/assets/images/assets/SelfSolutionSection-ImageBox-2.png";
import ImageBox3 from "@/assets/images/assets/SelfSolutionSection-ImageBox-3.png";
import ImageBox4 from "@/assets/images/assets/SelfSolutionSection-ImageBox-4.png";
import Image from "next/image";
import Link from "next/link";

const SelftSolutionSection = () => {
  const { lang } = useLanguage();
  return (
    <div
      className={`bg-linear-to-tr from-[#1F2833] from-15% to-[#0D326A] to-91% pt-5 lg:pt-15 -mt-1`}
    >
      <div className={`text-center mb-10`}>
        <div className={`text-white lg:text-[50px] font-semibold`}>
          {lang === "Viet" ? "Khám phá nhanh" : "Quick Explore"}
        </div>
        <div
          className={`text-transparent bg-clip-text bg-linear-to-r from-[#FFFFFF] to-[#999999] text-4xl font-extrabold
            lg:text-[clamp(60px,-20px+5.208vw,80px)]`}
        >
          {lang === "Viet"
            ? "GIẢI PHÁP CHO RIÊNG BẠN"
            : "SOLUTIONS TAILORED FOR YOU"}
        </div>
      </div>
      <div
        className={`grid grid-cols-2 grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 `}
      >
        <Link href="#covid-period" className={`relative`}>
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
              className={`font-bold text-lg lg:text-[clamp(40px,2.604vw,50px)]`}
            >
              {lang == "Viet"
                ? "TƯ VẤN CHIẾN LƯỢC PHÁT TRIỂN DOANH NGHIỆP"
                : "STRATEGIC BUSINESS DEVELOPMENT CONSULTING"}
            </div>
            <div
              className={`font-medium text-sm lg:text-[clamp(20px,1.302vw,25px)]`}
            >
              {lang == "Viet"
                ? "Từ câu chuyện chuyển mình đầy “ngoạn mục” mùa đại dịch, hãy cùng tôi tìm kiếm giải pháp thực tế cho doanh nghiệp của bạn."
                : "From a remarkable transformation during the pandemic, let’s uncover practical solutions for your business."}
            </div>
          </div>
        </Link>
        <Link href="#training-partners" className={`relative`}>
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
            <div className={`font-bold lg:text-[clamp(40px,2.604vw,50px)]`}>
              {lang == "Viet"
                ? "CHƯƠNG TRÌNH ĐÀO TẠO NỘI BỘ"
                : "INTERNAL TRAINING PROGRAMS"}
            </div>
            <div
              className={`font-medium text-sm lg:text-[clamp(20px,1.302vw,25px)]`}
            >
              {lang == "Viet"
                ? "Để nhân sự không bao giờ rơi vào trạng thái “đuối năng lực” trước sự phát triển nhanh chóng, chương trình đào tạo nội bộ được xây dựng riêng phù hợp với định hướng doanh nghiệp."
                : "To ensure your team never falls behind in capability amid rapid change, customized training programs are designed to align with your business direction."}
            </div>
          </div>
        </Link>
        <Link href="#growth-hack" className={`relative`}>
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
            <div className={`font-bold lg:text-[clamp(40px,2.604vw,50px)]`}>
              {lang == "Viet"
                ? "BÍ KÍP BỨT PHÁ SỰ NGHIỆP TÀI CHÍNH"
                : "CAREER BREAKTHROUGH IN FINANCE"}
            </div>
            <div
              className={`font-medium text-sm lg:text-[clamp(20px,1.302vw,25px)]`}
            >
              {lang == "Viet"
                ? "Bạn là Leader nhưng đang cảm thấy “bế tắc” trong việc phát triển nghề nghiệp,hãy để tôi “tháo gỡ điểm nghẽn” đó cho bạn."
                : "If you’re a leader feeling “stuck” in your career growth, let me help you remove those bottlenecks."}
            </div>
          </div>
        </Link>
        <Link href="#young-partners" className={`relative`}>
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
              className={`font-bold text-lg lg:text-[clamp(40px,2.604vw,50px)]`}
            >
              {lang == "Viet"
                ? "DIỄN GIẢ CÙNG NGƯỜI TRẺ PHÁT TRIỂN"
                : "SPEAKING & YOUTH DEVELOPMENT"}
            </div>
            <div
              className={`font-medium text-sm lg:text-[clamp(20px,1.302vw,25px)]`}
            >
              {lang == "Viet"
                ? "Luôn đồng hành cùng người trẻ, hãy để tôi lan tỏa giá trị và kinh nghiệm của mình để đóng góp thêm vào hành trình nuôi dưỡng nhân tài trẻ."
                : "Committed to supporting young professionals, I aim to share my experience and create value in nurturing the next generation of talent."}
            </div>
          </div>
        </Link>
      </div>
      <div
        className={`h-10 lg:h-15 bg-linear-to-b from-[#1e2936] to-[#0a3472]`}
      ></div>
    </div>
  );
};

export default SelftSolutionSection;
