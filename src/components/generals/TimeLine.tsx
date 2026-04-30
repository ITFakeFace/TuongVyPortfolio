"use client";
import React from "react";
import { cl } from "@/utils/cn"; // Hoặc clsx tùy bạn

interface TimelineProps {
  children: React.ReactNode;
  className?: string;
}

export function Timeline({ children, className }: TimelineProps) {
  return (
    // Overflow-hidden để tránh SVG connector thò ra ngoài container chính
    <div className={cl("relative w-full py-10", className)}>
      <div className="flex flex-col">{children}</div>
    </div>
  );
}

interface TimelineItemProps {
  children: React.ReactNode;
  index: number;
  isLast?: boolean;
  /** Khoảng cách từ Dot đến Box (ví dụ: 40px) */
  gap?: number;
  /** Màu sắc của line */
  lineColor?: string;
  /** Tùy chỉnh Dot */
  dotClassName?: string;
}

export function TimelineItem({
  children,
  index,
  isLast,
  gap = 60,
  lineColor = "rgba(255,255,255,1)",
  dotClassName,
}: TimelineItemProps) {
  const isLeft = index % 2 === 1;

  return (
    <div
      className="relative flex w-full items-center min-h-[150px]"
      style={
        {
          "--timeline-gap": `${gap}px`,
        } as React.CSSProperties
      }
    >
      {/* 1. LINE DỌC: Giảm từ 25px xuống khoảng 4px - 6px để thanh mảnh hơn */}
      <div
        className="absolute left-1/2 top-0 h-full w-[12px] -translate-x-1/2 z-0"
        style={{ backgroundColor: lineColor }}
      />

      {/* LEFT SIDE */}
      <div
        className="w-1/2 flex justify-end"
        style={{ paddingRight: "var(--timeline-gap)" }}
      >
        {isLeft && children}
      </div>

      {/* 2. CENTER DOT: Giảm kích thước border và size để khớp với line mảnh */}
      {!isLast && (
        <div className="relative z-30 flex justify-center items-center">
          <div
            className={cl(
              "w-8 h-8 bg-white rounded-full border-[3px] border-blue-500 shadow-md", // Giảm từ w-10 xuống w-8
              dotClassName,
            )}
          />
        </div>
      )}

      {/* RIGHT SIDE */}
      <div
        className="w-1/2 flex justify-start"
        style={{ paddingLeft: "var(--timeline-gap)" }}
      >
        {!isLeft && children}
      </div>

      {/* 3. SVG CONNECTOR: Giảm strokeWidth từ 5 xuống 3 hoặc 4 */}
      {!isLast && (
        <svg
          className="absolute left-1/2 top-1/2 -translate-x-1/2 pointer-events-none z-10"
          width="100%"
          height="200"
          viewBox="0 0 400 150"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            // M200 0: Bắt đầu từ đỉnh để nối mượt với line dọc
            d={
              isLeft
                ? `M200 0 C200 100, ${200 + gap} 80, ${200 + gap} 150`
                : `M200 0 C200 100, ${200 - gap} 80, ${200 - gap} 150`
            }
            stroke={lineColor}
            strokeWidth="3" // Chỉnh lại bằng đúng độ rộng của line dọc (6px) để đồng bộ
            strokeLinecap="round"
          />
        </svg>
      )}
    </div>
  );
}

interface ExperienceBoxProps {
  children: React.ReactNode;
  time: string;
  direction?: "left" | "right";
  className?: string;
}

export function ExperienceBox({
  children,
  time,
  direction = "left",
  className,
}: ExperienceBoxProps) {
  return (
    <div
      className={cl(
        "relative lg:w-3/4 rounded-2xl bg-gradient-to-r from-[#B9D6FF] via-white via-80% to-[#C8E5FC] p-6 shadow-2xl backdrop-blur-xl border border-white/20 z-20",
        "transition-all duration-300 hover:border-blue-400/50",
        className,
      )}
    >
      {/* --- DIV TIME NẰM NGOÀI BOX --- */}
      <div
        className={cl(
          "absolute bottom-full mb-2 whitespace-nowrap", // Nằm trên Box, cách ra 2 đơn vị
          "text-[clamp(1.5rem,1rem+2vw,3.5rem)] font-black text-white italic tracking-tighter", // Style chữ giống mẫu
          direction === "left" ? "left-0" : "right-0", // Căn trái/phải theo direction
        )}
      >
        {time}

        {/* Đường line gạch chân nhỏ phía dưới chữ (nếu bạn muốn giống hệt ảnh) */}
        <div
          className={cl(
            "h-1 bg-white/30 mt-0",
            direction === "left" ? "w-full" : "w-full ml-auto",
          )}
        />
      </div>

      {children}
    </div>
  );
}
