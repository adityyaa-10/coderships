import Image from "next/image";

const ThirdCard = () => {
  return (
    <div className="flex flex-col items-center pt-8 md:pt-16">
      <div className="flex items-center justify-center px-4 text-center text-2xl text-[#2D232385] md:text-4xl">
        Win referrals to your dream companies
      </div>

      <div className="mt-8 flex h-auto w-full flex-col md:mt-16 lg:flex-row">
        <div className="flex w-full flex-col items-center justify-center bg-[#e6daff] p-6 text-base text-[#544D49] md:p-9 md:text-lg lg:w-1/2 lg:text-xl">
          <p className="max-w-[500px] leading-[2.25rem] md:leading-[3.1rem]">
            Gone are the days of tirelessly applying for 100s of internships &
            hoping for a callback or completing multiple coding assignments as a
            part of interview process only to get ghosted...
          </p>
          <br />
          <br />
          <p className="max-w-[500px] leading-[2.25rem] md:leading-[3.1rem]">
            Say hello to a revolutionary way of landing dream internship
            opportunities! Let startups apply to you seeing the projects you
            built as a part of Coderships.
          </p>
        </div>

        <div className="relative grid h-[500px] w-full grid-cols-5 bg-[#9d66ff] md:h-screen lg:w-1/2">
          <div className="absolute inset-0 flex items-center justify-center p-4 md:p-16">
            <Image
              data-aos="zoom-in"
              data-aos-duration="700"
              src={"/thirdcard.svg"}
              fill
              className="p-8 md:p-24"
              alt="Central Image"
            />
          </div>

          <div className="grid grid-rows-5">
            <div className="border border-r-0 border-t-0 border-[#d7d7d7]"></div>
            <div className="border border-r-0 border-t-0 border-[#d7d7d7]"></div>
            <div className="border border-r-0 border-t-0 border-[#d7d7d7]"></div>
            <div className="border border-r-0 border-t-0 border-[#d7d7d7]"></div>
            <div className="border border-r-0 border-t-0 border-[#d7d7d7]"></div>
          </div>
          <div className="grid grid-rows-5">
            <div className="border border-r-0 border-t-0 border-[#d7d7d7]"></div>
            <div className="border border-r-0 border-t-0 border-[#d7d7d7]"></div>
            <div className="border border-r-0 border-t-0 border-[#d7d7d7]"></div>
            <div className="border border-r-0 border-t-0 border-[#d7d7d7]"></div>
            <div className="border border-r-0 border-t-0 border-[#d7d7d7]"></div>
          </div>
          <div className="grid grid-rows-5">
            <div className="border border-r-0 border-t-0 border-[#d7d7d7]"></div>
            <div className="border border-r-0 border-t-0 border-[#d7d7d7]"></div>
            <div className="border border-r-0 border-t-0 border-[#d7d7d7]"></div>
            <div className="border border-r-0 border-t-0 border-[#d7d7d7]"></div>
            <div className="border border-r-0 border-t-0 border-[#d7d7d7]"></div>
          </div>
          <div className="grid grid-rows-5">
            <div className="border border-r-0 border-t-0 border-[#d7d7d7]"></div>
            <div className="border border-r-0 border-t-0 border-[#d7d7d7]"></div>
            <div className="border border-r-0 border-t-0 border-[#d7d7d7]"></div>
            <div className="border border-r-0 border-t-0 border-[#d7d7d7]"></div>
            <div className="border border-r-0 border-t-0 border-[#d7d7d7]"></div>
          </div>
          <div className="grid grid-rows-5">
            <div className="border border-r-0 border-t-0 border-[#d7d7d7]"></div>
            <div className="border border-r-0 border-t-0 border-[#d7d7d7]"></div>
            <div className="border border-r-0 border-t-0 border-[#d7d7d7]"></div>
            <div className="border border-r-0 border-t-0 border-[#d7d7d7]"></div>
            <div className="border border-r-0 border-t-0 border-[#d7d7d7]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdCard;
