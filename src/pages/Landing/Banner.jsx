/* eslint-disable react/no-unescaped-entities */
import backgroundVideo from "../../assets/Landing/banner.mp4";
import search from "../../assets/Landing/search.png";

const Banner = () => {
  return (
    <div className="relative h-screen lg:h-[600px] flex justify-center items-center text-center">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={backgroundVideo}
        autoPlay
        loop
        muted
      ></video>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-10"></div>
      <div className="relative z-20">
        <div className="flex justify-center items-center text-center flex-col">
          <h2 className="text-white text-center text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-bold sm:w-[70%] md:w-[60%] leading-[60px] md:leading-[70px] lg:leading-[75px] font-inter">
            Your Portal to India's Exquisite Real Estate
          </h2>

          <p className="mt-6 md:mt-8 sm:text-sm md:text-[18px] lg:text-lg mb-12 text-[#F9FAFB] font-inter">
            Seamlessly connecting you to the heartbeat of India's prime
            properties.
          </p>
          <div>
            <button className="bg-[#005EAE] border border-[#005EAE] text-white flex justify-center items-center rounded-[8px] px-[28px] py-[16px] w-full h-[56px] gap-[12px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]">
              <span>
                <img src={search} alt="Search Icon" />
              </span>
              <span className="ml-3 md:text-lg">Find Property</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
