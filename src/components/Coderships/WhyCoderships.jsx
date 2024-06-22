const WhyCoderships = () => {
  return (
    <div className="flex w-full flex-col items-center bg-[#171717] text-white">
      <div
        data-aos="fade-up"
        data-aos-duration="700"
        className="mx-auto max-w-[1100px] px-6"
      >
        <h3 className="pt-16 text-center text-[2rem] font-semibold">
          Why Coderships?
        </h3>
        <div className="flex flex-col pt-16 md:flex-row">
          <div className="flex flex-1 flex-col border border-[#4A4B52] bg-[#25282C] py-3">
            <span className="px-6 text-[1.4rem] font-semibold">
              Demand for Practical Experience
            </span>
            <div className="border-t-0 border-[#D7D7D733] py-3">
              <hr />
            </div>
            <p className="flex-grow px-6 pr-8 pt-2 text-[1.125rem] leading-[2.5rem]">
              With many employers seeking candidates with practical, hands-on
              experience, Coderships provide students with the opportunity to
              gain real-world experience by working on production-level projects
              that mirror real-time applications.
            </p>
          </div>
          <div className="flex flex-1 flex-col border border-[#4A4B52] bg-[#25282C] py-3">
            <span className="px-6 text-[1.4rem] font-semibold">
              Skills Validation
            </span>
            <div className="border-t-0 border-[#D7D7D733] py-3">
              <hr />
            </div>
            <p className="flex-grow px-6 pr-8 pt-2 text-[1.125rem] leading-[2.5rem]">
              By requiring students to showcase their skills through real-time
              projects, Coderships serves as a validation of their proficiency
              in programming languages and software development, making it
              easier for startups to identify top talent.
            </p>
          </div>
        </div>

        <div className="mb-10 mt-6 bg-[#693ee0] px-6">
          <div className="flex flex-col gap-6 py-6 md:flex-row">
            <div className="flex flex-1 flex-col border border-[#4A4B52] bg-[#171717] py-3">
              <span className="px-6 text-[1.4rem] font-semibold">
                Empowerment Through Action
              </span>
              <div className="border-t-0 border-[#D7D7D733] py-3">
                <hr />
              </div>
              <p className="flex-grow px-6 pr-8 pt-2 text-[1.125rem] leading-[2.5rem]">
                Coderships empowers students to take control of their internship
                search and actively demonstrate their skills. Instead of
                passively submitting applications and hoping for the best,
                students can proactively build projects that showcase their
                coding skills and attract the attention of potential employers
              </p>
            </div>
            <div className="flex flex-1 flex-col border border-[#4A4B52] bg-[#171717] py-3">
              <span className="px-6 text-[1.4rem] font-semibold">
                Alignment with Industry Needs
              </span>
              <div className="border-t-0 border-[#D7D7D733] py-3">
                <hr />
              </div>
              <p className="flex-grow px-6 pr-8 pt-2 text-[1.125rem] leading-[2.5rem]">
                By focusing on building real-time applications, Coderships
                ensures that students are equipped with the skills and
                experience needed to meet the demands of the tech industry. This
                alignment between student projects and industry needs increases
                the likelihood of landing dream internships and future career
                opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyCoderships;
