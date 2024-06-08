import Image from 'next/image';

const NoteForStudents = () => {
    return (
        <div data-aos="fade-up" data-aos-duration="1500" className="flex flex-col justify-center items-center w-full py-8 md:py-16 px-4">
            <div>
                <h4 className="text-lg md:text-xl text-[#FF9100] text-center mb-4 font-medium">
                    Important Note for students
                </h4>

                <div className="border border-[#d7d7d7] max-w-[798px] w-full mx-auto px-4 md:px-10 py-4">
                    <p className="flex gap-3 items-start text-[#544D49E5] text-base md:text-lg leading-[2.5rem]">
                        <Image src="https://ik.imagekit.io/internquest/svgexport-14%201-min.svg?updatedAt=1709646013371" alt="" width={24} height={24} className="w-6 h-6 mt-1" />
                        Students should have completed at least 2-3 projects in respective tech stack in
                        order to apply for Coderships
                    </p>
                    <p className="flex gap-3 items-start text-[#544D49E5] text-base md:text-lg leading-[2.5rem] mt-4">
                        <Image src="https://ik.imagekit.io/internquest/svgexport-14%201-min.svg?updatedAt=1709646013371" alt="" width={24} height={24} className="w-6 h-6 mt-1" />
                        Students should sign a commitment bond in order to access curated projects to
                        build as a part of Coderships
                    </p>
                </div>
            </div>
        </div>
    );
};

export default NoteForStudents;
