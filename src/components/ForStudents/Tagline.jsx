import Image from 'next/image'

const Tagline = () => {
    return (
        <div className="text-center w-full justify-center items-center flex flex-col py-12">
            <div className=" gap-2 py-4 text-[2.25rem] text-[#FF822D]">
                <p>Focus on what matters the most
                    <span>
                        <Image src={'/sandtimer.svg'} width={70} height={111} alt="Sand Timer" />
                    </span>
                </p>
            </div>

            <p className="text-[#544D49] leading-[2.25rem] font-medium text-[1rem] pt-6">
                Keep learning and grow your skills by completing Codeships, building <br />
                your projects portfolios, and start getting noticed by emerging startups
            </p>
        </div>
    )
}

export default Tagline
