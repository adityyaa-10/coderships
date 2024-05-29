import React from 'react';

const BoxInfo = () => {
    return (
        <div className="max-w-screen-lg mx-auto p-4">
            {/* Top Block */}
            <div className="border border-[#D9D9D9] relative">
                <div className="absolute top-12 left-0 right-0 h-[1px] bg-[#D9D9D9]" />
                <div className="absolute top-0 bottom-0 right-12 w-[1px] bg-[#D9D9D9] hidden lg:block" />
                <div className="pt-16 pb-8 px-4 lg:p-32">
                    <p className='text-[1rem] leading-[2rem] lg:text-[1.35rem] lg:leading-[2.5rem] text-[#2D2323]'> Let's face it – it's tough to convey the depth of your coding skills on a resume. Traditional
                        resumes often provide only a surface-level view of your coding skills. Sure, you can list your
                        tech stack and mention a couple of capstone projects, but does that really capture the
                        essence of what you bring to the table? We don't think so.
                        <br />
                        <br />
                        It's challenging for potential employers to understand the full extent of your abilities based on
                        a list of technologies or projects alone.</p>
                </div>
                <div className="absolute hidden lg:block bottom-0 left-0 w-[130px] h-[50px] border border-[#D9D9D9] border-l-0 border-b-0" />
            </div>

            {/* Bottom Blocks */}
            <div className="flex flex-col lg:flex-row">
                {/* Left Block */}
                <div className="border border-[#D9D9D9] border-t-0 relative px-4 py-6 lg:py-32 flex-1">
                    <div className="absolute hidden lg:block top-0 right-0 w-[130px] h-[50px] border border-[#D9D9D9] border-r-0 border-t-0" />
                    <div className="absolute hidden lg:block bottom-0 left-0 w-[130px] h-[50px] border border-[#D9D9D9] border-l-0 border-b-0" />
                    <div className='lg:p-8'>
                        <p className='text-[1rem] leading-[2rem] lg:text-[1.35rem] lg:leading-[2.5rem] text-[#2D2323]'>Your code tells a story – your story. It's not just
                            about what languages you know or what
                            projects you've worked on. It's about the
                            problem-solving skills, the creativity, and the
                            passion that you bring to the table.
                            <br />
                            <br />
                            It's about the problems you've solved, the
                            challenges you've overcome, and the
                            solutions you've crafted. But how do you
                            convey that on a resume?
                        </p>
                    </div>
                </div>

                {/* Right Block */}
                <div className="border border-[#D9D9D9] border-t-0 lg:border-l-0 relative px-4 py-6 lg:py-32 flex-1">
                    <div className="absolute hidden lg:block top-0 left-0 w-[130px] h-[50px] border border-[#D9D9D9] border-l-0 border-t-0" />
                    <div className="absolute hidden lg:block bottom-0 right-0 w-[130px] h-[50px] border border-[#D9D9D9] border-r-0 border-b-0" />
                    <div className='lg:p-8'>
                        <p className='text-[1rem] leading-[2rem] lg:text-[1.35rem] lg:leading-[2.5rem] text-[#2D2323]'>
                            In a competitive job market, standing out is key.
                            But how do you differentiate yourself when
                            everyone else is listing the same tech stack and
                            projects?
                            <br />
                            <br />
                            Without a way to showcase your coding
                            skills in a unique and impactful manner, it's
                            challenging for students to stand out
                            differentiate themselves effectively.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BoxInfo;
