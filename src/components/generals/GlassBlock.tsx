"use client";
import React from "react";

const GlassBox = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`relative p-[1px] rounded-[40px] overflow-hidden ${className}`}
    >
      {/* 1. Lớp nền Glassmorphism chính */}
      <div
        className="
        relative 
        h-full w-full 
        bg-white/20 
        backdrop-blur-xl 
        border border-white/30 
        rounded-[40px] 
        shadow-2xl 
        flex flex-col
      "
      >
        {/* Nội dung động (children) */}
        <div className="p-8 h-full">{children}</div>
      </div>

      {/* 2. Hiệu ứng đổ bóng (Drop Shadow) để tạo chiều sâu giống ảnh mẫu */}
      <div className="absolute inset-0 -z-10 bg-black/10 blur-2xl translate-x-4 translate-y-4 rounded-[40px]" />
    </div>
  );
};

export default GlassBox;
