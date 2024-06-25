import team1 from "../../assets/About/Team/Team1.png";
import team2 from "../../assets/About/Team/Team2.png";
import team3 from "../../assets/About/Team/Team3.png";

const OurTeam = () => {
  const teamImages = [team1, team2, team3];

  return (
    <div className="mx-auto mt-[80px] mb-[65px] px-[50px] md:px-[112px] w-full">
      {/* Title Section */}
      <div className="flex items-center space-x-[16px] mb-[16px]">
        <div className="w-[51px] border-t-[4px] border-[#EE6611]"></div>
        <div className="text-[#EE6611] font-poppins text-[18px] font-semibold leading-[21.6px]">
          Our team
        </div>
      </div>
      <div className="text-left text-[#111827] font-inter text-[40px] font-bold leading-[48px] mb-[64px]">
        Discover the Faces Behind Our Success
      </div>

      {/* Images Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[32px]">
        {teamImages.map((src, index) => (
          <img
            key={index}
            src={src}
            alt="Team member"
            className="w-full sm:w-[384px] h-[417px] object-cover"
          />
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
