import Counter from "../../component/shared/Counter/Counter";
import CardProperty from "../../component/shared/Property/CardProperty";
import BuyScreenBanner from "./BuyScreenBanner";
import PostProperty from "./PostProperty";
import Testimonials from "./Testimonials";

const BuyScreen = () => {
  return (
    <div>
      <BuyScreenBanner />
      <Counter />
      <CardProperty title="Popular Properties" />
      <CardProperty title="New Listed Properties" />
      <div className="mt-16">
        <Testimonials />
      </div>
      <PostProperty />
    </div>
  );
};

export default BuyScreen;
