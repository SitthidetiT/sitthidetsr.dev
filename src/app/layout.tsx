import type { Metadata } from "next";
import { Syne, DM_Mono, Noto_Sans_Thai } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatChat from "@/components/FloatChat";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
});

const notoSansThai = Noto_Sans_Thai({
  variable: "--font-noto-thai",
  subsets: ["thai", "latin"],
  weight: ["300", "400", "600"],
});

export const metadata: Metadata = {
  title: "SitthidetSR — Digital Universe",
  description: "นักพัฒนา · นักออกแบบ · IT Enthusiast ผู้สร้างประสบการณ์ดิจิทัลที่น่าจดจำ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body
        className={`${syne.variable} ${dmMono.variable} ${notoSansThai.variable} antialiased`}
        style={{ fontFamily: "var(--font-noto-thai), var(--font-dm-mono), sans-serif" }}
      >
        <CustomCursor />
        <Navbar />
        {children}
        <Footer />
        <FloatChat />
      </body>
    </html>
  );
}
