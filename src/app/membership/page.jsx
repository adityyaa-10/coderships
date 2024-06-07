
import MainFooter from "@/components/Footer"
import Gateway from "@/components/Membership/Gateway"
import Header from "@/components/Membership/Header"
import NoteForStudents from "@/components/Membership/NoteForStudents"
import Prize from "@/components/Membership/Prize"
import Navbar from "@/components/Navbar"

const MembershipPage = () => {
    return (
        <>
            <Navbar />
            <Header />
            <div className="bg-white">
                <Gateway />
                <Prize />
                <NoteForStudents />
            </div>
            <MainFooter />
        </>
    )
}

export default MembershipPage
