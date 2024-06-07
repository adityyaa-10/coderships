import MainFooter from "@/components/Footer"
import Accordion from "@/components/ForStudents/Accordion/Accordion"
import ChangingApproach from "@/components/ForStudents/ChangingApproach"
import SailWithCoderships from "@/components/ForStudents/SailWithCoderships"
import StudentsHeader from "@/components/ForStudents/StudentsHeader"
import Tagline from "@/components/ForStudents/Tagline"
import YourPassport from "@/components/ForStudents/YourPassport"
import Navbar from "@/components/Navbar"

const StudentsPage = () => {
    return (
        <>
            <Navbar />
            <StudentsHeader />
            <YourPassport />
            <div className="bg-white">
                <ChangingApproach />
                <Tagline />
                <Accordion />
                <SailWithCoderships />
            </div>
            <MainFooter />
        </>
    )
}

export default StudentsPage
