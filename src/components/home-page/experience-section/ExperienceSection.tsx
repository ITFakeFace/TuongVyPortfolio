"use client";
import {
  ExperienceBox,
  Timeline,
  TimelineItem,
} from "@/components/generals/TimeLine";
import { useLanguage } from "@/context/LanguageContext";
import ExpText from "@/assets/images/texts/ExperienceSection-ExperienceText-1.png";
import Image, { StaticImageData } from "next/image";
import styles from "./ExperienceSection.module.scss";
import ExpImage1 from "@/assets/images/assets/ExperienceSection-ExpImage-1.png";
import ExpImage2 from "@/assets/images/assets/ExperienceSection-ExpImage-2.png";
import ExpImage3 from "@/assets/images/assets/ExperienceSection-ExpImage-3.png";
import ExpImage4 from "@/assets/images/assets/ExperienceSection-ExpImage-4.png";
import ExpImage5 from "@/assets/images/assets/ExperienceSection-ExpImage-5.png";
import ExpImage6 from "@/assets/images/assets/ExperienceSection-ExpImage-6.png";
import ExpImage8 from "@/assets/images/assets/ExperienceSection-ExpImage-8.png";
import ExpImage9 from "@/assets/images/assets/ExperienceSection-ExpImage-9.png";
import ExpImage10 from "@/assets/images/assets/ExperienceSection-ExpImage-10.png";
import ExpImage11 from "@/assets/images/assets/ExperienceSection-ExpImage-11.png";
import ExpImage12 from "@/assets/images/assets/ExperienceSection-ExpImage-12.png";
import ExpImage13 from "@/assets/images/assets/ExperienceSection-ExpImage-13.png";
import ExpImage14 from "@/assets/images/assets/ExperienceSection-ExpImage-14.png";
import GrowthProfit from "@/assets/images/assets/ExperienceSection-GrowthProfit-1.png";
import GrowthProfitEng from "@/assets/images/assets/ExperienceSection-GrowthProfitEng-1.png";
import ExpImageTemp from "@/assets/images/assets/ExperienceSection-ExpTempImage-1.png";
import FintechLogo from "@/assets/images/assets/ExperienceSection-FintechFarmLogo-1.png";
import LiobankLogo from "@/assets/images/assets/ExperienceSection-LiobankLogo-1.png";
import FIALogo from "@/assets/images/assets/ExperienceSection-FIALogo-1.png";
import CakeLogo from "@/assets/images/assets/ExperienceSection-CakeLogo-1.png";
import PNPLogo from "@/assets/images/assets/ExperienceSection-PNPLogo-1.png";
import VNBALogo from "@/assets/images/assets/ExperienceSection-VNBALogo-1.png";
import SHBFinanceLogo from "@/assets/images/assets/ExperienceSection-SHBFinanceLogo-1.png";
import ComBLogo from "@/assets/images/assets/ExperienceSection-ComBLogo-1.png";
import FECreditLogo from "@/assets/images/assets/ExperienceSection-FECreditLogo-1.png";
import PrudentialLogo from "@/assets/images/assets/ExperienceSection-PrudentialLogo-1.png";
import ANZLogo from "@/assets/images/assets/ExperienceSection-ANZLogo-1.png";
import EPayLogo from "@/assets/images/assets/ExperienceSection-EPayLogo-1.png";
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
import FilmStrip from "@/components/generals/FilmStrip";
import TuongVyImage from "@/assets/images/assets/ExperienceSection-TuongVyImage-1.png";
import CloudImage from "@/assets/images/assets/ExperienceSection-CloudImage-2.png";
import CloudImageEng from "@/assets/images/assets/ExperienceSection-CloudImageEng-2.png";
import CloudImageMobile from "@/assets/images/assets/ExperienceSection-CloudImageMobile-2.png";
import CloudImageMobileEng from "@/assets/images/assets/ExperienceSection-CloudImageMobileEng-2.png";
import MsVy from "@/assets/images/assets/ExperienceSection-MsVy-4.png";
import DecorLine from "@/assets/images/assets/ExperienceSection-DecorLine-1.png";
import { Button } from "primereact/button";
import { useContactForm } from "@/context/ContactContext";
import FilmImage1 from "@/assets/images/assets/IntroductionSection-FilmImage-1.png";
import FilmImage2 from "@/assets/images/assets/IntroductionSection-FilmImage-2.png";
import FilmImage3 from "@/assets/images/assets/IntroductionSection-FilmImage-3.png";
import FilmImage4 from "@/assets/images/assets/IntroductionSection-FilmImage-4.png";
import FilmImage5 from "@/assets/images/assets/IntroductionSection-FilmImage-5.png";
import FilmImage6 from "@/assets/images/assets/IntroductionSection-FilmImage-6.png";
import FilmImage7 from "@/assets/images/assets/IntroductionSection-FilmImage-7.png";
import FilmImage8 from "@/assets/images/assets/IntroductionSection-FilmImage-8.png";
import FilmImage9 from "@/assets/images/assets/IntroductionSection-FilmImage-9.png";
import FilmImage10 from "@/assets/images/assets/IntroductionSection-FilmImage-10.png";
import FilmImage11 from "@/assets/images/assets/IntroductionSection-FilmImage-11.png";
import FilmImage12 from "@/assets/images/assets/IntroductionSection-FilmImage-12.png";
import { cl } from "@/utils/cn";
import { motion } from "framer-motion";

interface ExperienceItemProps {
  image: StaticImageData;
  title: string;
  children: React.ReactNode;
  direction: "left" | "right";
  childrenClassName?: string;
}

interface ShiftReRenderItemProps {
  id: string;
  Viet: {
    line1: string;
    line2: string;
    source: string;
    line3: string;
  };
  Eng: {
    line1: string;
    line2: string;
    source: string;
    line3: string;
  };
}
// Định nghĩa cấu hình hiệu ứng (Fade in và trượt nhẹ từ dưới lên)
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8, // Thời gian chạy animation của mỗi item
      delay: index * 1, // Mỗi item cách nhau đúng 5 giây theo thứ tự index
      ease: "easeOut" as const,
    },
  }),
};
const ExperienceSection = () => {
  const { lang } = useLanguage();
  const { openContactForm } = useContactForm();

  const expStyles: Record<string, string> = {
    title: "text-2xl font-bold text-gray-800",
  };

  const FilmList1 = [
    EPayLogo,
    VNPTLogo,
    TrueMoneyLogo,
    VegaFintechLogo,
    NGSLogo,
    ChoTotLogo,
    VDSLogo,
    VNPayLogo,
    DiDongVietLogo,
    WinCommerceLogo,
    VMGLogo,
    MFastLogo,
    ZaloPayLogo,
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
  const ImageBox = ({
    src,
    alt,
    direction = "left",
  }: {
    src: StaticImageData;
    alt: string;
    direction: "left" | "right";
  }) => {
    return (
      <div className={`w-full h-auto relative`}>
        <Image
          src={src}
          alt={alt}
          className={`object-cover w-full h-auto rounded-2xl lg:rounded-4xl z-20 relative`}
        />
        <div
          className={`w-full h-full border-3 border-[#BDE9FF] absolute -bottom-3 lg:-bottom-5 ${direction == "left" ? "lg:-left-5 -left-3" : "lg:-right-5 -right-3"} rounded-2xl lg:rounded-4xl z-0`}
        ></div>
      </div>
    );
  };

  const ExperienceItem = ({
    image,
    title,
    children,
    direction,
    childrenClassName = "",
  }: ExperienceItemProps) => {
    return (
      <div
        className={`flex items-center gap-4 lg:gap-8 items-start justify-start ${
          direction === "left" ? "flex-row mr-auto" : "flex-row-reverse ml-auto"
        }`}
      >
        <div className={`w-1/2 lg:w-100 max-w-1/2`}>
          <div
            className={`text-white w-full font-bold text-[15px] lg:hidden ${direction === "left" ? "text-right" : "text-left"} my-4`}
          >
            {title}
          </div>
          <ImageBox
            src={image}
            alt={`Experience ${title}`}
            direction={direction}
          />
        </div>
        <div className="max-w-[850px] w-2/3 lg:w-auto flex flex-col items-start justify-start">
          <div
            className={`text-white w-full font-bold text-[1.5rem] hidden lg:block ${direction === "left" ? "text-left" : "text-right"}`}
          >
            {title}
          </div>
          <div
            className={`mt-4 px-5 py-3 lg:pb-5 text-white ${childrenClassName} 
              bg-[linear-gradient(45deg,rgba(31,40,51,0.2)_0%,rgba(255,255,255,0.2)_29%,rgba(255,255,255,0.2)_70%,rgba(31,40,51,0.2)_100%)] 
              border-2 border-[#C8E5FC] rounded-3xl w-fit
            `}
          >
            {children}
          </div>
        </div>
      </div>
    );
  };

  const ShiftReRenderItem = ({
    data,
    className,
  }: {
    data: ShiftReRenderItemProps;
    className?: string;
  }) => {
    return (
      <div
        className={cl(
          `flex flex-col gap-2 lg:gap-5 4xl:gap-8 text-center text-white mx-auto lg:mx-0`,
          className,
        )}
      >
        <div
          className={`font-extrabold text-[1.5rem] lg:text-[2rem] 4xl:text-[3rem]`}
        >
          {data.id}
        </div>
        <div
          className={`font-semibold text-[0.75rem] lg:text-[clamp(1.125rem,0.1875rem+0.9766vw,1.75rem)]`}
        >
          {data[lang].line1}
        </div>
        <div
          className={`text-[0.625rem] lg:text-[clamp(0.75rem,0.1875rem+0.5859vw,1.125rem)] italic font-extralight`}
        >
          {data[lang].line2}
          <br />
          <span
            className={`text-[0.5rem] lg:text-[clamp(0.625rem,-0.125rem+0.7813vw,1.125rem)]`}
          >
            {data[lang].source}
          </span>
        </div>
        <div
          className={`text-[0.625rem] lg:text-[clamp(0.875rem,0.125rem+0.7813vw,1.375rem)] font-semibold`}
        >
          {data[lang].line3}
        </div>
      </div>
    );
  };

  return (
    <div id="experience" className={`${styles.container} -mt-1 relative`}>
      <div
        className={`py-10 lg:py-15 text-transparent bg-linear-to-bl from-[#FFFFFF] via-white via-40% to-[#5A5B5B] bg-clip-text`}
      >
        <div
          className={`font-bold text-2xl lg:text-[clamp(3.75rem,1.875rem+1.9531vw,5rem)] text-center `}
        >
          {lang == "Viet" ? "DẤU ẤN CHUYÊN MÔN" : "PROFESSIONAL MILESTONES"}
        </div>
        <div
          className={`font-playfair italic text-[10px] lg:text-[clamp(1.5rem,0.75rem+0.7813vw,2rem)] text-center`}
        >
          {lang == "Viet"
            ? "Chứng kiến sự phát triển của tôi thông qua quá trình xây dựng và đóng góp giá trị"
            : "Witness the development of my career through the process of building and contributing value"}
        </div>
      </div>
      <div className={`flex flex-col px-5 lg:px-[13%] gap-10 lg:gap-20 `}>
        <ExperienceItem image={ExpImageTemp} title={"2026"} direction="left">
          <div className={``}>
            <div
              className={`font-bold text-[14px] lg:text-[1.5rem] text-center leading-normal`}
            >
              {lang == "Viet" ? "Đồng sáng lập" : "Co - Founder"}
            </div>
            <div className={`text-center text-[12px] lg:text-[1rem]`}>
              PNP Viet Nam Trading Solutions Co.Ltd
            </div>
            <div className={`mt-3 text-center text-[12px] lg:text-[1rem]`}>
              {lang == "Viet"
                ? "Phụ trách Tài chính & Vận hành"
                : " Incharge of Finance & Operations"}
            </div>
            <div
              className={`bg-white rounded-2xl w-3/4 lg:w-1/2 mx-auto mt-3 px-4 lg:px-7 py-4 lg:py-5 text-center text-[12px] lg:text-[20px] flex items-center justify-center`}
            >
              <Image
                src={PNPLogo}
                alt="SHB Finance Logo"
                className={`object-cover w-full h-auto flex items-center justify-center`}
              />
            </div>
          </div>
        </ExperienceItem>
        <ExperienceItem
          image={ExpImage1}
          title={lang == "Viet" ? "2025 - 2026" : "2025 - 2026"}
          direction="right"
        >
          <div
            className={`grid grid-cols-1 lg:grid-cols-2 gap-7 lg:gap-2 pb-3 lg:pb-0`}
          >
            <div className={``}>
              <div
                className={`font-bold text-[16px] lg:text-[1.5rem] text-center leading-normal`}
              >
                {lang == "Viet" ? "Phó Giám Đốc" : "Deputy Director"}
              </div>
              <div className={`text-center text-[12px] lg:text-[1rem]`}>
                Fintech Farm UK
              </div>
              <div className={`mt-3 text-center text-[12px] lg:text-[1rem]`}>
                {lang == "Viet"
                  ? "Đối tác chiến lược với OCB Bank - Đơn vị sở hữu nền tảng Liobank by OCB"
                  : "Strategic Partner with OCB Bank – Owner of the Liobank by OCB platform"}
              </div>
              <Image
                src={FintechLogo}
                alt="Fintech Farm Logo"
                className={`object-cover w-1/2 lg:w-1/3 h-auto mt-3 mx-auto my-auto`}
              />
            </div>
            <div className={`h-full flex flex-col justify-between`}>
              <div>
                <div
                  className={`font-bold text-[16px] lg:text-[1.5rem] text-center leading-normal`}
                >
                  {lang == "Viet" ? "Cố vấn Cấp cao" : "Senior Advisor"}
                </div>
                <div className={`text-center text-[12px] lg:text-[1rem]`}>
                  Liobank by OCB
                </div>
              </div>
              <Image
                src={LiobankLogo}
                alt="Liobank Logo"
                className={`object-cover w-3/4 lg:w-2/3 h-auto mx-auto mt-5 lg:mt-0`}
              />
            </div>
          </div>
        </ExperienceItem>
        <ExperienceItem
          image={ExpImage13}
          title={lang == "Viet" ? "2/2025 - Hiện tại" : "2/2025 - now"}
          direction="left"
        >
          <div className={``}>
            <div
              className={`font-bold text-[16px] lg:text-[1.5rem] text-center leading-normal`}
            >
              {lang == "Viet" ? "Nhà sáng lập" : "Founder"}
            </div>
            <div className={`text-center text-[12px] lg:text-[1rem]`}>
              FIA Investment and Development LLC
            </div>
            <div
              className={`bg-white rounded-2xl w-3/4 lg:w-1/2 mx-auto mt-3 p-2 text-centerflex items-center justify-center`}
            >
              <Image
                src={FIALogo}
                alt="FIA Logo"
                className={`object-cover w-full h-auto flex items-center justify-center px-3 lg:px-0`}
              />
            </div>
          </div>
        </ExperienceItem>
        <ExperienceItem
          image={ExpImage3}
          title={"2023 - 2025"}
          direction="right"
        >
          <div className={``}>
            <div
              className={`font-bold text-[14px] lg:text-[1.5rem] text-center leading-normal`}
            >
              {lang == "Viet" ? "Phó Tổng Giám Đốc" : "Deputy CEO"}
            </div>
            <div className={`text-center text-[12px] lg:text-[1rem]`}>
              CAKE by VPBank
            </div>
            <div
              className={`bg-white rounded-2xl w-3/4 lg:w-1/2 mx-auto mt-3 px-3 lg:px-7 py-2 lg:py-5 text-center text-[12px] lg:text-[20px] flex items-center justify-center`}
            >
              <Image
                src={CakeLogo}
                alt="SHB Finance Logo"
                className={`object-cover w-full h-auto flex items-center justify-center`}
              />
            </div>
          </div>
        </ExperienceItem>
        <ExperienceItem
          image={ExpImage4}
          title={"2022 - 2023"}
          direction="left"
          childrenClassName="lg:w-[650px]!"
        >
          <div className={`pb-2 lg:pb-0`}>
            <div
              className={`font-bold text-[0.875rem] lg:text-[1.5rem] text-center text-balance leading-normal `}
            >
              {lang == "Viet"
                ? "Thành viên Ban Điều hành Câu lạc bộ Tài chính Tiêu dùng "
                : "Executive Committee Member, Consumer Finance Club"}
            </div>
            <div className={`text-center text-[8px] lg:text-[1rem]`}>
              {lang == "Viet"
                ? "Hiệp hội Ngân hàng Việt Nam"
                : "Vietnam Banks Association"}
            </div>
            <div
              className={`bg-white rounded-2xl w-3/4 lg:w-1/2 mx-auto mt-3 px-3 lg:px-7 p-3 lg:py-5 text-center`}
            >
              <Image
                src={VNBALogo}
                alt="VNBALogo"
                className={`object-cover w-full h-auto flex items-center justify-center`}
              />
            </div>
          </div>
        </ExperienceItem>
        <ExperienceItem
          image={ExpImage14}
          title={"2018 - 2023"}
          direction="right"
        >
          <div className={``}>
            <div
              className={`font-bold text-[14px] lg:text-[1.5rem] text-center leading-normal`}
            >
              {lang == "Viet" ? "Phó Tổng Giám Đốc" : "Deputy CEO"}
            </div>
            <div className={`text-center text-[12px] lg:text-[1.25rem]`}>
              SHB Finance (SHBFC)
            </div>
            <div
              className={`bg-white rounded-lg lg:rounded-2xl w-3/4 lg:w-2/3 mx-auto mt-3 py-3 lg:py-5 text-center flex items-center justify-center`}
            >
              <Image
                src={SHBFinanceLogo}
                alt="SHB Finance Logo"
                className={`object-cover w-4/5 mx-auto h-auto flex items-center justify-center`}
              />
            </div>
          </div>
        </ExperienceItem>
        <ExperienceItem
          image={ExpImage9}
          title={"2016 - 2018"}
          direction="left"
        >
          <div className={``}>
            <div
              className={`font-bold text-[1rem] lg:text-[1.5rem] text-center leading-normal`}
            >
              {lang == "Viet"
                ? "Phó Giám Đốc Khối"
                : "Deputy Division Director"}
            </div>
            <div className={`text-center text-[10px] lg:text-[1rem]`}>
              OCB Community Banking Division (COM-B)
            </div>
            <div
              className={`bg-white rounded-2xl w-3/4 lg:w-2/3 mx-auto mt-3 py-5 text-center`}
            >
              <Image
                src={ComBLogo}
                alt="COM-B Logo"
                className={`object-cover w-3/4 mx-auto h-auto flex items-center justify-center`}
              />
            </div>
          </div>
        </ExperienceItem>
        <ExperienceItem
          image={ExpImage11}
          title={"2015 - 2016"}
          direction="right"
        >
          <div className={`lg:py-5`}>
            <div
              className={`font-bold text-[14px] lg:text-[1.5rem] text-center leading-normal `}
            >
              {lang == "Viet" ? "Trưởng phòng" : "Department Head of"}
              <br />
              {lang == "Viet" ? "Quản lý đối tác" : "Partnership Manager"}
            </div>
            <div className={`text-center text-[12px] lg:text-[1rem]`}>
              FE CREDIT
            </div>
            <div
              className={`bg-white rounded-lg lg:rounded-2xl lg:w-2/3 mx-auto mt-3 lg:px-5 py-3 lg:py-6 text-center flex items-center justify-center`}
            >
              <Image
                src={FECreditLogo}
                alt="FE CREDIT Logo"
                className={`object-cover w-3/4 mx-auto h-auto flex items-center justify-center`}
              />
            </div>
          </div>
        </ExperienceItem>
        <ExperienceItem
          image={ExpImage8}
          title={lang == "Viet" ? "2011 - 2015" : "2011 - 2015"}
          direction="left"
        >
          <div className={`lg:mx-15`}>
            <div
              className={`font-bold text-[0.75rem] lg:text-[1.5rem] text-center leading-normal `}
            >
              {lang == "Viet" ? "Trưởng phòng Kinh doanh" : "Head of Sales"}
            </div>
            <div className={`text-center text-[10px] lg:text-[1rem]`}>
              PRUDENTIAL VIETNAM FINANCIAL
            </div>
            <div className={`mt-3 text-center text-[12px] lg:text-[1rem]`}>
              {lang == "Viet"
                ? "Kênh Bán hàng Chi nhánh, Quận 1"
                : "Branch Sales Channel, District 1"}
            </div>
            <div
              className={`bg-white rounded-2xl w-2/3 lg:w-1/2 mx-auto mt-3 px-2 lg:px-0 py-5 text-center flex items-center justify-center`}
            >
              <Image
                src={PrudentialLogo}
                alt="Prudential Logo"
                className={`object-cover w-4/5 mx-auto h-auto flex items-center justify-center`}
              />
            </div>
          </div>
        </ExperienceItem>
        <ExperienceItem
          image={ExpImage12}
          title={"2010 - 2011"}
          direction="right"
        >
          <div className={``}>
            <div
              className={`font-bold text-[0.75rem] lg:text-[1.5rem] text-center leading-normal`}
            >
              {lang == "Viet" ? "Trưởng nhóm Kinh doanh" : "Sales Team Leader"}
            </div>
            <div className={`text-center text-[12px] lg:text-[1rem]`}>
              ANZ Bank
            </div>
            <div
              className={`bg-white rounded-2xl w-4/5 mx-auto mt-3 px-3 lg:px-5 py-3 lg:py-3 text-center flex items-center justify-center`}
            >
              <Image
                src={ANZLogo}
                alt="ANZ Bank Logo"
                className={`object-cover w-4/5 h-auto mx-auto my-auto`}
              />
            </div>
          </div>
        </ExperienceItem>
      </div>
      {/* <div
        className={`my-10 mt-30 text-[25px] lg:text-[45px] text-center text-transparent font-bold bg-clip-text bg-linear-to-r from-white from-57% to-[#999999]`}
      >
        {lang == "Viet"
          ? "PHÁT TRIỂN TRÊN HÀNH TRÌNH MỞ RỘNG HỢP TÁC"
          : "GROWTH THROUGH EXPANDING PARTNERSHIPS"}
      </div> */}

      <div
        className={`flex flex-col-reverse lg:flex-row w-full lg:w-10/10 mx-auto items-center justify-center mt-10 lg:mt-0 pb-10 lg:pb-0`}
      >
        <a href="#covid-period">
          <Button
            unstyled
            className={`lg:hidden px-5 lg:px-15 py-2 lg:py-4 bg-linear-to-r from-[#07367B]/50 to-[#1F2833]/50 rounded-full lg:rounded-full border-1 border-white text-[16px] lg:text-[32px]! lg:text-base font-bold text-white relative mx-auto hover:cursor-pointer hover:scale-105 transition-transform duration-300`}
            label={
              lang == "Viet" ? "ĐÂY LÀ CÁCH TÔI LÀM!" : "THIS IS HOW I DID!"
            }
          />
        </a>
        <div className={`w-full lg:w-1/2 relative lg:pl-[13%] lg:mt-30`}>
          <Image
            src={TuongVyImage}
            alt="Tuong Vy"
            className={`object-cover w-7/10 lg:w-full h-auto mx-auto lg:mt-10 rounded-2xl lg:rounded-4xl z-20 relative`}
          />
          <FilmStrip
            items={[
              FilmImage1,
              FilmImage2,
              FilmImage3,
              FilmImage12,
              FilmImage4,
              FilmImage5,
              FilmImage6,
              FilmImage7,
              FilmImage8,
              FilmImage9,
              FilmImage10,
              FilmImage11,
            ]}
            gap={"gap-[30px]"}
            className={`mt-10 absolute left-0 bottom-[15%] lg:bottom-[5%] w-screen`}
            itemClassName="w-[50vw] lg:w-[15vw] h-auto"
            imageClassName="object-contain"
          />
        </div>
        <div
          className={`w-full lg:w-2/3 flex flex-col justify-center items-center lg:pr-[13%] lg:pb-20 pt-20 lg:pt-0`}
        >
          <blockquote
            className={`relative pt-10 pl-16 text-white p-8 rounded-lg
              font-playfair
              before:content-['“'] 
              before:absolute before:top-0 before:left-8 lg:before:-left-5 
              before:text-[50px] lg:before:text-[150px] before:font-bold before:italic before:font-serif before:leading-none 
              before:text-white/80 /* Độ mờ của quote */
              before:transform before:translate-x-0 lg:before:-translate-x-2 before:translate-y-2 lg:before:-translate-y-4
            `}
          >
            <p className="font-semibold text-lg lg:text-[clamp(2rem,0.875rem+1.1719vw,2.75rem)] italic leading-tight relative z-10 lg:w-auto text-center ">
              {lang == "Viet"
                ? "Trên hành trình đó tôi đã kiến tạo "
                : "Throughout that journey, I have driven"}
              <br />
              {lang == "Viet"
                ? "sự đột phá trong ngành"
                : "breakthrough growth in the industry."}
            </p>
          </blockquote>
          <a href="#covid-period">
            <Button
              unstyled
              className={`hidden lg:block px-5 lg:px-15 py-2 lg:py-4 bg-linear-to-r from-[#07367B]/50 to-[#1F2833]/50 rounded-full border-2 border-white text-[16px] lg:text-[28px]! lg:text-base font-bold text-white relative mx-auto hover:cursor-pointer hover:scale-105 transition-transform duration-300`}
              label={
                lang == "Viet"
                  ? "ĐÂY LÀ CÁCH TÔI LÀM!"
                  : "THIS IS HOW I DID IT!"
              }
            />
          </a>
        </div>
      </div>
      <div className={`relative pt-60 lg:pt-60 4xl:pt-80 z-40`}>
        <div className={`text-center z-20`}>
          <div
            className={`text-white italic font-playfair lg:text-[clamp(1.75rem,-0.5rem+2.3438vw,3.25rem)]`}
          >
            {lang == "Viet" ? "Tôi nhận ra rằng" : "I have relized"}
          </div>
          <div
            className={`lg:mt-5 bg-clip-text text-transparent bg-linear-to-r from-[#FFFFFF] from-39% to-[#999999] font-bold text-[1rem] lg:text-[clamp(2rem,0.5rem+1.5625vw,3rem)]`}
          >
            {lang == "Viet"
              ? "ĐÂY LÀ LÚC DIGITAL BANKING"
              : "THIS IS THE MOMENT DIGITAL"}
            <br />
            {lang == "Viet" ? "" : "BANKING MUST "}
            <span className={`text-[#F3C85F]`}>
              {lang == "Viet" ? "NGỪNG TĂNG TRƯỞNG " : "STOP GROWING "}
            </span>
            {lang == "Viet" ? "THEO MINDSET" : "WITH"}
            <br />
            {lang == "Viet" ? "CỦA 5 NĂM TRƯỚC" : "A 5-YEAR-OLD MINDSET"}
          </div>
        </div>
        <Image
          src={lang == "Viet" ? CloudImage : CloudImageEng}
          alt="Cloud Image"
          className={`hidden lg:block object-cover w-full h-auto lg:-mt-20 z-10 relative`}
        />
        <Image
          src={lang == "Viet" ? CloudImageMobile : CloudImageMobileEng}
          alt="Cloud Image"
          className={`block lg:hidden object-cover w-full h-auto -mt-10 z-10 relative`}
        />
      </div>
      <div className={`mt-20 lg:-mt-10 4xl:-mt-30 z-50`}>
        <div
          className={`bg-clip-text text-transparent bg-linear-to-l from-[#FFFFFF] from-9% to-[#999999] text-center font-extrabold lg:text-[clamp(2rem,-0.25rem+2.3438vw,3.5rem)]`}
        >
          {lang == "Viet"
            ? "05 SỰ DỊCH CHUYỂN ĐANG THAY ĐỔI"
            : "05 SHIFTS RESHAPING"}
          <br />
          {lang == "Viet"
            ? "“CUỘC CHƠI” NGÀNH TÀI CHÍNH"
            : "THE FINANCIAL SERVICES MARKET"}
        </div>
        <div
          className={`text-white text-center font-playfair text-medium italic text-[0.625rem] lg:text-[clamp(1.125rem,-0.1875rem+1.3672vw,2rem)]`}
        >
          {lang == "Viet"
            ? "Ngân hàng đang tăng user nhưng không phải ngân hàng nào cũng đang tăng value"
            : "Banks may be growing users—but not every bank is growing value."}
        </div>
        <div
          className={`grid grid-cols-[repeat(2,max-content)] lg:grid-cols-[repeat(3,max-content)] justify-center gap-x-10 gap-y-5 lg:gap-50 mt-10 lg:mt-15 w-full`}
        >
          <motion.div
            custom={0} // Index 0 -> Delay 0s
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }} // Kích hoạt khi scroll cách màn hình 100px
            variants={itemVariants}
          >
            <ShiftReRenderItem
              className={`w-[40vw] lg:w-[16vw]`}
              data={{
                id: "01",
                Viet: {
                  line1: "Application không còn là lợi thế cạnh tranh",
                  line2:
                    "Khi +95% tổ chức tín dụng đã có chiến lược chuyển đổi số - có mobile app đẹp và internet baking mượt mà",
                  source: "(Theo Ngân hàng Nhà nước Việt Nam)",
                  line3:
                    "Mobile app, onboarding online hay eKYC giờ đã trở thành điều kiện tối thiểu.",
                },
                Eng: {
                  line1: "Applications are no longer a competitive advantage",
                  line2:
                    "As +95% of financial institutions already have digital transformation strategies — with polished mobile apps and seamless internet banking",
                  source: "(According to State Bank of Vietnam)",
                  line3:
                    "Mobile apps, digital onboarding, and eKYC have now become the minimum standard.",
                },
              }}
            />
          </motion.div>
          <motion.div
            custom={1} // Index 1 -> Delay 5s
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={itemVariants}
          >
            <ShiftReRenderItem
              className={`w-[40vw] lg:w-[16vw]`}
              data={{
                id: "02",
                Viet: {
                  line1: "Tăng user không còn đồng nghĩa với tăng profit",
                  line2:
                    "Digital Banking dần trở thành thói quen thanh toán với 5.5 tỷ giao dịch không tiền mặt trong Q1/2025",
                  source: "(Theo NAPAS)",
                  line3:
                    "Retention, activation và monetization trở thành yếu tố quyết định chất lượng tăng trưởng.",
                },
                Eng: {
                  line1: "Growing users no longer means growing profit",
                  line2:
                    "Digital Banking is becoming a daily payment habit, with 5.5 billion cashless transactions in Q1/2025",
                  source: "(According to NAPAS)",
                  line3:
                    "Retention, activation, and monetization have become the key drivers of growth quality",
                },
              }}
            />
          </motion.div>
          <motion.div
            custom={2} // Index 2 -> Delay 10s
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={itemVariants}
            className="col-span-2 lg:col-span-1"
          >
            <ShiftReRenderItem
              className={`w-[40vw] lg:w-[16vw] col-span-2 lg:col-span-1`}
              data={{
                id: "03",
                Viet: {
                  line1: "Lợi thế không còn nằm ở việc cho vay nhiều hơn",
                  line2:
                    "Được chú ý mức hồi phục hơn 20% năm 2024, CASA đang trở thành chiến lược mới",
                  source: "(Theo Vietnam News)",
                  line3:
                    "Cuộc chơi chuyển từ tăng tín dụng sang tối ưu nguồn vốn như CASA, Cost of Fund, khả năng giữ dòng tiền trong hệ sinh thái.",
                },
                Eng: {
                  line1: "The competitive edge is no longer about lending more",
                  line2:
                    "With CASA recovering by over 20% in 2024, it is becoming the new strategic focus",
                  source: "(According to Vietnam News)",
                  line3:
                    "The market is shifting from credit growth to optimizing funding sources — through CASA, cost of funds, and the ability to retain cash within the ecosystem.",
                },
              }}
            />
          </motion.div>
        </div>
        <div
          className={`grid grid-cols-[repeat(2,max-content)] justify-center gap-10 lg:gap-50 mt-5 lg:mt-10 w-full`}
        >
          <motion.div
            custom={3} // Index 3 -> Delay 15s
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={itemVariants}
          >
            <ShiftReRenderItem
              className={`w-[40vw] lg:w-[16vw]`}
              data={{
                id: "04",
                Viet: {
                  line1: "AI đang chuyển cuộc chơi từ quy mô sang độ chính xác",
                  line2:
                    "AI không còn là lựa chọn thử nghiệm mà đang trở thành điều kiện cạnh tranh bắt buộc trong tương lai",
                  source: "(Theo Thời báo Ngân hàng 2025)",
                  line3:
                    "Sự thành thạo AI biến Precision mới là lợi thế cạnh tranh thật sự.",
                },
                Eng: {
                  line1: "AI is shifting the market from scale to precision",
                  line2:
                    "AI is no longer an experimental option—it is becoming a mandatory competitive capability for the future",
                  source: "(According to Thời báo Ngân hàng, 2025)",
                  line3:
                    "AI mastery is making precision the new competitive advantage.",
                },
              }}
            />
          </motion.div>
          <motion.div
            custom={4} // Index 4 -> Delay 20s
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={itemVariants}
          >
            <ShiftReRenderItem
              className={`w-[40vw] lg:w-[16vw]`}
              data={{
                id: "05",
                Viet: {
                  line1: "Fee income đang trở thành lớp lợi nhuận phòng thủ",
                  line2:
                    "Thay thế thu nhập lãi thuần khi đứng trước rủi ro, thu nhập dịch vụ toàn ngành đạt gần 91.000 tỷ VND năm 2025, tăng 7.5% YoY",
                  source: "(Theo Vietnam.vn)",
                  line3: "Fee income đang trở thành trụ cột lợi nhuận thứ hai.",
                },
                Eng: {
                  line1: "Fee income is becoming a defensive profit layer",
                  line2:
                    "As a hedge against lending risks, industry-wide service income reached nearly VND 91 trillion in 2025, up 7.5% YoY",
                  source: "(According to Vietnam.vn)",
                  line3:
                    "Fee income is becoming the second core profit pillar.",
                },
              }}
            />
          </motion.div>
        </div>
      </div>
      <div className={`relative py-30 lg:p-40 lg:pt-80 4xl:pt-120`}>
        <div
          className={`lg:absolute lg:left-[13%] w-4/7 lg:w-2/7 mx-auto lg:mx-0 bg-clip-text col-span-2 lg:col-span-1 text-transparent bg-linear-to-bl from-[#FFFFFF] from-[49%] to-[#5A5B5B] py-10 lg:Ly-0`}
        >
          <div
            className={`font-extrabold text-[1.5rem] lg:text-[clamp(2.75rem,0.125rem+2.7344vw,4.5rem)] text-center lg:text-left`}
          >
            PROFIT <br className={`hidden lg:block`} />
            GROWTH <br />
            ARCHITECTURE
          </div>
          <div
            className={`font-playfair italic text-[0.75rem] lg:text-[clamp(1rem,-0.125rem+1.1719vw,1.75rem)] text-center lg:text-left mt-4 lg:mt-0`}
          >
            {lang === "Viet"
              ? "Tôi tin rằng: “Tăng trưởng thật sự không nằm ở tốc độ mở rộng — mà chính là từng “tầng kiến trúc” kiên cố biến tăng trưởng trở thành lợi nhuận bền vững”"
              : "I believe: “True growth is not about the speed of expansion—it lies in building strong layers of architecture that turn growth into sustainable profit”"}
          </div>
        </div>
        <Image
          src={lang == "Viet" ? GrowthProfit : GrowthProfitEng}
          alt="Experience Text"
          className={`object-cover w-full lg:w-4/6 lg:ml-auto  h-auto lg:mt-0 rounded-2xl lg:rounded-4xl z-20 relative`}
        />
      </div>
      <div className={`lg:px-[15%] lg:pt-20 4xl:pt-40 relative`}>
        <div
          className={`flex flex-col lg:flex-row items-center justify-between gap-15 lg:gap-20 z-20`}
        >
          <div
            className={`flex flex-col flex-1 gap-10 lg:gap-30 text-white items-center lg:items-center justify-center text-center lg:text-center`}
          >
            <div
              className={`font-playfair font-light italic text-[18px] lg:text-[clamp(1.75rem,-0.5rem+2.3438vw,3.25rem)] w-7/10 lg:w-4/5`}
            >
              {lang == "Viet"
                ? "“Trong giai đoạn mới, người chiến thắng có thể không phải ngân hàng lớn nhất — mà là tổ chức thích nghi nhanh nhất”"
                : "“In this new era, the winner may not be the biggest bank — but the organization that adapts the fastest.”"}
            </div>
            <Button
              unstyled
              label={
                lang == "Viet"
                  ? "CÙNG TÔI ĐÁNH GIÁ CHIẾN LƯỢC HIỆN TẠI"
                  : "REVIEW YOUR CURRENT STRATEGY WITH ME"
              }
              className="bg-linear-to-r from-[#07367B] to-[#1F2833] text-white text-[10px] lg:text-[clamp(1rem,-0.5rem+1.5625vw,2rem)] font-bold rounded-full border-2 border-white w-fit px-5 lg:px-15 4xl:px-20 py-2 lg:py-3 4xl:py-5 cursor-pointer hover:scale-110 transition-all duration-300"
              onClick={openContactForm}
            />
          </div>

          <Image
            src={MsVy}
            alt="Experience Text"
            className={`object-cover w-3/5 ml-auto lg:ml-0 lg:w-2/5 h-auto rounded-2xl lg:rounded-4xl z-20 relative`}
          />
        </div>
      </div>
      <div className={`relative`}>
        <Image
          src={DecorLine}
          alt="Decorative Line"
          className="w-full h-auto -translate-y-1/2 z-20 absolute top-0 left-0"
        />
      </div>
    </div>
  );
};

export default ExperienceSection;
