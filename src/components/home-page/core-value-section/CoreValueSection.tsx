"use client";
import React from "react";
import TuongVyUpward from "@/assets/images/assets/CoreValueSection-UpwardTuongVy-1.png";
import TuongVyDownward from "@/assets/images/assets/CoreValueSection-DownwardTuongVy-1.png";
import FinancialProfessor from "@/assets/images/assets/CoreValueSection-FinancialProfessor-1.png";
import FinancialProfessorEng from "@/assets/images/assets/CoreValueSection-FinancialProfessorEng-1.png";
import BottomBg from "@/assets/images/assets/CoreValueSection-BottomBg-1.png";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import { cl } from "@/utils/cn";
import { render } from "sass";
import FilmStrip from "@/components/generals/FilmStrip";

const CoreValueSection = () => {
  const { lang } = useLanguage();

  const CoreValueItem: React.FC<{
    index: string;
    lineheight: number;
    lineheightMobile?: number;
    children: React.ReactNode;
    containerClassName: string;
    className: string;
  }> = ({
    index,
    lineheight,
    lineheightMobile,
    children,
    containerClassName,
    className,
  }) => {
    return (
      <div
        className={`${cl("flex flex-col items-center gap-5 lg:gap-10", containerClassName)}`}
      >
        <div className={`w-full flex items-center justify-center relative`}>
          <svg
            width="100%"
            height={lineheight}
            viewBox="0 0 100 10"
            preserveAspectRatio="none"
            className="absolute top-1/2 left-0 -translate-y-1/2 hidden lg:block"
          >
            <defs>
              <linearGradient
                id={`line-gradient-${index}`}
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#999999" />
                <stop offset="50%" stopColor="white" />
                <stop offset="100%" stopColor="#999999" />
              </linearGradient>
            </defs>
            <rect
              width="100%"
              height="100%"
              fill={`url(#line-gradient-${index})`}
            />
          </svg>
          <svg
            width="100%"
            height={lineheightMobile}
            viewBox="0 0 100 10"
            preserveAspectRatio="none"
            className="absolute top-1/2 left-0 -translate-y-1/2 block lg:hidden"
          >
            <defs>
              <linearGradient
                id={`line-gradient-mobile-${index}`}
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#999999" />
                <stop offset="50%" stopColor="white" />
                <stop offset="100%" stopColor="#999999" />
              </linearGradient>
            </defs>
            <rect
              width="100%"
              height="100%"
              fill={`url(#line-gradient-mobile-${index})`}
            />
          </svg>
          <div
            className={`aspect-square bg-[#1F2833] z-20 h-12 w-12 lg:h-20 lg:w-20 rounded-full border-2 border-white flex items-center justify-center text-white font-bold text-lg lg:text-3xl`}
          >
            {index}
          </div>
        </div>
        <div
          className={cl(
            `bg-linear-to-br from-[#999999]/30 via-[#FFFFFF]/30 via-48% to-[#999999]/30 rounded-3xl lg:rounded-t-4xl px-5 py-3 lg:px-10 lg:py-8 text-white`,
            className,
          )}
        >
          {children}
        </div>
      </div>
    );
  };

  const coreValues = [
    <CoreValueItem
      index="01"
      lineheight={5}
      lineheightMobile={4}
      containerClassName="w-[75vw] lg:w-[33.33vw]"
      className="w-6/7 h-full"
    >
      <div
        className={`text-sm lg:text-[clamp(15px,-5px+1.042vw,18px)] flex flex-col gap-4 lg:gap-8`}
      >
        <div
          className={`text-lg lg:text-[clamp(20px,1.302vw,25px)] font-bold text-center`}
        >
          {lang == "Viet"
            ? "Lãnh đạo trong xây dựng đội ngũ và phát triển năng lực"
            : "Leadership in Team Building & Capability Development"}
        </div>
        <div>
          <b>{lang == "Viet" ? "Tình huống: " : "Situation: "}</b>
          {lang == "Viet"
            ? "Scale lực lượng bán hàng toàn quốc trong mô hình tài chính tiêu dùng"
            : "Scaling a nationwide sales force in a consumer finance model"}
        </div>
        <div>
          <b>{lang == "Viet" ? "Bối cảnh: " : "Context: "}</b>
          {lang == "Viet"
            ? "Doanh nghiệp cần mở rộng nhanh thị trường nhưng đội ngũ phân tán, thiếu chuẩn vận hành."
            : "The business needed rapid market expansion, but teams were fragmented with no standardized operating model."}
        </div>
        <div>
          <b>{lang == "Viet" ? "Hành động: " : "Actions: "}</b>
          <ul className={`list-disc list-outside pl-4 lg:pl-10`}>
            <li>
              {lang == "Viet"
                ? "Thiết kế mô hình tổ chức 3 tầng: Direct Sales – Telesales – Partnership"
                : "Designed a 3-tier organizational structure: Direct Sales – Telesales – Partnership"}
            </li>
            <li>
              {lang == "Viet"
                ? "Xây dựng hệ thống quản lý vùng và đào tạo team leader"
                : "Built a regional management system and trained team leaders"}
            </li>
            <li>
              {lang == "Viet"
                ? "Triển khai cơ chế thưởng theo hiệu suất"
                : "Implemented performance-based incentive schemes"}
            </li>
          </ul>
        </div>
        <div>
          <b>{lang == "Viet" ? "Kết quả: " : "Results: "}</b>
          <ul className={`list-disc list-outside pl-4 lg:pl-10`}>
            <li>
              {lang == "Viet"
                ? "Mở rộng lên 3.000 – 5.000 sales & agents tại 50+ tỉnh"
                : "Expanded to 3,000–5,000 sales reps & agents across 50+ provinces"}
            </li>
            <li>
              {lang == "Viet"
                ? "Tăng năng suất đội ngũ + 20 – 30%"
                : "Increased team productivity by 20–30%"}
            </li>
            <li>
              {lang == "Viet"
                ? "Rút ngắn thời gian scale thị trường >50% so với kế hoạch ban đầu"
                : "Reduced market scaling time by over 50% compared to the original plan"}
            </li>
          </ul>
        </div>
      </div>
    </CoreValueItem>,
    <CoreValueItem
      index="02"
      lineheight={5}
      lineheightMobile={4}
      containerClassName="w-[75vw] lg:w-[33.33vw] h-full"
      className="w-6/7 h-full"
    >
      <div
        className={`text-sm lg:text-[clamp(15px,-5px+1.042vw,18px)] flex flex-col gap-4 lg:gap-8`}
      >
        <div
          className={`text-lg lg:text-[clamp(20px,1.302vw,25px)] font-bold text-center`}
        >
          {lang == "Viet"
            ? "Quản trị hiệu suất dựa trên KPI và dữ liệu"
            : "KPI-Driven Performance Management & Data Optimization"}
        </div>
        <div>
          <b>{lang == "Viet" ? "Tình huống: " : "Situation: "}</b>
          {lang == "Viet"
            ? "Tối ưu conversion funnel trong hoạt động lending"
            : "Optimizing the conversion funnel in lending operations"}
        </div>
        <div>
          <b>{lang == "Viet" ? "Bối cảnh: " : "Context: "}</b>
          {lang == "Viet"
            ? "Tỷ lệ chuyển đổi thấp, chi phí acquisition cao"
            : "Low conversion rates and high customer acquisition costs (CAC)"}
        </div>
        <div>
          <b>{lang == "Viet" ? "Hành động: " : "Actions: "}</b>
          <ul className={`list-disc list-outside pl-4 lg:pl-10`}>
            <li>
              {lang == "Viet"
                ? "Thiết kế KPI theo funnel: Lead → Contact → Approval → Disbursement"
                : "Designed KPI frameworks across the funnel: Lead → Contact → Approval → Disbursement"}
            </li>
            <li>
              {lang == "Viet"
                ? "Phân tích dữ liệu theo từng kênh (telesales, digital, partner)"
                : "Analyzed performance data by channel (telesales, digital, partnerships)"}
            </li>
            <li>
              {lang == "Viet"
                ? "Tối ưu script telesales & phân bổ lead"
                : " Optimized telesales scripts and lead allocation"}
            </li>
          </ul>
        </div>
        <div>
          <b>{lang == "Viet" ? "Kết quả: " : "Results: "}</b>
          <ul className={`list-disc list-outside pl-4 lg:pl-10`}>
            <li>
              {lang == "Viet"
                ? "Conversion rate tăng +15–25%"
                : "Increased conversion rate by 15–25%"}
            </li>
            <li>
              {lang == "Viet" ? "CAC giảm 10–20%" : "Reduced CAC by 10–20%"}
            </li>
            <li>
              {lang == "Viet"
                ? "Tăng hiệu quả sử dụng lead (giảm lãng phí data)"
                : "Improved lead utilization and minimized data waste"}
            </li>
          </ul>
        </div>
      </div>
    </CoreValueItem>,
    <CoreValueItem
      index="03"
      lineheight={5}
      lineheightMobile={4}
      containerClassName="w-[75vw] lg:w-[33.33vw] h-full"
      className="w-6/7 h-full"
    >
      <div
        className={`text-sm lg:text-[clamp(15px,-5px+1.042vw,18px)] flex flex-col gap-4 lg:gap-8`}
      >
        <div
          className={`text-lg lg:text-[clamp(20px,1.302vw,25px)] font-bold text-center`}
        >
          {lang == "Viet"
            ? "Xây dựng và mở rộng nền tảng kinh doanh"
            : "Business Platform Development & Scaling"}
        </div>
        <div>
          <b>{lang == "Viet" ? "Tình huống: " : "Situation: "}</b>
          {lang == "Viet"
            ? "Xây dựng mô hình kinh doanh lending từ 0 → scale"
            : "Building and scaling a lending business model from 0 → scale"}
        </div>
        <div>
          <b>{lang == "Viet" ? "Bối cảnh: " : "Context: "}</b>
          {lang == "Viet"
            ? "Doanh nghiệp chưa có nền tảng vận hành chuẩn cho lending"
            : "The company lacked a standardized operating foundation for lending"}
        </div>
        <div>
          <b>{lang == "Viet" ? "Hành động: " : "Actions: "}</b>
          <ul className={`list-disc list-outside pl-4 lg:pl-10`}>
            <li>
              {lang == "Viet"
                ? "Thiết kế mô hình kinh doanh (product – channel – risk – operation)"
                : "Designed the business model (product – channel – risk – operations)"}
            </li>
            <li>
              {lang == "Viet"
                ? "Xây dựng quy trình end-to-end từ acquisition đến collection"
                : "Built end-to-end processes from acquisition to collection"}
            </li>
            <li>
              {lang == "Viet"
                ? "Chuẩn hoá SOP để replicate trên toàn quốc"
                : "Standardized SOPs for nationwide replicationc"}
            </li>
          </ul>
        </div>
        <div>
          <b>{lang == "Viet" ? "Kết quả: " : "Results: "}</b>
          <ul className={`list-disc list-outside pl-4 lg:pl-10`}>
            <li>
              {lang == "Viet"
                ? "Scale lên quy mô multi-channel (Direct + Telesales + Partnership)"
                : "Scaled to a multi-channel model (Direct + Telesales + Partnership)"}
            </li>
            <li>
              {lang == "Viet"
                ? "Tốc độ mở rộng thị trường tăng 2–3 lần"
                : "Accelerated market expansion by 2–3x"}
            </li>
            <li>
              {lang == "Viet"
                ? "Tạo nền tảng vận hành ổn định để tăng trưởng dài hạn"
                : "Established a stable operational foundation for long-term growth"}
            </li>
          </ul>
        </div>
      </div>
    </CoreValueItem>,
    <CoreValueItem
      index="04"
      lineheight={5}
      lineheightMobile={4}
      containerClassName="w-[75vw] lg:w-[33.33vw] h-full"
      className="w-6/7 h-full"
    >
      <div
        className={`text-sm lg:text-[clamp(15px,-5px+1.042vw,18px)] flex flex-col gap-4 lg:gap-8`}
      >
        <div
          className={`text-lg lg:text-[clamp(20px,1.302vw,25px)] font-bold text-center`}
        >
          {lang == "Viet"
            ? "Chuyển đổi số & phát triển hệ sinh thái fintech"
            : "Digital Transformation & Fintech Ecosystem Development"}
        </div>
        <div>
          <b>{lang == "Viet" ? "Tình huống: " : "Situation: "}</b>
          {lang == "Viet"
            ? "Phát triển sản phẩm lending digital & mở rộng partnership"
            : "Developing digital lending products and expanding partnerships"}
        </div>
        <div>
          <b>{lang == "Viet" ? "Bối cảnh: " : "Context: "}</b>
          {lang == "Viet"
            ? "Nhu cầu chuyển dịch từ mô hình truyền thống sang digital"
            : "The business needed to shift from a traditional model to a digital-first approach"}
        </div>
        <div>
          <b>{lang == "Viet" ? "Hành động: " : "Actions: "}</b>
          <ul className={`list-disc list-outside pl-4 lg:pl-10`}>
            <li>
              {lang == "Viet"
                ? "Phát triển các sản phẩm: Cash Loan, Credit Card, Paylater trên nền tảng số"
                : "Developed digital lending products: Cash Loan, Credit Card, Buy Now Pay Later (BNPL)"}
            </li>
            <li>
              {lang == "Viet"
                ? "Kết nối đối tác: Fintech, E-wallet, Retail platform"
                : "Established integrations and partnerships with fintechs, e-wallets, and retail platforms"}
            </li>
          </ul>
        </div>
      </div>
    </CoreValueItem>,
    <CoreValueItem
      index="05"
      lineheight={5}
      lineheightMobile={4}
      containerClassName="w-[75vw] lg:w-[33.33vw] h-full"
      className="w-6/7 h-full"
    >
      <div
        className={`text-sm lg:text-[clamp(15px,-5px+1.042vw,18px)] flex flex-col gap-4 lg:gap-8`}
      >
        <div
          className={`text-lg lg:text-[clamp(20px,1.302vw,25px)] font-bold text-center`}
        >
          {lang == "Viet"
            ? "Xây dựng và mở rộng nền tảng kinh doanh"
            : "Business Platform Development & Scaling"}
        </div>
        <div>
          <b>{lang == "Viet" ? "Tình huống: " : "Situation: "}</b>
          {lang == "Viet"
            ? "Xây dựng mô hình kinh doanh lending từ 0 → scale"
            : "Building and scaling a lending business model from 0 → scale"}
        </div>
        <div>
          <b>{lang == "Viet" ? "Bối cảnh: " : "Context: "}</b>
          {lang == "Viet"
            ? "Doanh nghiệp chưa có nền tảng vận hành chuẩn cho lending"
            : "The company lacked a standardized operating foundation for lending"}
        </div>
        <div>
          <b>{lang == "Viet" ? "Hành động: " : "Actions: "}</b>
          <ul className={`list-disc list-outside pl-4 lg:pl-10`}>
            <li>
              {lang == "Viet"
                ? "Thiết kế mô hình kinh doanh (product – channel – risk – operation)"
                : "Designed the business model (product – channel – risk – operations)"}
            </li>
            <li>
              {lang == "Viet"
                ? "Xây dựng quy trình end-to-end từ acquisition đến collection"
                : "Built end-to-end processes from acquisition to collection"}
            </li>
            <li>
              {lang == "Viet"
                ? "Chuẩn hoá SOP để replicate trên toàn quốc"
                : "Standardized SOPs for nationwide replicationc"}
            </li>
          </ul>
        </div>
        <div>
          <b>{lang == "Viet" ? "Kết quả: " : "Results: "}</b>
          <ul className={`list-disc list-outside pl-4 lg:pl-10`}>
            <li>
              {lang == "Viet"
                ? "Scale lên quy mô multi-channel (Direct + Telesales + Partnership)"
                : "Scaled to a multi-channel model (Direct + Telesales + Partnership)"}
            </li>
            <li>
              {lang == "Viet"
                ? "Tốc độ mở rộng thị trường tăng 2–3 lần"
                : "Accelerated market expansion by 2–3x"}
            </li>
            <li>
              {lang == "Viet"
                ? "Tạo nền tảng vận hành ổn định để tăng trưởng dài hạn"
                : "Established a stable operational foundation for long-term growth"}
            </li>
          </ul>
        </div>
      </div>
    </CoreValueItem>,
    <CoreValueItem
      index="06"
      lineheight={5}
      lineheightMobile={4}
      containerClassName="w-[75vw] lg:w-[33.33vw] h-full"
      className="w-6/7 h-full"
    >
      <div
        className={`text-sm lg:text-[clamp(15px,-5px+1.042vw,18px)] flex flex-col gap-4 lg:gap-8`}
      >
        <div
          className={`text-lg lg:text-[clamp(20px,1.302vw,25px)] font-bold text-center`}
        >
          {lang == "Viet"
            ? "Xây dựng và mở rộng nền tảng kinh doanh"
            : "Business Platform Development & Scaling"}
        </div>
        <div>
          <b>{lang == "Viet" ? "Tình huống: " : "Situation: "}</b>
          {lang == "Viet"
            ? "Xây dựng mô hình kinh doanh lending từ 0 → scale"
            : "Building and scaling a lending business model from 0 → scale"}
        </div>
        <div>
          <b>{lang == "Viet" ? "Bối cảnh: " : "Context: "}</b>
          {lang == "Viet"
            ? "Doanh nghiệp chưa có nền tảng vận hành chuẩn cho lending"
            : "The company lacked a standardized operating foundation for lending"}
        </div>
        <div>
          <b>{lang == "Viet" ? "Hành động: " : "Actions: "}</b>
          <ul className={`list-disc list-outside pl-4 lg:pl-10`}>
            <li>
              {lang == "Viet"
                ? "Thiết kế mô hình kinh doanh (product – channel – risk – operation)"
                : "Designed the business model (product – channel – risk – operations)"}
            </li>
            <li>
              {lang == "Viet"
                ? "Xây dựng quy trình end-to-end từ acquisition đến collection"
                : "Built end-to-end processes from acquisition to collection"}
            </li>
            <li>
              {lang == "Viet"
                ? "Chuẩn hoá SOP để replicate trên toàn quốc"
                : "Standardized SOPs for nationwide replicationc"}
            </li>
          </ul>
        </div>
        <div>
          <b>{lang == "Viet" ? "Kết quả: " : "Results: "}</b>
          <ul className={`list-disc list-outside pl-4 lg:pl-10`}>
            <li>
              {lang == "Viet"
                ? "Scale lên quy mô multi-channel (Direct + Telesales + Partnership)"
                : "Scaled to a multi-channel model (Direct + Telesales + Partnership)"}
            </li>
            <li>
              {lang == "Viet"
                ? "Tốc độ mở rộng thị trường tăng 2–3 lần"
                : "Accelerated market expansion by 2–3x"}
            </li>
            <li>
              {lang == "Viet"
                ? "Tạo nền tảng vận hành ổn định để tăng trưởng dài hạn"
                : "Established a stable operational foundation for long-term growth"}
            </li>
          </ul>
        </div>
      </div>
    </CoreValueItem>,
    <CoreValueItem
      index="07"
      lineheight={5}
      lineheightMobile={4}
      containerClassName="w-[75vw] lg:w-[33.33vw] h-full"
      className="w-6/7 h-full"
    >
      <div
        className={`text-sm lg:text-[clamp(15px,-5px+1.042vw,18px)] flex flex-col gap-4 lg:gap-8`}
      >
        <div
          className={`text-lg lg:text-[clamp(20px,1.302vw,25px)] font-bold text-center`}
        >
          {lang == "Viet"
            ? "Xây dựng và mở rộng nền tảng kinh doanh"
            : "Business Platform Development & Scaling"}
        </div>
        <div>
          <b>{lang == "Viet" ? "Tình huống: " : "Situation: "}</b>
          {lang == "Viet"
            ? "Xây dựng mô hình kinh doanh lending từ 0 → scale"
            : "Building and scaling a lending business model from 0 → scale"}
        </div>
        <div>
          <b>{lang == "Viet" ? "Bối cảnh: " : "Context: "}</b>
          {lang == "Viet"
            ? "Doanh nghiệp chưa có nền tảng vận hành chuẩn cho lending"
            : "The company lacked a standardized operating foundation for lending"}
        </div>
        <div>
          <b>{lang == "Viet" ? "Hành động: " : "Actions: "}</b>
          <ul className={`list-disc list-outside pl-4 lg:pl-10`}>
            <li>
              {lang == "Viet"
                ? "Thiết kế mô hình kinh doanh (product – channel – risk – operation)"
                : "Designed the business model (product – channel – risk – operations)"}
            </li>
            <li>
              {lang == "Viet"
                ? "Xây dựng quy trình end-to-end từ acquisition đến collection"
                : "Built end-to-end processes from acquisition to collection"}
            </li>
            <li>
              {lang == "Viet"
                ? "Chuẩn hoá SOP để replicate trên toàn quốc"
                : "Standardized SOPs for nationwide replicationc"}
            </li>
          </ul>
        </div>
        <div>
          <b>{lang == "Viet" ? "Kết quả: " : "Results: "}</b>
          <ul className={`list-disc list-outside pl-4 lg:pl-10`}>
            <li>
              {lang == "Viet"
                ? "Scale lên quy mô multi-channel (Direct + Telesales + Partnership)"
                : "Scaled to a multi-channel model (Direct + Telesales + Partnership)"}
            </li>
            <li>
              {lang == "Viet"
                ? "Tốc độ mở rộng thị trường tăng 2–3 lần"
                : "Accelerated market expansion by 2–3x"}
            </li>
            <li>
              {lang == "Viet"
                ? "Tạo nền tảng vận hành ổn định để tăng trưởng dài hạn"
                : "Established a stable operational foundation for long-term growth"}
            </li>
          </ul>
        </div>
      </div>
    </CoreValueItem>,
  ];

  return (
    <div className={`flex flex-col`}>
      <div
        className={`flex flex-col relative bg-linear-to-b from-[#08377C] from-8% to-[#84BBE2]/49`}
      >
        <div className={` flex flex-col justify-center pb-10 lg:pb-20`}>
          <div
            className={`bg-clip-text bg-linear-to-br from-[#FFFFFF] to-[#999999] text-transparent
                text-[21px] lg:text-[clamp(20px,3.271px+4.257vw,85px)] font-extrabold w-fit h-fit mx-auto text-center pt-10 pb-5 lg:pt-15 lg:pb-10`}
          >
            {lang == "Viet" ? "07 NĂNG LỰC CỐT LÕI" : "07 CORE COMPETENCIES"}
          </div>
          <div className={`flex flex-row`}>
            <FilmStrip items={coreValues} className="w-full" duration={30} />
          </div>
        </div>
        <Image
          src={TuongVyUpward}
          alt="Tuong Vy Upward"
          className={`w-8/19 h-auto object-cover mx-auto mb-[-4%] z-100`}
        />
      </div>
      <div
        className={`w-full relative flex items-center justify-center bg-[#E6F4FF]`}
      >
        <div
          className={`absolute w-full h-25 lg:h-100 bg-linear-to-b from-[#07367B] to-[#E6F4FF] top-0 left-0 z-10 pb-20`}
        ></div>
        <Image
          src={TuongVyDownward}
          alt="Tuong Vy Downward"
          className={`absolute w-8/19 h-auto object-cover top-[-2%] lg:top-[-7%] left-[50%] -translate-x-1/2 z-30`}
        />
        <Image
          src={lang == "Viet" ? FinancialProfessor : FinancialProfessorEng}
          alt="Financial Professor"
          className={`w-6/10 h-auto object-cover my-10 lg:my-40 z-50`}
        />
        <Image
          src={BottomBg}
          alt="Bottom Background"
          className={`absolute w-full h-auto object-cover bottom-0 left-0`}
        />
      </div>
    </div>
  );
};

// const CoreValueSection = () => {
//   const { lang } = useLanguage();

//   const renderLeftItem = (
//     index: string,
//     description: string,
//     className: string,
//   ) => {
//     return (
//       <div
//         className={cl(
//           `w-full flex flex-row gap-2 lg:gap-8 items-center`,
//           className,
//         )}
//       >
//         <div
//           className={`
//                   w-[clamp(25px,13.402px+2.95vw,70px)]
//                   h-[clamp(25px,13.402px+2.95vw,70px)]
//                   text-[clamp(20px,13.565px+1.637vw,45px)]
//                   aspect-square shrink-0 p-5 lg:p-10
//                   rounded-full border-2 lg:border-4 border-white
//                   text-white font-bold flex items-center justify-center
//               `}
//         >
//           {index}
//         </div>
//         <div className="h-full flex items-center">
//           <p className="text-[11px] lg:text-[clamp(10px,3.565px+1.637vw,35px)] text-white mt-2 font-semibold">
//             {description}
//           </p>
//         </div>
//       </div>
//     );
//   };

//   const renderRightItem = (
//     index: string,
//     description: string,
//     className: string,
//   ) => {
//     return (
//       <div
//         className={cl(
//           `w-full flex flex-row gap-2 lg:gap-8 items-center justify-end`,
//           className,
//         )}
//       >
//         <div className="">
//           <p className="text-[11px] lg:text-[clamp(10px,3.565px+1.637vw,35px)] text-[#011B40] mt-2 font-semibold">
//             {description}
//           </p>
//         </div>
//         <div
//           className={`
//                   w-[clamp(25px,13.402px+2.95vw,70px)]
//                   h-[clamp(25px,13.402px+2.95vw,70px)]
//                   text-[clamp(20px,13.565px+1.637vw,45px)]
//                   aspect-square shrink-0 p-5 lg:p-10
//                   rounded-full border-2 lg:border-4 border-[#011B40]
//                   text-[#011B40] font-bold flex items-center justify-center
//               `}
//         >
//           {index}
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className={`flex flex-col`}>
//       <div className={`flex flex-row relative`}>
//         <Image
//           src={TuongVyUpward}
//           alt="Tuong Vy Upward"
//           className={`absolute w-8/19 h-auto object-cover bottom-[-3%] lg:bottom-[-7%] left-[50%] -translate-x-1/2 z-100`}
//         />
//         <div
//           className={`w-1/2 pt-10 bg-[linear-gradient(to_bottom,#08377C_8%,#84BBE27D_85%,#FFFFFF00_100%)]  pr-5 lg:pr-0`}
//         >
//           <div
//             className={`bg-clip-text bg-linear-to-br from-[#FFFFFF] to-[#999999] text-transparent
//                 text-[21px] lg:text-[clamp(20px,3.271px+4.257vw,85px)] font-extrabold ml-4 lg:ml-10 lg:mt-20 w-fit mx-auto`}
//           >
//             {lang == "Viet" ? "07 NĂNG LỰC" : "07 CORE "} <br />
//             {lang == "Viet" ? "CỐT LÕI" : "COMPETENCIES"}
//           </div>
//           <div
//             className={`flex flex-col mt-10 lg:mt-10 mb-50 gap-5 lg:gap-10 pl-[5%]`}
//           >
//             {renderLeftItem(
//               "01",
//               lang == "Viet"
//                 ? "Lãnh đạo trong xây dựng đội ngũ và phát triển năng lực"
//                 : "Leadership in Team Building and Capability Development",
//               "lg:w-8/10",
//             )}
//             {renderLeftItem(
//               "02",
//               lang == "Viet"
//                 ? "Quản trị nhân sự dựa trên KPI"
//                 : "KPI-Driven Human Resource Management",
//               "lg:w-4/5",
//             )}
//             {renderLeftItem(
//               "03",
//               lang == "Viet"
//                 ? "Xây dựng nền tảng và vận hành doanh nghiệp"
//                 : "Business Foundation Development and Operations",
//               "lg:w-7/10",
//             )}
//           </div>
//         </div>
//         <div className={`w-1/2 pt-10 bg-[#E6F4FF] pl-5 lg:pl-0`}>
//           <div
//             className={`flex flex-col pr-[5%] w-full items-end mt-15 lg:mt-60 gap-5 lg:gap-10`}
//           >
//             {renderRightItem(
//               "04",
//               lang == "Viet"
//                 ? "Chuyển đổi số và hợp tác fintech"
//                 : "Digital Transformation and Fintech Collaboration",
//               "lg:w-8/10",
//             )}
//             {renderRightItem(
//               "05",
//               lang == "Viet"
//                 ? "Phân tích chiến lược và để ra giải pháp"
//                 : "Strategic Analysis and Solution Design",
//               "lg:w-7/10",
//             )}
//             {renderRightItem(
//               "06",
//               lang == "Viet"
//                 ? "Tối ưu chi phí và giám sát tài chính"
//                 : "Cost Optimization & Financial Oversight",
//               "lg:w-6/10",
//             )}
//             {renderRightItem(
//               "07",
//               lang == "Viet"
//                 ? "Quản trị quan hệ đối tác và Đàm phán"
//                 : "Partnership Management and Negotiation",
//               "lg:w-11/20",
//             )}
//           </div>
//         </div>
//       </div>
//       <div
//         className={`w-full relative flex items-center justify-center bg-[#E6F4FF]`}
//       >
//         <div
//           className={`absolute w-full h-25 lg:h-100 bg-linear-to-b from-[#07367B] to-[#E6F4FF] top-0 left-0 z-10 pb-20`}
//         ></div>
//         <Image
//           src={TuongVyDownward}
//           alt="Tuong Vy Downward"
//           className={`absolute w-8/19 h-auto object-cover top-[-2%] lg:top-[-7%] left-[50%] -translate-x-1/2 z-30`}
//         />
//         <Image
//           src={lang == "Viet" ? FinancialProfessor : FinancialProfessorEng}
//           alt="Financial Professor"
//           className={`w-6/10 h-auto object-cover my-10 lg:my-40 z-50`}
//         />
//         <Image
//           src={BottomBg}
//           alt="Bottom Background"
//           className={`absolute w-full h-auto object-cover bottom-0 left-0`}
//         />
//       </div>
//     </div>
//   );
// };

export default CoreValueSection;
