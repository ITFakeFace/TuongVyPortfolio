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
import ExpImageTemp from "@/assets/images/assets/ExperienceSection-ExpTempImage-1.png";
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
import { Button } from "primereact/button";
import { useContactForm } from "@/context/ContactContext";

interface ExperienceItemProps {
  image: StaticImageData;
  title: string;
  children: React.ReactNode;
  direction: "left" | "right";
  childrenClassName?: string;
}

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
            className={`text-white w-full font-bold text-[35px] hidden lg:block ${direction === "left" ? "text-left" : "text-right"}`}
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

  return (
    <div id="experience" className={`${styles.container} -mt-1`}>
      <div
        className={`text-transparent bg-linear-to-bl from-[#FFFFFF] via-white via-40% to-[#5A5B5B] bg-clip-text font-bold text-2xl lg:text-5xl  text-center py-10 lg:py-15`}
      >
        {lang == "Viet" ? "KINH NGHIỆM THỰC CHIẾN" : "PRACTICAL EXPERIENCE"}
      </div>
      <div className={`flex flex-col px-5 lg:px-20 gap-10 lg:gap-10`}>
        <ExperienceItem
          image={ExpImage1}
          title={lang == "Viet" ? "2025 - Hiện tại" : "2025 - now"}
          direction="left"
        >
          <div
            className={`grid grid-cols-1 lg:grid-cols-2 gap-7 lg:gap-2 pb-3 lg:pb-0`}
          >
            <div className={``}>
              <div
                className={`font-bold text-[16px] lg:text-[clamp(20px,0.625rem+1.3vw,25px)] lg:text-[clamp(30px,0.625rem+1.3vw,35px)] text-center leading-normal`}
              >
                {lang == "Viet" ? "Phó Giám Đốc" : "Deputy Director"}
              </div>
              <div className={`text-center text-[12px] lg:text-[20px]`}>
                Fintech Farm UK
              </div>
              <div className={`mt-3 text-center text-[12px] lg:text-[20px]`}>
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
                  className={`font-bold text-[16px] lg:text-[clamp(20px,0.625rem+1.3vw,25px)] lg:text-[clamp(30px,0.625rem+1.3vw,35px)] text-center leading-normal`}
                >
                  {lang == "Viet" ? "Cố vấn Cấp cao" : "Senior Advisor"}
                </div>
                <div className={`text-center text-[12px] lg:text-[20px]`}>
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
          image={ExpImage2}
          title={lang == "Viet" ? "2/2025 - Hiện tại" : "2/2025 - now"}
          direction="right"
        >
          <div className={``}>
            <div
              className={`font-bold text-[16px] lg:text-[clamp(30px,0.625rem+1.3vw,35px)] text-center leading-normal`}
            >
              {lang == "Viet" ? "Nhà sáng lập" : "Founder"}
            </div>
            <div className={`text-center text-[12px] lg:text-[20px]`}>
              FIA Investment and Development LLC
            </div>
            <div
              className={`bg-white rounded-2xl w-3/4 lg:w-1/2 mx-auto mt-3 p-2 text-center text-[12px] lg:text-[20px] flex items-center justify-center`}
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
          title={"11/2023 - 1/2025"}
          direction="left"
        >
          <div className={``}>
            <div
              className={`font-bold text-[14px] lg:text-[clamp(30px,0.625rem+1.3vw,35px)] text-center leading-normal`}
            >
              {lang == "Viet" ? "Phó Tổng Giám Đốc" : "Deputy CEO"}
            </div>
            <div className={`text-center text-[12px] lg:text-[20px]`}>
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
          direction="right"
          childrenClassName="lg:w-[650px]!"
        >
          <div className={`pb-2 lg:pb-0`}>
            <div
              className={`font-bold text-[16px] lg:text-[clamp(30px,0.625rem+1.3vw,35px)] text-center text-balance leading-normal `}
            >
              {lang == "Viet"
                ? "Thành viên Ban Điều hành Câu lạc bộ Tài chính Tiêu dùng "
                : "Executive Committee Member, Consumer Finance Club"}
            </div>
            <div className={`text-center text-[8px] lg:text-[20px]`}>
              {lang == "Viet"
                ? "Hiệp hội Ngân hàng Việt Nam"
                : "Vietnam Banks Association"}
            </div>
            <div
              className={`bg-white rounded-2xl w-3/4 lg:w-1/2 mx-auto mt-3 px-3 lg:px-7 p-3 lg:py-5 text-center text-[15px] lg:text-[20px]`}
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
          image={ExpImage10}
          title={"7/2018 - 10/2023"}
          direction="left"
        >
          <div className={``}>
            <div
              className={`font-bold text-[14px] lg:text-[clamp(30px,0.625rem+1.3vw,35px)] text-center leading-normal`}
            >
              {lang == "Viet" ? "Phó Tổng Giám Đốc" : "Deputy CEO"}
            </div>
            <div className={`text-center text-[12px] lg:text-[20px]`}>
              SHB Finance (SHBFC)
            </div>
            <div
              className={`bg-white rounded-lg lg:rounded-2xl w-3/4 lg:w-2/3 mx-auto mt-3 py-3 lg:py-5 text-center text-[12px] lg:text-[20px] flex items-center justify-center`}
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
          title={"6/2016 - 6/2018"}
          direction="right"
        >
          <div className={``}>
            <div
              className={`font-bold text-[16px] lg:text-[clamp(30px,0.625rem+1.3vw,35px)] text-center leading-normal`}
            >
              {lang == "Viet" ? "Phó Giám Đốc" : "Deputy Director"}
            </div>
            <div className={`text-center text-[10px] lg:text-[20px]`}>
              OCB Community Banking Division (COM-B)
            </div>
            <div
              className={`bg-white rounded-2xl w-3/4 lg:w-2/3 mx-auto mt-3 py-5 text-center text-[15px] lg:text-[20px]`}
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
          title={"8/2015 - 6/2016"}
          direction="left"
        >
          <div className={`lg:py-5`}>
            <div
              className={`font-bold text-[14px] lg:text-[clamp(30px,0.625rem+1.3vw,35px)] text-center leading-normal `}
            >
              {lang == "Viet" ? "Quản lý Kinh doanh" : "Business Manager"}
            </div>
            <div className={`text-center text-[12px] lg:text-[20px]`}>
              FE CREDIT
            </div>
            <div
              className={`bg-white rounded-lg lg:rounded-2xl lg:w-2/3 mx-auto mt-3 lg:px-5 py-3 lg:py-6 text-center text-[15px] lg:text-[20px] flex items-center justify-center`}
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
          title={lang == "Viet" ? "1/2011 - 8/2015" : "1/2011 - 8/2015"}
          direction="right"
        >
          <div className={`lg:mx-15`}>
            <div
              className={`font-bold text-[16px] lg:text-[clamp(30px,0.625rem+1.3vw,35px)] text-center leading-normal `}
            >
              {lang == "Viet" ? "Trưởng phòng Kinh doanh" : "Head of Sales"}
            </div>
            <div className={`text-center text-[10px] lg:text-[20px]`}>
              PRUDENTIAL VIETNAM FINANCIAL
            </div>
            <div className={`mt-3 text-center text-[12px] lg:text-[20px]`}>
              {lang == "Viet"
                ? "Kênh Bán hàng Chi nhánh, Quận 1"
                : "Branch Sales Channel, District 1"}
            </div>
            <div
              className={`bg-white rounded-2xl w-2/3 lg:w-1/2 mx-auto mt-3 px-2 lg:px-0 py-5 text-center text-[15px] lg:text-[20px] flex items-center justify-center`}
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
          title={"1/2010 - 1/2011"}
          direction="left"
        >
          <div className={``}>
            <div
              className={`font-bold text-[16px] lg:text-[clamp(30px,0.625rem+1.3vw,35px)] text-center leading-normal`}
            >
              {lang == "Viet" ? "Trưởng nhóm Kinh doanh" : "Sales Team Leader"}
            </div>
            <div className={`text-center text-[12px] lg:text-[20px]`}>
              ANZ Bank
            </div>
            <div
              className={`bg-white rounded-2xl w-4/5 mx-auto mt-3 px-3 lg:px-5 py-3 lg:py-3 text-center text-[15px] lg:text-[20px] flex items-center justify-center`}
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
      <div
        className={`my-10 mt-30 text-[25px] lg:text-[45px] text-center text-transparent font-bold bg-clip-text bg-linear-to-r from-white from-57% to-[#999999]`}
      >
        {lang == "Viet"
          ? "PHÁT TRIỂN TRÊN HÀNH TRÌNH MỞ RỘNG HỢP TÁC"
          : "GROWTH THROUGH EXPANDING PARTNERSHIPS"}
      </div>
      <div className={`flex flex-col gap-10`}>
        <FilmStrip
          items={FilmList1}
          gap={"gap-[30px] lg:gap-[100px]"}
          className={`bg-white py-5`}
          imageClassName="h-10 lg:h-20 w-auto"
        />
        <FilmStrip
          items={FilmList2}
          gap={"gap-[30px] lg:gap-[100px]"}
          className={`bg-white py-5`}
          imageClassName="h-6 lg:h-10 w-auto"
          duration={10}
          direction="right"
        />
      </div>
      <div
        className={`flex flex-col-reverse lg:flex-row w-full lg:w-9/10 mx-auto items-center justify-center mt-10 lg:mt-0 pb-10 lg:pb-0`}
      >
        <a href="#covid-period">
          <Button
            unstyled
            className={`lg:hidden px-5 lg:px-15 py-2 lg:py-4 bg-linear-to-r from-[#07367B] to-[#1F2833] rounded-2xl lg:rounded-4xl border-1 border-white text-[16px] lg:text-[32px]! lg:text-base font-bold text-white relative mx-auto hover:cursor-pointer hover:scale-105 transition-transform duration-300`}
            label={
              lang == "Viet" ? "ĐÂY LÀ CÁCH TÔI LÀM!" : "THIS IS HOW I DID!"
            }
          />
        </a>
        <Image
          src={TuongVyImage}
          alt="Tuong Vy"
          className={`object-cover w-5/10 lg:w-7/21 h-auto lg:mt-10 rounded-2xl lg:rounded-4xl z-20 relative`}
        />
        <div className={`flex flex-col justify-center lg:gap-10`}>
          <blockquote
            className={`relative pt-10 pl-16 text-white p-8 rounded-lg
            before:content-['“'] 
            before:absolute before:top-0 before:left-8 lg:before:-left-5 
            before:text-[50px] lg:before:text-[150px] before:font-bold before:italic before:font-serif before:leading-none 
            before:text-white/80 /* Độ mờ của quote */
            before:transform before:translate-x-0 lg:before:-translate-x-2 before:translate-y-2 lg:before:-translate-y-4
          `}
          >
            <p className="font-semibold text-md lg:text-[clamp(40px,2.6042vw,50px)] italic leading-tight relative z-10 lg:w-auto text-center">
              {lang == "Viet"
                ? "Chỉ khi bước ra khỏi vùng an toàn,"
                : "Step Out of Your Comfort"}
              <br />
              {lang == "Viet"
                ? "tăng trưởng mới thực sự bắt đầu"
                : "Zone to Drive Growth"}
            </p>
          </blockquote>
          <a href="#covid-period">
            <Button
              unstyled
              className={`hidden lg:block mt-5 px-5 lg:px-15 py-2 lg:py-4 bg-linear-to-r from-[#07367B] to-[#1F2833] rounded-4xl border-2 border-white text-[24px] lg:text-[28px]! lg:text-base font-bold text-white relative mx-auto hover:cursor-pointer hover:scale-105 transition-transform duration-300`}
              label={
                lang == "Viet" ? "ĐÂY LÀ CÁCH TÔI LÀM!" : "THIS IS HOW I DO IT!"
              }
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
