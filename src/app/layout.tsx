import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { PrimeReactProvider } from "primereact/api";
import NavigationBar from "@/components/layouts/navigation-bar/NavigationBar";
import Footer from "@/components/layouts/foooter/Footer";
import ContactSidebar from "@/components/layouts/side-button-bar/ContactSidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Khởi tạo font với các cấu hình mong muốn
const montserrat = Montserrat({
  subsets: ["vietnamese"], // Quan trọng để hiển thị tiếng Việt không lỗi
  weight: ["400", "500", "600", "700"], // Các độ dày bạn muốn dùng
  variable: "--font-montserrat", // Tạo một CSS variable
});

export const metadata: Metadata = {
  title: "Tường Vy Portfolio",
  description: "Personal portfolio website for Tường Vy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${montserrat.variable} h-full antialiased`}>
      <body className="min-h-screen relative flex flex-col">
        <PrimeReactProvider>
          <LanguageProvider>
            <NavigationBar />
            {children}
            <Footer />
            <ContactSidebar />
          </LanguageProvider>
        </PrimeReactProvider>
      </body>
    </html>
  );
}
