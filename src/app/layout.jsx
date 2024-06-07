"use client";
import localfont from "next/font/local"
import "./globals.css";
import Navbar from "@/components/Navbar";
import MainFooter from "@/components/Footer";
import NextNProgress from 'nextjs-progressbar';

const regular = localfont(
  {
    src: [
      {
        path: "../fonts/GeneralSans-Medium.otf"
      }
    ],
    variable: "--font-regularGeneral"
  }
)


export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={`overflow-x-hidden ${regular.className} bg-[#1B1B1B] `}>
        <Navbar />

        <div className="">
          <NextNProgress color="#ffffff" />
          {children}
        </div>
        <MainFooter />
      </body>
    </html>
  );
}
