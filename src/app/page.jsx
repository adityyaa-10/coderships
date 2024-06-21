"use client";
import MainFooter from "@/components/Footer";
import BoxInfo from "@/components/Landing/BoxInfo";
import Header from "@/components/Landing/Header";
import MarqueeSlider from "@/components/Landing/MarqueeSlider";
import MatrixEffect from "@/components/Landing/MatrixEffect";
import Para from "@/components/Landing/Para";
import SecondPara from "@/components/Landing/SecondPara";
import Testimonials from "@/components/Landing/Testimonials/Testimonials";
import Navbar from "@/components/Navbar";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Header />
      <MarqueeSlider />
      <Para />
      <BoxInfo />
      <SecondPara />
      <MatrixEffect />
      <Testimonials />
      <MainFooter />
    </div>
  );
};

export default Home;
