import propertyImg1 from "../../assets/Landing/property1.jpg";
import propertyImg1extend from "../../assets/Landing/property-11.jpg";
import propertyImg2 from "../../assets/Landing/property2.jpg";
import propertyImg2extend from "../../assets/Landing/property22.jpg";
import propertyImg3 from "../../assets/Landing/property3.jpg";
import propertyImg3extend from "../../assets/Landing/property33.jpg";
import search from "../../assets/Landing/propertySearch.png";
import player from "../../assets/Landing/player.png";

const Property = () => {
  const properties = [
    {
      id: 1,
      title: "Efficient and Transparent Home Buying Solutions",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      imageUrl: propertyImg1,
      extendImageUrl: propertyImg1extend,
    },
    {
      id: 2,
      title: "Efficient and Transparent Home Buying Solutions",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      imageUrl: propertyImg2,
      extendImageUrl: propertyImg2extend,
    },
    {
      id: 3,
      title: "Efficient and Transparent Home Buying Solutions",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      imageUrl: propertyImg3,
      extendImageUrl: propertyImg3extend,
    },
  ];

  return (
    <div className="mx-auto px-[50px] md:px-[112px] my-16">
      <div>
        {properties.map((property, index) => (
          <div
            key={property.id}
            className={`flex flex-col lg:flex-row lg:justify-between mt-[120px] mb-[150px] ${
              property.id === 2
                ? "lg:flex-row-reverse mb-10 md:mt-80"
                : index === 2
                ? "-mt-28"
                : ""
            }`}
          >
            <div className="lg:w-1/2 mb-4 lg:mb-0 relative mx-auto">
              <img
                src={property.imageUrl}
                alt="Property"
                className="w-[280px] h-[180px] sm:min-w-[358px] sm:min-h-[300px] max-w-[458px] max-h-[400px] xl:w-[458px] xl:h-[400px] object-cover rounded-[8px] shadow-lg"
              />
              <img
                src={property.extendImageUrl}
                alt="Property-Extend"
                className={`w-[220px] h-[130px] sm:min-w-[352px] sm:min-h-[240px] max-w-[452px] max-h-[240px] xl:w-[452px] xl:h-[240px] object-cover rounded-[8px] shadow-lg absolute left-[60px] bottom-[-104px] sm:left-[60px] sm:-bottom-[104px] md:left-[60px] md:-bottom-[104px] lg:left-[35px] lg:-bottom-[104px] xl:left-[104px]xl-bottom-[104px] ${
                  property.id === 2
                    ? "sm:left-[40px] sm:-top-[110px] md:left-[40px] md:-top-[110px]  lg:left-[40px] lg:-top-[110px] xl:left-[104px] xl:-top-[110px]"
                    : ""
                }`}
              />
              <img
                src={player}
                alt="player"
                className={`absolute top-[150px] left-[20px] sm:top-[230px] sm:left-[360px]  md:top-[230px] md:left-[360px]  lg:top-[150px] lg:left-[320px] xl:left-[422px] xl:top-[228px] xl:w-[72px] h-[72px] ${
                  property.id === 2
                    ? `
                    sm:left-[35px] sm:top-[-20px] md:left-[35px] md:top-[100px] lg:left-[5px] lg:top-[100px] xl:left-[70px] xl:top-[-28px]
                    `
                    : ""
                }`}
              />
            </div>
            <div
              className={`lg:w-1/2 lg:pl-8 text-center lg:text-left mt-32 lg:mt-0 ${
                property.id === 2 ? "mt-10 lg:mt-0" : ""
              }`}
            >
              <div className="flex items-center">
                <hr className="w-[51px] bg-[#F06711] text-[#F06711] border-[#F06711] h-[3px]" />

                <span className="text-[#F06711] text-lg font-semibold ml-2 font-inter">
                  Property buying
                </span>
              </div>
              <h3 className="font-inter text-[40px] leading-[52px] font-bold text-[#111827] mt-4 mb-6">
                {property.title}
              </h3>
              <p className="text-[#667085] mb-12 font-inter text-base">
                {property.description}
              </p>
              <div>
                <button className="bg-[#E6EFF7] border-[#E6EFF7] text-[#00437C] flex items-center rounded-[8px] px-[20px] py-[12px] w-auto h-[56px] gap-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]">
                  <img src={search} alt="Search Icon" />
                  <span className="ml-1 md:text-base font-semibold font-inter">
                    Find Property
                  </span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Property;
