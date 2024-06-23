import banner from "../../assets/About/bannerFull.jpg";

const Banner = () => {
  return (
    <div className="mx-auto bg-opacity-0 w-full h-[320px]">
      <img src={banner} alt="Banner" className="w-full h-full object-cover" />
    </div>
  );
};

export default Banner;
