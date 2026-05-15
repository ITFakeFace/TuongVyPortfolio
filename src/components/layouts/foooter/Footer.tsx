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
      <div
        className={`flex flex-col lg:flex-row px-10 lg:px-[15%] py-5 lg:py-20 gap-5 lg:gap-0 items-center justify-center`}
      >
        <div className={`w-full lg:w-1/2`}>
          <div
            className={`bg-clip-text bg-linear-to-br from-[#FFFFFF] to-[#999999] text-[1.25rem] lg:text-[clamp(2.75rem,0.0313rem+2.832vw,4.5625rem)] text-transparent 
                font-bold text-center lg:text-left 
                mx-auto`}
          >
            {lang == "Viet" ? "CẢM ƠN" : "THANK YOU FOR"}
            <br />
            {lang == "Viet" ? "SỰ ĐỒNG HÀNH" : "YOUR SUPPORT"}
          </div>
        </div>
        <div
          className={`w-full lg:w-1/2 flex flex-row items-center justify-center gap-5 lg:gap-10`}
        >
          <a
            href="https://www.linkedin.com/in/tran-thanh-nu-tuong-vy-a9252732/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              className={`bg-[radial-gradient(circle,#5268D2_35%,#7DB3E2_100%)] rounded-2xl lg:rounded-4xl aspect-square p-3 lg:p-5 flex items-center`}
            >
              <FontAwesomeIcon
                icon={faLinkedinIn}
                className="text-lg lg:text-4xl 4xl:text-7xl! text-white hover:text-[#d9d9d9] transition-colors! "
              />
            </div>
          </a>
          <div className={`lg:w-3/5 text-white `}>
            <div
              className={`text-sm lg:text-md lg:text-xl 4xl:text-3xl italic border-b-1 border-white leading-snug`}
            >
              {lang == "Viet" ? "Liên hệ:" : "Contact me:"}
            </div>
            <div
              className={`pt-3 text-xs lg:text-lg 4xl:text-2xl leading-snug`}
            >
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
