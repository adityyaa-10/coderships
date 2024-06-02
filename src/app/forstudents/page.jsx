import Accordion from "@/components/ForStudents/Accordion/Accordion"
import ChangingApproach from "@/components/ForStudents/ChangingApproach"
import SailWithCoderships from "@/components/ForStudents/SailWithCoderships"
import StudentsHeader from "@/components/ForStudents/StudentsHeader"
import Tagline from "@/components/ForStudents/Tagline"

const StudentsPage = () => {
    return (
        <>
            <StudentsHeader />
            <ChangingApproach />
            <Tagline />
            <Accordion />
            <SailWithCoderships />
        </>
    )
}

export default StudentsPage
