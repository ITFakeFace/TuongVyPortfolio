"use client";
import { useLanguage } from "@/context/LanguageContext";
import IntroductText from "@/assets/images/texts/IntroductionSection-IntroductText-1.png";
import Image from "next/image";
import FilmStrip from "@/components/generals/FilmStrip";
import styles from "./IntroductionSection.module.scss";
import TuongVyImage from "@/assets/images/assets/IntroductionSection-TuongVyImage-1.png";
import FilmImage1 from "@/assets/images/assets/IntroductionSection-FilmImage-1.png";
import FilmImage2 from "@/assets/images/assets/IntroductionSection-FilmImage-2.png";
import FilmImage3 from "@/assets/images/assets/IntroductionSection-FilmImage-3.png";

const IntroductionSection = () => {
  const { lang } = useLanguage();
  const itemSample = (
    <div className={`h-128 w-[33vw] bg-gray-500 rounded-[20%]`}></div>
  );
  return (
    <div
      id="about"
      className={`${styles.container} w-full relative flex flex-col-reverse lg:flex-row lg:pr-20`}
    >
      <div className={`w-full lg:w-6/20 z-20`}>
        <Image
          src={TuongVyImage}
          alt="Tuong Vy"
          className="object-cover w-5/10 ml-0 lg:ml-0 lg:w-full h-auto"
        />
      </div>
      <div
        className={`pt-10 px-5 text-center lg:text-right w-full lg:w-13/20 lg:pl-5 lg:px-0 lg:pt-10`}
      >
        <div
          className={`text-white font-medium text-md lg:text-[3rem] leading-none italic`}
        >
          {lang == "Viet" ? "Xin chào!" : "Hello!"}
        </div>
        <div
          className={`font-bold text-[clamp(16px,5.96px+2.554vw,55px)] bg-clip-text text-transparent bg-[linear-gradient(78deg,#5A5B5B_0%,#FFFFFF_50%,#FFFFFF_100%)]`}
        >
          {lang == "Viet"
            ? "TÔI LÀ TRẦN THANH NỮ TƯỜNG VY"
            : "I AM TRAN THANH NU TUONG VY"}
        </div>
        <div
          className={`flex flex-col gap-[clamp(1.25rem,-3.75rem+4.16vw,2.5rem)] text-center lg:text-right text-[10px] lg:text-[clamp(16px,-8px+1.563vw,22px)] text-white font-normal mt-5`}
        >
          <div>
            <span className={`font-bold`}>
              {lang == "Viet"
                ? "Khởi nghiệp từ năm 21 tuổi,"
                : "Starting my entrepreneurial journey at the age of 21,"}
            </span>
            {lang == "Viet"
              ? " tôi bén duyên với nhịp độ của nền kinh tế thị trường. Từ những va chạm thực tế đầu tiên, tôi chọn ngành Tài chính như một hành trình thử thách bản thân và mở rộng giới hạn. Với gần 18 năm trong lĩnh vực ngân hàng và Fintech, với tôi, đó không chỉ là câu chuyện con số, mà là hành trình kiến tạo tăng trưởng, đổi mới và giá trị bền vững qua từng dấu mốc sự nghiệp"
              : " I quickly immersed myself in the fast pace of a market-driven economy. From those early real-world experiences, I chose finance as a path to challenge myself and push beyond my limits. With"}
            <span className={`font-bold`}>
              {lang == "Viet" ? " gần 18 năm" : " nearly 18 years"}
            </span>
            {lang == "Viet"
              ? " trong lĩnh vực ngân hàng và Fintech, với tôi, đó không chỉ là câu chuyện con số, mà là hành trình kiến tạo tăng trưởng, đổi mới và giá trị bền vững qua từng dấu mốc sự nghiệp"
              : " in banking and fintech, to me, this has never been just about numbers—it’s a journey of driving growth, innovation, and sustainable value at every career milestone."}
          </div>
          <div>
            {lang == "Viet"
              ? "Trong suốt quá trình phát triển, tôi đã xây dựng và mở rộng các mô hình kinh doanh cho vay, dẫn dắt hệ sinh thái phối hợp digital banking quy mô lớn và thiết lập các quan hệ hợp tác chiến lược. Với trải nghiệm ở vai trò Phó Tổng Giám đốc và Nhà sáng lập, tôi hiểu sâu sắc bài toán cân bằng giữa tăng trưởng và tối ưu chi phí – nền tảng cốt lõi đã định hình tư duy và bản lĩnh nghề nghiệp."
              : "Throughout my career, I have built and scaled lending business models, led large-scale digital banking ecosystems, and established strategic partnerships. With experience as a Deputy CEO and a Founder, I have developed a deep understanding of balancing growth with cost optimization—a core foundation that has shaped my strategic thinking and professional resilience."}
          </div>
          <div>
            {lang == "Viet" ? "Thế mạnh của tôi là" : "My strengths lie in"}
            <b>
              {lang == "Viet"
                ? " quản trị P&L, chuyển đổi số và thúc đẩy tăng trưởng"
                : " P&L management, digital transformation, and driving growth through partnerships."}
            </b>
            {lang == "Viet"
              ? " thông qua hợp tác. Và hơn hết, tôi tự hào khi góp phần xây dựng nên những tổ chức, đội ngũ phát triển vững mạnh và những kết quả tăng trưởng bền vững – không chỉ trong ngắn hạn mà còn tạo nền tảng cho tương lai."
              : " More importantly, I take pride in building strong organizations, developing high-performing teams, and creating sustainable value for the future."}
          </div>
        </div>
      </div>
      <FilmStrip
        items={[FilmImage1, FilmImage2, FilmImage3]}
        gap={"gap-[30px]"}
        className={`mt-10 absolute left-0 bottom-[15%] lg:bottom-[5%]`}
        itemClassName="w-[60vw] lg:w-[25vw] h-auto"
        imageClassName="object-contain"
      />
    </div>
  );
};

export default IntroductionSection;
