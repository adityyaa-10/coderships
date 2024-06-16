const GoalCards = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1500"
      className="mx-auto flex max-w-[1200px] flex-col px-[6px] py-6 md:px-[14px] lg:flex-row lg:py-14"
    >
      <div className="flex flex-col border pb-6 pl-3 pr-6 lg:px-10 lg:pb-10">
        <div className="flex-grow">
          <h2 className="max-w-[640px] py-4 text-[28px] font-bold leading-[3rem] tracking-[0.015em] text-[#8980F5] lg:pb-0 lg:pt-7 lg:text-[32px] lg:leading-[3.25rem]">
            Empowering Students to Code, Compete, and Conquer
          </h2>
          <p className="max-w-[671px] text-[1.125rem] leading-[2.25rem] text-[#544D49] lg:pt-[15px] lg:text-[1.2rem] lg:leading-[2.5rem]">
            We've recognized an undeniable gap between the world of learning and
            the demands of the workforce. We firmly believe that the key to
            bridging this gap lies in providing students with opportunities to
            work on real-time projects and test their skills. It's this belief
            that has driven us to create a platform dedicated to empowering
            every student to apply their skills in Coderships and leading them
            to best internships in tech with proof-of-code
          </p>
        </div>
      </div>
      <div className="ml-0 mt-4 flex flex-col border py-6 pl-3 pr-6 lg:ml-9 lg:mt-0 lg:px-10">
        <div className="flex-grow">
          <p className="text-[1.3rem] leading-[2.75rem] text-[#544D49] lg:max-w-[285px] lg:text-[1.35rem] lg:leading-[2.75rem]">
            Our <span className="text-[#FF822D]">goal </span>
            is to empower students to build{" "}
            <span className="text-[#FF822D]">
              projects packed with meaningful code contributions{" "}
            </span>
            that put their skills in the spotlight & help them secure dream
            internships in tech
          </p>
        </div>
      </div>
    </div>
  );
};

export default GoalCards;
