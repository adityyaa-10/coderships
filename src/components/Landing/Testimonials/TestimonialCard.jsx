const TestimonialCard = ({ content }) => {
  return (
    <div className="h-full">
      <blockquote className="flex items-center border border-[#D7D7D7] px-4 py-6 text-left text-base font-normal leading-[2rem] tracking-[0] text-[#544D49] sm:text-lg sm:leading-[2.5rem] md:text-xl md:leading-[2.75rem] lg:text-[22px] lg:leading-[3rem]">
        {content}
      </blockquote>
    </div>
  );
};

export default TestimonialCard;
