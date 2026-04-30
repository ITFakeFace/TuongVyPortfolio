"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { Language, LanguageContextType } from "@/types/LanguageContextType";

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  // 1. Khởi tạo state mặc định (Tạm thời để là Viet)
  const [lang, setLang] = useState<Language>("Viet");
  const [isInitialized, setIsInitialized] = useState(false);

  // 2. useEffect để đọc từ localStorage khi component mount (chỉ chạy ở Client)
  useEffect(() => {
    const savedLang = localStorage.getItem("user-language") as Language;
    if (savedLang && (savedLang === "Viet" || savedLang === "Eng")) {
      setLang(savedLang);
    }
    setIsInitialized(true);
  }, []);

  // 3. useEffect để lưu vào localStorage mỗi khi lang thay đổi
  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem("user-language", lang);
    }
  }, [lang, isInitialized]);

  // Ngăn chặn Hydration Mismatch (Tùy chọn)
  // Nếu bạn muốn tránh việc giao diện bị nháy từ Viet sang Eng khi vừa load trang,
  // có thể return null hoặc loading spinner cho đến khi isInitialized = true.

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
