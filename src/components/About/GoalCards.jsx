

const GoalCards = () => {
    return (
        <div className="flex flex-col lg:flex-row max-w-[1200px] px-5 mx-auto py-6 lg:py-14">
            <div className="px-6 lg:px-10 pb-6 lg:pb-10 flex flex-col border ">
                <div className="flex-grow">
                    <h2 className="text-[32px] font-bold text-[#8980F5] max-w-[629px] py-4 lg:py-7">Empowering Students to Code, Compete, and Conquer</h2>
                    <p className="text-[1rem] leading-[2rem] lg:text-[1.2rem] lg:leading-[2.5rem] max-w-[671px] text-[#544D49]">At BrightIntern, we've recognized an undeniable gap between the world of
                        learning and the demands of the workforce. We firmly believe that the key
                        to bridging this gap lies in providing students with opportunities to work
                        on real-time projects and test their skills. It's this belief that has driven us
                        to create a platform dedicated to empowering every student to apply their
                        skills in Codeships and leading them to best internships in tech with
                        proof-of-code</p>
                </div>
            </div>
            <div className="px-6 py-6 flex flex-col mt-4 lg:mt-0 ml-0 lg:ml-9 border">
                <div className="flex-grow">
                    <p className="text-[1.2rem] leading-[2.25rem] lg:text-[1.35rem] lg:leading-[2.75rem] text-[#544D49] max-w-[285px]">Our <span className="text-[#FF822D]">goal</span> is to empower
                        students to build <span className="text-[#FF822D]"> projects
                            packed with meaningful
                            code contributions </span> that
                        put their skills in the
                        spotlight & help them
                        secure dream internships
                        in tech</p>
                </div>
            </div>
        </div>
    );
};

export default GoalCards;
