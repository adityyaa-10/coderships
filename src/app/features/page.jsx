import dynamic from "next/dynamic"; // Import dynamic from Next.js

import Header from "@/components/Features/Header";
import MainFooter from "@/components/Footer";
import Navbar from "@/components/Navbar";

// Dynamically import the card components
const FirstCard = dynamic(
  () => import("@/components/Features/FeatureCards/FirstCard"),
);
const SecondCard = dynamic(
  () => import("@/components/Features/FeatureCards/SecondCard"),
);
const ThirdCard = dynamic(
  () => import("@/components/Features/FeatureCards/ThirdCard"),
);

const FeaturesPage = () => {
  return (
    <>
      <title>Coderships - Features</title>
      <Navbar />
      <Header />
      <FirstCard />
      <SecondCard />
      <ThirdCard />
      <MainFooter />
    </>
  );
};

export default FeaturesPage;
