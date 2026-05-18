"use client";
import { useLanguage } from "@/context/LanguageContext";
import TuongVyImage from "@/assets/images/assets/CareerPathSection-TuongVyImage-1.png";
import Image from "next/image";
import CareerPath1 from "@/assets/images/assets/CareerPathSection-CareerPathImage-1.png";
import CareerPathEng1 from "@/assets/images/assets/CareerPathSection-CareerPathImageEng-1.png";
import CareerPathMobile1 from "@/assets/images/assets/CareerPathSection-CareerPathMobileImage-1.png";
import CareerPathMobileEng1 from "@/assets/images/assets/CareerPathSection-CareerPathMobileImageEng-1.png";
import { Carousel } from "primereact/carousel";
import TuongVyImage2 from "@/assets/images/assets/CareerPathSection-TuongVyImage-1.png";
import { Button } from "primereact/button";
import EndImage1 from "@/assets/images/assets/CareerPathSection-Image-1.png";
import EndImage2 from "@/assets/images/assets/CareerPathSection-Image-2.png";
import EndImage3 from "@/assets/images/assets/CareerPathSection-Image-3.png";
import EndImage4 from "@/assets/images/assets/CareerPathSection-Image-4.png";
import PotentialBoxDecorImage from "@/assets/images/assets/CareerPathSection-PotentialBoxDecorImage-1.png";
import FilmStrip from "@/components/generals/FilmStrip";
import { div } from "framer-motion/client";
import { useContactForm } from "@/context/ContactContext";
import styles from "./CareerPathSection.module.scss";

interface BoostCareerItemProps {
  index: string;
  title: {
    Viet: string;
    Eng: string;
  };
}

const CareerPathSection = () => {
  const { lang } = useLanguage();
  const { openContactForm } = useContactForm();
  const boostCareerItems: BoostCareerItemProps[] = [
    {
      index: "01",
      title: {
        Viet: "Định vị đúng giá trị bản thân",
        Eng: "Define your true value",
      },
    },
    {
      index: "02",
      title: {
        Viet: "Xác định mục tiêu sự nghiệp",
        Eng: "Set clear career goals",
      },
    },
    {
      index: "03",
      title: {
        Viet: "Ứng dụng framework thực chiến",
        Eng: "Apply practical frameworks",
      },
    },
    {
      index: "04",
      title: {
        Viet: "Đồng hành và tư vấn bằng kinh nghiệm thật",
        Eng: "Get guided and advised with real experience",
      },
    },
  ];
  const renderFilmItems = (item: string, url?: string) => (
    <a href={url} className={`text-white`}>
      {item}
    </a>
  );
  const filmItems = [
    renderFilmItems(
      'WORKSHOP SERIES DAY 2: "WHO\'S REALLY IN CONTROL?" (3/5/2026)',
      "#latest-events",
    ),
    renderFilmItems(
      "WORLD FINANCIAL INNOVATION SERIES (19 - 20/5/2026)",
      "#latest-events",
    ),
  ];
  const renderBoostCareerItems = (item: BoostCareerItemProps) => {
    return (
      <div
        className={`w-9/10 lg:w-4/5 h-auto aspect-square bg-linear-to-br from-[#056CFF] to-[#034199] rounded-full mx-auto flex justify-center items-center 
          text-center text-white font-bold `}
      >
        <div className={`w-4/5 text-center`}>
          <div
            className={`text-[1.5rem] lg:text-[clamp(2.25rem,0.375rem+1.9531vw,3.5rem)]`}
          >
            {item.index}
          </div>
          <div
            className={`text-[0.75rem] lg:text-[clamp(1rem,-0.125rem+1.1719vw,1.75rem)]`}
          >
            {item.title[lang]}
          </div>
        </div>
      </div>
    );
  };

  const CareerMentoringDesktop = () => {
    return (
      <div className={`flex flex-row relative mt-15 lg:mt-45 overflow-visible`}>
        <div className={`w-1/20 lg:w-3/19`}>
          <div
            className={`z-10 w-full h-16 lg:h-24 bg-linear-to-r from-[#056CFF] to-[#034199] rounded-r-xl lg:rounded-r-2xl`}
          ></div>
        </div>
        <div
          className={`z-10 w-9/10 lg:w-8/19 flex flex-col text-center font-bold mt-7 lg:mt-0`}
        >
          <div
            className={`text-[clamp(2.25rem,-0.9375rem+3.3203vw,4.375rem)] leading-tight`}
          >
            {lang == "Viet" ? "CHƯƠNG TRÌNH" : "PROGRAM"}
          </div>
          <div
            className={`text-[clamp(3.25rem,-0.125rem+3.5156vw,5.5rem)] leading-tight text-transparent bg-clip-text bg-linear-to-br from-[#056CFF] to-[#034199] font-extrabold`}
          >
            {lang == "Viet" ? "CAREER MENTORING" : "CAREER MENTORING"}
          </div>
          <div className={`w-4/6 lg:w-full relative`}>
            <Image
              src={TuongVyImage2}
              alt="Career Path Section Image"
              className={`absolute w-auto h-[40vh] lg:w-[42vw] 4xl:w-[35vw] lg:h-auto mt-10 lg:mt-0 
                bottom-0 right-0 lg:right-2% lg:translate-x-[100%] 4xl:translate-x-[110%] lg:translate-y-[-20%] 4xl:translate-y-[0%] z-20`}
            />
            <div
              className={`w-full 4xl:w-fit bg-linear-to-br from-[#056CFF] to-[#034199] rounded-4xl py-5 lg:py-10 lg:p-0 4xl:px-20 4xl:mx-auto text-white flex flex-col gap-5 lg:gap-10 mt-5 lg:mt-10 justify-center items-center animate-light-heartbeat
                relative`}
            >
              {/* <div className="w-19/20 lg:w-20/20 font-bold flex items-start justify-center gap-1 lg:gap-5 text-[10px] lg:text-[clamp(1.25rem,0.875rem+0.3906vw,1.5rem)]">
                <span className="">
                  {" "}
                  {lang == "Viet" ? "Chỉ từ " : "Only from "}
                </span>

                <span className="lg:text-[clamp(3.75rem,1.875rem+1.9531vw,5rem)] text-[20px] leading-none">
                  25.000.000
                </span>

                <span className="">{lang == "Viet" ? " VNĐ" : " VND"}</span>
              </div> */}
              <div
                className={`w-8/10 4xl:w-fit text-left text-[10px] lg:text-[clamp(1.25rem,0.875rem+0.3906vw,1.5rem)] mx-auto leading-relaxed`}
              >
                <div className={`font-normal`}>
                  <b>{lang == "Viet" ? "Thời lượng: " : "Duration: "}</b>
                  {lang == "Viet"
                    ? "Từ 3 - 6 tháng (Hybrid: Online và Offline)"
                    : "3–6 months (Hybrid: Online & Offline)"}
                </div>
                <div className={`font-normal`}>
                  <b>
                    {lang == "Viet"
                      ? "Kết quả nhận được: "
                      : "Expected Outcomes: "}
                  </b>
                  <ul className={`list-disc list-outside pl-5 lg:pl-10`}>
                    <li>
                      {lang == "Viet"
                        ? "Nắm trọn Career Blueprint và Decision Framework"
                        : "Master your Career Blueprint and Decision Framework"}
                    </li>
                    <li>
                      {lang == "Viet"
                        ? "Xác định rõ hướng đi sự nghiệp"
                        : "Clarify your career direction"}
                    </li>
                    <li>
                      {lang == "Viet"
                        ? "Tạo ra ít nhất 1 bước tiến nghề nghiệp rõ ràng"
                        : "Achieve at least one clear career advancement milestone"}
                    </li>
                    <li>
                      {lang == "Viet"
                        ? "Trao đổi 1 - 1 với cố vấn cấp cao trong ngành"
                        : "1-on-1 sessions with a senior industry advisor"}
                    </li>
                  </ul>
                </div>
                <div className={`font-normal`}>
                  <b>{lang == "Viet" ? "Chi phí: " : "Cost: "}</b>
                  {lang == "Viet"
                    ? "Trao đổi thêm khi tư vấn"
                    : "To be discussed during consultation."}
                </div>
              </div>
            </div>
            <Button
              unstyled
              className={`bg-linear-to-r from-[#0957C9] from-65% to-[#5268D2] text-white font-bold lg:px-15 lg:py-3 px-5 py-2 rounded-full lg:rounded-4xl
                mt-5 lg:mt-10 text-[clamp(15px,9.851px+1.31vw,35px)] hover:cursor-pointer transition-all hover:scale-105 duration-300`}
              label={lang == "Viet" ? "ĐĂNG KÝ NGAY" : "REGISTER NOW"}
              onClick={openContactForm}
            />
          </div>
        </div>
        <div className={`w-1/20 lg:w-8/19`}>
          <div
            className={`w-full h-16 lg:h-24 bg-linear-to-r from-[#034199] to-[#056CFF] rounded-l-xl lg:rounded-l-2xl`}
          ></div>
        </div>
      </div>
    );
  };

  const CareerMentoringMobile = () => {
    return (
      <div className={`flex flex-row relative mt-30 lg:mt-45 overflow-visible`}>
        <div className={`w-1/20 lg:w-2/19`}>
          <div
            className={`w-full h-16 lg:h-24 absolute top-0 -left-[85%] lg:-left-[82%]  bg-linear-to-l from-[#034199] to-[#056CFF] rounded-r-xl lg:rounded-r-2xl`}
          ></div>
        </div>
        <div
          className={`w-9/10 lg:w-10/19 flex flex-col text-center font-bold mt-7 lg:mt-0 mb-5 lg:mb-20`}
        >
          <div className={`text-[clamp(30px,19.7px+2.62vw,70px)]`}>
            {lang == "Viet" ? "CHƯƠNG TRÌNH" : "PROGRAM"}
          </div>
          <div
            className={`text-[clamp(30px,15.845px+3.602vw,85px)] text-transparent bg-clip-text bg-linear-to-br from-[#056CFF] to-[#034199] font-extrabold`}
          >
            {lang == "Viet" ? "CAREER MENTORING" : "CAREER MENTORING"}
          </div>
          <div className={`w-full flex flex-row`}>
            <div>
              <div
                className={` bg-linear-to-br from-[#056CFF] to-[#034199] rounded-4xl py-5 text-white flex flex-col gap-5 mt-5 lg:mt-10 animate-light-heartbeat`}
              >
                {/* <div className="w-19/20 font-bold flex items-start justify-center gap-1 lg:gap-5 text-[8px]">
                  <span className="">
                    {" "}
                    {lang == "Viet" ? "Chỉ từ " : "Only from "}
                  </span>

                  <span className="text-[16px] leading-none">25.000.000</span>

                  <span className="">{lang == "Viet" ? " VNĐ" : " VND"}</span>
                </div> */}
                <div
                  className={`w-8/10 text-left text-[8px] lg:text-[24px] mx-auto leading-relaxed`}
                >
                  <div className={`font-normal`}>
                    <b>{lang == "Viet" ? "Thời lượng: " : "Duration: "}</b>
                    {lang == "Viet"
                      ? "Từ 3 - 6 tháng (Hybrid: Online và Offline)"
                      : "3–6 months (Hybrid: Online & Offline)"}
                  </div>
                  <div className={`font-normal`}>
                    <b>
                      {lang == "Viet"
                        ? "Kết quả nhận được: "
                        : "Expected Outcomes: "}
                    </b>
                    <ul className={`list-disc list-outside pl-3`}>
                      <li>
                        {lang == "Viet"
                          ? "Nắm trọn Career Blueprint và Decision Framework"
                          : "Master your Career Blueprint and Decision Framework"}
                      </li>
                      <li>
                        {lang == "Viet"
                          ? "Xác định rõ hướng đi sự nghiệp"
                          : "Clarify your career direction"}
                      </li>
                      <li>
                        {lang == "Viet"
                          ? "Tạo ra ít nhất 1 bước tiến nghề nghiệp rõ ràng"
                          : "Achieve at least one clear career advancement milestone"}
                      </li>
                      <li>
                        {lang == "Viet"
                          ? "Trao đổi 1 - 1 với cố vấn cấp cao trong ngành"
                          : "1-on-1 sessions with a senior industry advisor"}
                      </li>
                    </ul>
                  </div>
                  <div className={`font-normal`}>
                    <b>{lang == "Viet" ? "Chi phí: " : "Cost: "}</b>
                    {lang == "Viet"
                      ? "Trao đổi thêm khi tư vấn"
                      : "To be discussed during consultation."}
                  </div>
                </div>
              </div>
              <Button
                unstyled
                className={`bg-linear-to-r from-[#0957C9] from-65% to-[#5268D2] text-white font-bold lg:px-15 lg:py-3 px-5 py-2 rounded-full lg:rounded-4xl
                mt-5 lg:mt-10 text-[clamp(15px,9.851px+1.31vw,35px)] hover:cursor-pointer transition-all hover:scale-105 duration-300`}
                label={lang == "Viet" ? "ĐĂNG KÝ NGAY" : "REGISTER NOW"}
                onClick={openContactForm}
              />
            </div>
            <Image
              src={TuongVyImage2}
              alt="Career Path Section Image"
              className={`absolute h-2/3 w-auto mt-10 lg:mt-0 
              bottom-0 left-[50vw]`}
            />
          </div>
        </div>
        <div className={`w-1/20 lg:w-7/19`}>
          <div
            className={`w-full h-16 lg:h-24 absolute top-0 -right-[85%] lg:-right-[56%]  bg-linear-to-r from-[#034199] to-[#056CFF] rounded-l-xl lg:rounded-l-2xl`}
          ></div>
        </div>
      </div>
    );
  };

  const PotentialExplorationDesktop = () => {
    return (
      <div className={`px-[5%] mt-80 `}>
        <div
          className={`relative flex flex-col gap-15 py-10 bg-linear-to-b rounded-4xl from-[#0957C9]/90 from-70% to-[#011B40] ${styles.potentialBox}`}
        >
          <div
            className={`flex flex-row uppercase  justify-between items-center px-[13%] z-50`}
          >
            <div className={`flex flex-col`}>
              <div
                className={`font-semibold italic lg:text-[clamp(1.5rem,-0.375rem+1.9531vw,2.75rem)] text-white`}
              >
                {lang == "Viet" ? "COACHING 1-1" : "COACHING 1-1"}
              </div>
              <div
                className={`font-bold bg-clip-text bg-linear-to-r from-[#FFFFFF] from-95% to-[#999999] text-transparent
                  lg:text-[clamp(2.25rem,-0.375rem+2.7344vw,4rem)] leading-tight
                `}
              >
                {lang == "Viet"
                  ? "KHAI PHÁ TIỀM NĂNG"
                  : "UNLOCK YOUR POTENTIAL"}
                <br />
                {lang == "Viet"
                  ? "BỨT PHÁ SỰ NGHIỆP"
                  : "ACCELERATE YOUR CAREER"}
              </div>
            </div>
            <Button
              onClick={openContactForm}
              unstyled
              className={`bg-linear-to-r from-[#056CFF] to-[#034199] border border-white px-15 py-3 rounded-full h-fit w-fit text-white
                font-semibold lg:text-[clamp(1.375rem,-0.3125rem+1.7578vw,2.5rem)] hover:cursor-pointer transition-all hover:scale-105 duration-300`}
              label={
                lang == "Viet"
                  ? "BẮT ĐẦU HÀNH TRÌNH NGAY"
                  : "START YOUR JOURNEY NOW"
              }
            ></Button>
          </div>
          <div
            className={`flex flex-row justify-between items-center px-[5%] z-50`}
          >
            <div
              className={`flex flex-col gap-5 w-fit max-w-[30vw] px-10 pt-5 pb-10 4xl:px-15 4xl:pt-8 4xl:pb-15 bg-linear-to-br from-[#76BFFF]/90 to-[#ffffff]/90 rounded-4xl shadow-[10px_5px_50px_0px_rgba(0,0,0,0.5)]`}
            >
              <div className={`flex flex-col text-center`}>
                <div
                  className={`text-[#0957C9] font-bold text-[clamp(1.75rem,0.25rem+1.5625vw,2.75rem)]`}
                >
                  {lang == "Viet"
                    ? "QUY TRÌNH 04 GIAI ĐOẠN"
                    : "04 PHASE JOURNEY"}
                </div>
                <div
                  className={`text-[#011B40] font-medium text-[clamp(1rem,0.25rem+0.7813vw,1.5rem)]`}
                >
                  {lang == "Viet"
                    ? "Từ tham vấn định hướng đến lộ trình đột phá"
                    : "From career clarity to breakthrough growth"}
                </div>
              </div>
              <div className={`flex flex-col gap-3 4xl:gap-5`}>
                {/* <div className={`pl-5 flex flex-col border-l-2 border-[#1F2833]`}> */}
                <div>
                  <div
                    className={`font-bold italic text-[#0957C9] text-[clamp(1.25rem,0.125rem+1.1719vw,2rem)] leading-loose`}
                  >
                    {lang == "Viet" ? "01 - ĐÁNH GIÁ" : "01 - ASSESSMENT"}
                  </div>
                  <ul
                    className={`list-disc list-outside pl-5 text-[clamp(0.8125rem,-0.2187rem+1.0742vw,1.5rem)] leading-relaxed`}
                  >
                    <li>
                      <b>{lang == "Viet" ? "Thời lượng: " : "Duration: "}</b>
                      {lang == "Viet" ? "2 - 3 tuần đầu." : "First 2–3 weeks"}
                    </li>
                    <li>
                      <b>{lang == "Viet" ? "Mục tiêu: " : "Goal: "}</b>
                      {lang == "Viet"
                        ? "Hiểu rõ “điểm nghẽn” trong lộ trình hiện tại."
                        : "Identify the key bottlenecks in your current career path."}
                    </li>
                    <li>
                      <b>
                        {lang == "Viet" ? "Kết quả đạt được: " : "Outcomes: "}
                      </b>
                      {lang == "Viet"
                        ? "Bức tranh cụ thể về con người và định hướng phát triển phù hợp."
                        : "A clear understanding of your strengths and the right development direction."}
                    </li>
                  </ul>
                </div>
                <div>
                  <div
                    className={`font-bold italic text-[#0957C9] text-[clamp(1.25rem,0.125rem+1.1719vw,2rem)] leading-loose`}
                  >
                    {lang == "Viet" ? "02 - HÀNH ĐỘNG" : "02 - ACTION"}
                  </div>
                  <ul
                    className={`list-disc list-outside pl-5 text-[clamp(0.8125rem,-0.2187rem+1.0742vw,1.5rem)] leading-relaxed`}
                  >
                    <li>
                      <b>{lang == "Viet" ? "Thời lượng: " : "Duration: "}</b>
                      {lang == "Viet"
                        ? "8 - 12 tuần tiếp theo."
                        : "Next 8–12 weeks"}
                    </li>
                    <li>
                      <b>{lang == "Viet" ? "Mục tiêu: " : "Goal: "}</b>
                      {lang == "Viet"
                        ? "Tháo gỡ “điểm nghẽn” và xây dựng hành động cụ thế cho mục tiếu tiếp theo."
                        : "Remove bottlenecks and build concrete actions toward your next goal."}
                    </li>
                    <li>
                      <b>
                        {lang == "Viet" ? "Kết quả đạt được: " : "Outcomes: "}
                      </b>
                      {lang == "Viet"
                        ? "Kế hoạch hành động rõ ràng và cải thiện hành vi, tư duy ra quyết định"
                        : "A clear action plan with improved behaviors and stronger decision-making."}
                    </li>
                  </ul>
                </div>
                <div>
                  <div
                    className={`font-bold italic text-[#0957C9] text-[clamp(1.25rem,0.125rem+1.1719vw,2rem)] leading-loose`}
                  >
                    {lang == "Viet" ? "03 - BỨT PHÁ" : "03 - BREAKTHROUGH"}
                  </div>
                  <ul
                    className={`list-disc list-outside pl-5 text-[clamp(0.8125rem,-0.2187rem+1.0742vw,1.5rem)] leading-relaxed`}
                  >
                    <li>
                      <b>{lang == "Viet" ? "Thời lượng: " : "Duration: "}</b>
                      {lang == "Viet" ? "4 - 6 tuần cuối." : "Final 4–6 weeks."}
                    </li>
                    <li>
                      <b>{lang == "Viet" ? "Mục tiêu: " : "Goal: "}</b>
                      {lang == "Viet"
                        ? "Tạo ra bước tiến rõ ràng và xây dựng mục tiêu tiếp theo."
                        : "Achieve a clear breakthrough and define your next milestone."}
                    </li>
                    <li>
                      <b>
                        {lang == "Viet" ? "Kết quả đạt được: " : "Outcomes: "}
                      </b>
                      {lang == "Viet"
                        ? "Lộ trình tăng trưởng rõ ràng cho 12 tháng tiếp theo"
                        : "A clear growth roadmap for the next 12 months."}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className={`flex flex-col gap-10 4xl:gap-20 max-w-[16vw] text-white opacity-90 mr-[0%]`}
            >
              <div>
                <div
                  className={`font-bold text-[clamp(1.75rem,0.25rem+1.5625vw,2.75rem)]`}
                >
                  {lang == "Viet" ? "CÔNG CỤ VÀ" : "TOOLS &"}
                  <br />
                  {lang == "Viet" ? "FRAMEWORK" : "FRAMEWORK"}
                </div>
                <ul
                  className={`list-disc list-outside pl-5 font-medium text-[clamp(1rem,-0.125rem+1.1719vw,1.75rem)]`}
                >
                  <li>Career Diagnostic 360</li>
                  <li>Growth Blueprint</li>
                  <li>Leadership Mirror</li>
                  <li>Decision Lab</li>
                  <li>Breakthrough Tracker</li>
                </ul>
              </div>
              <div>
                <div
                  className={`font-bold text-[clamp(1.75rem,0.25rem+1.5625vw,2.75rem)]`}
                >
                  {lang == "Viet" ? "GIÁ TRỊ" : "VALUE OF"}
                  <br />
                  {lang == "Viet" ? "ĐỒNG HÀNH" : "THE JOURNEY"}
                </div>
                <ul
                  className={`list-disc list-outside pl-5 font-medium text-[clamp(1rem,-0.125rem+1.1719vw,1.75rem)]`}
                >
                  <li>
                    {lang == "Viet"
                      ? "Hình thức Coaching Online / offline linh hoạt"
                      : "Flexible coaching format: Online / Offline"}
                  </li>
                  <li>
                    {lang == "Viet"
                      ? "Support giữa các buổi qua Zalo"
                      : "Between-session support via Zalo"}
                  </li>
                  <li>
                    {lang == "Viet"
                      ? "Workbook & progress review hàng tháng"
                      : "Workbook & monthly progress reviews"}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <Image
            src={PotentialBoxDecorImage}
            alt="Potential Box Decor Image"
            className={`absolute h-auto w-[40vw] bottom-0 left-[32%] z-10`}
          />
        </div>
      </div>
    );
  };

  const PotentialExplorationMobile = () => {
    return (
      <div className={`px-5 pt-30`}>
        <div
          className={`flex flex-col gap-3 text-white justify-between items-center z-50 ${styles.potentialBox} rounded-3xl pt-10 px-8`}
        >
          <div className={`flex flex-col text-center`}>
            <div className={`font-semibold italic text-sm`}>
              {lang == "Viet" ? "COACHING 1-1" : "COACHING 1-1"}
            </div>
            <div
              className={`font-bold bg-clip-text bg-linear-to-r from-[#FFFFFF] from-95% to-[#999999] text-transparent
              text-xl leading-tight
                `}
            >
              {lang == "Viet" ? "KHAI PHÁ TIỀM NĂNG" : "UNLOCK YOUR POTENTIAL"}
              <br />
              {lang == "Viet" ? "BỨT PHÁ SỰ NGHIỆP" : "ACCELERATE YOUR CAREER"}
            </div>
          </div>
          <Button
            unstyled
            className={`bg-linear-to-r from-[#056CFF] to-[#034199] border border-white px-5 py-2 rounded-full h-fit w-fit 
            font-semibold text-[12px]`}
            label={
              lang == "Viet"
                ? "BẮT ĐẦU HÀNH TRÌNH NGAY"
                : "START YOUR JOURNEY NOW"
            }
          ></Button>

          <div
            className={`flex flex-col gap-5 w-full px-5 pt-5 mt-5 pb-10 bg-linear-to-br from-[#76BFFF]/90 to-[#ffffff]/90 rounded-4xl shadow-[10px_5px_50px_0px_rgba(0,0,0,0.5)]`}
          >
            <div className={`flex flex-col text-center`}>
              <div className={`text-[#0957C9] font-bold text-lg`}>
                {lang == "Viet" ? "QUY TRÌNH 04 GIAI ĐOẠN" : "04 PHASE JOURNEY"}
              </div>
              <div className={`text-[#011B40] font-medium text-[10px]`}>
                {lang == "Viet"
                  ? "Từ tham vấn định hướng đến lộ trình đột phá"
                  : "From career clarity to breakthrough growth"}
              </div>
            </div>
            <div
              className={`flex flex-col gap-3 4xl:gap-5 text-[#011B40] text-[10px]`}
            >
              {/* <div className={`pl-5 flex flex-col border-l-2 border-[#1F2833]`}> */}
              <div>
                <div
                  className={`font-bold italic text-[#0957C9] text-[1rem] leading-loose`}
                >
                  {lang == "Viet" ? "01 - ĐÁNH GIÁ" : "01 - ASSESSMENT"}
                </div>
                <ul
                  className={`list-disc list-outside pl-5 lg:text-[clamp(0.8125rem,-0.2187rem+1.0742vw,1.5rem)] leading-relaxed`}
                >
                  <li>
                    <b>{lang == "Viet" ? "Thời lượng: " : "Duration: "}</b>
                    {lang == "Viet" ? "2 - 3 tuần đầu." : "First 2–3 weeks"}
                  </li>
                  <li>
                    <b>{lang == "Viet" ? "Mục tiêu: " : "Goal: "}</b>
                    {lang == "Viet"
                      ? "Hiểu rõ “điểm nghẽn” trong lộ trình hiện tại."
                      : "Identify the key bottlenecks in your current career path."}
                  </li>
                  <li>
                    <b>
                      {lang == "Viet" ? "Kết quả đạt được: " : "Outcomes: "}
                    </b>
                    {lang == "Viet"
                      ? "Bức tranh cụ thể về con người và định hướng phát triển phù hợp."
                      : "A clear understanding of your strengths and the right development direction."}
                  </li>
                </ul>
              </div>
              <div>
                <div
                  className={`font-bold italic text-[#0957C9] text-[1rem] lg:text-[clamp(1.25rem,0.125rem+1.1719vw,2rem)] leading-loose`}
                >
                  {lang == "Viet" ? "02 - HÀNH ĐỘNG" : "02 - ACTION"}
                </div>
                <ul
                  className={`list-disc list-outside pl-5 lg:text-[clamp(0.8125rem,-0.2187rem+1.0742vw,1.5rem)] leading-relaxed`}
                >
                  <li>
                    <b>{lang == "Viet" ? "Thời lượng: " : "Duration: "}</b>
                    {lang == "Viet"
                      ? "8 - 12 tuần tiếp theo."
                      : "Next 8–12 weeks"}
                  </li>
                  <li>
                    <b>{lang == "Viet" ? "Mục tiêu: " : "Goal: "}</b>
                    {lang == "Viet"
                      ? "Tháo gỡ “điểm nghẽn” và xây dựng hành động cụ thế cho mục tiếu tiếp theo."
                      : "Remove bottlenecks and build concrete actions toward your next goal."}
                  </li>
                  <li>
                    <b>
                      {lang == "Viet" ? "Kết quả đạt được: " : "Outcomes: "}
                    </b>
                    {lang == "Viet"
                      ? "Kế hoạch hành động rõ ràng và cải thiện hành vi, tư duy ra quyết định"
                      : "A clear action plan with improved behaviors and stronger decision-making."}
                  </li>
                </ul>
              </div>
              <div>
                <div
                  className={`font-bold italic text-[#0957C9] text-[1rem] lg:text-[clamp(1.25rem,0.125rem+1.1719vw,2rem)] leading-loose`}
                >
                  {lang == "Viet" ? "03 - BỨT PHÁ" : "03 - BREAKTHROUGH"}
                </div>
                <ul
                  className={`list-disc list-outside pl-5 lg:text-[clamp(0.8125rem,-0.2187rem+1.0742vw,1.5rem)] leading-relaxed`}
                >
                  <li>
                    <b>{lang == "Viet" ? "Thời lượng: " : "Duration: "}</b>
                    {lang == "Viet" ? "4 - 6 tuần cuối." : "Final 4–6 weeks."}
                  </li>
                  <li>
                    <b>{lang == "Viet" ? "Mục tiêu: " : "Goal: "}</b>
                    {lang == "Viet"
                      ? "Tạo ra bước tiến rõ ràng và xây dựng mục tiêu tiếp theo."
                      : "Achieve a clear breakthrough and define your next milestone."}
                  </li>
                  <li>
                    <b>
                      {lang == "Viet" ? "Kết quả đạt được: " : "Outcomes: "}
                    </b>
                    {lang == "Viet"
                      ? "Lộ trình tăng trưởng rõ ràng cho 12 tháng tiếp theo"
                      : "A clear growth roadmap for the next 12 months."}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className={`flex flex-row gap-5 mt-5 text-white opacity-90 mr-[0%]`}
          >
            <div className={`w-1/2`}>
              <div className={`font-bold text-[1rem]`}>
                {lang == "Viet" ? "CÔNG CỤ VÀ" : "TOOLS &"}
                <br />
                {lang == "Viet" ? "FRAMEWORK" : "FRAMEWORK"}
              </div>
              <ul
                className={`list-disc list-outside pl-4 font-medium text-[0.5rem]`}
              >
                <li>Career Diagnostic 360</li>
                <li>Growth Blueprint</li>
                <li>Leadership Mirror</li>
                <li>Decision Lab</li>
                <li>Breakthrough Tracker</li>
              </ul>
            </div>
            <div className={`w-1/2`}>
              <div className={`font-bold text-[1rem]`}>
                {lang == "Viet" ? "GIÁ TRỊ" : "VALUE OF"}
                <br />
                {lang == "Viet" ? "ĐỒNG HÀNH" : "THE JOURNEY"}
              </div>
              <ul
                className={`list-disc list-outside pl-4 font-medium text-[0.5rem]`}
              >
                <li>
                  {lang == "Viet"
                    ? "Hình thức Coaching Online / offline linh hoạt"
                    : "Flexible coaching format: Online / Offline"}
                </li>
                <li>
                  {lang == "Viet"
                    ? "Support giữa các buổi qua Zalo"
                    : "Between-session support via Zalo"}
                </li>
                <li>
                  {lang == "Viet"
                    ? "Workbook & progress review hàng tháng"
                    : "Workbook & monthly progress reviews"}
                </li>
              </ul>
            </div>
          </div>
          <Image
            src={PotentialBoxDecorImage}
            alt="Potential Box Decor Image"
            className={`w-full mt-10`}
          />
        </div>
      </div>
    );
  };

  return (
    <div
      id="method"
      className={`${styles.container} relative overflow-hidden py-40`}
    >
      {/* <div className={`text-center w-8/10 mx-auto pt-10 lg:pt-20`}>
        <div
          className={`bg-linear-to-r  from-[#0957C9] via-[#0745A0] via-40% to-[#042B63] bg-clip-text text-transparent leading-tight text-[clamp(30px,19.7px+2.62vw,70px)] font-extrabold mx-auto`}
        >
          {lang == "Viet"
            ? "KIẾN TẠO BỨT PHÁ SỰ NGHIỆP"
            : "CREATE YOUR CAREER BREAKTHROUGH"}
        </div>
        <div className={`text-sm lg:text-2xl mt-4`}>
          {lang == "Viet"
            ? "Tôi đã từng ở đúng vị trí bạn đang đứng — và vượt qua nó! Hãy để tôi giúp bạn!"
            : "I’ve been where you are—and I’ve overcome it. Let me help you!"}
        </div>
      </div> */}
      <div className={`flex flex-col lg:flex-row lg:px-[15%]`}>
        <div className={`flex flex-col gap-10 lg:gap-10 lg:w-1/2`}>
          <div className={`text-center lg:text-left`}>
            <div
              className={`text-[#011B40] text-[1.5rem] lg:text-[clamp(2.25rem,-0.375rem+2.7344vw,4rem)] font-bold leading-tight mx-1 lg:mx-0`}
            >
              {lang == "Viet" ? "LEADER TRẺ RẤT" : "YOUNG LEADERS EASILY"}
              <br />
              {lang == "Viet" ? "DỄ “MẮC BẪY”" : "FALL INTO “TRAPS”"}
            </div>
            <div
              className={`text-xs lg:text-[clamp(1rem,-0.125rem+1.1719vw,1.75rem)] mt-4 text-[#0957C9] font-normal text-center lg:text-left`}
            >
              {lang == "Viet"
                ? "Đi một mình giúp bạn "
                : "Going alone helps you "}
              <b>{lang == "Viet" ? "tiến bộ" : "improve"}</b>
              {lang == "Viet" ? "" : ", but "}
              <br />
              {lang == "Viet"
                ? "Đi cùng mentor khiến bạn "
                : "having a mentor helps you "}
              <b>{lang == "Viet" ? "tăng tốc" : "accelerate"}</b>
            </div>
          </div>
          <div
            className={`grid grid-cols-3 lg:grid-cols-2 lg:w-19/20 justify-center items-center text-white text-[12px] lg:text-[clamp(1.25rem,0.125rem+1.1719vw,2rem)] pl-3 lg:pl-0`}
          >
            <div
              className={`bg-[#8ECDFF]  flex justify-center items-center text-center w-full aspect-square rounded-full`}
            >
              <div className={`w-3/4`}>
                {lang == "Viet"
                  ? "Bẫy “Dậm chân tại chỗ”"
                  : " The “Stagnation” Trap"}
              </div>
            </div>
            <div
              className={`bg-[#056CFF] -ml-2 lg:-ml-5 flex justify-center items-center text-center w-full aspect-square rounded-full`}
            >
              <div className={`w-3/4`}>
                {lang == "Viet"
                  ? "Bẫy “Học sai  định hướng phát triển”"
                  : "The “Misguided Learning Path” Trap"}
              </div>
            </div>
            <div
              className={`bg-[#0043AC] -ml-6 lg:-mt-10 4xl:-mt-20 col-span-1 lg:col-span-2 justify-self-center flex justify-center items-center text-center w-full lg:w-1/2 aspect-square rounded-full`}
            >
              <div className={`w-3/4`}>
                {lang == "Viet"
                  ? "Bẫy “Thiếu quyết đoán trong giải quyết vấn đề”"
                  : "The “Indecisiveness in Problem-Solving” Trap"}
              </div>
            </div>
          </div>
        </div>
        <div
          className={`flex flex-col justify-center items-center gap-5 lg:gap-10 text-white pt-20 lg:pt-0 mx-auto w-4/6 lg:w-1/2`}
        >
          <div
            className={`flex flex-row gap-2 lg:gap-5 items-center bg-linear-to-r from-[#056CFF] to-[#034199] w-full rounded-2xl lg:rounded-4xl px-5 lg:px-5 lg:pr-10 py-2 lg:py-3`}
          >
            <div
              className={`text-[44px] lg:text-[clamp(6.25rem,2.5rem+3.9063vw,8.75rem)] font-bold shrink-0`}
            >
              43%
            </div>
            <div
              className={`flex-1 text-[8px] lg:text-[clamp(1.25rem,0.125rem+1.1719vw,2rem)] lg:font-semibold`}
            >
              {lang == "Viet"
                ? "Professionals cho biết họ làm việc hiệu quả hơn khi có mentor"
                : "Professionals say they perform better with a mentor"}
            </div>
          </div>
          <div
            className={`flex flex-row gap-2 lg:gap-5 items-center bg-linear-to-r from-[#056CFF] to-[#034199] w-full rounded-2xl lg:rounded-4xl px-5 lg:px-5 py-2 lg:py-3`}
          >
            <div
              className={`text-[44px] lg:text-[clamp(5.625rem,2.5rem+3.9063vw,8.75rem)] font-bold shrink-0`}
            >
              84%
            </div>
            <div
              className={`flex-1 text-[8px] lg:text-[clamp(1.25rem,0.125rem+1.1719vw,2rem)] lg:font-semibold`}
            >
              {lang == "Viet"
                ? "CEO nói mentor giúp họ tránh những sai lầm đắt giá"
                : "CEOs say mentors help them avoid costly mistakes"}
            </div>
          </div>
          <div className={`w-full`}>
            <div
              className={`flex flex-row gap-2 lg:gap-5 items-center bg-linear-to-r from-[#056CFF] to-[#034199] w-full rounded-2xl lg:rounded-4xl px-5 lg:px-5 py-2 lg:py-3`}
            >
              <div
                className={`text-[44px] lg:text-[clamp(5.625rem,2.5rem+3.9063vw,8.75rem)] font-bold shrink-0`}
              >
                92%
              </div>
              <div
                className={`flex-1 text-[8px] lg:text-[clamp(1.25rem,0.125rem+1.1719vw,2rem)] lg:font-semibold`}
              >
                {lang == "Viet"
                  ? "Doanh nghiệp vừa và nhỏ nói mentor tác động trực tiếp đến tăng trưởng"
                  : "Small and medium-sized businesses say mentors have a direct impact on growth"}
              </div>
            </div>
            <div
              className={`w-full text-black italic text-center lg:text-right text-[7px] lg:text-[14px] mt-1 lg:mt-3 leading-tight lg:leading-normal`}
            >
              {lang == "Viet"
                ? "Theo WifiTalents - Đơn vị Nghiên cứu thị trường tại Đức"
                : "According to WifiTalents – A market research firm in Germany A market research firm in Germany"}
            </div>
          </div>
        </div>
      </div>

      <div className={`pt-10 lg:pt-20 lg:mt-30 relative w-full flex flex-col`}>
        {/* <div
          className={`lg:absolute top-10 left-0 w-[47vw] lg:w-[35vw] text-white
            `}
        >
          <div
            className={`bg-linear-to-l from-[#095DF1] to-[#e6f4ff] to-95% py-3 pr-5 rounded-r-3xl lg:rounded-r-4xl`}
          >
            <div className={`ml-auto text-right w-8/10 lg:w-2/3`}>
              <div
                className={`font-extrabold text-5xl lg:text-[clamp(150px,-50px+13.021vw,200px)] leading-none`}
              >
                43%
              </div>
              <div
                className={`font-medium text-[10px] lg:text-[28px] leading-tight`}
              >
                {lang == "Viet"
                  ? "Professionals cho biết họ làm việc hiệu quả hơn khi có mentor"
                  : "Professionals report higher performance when they have a mentor"}
              </div>
            </div>
          </div>
          <div
            className={`w-3/4 ml-auto text-black italic text-right pr-4 lg:pr-5 text-[6px] lg:text-xl mt-1 lg:mt-3 leading-tight lg:leading-normal`}
          >
            {lang == "Viet"
              ? "Theo WifiTalents - Đơn vị Nghiên cứu"
              : "According to WifiTalents – A market research firm in Germany"}{" "}
            <br />
            {lang == "Viet"
              ? "thị trường tại Đức"
              : "A market research firm in Germany"}
          </div>
        </div> */}
        {/* <div
          className={`absolute top-17 lg:top-30 right-0 w-[47vw] lg:w-[35vw] bg-linear-to-r from-[#095DF1] to-[#e6f4ff] to-95% text-white rounded-l-3xl lg:rounded-l-4xl
                py-3 pl-5
            `}
        >
          <div className={` mr-auto text-left w-8/10 lg:w-2/3`}>
            <div
              className={`font-extrabold text-5xl lg:text-[clamp(150px,-50px+13.021vw,200px)] leading-none`}
            >
              84%
            </div>
            <div
              className={`font-medium text-[10px] lg:text-[28px] leading-tight`}
            >
              {lang == "Viet"
                ? "CEO nói mentor giúp họ tránh những sai lầm đắt giá"
                : "CEOs say mentors help them avoid costly mistakes"}
            </div>
          </div>
        </div> */}
        <div className={`lg:px-[15%] pt-30 lg:mt-0 4xl:mt-30`}>
          {/* <Image
            src={TuongVyImage}
            alt="Career Path Section Image"
            className={`w-6/10 lg:w-4/9 h-auto mx-auto lg:mt-25`}
          /> */}
          <div
            className={`bg-clip-text text-transparent bg-linear-to-r from-[#0745A0] from-7% via-[#0957C9] via-40% to-[#042B63] font-bold text-center
              text-lg lg:text-[clamp(2.75rem,2rem+0.7813vw,3.25rem)]`}
          >
            {lang == "Viet"
              ? "KIẾN TẠO BỨT PHÁ SỰ NGHIỆP"
              : "CREATE YOUR CAREER BREAKTHROUGH"}
          </div>
          <div
            className={`pb-8 lg:pb-15 text-[#0957C9] text-center text-[10px] px-10 lg:px-0 lg:text-[clamp(1rem,-0.125rem+1.1719vw,1.75rem)]`}
          >
            {lang == "Viet"
              ? "Tôi đã từng ở đúng vị trí bạn đang đứng — và vượt qua nó! Hãy để tôi giúp bạn!"
              : "I’ve been where you are—and I’ve overcome it. Let me help you!"}
          </div>
          <div
            className={`w-18/20 lg:w-17/20 lg:w-full bg-linear-to-br from-[#056CFF] shadow-[0px_10px_15px_0px_#7DB3E2] from-44% to-[#034199] mx-auto rounded-3xl lg:rounded-t-4xl text-center text-white font-bold text-[clamp(12px,6.136px+0.982vw,25px)] overflow-hidden lg:px-[8%] pt-3 lg:pt-[3%]`}
          >
            <Image
              src={lang == "Viet" ? CareerPath1 : CareerPathEng1}
              alt="Career Path Section Image"
              className={`w-full h-auto hidden lg:block`}
            />
            <Image
              src={lang == "Viet" ? CareerPath1 : CareerPathEng1}
              alt="Career Path Section Image"
              className={`w-19/20 lg:w-full h-auto block lg:hidden mx-auto mt-0 lg:mt-0`}
            />
          </div>
        </div>
      </div>

      <div
        className={`flex flex-col lg:flex-row mt-30 lg:mt-50 4xl:mt-80 lg:px-[15%]`}
      >
        <div
          className={`w-full lg:w-1/2 text-center lg:text-left flex flex-col justify-center items-center lg:items-start`}
        >
          <div className={`mx-auto w-4/5 lg:w-full mt-10 lg:mt-0`}>
            <div
              className={`text-transparent bg-clip-text bg-linear-to-r from-[#0957C9] to-[#042B63] 
              text-[1.5rem] lg:text-[clamp(2.25rem,0rem+2.3438vw,3.75rem)] font-extrabold leading-tight`}
            >
              {lang == "Viet" ? "BỨT PHÁ SỰ NGHIỆP" : "BREAK THROUGH"} <br />
              {lang == "Viet" ? "NGAY HÔM NAY" : "YOUR CAREER TODAY"}
              {/* <br />{lang == "Viet" ? "" : ""} */}
            </div>
            <div
              className={`pt-5 lg:pt-0 text-[#0957C9] text-[0.75rem] lg:text-[clamp(1rem,-0.125rem+1.1719vw,1.75rem)] mx-auto lg:mx-0`}
            >
              {lang == "Viet"
                ? "Hãy để tôi giúp bạn bằng hành trình thực chiến!"
                : "Let me guide you with real-world experience!"}
              {/* <br />
              {lang == "Viet" ? "" : ""} */}
            </div>
          </div>
        </div>
        <div className={`w-full lg:w-1/2`}>
          <Carousel
            value={boostCareerItems}
            itemTemplate={renderBoostCareerItems}
            numVisible={2}
            numScroll={2}
            circular // Lặp vô tận
            autoplayInterval={5000} // Tự động chạy
            showIndicators={false} // Hiện các dấu chấm bên dưới
            showNavigators={false} // Hiện mũi tên trái/phải
            className={`w-full h-auto mt-10 lg:mt-0 lg:px-0 px-10`}
          />
        </div>
      </div>
      <div className={`hidden lg:block`}>
        <CareerMentoringDesktop />
        <PotentialExplorationDesktop />
      </div>
      <div className={`block lg:hidden`}>
        <CareerMentoringMobile />
        <PotentialExplorationMobile />
      </div>

      {/* <div
        className={`w-9/10 mx-auto bg-linear-to-b from-[#12F4FE] to-[#0957C9] to-53% rounded-t-4xl text-white text-center pt-7 lg:pt-15 relative pb-35 lg:pb-100`}
      >
        <div className={`text-[clamp(20px,12.273px+1.965vw,50px)]`}>
          COACHING 1 - 1
        </div>
        <div
          className={`font-bold text-[clamp(23px,7.037px+4.06vw,85px)] leading-tight`}
        >
          {lang == "Viet" ? "KHAI PHÁ TIỀM NĂNG" : "UNLOCK YOUR POTENTIAL,"}
        </div>
        <div
          className={`font-bold text-[clamp(25px,6.991px+4.584vw,95px)] leading-tight`}
        >
          {lang == "Viet" ? "HÀNH ĐỘNG HIỆU QUẢ" : "DRIVE EFFECTIVE ACTION"}
        </div>
        <a href="#latest-events">
          <Button
            unstyled
            onClick={openContactForm}
            className={` bg-linear-to-r from-[#0957C9] from-65% to-[#5268D2] text-white font-bold lg:px-15 lg:py-3 px-5 py-2 rounded-full lg:rounded-4xl
            mt-5 lg:mt-10 text-[clamp(15px,9.851px+1.31vw,35px)] border-2 border-white hover:cursor-pointer transition-all hover:scale-105 duration-300 animate-bounce`}
            label={lang == "Viet" ? "KHAI PHÁ CÙNG TÔI" : "EXPLORE WITH ME"}
          />
        </a>
        <div
          className={`flex flex-row absolute bottom-10 left-0 w-[120%] -translate-x-[10%] gap-5 justify-center items-center`}
        >
          <Image
            src={EndImage1}
            alt="End Image 1"
            className={`w-1/4 h-auto scale-130 lg:scale-100 translate-x-[20%] mx-auto my-auto rotate-[-4.56deg] `}
          />
          <Image
            src={EndImage2}
            alt="End Image 2"
            className={`w-1/4 h-auto scale-130 lg:scale-100 translate-x-[15%] mx-auto my-auto `}
          />
          <Image
            src={EndImage3}
            alt="End Image 3"
            className={`w-1/4 h-auto scale-130 lg:scale-110 translate-x-[10%] mx-auto my-auto rotate-[-9.76deg] `}
          />
          <Image
            src={EndImage4}
            alt="End Image 4"
            className={`w-1/4 h-auto scale-130 lg:scale-100 translate-x-[%] mx-auto my-auto rotate-[9.37deg] `}
          />
        </div>
      </div> */}
      <div className={`absolute bottom-0 left-0 w-full h-fit`}>
        <FilmStrip
          items={filmItems}
          gap={"gap-100"}
          duration={20}
          direction="left"
          className="bg-linear-to-r from-[#1F2833] to-[#042B63] "
          itemClassName="py-2 lg:py-5 lg:text-3xl font-bold"
        />
      </div>
    </div>
  );
};

export default CareerPathSection;
