
import Gateway from "@/components/Membership/Gateway"
import Header from "@/components/Membership/Header"
import NoteForStudents from "@/components/Membership/NoteForStudents"
import Prize from "@/components/Membership/Prize"

const MembershipPage = () => {
    return (
        <>
            <Header />
            <div className="bg-white">
                <Gateway />
                <Prize />
                <NoteForStudents />
            </div>
        </>
    )
}

export default MembershipPage
