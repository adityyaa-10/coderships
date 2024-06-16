import { semiBoldFont } from "@/utils/fonts";
import TestimonialSlider from "./TestimonialSlider";

const Testimonials = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="2000"
      className="space-y-4 pb-6 text-center text-black md:pb-24"
    >
      <h3
        className={`${semiBoldFont.className} relative m-4 inline-block text-[1.75rem] leading-[3rem] tracking-[-0.015em] lg:text-[2.5rem]`}
      >
        Here’s what students have to say
      </h3>
      <div className="mx-auto max-w-[1200px]">
        <TestimonialSlider />
      </div>
    </div>
  );
};

export default Testimonials;
