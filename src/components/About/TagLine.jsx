import Marquee from 'react-fast-marquee'
const TagLine = () => {
    return (
        <div className="bg-[#FFD5D2] py-9 lg:py-12 w-full flex items-center justify-center text-[#FF553D80] font-bold whitespace-nowrap overflow-hidden">
            <Marquee>
                <span className="text-[9vw]  lg:text-[5vw]">
                    {" < Code your path to success >/ "}
                </span>
                <span className="text-[9vw]  lg:text-[5vw]">
                    {" < Code your path to success >/ "}
                </span>
            </Marquee>
        </div>
    );
}

export default TagLine;
