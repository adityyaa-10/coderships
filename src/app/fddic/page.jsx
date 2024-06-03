import EventDetails from "@/components/FDDIC/EventDetails"
import Header from "@/components/FDDIC/Header"
import HowItWorks from "@/components/FDDIC/HowItWorks"
import HowToApply from "@/components/FDDIC/HowToApply"
import JoinUs from "@/components/FDDIC/JoinUs"
import Prize from "@/components/FDDIC/Prize"
import Stats from "@/components/FDDIC/Stats"
import TechMarquee from "@/components/FDDIC/TechMarquee"

const FDDICPage = () => {
    return (
        <>
            <Header />
            <div className="bg-white">
                <Stats />
                <EventDetails />
                <TechMarquee />
                <HowItWorks />
                <Prize />
                <HowToApply />
                <JoinUs />
            </div>
        </>
    )
}

export default FDDICPage
