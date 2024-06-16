import Marquee from "react-fast-marquee";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-[#f9faf7]">
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <Marquee>
          <h1 className="text-[30vw] text-[#f4f5ec]">404</h1>
          <span className="text-[30vw] text-[#f4f5ec]">•</span>
          <h1 className="text-[30vw] text-[#f4f5ec]">404</h1>
          <span className="text-[30vw] text-[#f4f5ec]">•</span>
        </Marquee>
      </div>
      <div className="z-10 text-center">
        <h1 className="text-[11vw] font-bold md:text-[7vw]">Page not found</h1>
        <p className="mb-7 mt-2 text-xl leading-[2.4rem] text-gray-600 md:text-2xl">
          The page you are looking for doesn't exist or has been moved
        </p>
        <Link
          href={"/"}
          className="rounded bg-[#ffc83d] px-7 py-4 text-xl text-black"
        >
          Back to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
