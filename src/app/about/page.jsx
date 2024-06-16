import GoalCards from "@/components/About/GoalCards";
import Header from "@/components/About/Header";
import TagLine from "@/components/About/TagLine";
import Vision from "@/components/About/Vision";
import MainFooter from "@/components/Footer";
import Navbar from "@/components/Navbar";

const AboutPage = () => {
  return (
    <>
      <title>Coderships - About</title>
      <Navbar />
      <Header />
      <GoalCards />
      <TagLine />
      <Vision />
      <MainFooter />
    </>
  );
};

export default AboutPage;
