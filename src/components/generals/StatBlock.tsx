"use client";
import { cl } from "@/utils/cn";
import React, { useId } from "react";

const StatBlock = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const topId = useId();
  const rightId = useId();
  const bottomId = useId();

  return (
    <div
      className={cl(
        "relative w-fit max-w-md px-4 py-2 rounded-[20px] bg-[radial-gradient(circle,_#5268D2_0%,_#7DB3E2_50%,_#7DB3E2_100%)] text-white text-center shadow-2xl",
        className,
      )}
    >
      {/* Div Trên: Ánh sáng chính giữa, rộng 50% width */}
      <div className="absolute top-0 left-0 w-full h-7 pointer-events-none">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <ellipse cx="50" cy="5" rx="30" ry="20" fill={`url(#${topId})`} />
          <defs>
            <radialGradient id={topId} cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="white" stopOpacity="1" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      {/* Div Trên: Ánh sáng chính giữa, rộng 50% width */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <ellipse cx="99" cy="50" rx="1" ry="30" fill={`url(#${rightId})`} />
          <defs>
            <radialGradient id={rightId} cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="white" stopOpacity="1" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      {/* Nội dung chính */}
      <div className="relative z-10">{children}</div>

      {/* Div Dưới: Ánh sáng chính giữa, rộng 50% width */}
      <div className="absolute bottom-0 left-0 w-full h-7 pointer-events-none">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <ellipse cx="35" cy="95" rx="40" ry="20" fill={`url(#${bottomId})`} />
          <defs>
            <radialGradient id={bottomId} cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="white" stopOpacity="1" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default StatBlock;
