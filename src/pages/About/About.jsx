import Counter from "../../component/shared/Counter/Counter";
import Testimonials from "../BuyScreen/Testimonials";
import Banner from "./Banner";
import MeetTheTeam from "./MeetTheTeam";
import MissionStatement from "./MissionStatement";
import OurStory from "./OurStory";
import OurTeam from "./OurTeam";

const About = () => {
  return (
    <div>
      <Banner />
      <Counter />
      <OurStory />
      <MissionStatement />
      <OurTeam />
      <MeetTheTeam />
      <div className="mb-16">
        <Testimonials />
      </div>
    </div>
  );
};

export default About;
