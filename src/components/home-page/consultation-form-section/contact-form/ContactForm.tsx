"use client";
import React, { useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import { classNames } from "primereact/utils";
import { Toast } from "primereact/toast";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  organization: string;
  content: string;
}

const ContactForm = ({ lang }: { lang: "Viet" | "Eng" }) => {
  const toast = useRef<Toast>(null);
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    mode: "onChange",
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      organization: "",
      content: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    const GOOGLE_FORM_ACTION_URL =
      "https://docs.google.com/forms/d/e/1FAIpQLScWswC69IVdnmv_-_aMz2pJyHyKyhjQt6b4rIB-dGT20baQ1w/formResponse";
    const formData = new URLSearchParams();
    formData.append("entry.1794306111", data.fullName);
    formData.append("entry.646979108", data.email);
    formData.append("entry.26443356", data.phone);
    formData.append("entry.1282483705", data.organization);
    formData.append("entry.1624064614", data.content);

    try {
      await fetch(GOOGLE_FORM_ACTION_URL, {
        method: "POST",
        mode: "no-cors",
        body: formData.toString(),
      });
      toast.current?.show({
        severity: "success",
        summary: lang === "Viet" ? "Thành công" : "Success",
        detail: lang === "Viet" ? "Yêu cầu đã được gửi!" : "Sent!",
        life: 5000,
      });
      reset();
    } catch (error) {
      toast.current?.show({
        severity: "error",
        summary: "Lỗi",
        detail: "Không thể gửi dữ liệu.",
      });
    }
  };

  return (
    <div className="mx-auto w-full px-2 md:px-10 py-10">
      <Toast ref={toast} />

      {/* Header Section */}
      <div className="text-center mb-10 text-white px-4">
        <h2 className="md:text-[clamp(2.5rem,0.5rem+2.2vw,4rem)] font-bold mb-2 lg:mb-4 tracking-tight uppercase leading-tight">
          {lang === "Viet"
            ? "HÃY ĐỂ TÔI ĐỒNG HÀNH CÙNG BẠN"
            : "LET ME WALK THIS JOURNEY WITH YOU"}
        </h2>
        <p className="font-playfair italic text-[0.625rem] md:text-[clamp(1.125rem,0.75rem+0.45vw,1.5rem)] opacity-80 font-light">
          {lang === "Viet"
            ? "Bắt đầu bằng một cuộc trò chuyện, kết thúc là chiến lược thành công mà bạn cùng tôi xây dựng nên"
            : "Start with a conversation, and end with a success strategy we build together"}
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-5 md:space-y-10 px-5 lg:px-0"
      >
        {/* Grid Container: Giữ 2 cột trên cả mobile và desktop */}
        <div className="grid grid-cols-2 gap-x-3 md:gap-x-10 gap-y-4 md:gap-y-2">
          {/* Họ và tên */}
          <div className="flex flex-col gap-1 md:gap-2">
            <label
              className={classNames(
                "font-bold ml-1 text-xs md:text-[clamp(1.25rem,0.8rem+0.5vw,1.625rem)] transition-colors whitespace-nowrap",
                errors.fullName ? "text-red-300" : "text-white",
              )}
            >
              {lang === "Viet" ? "Họ và tên" : "Full Name"}
            </label>
            <Controller
              name="fullName"
              control={control}
              rules={{ required: lang === "Viet" ? "Bắt buộc" : "Required" }}
              render={({ field, fieldState }) => (
                <div className="flex flex-col">
                  <InputText
                    {...field}
                    className={classNames(
                      "w-full p-2! md:p-3! rounded-full! bg-white! text-black border-2 border-transparent transition-all text-sm md:text-xs",
                      { "!border-red-500 bg-red-50!": fieldState.error },
                    )}
                  />
                  {fieldState.error && (
                    <span className="text-red-300 text-[10px] md:text-sm mt-1 ml-4 animate-fade-in font-medium">
                      {fieldState.error.message}
                    </span>
                  )}
                </div>
              )}
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1 md:gap-2">
            <label
              className={classNames(
                "font-bold ml-1 text-xs md:text-[clamp(1.25rem,0.8rem+0.5vw,1.625rem)] transition-colors",
                errors.email ? "text-red-300" : "text-white",
              )}
            >
              Email
            </label>
            <Controller
              name="email"
              control={control}
              rules={{
                required: lang === "Viet" ? "Bắt buộc" : "Required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Sai định dạng",
                },
              }}
              render={({ field, fieldState }) => (
                <div className="flex flex-col">
                  <InputText
                    {...field}
                    className={classNames(
                      "w-full p-2! md:p-3! rounded-full! bg-white! text-black border-2 border-transparent transition-all text-xs md:text-xs",
                      { "!border-red-500 bg-red-50!": fieldState.error },
                    )}
                  />
                  {fieldState.error && (
                    <span className="text-red-300 text-[10px] md:text-sm mt-1 ml-4 animate-fade-in font-medium">
                      {fieldState.error.message}
                    </span>
                  )}
                </div>
              )}
            />
          </div>

          {/* Số điện thoại */}
          <div className="flex flex-col gap-1 md:gap-2">
            <label
              className={classNames(
                "font-bold ml-1 text-xs md:text-[clamp(1.25rem,0.8rem+0.5vw,1.625rem)] transition-colors",
                errors.phone ? "text-red-300" : "text-white",
              )}
            >
              {lang === "Viet" ? "SĐT" : "Phone"}
            </label>
            <Controller
              name="phone"
              control={control}
              rules={{ required: lang === "Viet" ? "Bắt buộc" : "Required" }}
              render={({ field, fieldState }) => (
                <div className="flex flex-col">
                  <InputText
                    {...field}
                    keyfilter="num"
                    className={classNames(
                      "w-full p-2! md:p-3! rounded-full! bg-white! text-black border-2 border-transparent transition-all text-xs md:text-xs",
                      { "!border-red-500 bg-red-50!": fieldState.error },
                    )}
                  />
                  {fieldState.error && (
                    <span className="text-red-300 text-[10px] md:text-sm mt-1 ml-4 animate-fade-in font-medium">
                      {fieldState.error.message}
                    </span>
                  )}
                </div>
              )}
            />
          </div>

          {/* Cá nhân/ Tổ chức */}
          <div className="flex flex-col gap-1 md:gap-2">
            <label className="text-white font-bold ml-1 text-xs md:text-[clamp(1.25rem,0.8rem+0.5vw,1.625rem)] whitespace-nowrap">
              {lang === "Viet" ? "Cá nhân/Tổ chức" : "Individual/Organization"}
            </label>
            <Controller
              name="organization"
              control={control}
              render={({ field }) => (
                <InputText
                  {...field}
                  className="w-full p-2! md:p-3! rounded-full! bg-white! text-black border-none text-xs md:text-xs"
                />
              )}
            />
          </div>

          {/* Nội dung tư vấn - Full Width */}
          <div className="flex flex-col gap-2 col-span-2 mt-2">
            <label className="text-white font-bold ml-1 text-xs md:text-[clamp(1.25rem,0.8rem+0.5vw,1.625rem)]">
              {lang === "Viet" ? "Nội dung tư vấn" : "Consultation Content"}
            </label>
            <Controller
              name="content"
              control={control}
              render={({ field }) => (
                <InputTextarea
                  {...field}
                  rows={1}
                  autoResize
                  className="w-full p-4 md:p-6 rounded-[2rem]! bg-white! text-black border-none text-xs md:text-xs"
                />
              )}
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-4 md:pt-5">
          <Button
            type="submit"
            unstyled
            label={
              lang === "Viet"
                ? "BẮT ĐẦU NHẬN TƯ VẤN"
                : "START YOUR CONSULTATION NOW"
            }
            className="w-full py-4 md:py-6 text-xs md:text-[clamp(1.5rem,0.2rem+1.4vw,2.5rem)] font-bold border-2 border-white text-white rounded-full 
                       bg-gradient-to-r from-[#0D4CB5] via-[#1E293B] to-[#1E293B]
                       hover:brightness-125 transition-all duration-300 uppercase tracking-widest shadow-xl active:scale-[0.98]"
          />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
