import { semiBoldFont } from "@/utils/fonts";
const JoinUs = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-[#171717] px-5 py-9 md:py-16 lg:py-20">
      <h1
        className={`${semiBoldFont.className} text-[1.5rem] text-white md:text-[1.75rem]`}
      >
        Join us in empowering the next generation of frontend developers
      </h1>

      <p className="max-w-[634px] pb-12 pt-8 text-center text-[1.25rem] font-medium text-[#FFFFFFE5]">
        Apply now to become a Coderboat Coordinator and lead the Frontend
        Development Dream Internship Challenge at your college
      </p>

      <button className="items-center rounded-[5px] bg-[#6941c6] px-4 py-2 text-center text-[1.125rem] text-white">
        Apply Now
      </button>
    </div>
  );
};

export default JoinUs;
