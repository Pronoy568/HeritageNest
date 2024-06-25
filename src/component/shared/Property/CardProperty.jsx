/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";
import imageCount from "../../../assets/Buyscreens/propertyImg/ImageCount.png";
import rectangle from "../../../assets/Buyscreens/propertyImg/Rectangle.png";
import marker from "../../../assets/Buyscreens/propertyImg/marker.png";

import propertyImage1 from "../../../assets/Details/propertyImg/PropertyImg1.jpg";
import propertyImage2 from "../../../assets/Details/propertyImg/PropertyImg2.jpg";
import propertyImage3 from "../../../assets/Details/propertyImg/PropertyImg3.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const properties = [
  {
    id: 1,
    image: propertyImage1,
    name: "SunnySlope Suites",
    location: "Meadowshire Park, Greenfield, USA",
    price: 250000,
  },
  {
    id: 2,
    image: propertyImage2,
    name: "SunnySlope Suites",
    location: "Meadowshire Park, Greenfield, USA",
    price: 250000,
  },
  {
    id: 3,
    image: propertyImage3,
    name: "SunnySlope Suites",
    location: "Meadowshire Park, Greenfield, USA",
    price: 250000,
  },
  {
    id: 4,
    image: propertyImage1,
    name: "SunnySlope Suites",
    location: "Meadowshire Park, Greenfield, USA",
    price: 250000,
  },
  {
    id: 5,
    image: propertyImage2,
    name: "SunnySlope Suites",
    location: "Meadowshire Park, Greenfield, USA",
    price: 250000,
  },
  {
    id: 6,
    image: propertyImage3,
    name: "SunnySlope Suites",
    location: "Meadowshire Park, Greenfield, USA",
    price: 250000,
  },
];

const CardProperty = ({ title = "" }) => {
  return (
    <div className="mt-20">
      <div className="mx-auto px-[50px] md:px-[112px]">
        <div className="flex justify-between sm:items-center mb-6 flex-col sm:flex-row">
          <h1 className="text-3xl text-[#111827] font-montserrat font-semibold mb-3 sm:mb-0">
            {title}
          </h1>
          <Link to="/propertyDetails">
            <p className="text-[#0059B1] font-semibold text-lg underline cursor-pointer">
              See all property
            </p>
          </Link>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
        >
          {properties.map((property) => (
            <SwiperSlide className="" key={property.id}>
              <div className="bg-gray-100 max-w-385px">
                <div className="max-h-[200px]">
                  <img
                    className="w-full max-h-[200px]"
                    src={property.image}
                    alt={property.name}
                  />

                  <img
                    src={imageCount}
                    className="w-10 h-5 -mt-[30px] ml-2"
                    alt=""
                  />
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center my-3">
                    <p className="bg-[#C5E2FF] text-[#00254A] text-sm px-2 py-1 rounded">
                      Apartment
                    </p>

                    <div className="flex items-center">
                      <img src={rectangle} className="w-2 h-2 mr-1 " alt="" />
                      <p className="text-[#111827]">Ready to Move</p>
                    </div>
                  </div>
                  <hr className=" bg-[#D8DCE1] text-[#D8DCE1] border-[#D8DCE1] mx-auto" />
                  <h3 className="text-xl font-semibold text-[#111827] mt-1">
                    {property.name}
                  </h3>
                  <p className="flex items-center gap-1 text-[#6B7280] font-normal mt-1">
                    <img src={marker} alt="" className="size-4" />
                    {property.location}
                  </p>
                  <p className="font-semibold text-2xl mt-5">
                    ${property.price}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CardProperty;
