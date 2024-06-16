"use client";

import Marquee from "react-fast-marquee";
import Image from "next/image";

const imageSources1 = [
  "https://ik.imagekit.io/internquest/Group%2074-min.svg?updatedAt=1709201321935",
  "https://ik.imagekit.io/internquest/Group%2070-min.svg?updatedAt=1709201321903",
  "https://ik.imagekit.io/internquest/Group%2065-min.svg?updatedAt=1709201319273",
  "https://ik.imagekit.io/internquest/Group%2069-min.svg?updatedAt=1709201319219",
  "https://ik.imagekit.io/internquest/Group%2049-min.svg?updatedAt=1709201319281",
  "https://ik.imagekit.io/internquest/Group%2062-min.svg?updatedAt=1709201319215",
  "https://ik.imagekit.io/internquest/Group%2059-min.svg?updatedAt=1709201319271",
  "https://ik.imagekit.io/internquest/Group%2074-min.svg?updatedAt=1709201321935",
  "https://ik.imagekit.io/internquest/Group%2070-min.svg?updatedAt=1709201321903",
  "https://ik.imagekit.io/internquest/Group%2065-min.svg?updatedAt=1709201319273",
  "https://ik.imagekit.io/internquest/Group%2069-min.svg?updatedAt=1709201319219",
  "https://ik.imagekit.io/internquest/Group%2049-min.svg?updatedAt=1709201319281",
  "https://ik.imagekit.io/internquest/Group%2062-min.svg?updatedAt=1709201319215",
  "https://ik.imagekit.io/internquest/Group%2059-min.svg?updatedAt=1709201319271",
];

const imageSources2 = [
  "https://ik.imagekit.io/internquest/Group%2064-min.svg?updatedAt=1709201319241",
  "https://ik.imagekit.io/internquest/Group%2047-min.svg?updatedAt=1709201319230",
  "https://ik.imagekit.io/internquest/Group%2048-min.svg?updatedAt=1709201319222",
  "https://ik.imagekit.io/internquest/Group%2067-min.svg?updatedAt=1709201319227",
  "https://ik.imagekit.io/internquest/Group%2046-min.svg?updatedAt=1709201319232",
  "https://ik.imagekit.io/internquest/Group%2076-min.svg",
  "https://ik.imagekit.io/internquest/Group%2072-min.svg",
  "https://ik.imagekit.io/internquest/Group%2075-min.svg",
  "https://ik.imagekit.io/internquest/Group%2064-min.svg?updatedAt=1709201319241",
  "https://ik.imagekit.io/internquest/Group%2047-min.svg?updatedAt=1709201319230",
  "https://ik.imagekit.io/internquest/Group%2048-min.svg?updatedAt=1709201319222",
  "https://ik.imagekit.io/internquest/Group%2067-min.svg?updatedAt=1709201319227",
  "https://ik.imagekit.io/internquest/Group%2046-min.svg?updatedAt=1709201319232",
  "https://ik.imagekit.io/internquest/Group%2076-min.svg",
  "https://ik.imagekit.io/internquest/Group%2072-min.svg",
  "https://ik.imagekit.io/internquest/Group%2075-min.svg",
];

const ImageMarquee = ({ imageSources, direction = "left" }) => (
  <Marquee
    direction={direction}
    gradient={true}
    gradientWidth={120}
    gradientColor="#0c0c0c"
  >
    <div className="flex">
      {imageSources.map((src, index) => (
        <Image
          key={index}
          src={src}
          width={100}
          height={100}
          alt=""
          className="ml-4"
        />
      ))}
    </div>
  </Marquee>
);

const MarqueeSlider = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center bg-[#0c0c0c] py-11 lg:flex-row lg:py-24">
      <div className="flex w-full items-center justify-center lg:w-2/5">
        <p
          className={`max-w-[470px] px-4 pb-11 text-left text-[22px] leading-[42px] text-[#ffffffe0] md:text-2xl md:leading-[50px] lg:ml-6 lg:pb-0 xl:text-3xl xl:leading-[70px]`}
        >
          Win referrals to your dream companies by showcasing your skills
          through Coderships
        </p>
      </div>
      <div className="w-full space-y-4 lg:w-3/5">
        <ImageMarquee imageSources={imageSources1} />
        <ImageMarquee imageSources={imageSources2} direction="right" />
      </div>
    </div>
  );
};

export default MarqueeSlider;
