const Stats = () => {
  return (
    <div
      className={`flex w-full flex-wrap items-center justify-between bg-[#0C0C0C] px-4 py-9 md:px-16 lg:py-12 xl:px-24`}
    >
      <div className="w-full py-6 text-center lg:w-1/4 lg:pb-0">
        <p className="text-[1.75rem] font-bold text-[#FFFFFFCC] md:text-[2rem]">
          24 hrs
        </p>
        <p className="text-[18px] text-[#666666] md:text-[1rem]">
          Time Commitment
        </p>
      </div>
      <div className="w-full py-6 text-center lg:w-1/4 lg:pb-0">
        <p className="text-[1.75rem] font-bold text-[#FFFFFFCC] md:text-[2rem]">
          On Campus
        </p>
        <p className="text-[18px] text-[#666666] md:text-[1rem]">Location</p>
      </div>
      <div className="w-full py-6 text-center lg:w-1/4">
        <p className="text-[1.75rem] font-bold text-[#FFFFFFCC] md:text-[2rem]">
          50+
        </p>
        <p className="text-[18px] text-[#666666] md:text-[1rem]">Startups</p>
      </div>
      <div className="w-full py-6 text-center lg:w-1/4">
        <p className="text-[1.75rem] font-bold text-[#FFFFFFCC] md:text-[2rem]">
          05
        </p>
        <p className="text-[18px] text-[#666666] md:text-[1rem]">Coderboats</p>
      </div>
    </div>
  );
};

export default Stats;
