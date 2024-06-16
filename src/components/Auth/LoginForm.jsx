"use client";
import Link from "next/link";
import { boldFont } from "@/utils/fonts";
import React from "react";
import { Typewriter } from "react-simple-typewriter";

const LoginForm = () => {
  const TypewriterMemoized = React.memo(Typewriter);
  return (
    <div className="flex w-full flex-col items-center justify-center px-4 py-8 md:py-20 lg:ml-10 lg:items-start lg:px-0 lg:py-32 xl:ml-24">
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
        <p className="max-w-[470px] pt-4 text-[1.125rem] leading-[2rem] text-[#544D49CC] lg:text-[24px] lg:leading-[2.5rem]">
          From Code to Career: Virtual Internships That Get You Hired
        </p>
      </div>

      <div className="mt-10 w-full max-w-md">
        <form className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-[15px] text-[#505050BF]"
            >
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="hello@coderships.tech"
              required
              className="mt-2 block h-[55px] w-full border border-gray-300 pl-4 text-lg text-[#2C2C2CE5] placeholder:text-[#2C2C2C66]"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-[15px] text-[#505050BF]"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="password"
              required
              className="mt-2 block h-[55px] w-full border border-gray-300 pl-4 text-lg text-[#2C2C2CE5] placeholder:text-[#2C2C2C66]"
            />
          </div>
          <div>
            <button
              type="submit"
              className="flex justify-center bg-[#9D66FFCC] px-4 py-3 text-sm font-medium text-white"
            >
              {" "}
              Sign in{" "}
            </button>
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

export default LoginForm;
