import PicturesGrid from "./PicturesGrid";

const Landing = () => {
  return (
    <div className="relative mx-auto mb-11 max-w-[1500px]">
      <div className="relative left-0 top-0 order-1 aspect-[1] h-1/2 w-full md:absolute md:m-auto md:h-full">
        <PicturesGrid />
      </div>
      <div className="relative z-10 order-2 grid grid-cols-12 px-[20px] lg:px-24">
        <div className="col-span-12 pb-11 pt-8 md:col-span-4 md:pb-32 md:pt-52">
          <div className="style-label pb-8 text-[#f8614b]">MEET OSAIC</div>
          <h1 className="pb-2 text-[42px] leading-[50.4px] text-[#15535e]">
            Empowering you
          </h1>
          <h2 className="pb-8 text-[72px] leading-[72px] text-[#15535e]">
            to thrive
          </h2>
          <div className="text-[18px] leading-[2.2rem]">
            <p className="text-[#15535e]">
              Osaic is one of the nation’s largest providers of wealth
              management solutions and home to a diverse, service-driven
              community of professionals who believe that planning for the
              future should be transformative, not transactional.
            </p>
          </div>
          <button className="text-primary [&amp;>svg]:ml-0 mt-[42px] flex h-[54px] w-[54px] animate-bounce cursor-pointer items-center justify-center rounded-full bg-[#cbfa40] transition-all hover:scale-110">
            <span className="flex items-center justify-between">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8f w-8f text-primary inline-block"
                width="23"
                height="27"
                viewBox="0 0 23 27"
                fill="none"
              >
                <path
                  d="M11.5004 27.0007C11.5004 21.2048 16.2959 16.5063 22.2114 16.5063"
                  stroke="#15535e"
                  strokeWidth="2.76923"
                ></path>
                <path
                  d="M0.787555 16.5056C6.70307 16.5056 11.4985 21.2041 11.4985 27"
                  stroke="#15535e"
                  strokeWidth="2.76923"
                ></path>
                <path
                  d="M11.4985 24.8755L11.4985 0"
                  stroke="#15535e"
                  strokeWidth="2.76923"
                ></path>
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
