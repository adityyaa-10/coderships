const Header = () => {
    return (
        <section className="relative bg-[#1B1B1B] text-white ">
            <div className="relative px-6 py-6 md:px-16 md:py-16 lg:px-24 lg:py-24 xl:px-32 xl:py-32">
                <div>
                    <div className="absolute right-[100px]">
                        <div className="bg-[#d9d9d91c] h-[100px] w-[100px] border-b-0"></div>
                    </div>
                    <div>
                        <h2 className="font-semibold text-2xl mb-40 lg:text-[36px] max-w-[500px] leading-[1.5rem] lg:leading-[3rem] xl:leading-[3.85rem]">
                            Empowering the next generation of student coders to reach new heights through innovative <span className="text-[#8980F5]">Codeships</span>
                        </h2>
                    </div>

                    <div className="absolute bottom-0 right-0 p-10 max-w-[650px] text-[1rem] leading-[2rem] lg:text-[1.2rem] lg:leading-[2.5rem] border border-[#d7d7d783] border-b-0">
                        <p>
                            We are building a new path for student coders to build
                            real-world projects and work on production-level applications,
                            aimed at giving them the project experience to stand out
                            and get dream internship offers
                        </p>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-12 border border-[#d7d7d783] h-[100px] w-[100px] border-b-0"></div>
            <div className="flex">
                <div className="border border-[#d7d7d783] h-12 w-[400px] border-r-0"></div>
                <div className="border border-[#d7d7d783] h-12 w-[200px] border-r-0"></div>
                <div className="border border-[#d7d7d783] h-12 w-full"></div>
            </div>
        </section>
    );
}

export default Header;
