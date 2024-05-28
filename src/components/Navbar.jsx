"use client";
import Link from "next/link";
import { useState } from "react";
import localfont from "next/font/local"

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
        <nav className="bg-[#0d0d0d] border-b w-full flex items-center h-[70px] pl-4 justify-between text-white">
            <div className="flex items-center lg:hidden">
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="text-white focus:outline-none"
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
            </div>
            <div className="flex items-start">
                <Link href="/">
                    <span className={` ${regular.className} text-lg lg:text-2xl tracking-[-0.015em] `} >
                        {"{ logo }"}
                    </span>
                </Link>

            </div>
            <div className="lg:flex items-center hidden">

                <ul className="lg:ml-20 lg:gap-6 flex flex-col lg:flex-row">
                    {links.map((link, index) => (
                        <li key={index} className="link px-2 py-1 lg:py-0">
                            <Link href={link.href}>
                                <div>{link.name}</div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="flex items-center">
                <Link href="/sign-in">
                    <span className="hidden lg:flex link px-2">
                        Log In
                    </span>
                </Link>
                <Link href="/get-started">
                    <button className="bg-white h-[70px] text-black px-3 lg:px-6 flex items-center justify-center">
                        Get started
                    </button>
                </Link>
            </div>

            {isMenuOpen && (
                <div className="lg:hidden absolute top-[70px] left-0 w-full bg-[#0d0d0d]">
                    <ul className="flex flex-col items-center">
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
