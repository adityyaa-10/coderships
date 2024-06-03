import AboutCoderships from "@/components/Coderships/AboutCoderships"
import Header from "@/components/Coderships/Header"
import TechMatrix from "@/components/Coderships/TechMatrix"
import WhyCoderships from "@/components/Coderships/WhyCoderships"

const CodershipsPage = () => {
    return (
        <>
            <Header />
            <div className="bg-white">
                <AboutCoderships />
                <TechMatrix />
                <WhyCoderships />
            </div>
        </>
    )
}

export default CodershipsPage
