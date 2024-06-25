import logo from "../../../assets/Landing/Logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-[#ECF5FF] flex flex-col md:flex-row items-center justify-between px-[8px] md:px-[122px] py-[8px] md:py-[0px]">
      <div className="flex flex-col md:flex-row items-center space-y-[8px] md:space-y-0 space-x-0 md:space-x-[32px] w-full md:w-[549.36px]">
        <Link to="/buyScreen">Buy</Link>
        <Link to="/propertyDetails">Sell</Link>
        <Link to="/about">Services</Link>
      </div>

      <div className="my-[8px] md:mx-[32px]">
        <Link to="/">
          <img src={logo} alt="Logo" className="h-[80px] w-[53.29px]" />
        </Link>
      </div>

      <div className="flex flex-col md:flex-row items-center space-y-[8px] md:space-y-0 space-x-0 md:space-x-[32px] w-full md:w-[549.36px] justify-end">
        <a href="#manage-rentals" className="text-black">
          Manage Rentals
        </a>
        <a href="#sign-in" className="text-black">
          Sign In
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
