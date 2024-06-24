import mainImage from "../../assets/About/OurStroy.png";
import circle from "../../assets/About/circle.png";

const OurStory = () => {
  return (
    <div className="mx-auto w-full max-w-[1216px] mt-[80px] mb-[290px] md:mb-[185px] px-[50px] md:px-[112px]">
      <div className="relative">
        {/* Main Image with Gradient Overlay */}
        <div className="relative w-full h-[455px] lg:w-[904px]">
          <img
            src={mainImage}
            alt="Our Story"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-black/65 to-black"></div>

          {/* Additional Image */}
          <img
            src={mainImage}
            alt="Additional"
            className="absolute top-[61px] left-[120px] w-[252px] h-[235px] object-cover bg-[#00000033]"
          />

          {/* Circle Image */}
          <img
            src={circle}
            alt="Circle"
            className="absolute top-[69px] w-[42px] h-[39.17px] object-cover lg:top-[69px] lg:left-[420px] md:top-[50px] md:left-[300px] sm:top-[30px] sm:left-[150px] sm:w-[32px] sm:h-[29px]"
          />
        </div>

        {/* Card */}
        <div className="absolute top-[313px] left-[50%] transform lg:left-[512px] -translate-x-1/2 lg:-translate-x-0 w-full md:w-[592px] bg-[#ECF5FF] p-[32px]">
          <div className="flex items-center space-x-[16px] mb-[16px]">
            <div className="w-[51px] border-t-[4px] border-[#EE6611]"></div>
            <div className="text-[#EE6611] font-poppins text-[18px] font-semibold leading-[21.6px]">
              Our Story
            </div>
          </div>
          <div className="text-left text-[#1F2937] font-montserrat text-[36px] font-bold leading-[48px] mb-[24px]">
            Efficient and Transparent <br /> Home Buying Solutions
          </div>
          <div className="font-poppins text-left text-[#6B7280] text-[16px] font-medium leading-[24px]">
            In the symphony of bustling markets and serene landscapes,
            Heritage-Nest was born—a vision to
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
