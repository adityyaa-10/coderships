import Marquee from "react-fast-marquee";
const TagLine = () => {
  return (
    <div className="flex w-full items-center justify-center overflow-hidden whitespace-nowrap bg-[#FFD5D2] py-9 font-bold text-[#FF553D80] lg:py-12">
      <Marquee>
        <span className="text-[9vw] lg:text-[5vw]">
          {" < Code your path to success >/ "}
        </span>
        <span className="text-[9vw] lg:text-[5vw]">
          {" < Code your path to success >/ "}
        </span>
      </Marquee>
    </div>
  );
};

export default TagLine;
