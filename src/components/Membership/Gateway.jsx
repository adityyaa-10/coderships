import Image from "next/image";

const Gateway = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1500"
      className={`mx-auto flex max-w-[1250px] flex-col items-center justify-center px-4 py-20 md:flex-row md:px-8`}
    >
      <div className="w-full md:w-2/3">
        <h2
          className={`text-[2rem] font-semibold leading-[3rem] text-[#8980f5]`}
        >
          Coderships - A new gateway for top 1% internship opportunities in tech
        </h2>

        <p className="pt-6 text-[1.25rem] leading-[2.5rem] text-[#544D49]">
          As a platform aimed at building the community of top 1% interns,
          Coderships are highly selective and students who are committed to
          showcase their skills to startups and excel in their career are only
          awarded with membership with acceptance rate less than 25%
        </p>
      </div>
      <div className="mt-7 flex w-full items-center justify-center md:w-1/3 lg:mt-0">
        <Image src={"/one.svg"} width={230} height={500} alt="" />
      </div>
    </div>
  );
};

export default Gateway;
