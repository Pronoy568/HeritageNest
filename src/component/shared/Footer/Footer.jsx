import logo from "../../../assets/Landing/Logo.png";
import fbIcon from "../../../assets/Landing/fb.png";
import twiter from "../../../assets/Landing/twiter.jpg";
import LinkedIn from "../../../assets/Landing/linkedIn.png";
import hand from "../../../assets/Landing/v.png";

const Footer = () => {
  return (
    <footer className="bg-blue-50 text-gray-600 px-[80px]">
      <div className="border-t border-gray-200 py-[64px]">
        <div className="lg:flex flex-wrap lg:gap-16 mb-10 lg:mb-0">
          {/* Company logo and details */}
          <div className="w-[320px]">
            <div>
              <img src={logo} className="w-[53px] h-20" alt="" />
            </div>
            <p className="text-[#475467] mt-4 font-montserrat text-[16px] font-medium leading-[24px] text-left">
              Design amazing digital experiences that create more happy in the
              world.
            </p>
          </div>
          <div className="flex flex-wrap gap-8 mt-10 md:mt-0">
            <div className="mb-10 lg:mb-0 lg:w-[124px]">
              <h3 className="font-montserrat text-sm font-semibold text-[#667085]">
                Product
              </h3>
              <ul className="mt-4 space-y-4 font-montserrat text-base font-semibold text-[#475467]">
                <li>Overview</li>
                <li>Features</li>
                <li>Solutions</li>
                <li>Tutorials</li>
                <li>Pricing</li>
                <li>Releases</li>
              </ul>
            </div>
            <div className="mb-10 lg:mb-0 lg:w-[124px]">
              <h3 className="font-montserrat text-sm font-semibold text-[#667085]">
                Company
              </h3>
              <ul className="mt-4 space-y-4 font-montserrat text-base font-semibold text-[#475467]">
                <li>About us</li>
                <li>Careers</li>
                <li>Press</li>
                <li>News</li>
                <li>Media kit</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="mb-10 lg:mb-0 lg:w-[124px]">
              <h3 className="font-montserrat text-sm font-semibold text-[#667085]">
                Resources
              </h3>
              <ul className="mt-4 space-y-4 font-montserrat text-base font-semibold text-[#475467]">
                <li>Blog</li>
                <li>Newsletter</li>
                <li>Events</li>
                <li>Help centre</li>
                <li>Tutorials</li>
                <li>Support</li>
              </ul>
            </div>
            <div className="mb-10 lg:mb-0 lg:w-[124px]">
              <h3 className="font-montserrat text-sm font-semibold text-[#667085]">
                Social
              </h3>
              <ul className="mt-4 space-y-4 font-montserrat text-base font-semibold text-[#475467]">
                <li>Twitter</li>
                <li>LinkedIn</li>
                <li>Facebook</li>
                <li>GitHub</li>
                <li>AngelList</li>
                <li>Dribbble</li>
              </ul>
            </div>
            <div className="mb-10 lg:mb-0 lg:w-[124px]">
              <h3 className="font-montserrat text-sm font-semibold text-[#667085]">
                Legal
              </h3>
              <ul className="mt-4 space-y-4 font-montserrat text-base font-semibold text-[#475467]">
                <li>Terms</li>
                <li>Privacy</li>
                <li>Cookies</li>
                <li>Licenses</li>
                <li>Settings</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/*  Social icon with company name and year */}
      <hr className="w-full mx-auto bg-[#CEE7FF] text-[#CEE7FF] border-[#CEE7FF] h-[2px]" />
      <div className="sm:flex justify-between items-center pt-[32px] pb-[48px]">
        <div className="text-center text-[#667085]">
          © 2024 Heritage- Nest. All rights reserved.
        </div>

        <div className="flex space-x-6 text-center justify-center ">
          <span className="cursor-pointer">
            <img src={twiter} alt="fbIcon" />
          </span>
          <span className="cursor-pointer">
            <img src={LinkedIn} alt="fbIcon" />
          </span>
          <span className="cursor-pointer">
            <img src={fbIcon} alt="fbIcon" />
          </span>
          <span className="cursor-pointer">
            <img src={hand} alt="fbIcon" />
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
