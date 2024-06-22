import Image from "next/image";
// import rs from "./Rs. 6000.svg";

const Prize = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="700"
      className="mx-auto max-w-[1250px] px-4 py-8 md:px-8 md:py-16"
    >
      <h3 className="text-center text-xl font-semibold leading-[2.5rem] text-[#2D2323E5] md:text-2xl lg:text-3xl lg:leading-[2.9rem]">
        Ready to start your journey towards <br className="hidden md:block" />
        landing top 1% internships in tech?
      </h3>
      <div className="mt-8 flex flex-col border border-[#d7d7d7] md:mt-16 md:flex-row">
        <div className="space-y-4 px-6 py-8 text-[#544D49] md:w-2/3 md:space-y-6 md:px-10 md:py-12">
          <p className="flex items-center gap-4 text-lg md:text-xl">
            <Image
              src="https://ik.imagekit.io/internquest/Vector-min.svg?updatedAt=1709646030004"
              width={6}
              height={2}
              alt=""
              className="h-3 w-3"
            />
            5+ career tools premium subscriptions
          </p>
          <p className="flex items-center gap-4 text-lg md:text-xl">
            <Image
              src="https://ik.imagekit.io/internquest/Vector-min.svg?updatedAt=1709646030004"
              width={6}
              height={2}
              alt=""
              className="h-3 w-3"
            />
            Get access to dev tools & resources
          </p>
          <p className="flex items-center gap-4 text-lg md:text-xl">
            <Image
              src="https://ik.imagekit.io/internquest/Vector-min.svg?updatedAt=1709646030004"
              width={6}
              height={2}
              alt=""
              className="h-3 w-3"
            />
            Code review sessions by senior developers
          </p>
          <p className="flex items-center gap-4 text-lg md:text-xl">
            <Image
              src="https://ik.imagekit.io/internquest/Vector-min.svg?updatedAt=1709646030004"
              width={6}
              height={2}
              alt=""
              className="h-3 w-3"
            />
            Get invites to join the teams of emerging startups
          </p>
          <p className="flex items-center gap-4 text-lg md:text-xl">
            <Image
              src="https://ik.imagekit.io/internquest/Vector-min.svg?updatedAt=1709646030004"
              width={6}
              height={2}
              alt=""
              className="h-3 w-3"
            />
            Win AI credits to use new AI tools & platforms
          </p>
          <p className="flex items-center gap-4 text-lg md:text-xl">
            <Image
              src="https://ik.imagekit.io/internquest/Vector-min.svg?updatedAt=1709646030004"
              width={6}
              height={2}
              alt=""
              className="h-3 w-3"
            />
            Win referrals to your dream companies
          </p>
        </div>

        <div className="flex w-full items-center justify-center border-t border-[#d7d7d7] py-8 md:w-1/3 md:border-l md:border-t-0 md:py-0">
          <h2 className="text-5xl font-semibold text-[#8980F5] md:text-[52px]">
            Rs. 6,000
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Prize;
