import FirstCard from "@/components/Features/FeatureCards/FirstCard"
import SecondCard from "@/components/Features/FeatureCards/SecondCard"
import ThirdCard from "@/components/Features/FeatureCards/ThirdCard"
import Header from "@/components/Features/Header"

const FeaturesPage = () => {
    return (
        <>
            <Header />
            <div className="bg-white">
                <FirstCard />
                <SecondCard />
                <ThirdCard />
            </div>
        </>
    )
}

export default FeaturesPage
