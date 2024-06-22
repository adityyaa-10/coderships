"use client";

import { animatePageIn } from "@/utils/animation";
import { useEffect, useState } from "react";

export default function Template({ children }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    if (document.readyState === "complete") {
      setLoading(false);
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);
  useEffect(() => {
    if (loading) {
      animatePageIn();
    }
  }, []);
  return (
    <div>
      <div
        id="banner-1"
        className="fixed left-0 top-0 z-10 min-h-screen w-1/4 bg-neutral-950"
      />
      <div
        id="banner-2"
        className="fixed left-1/4 top-0 z-10 min-h-screen w-1/4 bg-neutral-950"
      />
      <div
        id="banner-3"
        className="fixed left-2/4 top-0 z-10 min-h-screen w-1/4 bg-neutral-950"
      />
      <div
        id="banner-4"
        className="fixed left-3/4 top-0 z-10 min-h-screen w-1/4 bg-neutral-950"
      />
      {children}
    </div>
  );
}
