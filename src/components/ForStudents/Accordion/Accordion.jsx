import './Accordion.css'
const Accordion = () => {
    return (
        <div className={` text-[#1B1B1B] text-[22px] `} >
            <div className="bg-[#F4F5F7] mx-6 py-6">
                <div className={` container max-w-3xl  margin-[2em] mx-auto text-black pt-4   `}>
                    <div className="bg-white py-4 mb-8 px-4 m-1.5 rounded-xl min-h-[80px] ">
                        <details  >
                            <summary className='flex justify-between rounded-xl'>
                                {"{  Let your projects speak about your skills }"}

                                <span>➕</span>
                            </summary>
                            <div className='px-2 py-4  ' style={{ fontWeight: "500", color: "#1b1b1b", fontSize: "1rem" }}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto tempora id porro ea. Consequuntur amet ut itaque beatae eos natus cupiditate numquam, quas rerum nostrum, libero blanditiis similique animi repellat ipsum earum.
                            </div>
                        </details>
                    </div>
                    <div className="bg-white py-4 mb-8 px-4 m-1.5 rounded-xl min-h-[80px]">
                        <details >
                            <summary className={` flex justify-between rounded-xl  text-[#1b1b1b] `}>
                                {"{  Coderships to inspire you }"}

                                <span>➕</span>
                            </summary>
                            <div className='px-2 py-4  ' style={{ fontWeight: "500", color: "#1b1b1b", fontSize: "1rem" }}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto tempora id porro ea. Consequuntur amet ut itaque beatae eos natus cupiditate numquam, quas rerum nostrum, libero blanditiis similique animi repellat ipsum earum.
                            </div>
                        </details>
                    </div>
                    <div className="bg-white py-4 mb-8 px-4 m-1.5 rounded-xl min-h-[80px]">
                        <details >
                            <summary className='flex justify-between rounded-xl'>
                                {"{  Spend more time building & less time applying }"}

                                <span>➕</span>
                            </summary>
                            <div className='px-2 py-4  ' style={{ fontWeight: "500", color: "#1b1b1b", fontSize: "1rem" }}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto tempora id porro ea. Consequuntur amet ut itaque beatae eos natus cupiditate numquam, quas rerum nostrum, libero blanditiis similique animi repellat ipsum earum.
                            </div>
                        </details>
                    </div>
                    <div className="bg-white py-4 mb-8 px-4 m-1.5 rounded-xl min-h-[80px]">
                        <details >
                            <summary className='flex justify-between rounded-xl'>
                                {"{  It’s all about real-time projects work experience }"}

                                <span>➕</span>
                            </summary>
                            <div className='px-2 py-4  ' style={{ fontWeight: "500", color: "#1b1b1b", fontSize: "1rem" }}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto tempora id porro ea. Consequuntur amet ut itaque beatae eos natus cupiditate numquam, quas rerum nostrum, libero blanditiis similique animi repellat ipsum earum.
                            </div>
                        </details>
                    </div>
                    <div className="bg-white py-4 mb-8 px-4 m-1.5 rounded-xl min-h-[80px]">
                        <details >
                            <summary className='flex justify-between rounded-xl'>
                                {"{  You are not alone, join our community }"}

                                <span>➕</span>
                            </summary>
                            <div className='px-2 py-4  ' style={{ fontWeight: "500", color: "#1b1b1b", fontSize: "1rem" }}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto tempora id porro ea. Consequuntur amet ut itaque beatae eos natus cupiditate numquam, quas rerum nostrum, libero blanditiis similique animi repellat ipsum earum.
                            </div>
                        </details>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Accordion
