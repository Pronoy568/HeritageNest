const PostProperty = () => {
  return (
    <div className="w-full bg-[#FDF0E7] py-[48px] px-[20px] md:px-[112px]">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-[64px]">
        {/* Text Section */}
        <div className="w-full md:w-[784px]">
          <h2 className="font-montserrat text-[20px] font-semibold leading-[30px] text-center md:text-left text-[#101828]">
            Post your Property for free
          </h2>
          <p className="font-poppins text-[16px] font-normal leading-[24px] text-center md:text-left text-[#475467] mt-[8px]">
            List it on Your Propriety and get genuine leads
          </p>
        </div>

        {/* Button Section */}
        <div>
          <button className="w-[176px] h-[56px] bg-[#F06224] text-white font-inter text-[18px] font-semibold leading-[28px] rounded-lg">
            Post Property
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostProperty;
