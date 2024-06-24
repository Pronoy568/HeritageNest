import Counter from "../../component/shared/Counter/Counter";
import Banner from "./Banner";
import MeetTheTeam from "./MeetTheTeam";
import OurStory from "./OurStory";
import OurTeam from "./OurTeam";

const About = () => {
  return (
    <div>
      <Banner />
      <Counter />
      <OurStory />
      <OurTeam />
      <MeetTheTeam />
    </div>
  );
};

export default About;
