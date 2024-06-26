import EventDetails from "@/components/FDDIC/EventDetails";
import Header from "@/components/FDDIC/Header";
import HowItWorks from "@/components/FDDIC/HowItWorks";
import HowToApply from "@/components/FDDIC/HowToApply";
import JoinUs from "@/components/FDDIC/JoinUs";
import Prize from "@/components/FDDIC/Prize";
import Stats from "@/components/FDDIC/Stats";
import TechMarquee from "@/components/FDDIC/TechMarquee";
import MainFooter from "@/components/Footer";
import Navbar from "@/components/Navbar";

const FDDICPage = () => {
  return (
    <>
      <title>FDDIC'24</title>
      <Navbar />
      <Header />
      <Stats />
      <EventDetails />
      <TechMarquee />
      <HowItWorks />
      <Prize />
      <HowToApply />
      <JoinUs />
      <MainFooter />
    </>
  );
};

export default FDDICPage;
