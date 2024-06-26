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
  { name: "Power Back Up", img: power },
  { name: "Lift", img: lift },
  { name: "Club House", img: club },
  { name: "Gymnasium", img: gymnasium },
  { name: "Park", img: park },
  { name: "Reserved Parking", img: reservedParking },
  { name: "Security", img: security },
  { name: "Water Storage", img: water },
  { name: "Private Terrace/Garden", img: privateGarden },
  { name: "Vaastu Compliant", img: vaastuCompliant },
  { name: "Service/Goods Lift", img: ServiceGoodsLift },
  { name: "Visitor Parking", img: VisitorParking },
  { name: "Intercom Facility", img: intercom },
  { name: "Maintenance Staff", img: maintenance },
  { name: "Waste Disposal", img: waste },
  { name: "Laundry Service", img: laundry },
  { name: "Internet/Wi-Fi Connectivity", img: internet },
  { name: "DTH Television Facility", img: dthTelevision },
  { name: "Piped Gas", img: pipegas },
  { name: "Jogging and Strolling Track", img: jogging },
  { name: "Outdoor Tennis Courts", img: outdoor },
  { name: "Early Learning Centre", img: earlyLearning },
  { name: "Kids Play Area", img: kidsPlay },
  { name: "Indoor Squash & Badminton Courts", img: indoor },
];

const Amenities = () => {
  return (
    <div className="mx-auto px-[50px] md:px-[112px] mt-[54px]">
      <div className="p-6 bg-[#F9FAFB] rounded border border-[#E5E7EB]">
        <h2 className="text-2xl font-semibold mb-8">Amenities</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-6">
          {amenitiesList.map((amenity, index) => (
            <div key={index} className="flex items-center p-4 rounded ">
              <div>
                <img src={amenity.img} alt="" className="size-10" />
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
