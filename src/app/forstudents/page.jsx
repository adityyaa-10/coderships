import Accordion from "@/components/ForStudents/Accordion/Accordion"
import ChangingApproach from "@/components/ForStudents/ChangingApproach"
import Header from "@/components/ForStudents/Header"
import SailWithCoderships from "@/components/ForStudents/SailWithCoderships"
import Tagline from "@/components/ForStudents/Tagline"

const StudentsPage = () => {
    return (
        <>
            <Header />
            <ChangingApproach />
            <Tagline />
            <Accordion />
            <SailWithCoderships />
        </>
    )
}

export default StudentsPage
