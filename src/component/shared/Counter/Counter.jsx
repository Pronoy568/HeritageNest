import icon1 from "../../../assets/About/icon1.png";
import icon2 from "../../../assets/About/icon2.png";

const Counter = () => {
  const counters = [
    {
      count: "2k+",
      bgColor: "bg-[#FDF0E7]",
      textColor: "text-[#D95D0F]",
      description: "New Flat Listed",
      viewAllColor: "text-[#EE6611]",
      iconColor: icon1,
    },
    {
      count: "2k+",
      bgColor: "bg-[#ECF5FF]",
      textColor: "text-[#0051A1]",
      description: "New Flat Listed",
      viewAllColor: "text-[#0059B1]",
      iconColor: icon2,
    },
    {
      count: "2k+",
      bgColor: "bg-[#FDF0E7]",
      textColor: "text-[#D95D0F]",
      description: "New Flat Listed",
      viewAllColor: "text-[#EE6611]",
      iconColor: icon1,
    },
    {
      count: "2k+",
      bgColor: "bg-[#ECF5FF]",
      textColor: "text-[#0051A1]",
      description: "New Flat Listed",
      viewAllColor: "text-[#0059B1]",
      iconColor: icon2,
    },
  ];

  return (
    <div className="mx-auto my-[53px] px-[50px] md:px-[112px] w-full max-w-[1216px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[32px]">
        {counters.map((counter, index) => (
          <div
            key={index}
            className={`${counter.bgColor} flex flex-col p-0 w-full h-[185px]`}
          >
            <div
              className={`${counter.textColor} font-montserrat font-bold text-left text-[40px] leading-[48.76px] ml-[24px] mt-[24px]`}
            >
              {counter.count}
            </div>
            <div className="font-poppins text-left text-[#1F2937] text-[16px] leading-[24px] ml-[24px] mt-1">
              {counter.description}
            </div>
            <div className="flex justify-between items-center mt-[32px] mx-[24px]">
              <div
                className={`${counter.viewAllColor} font-poppins text-[16px] leading-[24px] underline`}
              >
                view all
              </div>
              <div className={`w-[32px] h-[32px] border-t`}>
                <img src={`${counter.iconColor}`} alt="icon" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Counter;
