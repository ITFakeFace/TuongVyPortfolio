"use client";
import { useLanguage } from "@/context/LanguageContext";
import styles from "./HotTopicsSection.module.scss";
import { cl } from "@/utils/cn";
import HotTopicImage from "@/assets/images/assets/HotTopicsSection-HotTopicImage-1.png";
import TuongVyImage from "@/assets/images/assets/HotTopicsSection-TuongVyImage-1.png";
import PartnerImage1 from "@/assets/images/assets/HotTopicsSection-PartnerImage-1.png";
import YoungPartnerImage1 from "@/assets/images/assets/HotTopicsSection-YoungPartnerImage-1.png";
import PartnerImage2 from "@/assets/images/assets/HotTopicsSection-PartnerImage-2.png";
import Image, { StaticImageData } from "next/image";
import { Button } from "primereact/button";
import { Carousel } from "primereact/carousel";

interface TrainingPartnerItemProps {
  image: string | StaticImageData;
  text: {
    Eng: { partner: string; role: string; description: string };
    Viet: { partner: string; role: string; description: string };
  };
}

interface YoungPartnerItemProps {
  image: string | StaticImageData;
  text: {
    Eng: { title: string; partner: string; role: string; description: string };
    Viet: { title: string; partner: string; role: string; description: string };
  };
}

const HotTopicsSection = () => {
  const { lang } = useLanguage();
  const renderTopicItem = (
    index: string,
    title: string,
    description: string,
    className: string,
  ) => {
    return (
      <div className={cl(`w-full flex flex-row gap-8`, className)}>
        <div
          className={`
                w-[clamp(50px,44.846px+1.311vw,70px)]
                h-[clamp(50px,44.846px+1.311vw,70px)]
                text-[clamp(30px,26.136px+0.982vw,45px)]
                aspect-square shrink-0 p-7 lg:p-10
                rounded-full border-4 border-white 
                text-white font-bold flex items-center justify-center 
            `}
        >
          {index}
        </div>
        <div className="">
          <h3 className="text-[clamp(20px,16.907px+0.786vw,32px)] font-bold text-white">
            {title}
          </h3>
          <p className="text-[clamp(14px,11.423px+0.655vw,24px)] text-white mt-2">
            {description}
          </p>
        </div>
      </div>
    );
  };

  const partners: TrainingPartnerItemProps[] = [
    {
      image: PartnerImage1,
      text: {
        Eng: {
          partner: "Công ty Chuyển Phát Nhanh 247",
          role: "Huấn luyện đào tạo",
          description:
            "Thiết kế giải pháp, chiến lược và vận hành kinh doanh; Đào tạo thực chiến cho Phòng Kế Hoach Chiến Lược Kinh Doanh và Quản lý kinh doanh vùng.",
        },
        Viet: {
          partner: "Công ty Chuyển Phát Nhanh 247",
          role: "Huấn luyện đào tạo",
          description:
            "Thiết kế giải pháp, chiến lược và vận hành kinh doanh; Đào tạo thực chiến cho Phòng Kế Hoach Chiến Lược Kinh Doanh và Quản lý kinh doanh vùng.",
        },
      },
    },
    {
      image: PartnerImage2,
      text: {
        Eng: {
          partner: "SHE Global Community",
          role: "Diễn giả",
          description:
            "Góc nhìn về thời đại số trong cơn bùng nổ “ứng dụng AI”. AI và chuyển đổi số giúp tối ưu hiệu suất; giá trị tạo ra mới quyết định năng lực lãnh đạo.",
        },
        Viet: {
          partner: "SHE Global Community",
          role: "Diễn giả",
          description:
            "Góc nhìn về thời đại số trong cơn bùng nổ “ứng dụng AI”. AI và chuyển đổi số giúp tối ưu hiệu suất; giá trị tạo ra mới quyết định năng lực lãnh đạo.",
        },
      },
    },
  ];

  const renderPartnerItem = (item: TrainingPartnerItemProps) => {
    return (
      <div className="flex flex-col w-[90%] gap-4 text-white items-center mx-auto min-h-full">
        {/* Phần ảnh */}
        <Image
          src={item.image}
          alt="Partner Image"
          className="w-full h-auto object-cover object-center md:scale-100"
        />

        {/* Phần nội dung: Sử dụng flex-1 và flex-col để đẩy nút xuống */}
        <div className="w-full flex-1 flex flex-col justify-between gap-6">
          {/* Khối chữ */}
          <div className="flex flex-col gap-4 text-justify">
            <div className="text-[clamp(18px,14.073px+1.0vw,24px)] leading-relaxed">
              <span className="font-semibold">
                {lang == "Viet" ? "Đơn vị hợp tác: " : "Partner: "}
              </span>
              {item.text[lang].partner}
            </div>

            <div className="text-[clamp(18px,14.073px+1.0vw,24px)] leading-relaxed">
              <span className="font-semibold">
                {lang == "Viet" ? "Vai trò hợp tác: " : "Role: "}
              </span>
              {item.text[lang].role}
            </div>

            <div className="text-[clamp(18px,14.073px+1.0vw,24px)] leading-relaxed text-left">
              <span className="font-semibold">
                {lang == "Viet"
                  ? "Nội dung chương trình: "
                  : "Program overview: "}
              </span>
              {item.text[lang].description}
            </div>
          </div>

          {/* Khối nút: Luôn nằm dưới cùng nhờ justify-between của div cha hoặc mt-auto */}
          <div className="lg:pt-6 w-full flex justify-center mt-auto">
            <Button
              unstyled
              label="XEM THÊM >>"
              className="bg-linear-to-r from-[#07367B] to-[#1F2833] text-white text-[clamp(18px,12px+1.5vw,32px)] font-bold rounded-2xl lg:rounded-4xl border-2 border-white w-fit px-10 py-3 cursor-pointer hover:scale-110 transition-all duration-300"
            />
          </div>
        </div>
      </div>
    );
  };

  const youngPartners: YoungPartnerItemProps[] = [
    {
      image: YoungPartnerImage1,
      text: {
        Eng: {
          title:
            "TALKSHOW: NHÀ LÃNH ĐẠO HẠNH PHÚC CHỦ ĐỀ “ỨNG PHÓ VỚI KHÓ KHĂN VÀ THẤT BẠI” ",
          partner: "Công ty Chuyển Phát Nhanh 247",
          role: "Huấn luyện đào tạo",
          description:
            "Thiết kế giải pháp, chiến lược và vận hành kinh doanh; Đào tạo thực chiến cho Phòng Kế Hoach Chiến Lược Kinh Doanh và Quản lý kinh doanh vùng.",
        },
        Viet: {
          title:
            "TALKSHOW: NHÀ LÃNH ĐẠO HẠNH PHÚC CHỦ ĐỀ “ỨNG PHÓ VỚI KHÓ KHĂN VÀ THẤT BẠI” ",
          partner: "Công ty Chuyển Phát Nhanh 247",
          role: "Huấn luyện đào tạo",
          description:
            "Thiết kế giải pháp, chiến lược và vận hành kinh doanh; Đào tạo thực chiến cho Phòng Kế Hoach Chiến Lược Kinh Doanh và Quản lý kinh doanh vùng.",
        },
      },
    },
  ];

  const renderYoungPartnerItem = (item: YoungPartnerItemProps) => {
    return (
      <div
        className={`flex flex-col w-[90%] gap-4 text-[#011B40] items-center mx-auto min-h-full 
        bg-[linear-gradient(to_right,rgba(153,153,153,0.3)_0%,rgba(255,255,255,0.3)_32%,rgba(255,255,255,0.3)_72%,rgba(153,153,153,0.3)_100%)]
            px-5 py-5 lg:px-10 lg:py-10 border-4 border-[#C9FDFF] rounded-2xl lg:rounded-4xl
        `}
      >
        {/* Phần ảnh */}
        <Image
          src={item.image}
          alt="Partner Image"
          className="w-full h-auto object-cover object-center md:scale-100"
        />

        {/* Phần nội dung: Sử dụng flex-1 và flex-col để đẩy nút xuống */}
        <div className="w-full flex-1 flex flex-col justify-between gap-6">
          <div className="w-full text-xl md:text-4xl font-bold leading-snug">
            {item.text[lang].title}
          </div>
          {/* Khối chữ */}
          <div className="flex flex-col gap-4 text-justify">
            <div className="text-[clamp(18px,14.073px+1.0vw,24px)] leading-relaxed">
              <span className="font-semibold">
                {lang == "Viet" ? "Đơn vị hợp tác: " : "Partner: "}
              </span>
              {item.text[lang].partner}
            </div>

            <div className="text-[clamp(18px,14.073px+1.0vw,24px)] leading-relaxed">
              <span className="font-semibold">
                {lang == "Viet" ? "Vai trò hợp tác: " : "Role: "}
              </span>
              {item.text[lang].role}
            </div>

            <div className="text-[clamp(18px,14.073px+1.0vw,24px)] leading-relaxed text-left">
              <span className="font-semibold">
                {lang == "Viet"
                  ? "Nội dung chương trình: "
                  : "Program overview: "}
              </span>
              {item.text[lang].description}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      className={`${styles.container} relative overflow-hidden pb-110 lg:pb-120`}
    >
      <div className={`flex flex-col lg:flex-row relative pb-10`}>
        <Image
          src={HotTopicImage}
          alt="Hot Topic"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className={`w-full lg:w-1/2`}></div>
        <div className={`w-full lg:w-1/2 pt-10 lg:pt-10`}>
          <div className={`mb-10 lg:mb-15`}>
            <div className="relative w-full h-[9px]">
              <svg
                className="absolute block inset-0 size-full"
                width="100%"
                height="100%"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 100 10" // Dùng hệ tọa độ đơn giản cho dễ quản lý
              >
                <ellipse
                  cx="50" // Đưa vào chính giữa theo trục X
                  cy="5" // Đưa vào chính giữa theo trục Y
                  rx="50" // Bán kính 50 (tổng đường kính là 100, tức full width)
                  ry="3" // Độ dẹt của elipse
                  fill="url(#paint0_radial_custom)"
                />
                <defs>
                  <radialGradient
                    id="paint0_radial_custom"
                    cx="50%" // Tâm gradient tại 50%
                    cy="50%"
                    r="50%" // Bán kính gradient lan ra hết elipse
                    fx="50%"
                    fy="50%"
                    gradientUnits="userSpaceOnUse"
                  >
                    {/* Điểm trung tâm sáng nhất */}
                    <stop offset="0%" stopColor="#F9FCFF" />

                    {/* Thu nhỏ dần/Mờ dần. Offset 50% sẽ làm vùng sáng tập trung ở giữa */}
                    <stop offset="50%" stopColor="#4E70FF" stopOpacity="0.5" />

                    {/* Kết thúc mờ hẳn tại biên */}
                    <stop offset="100%" stopColor="#4E70FF" stopOpacity="0" />
                  </radialGradient>
                </defs>
              </svg>
            </div>
            <div>
              <div
                className={`flex flex-row justify-center text-[35px] lg:text-[45px] gap-2 lg:gap-4 font-bold 
                    text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-[#999999]
                `}
              >
                {lang == "Viet" ? "CHỦ ĐỀ NỔI BẬT" : "CHỦ ĐỀ NỔI BẬT"}
              </div>
            </div>
            <div className="relative w-full h-[9px]">
              <svg
                className="absolute block inset-0 size-full"
                width="100%"
                height="100%"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 100 10" // Dùng hệ tọa độ đơn giản cho dễ quản lý
              >
                <ellipse
                  cx="50" // Đưa vào chính giữa theo trục X
                  cy="5" // Đưa vào chính giữa theo trục Y
                  rx="50" // Bán kính 50 (tổng đường kính là 100, tức full width)
                  ry="3" // Độ dẹt của elipse
                  fill="url(#paint0_radial_custom)"
                />
                <defs>
                  <radialGradient
                    id="paint0_radial_custom"
                    cx="50%" // Tâm gradient tại 50%
                    cy="50%"
                    r="50%" // Bán kính gradient lan ra hết elipse
                    fx="50%"
                    fy="50%"
                    gradientUnits="userSpaceOnUse"
                  >
                    {/* Điểm trung tâm sáng nhất */}
                    <stop offset="0%" stopColor="#F9FCFF" />

                    {/* Thu nhỏ dần/Mờ dần. Offset 50% sẽ làm vùng sáng tập trung ở giữa */}
                    <stop offset="50%" stopColor="#4E70FF" stopOpacity="0.5" />

                    {/* Kết thúc mờ hẳn tại biên */}
                    <stop offset="100%" stopColor="#4E70FF" stopOpacity="0" />
                  </radialGradient>
                </defs>
              </svg>
            </div>
          </div>
          <div className={`flex flex-col gap-5 lg:gap-10`}>
            {renderTopicItem(
              "01",
              "TRÍ TUỆ NHÂN TẠO (AI)",
              "AI không thay thế bạn, nhưng người biết sử dụng AI sẽ làm được điều đó.",
              "ml-4 lg:w-3/4",
            )}
            {renderTopicItem(
              "02",
              "KỸ NĂNG LÃNH ĐẠO",
              "Lãnh đạo là xây dựng hệ thống vận hành hiệu quả, không chỉ kiểm soát con người.",
              "ml-4 lg:ml-16 lg:w-3/4",
            )}
            {renderTopicItem(
              "03",
              "TÀI CHÍNH VÀ CHUYỂN ĐỔI SỐ",
              "Giai đoạn chuyển mình của mỗi doanh nghiệp trong thời đại ngân hàng số",
              "ml-4 lg:ml-16 lg:w-4/5",
            )}
            {renderTopicItem(
              "04",
              "KINH TẾ THỊ TRƯỜNG",
              "Hiểu kinh tế thị trường là hiểu dòng tiền và hành vi khách hàng.",
              "ml-4 lg:w-3/4",
            )}
          </div>
          <div className={`w-full lg:w-4/5 flex justify-center mt-5 lg:mt-5`}>
            <button
              className={`
                      bg-linear-to-r from-[#042B63] from-50% to-[#2F3945] 
                      border-2 lg:border-3 border-white rounded-2xl lg:rounded-4xl
                      /* Font size & Padding thu nhỏ */
                      text-[16px] lg:text-[30px] font-bold text-white
                      px-4 lg:px-12 py-2 lg:py-4 mt-3 lg:mt-5
                      transition-all duration-300 hover:brightness-110
                      relative z-20 
                    `}
            >
              {lang == "Viet" ? "TRAO ĐỔI TRỰC TIẾP" : "TRAO ĐỔI TRỰC TIẾP"}
            </button>
          </div>
        </div>
      </div>
      <div>
        <div
          className={`flex flex-row justify-center text-[25px] lg:text-[55px] gap-2 lg:gap-4 font-bold 
                    text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-[#999999]/93
                    my-10 lg:my-15
                `}
        >
          {lang == "Viet"
            ? "ĐỐI TÁC HỢP TÁC ĐÀO TẠO"
            : "ĐỐI TÁC HỢP TÁC ĐÀO TẠO"}
        </div>
        <div className={`${styles.carouselWrapper} w-full`}>
          <div className="">
            <Carousel
              value={partners} // Đã sửa Harvard đúng chính tả
              itemTemplate={renderPartnerItem}
              showIndicators={false}
              numVisible={2}
              numScroll={2}
              circular
              responsiveOptions={[
                {
                  breakpoint: "768px",
                  numVisible: 2,
                  numScroll: 2,
                },
                {
                  breakpoint: "576px",
                  numVisible: 1,
                  numScroll: 1,
                },
              ]}
              autoplayInterval={8000}
              prevIcon={<i className="pi pi-chevron-left text-3xl!" />}
              nextIcon={<i className="pi pi-chevron-right text-3xl!" />}
              className="w-4/5 mx-auto"
            />
          </div>
        </div>
      </div>
      <div
        className={`bg-linear-to-br from-[#1F2833] from-33% to-[#C8871F] to-85%
            border-3 border-white
            flex flex-col lg:flex-row w-9/10 mx-auto mt-20
            items-center lg:items-end /* Thay đổi ở đây để đẩy mọi thứ xuống đáy trên desktop */
            pl-5 lg:pl-25 pr-5 lg:pr-0 pt-5 lg:pt-10 pb-0 lg:pb-0 rounded-4xl relative z-10`}
      >
        <div
          className={`lg:w-5/7 text-center lg:text-left text-white lg:pb-10`}
        >
          {/* Thêm lg:pb-10 để phần chữ không dính sát đáy như ảnh */}

          <div
            className={`font-semibold italic text-[clamp(25px,17.273px+1.965vw,55px)]`}
          >
            {lang == "Viet" ? "ĐÀO TẠO" : "TRAINING"}
          </div>

          <div
            className={`text-[clamp(30px,17.13px+3.274vw,80px)] leading-tight font-bold`}
          >
            {lang == "Viet" ? "PHƯƠNG PHÁP" : "UNIQUE"}
            <br />
            {lang == "Viet" ? "RIÊNG BIỆT" : "METHOD"}
            <br />
            {lang == "Viet" ? "CHO DOANH NGHIỆP" : "FOR BUSINESS"}
          </div>

          {/* List description */}
          <div
            className={`text-left text-[clamp(16px,12px+0.8vw,25px)] lg:w-5/7 mt-10`}
          >
            <ul className={`list-disc list-outside pl-10`}>
              <li>
                {lang == "Viet"
                  ? "Thiết kế chương trình đạo tạo và truyền tải cụ thể trên case study thực tế của doanh nghiệp."
                  : "Thiết kế chương trình đạo tạo và truyền tải cụ thể trên case study thực tế của doanh nghiệp."}
              </li>

              <li>
                {lang == "Viet"
                  ? "Đưa ra tư duy giải quyết vấn đề về bài toán nhân sự, mô hình vận hành,...."
                  : "Đưa ra tư duy giải quyết vấn đề về bài toán nhân sự, mô hình vận hành,...."}
              </li>
            </ul>
          </div>

          <Button
            unstyled
            label={lang == "Viet" ? "TƯ VẤN TRỰC TIẾP" : "CONSULTANCY"}
            className="mt-10 mb-10 lg:mb-0 bg-linear-to-r from-[#C0821F] to-[#1F2833] text-white text-[clamp(18px,12px+1.5vw,32px)] font-bold rounded-2xl lg:rounded-4xl border-2 border-white w-fit px-10 py-2 cursor-pointer hover:scale-110 transition-all duration-300"
          />
        </div>

        {/* Khối chứa ảnh */}
        <div className={`lg:w-2/7 flex items-end justify-end lg:h-full`}>
          <Image
            src={TuongVyImage}
            alt="Tuong Vy"
            className="w-4/5 lg:w-full h-auto object-contain block align-bottom"
            /* align-bottom và block giúp triệt tiêu khoảng hở inline phía dưới */
          />
        </div>
      </div>
      <div
        className={`flex flex-col lg:flex-row text-center lg:text-left justify-center lg:justify-between mt-10 lg:mt-20 text-white w-9/10 mx-auto`}
      >
        <div className={`w-full lg:w-1/2`}>
          <div
            className={`bg-clip-text text-transparent bg-linear-to-r from-[#FFFFFF] from-24% to-[#12F4FE]
            font-extrabold lg:font-bold text-[clamp(30px,17.13px+3.274vw,80px)]
            `}
          >
            {lang == "Viet" ? "ĐỒNG HÀNH" : "ĐỒNG HÀNH"}
            <br />
            {lang == "Viet" ? "CÙNG SỰ" : "CÙNG SỰ"} <br />
            {lang == "Viet" ? "PHÁT TRIỂN TRẺ" : "PHÁT TRIỂN TRẺ"}
          </div>
          <Button
            unstyled
            label={lang == "Viet" ? "LIÊN HỆ NGAY" : "LIÊN HỆ NGAY"}
            className={`mt-5 lg:mt-5 lg:mb-0 bg-linear-to-r from-[#12F4FE] from-69% to-[#FFFFFF] text-black text-[clamp(18px,12.336px+1.441vw,40px)] font-bold 
            rounded-2xl lg:rounded-4xl border-2 border-white w-fit px-10 lg:px-25 py-2 cursor-pointer hover:scale-110 transition-all duration-300`}
          />
        </div>
        <div className={`w-full lg:w-1/2 mt-10 lg:mt-0`}>
          <div className={`${styles.carouselWrapper2} w-full`}>
            <div className="">
              <Carousel
                value={youngPartners} // Đã sửa Harvard đúng chính tả
                itemTemplate={renderYoungPartnerItem}
                showIndicators={false}
                numVisible={1}
                numScroll={1}
                circular
                autoplayInterval={8000}
                prevIcon={<i className="pi pi-chevron-left text-3xl!" />}
                nextIcon={<i className="pi pi-chevron-right text-3xl!" />}
                className="w-full mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotTopicsSection;
