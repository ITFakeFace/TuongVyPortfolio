"use client";
import React, { useEffect, useRef, useState, useId } from "react";
import Image, { StaticImageData } from "next/image";
import { cl } from "@/utils/cn";

interface FilmStripProps {
  items: (React.ReactNode | StaticImageData)[];
  className?: string;
  itemClassName?: string;
  duration?: number;
  direction?: "left" | "right";
  pauseOnHover?: boolean;
  imageClassName?: string;
  gap?: string; // Thay đổi từ number thành string (vd: "gap-4", "gap-10")
  sideFaded?: boolean;
}

export default function FilmStrip({
  items,
  className,
  itemClassName,
  duration = 20,
  direction = "left",
  pauseOnHover = true,
  imageClassName,
  gap = "gap-0", // Mặc định là string class
  sideFaded = true,
}: FilmStripProps) {
  const regionId = useId();
  const trackRef = useRef<HTMLDivElement>(null);
  const [trackWidth, setTrackWidth] = useState(0);
  const offsetRef = useRef(0);
  const animationRef = useRef<number | null>(null);
  const isPausedRef = useRef(false);

  // 1. Đo chiều rộng thực tế
  useEffect(() => {
    if (!trackRef.current) return;

    const measure = () => {
      const totalWidth = trackRef.current!.scrollWidth;

      /**
       * Vì chúng ta render 2 cụm (div) nối tiếp nhau trong 1 container có gap.
       * Logic đo mới: Lấy tổng chiều rộng chia đôi sẽ ra điểm loop chính xác
       * đã bao gồm cả khoảng cách gap CSS giữa 2 cụm.
       */
      const singleTrackWidth = totalWidth / 2;
      setTrackWidth(singleTrackWidth);

      if (direction === "right") {
        offsetRef.current = -singleTrackWidth;
      } else {
        offsetRef.current = 0;
      }
    };

    measure();
    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(trackRef.current);

    return () => resizeObserver.disconnect();
  }, [gap, direction, items.length]); // gap thay đổi thì đo lại

  // 2. JS Animation Loop
  useEffect(() => {
    if (!trackWidth) return;

    const speed = trackWidth / duration;
    let lastTimestamp = 0;

    const animate = (timestamp: number) => {
      if (!trackRef.current) return;
      if (!lastTimestamp) lastTimestamp = timestamp;

      const deltaTime = (timestamp - lastTimestamp) / 1000;
      lastTimestamp = timestamp;

      if (!isPausedRef.current) {
        const moveStep = speed * deltaTime;

        if (direction === "left") {
          offsetRef.current -= moveStep;
          if (Math.abs(offsetRef.current) >= trackWidth) {
            offsetRef.current = 0;
          }
        } else {
          offsetRef.current += moveStep;
          if (offsetRef.current >= 0) {
            offsetRef.current = -trackWidth;
          }
        }

        trackRef.current.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [trackWidth, duration, direction]);

  const renderItem = (
    item: React.ReactNode | StaticImageData,
    index: number,
  ) => {
    if (item && typeof item === "object" && "src" in item) {
      return (
        <Image
          src={item as StaticImageData}
          alt="Film Strip Image"
          className={cl("object-cover w-full h-auto", imageClassName)}
        />
      );
    }
    return item;
  };

  return (
    <section
      id={regionId}
      className={cl("relative w-full overflow-hidden", className)}
      onMouseEnter={() => pauseOnHover && (isPausedRef.current = true)}
      onMouseLeave={() => pauseOnHover && (isPausedRef.current = false)}
    >
      <div
        ref={trackRef}
        className={cl("flex flex-nowrap will-change-transform", gap)}
      >
        {[0, 1].map((i) => (
          <div
            key={i}
            className={cl("flex flex-nowrap flex-shrink-0", gap)}
            aria-hidden={i === 1}
          >
            {items.map((item, index) => (
              <div
                key={index}
                className={cl(
                  "relative flex-shrink-0 overflow-hidden",
                  itemClassName,
                )}
              >
                {renderItem(item, index)}
              </div>
            ))}
          </div>
        ))}
      </div>
      {sideFaded && (
        <>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black/40 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black/40 to-transparent z-10" />
        </>
      )}
    </section>
  );
}
