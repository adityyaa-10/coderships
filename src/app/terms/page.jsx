import MainFooter from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Heading from "@/components/Terms/Heading";
import LastModified from "@/components/Terms/LastModified";
import OurService from "@/components/Terms/OurService";

const TermsAndCondition = () => {
  return (
    <div className="bg-white">
      <title>Coderships - Terms and Conditions</title>
      <Navbar />
      <Heading />
      <div className="mx-auto max-w-[1000px] px-4 md:px-9">
        <LastModified />
        <OurService />
      </div>
      <MainFooter />
    </div>
  );
};

export default TermsAndCondition;
