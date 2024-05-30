const HowItWorks = () => {
    return (
        <div className="space-y-8 py-16 max-w-[1200px] mx-auto px-5">
            <h3 className="text-[2rem] text-[#8980F5] text-center font-semibold">
                How it works
            </h3>
            <div className="flex flex-col lg:flex-row items-stretch gap-6 w-full justify-center">
                <div className="text-start border border-[#d7d7d7] w-full lg:w-1/3 px-5 py-6 flex flex-col">
                    <h2 className="font-semibold text-[1.625rem] text-[#1B1B1BCC]">Register</h2>
                    <p className="text-[1.125rem] text-[#544D49E5] leading-[2rem] pt-6 flex-grow">
                        Sign up for the FDDIC 24 to secure your spot
                    </p>
                </div>
                <div className="text-start border border-[#d7d7d7] w-full lg:w-1/3 px-5 py-6 flex flex-col">
                    <h2 className="font-semibold text-[1.625rem] text-[#1B1B1BCC]">Receive</h2>
                    <p className="text-[1.125rem] text-[#544D49E5] leading-[2rem] pt-6 flex-grow">
                        On the day of event, you&apos;ll receive a series of Coderboats to complete within specified timeframes
                    </p>
                </div>
                <div className="text-start border border-[#d7d7d7] w-full lg:w-1/3 px-5 py-6 flex flex-col">
                    <h2 className="font-semibold text-[1.625rem] text-[#1B1B1BCC]">Submit</h2>
                    <p className="text-[1.125rem] text-[#544D49E5] leading-[2rem] pt-6 flex-grow">
                        Students who successfully complete
                        the assigned Coderboats shall
                        be given the internship offer from
                        partnered startups
                    </p>
                </div>
            </div>
        </div>
    );
}

export default HowItWorks;
