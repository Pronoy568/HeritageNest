import MissionStatementImg from "../../assets/About/MissionStatement.png";
import OurStory from "../../assets/About/OurStroy.png";

const MissionStatement = () => {
  return (
    <div className="mx-auto w-full mt-[58px] mb-[230px] px-[50px] md:px-[112px]">
      <div className="relative">
        {/* Main Image */}
        <div className="relative w-full h-[455px] lg:w-[710px]">
          <img
            src={MissionStatementImg}
            alt="Mission Statement"
            className="absolute top-0 left-0 md:left-[400px] w-full h-full object-cover"
          />

          {/* Inside Image */}
          <img
            src={OurStory}
            alt="Inside"
            className="absolute top-[195px] left-[150px] md:left-[719px] w-[70.04px] h-[64px] object-cover"
          />

          {/* Card */}
          <div className="absolute top-[313px] left-1/2 transform -translate-x-1/2 lg:left-0 lg:-translate-x-0 lg:right-[524px] w-full md:w-[592px] bg-[#FDF0E7] p-[32px]">
            <div className="flex items-center space-x-[16px] mb-[16px]">
              <div className="w-[51px] border-t-[4px] border-[#EE6611]"></div>
              <div className="text-[#EE6611] font-inter text-[18px] font-semibold leading-[21.6px]">
                Mission Statement
              </div>
            </div>
            <div className="text-left text-[#111827] font-montserrat text-[24px] md:text-[36px] font-bold leading-[32px] md:leading-[48px] mb-[24px]">
              Efficient and Transparent <br className="hidden md:block" /> Home
              Buying Solutions
            </div>
            <div className="font-poppins text-left text-[#6B7280] text-[14px] md:text-[16px] font-medium leading-[20px] md:leading-[24px]">
              To bridge the miles with smiles, Heritage-Nest pledges to be the
              golden thread connecting NRIs to their homeland, through trust,
              transparency, and tailored real estate solutions.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionStatement;
