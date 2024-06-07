import Marquee from 'react-fast-marquee';
import Link from 'next/link';

const NotFoundPage = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen bg-[#f9faf7]">
            <div className="absolute inset-0 z-0 flex justify-center items-center">
                <Marquee>
                    <h1 className="text-[30vw] text-[#f4f5ec]">404</h1>
                    <span className="text-[30vw] text-[#f4f5ec]">•</span>
                    <h1 className="text-[30vw] text-[#f4f5ec]">404</h1>
                    <span className="text-[30vw] text-[#f4f5ec]">•</span>
                </Marquee>
            </div>
            <div className="z-10 text-center">
                <h1 className="text-[11vw] md:text-[7vw] font-bold">Page not found</h1>
                <p className="text-xl md:text-2xl leading-[2.4rem] text-gray-600 mt-2 mb-7">The page you are looking for doesn't exist or has been moved</p>
                <Link href={'/'} className=" px-7 py-4 bg-[#ffc83d] text-black rounded text-xl">Back to Homepage</Link>
            </div>
        </div>
    );
};

export default NotFoundPage;
