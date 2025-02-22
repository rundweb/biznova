import AboutComponents from "../components/AboutComponents";
import HomeComponents from "../components/HomeComponents";
import gsap from "gsap-trial";
import ScrollTrigger from "gsap-trial/ScrollTrigger";
import ScrollSmoother from "gsap-trial/ScrollSmoother";
import { useEffect } from "react";
const Home = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    // Cegah duplikasi ScrollSmoother
    if (!ScrollSmoother.get()) {
      ScrollSmoother.create({
        smooth: 2,
        effects: true,
        normalizeScroll: true,
      });
    }
  }, []);
  return (
    <div id="smooth-wrapper" className="overflow-hidden">
      <div id="smooth-content">
        <HomeComponents />
        <AboutComponents />
      </div>
    </div>
  );
};

export default Home;
