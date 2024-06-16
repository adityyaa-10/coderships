"use client";
import Link from "next/link";
import { boldFont } from "@/utils/fonts";
import React, { useState, useRef } from "react";
import { Typewriter } from "react-simple-typewriter";

const SignupForm = () => {
  const TypewriterMemoized = React.memo(Typewriter);
  const [otp, setOtp] = useState(Array(5).fill(""));
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const inputRefs = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^\d?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      setError(""); // Clear error on change

      // Move focus to the next input if the current input is not empty
      if (value && index < otp.length - 1) {
        inputRefs.current[index + 1].focus();
      }

      // Check if the OTP is complete
      if (index === otp.length - 1 && newOtp.every((digit) => digit !== "")) {
        setLoading(true); // Set loading state to true
        setTimeout(() => {
          setLoading(false); // Stop loading
          setError(
            "Oops! The invite code you entered doesn't seem to be correct. Please double-check and try again",
          );
        }, 2000); // Simulate OTP verification delay
      }
    }
  };

  return (
    <div className="flex w-full flex-col items-center justify-start px-4 py-8 md:py-20 lg:ml-10 lg:items-start lg:px-0 lg:py-32 xl:ml-24">
      <div className="text-left">
        <h1
          className={`text-[50px] text-[#9D66FFCC] lg:text-[70px] ${boldFont.className}`}
        >
          <TypewriterMemoized
            words={["Build it", "Experience it", "Land it"]}
            loop={0}
            cursor
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h1>
        <p className="max-w-[460px] pt-3 text-[1rem] leading-[2rem] text-[#2D2323] lg:pt-6 lg:text-[20px] lg:leading-[2.5rem]">
          Are you a driven student seeking internship project experience & a
          pathway to land your dream tech internship?
        </p>
        <p className="max-w-[460px] pt-2 text-[1rem] leading-[2rem] text-[#2D2323] lg:text-[20px] lg:leading-[2.5rem]">
          Currently, we are in private beta, and access is limited to
          invite-only
        </p>
      </div>

      <div className="mt-10 w-full max-w-md">
        <form className="space-y-6">
          <div>
            <div className="flex space-x-2 lg:space-x-5">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  type="text"
                  name={`otp-${index}`}
                  id={`otp-${index}`}
                  value={digit}
                  onChange={(e) => handleChange(e, index)}
                  className="h-[40px] w-[40px] border border-gray-300 text-center sm:text-[20px] lg:h-[75px] lg:w-[75px]"
                  maxLength={1}
                  pattern="\d{1}"
                  ref={(el) => (inputRefs.current[index] = el)}
                  required
                />
              ))}
            </div>
            {loading && (
              <p className="max-w-[460px] pt-3 text-[1.125rem] leading-[1.8rem] text-[#4A90E2] lg:pt-6 lg:text-[19px] lg:leading-[2rem]">
                Verifying...
              </p>
            )}
            {!loading && error && (
              <p className="max-w-[460px] pt-3 text-[1.125rem] leading-[1.8rem] text-[#FF5A5FCC] lg:pt-6 lg:text-[19px] lg:leading-[2rem]">
                {error}
              </p>
            )}
          </div>
        </form>
        <div className="mt-5 text-left text-[14px] lg:text-[18px]">
          <Link href="/signup" className="text-[#4A4A4A]">
            Don't have an invite code?{" "}
            <span className="text-[#6F71EE]"> Join Waitlist</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
