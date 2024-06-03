import GoalCards from "@/components/About/GoalCards"
import Header from "@/components/About/Header"
import TagLine from "@/components/About/TagLine"
import Vision from "@/components/About/Vision"

const AboutPage = () => {
    return (
        <>
            <Header />
            <div className="bg-white">
                <GoalCards />
                <TagLine />
                <Vision />
            </div>
        </>
    )
}

export default AboutPage
