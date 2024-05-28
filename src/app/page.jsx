import BoxInfo from "@/components/Landing/BoxInfo"
import Header from "@/components/Landing/Header"
import MarqueeSlider from "@/components/Landing/MarqueeSlider"
import Para from "@/components/Landing/Para"

const Home = () => {
  return (
    <>
      <div className="overflow-hidden">
        <Header />
      </div>
      <MarqueeSlider />
      <Para />
      <BoxInfo />
    </>
  )
}

export default Home
