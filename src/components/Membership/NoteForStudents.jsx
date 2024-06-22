import Image from "next/image";

const NoteForStudents = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="700"
      className="flex w-full flex-col items-center justify-center px-4 py-8 md:py-16"
    >
      <div>
        <h4 className="mb-4 text-center text-lg font-medium text-[#FF9100] md:text-xl">
          Important Note for students
        </h4>

        <div className="mx-auto w-full max-w-[798px] border border-[#d7d7d7] px-4 py-4 md:px-10">
          <p className="flex items-start gap-3 text-base leading-[2.5rem] text-[#544D49E5] md:text-lg">
            <Image
              src="https://ik.imagekit.io/internquest/svgexport-14%201-min.svg?updatedAt=1709646013371"
              alt=""
              width={24}
              height={24}
              className="mt-1 h-6 w-6"
            />
            Students should have completed at least 2-3 projects in respective
            tech stack in order to apply for Coderships
          </p>
          <p className="mt-4 flex items-start gap-3 text-base leading-[2.5rem] text-[#544D49E5] md:text-lg">
            <Image
              src="https://ik.imagekit.io/internquest/svgexport-14%201-min.svg?updatedAt=1709646013371"
              alt=""
              width={24}
              height={24}
              className="mt-1 h-6 w-6"
            />
            Students should sign a commitment bond in order to access curated
            projects to build as a part of Coderships
          </p>
        </div>
      </div>
    </div>
  );
};

export default NoteForStudents;
