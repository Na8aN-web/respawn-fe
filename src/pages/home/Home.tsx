import Arena from "../../components/Arena";
import Discover from "../../components/Discover";
import Feedback from "../../components/Feedback";
import Footer from "../../components/Footer";
import Homeheader from "../../components/Homeheader";
import Mobile from "../../components/Mobile";
import Platform from "../../components/Platform";
import Sponsor from "../../components/Sponsor";
import Started from "../../components/Started";
import Support from "../../components/Support";

const Home = () => {
  return (
    <div className="bg-[#1f2a38]">
      <Homeheader />
      <Sponsor />
      <Discover />
      <Arena />
      <Platform />
      <Mobile />
      <Feedback />
      <Support />
      <Started />
      <Footer />
    </div>
  )
}

export default Home