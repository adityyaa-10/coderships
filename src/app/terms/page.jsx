import Heading from "@/components/Terms/Heading"
import LastModified from "@/components/Terms/LastModified"
import OurService from "@/components/Terms/OurService"

const TermsAndCondition = () => {
    return (
        <>
            <Heading />
            <div className="max-w-[1000px] mx-auto px-4 md:px-9">
                <LastModified />
                <OurService />
            </div>
        </>
    )
}

export default TermsAndCondition
