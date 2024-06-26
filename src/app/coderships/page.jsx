import AboutCoderships from "@/components/Coderships/AboutCoderships";
import Header from "@/components/Coderships/Header";
import TechMatrix from "@/components/Coderships/TechMatrix";
import WhyCoderships from "@/components/Coderships/WhyCoderships";
import MainFooter from "@/components/Footer";
import Navbar from "@/components/Navbar";

const CodershipsPage = () => {
  return (
    <>
      <Navbar />
      <Header />
      <AboutCoderships />
      <TechMatrix />
      <WhyCoderships />
      <MainFooter />
    </>
  );
};

export default CodershipsPage;
