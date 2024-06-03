import Link from 'next/link'
import { FaLinkedinIn, FaXTwitter, FaFacebookF } from "react-icons/fa6";

const links = [
    { name: "About", href: "/about" },
    { name: "For Students", href: "/student" },
    { name: "Coderships", href: "/codeships" },
    { name: "Features", href: "/features" },
    { name: "Membership", href: "/membership" },
    { name: "FDDIC'24", href: "/ffdic" },
];

const MainFooter = () => {
    return (
        <footer className="bg-[#171717] text-white">
            <div className="px-6 py-4 flex flex-col xl:flex-row items-center justify-between">
                <div className="flex flex-col xl:flex-row gap-2 md:gap-4 items-center mb-4 md:mb-0">
                    <Link href="/">
                        <span className={`text-[1.5rem] tracking-[-0.015em]`} >
                            {"{ coderships }"}
                        </span>
                    </Link>
                    <div className="text-[#e0e0e0] text-center md:text-left">
                        &copy; 2024 Coderships, Inc
                    </div>
                </div>

                <ul className="flex flex-wrap justify-center md:justify-start mb-4 md:mb-0">
                    {links.map((link, index) => (
                        <li key={index} className="px-2 link">
                            <Link href={link.href}>
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="flex gap-2 justify-center md:justify-end">
                    <FaLinkedinIn className="text-[#e0e0e0] text-4xl hover:bg-[#672be9] transition-opacity p-2 cursor-pointer" />
                    <FaXTwitter className="text-[#e0e0e0] text-4xl hover:bg-[#672be9] transition-opacity p-2 cursor-pointer" />
                    <FaFacebookF className="text-[#e0e0e0] text-4xl hover:bg-[#672be9] transition-opacity p-2 cursor-pointer" />
                </div>
            </div>
        </footer>
    )
}

export default MainFooter;
