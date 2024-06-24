import Counter from "../../component/shared/Counter/Counter";
import Navbar from "../../component/shared/Navbar/Navbar";
import Banner from "./Banner";
import MeetTheTeam from "./MeetTheTeam";
import OurTeam from "./OurTeam";

const About = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Counter />
      <OurTeam />
      <MeetTheTeam />
    </div>
  );
};

export default About;
