"use client";
import StatBlock from "@/components/generals/StatBlock";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion"; // Import motion
import { cl } from "@/utils/cn";
import CountUp from "react-countup";
import styles from "./HeroSection.module.scss";
import TuongVyImage from "@/assets/images/assets/HeroSection-TuongVyImage-3.png";
import TuongVyMobileImage from "@/assets/images/assets/HeroSection-TuongVyMobileImage-2.png";
import Image from "next/image";
import { Button } from "primereact/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { useContactForm } from "@/context/ContactContext";

const HeroSection = () => {
  const { lang } = useLanguage();
  const { openContactForm } = useContactForm();
  const stat1Time: number = 6;
  const stat2Time: number = 3;
  const renderHeroDesktop = () => {
    return (
      <div className={``}>
        <div className={`flex lg:flex-col mt-10 gap-5`}>
          <div className={`flex lg:flex-row gap-5 lg:ml-20`}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className={`w-1/4`}
            >
              <div
                className={`w-full h-full lg:pb-5 text-center text-white bg-linear-to-b from-[#042B63] via-[#0957C9]/50 via-43% to-[#0957C9]/0 to-89%`}
              >
                <div
                  className={cl(
                    "flex items-center justify-center leading-none font-bold", // Thêm flex và items-center
                    "text-[clamp(3rem,2rem+7vw,12rem)]",
                  )}
                >
                  {/* Dấu + sẽ tự động căn giữa theo chiều dọc của số 18 */}
                  <span className="text-[clamp(2rem,1.5rem+5vw,8rem)] leading-[0.3]">
                    +
                  </span>
                  <CountUp
                    end={18}
                    duration={stat1Time}
                    scrollSpyDelay={1000}
                    enableScrollSpy
                    scrollSpyOnce
                    className={``}
                  >
                    {({ countUpRef }) => (
                      <span
                        className={`leading-[0.5] inline-block tracking-tighter`}
                        ref={countUpRef}
                      />
                    )}
                  </CountUp>
                  <div className={`leading-none`}>
                    <span className="text-[clamp(1rem,0.5rem+3vw,5rem)] ml-2 font-bold opacity-90">
                      {lang === "Viet" ? " năm" : " years"}
                    </span>
                  </div>
                </div>
                <div
                  className={`text-[clamp(1rem,0.5rem+1vw,1.3rem)] text-balance`}
                >
                  {lang == "Viet"
                    ? "Quản lý cấp cao ngành"
                    : "Senior Executive in Consumer"}
                  <br />
                  {lang == "Viet"
                    ? "Tài chính tiêu dùng và Ngân hàng số"
                    : "Finance and Digital Banking"}
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: stat1Time - 1 }}
              className={`w-1/4`}
            >
              <div
                className={`w-full h-full text-center text-white bg-linear-to-b from-[#042B63] via-[#0957C9]/50 via-43% to-[#0957C9]/0 to-89%`}
              >
                <div
                  className={cl(
                    "flex items-center justify-center leading-none font-bold", // Thêm flex và items-center
                    "text-[clamp(3rem,2rem+7vw,12rem)]",
                  )}
                >
                  {/* Dấu + sẽ tự động căn giữa theo chiều dọc của số 18 */}
                  <span className="text-[clamp(2rem,1.5rem+5vw,8rem)] leading-[0.3]">
                    +
                  </span>
                  <CountUp
                    end={5}
                    duration={stat2Time}
                    scrollSpyDelay={(stat1Time - 0.5) * 1000}
                    enableScrollSpy
                    scrollSpyOnce
                    className={``}
                  >
                    {({ countUpRef }) => (
                      <span
                        className={`leading-[0.5] inline-block tracking-tighter`}
                        ref={countUpRef}
                      />
                    )}
                  </CountUp>
                  <div className={`leading-none`}>
                    <span className="text-[clamp(1rem,0.5rem+3vw,5rem)] ml-2 font-bold opacity-90">
                      {lang === "Viet" ? " năm" : " years"}
                    </span>
                  </div>
                </div>
                <div
                  className={`text-[clamp(1rem,0.5rem+1vw,1.3rem)] text-balance`}
                >
                  {lang == "Viet"
                    ? "Chuyên gia trong mảng"
                    : "Expert in Digital Banking"}
                  <br />
                  {lang == "Viet"
                    ? "Digital Bank và ứng dụng AI"
                    : "and AI Applications"}
                </div>
              </div>
            </motion.div>
          </div>
          <div
            className={`text-[clamp(2.5rem,1rem+1.5vw,3rem)] leading-none text-white font-medium italic ml-20`}
          >
            {lang == "Viet" ? "VICTORY TRẦN" : "VICTORY TRAN"}
          </div>
          <div
            className={`bg-linear-to-bl from-[#ffffff] to-[#acafaf] bg-clip-text text-transparent font-bold ml-20 leading-tight`}
          >
            <div className={`text-[clamp(5.5rem,0rem+6vw,7rem)]`}>
              {lang == "Viet" ? "TRẦN THANH NỮ" : "TRAN THANH NU"}
            </div>
            <div className={`text-[clamp(5.5rem,0rem+6vw,7rem)]`}>
              {lang == "Viet" ? "TƯỜNG VY" : "TUONG VY"}
            </div>
          </div>
          {/* <div
            className={`lg:ml-20 text-[clamp(3rem,1rem+2.08vw,3.5rem)] text-[3rem] text-white font-light italic`}
          >
            VICTORY TRẦN
          </div> */}
          <div className={`lg:ml-20 flex lg:flex-row lg:gap-[3vw] z-20`}>
            <Button
              unstyled
              className={`bg-linear-to-r from-[#07367B] from-69% to-[#1F2833] border-2 border-white rounded-2xl py-4 px-15 text-white text-[clamp(30px,0.625rem+1.3vw,35px)] font-bold hover:cursor-pointer`}
              label={lang == "Viet" ? "KHÁM PHÁ CÙNG TÔI" : "EXPLORE WITH ME"}
              onClick={openContactForm}
            />
            <Button
              unstyled
              className={`border-2 border-white rounded-2xl py-4 px-15 text-white text-[clamp(30px,0.625rem+1.3vw,35px)] font-bold hover:cursor-pointer`}
              label={lang == "Viet" ? "SỰ KIỆN MỚI NHẤT" : "THE LATEST EVENTS"}
            />
          </div>
        </div>
        <div>
          <Image
            src={TuongVyImage}
            alt="Tuong Vy Image"
            className={`h-[90%] w-auto absolute bottom-0 right-[2%] pointer-events-none`}
            priority
          />
        </div>
      </div>
    );
  };
  const renderHeroMobile = () => {
    return (
      <div className={`flex flex-col items-center pr-1 relative`}>
        {/* Khối Thống kê (18+ năm / 5+ năm) */}
        <div
          className={`absolute top-0 left-[5%] flex flex-col justify-center gap-5 w-3/8 mb-8`}
        >
          {/* Item 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className={`w-full`}
          >
            <div
              className={`w-full h-full text-center text-white bg-linear-to-b from-[#042B63] via-[#0957C9]/50 via-54% to-transparent`}
            >
              <div
                className={cl(
                  "flex items-baseline justify-center leading-none font-bold",
                  "text-[clamp(3rem,1.5rem+6vw,8rem)]", // Hạ max từ 15rem xuống 8rem để trông tinh tế hơn
                )}
              >
                <span className="text-[0.4em] self-center mr-1">+</span>
                <CountUp
                  end={18}
                  duration={stat1Time}
                  scrollSpyDelay={1000}
                  enableScrollSpy
                  scrollSpyOnce
                >
                  {({ countUpRef }) => (
                    <span
                      className="tracking-tight leading-tight"
                      ref={countUpRef}
                    />
                  )}
                </CountUp>
                <span className="text-[clamp(0.7rem,0.4rem+1vw,1rem)] ml-1 font-bold uppercase">
                  {lang === "Viet" ? " năm" : " years"}
                </span>
              </div>

              {/* CHỮ MÔ TẢ: Nhỏ và mảnh hơn */}
              <div className="text-[clamp(5px,0.4rem+0.5vw,7px)] text-black text-balance font-normal opacity-80 tracking-wider uppercase mt-[-5px]">
                {lang == "Viet"
                  ? "Quản lý cấp cao ngành"
                  : "Senior Executive in Consumer"}
                <br />
                <span className="font-normal opacity-100">
                  {lang == "Viet"
                    ? "Tài chính tiêu dùng và Ngân hàng số"
                    : "Finance and Digital Banking"}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Khối 5+ năm */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: stat1Time - 1 }}
            className={`w-full`}
          >
            <div
              className={`w-full h-full text-center text-white bg-linear-to-b from-[#042B63] via-[#0957C9]/50 via-54% to-transparent`}
            >
              <div
                className={cl(
                  "flex items-baseline justify-center leading-none font-bold",
                  "text-[clamp(3rem,1.5rem+6vw,8rem)]",
                )}
              >
                <span className="text-[0.4em] self-center mr-1">+</span>
                <CountUp
                  end={5}
                  duration={stat2Time}
                  scrollSpyDelay={(stat1Time - 0.5) * 1000}
                  enableScrollSpy
                  scrollSpyOnce
                >
                  {({ countUpRef }) => (
                    <span
                      className="tracking-tight leading-tight"
                      ref={countUpRef}
                    />
                  )}
                </CountUp>
                <span className="text-[clamp(0.7rem,0.4rem+1vw,1rem)] ml-1 font-bold opacity uppercase">
                  {lang === "Viet" ? " năm" : " years"}
                </span>
              </div>

              <div className="text-[clamp(5px,0.4rem+0.5vw,7px)] text-balance opacity-80 font-normal tracking-wider uppercase mt-[-5px] text-black">
                {lang == "Viet"
                  ? "Chuyên gia trong mảng"
                  : "Expert in Digital Bankings"}
                <br />
                <span className="font-normal opacity-100">
                  {lang == "Viet"
                    ? "Digital Bank và ứng dụng AI"
                    : "and AI Applications"}
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Hình ảnh nhân vật */}
        <Image
          src={TuongVyMobileImage}
          alt="Tuong Vy Image"
          className={`w-8/10 h-auto ml-auto mb-6`}
        />

        {/* Khối Tên */}
        <div className="text-center w-full space-y-2 mb-5">
          <div className="bg-linear-to-br from-[#ffffff] to-[#a8abab] bg-clip-text text-transparent font-bold leading-[1.1]">
            <div className="text-[clamp(2.5rem,10vw,3.5rem)]">
              {lang == "Viet" ? "TRẦN THANH NỮ" : "TRAN THANH NU"}
            </div>
            <div className="text-[clamp(2.5rem,10vw,3.5rem)]">
              {lang == "Viet" ? "TƯỜNG VY" : "TUONG VY"}
            </div>
          </div>
          <div className="text-[clamp(1.2rem,5vw,1.5rem)] text-white font-medium italic">
            {lang == "Viet" ? "VICTORY TRẦN" : "VICTORY TRAN"}
          </div>
        </div>

        {/* Nút bấm (Xếp dọc trên Mobile) */}
        <div className="flex flex-col gap-3 w-full px-4 pb-10 lg:pb-0">
          <Button
            unstyled
            className="bg-linear-to-r from-[#07367B] to-[#1F2833] border border-white rounded-xl py-3 px-10 text-white text-md font-bold uppercase tracking-wider w-fit mx-auto"
            label={lang == "Viet" ? "KHÁM PHÁ CÙNG TÔI" : "EXPLORE WITH ME"}
            onClick={openContactForm}
          />
          <Button
            unstyled
            className="border border-white rounded-xl py-3 px-8 text-white text-sm font-bold uppercase tracking-wider w-fit mx-auto"
            label={lang == "Viet" ? "SỰ KIỆN MỚI NHẤT" : "THE LATEST EVENTS"}
          />
        </div>
      </div>
    );
  };

  return (
    <div className={`w-full lg:aspect-16/8 relative ${styles.container} pt-20`}>
      <div className="hidden md:block">{renderHeroDesktop()}</div>
      <div className="block md:hidden">{renderHeroMobile()}</div>
    </div>
  );
};
// const HeroSection = () => {
//   const { lang } = useLanguage();
//   const stat1Time: number = 6;
//   const stat2Time: number = 3;
//   return (
//     <div className={`w-full aspect-video! relative ${styles.container} pt-20`}>
//       <div className={`flex lg:flex-col mt-10 lg:gap-10`}>
//         <div className={`flex lg:flex-row gap-10 lg:ml-20`}>
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.5 }}
//             className={`w-1/4`}
//           >
//             <StatBlock className={`w-full lg:pb-5`}>
//               <div
//                 className={cl(
//                   "flex items-center justify-center leading-none font-bold", // Thêm flex và items-center
//                   "text-[clamp(3rem,2rem+7vw,12rem)]",
//                 )}
//               >
//                 {/* Dấu + sẽ tự động căn giữa theo chiều dọc của số 18 */}
//                 <span className="text-[clamp(2rem,1.5rem+5vw,8rem)] leading-[0.3]">
//                   +
//                 </span>
//                 <CountUp
//                   end={18}
//                   duration={stat1Time}
//                   scrollSpyDelay={1000}
//                   enableScrollSpy
//                   scrollSpyOnce
//                   className={``}
//                 >
//                   {({ countUpRef }) => (
//                     <span
//                       className={`leading-[0.5] inline-block tracking-tighter`}
//                       ref={countUpRef}
//                     />
//                   )}
//                 </CountUp>
//                 <div className={`leading-none`}>
//                   <span className="text-[clamp(1rem,0.5rem+3vw,5rem)] ml-2 font-bold opacity-90">
//                     {lang === "Viet" ? " năm" : " years"}
//                   </span>
//                 </div>
//               </div>
//               <div
//                 className={`text-[clamp(1rem,0.5rem+1vw,1.3rem)] text-balance`}
//               >
//                 {lang == "Viet"
//                   ? "Quản lý cấp cao ngành"
//                   : "Quản lý cấp cao ngành"}
//                 <br />
//                 {lang == "Viet"
//                   ? "Ngân hàng và Công nghệ tài chính"
//                   : "Ngân hàng và Công nghệ tài chính"}
//               </div>
//             </StatBlock>
//           </motion.div>
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: stat1Time - 1 }}
//             className={`w-1/4`}
//           >
//             <StatBlock className={`w-full h-full`}>
//               <div
//                 className={cl(
//                   "flex items-center justify-center leading-none font-bold", // Thêm flex và items-center
//                   "text-[clamp(3rem,2rem+7vw,12rem)]",
//                 )}
//               >
//                 {/* Dấu + sẽ tự động căn giữa theo chiều dọc của số 18 */}
//                 <span className="text-[clamp(2rem,1.5rem+5vw,8rem)] leading-[0.3]">
//                   +
//                 </span>
//                 <CountUp
//                   end={5}
//                   duration={stat2Time}
//                   scrollSpyDelay={(stat1Time - 0.5) * 1000}
//                   enableScrollSpy
//                   scrollSpyOnce
//                   className={``}
//                 >
//                   {({ countUpRef }) => (
//                     <span
//                       className={`leading-[0.5] inline-block tracking-tighter`}
//                       ref={countUpRef}
//                     />
//                   )}
//                 </CountUp>
//                 <div className={`leading-none`}>
//                   <span className="text-[clamp(1rem,0.5rem+3vw,5rem)] ml-2 font-bold opacity-90">
//                     {lang === "Viet" ? " năm" : " years"}
//                   </span>
//                 </div>
//               </div>
//               <div
//                 className={`text-[clamp(1rem,0.5rem+1vw,1.3rem)] text-balance`}
//               >
//                 {lang == "Viet"
//                   ? "Chuyên gia trong mảng"
//                   : "Chuyên gia trong mảng"}
//                 <br />
//                 {lang == "Viet"
//                   ? "Digital Bank và ứng dụng AI"
//                   : "Digital Bank và ứng dụng AI"}
//               </div>
//             </StatBlock>
//           </motion.div>
//         </div>
//         <div
//           className={`bg-gradient-to-r from-[#ffffff] to-[#12F4FE] bg-clip-text text-transparent font-bold ml-20 leading-tight`}
//         >
//           <div className={`text-[clamp(6.2rem,-1rem+7.5vw,8rem)]`}>
//             {lang == "Viet" ? "TRẦN THANH NỮ" : "TRAN THANH NU"}
//           </div>
//           <div className={`text-[clamp(6.2rem,-1rem+7.5vw,8rem)]`}>
//             {lang == "Viet" ? "TƯỜNG VY" : "TUONG VY"}
//             <span
//               className={`text-[clamp(3rem,1rem+2.08vw,3.5rem)] text-[3rem] text-white font-medium italic`}
//             >
//               {lang == "Viet" ? "VICTORY TRẦN" : "VICTORY TRAN"}
//             </span>
//           </div>
//         </div>
//         <div
//           className={`lg:ml-20 text-[clamp(3rem,1rem+2.08vw,3.5rem)] text-[3rem] text-white font-light italic`}
//         >
//           VICTORY TRẦN
//         </div>
//         <div className={`lg:ml-20 flex lg:flex-row lg:gap-[3vw] z-20`}>
//           <Button
//             unstyled
//             className={`bg-[radial-gradient(circle_at_center,_#5268D2_0%,_#7DB3E2_67%,_#7DB3E2_100%)] border-2 border-white rounded-2xl py-2 px-10 text-white text-[clamp(30px,0.625rem+1.3vw,35px)] font-bold`}
//             label={lang == "Viet" ? "TƯ VẤN TRỰC TIẾP" : "TƯ VẤN TRỰC TIẾP"}
//           />
//           <Button
//             unstyled
//             className={`border-2 border-white rounded-2xl py-2 px-10 text-white text-[clamp(30px,0.625rem+1.3vw,35px)] font-bold`}
//             label={lang == "Viet" ? "SỰ KIỆN MỚI NHẤT" : "LATEST EVENTS"}
//           />
//         </div>
//       </div>
//       <div>
//         <Image
//           src={TuongVyImage}
//           alt="Tuong Vy Image"
//           className={`w-7/19 h-auto absolute bottom-0 right-[5%] pointer-events-none`}
//         />
//         <div
//           className={`lg:w-full lg:h-[25vh] absolute bottom-0 bg-linear-to-t from-[#0957C9] to-transparent z-10`}
//         ></div>
//         <Button
//           unstyled
//           className={`bg-[radial-gradient(circle_at_center,_#5268D2_0%,_#7DB3E2_80%,_#7DB3E2_100%)] aspect-square! absolute right-20 top-60 rounded-2xl text-white px-4 text-[4.5rem] font-bold`}
//         >
//           <FontAwesomeIcon icon={faLinkedinIn} />
//         </Button>
//       </div>
//       <div></div>
//     </div>
//   );
// };

export default HeroSection;
