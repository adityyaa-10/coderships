export const Header = () => {
  return (
    <header className="bg-[#1B1B1B] text-white">
      <div className="h-0">
        <div className="flex w-full justify-between">
          <div>
            <div className="h-[50px] w-[50px] bg-[#D9D9D91A] lg:h-[100px] lg:w-[100px]" />
          </div>
          <div className="relative top-0 flex">
            <div className="h-[50px] w-[100px] border border-[#D7D7D750] lg:h-[100px] lg:w-[200px]" />
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center space-y-12 pt-24 lg:pt-[220px]">
        <h1 className="max-w-[677px] px-4 text-center text-[1.5rem] font-bold leading-[3rem] tracking-wide md:text-4xl md:leading-[4rem] lg:text-[3rem] lg:leading-[4.5rem]">
          Features designed to{" "}
          <span className="text-[#8980F5]">Launch your Career </span> in tech
        </h1>
        <div className="mx-4 max-w-[650px] border-2 border-[#D7D7D750] px-6 py-14 text-[1.5rem] text-[#FFFFFFE5]">
          Discover the unique features that Coderships has to offer, designed to
          revolutionize the way students demonstrate their coding skills
        </div>

        <div className="relative top-[49px] flex w-full justify-end">
          <div className="h-[100px] w-[50px] border border-b-0 border-[#D7D7D750]" />
        </div>
        <div className="flex h-[50px] w-full columns-3">
          <div className="w-[500px] border border-l-0 border-[#D7D7D750]" />
          <div className="w-[300px] border border-l-0 border-r-0 border-[#D7D7D750]" />
          <div className="w-[480px] border border-r-0 border-[#D7D7D750] xl:w-screen" />
        </div>
      </div>
    </header>
  );
};

export default Header;
