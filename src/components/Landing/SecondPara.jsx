import Image from "next/image";
import underlineEffect from "@/assets/Header/vector.svg";
import { semiBoldFont } from "@/utils/fonts";

const SecondPara = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="2500"
      className="md:py-16` space-y-4 px-4 py-9 text-left text-black md:text-center lg:py-32"
    >
      <h3
        className={` ${semiBoldFont.className} relative inline-block text-[1.75rem] leading-[3rem] tracking-[-0.015em] lg:text-[2.5rem]`}
      >
        A new way to land{" "}
        <span className="relative">
          dream{" "}
          <span className="absolute bottom-0 left-0 top-7 w-full">
            <Image
              src={underlineEffect}
              width={320}
              height={50}
              className="mt-1 lg:mt-5"
            />
          </span>
        </span>
        internships in tech
      </h3>
      <p
        className={`mx-auto max-w-[850px] text-[20px] leading-[2.5rem] text-[#544D49] lg:text-[22px] lg:leading-[2.75rem]`}
      >
        We&apos;re on a mission to empower students to realize their full coding
        potential and seize the best internship opportunities available. Through
        our innovative platform, students can harness the power of Coderships to
        showcase their skills, stand out to top employers, and secure referrals
        to their dream companies.
      </p>
    </div>
  );
};

export default SecondPara;
