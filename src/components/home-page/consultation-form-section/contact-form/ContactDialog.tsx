"use client";
import React, { useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { Toast } from "primereact/toast";
import { classNames } from "primereact/utils";
import { div } from "framer-motion/client";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  organization: string;
  content: string;
}

const ContactDialog = ({
  visible,
  onHide,
  lang,
}: {
  visible: boolean;
  onHide: () => void;
  lang: "Viet" | "Eng";
}) => {
  const toast = useRef<Toast>(null);

  const { control, handleSubmit, reset } = useForm<FormData>({
    mode: "onChange", // Bật chế độ validate  khi thay đổi dữ liệu
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      organization: "",
      content: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    // Thay ID_CUA_FORM bằng ID thực tế từ URL Google Form của bạn
    const GOOGLE_FORM_ACTION_URL =
      "https://docs.google.com/forms/d/e/1FAIpQLSfmo5ltgc36spU8z7HRoMHrPZ-etpMX0slsPDCnqWk9mukYdQ/formResponse";

    const formData = new URLSearchParams();

    // Ánh xạ entry ID bạn đã cung cấp vào các trường tương ứng
    formData.append("entry.1821532733", data.fullName);
    formData.append("entry.1776177637", data.email);
    formData.append("entry.2027532706", data.phone);
    formData.append("entry.314417235", data.organization);
    formData.append("entry.692501202", data.content);

    try {
      await fetch(GOOGLE_FORM_ACTION_URL, {
        method: "POST",
        mode: "no-cors", // Quan trọng để tránh lỗi CORS
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData.toString(),
      });

      toast.current?.show({
        severity: "success",
        summary: lang === "Viet" ? "Thành công" : "Success",
        detail:
          lang === "Viet"
            ? "Yêu cầu của bạn đã được gửi đi!"
            : "Your request has been sent!",
        life: 5000,
      });
      reset();
      onHide();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.current?.show({
        severity: "error",
        summary: lang === "Viet" ? "Lỗi" : "Error",
        detail:
          lang === "Viet"
            ? "Không thể gửi dữ liệu, vui lòng thử lại."
            : "Failed to send data.",
        life: 3000,
      });
    }
  };

  const renderHeader = () => {
    return (
      <div className="flex items-center justify-between w-full pr-4">
        {/* Tiêu đề (Căn trái hoặc giữa tùy bạn, ở đây tôi dùng flex-1 để chiếm chỗ) */}
        <span className="text-[clamp(1.2rem,3vw,1.75rem)] font-bold text-white">
          {lang === "Viet" ? "ĐĂNG KÝ TƯ VẤN" : "BOOK A CONSULTATION"}
        </span>

        {/* Nút X tùy chỉnh */}
        <button
          onClick={onHide}
          className="p-2 rounded-full hover:bg-black/5 transition-colors cursor-pointer flex items-center justify-center"
          aria-label="Close"
        >
          <svg
            className="w-10 h-10 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    );
  };

  return (
    <>
      <Toast
        ref={toast}
        position="top-right"
        pt={{
          // 'message': Toàn bộ khung của 1 thông báo
          message: () => ({
            className: classNames(
              "mb-3 rounded-2xl border border-white/10 shadow-2xl", // Bo góc và viền mờ
              "bg-black/70! backdrop-blur-md", // Nền đen xám 80% + làm mờ hậu cảnh
              "text-white", // Chữ trắng toàn bộ
            ),
          }),
          // 'content': Phần nội dung bên trong khung
          content: { className: "p-4 flex items-center gap-3" },

          // 'icon': Icon (Success/Error)
          icon: { className: "text-white text-xl" },

          // 'summary': Tiêu đề
          summary: { className: "font-bold text-white block mb-1" },

          // 'detail': Nội dung chi tiết
          detail: { className: "text-white/70 text-sm block" },

          // 'closeButton': Nút X tắt thông báo
          closeButton: {
            className:
              "text-white hover:bg-white/10 transition-colors rounded-full!  flex items-center justify-center",
          },
        }}
      />

      <Dialog
        visible={visible}
        onHide={onHide}
        header={renderHeader}
        draggable={false}
        resizable={false}
        dismissableMask
        showCloseIcon={false}
        pt={{
          root: {
            className:
              "!w-[95vw] md:!w-[600px] !rounded-[3rem] !overflow-hidden !border-none !shadow-2xl",
          },
          header: {
            className:
              "!bg-gradient-to-tr !from-[#1F2833] !to-[#0957C9] !text-[#b5bc4f] !pt-10 !px-8 !font-bold !text-2xl md:!text-3xl !text-center !block !border-none",
          },
          content: {
            className:
              "!bg-gradient-to-br !from-[#1F2833] !to-[#0957C9] !px-8 !pb-10 !border-none",
          },
          mask: { className: "!backdrop-blur-md !bg-black/40 !z-[10000]" },
        }}
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-2 mt-4"
        >
          {/* Họ và tên */}
          <div className="flex flex-col gap-1">
            <Controller
              name="fullName"
              control={control}
              rules={{
                required:
                  lang === "Viet"
                    ? "Vui lòng nhập họ và tên"
                    : "Full name is required",
              }}
              render={({ field, fieldState }) => (
                <>
                  <label
                    className={`${fieldState.error ? "text-red-400!" : "text-white"} font-bold ml-1 text-lg`}
                  >
                    {lang === "Viet" ? "Họ và tên" : "Full Name"} *
                  </label>
                  <InputText
                    {...field}
                    pt={{
                      root: {
                        className: classNames(
                          "!p-4 !rounded-full !bg-white/10 !text-white !border-2 !border-transparent !outline-none !transition-all",
                          {
                            "!border-red-500 !bg-red-500/10": fieldState.error,
                          },
                        ),
                      },
                    }}
                  />
                  {fieldState.error && (
                    <span className="text-red-400! text-sm ml-3 mt-1 animate-fade-in">
                      {fieldState.error.message}
                    </span>
                  )}
                </>
              )}
            />
          </div>
          <div className="flex flex-col gap-1">
            <Controller
              name="email"
              control={control}
              rules={{
                required:
                  lang === "Viet" ? "Email là bắt buộc" : "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message:
                    lang === "Viet" ? "Email không hợp lệ" : "Invalid email",
                },
              }}
              render={({ field, fieldState }) => (
                <>
                  <label
                    className={`${fieldState.error ? "text-red-400!" : "text-white"} font-bold ml-1 text-lg`}
                  >
                    Email *
                  </label>
                  <InputText
                    {...field}
                    pt={{
                      root: {
                        className: classNames(
                          "!p-4 !rounded-full !bg-white/10 !text-white !border-2 !border-transparent !outline-none",
                          {
                            "!border-red-500 !bg-red-500/10": fieldState.error,
                          },
                        ),
                      },
                    }}
                  />
                  {fieldState.error && (
                    <span className="text-red-400! text-sm ml-3 mt-1">
                      {fieldState.error.message}
                    </span>
                  )}
                </>
              )}
            />
          </div>
          <div className="flex flex-col gap-1">
            <Controller
              name="phone"
              control={control}
              rules={{
                required:
                  lang === "Viet"
                    ? "Số điện thoại là bắt buộc"
                    : "Phone is required",
              }}
              render={({ field, fieldState }) => (
                <>
                  <label
                    className={`${fieldState.error ? "text-red-400!" : "text-white"} font-bold ml-1 text-lg`}
                  >
                    {lang === "Viet" ? "Số điện thoại" : "Phone"} *
                  </label>
                  <InputText
                    {...field}
                    keyfilter="num"
                    pt={{
                      root: {
                        className: classNames(
                          "!p-4 !rounded-full !bg-white/10 !text-white !border-2 !border-transparent !outline-none",
                          {
                            "!border-red-500 !bg-red-500/10": fieldState.error,
                          },
                        ),
                      },
                    }}
                  />
                  {fieldState.error && (
                    <span className="text-red-400! text-sm ml-3 mt-1">
                      {fieldState.error.message}
                    </span>
                  )}
                </>
              )}
            />
          </div>

          {/* Tổ chức */}
          <div className="flex flex-col gap-1">
            <label className="text-white font-bold ml-1 text-lg">
              {lang === "Viet" ? "Đơn vị/ Tổ chức" : "Organization"}
            </label>
            <Controller
              name="organization"
              control={control}
              render={({ field }) => (
                <InputText
                  {...field}
                  pt={{
                    root: {
                      className:
                        "!p-4 !rounded-full !bg-white/10 !text-white !border-2 !border-transparent !outline-none focus:!border-[#b5bc4f]",
                    },
                  }}
                />
              )}
            />
          </div>

          {/* Nội dung */}
          <div className="flex flex-col gap-1">
            <label className="text-white font-bold ml-1 text-lg">
              {lang === "Viet"
                ? "Khóa học/Nội dung tư vấn"
                : "Course/Consultation Content"}
            </label>
            <Controller
              name="content"
              control={control}
              render={({ field }) => (
                <InputTextarea
                  {...field}
                  rows={3}
                  autoResize
                  pt={{
                    root: {
                      className:
                        "!p-4 !rounded-2xl !bg-white/10 !text-white !border-2 !border-transparent !outline-none focus:!border-[#b5bc4f]",
                    },
                  }}
                />
              )}
            />
          </div>

          <Button
            type="submit"
            label={lang === "Viet" ? "GỬI YÊU CẦU" : "SUBMIT NOW"}
            pt={{
              root: {
                className:
                  "!mt-4 !w-full !py-4 !rounded-2xl !bg-gradient-to-br !from-[#1F2833] !to-[#0957C9] !text-white !font-bold !border-none !shadow-xl hover:!scale-105 !transition-transform !duration-300",
              },
            }}
          />
        </form>
      </Dialog>
    </>
  );
};

export default ContactDialog;
