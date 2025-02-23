import AboutComponents from "../components/AboutComponents";
import HomeComponents from "../components/HomeComponents";
import PortfolioComponents from "../components/PortfolioComponents";
import ServiceComponents from "../components/ServiceComponents";
import TestimonialComponents from "../components/TestimonialComponents";

const Home = () => {
  return (
    <div>
      <HomeComponents />
      <AboutComponents/>
      <ServiceComponents/>
      <PortfolioComponents/>
      <TestimonialComponents/>
    </div>
  );
};

export default Home;
