import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const MobileNav = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-0 z-50 transform overflow-auto bg-[#cbfa40] transition-transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
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
          className="rounded-full bg-[#15535E] p-2"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#FFF"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <nav className="mb-6 flex h-max w-full flex-col items-center space-y-4 px-4">
        <Link
          href="#"
          className="w-full rounded-full bg-white px-6 py-2 text-[40px] text-[#15535E]"
        >
          Partnership
        </Link>
        <Link
          href="#"
          className="w-full rounded-full bg-white px-6 py-2 text-[40px] text-[#15535E]"
        >
          Growth
        </Link>
        <Link
          href="#"
          className="w-full rounded-full bg-white px-6 py-2 text-[40px] text-[#15535E]"
        >
          Community
        </Link>
        <Link
          href="#"
          className="w-full rounded-full bg-white px-6 py-2 text-2xl text-[16px] font-bold uppercase tracking-wider text-[#15535E]"
        >
          About
        </Link>
        <Link
          href="#"
          className="w-full rounded-full bg-white px-6 py-2 text-2xl text-[16px] font-bold uppercase tracking-wider text-[#15535E]"
        >
          News
        </Link>
        <Link
          href="#"
          className="w-full rounded-full bg-white px-6 py-2 text-2xl text-[16px] font-bold uppercase tracking-wider text-[#15535E]"
        >
          Careers
        </Link>
        <Link
          href="#"
          className="w-full rounded-full bg-white px-6 py-2 text-2xl text-[16px] font-bold uppercase tracking-wider text-[#15535E]"
        >
          Contact
        </Link>
        <Link
          href="#"
          className="w-full rounded-full bg-white px-6 py-2 text-2xl text-[16px] font-bold uppercase tracking-wider text-[#15535E]"
        >
          Login
        </Link>
      </nav>
      <div className="flex space-x-3 p-4">
        <Link
          href="https://facebook.com"
          className="rounded-full bg-[#15535E] p-3 text-white"
        >
          <FaFacebookF />
        </Link>
        <Link
          href="https://twitter.com"
          className="rounded-full bg-[#15535E] p-3 text-white"
        >
          <FaXTwitter />
        </Link>
        <Link
          href="https://instagram.com"
          className="rounded-full bg-[#15535E] p-3 text-white"
        >
          <FaInstagram />
        </Link>
        <Link
          href="https://linkedin.com"
          className="rounded-full bg-[#15535E] p-3 text-white"
        >
          <FaLinkedinIn />
        </Link>
      </div>
    </div>
  );
};

export default MobileNav;
