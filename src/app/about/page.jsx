import GoalCards from "@/components/About/GoalCards"
import Header from "@/components/About/Header"
import TagLine from "@/components/About/TagLine"
import Vision from "@/components/About/Vision"
import MainFooter from "@/components/Footer"
import Navbar from "@/components/Navbar"

const AboutPage = () => {
    return (
        <>
            <Navbar />
            <Header />
            <div className="bg-white">
                <GoalCards />
                <TagLine />
                <Vision />
            </div>
            <MainFooter />
        </>
    )
}

export default AboutPage
