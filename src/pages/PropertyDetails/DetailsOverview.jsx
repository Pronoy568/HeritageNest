import location from "../../assets/Details/details/marker.png";
import image1 from "../../assets/Details/details/detailsPic1.png";
import image2 from "../../assets/Details/details/detailsPic2.png";
import image3 from "../../assets/Details/details/detailsPic3.png";
import image4 from "../../assets/Details/details/detailsPic4.png";
import bed from "../../assets/Details/details/bed.png";
import bathtub from "../../assets/Details/details/bathtub.png";
import balcony from "../../assets/Details/details/balcony.png";
import shelves from "../../assets/Details/details/shelves.png";
import map from "../../assets/Details/details/map1.png";
import RangeSlider from "./RangeSlider";

const DetailsOverview = () => {
  return (
    <div className="mx-auto px-[50px] md:px-[112px] mt-[40px]">
      <div>
        {/* //*Header  */}
        <div>
          <div className="flex flex-col lg:flex-row lg:items-center mb-2">
            <h1 className="font-inter text-xl font-semibold text-[#010101]">
              3 BHK Builder Floor for Sale in Site Ram Bazar Hyderabad
            </h1>
            <span className="font-inter lg:ml-16 font-extrabold text-[28px] text-[#010101]">
              $ 300k
            </span>
          </div>
          <div className="flex items-center mb-8">
            <img src={location} alt="marker" className="size-4 mr-2" />
            <p className="font-inter text-[#606060] text-lg">
              Meadowshire Park, Greenfield, USA
            </p>
          </div>
        </div>
        <div className="grid lg:grid-cols-3  gap-4">
          <div className="col-span-2">
            {/* //*Image Section */}
            <div>
              <img src={image1} alt="image1" className="w-full" />
              <div className="flex items-center gap-2 lg:gap-5 my-4 flex-wrap">
                <img
                  src={image2}
                  alt="image"
                  className="w-[135px] md:w-[252px] md:h-[160px]"
                />
                <img
                  src={image3}
                  alt="image"
                  className="w-[135px] md:w-[252px] md:h-[160px]"
                />
                <img
                  src={image4}
                  alt="image"
                  className="w-[80px] md:w-[205px] md:h-[160px]"
                />
              </div>
            </div>
            {/* //*Overview */}
            <div className="my-8 p-4 lg:pt-6 lg:px-6 bg-[#F9FAFB] border border-[#E5E7EB] rounded">
              <h1 className="text-2xl font-semibold font-montserrat">
                Overview
              </h1>
              <div className="grid w-full items-center grid-cols-1 md:grid-cols-2 xl:grid-cols-4 border shadow-lg p-4 rounded my-6">
                <p className="flex items-center">
                  <img src={bathtub} className="size-6 mx-1" alt="bathtub" />
                  <span className="font-inter text-[#303030]">2 Beds</span>
                </p>
                <p className="flex items-center">
                  <img src={bed} className="size-6 mx-1" alt="bed" />
                  <span>2 Bath</span>
                </p>
                <p className="flex items-center">
                  <img src={balcony} className="size-6 mx-1" alt="balcony" />
                  <span>2 Balcony</span>
                </p>
                <p className="flex items-center">
                  <img src={shelves} className="size-6 mx-1" alt="shelves" />
                  <span>Fully Furnished</span>
                </p>
              </div>
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 mb-5 pt-2 gap-8">
                  <div>
                    <p className="font-montserrat text-[#5C5C5C]">
                      Carpet Area
                    </p>
                    <h1 className="font-montserrat font-medium text-[#101010]">
                      2000 sqft
                    </h1>
                    <p className="font-montserrat text-[#535353]">$ 225/sqft</p>
                  </div>
                  <div className="lg:col-span-2">
                    <p className="font-montserrat text-[#5C5C5C]">Floor</p>
                    <h1 className="font-montserrat font-medium text-[#101010]">
                      Second (Out of 6th floor)
                    </h1>
                  </div>
                  <div>
                    <p className="font-montserrat text-[#5C5C5C]">
                      Transaction
                    </p>
                    <h1 className="font-montserrat font-medium text-[#101010]">
                      Ready to move
                    </h1>
                  </div>
                  <div>
                    <p className="font-montserrat text-[#5C5C5C]">Lift</p>
                    <h1 className="font-montserrat font-medium text-[#101010]">
                      1
                    </h1>
                  </div>
                </div>
              </div>
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                  <div>
                    <p className="font-montserrat text-[#5C5C5C]">Facing</p>
                    <h1 className="font-montserrat font-medium text-[#101010]">
                      North - East
                    </h1>
                  </div>
                  <div className="lg:col-span-2">
                    <p className="font-montserrat text-[#5C5C5C]">
                      Additional Rooms
                    </p>
                    <h1 className="font-montserrat font-medium text-[#101010]">
                      1 servant room & 1 gust room
                    </h1>
                  </div>
                  <div className="lg:col-span-2">
                    <p className="font-montserrat text-[#5C5C5C]">
                      Age of construction
                    </p>
                    <h1 className="font-montserrat font-medium text-[#101010]">
                      New Construction
                    </h1>
                  </div>
                  <div>
                    <p></p>
                    <h1></h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* property value and map start */}
          <div className="mx-auto col-span-3 lg:col-span-1">
            <div className="bg-[#ECF5FF] py-6 px-4 rounded">
              <p className="font-poppins text-[#6B7280]">Property Value</p>
              <h1 className="font-montserrat text-2xl font-bold mt-2 mb-4 text-[#252323]">
                $ 300k - $ 310k
              </h1>
              <p className="font-poppins text-[#6B7280]">
                Your bid can not be than 10% of the property Minimum value.
              </p>
              <div className="mt-4">
                <p>Min</p>
                <h1 className="px-2 py-3 bg-white w-11/12 mt-1 mb-2 rounded-md">
                  $ 280k
                </h1>
                <p>Max</p>
                <h1 className="px-2 py-3 bg-white w-11/12 mt-1 mb-2 rounded-md">
                  $ 320k
                </h1>
              </div>
              <div className="mt-8">
                <RangeSlider min={280} max={305} step={5} />
              </div>
              <div className="text-center mt-8">
                <button className="px-6 py-3 bg-[#0059B1] rounded-md text-white font-montserrat">
                  Bid Property
                </button>
              </div>
            </div>
            <div className="mt-8">
              <img className="w-full h-[382px] rounded" src={map} alt="map" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsOverview;
