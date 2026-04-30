"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ZaloIcon from "@/assets/images/assets/ZaloButton-1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactSidebar = () => {
  const phoneNumber = "0908665656"; // Thay số điện thoại của bạn vào đây
  const zaloLink = `https://zalo.me/${phoneNumber}`; // Thay link Zalo của bạn

  return (
    <div className="fixed bottom-10 right-6 z-1000 flex flex-col gap-4 pointer-events-auto opacity-100">
      {/* Nút Zalo */}
      <Link
        href={zaloLink}
        target="_blank"
        rel="noopener noreferrer"
        className="transition-all duration-300 hover:scale-110 active:scale-95 drop-shadow-lg"
      >
        <div className="w-14 h-14 sm:w-20 sm:h-20 relative">
          <Image
            src={ZaloIcon}
            alt="Zalo"
            className="w-full h-full object-contain animate-bounce"
          />
        </div>
      </Link>

      {/* Nút Gọi điện */}
      {/* <a
        href={`tel:${phoneNumber}`}
        className="pointer-events-auto transition-all duration-300 hover:scale-110 active:scale-95 drop-shadow-lg"
      >
        <div className="w-12 h-12 sm:w-16 sm:h-16 relative">
          <img
            src="/assets/icons/phone.png"
            alt="Phone"
            className="w-full h-full object-contain animate-pulse"
          />
        </div>
      </a> */}
    </div>
  );
};

export default ContactSidebar;
