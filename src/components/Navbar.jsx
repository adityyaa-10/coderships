"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from 'next/navigation'

export default function Navbar() {
    const links = [
        { name: "About", href: "/about" },
        { name: "For Students", href: "/forstudents" },
        { name: "Coderships", href: "/coderships" },
        { name: "Features", href: "/features" },
        { name: "Membership", href: "/membership" },
        { name: "FDDIC'24", href: "/fddic" },
    ];

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname()
    return (
        <nav className="bg-[#0d0d0d] border-b w-full flex items-center h-[70px] px-4 text-white">
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
                <Link href="/" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
                    <span className={`ml-2 text-lg lg:text-2xl tracking-[-0.015em]`}>
                        {"{ coderships }"}
                    </span>
                </Link>
            </div>
            <div className="hidden lg:flex items-center flex-grow ml-10">
                <ul className="flex space-x-3">
                    {links.map((link, index) => (
                        <li key={index} className={`link px-2 py-1 lg:py-0 ${pathname === link.href ? 'bg-[#48008c]' : ''}`}>
                            <Link href={link.href}>
                                <div>{link.name}</div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex items-center ml-auto">
                <Link href="/login" className="hidden lg:flex link px-2">
                    Log In
                </Link>
                <Link href="/signup">
                    <button className="bg-white py-2 text-black px-3 lg:px-5 flex items-center justify-center rounded-lg ml-2 btn">
                        Get started
                    </button>
                </Link>
            </div>

            {isMenuOpen && (
                <div className="lg:hidden fixed top-0 left-0 w-full h-full bg-[#0d0d0d] z-50 flex flex-col items-center justify-center">
                    <button
                        onClick={() => setIsMenuOpen(false)}
                        className="absolute top-4 right-4 text-white focus:outline-none"
                    >
                        <svg
                            className="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                    <ul className="flex flex-col items-center space-y-6">
                        {links.map((link, index) => (
                            <li key={index} className="link text-2xl">
                                <Link href={link.href} onClick={() => setIsMenuOpen(false)}>
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
