import Services from "../../component/shared/Services/Services";
import CardProperty from "./../../component/shared/Property/CardProperty";
import Amenities from "./Amenities";

const PropertyDetails = () => {
  return (
    <div>
      <Amenities />
      <Services />
      <div className="mb-16 -mt-8">
        <CardProperty title="Others Nearby Properties" />
      </div>
    </div>
  );
};

export default PropertyDetails;
