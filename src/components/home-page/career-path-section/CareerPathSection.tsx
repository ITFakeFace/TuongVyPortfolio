"use client";
import { useLanguage } from "@/context/LanguageContext";
import TuongVyImage from "@/assets/images/assets/CareerPathSection-TuongVyImage-1.png";
import Image from "next/image";
import CareerPath1 from "@/assets/images/assets/CareerPathSection-CareerPathImage-1.png";
import CareerPathEng1 from "@/assets/images/assets/CareerPathSection-CareerPathImageEng-1.png";
import CareerPathMobile1 from "@/assets/images/assets/CareerPathSection-CareerPathMobileImage-1.png";
import CareerPathMobileEng1 from "@/assets/images/assets/CareerPathSection-CareerPathMobileImageeNG-1.png";
import { Carousel } from "primereact/carousel";
import TuongVyImage2 from "@/assets/images/assets/CareerPathSection-TuongVyImage-2.png";
import { Button } from "primereact/button";
import EndImage1 from "@/assets/images/assets/CareerPathSection-Image-1.png";
import EndImage2 from "@/assets/images/assets/CareerPathSection-Image-2.png";
import EndImage3 from "@/assets/images/assets/CareerPathSection-Image-3.png";
import EndImage4 from "@/assets/images/assets/CareerPathSection-Image-4.png";
import FilmStrip from "@/components/generals/FilmStrip";
import { div } from "framer-motion/client";
import { useContactForm } from "@/context/ContactContext";

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
        className={`w-4/5 h-auto aspect-square bg-linear-to-br from-[#0D60F1] to-[#8cb0ee] rounded-full mx-auto flex justify-center items-center 
          text-center text-white font-bold text-[clamp(15px,11.136px+0.982vw,30px)]`}
      >
        <div className={`w-4/5 text-center`}>
          <div className={`text-[clamp(25px,17.273px+1.965vw,55px)]`}>
            {item.index}
          </div>
          <div>{item.title[lang]}</div>
        </div>
      </div>
    );
  };

  return (
    <div id="method" className={`bg-[#E6F4FF] relative overflow-hidden`}>
      <div className={`text-center w-8/10 mx-auto pt-10 lg:pt-20`}>
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
      </div>
      <div className={`flex flex-col lg:flex-row lg:gap-10 mt-15 lg:mt-20`}>
        <div
          className={`w-full lg:w-9/20 lg:pl-30 text-center lg:text-left flex flex-col justify-center items-center lg:items-start`}
        >
          <div
            className={`text-[#011B40] text-[clamp(25px,19.7px+2.62vw,70px)] font-bold leading-tight mx-1 lg:mx-0`}
          >
            {lang == "Viet"
              ? "LEADER TRẺ RẤT DỄ “MẮC BẪY”"
              : "YOUNG LEADERS OFTEN FALL INTO TRAPS"}
          </div>
          <div
            className={`text-md lg:ml-5 lg:text-3xlmt-4 text-[#0957C9] font-bold text-center lg:text-left`}
          >
            {lang == "Viet" ? "BẠN ĐÃ " : "YOU’RE "}
            <span className={`text-[#12F4FE]`}>
              {lang == "Viet" ? "GIỎI" : "BETTER"}
            </span>
            {lang == "Viet" ? " HƠN SỐ ĐÔNG" : " THAN MOST—BUT"}
            <br />
            {lang == "Viet" ? "NHƯNG VẪN CHƯA ĐỦ!" : "STILL NOT ENOUGH!"}
          </div>
        </div>
        <div
          className={`w-full lg:w-11/20 flex flex-row text-white font-bold text-[clamp(10px,6.136px+0.982vw,25px)] justify-center items-center lg:justify-start mt-10 lg:mt-0`}
        >
          <div
            className={`bg-[#8ECDFF] flex justify-center items-center text-center w-4/15 lg:w-2/6 aspect-square rounded-full`}
          >
            <div className={`w-3/4`}>
              {lang == "Viet"
                ? "Bẫy “Dậm chân tại chỗ”"
                : " The “Stagnation” Trap"}
            </div>
          </div>
          <div
            className={`bg-[#056CFF] -ml-2 flex justify-center items-center text-center w-5/15 lg:w-2/6 aspect-square rounded-full`}
          >
            <div className={`w-3/4`}>
              {lang == "Viet"
                ? "Bẫy “Thiếu quyết đoán trong giải quyết vấn đề”"
                : "The “Indecisiveness in Problem-Solving” Trap"}
            </div>
          </div>
          <div
            className={`bg-[#0043AC] -ml-5 flex justify-center items-center text-center w-6/15 lg:w-2/6 aspect-square rounded-full`}
          >
            <div className={`w-3/4 `}>
              {lang == "Viet"
                ? "Bẫy “Học sai  định hướng phát triển”"
                : "The “Misguided Learning Path” Trap"}
            </div>
          </div>
        </div>
      </div>
      <div className={`pt-10 lg:pt-20 lg:mt-30 relative w-full flex flex-col`}>
        <div
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
        </div>
        <div
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
        </div>
        <div>
          <Image
            src={TuongVyImage}
            alt="Career Path Section Image"
            className={`w-6/10 lg:w-4/9 h-auto mx-auto lg:mt-25`}
          />
          <div
            className={`w-14/20 lg:w-19/20 bg-linear-to-b from-[#0D60F1] shadow-[0px_10px_15px_0px_#7DB3E2] from-44% to-white mx-auto pt-5 rounded-3xl lg:rounded-t-4xl -mt-3 lg:-mt-5 text-center text-white font-bold text-[clamp(12px,6.136px+0.982vw,25px)]`}
          >
            <Image
              src={lang == "Viet" ? CareerPath1 : CareerPathEng1}
              alt="Career Path Section Image"
              className={`w-full h-auto hidden lg:block`}
            />
            <Image
              src={lang == "Viet" ? CareerPathMobile1 : CareerPathMobileEng1}
              alt="Career Path Section Image"
              className={`w-9/10 lg:w-full h-auto block lg:hidden mx-auto mt-2 lg:mt-0`}
            />
          </div>
        </div>
      </div>
      <div className={`flex flex-col lg:flex-row lg:mt-35`}>
        <div
          className={`w-full lg:w-1/2 text-center lg:text-left flex flex-col justify-center items-center`}
        >
          <div className={`mx-auto w-4/5 mt-10 lg:mt-0`}>
            <div
              className={`text-transparent bg-clip-text bg-linear-to-r from-[#0957C9] to-[#042B63] 
              text-[clamp(25px,15.992px+2.292vw,60px)] font-extrabold leading-tight`}
            >
              {lang == "Viet" ? "BỨT PHÁ SỰ NGHIỆP" : "BREAK THROUGH"} <br />
              {lang == "Viet" ? "NGAY HÔM NAY" : "YOUR CAREER"} <br />
              {lang == "Viet" ? "" : "TODAY"}
            </div>
            <div
              className={`text-[clamp(12px,7.882px+1.048vw,28px)] mx-auto lg:mx-0`}
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
            className={`w-full h-auto mt-10 lg:mt-0`}
          />
        </div>
      </div>

      <div className={`flex flex-row relative mt-15 lg:mt-45 overflow-visible`}>
        <div className={`w-1/20 lg:w-2/19`}>
          <div
            className={`w-full h-16 lg:h-24 absolute top-0 -left-[85%] lg:-left-[82%]  bg-linear-to-l from-[#095DF1] to-[#e6e6e6] rounded-r-xl lg:rounded-r-2xl`}
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
          <div className={`w-4/6 lg:w-full`}>
            <div
              className={` bg-[#056CFF] rounded-4xl py-5 lg:py-15 lg:p-0 text-white flex flex-col gap-5 lg:gap-10 mt-5 lg:mt-10 animate-light-heartbeat`}
            >
              <div className="w-19/20 font-bold flex items-start justify-center gap-1 lg:gap-5 text-[10px] lg:text-[25px]">
                <span className="">
                  {" "}
                  {/* Thêm mt nếu muốn căn chỉnh thủ công một chút */}
                  {lang == "Viet" ? "Chỉ từ " : "Only from "}
                </span>

                <span className="lg:text-[clamp(80px,5.208vw,100px)] text-[20px] leading-none">
                  25.000.000
                </span>

                <span className="">{lang == "Viet" ? " VNĐ" : " VND"}</span>
              </div>
              <div
                className={`w-8/10 text-left text-[10px] lg:text-[24px] mx-auto leading-relaxed`}
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
                  <ul className={`list-disc list-outside pl-5 lg:pl-15`}>
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
        <div className={`w-1/20 lg:w-7/19`}>
          <div
            className={`w-full h-16 lg:h-24 absolute top-0 -right-[85%] lg:-right-[56%]  bg-linear-to-r from-[#095DF1] to-[#c7d0e1] rounded-l-xl lg:rounded-l-2xl`}
          ></div>
          <Image
            src={TuongVyImage2}
            alt="Career Path Section Image"
            className={`absolute w-auto h-[40vh] lg:w-auto lg:h-[90vh] mt-10 lg:mt-0 
              bottom-0 right-[-20%] lg:right-[-2%]`}
          />
        </div>
      </div>

      <div
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
        {/* <a href="#latest-events"> */}
        <Button
          unstyled
          onClick={openContactForm}
          className={` bg-linear-to-r from-[#0957C9] from-65% to-[#5268D2] text-white font-bold lg:px-15 lg:py-3 px-5 py-2 rounded-full lg:rounded-4xl
            mt-5 lg:mt-10 text-[clamp(15px,9.851px+1.31vw,35px)] border-2 border-white hover:cursor-pointer transition-all hover:scale-105 duration-300 animate-bounce`}
          label={lang == "Viet" ? "KHAI PHÁ CÙNG TÔI" : "EXPLORE WITH ME"}
        />
        {/* </a> */}
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
      </div>
      <div className={`absolute bottom-0 left-0 w-full h-fit`}>
        <FilmStrip
          items={filmItems}
          gap={"gap-100"}
          duration={20}
          direction="left"
          className="bg-linear-to-r from-[#056CFF] to-[#0346A6] to-34%"
          itemClassName="py-2 lg:py-5 lg:text-3xl font-bold"
        />
      </div>
    </div>
  );
};

export default CareerPathSection;
