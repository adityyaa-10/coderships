const Banner = () => {
  return (
    <div className="flex items-center justify-center px-5 pt-8 md:pt-16 lg:pt-24">
      <div className="relative flex flex-col lg:flex-row">
        <div className="flex min-h-[400px] max-w-[720px] flex-col justify-between border border-[#D7D7D7] p-2 md:p-5 lg:border-b-0">
          <h2 className="px-4 text-left text-[27px] font-semibold leading-[3rem] text-[#2C2C2CE5] md:text-[36px] md:leading-[3.5rem]">
            Code your way to{" "}
            <span className="text-[#9D66FFCC]">dream internship </span>success
            with Coderships{" "}
          </h2>
          <p className="px-4 text-[23px] leading-[2.2rem] text-[#2C2C2C]">
            where skills shine & dreams come true
          </p>
        </div>
        <div className="flex items-start justify-start lg:items-end lg:justify-end">
          <button className="bg-violet-500 px-4 py-2 text-white">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
