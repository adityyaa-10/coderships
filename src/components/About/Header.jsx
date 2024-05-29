import Image from "next/image";
const Header = () => {
    return (
        <section className="relative bg-[#1B1B1B] text-white md:px-16 md:py-16 lg:px-24 lg:py-24 xl:px-32 xl:py-32">
            <div className="">
                <div>
                    <div className="hidden lg:block">
                        <div className="absolute top-0 right-[250px] py-[22px] px-[19px] bg-[#4a4a4a] flex flex-row items-center justify-center">
                            <div >
                                <Image
                                    className="h-[55px] w-[61.7px] relative z-[2] bg-[#4a4a4a]" width={50} height={50}
                                    alt=""
                                    src="https://ik.imagekit.io/internquest/React-min.svg?updatedAt=1709201833510"
                                />
                            </div>
                        </div>
                        <div className="bg-[#d9d9d91c] absolute right-[350px] top-[100px] h-[100px] w-[100px] border-b-0 "></div>
                        <div className="border border-r-0 absolute top-[100px] right-0 border-[#d7d7d783] h-[100px] w-[250px]"></div>
                    </div>
                    <div className="py-16 lg:py-0 lg:mb-72 text-center lg:text-left mx-auto lg:max-w-[550px] lg:mx-0 px-4 ">
                        <h2 className="font-semibold text-[22px] md:text-[30px] md:leading-[2.75rem] lg:text-[36px] leading-[2.5rem] lg:leading-[3rem] xl:leading-[3.85rem]">
                            Empowering the next generation of student coders to reach new heights through innovative <span className="text-[#8980F5]">Codeships</span>
                        </h2>
                    </div>

                    <div className="lg:absolute lg:bottom-12 right-0 p-4 lg:p-10 max-w-full lg:max-w-[650px] text-[1rem] leading-[2rem] lg:text-[1.2rem] lg:leading-[2.5rem] border border-[#d7d7d783] lg:border-b-0">
                        <p>
                            We are building a new path for student coders to build
                            real-world projects and work on production-level applications,
                            aimed at giving them the project experience to stand out
                            and get dream internship offers
                        </p>
                    </div>
                </div>
            </div>
            <div className="hidden lg:block absolute left-0 bottom-12 border border-[#d7d7d783] h-[100px] w-[100px] border-b-0"></div>
            <div className="hidden lg:flex absolute bottom-0 w-full left-0">
                <div className="border border-[#d7d7d783] h-12 w-[400px] border-r-0"></div>
                <div className="border border-[#d7d7d783] h-12 w-[200px] border-r-0"></div>
                <div className="border border-[#d7d7d783] h-12 w-full"></div>
            </div>
        </section>
    );
}

export default Header;
