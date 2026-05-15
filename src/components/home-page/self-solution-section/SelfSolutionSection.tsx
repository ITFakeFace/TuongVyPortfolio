"use client";
import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import ImageBox1 from "@/assets/images/assets/SelfSolutionSection-ImageBox-1.png";
import ImageBox2 from "@/assets/images/assets/SelfSolutionSection-ImageBox-2.png";
import ImageBox3 from "@/assets/images/assets/SelfSolutionSection-ImageBox-3.png";
import ImageBox4 from "@/assets/images/assets/SelfSolutionSection-ImageBox-4.png";
import IconBox1 from "@/assets/images/assets/SelfSolutionSection-IconBox-1.png";
import IconBox2 from "@/assets/images/assets/SelfSolutionSection-IconBox-2.png";
import IconBox3 from "@/assets/images/assets/SelfSolutionSection-IconBox-3.png";
import IconBox4 from "@/assets/images/assets/SelfSolutionSection-IconBox-4.png";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./SelfSolutionSection.module.scss";
import GlassCard from "@/components/generals/GlassCard";
import FilmStrip from "@/components/generals/FilmStrip";
import FintechLogo from "@/assets/images/assets/ExperienceSection-FintechFarmLogo-1.png";
import LiobankLogo from "@/assets/images/assets/ExperienceSection-LiobankLogo-1.png";
import FIALogo from "@/assets/images/assets/ExperienceSection-FIALogo-1.png";
import CakeLogo from "@/assets/images/assets/ExperienceSection-CakeLogo-1.png";
import VNBALogo from "@/assets/images/assets/ExperienceSection-VNBALogo-1.png";
import SHBFinanceLogo from "@/assets/images/assets/ExperienceSection-SHBFinanceLogo-1.png";
import ComBLogo from "@/assets/images/assets/ExperienceSection-ComBLogo-1.png";
import FECreditLogo from "@/assets/images/assets/ExperienceSection-FECreditLogo-1.png";
import PrudentialLogo from "@/assets/images/assets/ExperienceSection-PrudentialLogo-1.png";
import ANZLogo from "@/assets/images/assets/ExperienceSection-ANZLogo-1.png";
import EPayLogo from "@/assets/images/assets/ExperienceSection-EPayLogo-1.png";
import DialecticaLogo from "@/assets/images/assets/ExperienceSection-DialecticaLogo-1.png";
import VNPTLogo from "@/assets/images/assets/ExperienceSection-VNPTLogo-1.png";
import TrueMoneyLogo from "@/assets/images/assets/ExperienceSection-TrueMoneyLogo-1.png";
import VegaFintechLogo from "@/assets/images/assets/ExperienceSection-VegaFintechLogo-1.png";
import NGSLogo from "@/assets/images/assets/ExperienceSection-NGSLogo-1.png";
import ChoTotLogo from "@/assets/images/assets/ExperienceSection-ChoTotLogo-1.png";
import VDSLogo from "@/assets/images/assets/ExperienceSection-VDSLogo-1.png";
import VNPayLogo from "@/assets/images/assets/ExperienceSection-VNPayLogo-1.png";
import ZaloPayLogo from "@/assets/images/assets/ExperienceSection-ZaloPayLogo-1.png";
import DiDongVietLogo from "@/assets/images/assets/ExperienceSection-DiDongVietLogo-1.png";
import WinCommerceLogo from "@/assets/images/assets/ExperienceSection-WinCommerceLogo-1.png";
import VMGLogo from "@/assets/images/assets/ExperienceSection-VMGLogo-1.png";
import MFastLogo from "@/assets/images/assets/ExperienceSection-MFastLogo-1.png";
import SharpLogo from "@/assets/images/assets/ExperienceSection-SharpLogo-1.png";
import NestleLogo from "@/assets/images/assets/ExperienceSection-NestleLogo-1.png";
import SmartFinanceLogo from "@/assets/images/assets/ExperienceSection-SmartFinanceLogo-1.png";
import NTVLogo from "@/assets/images/assets/ExperienceSection-NTVLogo-1.png";
import KimberlyClarkLogo from "@/assets/images/assets/ExperienceSection-KimberlyClarkLogo-1.png";
import AhamoveLogo from "@/assets/images/assets/ExperienceSection-AhamoveLogo-1.png";
import TrustingSocialLogo from "@/assets/images/assets/ExperienceSection-TrustingSocialLogo-1.png";

const SelftSolutionSection = () => {
  const { lang } = useLanguage();
  const router = useRouter();
  const FilmList1 = [
    DialecticaLogo,
    DiDongVietLogo,
    WinCommerceLogo,
    VMGLogo,
    MFastLogo,
    ZaloPayLogo,
    EPayLogo,
    VNPTLogo,
    TrueMoneyLogo,
    VegaFintechLogo,
    NGSLogo,
    ChoTotLogo,
    VDSLogo,
    VNPayLogo,
  ];
  const FilmList2 = [
    TrustingSocialLogo,
    AhamoveLogo,
    NTVLogo,
    KimberlyClarkLogo,
    NestleLogo,
    SharpLogo,
    SmartFinanceLogo,
  ];
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
    <div className={`${styles.container} to-91% pt-10 -mt-1`}>
      <div className="flex flex-row flex-nowrap items-center w-full">
        {/* Cột chữ: Ép không xuống dòng và không bị co lại */}
        <div className="flex-shrink-0 white-space-nowrap mx-4 lg:mx-20 text-white">
          <div className="font-playfair text-sm lg:text-[clamp(2.75rem,1.4375rem+1.3672vw,3.625rem)]">
            {lang === "Viet" ? "Phát triển trên" : "Growth through"}
          </div>
          <div className="font-bold text-sm lg:text-[clamp(2.75rem,1.4375rem+1.3672vw,3.625rem)]">
            {/* Sử dụng white-space-nowrap ở đây nếu bạn muốn cả cụm này nằm trên 1 hàng duy nhất */}
            {lang === "Viet" ? "HÀNH TRÌNH MỞ" : "EXPANDING"}
            <br />
            {lang === "Viet" ? "RỘNG HỢP TÁC" : "PARTNERSHIPS"}
          </div>
        </div>

        {/* Cột FilmStrip: Chiếm toàn bộ phần còn lại và xử lý tràn width */}
        <div className="flex-1 min-w-0 flex flex-col gap-4 lg:gap-10">
          <FilmStrip
            items={FilmList1}
            gap={"gap-[30px] lg:gap-[100px]"}
            className="bg-[linear-gradient(90deg,rgba(1,27,64,0)_0%,#ffffff_30%,#ffffff_79%,rgba(1,27,64,0)_100%)] py-2 lg:py-5"
            imageClassName="h-6 lg:h-15 w-auto"
            sideFaded={false}
          />
          <FilmStrip
            items={FilmList2}
            gap={"gap-[30px] lg:gap-[100px]"}
            className="bg-[linear-gradient(90deg,rgba(1,27,64,0)_10%,#ffffff_40%,#ffffff_79%,rgba(1,27,64,0)_100%)] py-2 lg:py-5"
            imageClassName="h-4 lg:h-10 w-auto"
            duration={10}
            sideFaded={false}
            direction="right"
          />
        </div>
      </div>
      <div className={`text-center mb-10 lg:mb-40 mt-30 lg:mt-40`}>
        {/* <div className={`text-white lg:text-[50px] font-semibold`}>
          {lang === "Viet" ? "Khám phá nhanh" : "Quick Explore"}
        </div> */}
        <div
          className={`text-transparent bg-clip-text bg-linear-to-l from-[#FFFFFF] to-[#999999] text-xl font-extrabold
            lg:text-[clamp(2.5rem,-0.5rem+3.125vw,4.5rem)]`}
        >
          {lang === "Viet"
            ? "CÁC LĨNH VỰC ĐỒNG HÀNH"
            : "AREAS OF DEEP EXPERTISE & "}
          <br />
          {lang === "Viet" ? "CHUYÊN SÂU" : "COLLABORATION"}
        </div>
      </div>
      <div
        className={`grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-10 lg:px-[13%] text-white text-center text-[10px] lg:text-[clamp(1rem,-0.5rem+1.5625vw,2rem)] font-extrabold pb-20 lg:pb-80 mx-10 items-stretch`}
      >
        {/* Box 1 */}
        <a
          href="#covid-period"
          className="h-full block hover:scale-110 transition-all duration-300"
        >
          <GlassCard
            containerClassName="h-full"
            contentClassName="px-3 lg:px-5 py-5 h-full flex flex-col justify-center"
            borderRadius={"rounded-[20px] lg:rounded-[40px]"}
            borderWidth={1}
          >
            <div className={`flex flex-col gap-5 items-center`}>
              <Image
                src={IconBox1}
                alt="Icon Box 1"
                className={`w-full h-auto mx-auto`}
              />
              <div>
                {lang == "Viet"
                  ? "TƯ VẤN CHIẾN LƯỢC TĂNG TRƯỞNG NGÀNH TÀI CHÍNH"
                  : "STRATEGIC GROWTH CONSULTING FOR THE FINANCIAL INDUSTRY"}
              </div>
            </div>
          </GlassCard>
        </a>

        {/* Box 2 */}
        <a
          href="#training-programs"
          className="h-full block hover:scale-110 transition-all duration-300"
        >
          <GlassCard
            containerClassName="h-full"
            contentClassName="px-3 lg:px-5 py-5 h-full flex flex-col justify-center"
            borderRadius={"rounded-[20px] lg:rounded-[40px]"}
            borderWidth={1}
          >
            <div className={`flex flex-col gap-5 items-center`}>
              <Image
                src={IconBox2}
                alt="Icon Box 2"
                className={`w-full h-auto mx-auto`}
              />
              <div>
                {lang == "Viet"
                  ? "THIẾT KẾ CHƯƠNG TRÌNH ĐÀO TẠO DOANH NGHIỆP"
                  : "CORPORATE TRAINING PROGRAM DESIGN"}
              </div>
            </div>
          </GlassCard>
        </a>

        {/* Box 3 */}
        <a
          href="#growth-hack"
          className="h-full block hover:scale-110 transition-all duration-300"
        >
          <GlassCard
            containerClassName="h-full"
            contentClassName="px-3 lg:px-5 py-5 h-full flex flex-col justify-center"
            borderRadius={"rounded-[20px] lg:rounded-[40px]"}
            borderWidth={1}
          >
            <div className={`flex flex-col gap-5 items-center`}>
              <Image
                src={IconBox3}
                alt="Icon Box 3"
                className={`w-full h-auto mx-auto`}
              />
              <div>
                {lang == "Viet"
                  ? "HUẤN LUYỆN KHAI VẤN BỨT PHÁ SỰ NGHIỆP"
                  : "CAREER BREAKTHROUGH COACHING & MENTORING"}
              </div>
            </div>
          </GlassCard>
        </a>

        {/* Box 4 */}
        <a
          href="#young-partners"
          className="h-full block hover:scale-110 transition-all duration-300"
        >
          <GlassCard
            containerClassName="h-full"
            contentClassName="px-3 lg:px-5 py-5 h-full flex flex-col justify-center"
            borderRadius={"rounded-[20px] lg:rounded-[40px]"}
            borderWidth={1}
          >
            <div className={`flex flex-col gap-5 items-center`}>
              <Image
                src={IconBox4}
                alt="Icon Box 4"
                className={`w-full h-auto mx-auto`}
              />
              <div>
                {lang == "Viet"
                  ? "DIỄN GIẢ TRUYỀN CẢM HỨNG THỜI ĐẠI AI"
                  : "INSPIRATIONAL SPEAKER IN THE AI ERA"}
              </div>
            </div>
          </GlassCard>
        </a>
      </div>
      {/* <div
        className={`h-10 lg:h-15 bg-linear-to-b from-[#1e2936] to-[#0a3472]`}
      ></div> */}
    </div>
  );
};

// const SelftSolutionSection = () => {
//   const { lang } = useLanguage();
//   const router = useRouter();
//   const AdaptiveLink = ({
//     href,
//     children,
//     className,
//   }: {
//     href: string;
//     children: React.ReactNode;
//     className?: string;
//   }) => {
//     const router = useRouter();
//     const lastClickTime = React.useRef<number>(0);

//     const handleClick = (e: React.MouseEvent) => {
//       // Kiểm tra thiết bị có hỗ trợ cảm ứng
//       const isTouchDevice =
//         "ontouchstart" in window || navigator.maxTouchPoints > 0;

//       if (isTouchDevice) {
//         const now = Date.now();
//         // Nếu khoảng cách giữa 2 lần chạm < 300ms thì chuyển trang
//         if (now - lastClickTime.current < 300) {
//           router.push(href);
//         } else {
//           // Chạm lần đầu: chặn chuyển hướng và lưu thời gian
//           e.preventDefault();
//           lastClickTime.current = now;
//         }
//       } else {
//         // Desktop: Để thẻ <a> hoạt động mặc định (1 click)
//         // Không cần gọi router.push ở đây để giữ tính năng "Open in new tab" của trình duyệt
//       }
//     };

//     return (
//       <a href={href} onClick={handleClick} className={className}>
//         {children}
//       </a>
//     );
//   };
//   return (
//     <div
//       className={`bg-linear-to-tr from-[#1F2833] from-15% to-[#0D326A] to-91% pt-10 lg:pt-15 -mt-1`}
//     >
//       <div className={`text-center mb-10`}>
//         <div className={`text-white lg:text-[50px] font-semibold`}>
//           {lang === "Viet" ? "Khám phá nhanh" : "Quick Explore"}
//         </div>
//         <div
//           className={`text-transparent bg-clip-text bg-linear-to-r from-[#FFFFFF] to-[#999999] text-xl font-extrabold
//             lg:text-[clamp(55px,-25px+5.208vw,75px)]`}
//         >
//           {lang === "Viet"
//             ? "GIẢI PHÁP CHO RIÊNG BẠN"
//             : "SOLUTIONS TAILORED FOR YOU"}
//         </div>
//       </div>
//       <div
//         className={`grid grid-cols-2 grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 lg:gap-5 lg:mx-20`}
//       >
//         <AdaptiveLink href="#covid-period" className="relative">
//           <Image
//             src={ImageBox1}
//             alt="Image Box 1"
//             className={`w-full h-auto`}
//           />
//           <div
//             className={`
//               absolute flex flex-col justify-between top-0 left-0 w-full h-full p-4 lg:p-8
//               text-white z-10
//               /* Tạo lớp gradient ẩn bằng before */
//               before:content-[''] before:absolute before:inset-0
//               before:bg-[linear-gradient(to_bottom,rgba(3,70,166,0.8),rgba(1,27,64,0.8))]
//               before:opacity-0 hover:before:opacity-100
//               before:transition-opacity before:duration-300 before:-z-10
//             `}
//           >
//             <div
//               className={`font-bold lg:text-[clamp(25px,5.05px+1.302vw,30px)]`}
//             >
//               {lang == "Viet"
//                 ? "TƯ VẤN CHIẾN LƯỢC PHÁT TRIỂN DOANH NGHIỆP"
//                 : "STRATEGIC BUSINESS DEVELOPMENT CONSULTING"}
//             </div>
//             <div
//               className={`font-medium text-[10px] lg:text-[clamp(15px,-4.92px+1.302vw,20px)]`}
//             >
//               {lang == "Viet"
//                 ? "Từ câu chuyện chuyển mình đầy “ngoạn mục” mùa đại dịch, hãy cùng tôi tìm kiếm giải pháp thực tế cho doanh nghiệp của bạn."
//                 : "From a remarkable transformation during the pandemic, let’s uncover practical solutions for your business."}
//             </div>
//           </div>
//         </AdaptiveLink>
//         <AdaptiveLink href="#training-programs" className={`relative`}>
//           <Image
//             src={ImageBox2}
//             alt="Image Box 2"
//             className={`w-full h-auto`}
//           />
//           <div
//             className={`
//               absolute flex flex-col justify-between top-0 left-0 w-full h-full p-4 lg:p-8
//               text-white z-10

//               /* Tạo lớp gradient ẩn bằng before */
//               before:content-[''] before:absolute before:inset-0
//               before:bg-[linear-gradient(to_bottom,rgba(3,70,166,0.8),rgba(1,27,64,0.8))]
//               before:opacity-0 hover:before:opacity-100
//               before:transition-opacity before:duration-300 before:-z-10
//             `}
//           >
//             <div
//               className={`font-bold lg:text-[clamp(25px,5.05px+1.302vw,30px)]`}
//             >
//               {lang == "Viet"
//                 ? "CHƯƠNG TRÌNH ĐÀO TẠO NỘI BỘ"
//                 : "INTERNAL TRAINING PROGRAMS"}
//             </div>
//             <div
//               className={`font-medium text-[10px] lg:text-[clamp(15px,-4.92px+1.302vw,20px)]`}
//             >
//               {lang == "Viet"
//                 ? "Để nhân sự không bao giờ rơi vào trạng thái “đuối năng lực” trước sự phát triển nhanh chóng, chương trình đào tạo nội bộ được xây dựng riêng phù hợp với định hướng doanh nghiệp."
//                 : "To ensure your team never falls behind in capability amid rapid change, customized training programs are designed to align with your business direction."}
//             </div>
//           </div>
//         </AdaptiveLink>
//         <AdaptiveLink href="#growth-hack" className={`relative`}>
//           <Image
//             src={ImageBox3}
//             alt="Image Box 3"
//             className={`w-full h-auto`}
//           />
//           <div
//             className={`
//               absolute flex flex-col justify-between top-0 left-0 w-full h-full p-4 lg:p-8
//               text-white z-10

//               /* Tạo lớp gradient ẩn bằng before */
//               before:content-[''] before:absolute before:inset-0
//               before:bg-[linear-gradient(to_bottom,rgba(3,70,166,0.8),rgba(1,27,64,0.8))]
//               before:opacity-0 hover:before:opacity-100
//               before:transition-opacity before:duration-300 before:-z-10
//             `}
//           >
//             <div
//               className={`font-bold lg:text-[clamp(25px,5.05px+1.302vw,30px)]`}
//             >
//               {lang == "Viet"
//                 ? "BÍ KÍP BỨT PHÁ SỰ NGHIỆP TÀI CHÍNH"
//                 : "CAREER BREAKTHROUGH IN FINANCE"}
//             </div>
//             <div
//               className={`font-medium text-[10px] lg:text-[clamp(15px,-4.92px+1.302vw,20px)]`}
//             >
//               {lang == "Viet"
//                 ? "Bạn là Leader nhưng đang cảm thấy “bế tắc” trong việc phát triển nghề nghiệp, hãy để tôi “tháo gỡ điểm nghẽn” đó cho bạn."
//                 : "If you’re a leader feeling “stuck” in your career growth, let me help you remove those bottlenecks."}
//             </div>
//           </div>
//         </AdaptiveLink>
//         <AdaptiveLink href="#young-partners" className={`relative`}>
//           <Image
//             src={ImageBox4}
//             alt="Image Box 4"
//             className={`w-full h-auto`}
//           />
//           <div
//             className={`
//               absolute flex flex-col justify-between top-0 left-0 w-full h-full p-4 lg:p-8
//               text-white z-10

//               /* Tạo lớp gradient ẩn bằng before */
//               before:content-[''] before:absolute before:inset-0
//               before:bg-[linear-gradient(to_bottom,rgba(3,70,166,0.8),rgba(1,27,64,0.8))]
//               before:opacity-0 hover:before:opacity-100
//               before:transition-opacity before:duration-300 before:-z-10
//             `}
//           >
//             <div
//               className={`font-bold lg:text-[clamp(25px,5.05px+1.302vw,30px)]`}
//             >
//               {lang == "Viet"
//                 ? "DIỄN GIẢ CÙNG NGƯỜI TRẺ PHÁT TRIỂN"
//                 : "SPEAKING & YOUTH DEVELOPMENT"}
//             </div>
//             <div
//               className={`font-medium text-[10px] lg:text-[clamp(15px,-4.92px+1.302vw,20px)]`}
//             >
//               {lang == "Viet"
//                 ? "Luôn đồng hành cùng người trẻ, hãy để tôi lan tỏa giá trị và kinh nghiệm của mình để đóng góp thêm vào hành trình nuôi dưỡng nhân tài trẻ."
//                 : "Committed to supporting young professionals, I aim to share my experience and create value in nurturing the next generation of talent."}
//             </div>
//           </div>
//         </AdaptiveLink>
//       </div>
//       <div
//         className={`h-10 lg:h-15 bg-linear-to-b from-[#1e2936] to-[#0a3472]`}
//       ></div>
//     </div>
//   );
// };

export default SelftSolutionSection;
