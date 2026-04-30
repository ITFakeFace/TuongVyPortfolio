"use client";
import ContactDialog from "@/components/home-page/consultation-form-section/contact-form/ContactDialog";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface ContactContextType {
  openContactForm: () => void;
  closeContactForm: () => void;
}

const ContactContext = createContext<ContactContextType | undefined>(undefined);

export const ContactProvider = ({
  children,
  lang,
}: {
  children: ReactNode;
  lang: "Viet" | "Eng";
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const openContactForm = () => setIsOpen(true);
  const closeContactForm = () => setIsOpen(false);

  return (
    <ContactContext.Provider value={{ openContactForm, closeContactForm }}>
      {children}
      {/* Duy nhất 1 Dialog dùng chung cho cả App */}
      <ContactDialog visible={isOpen} onHide={closeContactForm} lang={lang} />
    </ContactContext.Provider>
  );
};

export const useContactForm = () => {
  const context = useContext(ContactContext);
  if (!context)
    throw new Error("useContactForm must be used within a ContactProvider");
  return context;
};
