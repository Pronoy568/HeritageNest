import Services from "../../component/shared/Services/Services";
import CardProperty from "./../../component/shared/Property/CardProperty";
import Amenities from "./Amenities";
import DetailsOverview from "./DetailsOverview";

const PropertyDetails = () => {
  return (
    <div>
      <DetailsOverview />
      <Amenities />
      <Services />
      <div className="mb-16 -mt-8">
        <CardProperty title="Others Nearby Properties" />
      </div>
    </div>
  );
};

export default PropertyDetails;
