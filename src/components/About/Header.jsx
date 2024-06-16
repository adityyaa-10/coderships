import Image from "next/image";
const Header = () => {
  return (
    <section className="relative bg-[#1B1B1B] text-white md:px-16 md:py-16 lg:px-24 lg:py-24 xl:px-32 xl:py-32">
      <div className="">
        <div>
          <div className="block">
            <div className="absolute right-[75px] top-0 flex h-[75px] w-[75px] flex-row items-center justify-center bg-[#4a4a4a] lg:right-[250px] lg:h-[100px] lg:w-[100px]">
              <div>
                <Image
                  className="relative z-[2] h-[40px] w-[40px] bg-[#4a4a4a] lg:h-[55px] lg:w-[61.7px]"
                  width={50}
                  height={50}
                  alt=""
                  src="https://ik.imagekit.io/internquest/React-min.svg?updatedAt=1709201833510"
                />
              </div>
            </div>
            <div className="absolute right-[150px] top-[75px] h-[75px] w-[75px] border-b-0 bg-[#d9d9d91c] lg:right-[350px] lg:top-[100px] lg:h-[100px] lg:w-[100px]"></div>
            <div className="absolute right-0 top-[75px] h-[75px] w-[75px] border border-r-0 border-[#d7d7d783] lg:top-[100px] lg:h-[100px] lg:w-[250px]"></div>
          </div>
          <div className="mx-auto px-4 pb-16 pt-48 text-center lg:mx-0 lg:mb-72 lg:max-w-[550px] lg:py-0 lg:text-left">
            <h2
              data-aos="fade-right"
              data-aos-duration="1500"
              className="text-left text-3xl font-semibold leading-[3.125rem] md:text-[30px] md:leading-[3.25rem] lg:text-[36px] lg:leading-[3rem] xl:leading-[3.85rem]"
            >
              Empowering the next generation of student coders to reach new
              heights through innovative{" "}
              <span className="text-[#8980F5]">Coderships</span>
            </h2>
          </div>

          <div className="right-0 max-w-full border border-[#d7d7d783] p-4 text-[20px] leading-[2.5rem] lg:absolute lg:bottom-12 lg:mb-0 lg:max-w-[650px] lg:border-b-0 lg:p-10 lg:text-[1.2rem] lg:leading-[2.5rem]">
            <p className="pb-[27px] lg:pb-0">
              We are building a new path for student coders to build real-world
              projects and work on production-level applications, aimed at
              giving them the project experience to stand out and get dream
              internship offers
            </p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-12 left-0 hidden h-[100px] w-[100px] border border-b-0 border-[#d7d7d783] lg:block"></div>
      <div className="absolute bottom-0 left-0 flex w-full">
        <div className="h-8 w-[15%] border border-r-0 border-[#d7d7d783] lg:h-12"></div>
        <div className="h-8 w-[10%] border border-r-0 border-[#d7d7d783] lg:h-12"></div>
        <div className="h-8 w-[75%] border border-[#d7d7d783] lg:h-12"></div>
      </div>
    </section>
  );
};

export default Header;
