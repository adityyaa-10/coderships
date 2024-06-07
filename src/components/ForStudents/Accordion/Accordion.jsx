import './Accordion.css'
const Accordion = () => {
    return (
        <div className={` text-[#1B1B1B]`} >
            <div className="bg-[#F4F5F7] lg:mx-6 py-6">
                <div className={` container max-w-3xl  margin-[2em] mx-auto text-black pt-4 px-[8px]`}>
                    <div className="bg-white py-4 mb-8 px-4 rounded-xl min-h-[80px] ">
                        <details  >
                            <summary className='pl-[11px] lg:pl-4 flex justify-between rounded-xl text-[24px] pr-2 '>
                                {"{  Let your projects speak about your skills }"}
                                <span className="mr-2 hidden lg:flex">
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.0001 36.2501C19.7285 36.25 19.4643 36.1615 19.2475 35.9979C19.0306 35.8343 18.873 35.6046 18.7984 35.3434L17.5001 30.7984C16.942 28.821 15.886 27.0198 14.4332 25.567C12.9803 24.1141 11.1791 23.0582 9.20174 22.5001L4.65674 21.2017C4.39575 21.127 4.16619 20.9693 4.00278 20.7525C3.83937 20.5357 3.75098 20.2716 3.75098 20.0001C3.75098 19.7286 3.83937 19.4645 4.00278 19.2477C4.16619 19.0309 4.39575 18.8732 4.65674 18.7984L9.20174 17.5001C11.1791 16.942 12.9803 15.886 14.4332 14.4332C15.886 12.9803 16.942 11.1791 17.5001 9.20174L18.7984 4.65674C18.8732 4.39575 19.0309 4.16619 19.2477 4.00278C19.4645 3.83937 19.7286 3.75098 20.0001 3.75098C20.2716 3.75098 20.5357 3.83937 20.7525 4.00278C20.9693 4.16619 21.127 4.39575 21.2017 4.65674L22.5001 9.20174C23.0582 11.1791 24.1141 12.9803 25.567 14.4332C27.0198 15.886 28.821 16.942 30.7984 17.5001L35.3434 18.7984C35.6044 18.8732 35.834 19.0309 35.9974 19.2477C36.1608 19.4645 36.2492 19.7286 36.2492 20.0001C36.2492 20.2716 36.1608 20.5357 35.9974 20.7525C35.834 20.9693 35.6044 21.127 35.3434 21.2017L30.7984 22.5001C28.821 23.0582 27.0198 24.1141 25.567 25.567C24.1141 27.0198 23.0582 28.821 22.5001 30.7984L21.2017 35.3434C21.1271 35.6046 20.9695 35.8343 20.7527 35.9979C20.5359 36.1615 20.2717 36.25 20.0001 36.2501ZM9.55008 20.0001L9.88341 20.0967C12.2698 20.7704 14.4435 22.0449 16.1969 23.7983C17.9503 25.5516 19.2247 27.7254 19.8984 30.1117L19.9951 30.4451L20.0917 30.1117C20.7654 27.7254 22.0399 25.5516 23.7933 23.7983C25.5466 22.0449 27.7204 20.7704 30.1067 20.0967L30.4401 20.0001L30.1067 19.9034C27.7204 19.2297 25.5466 17.9553 23.7933 16.2019C22.0399 14.4485 20.7654 12.2748 20.0917 9.88841L20.0001 9.55174L19.9034 9.88508C19.2297 12.2715 17.9553 14.4452 16.2019 16.1986C14.4485 17.9519 12.2748 19.2264 9.88841 19.9001L9.55008 20.0001Z" fill="black" />
                                    </svg>
                                </span>
                            </summary>
                            <div className='px-2 py-4 text-[1.125rem] leading-[2rem] text-[#1b1b1bce] mr-4'>
                                It's impossible to convey the depth of your skills, creative problem-solving abilities, and unique perspective through a piece of paper or so called "resume". The most impactful way to stand out isn't just telling people what you can do. It's showing them what you've built.
                            </div>
                        </details>
                    </div>
                    <div className="bg-white py-4 mb-8 px-4 rounded-xl min-h-[80px] ">
                        <details >
                            <summary className={`pl-[11px] lg:pl-4 flex justify-between rounded-xl text-[24px] pr-2 `}>
                                {"{  Coderships to inspire you }"}

                                <span className="mr-2 hidden lg:flex"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.0001 36.2501C19.7285 36.25 19.4643 36.1615 19.2475 35.9979C19.0306 35.8343 18.873 35.6046 18.7984 35.3434L17.5001 30.7984C16.942 28.821 15.886 27.0198 14.4332 25.567C12.9803 24.1141 11.1791 23.0582 9.20174 22.5001L4.65674 21.2017C4.39575 21.127 4.16619 20.9693 4.00278 20.7525C3.83937 20.5357 3.75098 20.2716 3.75098 20.0001C3.75098 19.7286 3.83937 19.4645 4.00278 19.2477C4.16619 19.0309 4.39575 18.8732 4.65674 18.7984L9.20174 17.5001C11.1791 16.942 12.9803 15.886 14.4332 14.4332C15.886 12.9803 16.942 11.1791 17.5001 9.20174L18.7984 4.65674C18.8732 4.39575 19.0309 4.16619 19.2477 4.00278C19.4645 3.83937 19.7286 3.75098 20.0001 3.75098C20.2716 3.75098 20.5357 3.83937 20.7525 4.00278C20.9693 4.16619 21.127 4.39575 21.2017 4.65674L22.5001 9.20174C23.0582 11.1791 24.1141 12.9803 25.567 14.4332C27.0198 15.886 28.821 16.942 30.7984 17.5001L35.3434 18.7984C35.6044 18.8732 35.834 19.0309 35.9974 19.2477C36.1608 19.4645 36.2492 19.7286 36.2492 20.0001C36.2492 20.2716 36.1608 20.5357 35.9974 20.7525C35.834 20.9693 35.6044 21.127 35.3434 21.2017L30.7984 22.5001C28.821 23.0582 27.0198 24.1141 25.567 25.567C24.1141 27.0198 23.0582 28.821 22.5001 30.7984L21.2017 35.3434C21.1271 35.6046 20.9695 35.8343 20.7527 35.9979C20.5359 36.1615 20.2717 36.25 20.0001 36.2501ZM9.55008 20.0001L9.88341 20.0967C12.2698 20.7704 14.4435 22.0449 16.1969 23.7983C17.9503 25.5516 19.2247 27.7254 19.8984 30.1117L19.9951 30.4451L20.0917 30.1117C20.7654 27.7254 22.0399 25.5516 23.7933 23.7983C25.5466 22.0449 27.7204 20.7704 30.1067 20.0967L30.4401 20.0001L30.1067 19.9034C27.7204 19.2297 25.5466 17.9553 23.7933 16.2019C22.0399 14.4485 20.7654 12.2748 20.0917 9.88841L20.0001 9.55174L19.9034 9.88508C19.2297 12.2715 17.9553 14.4452 16.2019 16.1986C14.4485 17.9519 12.2748 19.2264 9.88841 19.9001L9.55008 20.0001Z" fill="black" />
                                </svg>
                                </span>
                            </summary>
                            <div className='px-2 py-4 text-[1.125rem] leading-[2rem] text-[#1b1b1bce] mr-4'>
                                Being a part of Coderships, you’ll have access to a series of virtual internship challenges and real-world project inspirations designed to challenge and inspire you to gain the work experience you need to succeed.
                            </div>
                        </details>
                    </div>
                    <div className="bg-white py-4 mb-8 px-4 rounded-xl min-h-[80px] ">
                        <details >
                            <summary className='pl-[11px] lg:pl-4 flex justify-between rounded-xl text-[24px] pr-2 '>
                                {"{  Spend more time building & less time applying }"}

                                <span className="mr-2 hidden lg:flex"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.0001 36.2501C19.7285 36.25 19.4643 36.1615 19.2475 35.9979C19.0306 35.8343 18.873 35.6046 18.7984 35.3434L17.5001 30.7984C16.942 28.821 15.886 27.0198 14.4332 25.567C12.9803 24.1141 11.1791 23.0582 9.20174 22.5001L4.65674 21.2017C4.39575 21.127 4.16619 20.9693 4.00278 20.7525C3.83937 20.5357 3.75098 20.2716 3.75098 20.0001C3.75098 19.7286 3.83937 19.4645 4.00278 19.2477C4.16619 19.0309 4.39575 18.8732 4.65674 18.7984L9.20174 17.5001C11.1791 16.942 12.9803 15.886 14.4332 14.4332C15.886 12.9803 16.942 11.1791 17.5001 9.20174L18.7984 4.65674C18.8732 4.39575 19.0309 4.16619 19.2477 4.00278C19.4645 3.83937 19.7286 3.75098 20.0001 3.75098C20.2716 3.75098 20.5357 3.83937 20.7525 4.00278C20.9693 4.16619 21.127 4.39575 21.2017 4.65674L22.5001 9.20174C23.0582 11.1791 24.1141 12.9803 25.567 14.4332C27.0198 15.886 28.821 16.942 30.7984 17.5001L35.3434 18.7984C35.6044 18.8732 35.834 19.0309 35.9974 19.2477C36.1608 19.4645 36.2492 19.7286 36.2492 20.0001C36.2492 20.2716 36.1608 20.5357 35.9974 20.7525C35.834 20.9693 35.6044 21.127 35.3434 21.2017L30.7984 22.5001C28.821 23.0582 27.0198 24.1141 25.567 25.567C24.1141 27.0198 23.0582 28.821 22.5001 30.7984L21.2017 35.3434C21.1271 35.6046 20.9695 35.8343 20.7527 35.9979C20.5359 36.1615 20.2717 36.25 20.0001 36.2501ZM9.55008 20.0001L9.88341 20.0967C12.2698 20.7704 14.4435 22.0449 16.1969 23.7983C17.9503 25.5516 19.2247 27.7254 19.8984 30.1117L19.9951 30.4451L20.0917 30.1117C20.7654 27.7254 22.0399 25.5516 23.7933 23.7983C25.5466 22.0449 27.7204 20.7704 30.1067 20.0967L30.4401 20.0001L30.1067 19.9034C27.7204 19.2297 25.5466 17.9553 23.7933 16.2019C22.0399 14.4485 20.7654 12.2748 20.0917 9.88841L20.0001 9.55174L19.9034 9.88508C19.2297 12.2715 17.9553 14.4452 16.2019 16.1986C14.4485 17.9519 12.2748 19.2264 9.88841 19.9001L9.55008 20.0001Z" fill="black" />
                                </svg>
                                </span>
                            </summary>
                            <div className='px-2 py-4 text-[1.125rem] leading-[2rem] text-[#1b1b1bce] mr-4'>
                                Checking out career sites of companies, filling out 100s of applications, networking on LinkedIn seeking referrals or internships, making changes to your resume through resume writing services, and resume feedback, applying on internship portals and networking meet-ups. There are plenty of ways to spend time looking for an internship. But where you’ll see the biggest impact is to focus on continuous learning and build interesting things to share with the right people.
                            </div>
                        </details>
                    </div>
                    <div className="bg-white py-4 mb-8 px-4 rounded-xl min-h-[80px]">
                        <details >
                            <summary className='pl-[11px] lg:pl-4 flex justify-between rounded-xl text-[24px] pr-2 '>
                                {"{  It’s all about real-time projects work experience }"}

                                <span className="mr-2 hidden lg:flex"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.0001 36.2501C19.7285 36.25 19.4643 36.1615 19.2475 35.9979C19.0306 35.8343 18.873 35.6046 18.7984 35.3434L17.5001 30.7984C16.942 28.821 15.886 27.0198 14.4332 25.567C12.9803 24.1141 11.1791 23.0582 9.20174 22.5001L4.65674 21.2017C4.39575 21.127 4.16619 20.9693 4.00278 20.7525C3.83937 20.5357 3.75098 20.2716 3.75098 20.0001C3.75098 19.7286 3.83937 19.4645 4.00278 19.2477C4.16619 19.0309 4.39575 18.8732 4.65674 18.7984L9.20174 17.5001C11.1791 16.942 12.9803 15.886 14.4332 14.4332C15.886 12.9803 16.942 11.1791 17.5001 9.20174L18.7984 4.65674C18.8732 4.39575 19.0309 4.16619 19.2477 4.00278C19.4645 3.83937 19.7286 3.75098 20.0001 3.75098C20.2716 3.75098 20.5357 3.83937 20.7525 4.00278C20.9693 4.16619 21.127 4.39575 21.2017 4.65674L22.5001 9.20174C23.0582 11.1791 24.1141 12.9803 25.567 14.4332C27.0198 15.886 28.821 16.942 30.7984 17.5001L35.3434 18.7984C35.6044 18.8732 35.834 19.0309 35.9974 19.2477C36.1608 19.4645 36.2492 19.7286 36.2492 20.0001C36.2492 20.2716 36.1608 20.5357 35.9974 20.7525C35.834 20.9693 35.6044 21.127 35.3434 21.2017L30.7984 22.5001C28.821 23.0582 27.0198 24.1141 25.567 25.567C24.1141 27.0198 23.0582 28.821 22.5001 30.7984L21.2017 35.3434C21.1271 35.6046 20.9695 35.8343 20.7527 35.9979C20.5359 36.1615 20.2717 36.25 20.0001 36.2501ZM9.55008 20.0001L9.88341 20.0967C12.2698 20.7704 14.4435 22.0449 16.1969 23.7983C17.9503 25.5516 19.2247 27.7254 19.8984 30.1117L19.9951 30.4451L20.0917 30.1117C20.7654 27.7254 22.0399 25.5516 23.7933 23.7983C25.5466 22.0449 27.7204 20.7704 30.1067 20.0967L30.4401 20.0001L30.1067 19.9034C27.7204 19.2297 25.5466 17.9553 23.7933 16.2019C22.0399 14.4485 20.7654 12.2748 20.0917 9.88841L20.0001 9.55174L19.9034 9.88508C19.2297 12.2715 17.9553 14.4452 16.2019 16.1986C14.4485 17.9519 12.2748 19.2264 9.88841 19.9001L9.55008 20.0001Z" fill="black" />
                                </svg>
                                </span>
                            </summary>
                            <div className='px-2 py-4 text-[1.125rem] leading-[2rem] text-[#1b1b1bce] mr-4'>
                                Companies are looking for candidates who can hit the ground running with practical, hands-on experience. Gaining real-time work experience is the most effective way to enhance your abilities, acquire valuable new skills, and impress potential employers.
                            </div>
                        </details>
                    </div>
                    <div className="bg-white py-4 mb-8 px-4 rounded-xl min-h-[80px]">
                        <details >
                            <summary className='pl-[11px] lg:pl-4 flex justify-between rounded-xl text-[24px] pr-2 '>
                                {"{  You are not alone, join our community }"}

                                <span className="mr-2 hidden lg:flex"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.0001 36.2501C19.7285 36.25 19.4643 36.1615 19.2475 35.9979C19.0306 35.8343 18.873 35.6046 18.7984 35.3434L17.5001 30.7984C16.942 28.821 15.886 27.0198 14.4332 25.567C12.9803 24.1141 11.1791 23.0582 9.20174 22.5001L4.65674 21.2017C4.39575 21.127 4.16619 20.9693 4.00278 20.7525C3.83937 20.5357 3.75098 20.2716 3.75098 20.0001C3.75098 19.7286 3.83937 19.4645 4.00278 19.2477C4.16619 19.0309 4.39575 18.8732 4.65674 18.7984L9.20174 17.5001C11.1791 16.942 12.9803 15.886 14.4332 14.4332C15.886 12.9803 16.942 11.1791 17.5001 9.20174L18.7984 4.65674C18.8732 4.39575 19.0309 4.16619 19.2477 4.00278C19.4645 3.83937 19.7286 3.75098 20.0001 3.75098C20.2716 3.75098 20.5357 3.83937 20.7525 4.00278C20.9693 4.16619 21.127 4.39575 21.2017 4.65674L22.5001 9.20174C23.0582 11.1791 24.1141 12.9803 25.567 14.4332C27.0198 15.886 28.821 16.942 30.7984 17.5001L35.3434 18.7984C35.6044 18.8732 35.834 19.0309 35.9974 19.2477C36.1608 19.4645 36.2492 19.7286 36.2492 20.0001C36.2492 20.2716 36.1608 20.5357 35.9974 20.7525C35.834 20.9693 35.6044 21.127 35.3434 21.2017L30.7984 22.5001C28.821 23.0582 27.0198 24.1141 25.567 25.567C24.1141 27.0198 23.0582 28.821 22.5001 30.7984L21.2017 35.3434C21.1271 35.6046 20.9695 35.8343 20.7527 35.9979C20.5359 36.1615 20.2717 36.25 20.0001 36.2501ZM9.55008 20.0001L9.88341 20.0967C12.2698 20.7704 14.4435 22.0449 16.1969 23.7983C17.9503 25.5516 19.2247 27.7254 19.8984 30.1117L19.9951 30.4451L20.0917 30.1117C20.7654 27.7254 22.0399 25.5516 23.7933 23.7983C25.5466 22.0449 27.7204 20.7704 30.1067 20.0967L30.4401 20.0001L30.1067 19.9034C27.7204 19.2297 25.5466 17.9553 23.7933 16.2019C22.0399 14.4485 20.7654 12.2748 20.0917 9.88841L20.0001 9.55174L19.9034 9.88508C19.2297 12.2715 17.9553 14.4452 16.2019 16.1986C14.4485 17.9519 12.2748 19.2264 9.88841 19.9001L9.55008 20.0001Z" fill="black" />
                                </svg>
                                </span>
                            </summary>
                            <div className='px-2 py-4 text-[1.125rem] leading-[2rem] text-[#1b1b1bce] mr-4'>
                                Coderships provide a supportive environment where you can thrive. Collaborate with peers, receive invaluable support, have your code reviewed, and get feedback on your work.
                            </div>
                        </details>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Accordion
