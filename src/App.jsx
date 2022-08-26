import ProgAndEvents from "./components/progAndEvents/ProgAndEvents";
import Pv from "./components/pv/Pv";
import Footer from "./components/footer/Footer";
import Ourcore from "./components/ourcore/Ourcore";
import Partners from "./components/partners/Partners";
import PositionAware from "./components/positionAware/PositionAware";
import LandingAnim from "./components/landingAnim/LandingAnim";
import { ParallaxProvider } from 'react-scroll-parallax';
import Hero from "./components/hero/Hero";
import NavBar from "./components/nav/NavBar";
import {Parallax} from 'react-scroll-parallax';
import RotLogo from "./components/rotLogo/RotLogo";
import  Button  from  "./components/button/Button";
import AboutUs from "./components/aboutUs/AboutUs";
import Schprog from "./components/schprog/Schprog";
import Testimonials from "./components/testimonials/Testimonials";
import RecentFeeds from "./components/recentFeeds/RecentFeeds";
import DontMiss from "./components/dontMiss/DontMiss";

const App = () => {
  return <ParallaxProvider>
    <LandingAnim/>
    <NavBar/>
    <Hero/>
    <Ourcore/>
    <AboutUs/>
    <Pv/>
    <ProgAndEvents/>
    <Partners/>
    <Schprog/>
    <RecentFeeds/>
    <DontMiss/>
    <Testimonials/>
    <Footer/>
    </ParallaxProvider>;
};

export default App;