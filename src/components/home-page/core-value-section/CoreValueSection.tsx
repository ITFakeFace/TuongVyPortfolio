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
import { div } from "framer-motion/client";

// const CoreValueSection = () => {
//   const { lang } = useLanguage();

//   const CoreValueItem: React.FC<{
//     index: string;
//     lineheight: number;
//     lineheightMobile?: number;
//     children: React.ReactNode;
//     containerClassName: string;
//     className: string;
//   }> = ({
//     index,
//     lineheight,
//     lineheightMobile,
//     children,
//     containerClassName,
//     className,
//   }) => {
//     return (
//       <div
//         className={`${cl("flex flex-col items-center gap-5 lg:gap-10", containerClassName)}`}
//       >
//         <div className={`w-full flex items-center justify-center relative`}>
//           <svg
//             width="100%"
//             height={lineheight}
//             viewBox="0 0 100 10"
//             preserveAspectRatio="none"
//             className="absolute top-1/2 left-0 -translate-y-1/2 hidden lg:block"
//           >
//             <defs>
//               <linearGradient
//                 id={`line-gradient-${index}`}
//                 x1="0%"
//                 y1="0%"
//                 x2="100%"
//                 y2="0%"
//               >
//                 <stop offset="0%" stopColor="#999999" />
//                 <stop offset="50%" stopColor="white" />
//                 <stop offset="100%" stopColor="#999999" />
//               </linearGradient>
//             </defs>
//             <rect
//               width="100%"
//               height="100%"
//               fill={`url(#line-gradient-${index})`}
//             />
//           </svg>
//           <svg
//             width="100%"
//             height={lineheightMobile}
//             viewBox="0 0 100 10"
//             preserveAspectRatio="none"
//             className="absolute top-1/2 left-0 -translate-y-1/2 block lg:hidden"
//           >
//             <defs>
//               <linearGradient
//                 id={`line-gradient-mobile-${index}`}
//                 x1="0%"
//                 y1="0%"
//                 x2="100%"
//                 y2="0%"
//               >
//                 <stop offset="0%" stopColor="#999999" />
//                 <stop offset="50%" stopColor="white" />
//                 <stop offset="100%" stopColor="#999999" />
//               </linearGradient>
//             </defs>
//             <rect
//               width="100%"
//               height="100%"
//               fill={`url(#line-gradient-mobile-${index})`}
//             />
//           </svg>
//           <div
//             className={`aspect-square bg-[#1F2833] z-20 h-12 w-12 lg:h-20 lg:w-20 rounded-full border-2 border-white flex items-center justify-center text-white font-bold text-lg lg:text-3xl`}
//           >
//             {index}
//           </div>
//         </div>
//         <div
//           className={cl(
//             `bg-linear-to-br from-[#999999]/30 via-[#FFFFFF]/30 via-48% to-[#999999]/30 rounded-3xl lg:rounded-t-4xl px-5 py-3 lg:px-10 lg:py-8 text-white`,
//             className,
//           )}
//         >
//           {children}
//         </div>
//       </div>
//     );
//   };

//   const coreValues = [
//     <CoreValueItem
//       index="01"
//       lineheight={5}
//       lineheightMobile={4}
//       containerClassName="w-[75vw] lg:w-[33.33vw]"
//       className="w-6/7 h-full"
//     >
//       <div
//         className={`text-sm lg:text-[clamp(15px,-5px+1.042vw,18px)] flex flex-col gap-4 lg:gap-8`}
//       >
//         <div
//           className={`text-lg lg:text-[clamp(20px,1.302vw,25px)] font-bold text-center`}
//         >
//           {lang == "Viet"
//             ? "Lãnh đạo trong xây dựng đội ngũ và phát triển năng lực"
//             : "Leadership in Team Building & Capability Development"}
//         </div>
//         <div>
//           <b>{lang == "Viet" ? "Tình huống: " : "Situation: "}</b>
//           {lang == "Viet"
//             ? "Scale lực lượng bán hàng toàn quốc trong mô hình tài chính tiêu dùng"
//             : "Scaling a nationwide sales force in a consumer finance model"}
//         </div>
//         <div>
//           <b>{lang == "Viet" ? "Bối cảnh: " : "Context: "}</b>
//           {lang == "Viet"
//             ? "Doanh nghiệp cần mở rộng nhanh thị trường nhưng đội ngũ phân tán, thiếu chuẩn vận hành."
//             : "The business needed rapid market expansion, but teams were fragmented with no standardized operating model."}
//         </div>
//         <div>
//           <b>{lang == "Viet" ? "Hành động: " : "Actions: "}</b>
//           <ul className={`list-disc list-outside pl-4 lg:pl-10`}>
//             <li>
//               {lang == "Viet"
//                 ? "Thiết kế mô hình tổ chức 3 tầng: Direct Sales – Telesales – Partnership"
//                 : "Designed a 3-tier organizational structure: Direct Sales – Telesales – Partnership"}
//             </li>
//             <li>
//               {lang == "Viet"
//                 ? "Xây dựng hệ thống quản lý vùng và đào tạo team leader"
//                 : "Built a regional management system and trained team leaders"}
//             </li>
//             <li>
//               {lang == "Viet"
//                 ? "Triển khai cơ chế thưởng theo hiệu suất"
//                 : "Implemented performance-based incentive schemes"}
//             </li>
//           </ul>
//         </div>
//         <div>
//           <b>{lang == "Viet" ? "Kết quả: " : "Results: "}</b>
//           <ul className={`list-disc list-outside pl-4 lg:pl-10`}>
//             <li>
//               {lang == "Viet"
//                 ? "Mở rộng lên 3.000 – 5.000 sales & agents tại 50+ tỉnh"
//                 : "Expanded to 3,000–5,000 sales reps & agents across 50+ provinces"}
//             </li>
//             <li>
//               {lang == "Viet"
//                 ? "Tăng năng suất đội ngũ + 20 – 30%"
//                 : "Increased team productivity by 20–30%"}
//             </li>
//             <li>
//               {lang == "Viet"
//                 ? "Rút ngắn thời gian scale thị trường >50% so với kế hoạch ban đầu"
//                 : "Reduced market scaling time by over 50% compared to the original plan"}
//             </li>
//           </ul>
//         </div>
//       </div>
//     </CoreValueItem>,
//     <CoreValueItem
//       index="02"
//       lineheight={5}
//       lineheightMobile={4}
//       containerClassName="w-[75vw] lg:w-[33.33vw] h-full"
//       className="w-6/7 h-full"
//     >
//       <div
//         className={`text-sm lg:text-[clamp(15px,-5px+1.042vw,18px)] flex flex-col gap-4 lg:gap-8`}
//       >
//         <div
//           className={`text-lg lg:text-[clamp(20px,1.302vw,25px)] font-bold text-center`}
//         >
//           {lang == "Viet"
//             ? "Quản trị hiệu suất dựa trên KPI và dữ liệu"
//             : "KPI-Driven Performance Management & Data Optimization"}
//         </div>
//         <div>
//           <b>{lang == "Viet" ? "Tình huống: " : "Situation: "}</b>
//           {lang == "Viet"
//             ? "Tối ưu conversion funnel trong hoạt động lending"
//             : "Optimizing the conversion funnel in lending operations"}
//         </div>
//         <div>
//           <b>{lang == "Viet" ? "Bối cảnh: " : "Context: "}</b>
//           {lang == "Viet"
//             ? "Tỷ lệ chuyển đổi thấp, chi phí acquisition cao"
//             : "Low conversion rates and high customer acquisition costs (CAC)"}
//         </div>
//         <div>
//           <b>{lang == "Viet" ? "Hành động: " : "Actions: "}</b>
//           <ul className={`list-disc list-outside pl-4 lg:pl-10`}>
//             <li>
//               {lang == "Viet"
//                 ? "Thiết kế KPI theo funnel: Lead → Contact → Approval → Disbursement"
//                 : "Designed KPI frameworks across the funnel: Lead → Contact → Approval → Disbursement"}
//             </li>
//             <li>
//               {lang == "Viet"
//                 ? "Phân tích dữ liệu theo từng kênh (telesales, digital, partner)"
//                 : "Analyzed performance data by channel (telesales, digital, partnerships)"}
//             </li>
//             <li>
//               {lang == "Viet"
//                 ? "Tối ưu script telesales & phân bổ lead"
//                 : " Optimized telesales scripts and lead allocation"}
//             </li>
//           </ul>
//         </div>
//         <div>
//           <b>{lang == "Viet" ? "Kết quả: " : "Results: "}</b>
//           <ul className={`list-disc list-outside pl-4 lg:pl-10`}>
//             <li>
//               {lang == "Viet"
//                 ? "Conversion rate tăng +15–25%"
//                 : "Increased conversion rate by 15–25%"}
//             </li>
//             <li>
//               {lang == "Viet" ? "CAC giảm 10–20%" : "Reduced CAC by 10–20%"}
//             </li>
//             <li>
//               {lang == "Viet"
//                 ? "Tăng hiệu quả sử dụng lead (giảm lãng phí data)"
//                 : "Improved lead utilization and minimized data waste"}
//             </li>
//           </ul>
//         </div>
//       </div>
//     </CoreValueItem>,
//     <CoreValueItem
//       index="03"
//       lineheight={5}
//       lineheightMobile={4}
//       containerClassName="w-[75vw] lg:w-[33.33vw] h-full"
//       className="w-6/7 h-full"
//     >
//       <div
//         className={`text-sm lg:text-[clamp(15px,-5px+1.042vw,18px)] flex flex-col gap-4 lg:gap-8`}
//       >
//         <div
//           className={`text-lg lg:text-[clamp(20px,1.302vw,25px)] font-bold text-center`}
//         >
//           {lang == "Viet"
//             ? "Xây dựng và mở rộng nền tảng kinh doanh"
//             : "Business Platform Development & Scaling"}
//         </div>
//         <div>
//           <b>{lang == "Viet" ? "Tình huống: " : "Situation: "}</b>
//           {lang == "Viet"
//             ? "Xây dựng mô hình kinh doanh lending từ 0 → scale"
//             : "Building and scaling a lending business model from 0 → scale"}
//         </div>
//         <div>
//           <b>{lang == "Viet" ? "Bối cảnh: " : "Context: "}</b>
//           {lang == "Viet"
//             ? "Doanh nghiệp chưa có nền tảng vận hành chuẩn cho lending"
//             : "The company lacked a standardized operating foundation for lending"}
//         </div>
//         <div>
//           <b>{lang == "Viet" ? "Hành động: " : "Actions: "}</b>
//           <ul className={`list-disc list-outside pl-4 lg:pl-10`}>
//             <li>
//               {lang == "Viet"
//                 ? "Thiết kế mô hình kinh doanh (product – channel – risk – operation)"
//                 : "Designed the business model (product – channel – risk – operations)"}
//             </li>
//             <li>
//               {lang == "Viet"
//                 ? "Xây dựng quy trình end-to-end từ acquisition đến collection"
//                 : "Built end-to-end processes from acquisition to collection"}
//             </li>
//             <li>
//               {lang == "Viet"
//                 ? "Chuẩn hoá SOP để replicate trên toàn quốc"
//                 : "Standardized SOPs for nationwide replicationc"}
//             </li>
//           </ul>
//         </div>
//         <div>
//           <b>{lang == "Viet" ? "Kết quả: " : "Results: "}</b>
//           <ul className={`list-disc list-outside pl-4 lg:pl-10`}>
//             <li>
//               {lang == "Viet"
//                 ? "Scale lên quy mô multi-channel (Direct + Telesales + Partnership)"
//                 : "Scaled to a multi-channel model (Direct + Telesales + Partnership)"}
//             </li>
//             <li>
//               {lang == "Viet"
//                 ? "Tốc độ mở rộng thị trường tăng 2–3 lần"
//                 : "Accelerated market expansion by 2–3x"}
//             </li>
//             <li>
//               {lang == "Viet"
//                 ? "Tạo nền tảng vận hành ổn định để tăng trưởng dài hạn"
//                 : "Established a stable operational foundation for long-term growth"}
//             </li>
//           </ul>
//         </div>
//       </div>
//     </CoreValueItem>,
//     <CoreValueItem
//       index="04"
//       lineheight={5}
//       lineheightMobile={4}
//       containerClassName="w-[75vw] lg:w-[33.33vw] h-full"
//       className="w-6/7 h-full"
//     >
//       <div
//         className={`text-sm lg:text-[clamp(15px,-5px+1.042vw,18px)] flex flex-col gap-4 lg:gap-8`}
//       >
//         <div
//           className={`text-lg lg:text-[clamp(20px,1.302vw,25px)] font-bold text-center`}
//         >
//           {lang == "Viet"
//             ? "Chuyển đổi số & phát triển hệ sinh thái fintech"
//             : "Digital Transformation & Fintech Ecosystem Development"}
//         </div>
//         <div>
//           <b>{lang == "Viet" ? "Tình huống: " : "Situation: "}</b>
//           {lang == "Viet"
//             ? "Phát triển sản phẩm lending digital & mở rộng partnership"
//             : "Developing digital lending products and expanding partnerships"}
//         </div>
//         <div>
//           <b>{lang == "Viet" ? "Bối cảnh: " : "Context: "}</b>
//           {lang == "Viet"
//             ? "Nhu cầu chuyển dịch từ mô hình truyền thống sang digital"
//             : "The business needed to shift from a traditional model to a digital-first approach"}
//         </div>
//         <div>
//           <b>{lang == "Viet" ? "Hành động: " : "Actions: "}</b>
//           <ul className={`list-disc list-outside pl-4 lg:pl-10`}>
//             <li>
//               {lang == "Viet"
//                 ? "Phát triển các sản phẩm: Cash Loan, Credit Card, Paylater trên nền tảng số"
//                 : "Developed digital lending products: Cash Loan, Credit Card, Buy Now Pay Later (BNPL)"}
//             </li>
//             <li>
//               {lang == "Viet"
//                 ? "Kết nối đối tác: Fintech, E-wallet, Retail platform"
//                 : "Established integrations and partnerships with fintechs, e-wallets, and retail platforms"}
//             </li>
//           </ul>
//         </div>
//       </div>
//     </CoreValueItem>,
//     <CoreValueItem
//       index="05"
//       lineheight={5}
//       lineheightMobile={4}
//       containerClassName="w-[75vw] lg:w-[33.33vw] h-full"
//       className="w-6/7 h-full"
//     >
//       <div
//         className={`text-sm lg:text-[clamp(15px,-5px+1.042vw,18px)] flex flex-col gap-4 lg:gap-8`}
//       >
//         <div
//           className={`text-lg lg:text-[clamp(20px,1.302vw,25px)] font-bold text-center`}
//         >
//           {lang == "Viet"
//             ? "Xây dựng và mở rộng nền tảng kinh doanh"
//             : "Business Platform Development & Scaling"}
//         </div>
//         <div>
//           <b>{lang == "Viet" ? "Tình huống: " : "Situation: "}</b>
//           {lang == "Viet"
//             ? "Xây dựng mô hình kinh doanh lending từ 0 → scale"
//             : "Building and scaling a lending business model from 0 → scale"}
//         </div>
//         <div>
//           <b>{lang == "Viet" ? "Bối cảnh: " : "Context: "}</b>
//           {lang == "Viet"
//             ? "Doanh nghiệp chưa có nền tảng vận hành chuẩn cho lending"
//             : "The company lacked a standardized operating foundation for lending"}
//         </div>
//         <div>
//           <b>{lang == "Viet" ? "Hành động: " : "Actions: "}</b>
//           <ul className={`list-disc list-outside pl-4 lg:pl-10`}>
//             <li>
//               {lang == "Viet"
//                 ? "Thiết kế mô hình kinh doanh (product – channel – risk – operation)"
//                 : "Designed the business model (product – channel – risk – operations)"}
//             </li>
//             <li>
//               {lang == "Viet"
//                 ? "Xây dựng quy trình end-to-end từ acquisition đến collection"
//                 : "Built end-to-end processes from acquisition to collection"}
//             </li>
//             <li>
//               {lang == "Viet"
//                 ? "Chuẩn hoá SOP để replicate trên toàn quốc"
//                 : "Standardized SOPs for nationwide replicationc"}
//             </li>
//           </ul>
//         </div>
//         <div>
//           <b>{lang == "Viet" ? "Kết quả: " : "Results: "}</b>
//           <ul className={`list-disc list-outside pl-4 lg:pl-10`}>
//             <li>
//               {lang == "Viet"
//                 ? "Scale lên quy mô multi-channel (Direct + Telesales + Partnership)"
//                 : "Scaled to a multi-channel model (Direct + Telesales + Partnership)"}
//             </li>
//             <li>
//               {lang == "Viet"
//                 ? "Tốc độ mở rộng thị trường tăng 2–3 lần"
//                 : "Accelerated market expansion by 2–3x"}
//             </li>
//             <li>
//               {lang == "Viet"
//                 ? "Tạo nền tảng vận hành ổn định để tăng trưởng dài hạn"
//                 : "Established a stable operational foundation for long-term growth"}
//             </li>
//           </ul>
//         </div>
//       </div>
//     </CoreValueItem>,
//     <CoreValueItem
//       index="06"
//       lineheight={5}
//       lineheightMobile={4}
//       containerClassName="w-[75vw] lg:w-[33.33vw] h-full"
//       className="w-6/7 h-full"
//     >
//       <div
//         className={`text-sm lg:text-[clamp(15px,-5px+1.042vw,18px)] flex flex-col gap-4 lg:gap-8`}
//       >
//         <div
//           className={`text-lg lg:text-[clamp(20px,1.302vw,25px)] font-bold text-center`}
//         >
//           {lang == "Viet"
//             ? "Xây dựng và mở rộng nền tảng kinh doanh"
//             : "Business Platform Development & Scaling"}
//         </div>
//         <div>
//           <b>{lang == "Viet" ? "Tình huống: " : "Situation: "}</b>
//           {lang == "Viet"
//             ? "Xây dựng mô hình kinh doanh lending từ 0 → scale"
//             : "Building and scaling a lending business model from 0 → scale"}
//         </div>
//         <div>
//           <b>{lang == "Viet" ? "Bối cảnh: " : "Context: "}</b>
//           {lang == "Viet"
//             ? "Doanh nghiệp chưa có nền tảng vận hành chuẩn cho lending"
//             : "The company lacked a standardized operating foundation for lending"}
//         </div>
//         <div>
//           <b>{lang == "Viet" ? "Hành động: " : "Actions: "}</b>
//           <ul className={`list-disc list-outside pl-4 lg:pl-10`}>
//             <li>
//               {lang == "Viet"
//                 ? "Thiết kế mô hình kinh doanh (product – channel – risk – operation)"
//                 : "Designed the business model (product – channel – risk – operations)"}
//             </li>
//             <li>
//               {lang == "Viet"
//                 ? "Xây dựng quy trình end-to-end từ acquisition đến collection"
//                 : "Built end-to-end processes from acquisition to collection"}
//             </li>
//             <li>
//               {lang == "Viet"
//                 ? "Chuẩn hoá SOP để replicate trên toàn quốc"
//                 : "Standardized SOPs for nationwide replicationc"}
//             </li>
//           </ul>
//         </div>
//         <div>
//           <b>{lang == "Viet" ? "Kết quả: " : "Results: "}</b>
//           <ul className={`list-disc list-outside pl-4 lg:pl-10`}>
//             <li>
//               {lang == "Viet"
//                 ? "Scale lên quy mô multi-channel (Direct + Telesales + Partnership)"
//                 : "Scaled to a multi-channel model (Direct + Telesales + Partnership)"}
//             </li>
//             <li>
//               {lang == "Viet"
//                 ? "Tốc độ mở rộng thị trường tăng 2–3 lần"
//                 : "Accelerated market expansion by 2–3x"}
//             </li>
//             <li>
//               {lang == "Viet"
//                 ? "Tạo nền tảng vận hành ổn định để tăng trưởng dài hạn"
//                 : "Established a stable operational foundation for long-term growth"}
//             </li>
//           </ul>
//         </div>
//       </div>
//     </CoreValueItem>,
//     <CoreValueItem
//       index="07"
//       lineheight={5}
//       lineheightMobile={4}
//       containerClassName="w-[75vw] lg:w-[33.33vw] h-full"
//       className="w-6/7 h-full"
//     >
//       <div
//         className={`text-sm lg:text-[clamp(15px,-5px+1.042vw,18px)] flex flex-col gap-4 lg:gap-8`}
//       >
//         <div
//           className={`text-lg lg:text-[clamp(20px,1.302vw,25px)] font-bold text-center`}
//         >
//           {lang == "Viet"
//             ? "Xây dựng và mở rộng nền tảng kinh doanh"
//             : "Business Platform Development & Scaling"}
//         </div>
//         <div>
//           <b>{lang == "Viet" ? "Tình huống: " : "Situation: "}</b>
//           {lang == "Viet"
//             ? "Xây dựng mô hình kinh doanh lending từ 0 → scale"
//             : "Building and scaling a lending business model from 0 → scale"}
//         </div>
//         <div>
//           <b>{lang == "Viet" ? "Bối cảnh: " : "Context: "}</b>
//           {lang == "Viet"
//             ? "Doanh nghiệp chưa có nền tảng vận hành chuẩn cho lending"
//             : "The company lacked a standardized operating foundation for lending"}
//         </div>
//         <div>
//           <b>{lang == "Viet" ? "Hành động: " : "Actions: "}</b>
//           <ul className={`list-disc list-outside pl-4 lg:pl-10`}>
//             <li>
//               {lang == "Viet"
//                 ? "Thiết kế mô hình kinh doanh (product – channel – risk – operation)"
//                 : "Designed the business model (product – channel – risk – operations)"}
//             </li>
//             <li>
//               {lang == "Viet"
//                 ? "Xây dựng quy trình end-to-end từ acquisition đến collection"
//                 : "Built end-to-end processes from acquisition to collection"}
//             </li>
//             <li>
//               {lang == "Viet"
//                 ? "Chuẩn hoá SOP để replicate trên toàn quốc"
//                 : "Standardized SOPs for nationwide replicationc"}
//             </li>
//           </ul>
//         </div>
//         <div>
//           <b>{lang == "Viet" ? "Kết quả: " : "Results: "}</b>
//           <ul className={`list-disc list-outside pl-4 lg:pl-10`}>
//             <li>
//               {lang == "Viet"
//                 ? "Scale lên quy mô multi-channel (Direct + Telesales + Partnership)"
//                 : "Scaled to a multi-channel model (Direct + Telesales + Partnership)"}
//             </li>
//             <li>
//               {lang == "Viet"
//                 ? "Tốc độ mở rộng thị trường tăng 2–3 lần"
//                 : "Accelerated market expansion by 2–3x"}
//             </li>
//             <li>
//               {lang == "Viet"
//                 ? "Tạo nền tảng vận hành ổn định để tăng trưởng dài hạn"
//                 : "Established a stable operational foundation for long-term growth"}
//             </li>
//           </ul>
//         </div>
//       </div>
//     </CoreValueItem>,
//   ];

//   return (
//     <div className={`flex flex-col`}>
//       <div
//         className={`flex flex-col relative bg-linear-to-b from-[#08377C] from-8% to-[#84BBE2]/49`}
//       >
//         <div className={` flex flex-col justify-center pb-10 lg:pb-20`}>
//           <div
//             className={`bg-clip-text bg-linear-to-br from-[#FFFFFF] to-[#999999] text-transparent
//                 text-[21px] lg:text-[clamp(20px,3.271px+4.257vw,85px)] font-extrabold w-fit h-fit mx-auto text-center pt-10 pb-5 lg:pt-15 lg:pb-10`}
//           >
//             {lang == "Viet" ? "07 NĂNG LỰC CỐT LÕI" : "07 CORE COMPETENCIES"}
//           </div>
//           <div className={`flex flex-row`}>
//             <FilmStrip items={coreValues} className="w-full" duration={30} />
//           </div>
//         </div>
//         <Image
//           src={TuongVyUpward}
//           alt="Tuong Vy Upward"
//           className={`w-8/19 h-auto object-cover mx-auto mb-[-4%] z-100`}
//         />
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

interface ItemProps {
  index: string;
  description: string;
  className: string;
  containerClassName?: string;
  contentClassName?: string;
  vietContent?: string[];
  engContent?: string[];
}

const CoreValueSection = () => {
  const { lang } = useLanguage();

  const LeftItem: React.FC<ItemProps> = ({
    index,
    description,
    className,
    containerClassName,
    contentClassName,
    vietContent,
    engContent,
  }) => {
    // Lấy mảng nội dung dựa trên ngôn ngữ hiện tại
    const currentContent = lang === "Viet" ? vietContent : engContent;

    return (
      <div className={cl(`flex flex-col justify-start`, containerClassName)}>
        <div
          className={cl(
            `w-full flex flex-row gap-2 lg:gap-4 items-start`,
            className,
          )}
        >
          <div
            className={`
            w-[clamp(25px,13.402px+2.95vw,70px)]
            h-[clamp(25px,13.402px+2.95vw,70px)]
            text-[16px]
            lg:text-[clamp(20px,13.565px+1.637vw,45px)]
            aspect-square shrink-0 p-4 lg:p-10
            rounded-full border-2 lg:border-4 border-white
            text-white font-bold flex items-center justify-center
            `}
          >
            {index}
          </div>
          <div className="h-full flex flex-col items-start">
            <p className="text-[10px] lg:text-[clamp(25px,5.05px+1.302vw,30px)] text-white mt-2 font-semibold">
              {description}
            </p>
            {/* Phần render danh sách li */}
            <div
              className={cl(
                "mt-2 justify-start ml-3 lg:ml-5 text-[8px] lg:text-[clamp(12px,0.04px+0.781vw,15px)] hidden lg:flex",
                contentClassName,
              )}
            >
              <ul className="list-disc list-inside text-white lg:list-outside text-left font-medium">
                {currentContent?.map((item, i) => (
                  <li key={i} className="mb-1">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div
          className={cl(
            "mt-2 flex justify-start ml-3 lg:ml-5 text-[8px] lg:text-[clamp(12px,0.04px+0.781vw,15px)] lg:hidden",
            contentClassName,
          )}
        >
          <ul className="list-disc list-inside text-white lg:list-outside text-left font-medium">
            {currentContent?.map((item, i) => (
              <li key={i} className="mb-1">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  const RightItem: React.FC<ItemProps> = ({
    index,
    description,
    className,
    containerClassName,
    contentClassName,
    vietContent,
    engContent,
  }) => {
    // Lấy mảng nội dung dựa trên ngôn ngữ hiện tại
    const currentContent = lang === "Viet" ? vietContent : engContent;

    return (
      <div className={cl(`flex flex-col w-full items-end`, containerClassName)}>
        <div
          className={cl(
            `w-full flex flex-row gap-2 lg:gap-4 items-start justify-end`,
            className,
          )}
        >
          <div className=" flex flex-col items-start h-full justify-center">
            <p className="text-[10px] lg:text-[clamp(25px,5.05px+1.302vw,30px)] text-[#011B40] mt-2 font-semibold text-left">
              {description}
            </p>
            {/* Phần render danh sách li */}
            <div
              className={cl(
                "mt-2 justify-start ml-3 lg:ml-5 text-[8px] lg:text-[clamp(12px,0.04px+0.781vw,15px)] hidden lg:flex",
                contentClassName,
              )}
            >
              <ul className="list-disc list-inside text-[#011B40] lg:list-outside text-left font-medium">
                {currentContent?.map((item, i) => (
                  <li key={i + "desktop"} className="mb-1">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div
            className={`
            w-[clamp(25px,13.402px+2.95vw,70px)]
            h-[clamp(25px,13.402px+2.95vw,70px)]
            text-[16px]
            lg:text-[clamp(20px,13.565px+1.637vw,45px)]
            aspect-square shrink-0 p-4 lg:p-10
            rounded-full border-2 lg:border-4 border-[#011B40]
            text-[#011B40] font-bold flex items-center justify-center
          `}
          >
            {index}
          </div>
        </div>
        {/* Phần render danh sách li */}
        <div
          className={cl(
            "mt-2 flex justify-start ml-1 lg:ml-5 text-[8px] lg:text-[clamp(12px,0.04px+0.781vw,15px)] lg:hidden",
            contentClassName,
          )}
        >
          <ul className="list-disc list-inside text-[#011B40] lg:list-outside text-left font-medium">
            {currentContent?.map((item, i) => (
              <li key={i + "mobile"} className="mb-1">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  return (
    <div className={`flex flex-col`}>
      <div className={`flex flex-row relative`}>
        <Image
          src={TuongVyUpward}
          alt="Tuong Vy Upward"
          className={`absolute w-12/19 lg:w-8/19 h-auto object-cover bottom-[-3%] lg:bottom-[-7%] left-[50%] -translate-x-1/2 z-100`}
        />
        <div
          className={`w-1/2 pt-10 bg-[linear-gradient(to_bottom,#08377C_8%,#84BBE27D_85%,#FFFFFF00_100%)] pr-3 lg:pr-5`}
        >
          <div
            className={`bg-clip-text bg-linear-to-br from-[#FFFFFF] to-[#999999] text-transparent leading-tight
                text-[18px] lg:text-[clamp(70px,30.1px+2.604vw,80px)] font-extrabold ml-4 lg:ml-20 lg:mt-20 w-fit mx-auto`}
          >
            {lang == "Viet" ? "07 NĂNG LỰC" : "07 CORE "} <br />
            {lang == "Viet"
              ? "CỐT LÕI - ĐỊNH HƯỚNG - TÁC ĐỘNG"
              : "CAPABILITIES – IMPACT - DRIVEN"}
          </div>
          <div
            className={`text-white text-[10px] lg:text-[clamp(30px,10.05px+1.302vw,35px)] ml-4 lg:ml-20`}
          >
            {lang == "Viet"
              ? "Phát triển doanh nghiệp từ"
              : "Scaling businesses from"}
            <br className={`lg:hidden`} />
            <b>{lang == "Viet" ? " Zero " : " Zero "}</b>
            {lang == "Viet" ? "đến" : "to"}
            <b>{lang == "Viet" ? " C - Levels" : " C - Levels"}</b>
          </div>
          <div
            className={`flex flex-col mt-10 lg:mt-10 ${lang == "Viet" ? "3xl:mb-170 lg:mb-110 mb-90" : "3xl:mb-130 lg:mb-130 mb-70"} gap-5 lg:gap-10 pl-[5%] lg:pl-30 lg:pt-10`}
          >
            <LeftItem
              index="01"
              description={
                lang == "Viet"
                  ? "Lãnh đạo xây dựng tổ chức & phát triển đội ngũ hiệu suất cao"
                  : "Leadership in Organizational Building & High-Performance Team Development"
              }
              className=""
              containerClassName="lg:w-10/10"
              contentClassName="w-full lg:w-9/10"
              vietContent={[
                "Xây dựng và mở rộng lực lượng bán hàng lên 3.000 – 5.000 nhân sự & đại lý toàn quốc (50+ tỉnh)",
                "Thiết lập mô hình quản lý đa tầng (Direct Sales – Telesales – Partnership)",
                "Nâng năng suất đội ngũ + 20 – 30% thông qua tham vấn và quản lý hiệu suất",
              ]}
              engContent={[
                "Scaled the nationwide sales force to 3,000 – 5,000 staff & agents across 50+ provinces",
                "Established a multi-layered management model (Direct Sales – Telesales – Partnership)",
                "Increased team productivity by 20 – 30% through coaching and performance management",
              ]}
            />
            <LeftItem
              index="02"
              description={
                lang == "Viet"
                  ? "Quản trị hiệu suất dựa trên KPI và dữ liệu"
                  : "Data-driven Performance"
              }
              className=""
              containerClassName="lg:w-10/10"
              contentClassName="lg:w-9/10"
              vietContent={[
                "Thiết kế hệ thống KPI end-to-end (Acquisition → Approval → Disbursement → Collection)",
                "Tối ưu conversion funnel giúp tăng hiệu quả bán hàng +15–25%",
                "Ứng dụng dữ liệu trong kiểm soát CAC, giúp giảm chi phí thu hút khách hàng 10–20%",
              ]}
              engContent={[
                "Designed an end-to-end KPI system (Acquisition → Approval → Disbursement → Collection)",
                "Optimized the conversion funnel, increasing sales efficiency by 15 – 25%",
                "Leveraged data to control CAC, reducing customer acquisition costs by 10 – 20%",
              ]}
            />
            <LeftItem
              index="03"
              description={
                lang == "Viet"
                  ? "Xây dựng và mở rộng nền tảng kinh doanh"
                  : "Business Platform Build & Scale"
              }
              className=""
              containerClassName="lg:w-10/10"
              contentClassName="w-8/10"
              vietContent={[
                "Xây dựng mô hình kinh doanh từ 0 → scale với doanh thu đạt multi-million USD / năm",
                "Thiết kế hệ thống vận hành tích hợp Sales – Risk – Ops",
                "Chuẩn hoá quy trình giúp tăng tốc độ mở rộng thị trường 2–3x",
              ]}
              engContent={[
                "Built and scaled a business model from 0 to multi-million USD annual revenue",
                "Designed an integrated operating system across Sales – Risk – Operations",
                "Standardized processes to accelerate market expansion by 2–3x",
              ]}
            />
          </div>
        </div>
        <div
          className={`w-1/2 pt-10 lg:pt-60 bg-[#E6F4FF] pl-3 lg:pl-5 lg:pb-20`}
        >
          <div
            className={`flex flex-col pr-[5%] lg:pr-25 w-full items-end mt-15 lg:mt-60 gap-5 lg:gap-10`}
          >
            <RightItem
              index="04"
              description={
                lang == "Viet"
                  ? "Chuyển đổi số & phát triển hệ sinh thái fintech"
                  : "Digital Transformation & Fintech Ecosystem Development"
              }
              className=""
              containerClassName="lg:w-10/10"
              vietContent={[
                "Phát triển và triển khai hệ thống Lending Digital đa dạng (Cash Loan, Credit Card, Paylater)",
                "Xây dựng hệ sinh thái đối tác chiến lược (Fintech, E-wallet, Retail) với 10+ đơn vị quy mô lớn",
                "Ứng dụng AI & Automation tối ưu quy trình, tăng hiệu suất bán hàng +20% và giảm chi phí vận hành",
              ]}
              engContent={[
                "Developed and deployed digital lending products (Cash Loans, Credit Cards, BNPL)",
                "Built a partner ecosystem (Fintech, E-wallets, Retail) with 10+ strategic partners",
                "Applied AI and automation to increase sales productivity by 20% and reduce operating costs",
              ]}
            />
            <RightItem
              index="05"
              description={
                lang == "Viet"
                  ? "Phân tích chiến lược & dẫn dắt tăng trưởng"
                  : "Strategy & Growth Execution"
              }
              className=""
              containerClassName="lg:w-10/10"
              vietContent={[
                "Xây dựng chiến lược Go-to-Market giúp mở rộng quy mô và phủ sóng nhanh các kênh phân phối",
                "Nghiên cứu, đánh giá thị trường chuyên sâu nhằm tối ưu hóa Product-Market Fit cho sản phẩm",
                "Triển khai các sáng kiến tăng trưởng đột phá giúp doanh thu tăng trưởng ổn định từ 30 – 50% / năm",
              ]}
              engContent={[
                "Developed go-to-market strategies to rapidly expand distribution channels",
                "Conducted market analysis and optimized product–market fit",
                "Executed growth initiatives driving 30–50% annual revenue growth",
              ]}
            />
            <RightItem
              index="06"
              description={
                lang == "Viet"
                  ? "Quản trị tài chính & tối ưu hiệu quả"
                  : "Financial & Unit Economics Control"
              }
              className=""
              containerClassName="lg:w-10/10"
              contentClassName="lg:w-10/10"
              vietContent={[
                "Quản lý chỉ số P&L với quy mô danh mục đạt mức hàng nghìn tỷ VNĐ",
                "Tối ưu hóa CAC, tỷ lệ duyệt hồ sơ và chi phí rủi ro nhằm cải thiện biên lợi nhuận ròng",
                "Triển khai mô hình Risk-based Pricing giúp gia tăng Yield danh mục thêm +2 – 5%",
              ]}
              engContent={[
                "Managed P&L for a portfolio worth trillions of VND",
                "Optimized CAC, approval rates, and risk costs to improve profit margins",
                "Implemented risk-based pricing to increase portfolio yield by 2–5%",
              ]}
            />
            <RightItem
              index="07"
              description={
                lang == "Viet"
                  ? "Phát triển quan hệ đối tác & đàm phán chiến lược"
                  : "Partnership Development & Strategic Negotiation"
              }
              className=""
              containerClassName="lg:w-15/20"
              contentClassName="lg:w-18/20 lg:self-end"
              vietContent={[
                "Thiết lập và mở rộng mạng lưới đối tác trong các lĩnh vực Retail, Fintech, Payment",
                "Dẫn dắt đàm phán các hợp đồng chiến lược quy mô lớn",
                "Xây dựng kênh partnership đóng góp 30–50% tổng doanh thu",
              ]}
              engContent={[
                "Built and expanded partner networks across Retail, Fintech, and Payments",
                "Led negotiations for large-scale strategic contracts",
                "Developed partnership channels contributing 30–50% of total revenue",
              ]}
            />
          </div>
        </div>
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
          className={`absolute w-12/19 lg:w-8/19 h-auto object-cover top-[-2%] lg:top-[-7%] left-[50%] -translate-x-1/2 z-30`}
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

export default CoreValueSection;
