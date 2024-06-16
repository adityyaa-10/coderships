import React from "react";

const BoxInfo = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1500"
      className="mx-auto max-w-screen-lg"
    >
      {/* Top Block */}
      <div className="relative border border-[#D9D9D9]">
        <div className="absolute left-0 right-0 top-12 h-[1px] bg-[#D9D9D9]" />
        <div className="absolute bottom-0 right-12 top-0 hidden w-[0.8px] bg-[#D9D9D9] lg:block" />
        <div className="px-4 pb-8 pt-16 md:px-12 lg:p-32">
          <p className="mb-4 mt-2 text-[16.5px] leading-[2rem] text-[#2D2323] lg:text-[20px] lg:leading-[2.5rem]">
            {" "}
            Let's face it – it's tough to convey the depth of your coding skills
            on a resume. Traditional resumes often provide only a surface-level
            view of your coding skills. Sure, you can list your tech stack and
            mention a couple of capstone projects, but does that really capture
            the essence of what you bring to the table? We don't think so.
            <br />
            <br />
            It's challenging for potential employers to understand the full
            extent of your abilities based on a list of technologies or projects
            alone.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 block h-[30px] w-[70px] border border-b-0 border-l-0 border-[#D9D9D9] lg:h-[50px] lg:w-[130px]" />
      </div>

      {/* Bottom Blocks */}
      <div className="flex flex-col lg:flex-row">
        {/* Left Block */}
        <div className="relative flex-1 border border-t-0 border-[#D9D9D9] px-4 py-6 md:px-12 lg:py-32">
          <div className="absolute right-0 top-0 hidden h-[50px] w-[130px] border border-r-0 border-t-0 border-[#D9D9D9] lg:block" />
          <div className="absolute bottom-0 left-0 hidden h-[50px] w-[130px] border border-b-0 border-l-0 border-[#D9D9D9] lg:block" />
          <div className="py-6 lg:p-8">
            <p className="text-[1rem] leading-[2rem] text-[#2D2323] lg:text-[20px] lg:leading-[2.5rem]">
              Your code tells a story – your story. It's not just about what
              languages you know or what projects you've worked on. It's about
              the problem-solving skills, the creativity, and the passion that
              you bring to the table.
              <br />
              <br />
              It's about the problems you've solved, the challenges you've
              overcome, and the solutions you've crafted. But how do you convey
              that on a resume?
            </p>
          </div>
          <div className="absolute left-1/2 top-0 block h-[30px] w-[70px] -translate-x-1/2 transform border border-t-0 border-[#D9D9D9] lg:hidden" />
          <div className="absolute bottom-0 left-0 block h-[30px] w-[30px] border border-b-0 border-[#D9D9D9] lg:hidden" />
        </div>

        {/* Right Block */}
        <div className="relative flex-1 border border-t-0 border-[#D9D9D9] px-4 py-6 md:px-12 lg:border-l-0 lg:py-32">
          <div className="absolute left-0 top-0 hidden h-[50px] w-[130px] border border-l-0 border-t-0 border-[#D9D9D9] lg:block" />
          <div className="absolute bottom-0 right-0 hidden h-[50px] w-[130px] border border-b-0 border-r-0 border-[#D9D9D9] lg:block" />
          <div className="pr-5 lg:p-8">
            <p className="text-[1rem] leading-[2rem] text-[#2D2323] lg:text-[20px] lg:leading-[2.5rem]">
              In a competitive job market, standing out is key. But how do you
              differentiate yourself when everyone else is listing the same tech
              stack and projects?
              <br />
              <br />
              Without a way to showcase your coding skills in a unique and
              impactful manner, it's challenging for students to stand out
              differentiate themselves effectively.
            </p>
          </div>
          <div className="absolute right-0 top-0 block h-[120px] w-[30px] border border-t-0 border-[#D9D9D9] lg:hidden" />
        </div>
      </div>
    </div>
  );
};

export default BoxInfo;
