"use client";
import { useLanguage } from "@/context/LanguageContext";
import styles from "./Footer.module.scss";
import { Button } from "primereact/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const { lang } = useLanguage();
  return (
    <div className={`${styles.container}`}>
      <div className={`flex flex-col lg:flex-row px-10 lg:px-50 py-5 lg:py-20`}>
        <div className={`w-full lg:w-1/2`}>
          <div
            className={`bg-clip-text bg-linear-to-br from-[#FFFFFF] to-[#999999] text-[clamp(25px,8.28px+4.254vw,90px)] text-transparent 
                font-bold text-center lg:text-left 
                mx-auto`}
          >
            {lang == "Viet" ? "CẢM ƠN" : "CẢM ƠN"}
            <br />
            {lang == "Viet" ? "ĐÃ ĐỒNG HÀNH" : "ĐÃ ĐỒNG HÀNH"}
          </div>
        </div>
        <div
          className={`w-full lg:w-1/2 flex flex-row items-center justify-center gap-5 lg:gap-10`}
        >
          <Button
            unstyled
            className={`bg-[radial-gradient(circle,#5268D2_35%,#7DB3E2_100%)] rounded-2xl lg:rounded-4xl aspect-square p-3 lg:p-5`}
          >
            <FontAwesomeIcon
              icon={faLinkedinIn}
              className="text-lg lg:text-8xl! text-white hover:text-[#d9d9d9] transition-colors! "
            />
          </Button>
          <div className={`lg:w-3/5 text-white`}>
            <div
              className={`text-md lg:text-5xl italic border-b-1 border-white`}
            >
              {lang == "Viet" ? "Liên hệ:" : "Contact:"}
            </div>
            <div className={`pt-3 text-sm lg:text-3xl`}>
              <div>
                <span className={`font-bold`}>P:</span> (+84) 908.665.656
              </div>
              <div>
                <span className={`font-bold`}>E:</span> tuongvy80@gmail.com
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
