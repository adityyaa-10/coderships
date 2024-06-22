"use client";
import React, { useState } from "react";
import LaptopNav from "./LaptopNav";
import MobileNav from "./MobileNav";

const OsaicHeader = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  const closeMobileNav = () => {
    setIsMobileNavOpen(false);
  };

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        className="h-header flex items-center justify-end pl-9 pr-4 pt-5 md:justify-between"
        aria-label="Global"
      >
        <LaptopNav />
        <div className="flex lg:hidden">
          <button
            type="button"
            className="inline-flex h-[45px] items-center justify-center rounded-full bg-[#EAFF99] px-6 text-[#15535E] transition-all duration-300 hover:bg-[#cbfa40]"
            onClick={toggleMobileNav}
          >
            <span className="sr-only">Open nav menu</span>
            <img
              alt="Osiac Logo"
              loading="lazy"
              width="76"
              height="28"
              decoding="async"
              data-nimg="1"
              className="-mt-1"
              style={{ color: "transparent" }}
              src="https://osaic.com/_next/static/media/logo.1b0f6729.svg"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
              className="ml-4 h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              ></path>
            </svg>
          </button>
        </div>
      </nav>
      <MobileNav isOpen={isMobileNavOpen} onClose={closeMobileNav} />
    </header>
  );
};

export default OsaicHeader;
