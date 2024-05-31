import Image from 'next/image';
// import rs from "./Rs. 6000.svg";

const Prize = () => {
    return (
        <div className="py-8 md:py-16 max-w-[1250px] mx-auto px-4 md:px-8">
            <h3 className="font-semibold text-xl md:text-2xl lg:text-3xl text-[#2D2323E5] text-center">
                Ready to start your journey towards <br className="hidden md:block" />
                landing top 1% internships in tech?
            </h3>
            <div className="border border-[#d7d7d7] flex flex-col md:flex-row mt-8 md:mt-16">
                <div className="md:w-2/3 text-[#544D49] space-y-4 md:space-y-6 py-8 md:py-12 px-6 md:px-10">
                    <p className="flex gap-4 items-center text-lg md:text-xl">
                        <Image src="https://ik.imagekit.io/internquest/Vector-min.svg?updatedAt=1709646030004" width={6} height={2} alt="" className="w-3 h-3" />
                        5+ career tools premium subscriptions
                    </p>
                    <p className="flex gap-4 items-center text-lg md:text-xl">
                        <Image src="https://ik.imagekit.io/internquest/Vector-min.svg?updatedAt=1709646030004" width={6} height={2} alt="" className="w-3 h-3" />
                        Get access to dev tools & resources
                    </p>
                    <p className="flex gap-4 items-center text-lg md:text-xl">
                        <Image src="https://ik.imagekit.io/internquest/Vector-min.svg?updatedAt=1709646030004" width={6} height={2} alt="" className="w-3 h-3" />
                        Code review sessions by senior developers
                    </p>
                    <p className="flex gap-4 items-center text-lg md:text-xl">
                        <Image src="https://ik.imagekit.io/internquest/Vector-min.svg?updatedAt=1709646030004" width={6} height={2} alt="" className="w-3 h-3" />
                        Get invites to join the teams of emerging startups
                    </p>
                    <p className="flex gap-4 items-center text-lg md:text-xl">
                        <Image src="https://ik.imagekit.io/internquest/Vector-min.svg?updatedAt=1709646030004" width={6} height={2} alt="" className="w-3 h-3" />
                        Win AI credits to use new AI tools & platforms
                    </p>
                    <p className="flex gap-4 items-center text-lg md:text-xl">
                        <Image src="https://ik.imagekit.io/internquest/Vector-min.svg?updatedAt=1709646030004" width={6} height={2} alt="" className="w-3 h-3" />
                        Win referrals to your dream companies
                    </p>
                </div>

                <div className="border-t md:border-t-0 md:border-l border-[#d7d7d7] flex items-center justify-center w-full md:w-1/3 py-8 md:py-0">
                    <h2 className="text-5xl md:text-[52px] font-semibold text-[#8980F5]">Rs. 6,000</h2>
                </div>
            </div>
        </div>
    );
};

export default Prize;
