import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const MobileNav = ({ isOpen, onClose }) => {
    return (
        <div
            className={`fixed inset-0 z-50 bg-[#cbfa40] overflow-auto transition-transform transform ${isOpen ? "translate-x-0" : "translate-x-full"
                }`}
        >
            <div className="flex items-center justify-between p-5">
                <img
                    alt="Osiac Logo"
                    loading="lazy"
                    width="76"
                    height="28"
                    decoding="async"
                    data-nimg="1"
                    style={{ color: "transparent" }}
                    src="https://osaic.com/_next/static/media/logo.1b0f6729.svg"
                />
                <button
                    type="button"
                    className="p-2 bg-[#15535E] rounded-full"
                    onClick={onClose}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#FFF"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
            </div>
            <nav className="flex flex-col items-center w-full h-max mb-6 space-y-4 px-4">
                <Link href="#" className="bg-white text-[#15535E] w-full px-6 rounded-full text-[40px] py-2">
                    Partnership
                </Link>
                <Link href="#" className="bg-white text-[#15535E] w-full px-6 rounded-full text-[40px] py-2">
                    Growth
                </Link>
                <Link href="#" className="bg-white text-[#15535E] w-full px-6 rounded-full text-[40px] py-2">
                    Community
                </Link>
                <Link href="#" className="text-2xl font-bold bg-white text-[#15535E] w-full px-6 py-2 rounded-full text-[16px] uppercase tracking-wider">
                    About
                </Link>
                <Link href="#" className="text-2xl font-bold bg-white text-[#15535E] w-full px-6 py-2 rounded-full text-[16px] uppercase tracking-wider">
                    News
                </Link>
                <Link href="#" className="text-2xl font-bold bg-white text-[#15535E] w-full px-6 py-2 rounded-full text-[16px] uppercase tracking-wider">
                    Careers
                </Link>
                <Link href="#" className="text-2xl font-bold bg-white text-[#15535E] w-full px-6 py-2 rounded-full text-[16px] uppercase tracking-wider">
                    Contact
                </Link>
                <Link href="#" className="text-2xl font-bold bg-white text-[#15535E] w-full px-6 py-2 rounded-full text-[16px] uppercase tracking-wider">
                    Login
                </Link>
            </nav>
            <div className="p-4 flex space-x-3">
                <Link href="https://facebook.com" className="p-3 bg-[#15535E] rounded-full text-white">
                    <FaFacebookF />
                </Link>
                <Link href="https://twitter.com" className="p-3 bg-[#15535E] rounded-full text-white">
                    <FaXTwitter />
                </Link>
                <Link href="https://instagram.com" className="p-3 bg-[#15535E] rounded-full text-white">
                    <FaInstagram />
                </Link>
                <Link href="https://linkedin.com" className="p-3 bg-[#15535E] rounded-full text-white">
                    <FaLinkedinIn />
                </Link>
            </div>
        </div>
    );
};

export default MobileNav;
