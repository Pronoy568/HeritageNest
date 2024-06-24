import Counter from "../../component/shared/Counter/Counter";
import Navbar from "../../component/shared/Navbar/Navbar";
import Banner from "./Banner";
import OurTeam from "./OurTeam";

const About = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Counter />
      <OurTeam />
    </div>
  );
};

export default About;
