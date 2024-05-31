
import Gateway from "@/components/Membership/Gateway"
import Header from "@/components/Membership/Header"
import NoteForStudents from "@/components/Membership/NoteForStudents"
import Prize from "@/components/Membership/Prize"

const MembershipPage = () => {
    return (
        <>
            <Header />
            <Gateway />
            <Prize />
            <NoteForStudents />
        </>
    )
}

export default MembershipPage
