import power from "../../assets/Details/Amenities/power.png";
import lift from "../../assets/Details/Amenities/lift.png";
import club from "../../assets/Details/Amenities/clubHouse.png";
import gymnasium from "../../assets/Details/Amenities/gym.png";
import park from "../../assets/Details/Amenities/park.png";
import reservedParking from "../../assets/Details/Amenities/parking.png";
import security from "../../assets/Details/Amenities/securities.png";
import water from "../../assets/Details/Amenities/water.png";
import privateGarden from "../../assets/Details/Amenities/privateGarden.png";
import vaastuCompliant from "../../assets/Details/Amenities/vaastuCompliant.png";
import ServiceGoodsLift from "../../assets/Details/Amenities/ServiceGoodsLift.png";
import VisitorParking from "../../assets/Details/Amenities/VisitorParking.png";
import intercom from "../../assets/Details/Amenities/intercom.png";
import maintenance from "../../assets/Details/Amenities/maintenance.png";
import waste from "../../assets/Details/Amenities/waste.png";
import laundry from "../../assets/Details/Amenities/laundry.png";
import internet from "../../assets/Details/Amenities/internet.png";
import dthTelevision from "../../assets/Details/Amenities/dthTelevision.png";
import pipegas from "../../assets/Details/Amenities/Pipegas.png";
import jogging from "../../assets/Details/Amenities/jogging.png";
import outdoor from "../../assets/Details/Amenities/outdoor.png";
import earlyLearning from "../../assets/Details/Amenities/earlyLearning.png";
import kidsPlay from "../../assets/Details/Amenities/kidsPlay.png";
import indoor from "../../assets/Details/Amenities/indoor.png";

const amenitiesList = [
  { name: "Power Back Up", icon: power },
  { name: "Lift", icon: lift },
  { name: "Club House", icon: club },
  { name: "Gymnasium", icon: gymnasium },
  { name: "Park", icon: park },
  { name: "Reserved Parking", icon: reservedParking },
  { name: "Security", icon: security },
  { name: "Water Storage", icon: water },
  { name: "Private Terrace/Garden", icon: privateGarden },
  { name: "Vaastu Compliant", icon: vaastuCompliant },
  { name: "Service/Goods Lift", icon: ServiceGoodsLift },
  { name: "Visitor Parking", icon: VisitorParking },
  { name: "Intercom Facility", icon: intercom },
  { name: "Maintenance Staff", icon: maintenance },
  { name: "Waste Disposal", icon: waste },
  { name: "Laundry Service", icon: laundry },
  { name: "Internet/Wi-Fi Connectivity", icon: internet },
  { name: "DTH Television Facility", icon: dthTelevision },
  { name: "Piped Gas", icon: pipegas },
  { name: "Jogging and Strolling Track", icon: jogging },
  { name: "Outdoor Tennis Courts", icon: outdoor },
  { name: "Early Learning Centre", icon: earlyLearning },
  { name: "Kids Play Area", icon: kidsPlay },
  { name: "Indoor Squash & Badminton Courts", icon: indoor },
];

const Amenities = () => {
  return (
    <div className="mx-auto px-[50px] md:px-[112px] mt-[54px]">
      <div className="p-6 bg-[#F9FAFB] rounded border border-[#F9FAFB] shadow-lg">
        <h2 className="text-2xl font-semibold mb-8">Amenities</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-6">
          {amenitiesList.map((amenity, index) => (
            <div key={index} className="flex items-center p-4 rounded ">
              <div>
                <img src={amenity.icon} alt="" className="size-10" />
              </div>
              <span className="text-[#101010]">{amenity.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Amenities;
