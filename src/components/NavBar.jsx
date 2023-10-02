import { useState } from "react";
import logoBlack from "../assets/logo-black.svg";
import logoWhite from "../assets/logo-white.svg";
import hamburger from "../assets/icons/icon-hamburger.svg";
import close from "../assets/icons/icon-close.svg";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header className="fixed top-0 z-10 bg-white w-full py-8 md:py-[56px] md:relative">
      <div className="mx-auto px-[5%] flex justify-between items-center md:justify-start md:px-[13%]">
        <a href="/">
          <img src={logoBlack} alt="logo" className="object-contain object-left w-full h-[32.03px] md:h-10 md:mr-20 xl:mr-[94px]" />
        </a>
        <nav>
          <ul
            className={`${
              !toggle ? "hidden" : "flex fadein-left"
            } z-10 absolute top-[96px] left-[5%] right-0 bg-veryLightGrey text-darkBlue font-bold flex-col py-10 space-y-[17px] text-[32px] leading-[40px] md:flex md:relative md:flex-row md:bg-transparent md:text-mediumGrey md:space-y-0 md:top-0 md:p-0 md:ml-0 md:text-[18px] md:leading-[25px] md:mb-0 md:space-x-[61px]`}
          >
            <li className="pl-[50px] hover:text-darkGrey md:hover:text-darkBlue md:pl-0">
              <a href="/portfolio">Portfolio</a>
            </li>
            <li className="pl-[50px] hover:text-darkGrey md:hover:text-darkBlue md:pl-0">
              <a href="/about">About Us</a>
            </li>
            <li className="pl-[50px] hover:text-darkGrey md:hover:text-darkBlue md:pl-0">
              <a href="/contact">Contact</a>
            </li>
          </ul>

          {/* overlay */}
          <div className={`${!toggle ? "hidden" : "fixed"} top-[96px] bottom-0 left-0 right-0 bg-black/50`} onClick={() => setToggle(!toggle)} />

          {/* open/close buttons */}
          <img src={toggle ? close : hamburger} alt="menu" onClick={() => setToggle(!toggle)} className="cursor-pointer md:hidden" />
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
