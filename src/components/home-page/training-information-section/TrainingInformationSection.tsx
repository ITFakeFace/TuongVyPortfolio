"use client";
import styles from "./TrainingInformationSection.module.scss";
import ConsultingProfessorText from "@/assets/images/texts/TrainingInformationSection-ConsultingProfessorText-1.png";
import PartnerImage1 from "@/assets/images/assets/TrainingInformationSection-PartnerImage-1.png";
import PartnerImage2 from "@/assets/images/assets/TrainingInformationSection-PartnerImage-2.png";
import DecorImage1 from "@/assets/images/assets/TrainingInformationSection-DecorImage-1.png";
import DecorImage2 from "@/assets/images/assets/TrainingInformationSection-DecorImage-2.png";
import SheLogo from "@/assets/images/assets/TrainingInformationSection-SheLogo-1.png";
import Express247Logo from "@/assets/images/assets/TrainingInformationSection-247ExpressLogo-1.png";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "primereact/button";

const TrainingInformationSection = () => {
  const { lang } = useLanguage();
  return (
    <div className={`${styles.container} w-full`}>
      {/* Consulting Professor */}
      <div className={`w-full flex flex-col px-20`}>
        <Image
          src={ConsultingProfessorText}
          alt="Consulting Professor"
          className={`w-3/5 h-auto mx-auto mt-15`}
        />
        <div
          className={`w-full text-white text-center text-[clamp(25px,1.56vw+6px,30px)] mx-auto font-medium`}
        >
          {lang === "Viet"
            ? "Đồng hành cùng doanh nghiệp xây dựng chiến lược vận hành, tối ưu hóa doanh thu."
            : "Đồng hành cùng doanh nghiệp xây dựng chiến lược vận hành, tối ưu hóa doanh thu."}
          <br />
          {lang === "Viet"
            ? "Đồng hành cùng mỗi cá nhân trên lộ trình bứt phá sự nghiệp với ngã rẻ phù hợp"
            : "Đồng hành cùng mỗi cá nhân trên lộ trình bứt phá sự nghiệp với ngã rẻ phù hợp"}
        </div>
        <Button
          unstyled
          className={`
            bg-[radial-gradient(circle,#5268D2_0%,#7DB3E2_100%)] text-white
            border-3 border-white rounded-3xl
            w-fit
            text-[42px] font-bold 
            px-15 py-4 mt-15 mx-auto
            transition-colors duration-300 hover:bg-[radial-gradient(circle,#ffffff_0%,#ffffff_100%)] hover:text-[#203a81]
        `}
        >
          {lang == "Viet" ? "TRAO ĐỔI TRỰC TIẾP" : "TRAO ĐỔI TRỰC TIẾP"}
        </Button>
        <div
          className={`flex flex-row w-full rounded-[42px] bg-[#C3E0FA] font-bold text-center text-[clamp(25px,1.56vw+6px,30px)]`}
        >
          <Image
            src={DecorImage1}
            alt="Decor 1"
            className={`w-1/2 h-48 object-fill`}
          />
          <div className={`w-1/2 h-auto flex items-center justify-center`}>
            {lang === "Viet" ? "XÂY DỰNG CHIẾN LƯỢC" : "XÂY DỰNG CHIẾN LƯỢC"}
            <br />
            {lang === "Viet"
              ? "VẬN HÀNH DOANH NGHIỆP"
              : "VẬN HÀNH DOANH NGHIỆP"}
          </div>
        </div>
        <div
          className={`flex flex-row w-full rounded-[42px] bg-[#C3E0FA] font-bold text-center text-[clamp(25px,1.56vw+6px,30px)]`}
        >
          <div className={`w-1/2 h-auto flex items-center justify-center`}>
            {lang === "Viet"
              ? "BỨC PHÁ SỰ NGHIỆP CÁ NHÂN"
              : "BỨC PHÁ SỰ NGHIỆP CÁ NHÂN"}
            <br />
            {lang === "Viet"
              ? "NGÀNH TÀI CHÍNH, KINH DOANH"
              : "NGÀNH TÀI CHÍNH, KINH DOANH"}
          </div>
          <Image
            src={DecorImage2}
            alt="Decor 2"
            className={`w-1/2 h-48 object-fill`}
          />
        </div>
      </div>
    </div>
  );
};

export default TrainingInformationSection;
