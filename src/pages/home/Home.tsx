import Arena from "./components/Arena";
import Discover from "./components/Discover";
import Feedback from "./components/Feedback";
import Footer from "../../components/Footer";
import Homeheader from "./components/Homeheader";
import Mobile from "./components/Mobile";
import Platform from "./components/Platform";
import Sponsor from "./components/Sponsor";
import Started from "./components/Started";
import Support from "./components/Support";
import Navbar from "../../components/Navbar";
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  // Handler for signup navigation
  const handleSignupClick = () => {
    console.log('Navigate to signup page');
    navigate('/signup');
  };

    // Handler for login navigation
    const handleLoginClick = () => {
      console.log('Navigate to login page');
      navigate('/login');
    };

  return (
    <div className="bg-[#1f2a38]">
      <Navbar
        currentPage="landing"
        onSignupClick={handleSignupClick}
        onLoginClick={handleLoginClick}
      />
      <Homeheader />
      {/* <div className="my-12">
      <Sponsor />
      </div> */}
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