"use client";
import React, { useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import { classNames } from "primereact/utils";
import { KeyFilterType } from "primereact/keyfilter";
import { Toast } from "primereact/toast";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  organization: string;
  content: string;
}

interface FormField {
  name: keyof FormData;
  label: string;
  required?: string;
  type: "text" | "textarea";
  keyfilter?: KeyFilterType;
  pattern?: { value: RegExp; message: string };
  // Thêm thuộc tính để xác định chiều rộng trên mobile
  mobileMDWidth?: string;
  mobileSMWidth?: string;
}

const ContactForm = ({ lang }: { lang: "Viet" | "Eng" }) => {
  const getFormFields = (lang: string): FormField[] => [
    {
      name: "fullName",
      label: lang === "Viet" ? "Họ và tên" : "Full Name",
      required:
        lang === "Viet" ? "Vui lòng nhập họ và tên" : "Full name is required",
      type: "text",
      // Họ tên thường để full width để dễ nhập
    },
    {
      name: "email",
      label: lang === "Viet" ? "Email" : "Email Address",
      required: lang === "Viet" ? "Email là bắt buộc" : "Email is required",
      type: "text",
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message:
          lang === "Viet" ? "Email không hợp lệ" : "Invalid email address",
      },
    },
    {
      name: "phone",
      label: lang === "Viet" ? "Số điện thoại" : "Phone Number",
      required:
        lang === "Viet"
          ? "Vui lòng nhập số điện thoại"
          : "Phone number is required",
      type: "text",
      keyfilter: "num",
      // Thu nhỏ width trên mobile
      mobileSMWidth: "w-1/2",
      mobileMDWidth: "md:w-full",
    },
    {
      name: "organization",
      label: lang === "Viet" ? "Đơn vị/ Tổ chức" : "Company/ Organization",
      type: "text",
      // Thu nhỏ width trên mobile
      mobileSMWidth: "w-1/2",
      mobileMDWidth: "md:w-full",
    },
    {
      name: "content",
      label:
        lang === "Viet"
          ? "Khóa học/Nội dung tư vấn"
          : "Course/Consultation Content",
      type: "textarea",
      // Thu nhỏ width trên mobile
      mobileSMWidth: "w-1/2",
      mobileMDWidth: "md:w-full",
    },
  ];
  const toast = useRef<Toast>(null);
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      organization: "",
      content: "",
    },
  });

  const fields = getFormFields(lang);

  const onSubmit = async (data: FormData) => {
    // Thay ID_CUA_FORM bằng ID thực tế từ URL Google Form của bạn
    const GOOGLE_FORM_ACTION_URL =
      "https://docs.google.com/forms/d/1BJanHML5cDr2k1MpSSHJVCQcalPCgaQgoumNkxDSnBo/formResponse";

    const formData = new URLSearchParams();

    // Ánh xạ entry ID bạn đã cung cấp vào các trường tương ứng
    formData.append("entry.1206377112", data.fullName);
    formData.append("entry.1234766145", data.email);
    formData.append("entry.1183780131", data.phone);
    formData.append("entry.1543379356", data.organization);
    formData.append("entry.958788668", data.content);

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

  return (
    <div className="mx-auto">
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" bg-linear-to-br from-[#FFFFFF]/30 to-[#0957C9]/30 border-white border-3 text-[#011B40] w-full p-5 md:p-12! rounded-[3rem] shadow-2xl flex flex-col gap-2">
          <h2
            className={`${lang == "Viet" ? "text-3xl" : "text-[1.3rem]"} md:text-3xl font-bold text-center mb-3 uppercase tracking-wider bg-clip-text bg-linear-to-r from-[#011B40] to-[#0346A6]`}
          >
            {lang === "Viet"
              ? "Đặt lịch trao đổi trực tiếp"
              : "SCHEDULE A DIRECT CONSULTATION"}
          </h2>

          {fields.map((field) => (
            /* Sử dụng class động: Nếu có mobileMDWidth thì áp dụng, 
               mặc định md:w-full để đảm bảo trên desktop vẫn đầy đủ 
            */
            <div
              key={field.name}
              className={`flex flex-col ${field.mobileSMWidth || "w-full "} ${field.mobileMDWidth || "md:w-full "}`}
            >
              <Controller
                name={field.name}
                control={control}
                rules={{ required: field.required, pattern: field.pattern }}
                render={({ field: controllerField, fieldState }) => (
                  <>
                    <label
                      className={`${fieldState.error ? "text-red-400!" : "text-[#011B40]"} font-bold mb-2 ml-1 text-lg! md:text-base`}
                    >
                      {field.label}{" "}
                      {field.required && (
                        <span className="text-red-400!">*</span>
                      )}
                    </label>
                    <div className="flex flex-col">
                      {field.type === "textarea" ? (
                        <InputTextarea
                          {...controllerField}
                          rows={3}
                          autoResize
                          className={classNames(
                            "p-3 rounded-3xl! bg-[#d9d9d9] text-black transition-all border-2 border-transparent mb:2 md:mb-5 ",
                            { "!border-red-400 bg-red-50": fieldState.error },
                          )}
                        />
                      ) : (
                        <InputText
                          {...controllerField}
                          keyfilter={field.keyfilter}
                          className={classNames(
                            "p-2 rounded-full! bg-[#d9d9d9] text-black transition-all border-2 border-transparent mb:2 md:mb-5",
                            { "!border-red-500 bg-red-50": fieldState.error },
                          )}
                        />
                      )}
                      {fieldState.error && (
                        <span className="p-error block mt-1 ml-2 text-red-400! text-lg! font-medium animate-fade-in">
                          {fieldState.error.message}
                        </span>
                      )}
                    </div>
                  </>
                )}
              />
            </div>
          ))}
          <div className="mt-4 flex justify-center md:hidden w-1/2">
            <Button
              type="submit"
              unstyled
              label={lang === "Viet" ? "Gửi đi >>" : "SUBMIT"}
              className={`${lang == "Viet" ? "px-8!" : "px-3!"} md:px-16! py-3! text-lg md:text-4xl border-2 border-white bg-[radial-gradient(circle,#5268D2_0%,#7DB3E2_100%)] text-white font-bold rounded-xl! hover:bg-[#d9d9d9] hover:scale-125 transition-all! duration-300 shadow-lg!`}
            />
          </div>
        </div>

        <div className="mt-4 md:flex justify-center hidden">
          <Button
            type="submit"
            unstyled
            label={lang === "Viet" ? "Gửi đi >>" : "SUBMIT"}
            className={`px-16! py-3! md:text-4xl! ${lang == "Viet" ? "text-2xl!" : "text-lg!"} border-2 border-white bg-[radial-gradient(circle,#5268D2_0%,#7DB3E2_100%)] text-white font-bold rounded-3xl! hover:bg-[#d9d9d9] hover:scale-125 transition-all! duration-300 shadow-lg!`}
          />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
