"use client";
import Link from "next/link";
import { boldFont } from "@/utils/fonts";
import React, { useState, useRef } from "react";
import { Typewriter } from 'react-simple-typewriter';

const SignupForm = () => {
    const TypewriterMemoized = React.memo(Typewriter);
    const [otp, setOtp] = useState(["", "", "", "", ""]);
    const [error, setError] = useState("");
    const inputRefs = useRef([]);

    const handleChange = (e, index) => {
        const value = e.target.value;
        if (/^\d?$/.test(value)) {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);
            setError(""); // Clear error on change
            // Move focus to the next input
            if (value && index < 4) {
                inputRefs.current[index + 1].focus();
            }
            // Check if the OTP is complete and display error
            if (index === 4 && newOtp.every(digit => digit !== "")) {
                setError("Oops! The invite code you entered doesn't seem to be correct. Please double - check and try again");
            }
        }
    };

    return (
        <div className='w-full flex flex-col items-center justify-start lg:items-start lg:ml-10 xl:ml-24 px-4 lg:px-0 py-8 md:py-20 lg:py-32'>
            <div className='text-left'>
                <h1 className={`text-[#8980F580] text-[50px] lg:text-[70px] ${boldFont.className}`}>
                    <TypewriterMemoized
                        words={['Build it', 'Experience it', 'Land it']}
                        loop={0}
                        cursor
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </h1>
                <p className='text-[1rem] leading-[2rem] lg:text-[20px] lg:leading-[2.5rem] text-[#2D2323] max-w-[460px] pt-3 lg:pt-6'>
                    Are you a driven student seeking internship
                    project experience & a pathway to land your
                    dream tech internship?
                    <br />
                    <br />
                    Currently, we are in private beta, and access
                    is limited to invite-only
                </p>
            </div>

            <div className='mt-10 w-full max-w-md'>
                <form className='space-y-6'>
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
                                    className="w-12 h-12 lg:w-14 lg:h-14 text-center border border-gray-300 sm:text-[20px]"
                                    maxLength={1}
                                    pattern="\d{1}"
                                    ref={el => inputRefs.current[index] = el}
                                    required
                                />
                            ))}
                        </div>
                        {error && <p className="text-[1.125rem] leading-[1.8rem] lg:text-[19px] lg:leading-[2rem] text-[#FF5A5FCC] max-w-[460px] pt-3 lg:pt-6">{error}</p>}
                    </div>
                </form>
                <div className='text-[14px] lg:text-[18px] text-left mt-5'>
                    <Link href='/signup' className='text-[#4A4A4A]'>
                        Don't have an invite code? <span className="text-[#6F71EE]">{' '}Join Waitlist</span>
                    </Link>
                </div>
            </div>

        </div>
    );
}

export default SignupForm;
