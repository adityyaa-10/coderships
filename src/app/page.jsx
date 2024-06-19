"use client";
import { useEffect, useState } from "react";
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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    if (document.readyState === "complete") {
      setLoading(false);
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <div className="overflow-hidden">
      <Navbar />
      {loading ? (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      ) : (
        <>
          <Header />
          <div className="bg-white">
            <MarqueeSlider />
            <Para />
            <BoxInfo />
            <SecondPara />
            <MatrixEffect />
            <Testimonials />
          </div>
          <MainFooter />
        </>
      )}
    </div>
  );
};

export default Home;
