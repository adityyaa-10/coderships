"use client";
import "./globals.css";
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import { mediumFont } from "@/utils/fonts";

export default function RootLayout({ children }) {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <html lang="en">
      <title>Coderships</title>
      <body className={`overflow-x-hidden ${mediumFont.className} `}>
        {children}
      </body>
    </html>
  );
}
