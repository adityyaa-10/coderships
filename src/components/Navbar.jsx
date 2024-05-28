"use client";
import Link from "next/link";
import { useState } from "react";
import localfont from "next/font/local";

const regular = localfont({
    src: [
        {
            path: "../fonts/GeneralSans-Medium.otf"
        }
    ],
    variable: "--font-regularGeneral"
});

export default function Navbar() {
    const links = [
        { name: "About", href: "/about" },
        { name: "For Students", href: "/student" },
        { name: "Coderships", href: "/codeships" },
        { name: "Features", href: "/features" },
        { name: "Membership", href: "/membership" },
        { name: "FDDIC'24", href: "/ffdic" },
    ];

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="z-50 bg-[#0d0d0d] border-b w-full flex items-center h-[70px] px-4 text-white">
            <div className="flex items-center">
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="text-white focus:outline-none lg:hidden"
                >
                    <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        {isMenuOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        )}
                    </svg>
                </button>
                <Link href="/" className="flex items-center">
                    <span className={`ml-2 ${regular.className} text-lg lg:text-2xl tracking-[-0.015em]`}>
                        {"{ coderships }"}
                    </span>
                </Link>
            </div>
            <div className="hidden lg:flex items-center flex-grow ml-10">
                <ul className="flex space-x-6">
                    {links.map((link, index) => (
                        <li key={index} className="link px-2 py-1 lg:py-0">
                            <Link href={link.href}>
                                <div>{link.name}</div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex items-center ml-auto">
                <Link href="/sign-in" className="hidden lg:flex link px-2">
                    Log In
                </Link>
                <Link href="/get-started">
                    <button className="bg-white py-2 text-black px-3 lg:px-5 flex items-center justify-center rounded-lg ml-2">
                        Get started
                    </button>
                </Link>
            </div>

            {isMenuOpen && (
                <div className="lg:hidden absolute top-[70px] z-50 left-0 w-full bg-[#0d0d0d]">
                    <ul className="flex flex-col items-start pl-4">
                        {links.map((link, index) => (
                            <li key={index} className="link px-2 py-2 w-full text-left border-b border-white">
                                <Link href={link.href}>
                                    <div>{link.name}</div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
}
