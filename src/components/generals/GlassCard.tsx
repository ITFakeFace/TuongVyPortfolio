"use client";

import React from "react";
import { cl } from "@/utils/cn";

type GlassCardProps = {
  children: React.ReactNode;

  containerClassName?: string;
  contentClassName?: string;

  borderWidth?: number | string;

  /**
   * Tailwind rounded class
   * Example:
   * rounded-[40px]
   * rounded-3xl
   */
  borderRadius?: string;

  /**
   * Background gradient/string
   */
  background?: string;

  /**
   * Background opacity
   */
  opacity?: number;

  /**
   * Tailwind class for border layer
   * Example:
   * from-white to-blue-500
   */
  borderColor?: string;

  /**
   * Tailwind class for background layer
   * Example:
   * bg-white/20
   * bg-[#1F2833]/80
   */
  backgroundColor?: string;
};

const GlassCard = ({
  children,
  containerClassName,
  contentClassName,
  borderWidth = 3,
  borderRadius = "rounded-[40px]",
  background = `
    linear-gradient(
      135deg,
      #0957C9 0%,
      #011B40 29%,
      #011B40 70%,
      #0957C9 100%
    )
  `,

  opacity = 0.3,

  borderColor = "from-[#1F2833] via-[#1F2833] to-white",

  backgroundColor = "",
}: GlassCardProps) => {
  const bWidth =
    typeof borderWidth === "number" ? `${borderWidth}px` : borderWidth;

  return (
    <div
      className={cl(
        `
        relative
        overflow-hidden
        flex
        items-center
        justify-center
        isolate
        `,
        borderRadius,
        containerClassName,
      )}
      style={{
        zIndex: 50,
        boxShadow: "-5px -5px 15px rgba(31, 40, 51, 1)",
      }}
    >
      {/* BACKGROUND GRADIENT */}
      <div
        className={cl("absolute inset-0", borderRadius, backgroundColor)}
        style={{
          zIndex: 51,
          background: backgroundColor === "" ? background : undefined,
          opacity: opacity,
        }}
      />

      {/* BACKDROP BLUR */}
      <div
        className={cl("absolute inset-0 backdrop-blur-md", borderRadius)}
        style={{
          zIndex: 52,
        }}
      />

      {/* GRADIENT BORDER */}
      <div
        className={cl(
          `
          absolute
          inset-0
          pointer-events-none
          bg-gradient-to-br
          `,
          borderRadius,
          borderColor,
        )}
        style={{
          zIndex: 53,
          padding: bWidth,

          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",

          WebkitMaskComposite: "xor",

          maskComposite: "exclude",
        }}
      />

      {/* CONTENT */}
      <div
        className={cl(
          `
          relative
          w-full
          h-full
          `,
          contentClassName,
        )}
        style={{
          zIndex: 100,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default GlassCard;
