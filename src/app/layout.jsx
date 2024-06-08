"use client";
import localfont from "next/font/local"
import "./globals.css";
import Aos from "aos";
import { useEffect } from "react";
import 'aos/dist/aos.css';

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
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <html lang="en">

      <body className={`overflow-x-hidden ${regular.className}  `}>
        {children}
      </body>
    </html>
  );
}
