import Banner from "@/components/Banner"
import FirstCard from "@/components/Features/FeatureCards/FirstCard"
import SecondCard from "@/components/Features/FeatureCards/SecondCard"
import ThirdCard from "@/components/Features/FeatureCards/ThirdCard"
import Header from "@/components/Features/Header"
import MainFooter from "@/components/Footer"
import Navbar from "@/components/Navbar"

const FeaturesPage = () => {
    return (
        <>
            <Navbar />
            <Header />
            <div className="bg-white">
                <FirstCard />
                <SecondCard />
                <ThirdCard />
            </div>
            <Banner />
            <MainFooter />
        </>
    )
}

export default FeaturesPage
