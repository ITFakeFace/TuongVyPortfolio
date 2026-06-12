"use client";
import React, { useState, useEffect } from "react";
import { Dialog } from "primereact/dialog";
import Image from "next/image";
import EventImage from "@/assets/images/assets/PopUp-Event-1.png";

const EventPopup = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Dialog
      visible={visible}
      onHide={() => setVisible(false)}
      position="center"
      draggable={false}
      resizable={false}
      showHeader={false}
      dismissableMask={true}
      /* - Mobile (default): Rộng 85vw, cao tự động theo aspect-square.
         - Desktop (md): Cao 80vh, rộng tự động theo aspect-square để giữ hình vuông.
      */
      className={`border-none p-0 overflow-visible! bg-transparent! shadow-none 
        md:w-[50vw]! w-[80vw] h-auto 
        #aspect-square
        `}
      maskClassName="backdrop-blur-sm bg-black/70 z-[10000]"
      contentClassName="p-0 bg-transparent! relative overflow-visible!"
    >
      {/* Nút đóng (X) - Đặt ở góc ngoài để không che nội dung ảnh */}
      <button
        onClick={() => setVisible(false)}
        className="absolute -top-3 -right-3 md:-top-5 md:-right-5 z-[10001]
                   bg-white text-black w-10! h-10! md:w-10 md:h-10 rounded-full border-2 border-white 
                   flex items-center justify-center shadow-xl hover:bg-gray-200 hover:text-white transition-all"
      >
        <span className="text-xl md:text-2xl font-bold">✕</span>
      </button>

      {/* Nội dung ảnh Event */}
      <div className="w-full h-full relative cursor-pointer group bg-transparent">
        <a
          href="#strategy-consulting"
          // target="_blank"
          onClick={() => setVisible(false)}
          className="block w-full h-full"
        >
          <Image
            src={EventImage}
            alt="Newest Event"
            /* h-full w-full kết hợp aspect-square đảm bảo ảnh vuông khít khung Dialog */
            className="w-full h-full object-cover rounded-xl shadow-2xl transition-all duration-500 group-hover:scale-[1.02]"
            priority
          />
        </a>
      </div>
    </Dialog>
  );
};

export default EventPopup;
