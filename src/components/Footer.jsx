import arrow from "../assets/icons/icon-arrow.svg";
import logoWhite from "../assets/logo-white.svg";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col justify-center items-center md:flex-row md:justify-start md:relative lg:px-[13%] ">
        <div className="w-[120px] h-[120px] bg-darkBlue flex justify-center items-center mb-[-60px] z-[1] md:mb-0">
          <img src={logoWhite} alt="logo" className="w-full h-[24.13px] object-center object-contain" />
        </div>

        <ul className="bg-veryLightGrey w-full text-center text-[18px] leading-[25px] text-mediumGrey pt-[93px] pb-[151px] z-0 space-y-8 md:h-[120px] md:py-0 md:space-y-0 md:flex md:w-[65%] md:mb-0 md:mr-[-150px] md:items-center md:space-x-[61px] lg:w-[67%] xl:w-[70%] 2xl:w-[80%]">
          <li className="hover:text-darkBlue md:ml-10">
            <a href="/portfolio">Portfolio</a>
          </li>
          <li className="hover:text-darkBlue">
            <a href="/about">About Us</a>
          </li>
          <li className="hover:text-darkBlue">
            <a href="/contact">Contact</a>
          </li>
        </ul>
        <a href="/portfolio" className="cta text-white mt-[-130px] z-[1] md:mt-0 md:absolute md:right-0 md:w-[255px] lg:right-[13%]">
          See Our Portfolio <img src={arrow} alt="arrow" className="w-6 h-[18px] ml-6" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
