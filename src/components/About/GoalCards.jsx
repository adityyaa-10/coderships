

const GoalCards = () => {
    return (
        <div className="flex flex-col lg:flex-row max-w-[1200px] px-[6px] md:px-[14px] mx-auto py-6 lg:py-14">
            <div className="pl-3 pr-6 lg:px-10 pb-6 lg:pb-10 flex flex-col border ">
                <div className="flex-grow">
                    <h2 className="text-[28px] leading-[3rem] lg:text-[32px] lg:leading-[3.25rem] font-bold text-[#8980F5] max-w-[640px] py-4 lg:pt-7 lg:pb-0 tracking-[0.015em]">Empowering Students to Code, Compete, and Conquer</h2>
                    <p className="text-[1.125rem] leading-[2.25rem] lg:text-[1.2rem] lg:leading-[2.5rem] max-w-[671px] text-[#544D49] lg:pt-[15px]">
                        We've recognized an undeniable gap between the world of
                        learning and the demands of the workforce. We firmly believe that the key
                        to bridging this gap lies in providing students with opportunities to work
                        on real-time projects and test their skills. It's this belief that has driven us
                        to create a platform dedicated to empowering every student to apply their
                        skills in Coderships and leading them to best internships in tech with
                        proof-of-code
                    </p>
                </div>
            </div>
            <div className="pl-3 pr-6 lg:px-10 py-6 flex flex-col mt-4 lg:mt-0 ml-0 lg:ml-9 border">
                <div className="flex-grow">
                    <p className="text-[1.3rem] leading-[2.75rem] lg:text-[1.35rem] lg:leading-[2.75rem] text-[#544D49] lg:max-w-[285px]">
                        Our{' '}
                        <span className="text-[#FF822D]">
                            goal{' '}
                        </span>
                        is to empower
                        students to build{' '}
                        <span className="text-[#FF822D]">
                            projects
                            packed with meaningful
                            code contributions{' '}
                        </span>
                        that
                        put their skills in the
                        spotlight & help them
                        secure dream internships
                        in tech
                    </p>
                </div>
            </div>
        </div>
    );
};

export default GoalCards;
