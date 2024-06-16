import Link from "next/link";
import Banner from "./Banner";
const MainFooter = () => {
  return (
    <div>
      <Banner />
      <div className="flex h-[80px] w-full">
        <div className="w-[20%] border border-l-0 border-[#D7D7D7]" />
        <div className="w-[10%] border border-l-0 border-[#D7D7D7]" />
        <div className="w-[20%] border border-l-0 border-[#D7D7D7]" />
        <div className="w-[20%] border border-l-0 border-[#D7D7D7]" />
        <div className="w-[10%] border border-l-0 border-[#D7D7D7]" />
        <div className="w-[20%] border border-l-0 border-[#D7D7D7]" />
      </div>
      <div className="flex w-full">
        <div className="grid w-[10%] grid-cols-1 md:grid-cols-2">
          <div className="flex items-center justify-center border border-l-0 border-t-0 border-[#D7D7D7] md:col-span-2"></div>
          <div className="flex items-center justify-center border border-l-0 border-t-0 border-[#D7D7D7]"></div>
          <div className="flex items-center justify-center border border-l-0 border-t-0 border-[#D7D7D7] md:row-span-2"></div>
          <div className="flex items-center justify-center border border-l-0 border-t-0 border-[#D7D7D7]"></div>
          <div className="flex items-center justify-center border border-l-0 border-t-0 border-[#D7D7D7] md:col-span-2 md:row-span-2"></div>
        </div>
        <div className="ml-auto w-[90%] bg-black">
          <div className="relative">
            <div className="container mx-auto flex flex-col flex-wrap px-5 py-24 md:flex-row md:flex-nowrap md:items-center md:px-12 lg:items-start lg:px-32">
              <div className="mx-auto w-full flex-shrink-0 text-center md:mx-0 md:w-1/2 md:text-left">
                <a
                  href="/"
                  className="flex justify-center font-medium text-white md:justify-start"
                >
                  <span className="text-5xl">{"{coderships}"}</span>
                </a>
                <p className="mx-auto mt-5 max-w-[350px] text-xl leading-[2rem] text-[#FFFFFFB2] md:mx-0">
                  Build It, Prove It, Land Your Dream Internship
                </p>
              </div>
              <div className="-mb-10 mt-10 flex w-full flex-grow flex-wrap text-center md:mt-0 md:w-1/2 md:text-left">
                <div className="w-full px-4 md:w-1/2">
                  <nav className="mb-10 list-none">
                    <li className="py-2 text-[#858585] hover:text-white">
                      <Link href={"/about"}>About us</Link>
                    </li>
                    <li className="py-2 text-[#858585] hover:text-white">
                      <Link href={"/forstudents"}>For Students</Link>
                    </li>
                  </nav>
                </div>
                <div className="w-full px-4 pb-6 md:w-1/2 md:pb-0">
                  <nav className="mb-10 list-none">
                    <li className="py-2 text-[#858585] hover:text-white">
                      <Link href={"/fddic"}>FDDIC'24</Link>
                    </li>
                    <li className="py-2 text-[#858585] hover:text-white">
                      <Link href={"/membership"}>Membership</Link>
                    </li>
                  </nav>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 right-0 px-4 font-extrabold text-[#FFFFFF33] md:-mb-11 md:px-0">
              <p className="cursor-pointer text-center text-[3.5rem] text-[#FFFFFF33] hover:text-slate-100/50 sm:text-[4rem] md:text-[8rem]">
                coderships
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between bg-white px-11 py-4 sm:py-0">
        <div className="container mx-auto flex flex-col items-center justify-center px-5 py-4 sm:flex-row sm:justify-between">
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M27.1221 19.7917C27.1221 22.3251 25.0613 24.3826 22.5312 24.3826H7.46928C4.93914 24.3826 2.87834 22.325 2.87834 19.7917V10.208C2.87778 9.3915 3.09651 8.58985 3.51168 7.8868L10.861 15.2361C11.9605 16.3388 13.4329 16.9464 15.0018 16.9464C16.5675 16.9464 18.0399 16.3388 19.1394 15.2361L26.4887 7.8868C26.9039 8.58984 27.1226 9.3915 27.122 10.208V19.7917H27.1221ZM22.5312 5.61711H7.46928C6.42443 5.61711 5.45992 5.97072 4.68836 6.55906L12.1116 13.9855C12.88 14.7506 13.9055 15.175 15.0018 15.175C16.0949 15.175 17.1204 14.7506 17.8888 13.9855L25.312 6.55906C24.5405 5.97072 23.5761 5.61711 22.5312 5.61711ZM22.5312 3.8457H7.46928C3.9618 3.8457 1.10693 6.70057 1.10693 10.208V19.7918C1.10693 23.3025 3.9618 26.1541 7.46928 26.1541H22.5312C26.0386 26.1541 28.8935 23.3025 28.8935 19.7918V10.208C28.8935 6.70051 26.0386 3.8457 22.5312 3.8457Z"
              fill="#544D49"
            />
          </svg>

          <div className="z-50 py-4 sm:flex">
            <Link href={"/terms"} className="text-[#544D49E5] sm:pr-6">
              Terms
            </Link>
            <p className="pt-5 text-[#544D49E5] sm:pr-3 sm:pt-0">Privacy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainFooter;
