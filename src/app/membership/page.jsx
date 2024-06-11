
import MainFooter from "@/components/Footer"
import Gateway from "@/components/Membership/Gateway"
import Header from "@/components/Membership/Header"
import NoteForStudents from "@/components/Membership/NoteForStudents"
import Prize from "@/components/Membership/Prize"
import Navbar from "@/components/Navbar"

const MembershipPage = () => {
    return (
        <>
            <title>Coderships - Membership</title>
            <Navbar />
            <Header />
            <Gateway />
            <Prize />
            <NoteForStudents />
            <MainFooter />
        </>
    )
}

export default MembershipPage
