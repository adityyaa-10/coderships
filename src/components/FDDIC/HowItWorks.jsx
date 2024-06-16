const HowItWorks = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1500"
      className="mx-auto max-w-[1200px] space-y-8 px-5 py-16 md:px-12"
    >
      <h3 className="text-center text-[2rem] font-semibold text-[#8980F5]">
        How it works
      </h3>
      <div className="flex w-full flex-col items-stretch justify-center gap-6 lg:flex-row">
        <div className="flex w-full flex-col border border-[#d7d7d7] px-5 py-6 text-start lg:w-1/3">
          <h2 className="text-[1.625rem] font-semibold text-[#1B1B1BCC]">
            Register
          </h2>
          <p className="flex-grow pt-6 text-[1.125rem] leading-[2rem] text-[#544D49E5]">
            Sign up for the FDDIC 24 to secure your spot
          </p>
        </div>
        <div className="flex w-full flex-col border border-[#d7d7d7] px-5 py-6 text-start lg:w-1/3">
          <h2 className="text-[1.625rem] font-semibold text-[#1B1B1BCC]">
            Receive
          </h2>
          <p className="flex-grow pt-6 text-[1.125rem] leading-[2rem] text-[#544D49E5]">
            On the day of event, you&apos;ll receive a series of Coderboats to
            complete within specified timeframes
          </p>
        </div>
        <div className="flex w-full flex-col border border-[#d7d7d7] px-5 py-6 text-start lg:w-1/3">
          <h2 className="text-[1.625rem] font-semibold text-[#1B1B1BCC]">
            Submit
          </h2>
          <p className="flex-grow pt-6 text-[1.125rem] leading-[2rem] text-[#544D49E5]">
            Students who successfully complete the assigned Coderboats shall be
            given the internship offer from partnered startups
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
