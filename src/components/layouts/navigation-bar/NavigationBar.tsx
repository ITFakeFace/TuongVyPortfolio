"use client";
import { useLanguage } from "@/context/LanguageContext";
import { Language } from "@/types/LanguageContextType";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SelectButton, SelectButtonChangeEvent } from "primereact/selectbutton";
import React, { useEffect, useRef, useState } from "react";
import styles from "./NavigationBar.module.scss";
import { Sidebar } from "primereact/sidebar";

const NavigationBar = () => {
  const { lang, setLang } = useLanguage();
  const [visible, setVisible] = useState(false);

  const options = [
    { label: "Eng", value: "Eng" },
    { label: "Viet", value: "Viet" },
  ];

  // Cấu trúc menu lấy từ t() để tự động dịch
  const menuItems = [
    {
      key: "about",
      id: "about",
      value: {
        Eng: "About",
        Viet: "Giới thiệu",
      },
    },
    {
      key: "experience",
      id: "experience",
      value: {
        Eng: "Experience",
        Viet: "Kinh nghiệm",
      },
    },
    {
      key: "events",
      id: "events",
      value: {
        Eng: "Events",
        Viet: "Sự kiện",
      },
    },
    {
      key: "method",
      id: "method",
      value: {
        Eng: "Digital Bank Solution",
        Viet: "Giải pháp Digital Bank",
      },
    },
    {
      key: "partner",
      id: "partners",
      value: {
        Eng: "Partners",
        Viet: "Đối tác",
      },
    },
  ];

  // LOGIC CHECK OVERFLOW
  const [isOverflowing, setIsOverflowing] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const checkOverflow = () => {
      if (navRef.current && containerRef.current) {
        // Nếu chiều rộng thực tế của Nav > Chiều rộng vùng chứa cho phép
        const hasOverflow =
          navRef.current.scrollWidth > containerRef.current.clientWidth;
        setIsOverflowing(hasOverflow);
      }
    };

    const observer = new ResizeObserver(checkOverflow);
    if (containerRef.current) observer.observe(containerRef.current);

    checkOverflow(); // Chạy lần đầu
    return () => observer.disconnect();
  }, [lang]); // Chạy lại khi đổi ngôn ngữ vì chữ dài ngắn khác nhau

  const handleLangChange = (e: SelectButtonChangeEvent) => {
    if (e.value) {
      setLang(e.value as Language);
    }
  };

  return (
    <header className="absolute top-0 w-full bg-[#0957C9]/20 shadow-lg py-2 px-5 z-100">
      <div className="w-full flex items-center justify-between mx-auto">
        {/* NÚT BARS: Hiện khi (isOverflowing) HOẶC (màn hình nhỏ < md) */}
        <button
          onClick={() => setVisible(true)}
          className={`${isOverflowing ? "block" : "md:hidden"} text-white text-2xl p-2 active:scale-90 transition-transform`}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>

        {/* LOGO */}
        <div className="text-white text-2xl md:text-3xl font-bold tracking-tighter shrink-0">
          {lang == "Viet" ? "VY TRẦN" : "VY TRAN"}
        </div>

        {/* MENU: Ẩn khi bị Overflow */}
        <nav
          ref={navRef}
          className={`${isOverflowing ? "invisible absolute" : "hidden md:flex"} items-center gap-8 mx-4 flex-nowrap`}
        >
          {menuItems.map((item) => (
            <a
              key={item.key}
              href={`#${item.id}`}
              className="text-white font-bold uppercase whitespace-nowrap hover:opacity-70"
            >
              {item.value[lang]}
            </a>
          ))}
        </nav>

        {/* SELECT BUTTON BÊN PHẢI */}
        <div className="shrink-0">
          <div
            className={`bg-black rounded-full p-[2px] flex items-center overflow-hidden border border-gray-800`}
          >
            <SelectButton
              value={lang}
              onChange={handleLangChange}
              options={options}
              unselectable={false}
              className={styles.customPillButton}
            />
          </div>
        </div>

        {/* 5. SIDEBAR PRIMEREACT (Menu bên trái) */}
        {/* 5. SIDEBAR PRIMEREACT */}
        <Sidebar
          visible={visible}
          onHide={() => setVisible(false)}
          // 2/ Nền đen mờ ảo (backdrop-blur)
          style={{
            background: "rgba(0, 0, 0, 0.3)",
            backdropFilter: "blur(10px)",
            width: "350px",
          }}
          // Tùy chỉnh icon đóng (X) sang màu trắng
          icons={
            <button className="text-white outline-none">
              {/* PrimeReact tự render nút X, ở đây ta chỉ style nếu cần */}
            </button>
          }
          header={
            <div className="font-bold text-2xl text-[#b5bc4f] tracking-widest pl-4">
              HELENA LE.
            </div>
          }
        >
          {/* 1/ Các Navigation xếp dọc */}
          <div className="flex flex-col gap-3 mt-8 px-2">
            {menuItems.map((item) => (
              <a
                key={item.key}
                href={`#${item.id}`}
                onClick={() => setVisible(false)}
                className="group relative overflow-hidden bg-[#4c5409]/80 hover:bg-[#b5bc4f] text-white font-bold uppercase text-xl py-2 px-4 transition-all duration-300 shadow-md"
                style={{}}
              >
                <div className="relative z-10 flex justify-between items-center">
                  {item.value[lang]}
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </span>
                </div>
              </a>
            ))}
          </div>

          {/* Optional: Thêm Social Icons dưới menu cho giống ảnh mẫu */}
          <div className="flex gap-5 justify-center mt-12 opacity-70">
            {/* Thêm các icon Facebook, LinkedIn, Youtube của bạn vào đây */}
          </div>
        </Sidebar>
      </div>
    </header>
  );
};

export default NavigationBar;
