import heroMobile from "../assets/about/mobile/image-hero.jpg";
import heroTablet from "../assets/about/tablet/image-hero.jpg";
import heroDesktop from "../assets/about/desktop/image-hero.jpg";
import line from "../assets/icons/line.svg";
import jake from "../assets/about/desktop/avatar-jake.jpg";
import thompson from "../assets/about/desktop/avatar-thompson.jpg";
import jackson from "../assets/about/desktop/avatar-jackson.jpg";
import maria from "../assets/about/desktop/avatar-maria.jpg";
import linkedin from "../assets/icons/icon-linkedin.svg";
import twitter from "../assets/icons/icon-twitter.svg";
import verticalLine from "../assets/icons/vertical-line.svg";
import heritage from "../assets/about/desktop/image-heritage.jpg";

const About = () => {
  return (
    <div>
      {/* hero */}
      <section className="mt-[96px] mb-[76px] md:mt-0 md:mb-[200px]">
        {/* page tag */}
        <div className="hidden md:flex absolute top-0 left-[5%] flex-col items-center justify-center z-20 ">
          <img src={verticalLine} alt="vertical line" className="w-[1px] h-[104px] object-contain" />
          <span className="text-lightGrey paragraph tracking-[18px] tag mt-12">ABOUT</span>
        </div>
        <div className="md:px-[13%] relative">
          <picture className="mb-[-45px] relative">
            <source media="(max-width: 768px)" srcset={heroMobile} />
            <source media="(max-width: 1280px)" srcset={heroTablet} />
            <source media="(min-width: 1281px)" srcset={heroDesktop} />
            <img src={heroMobile} alt="team image" className="w-full h-full object-contain xl:w-[635px]" />
            <div className="absolute bg-black/[0.35] w-full h-full top-0 left-0 right-0 bottom-0 xl:w-[635px]" />
          </picture>

          <div className="bg-white pt-[65px] w-[92%] mt-[-45px] px-[5%] relative md:pl-[58px] md:pr-0 md:absolute md:bottom-0 md:w-[67%] md:ml-[7%] xl:w-1/2 xl:right-[13%] xl:ml-0 xl:pl-[182px]">
            <span className="hidden md:block text-[150px] leading-[200px] tracking-[-3px] font-spartan text-veryLightGrey font-bold mb-[47px] mt-[-150px] text-right xl:text-[250px] xl:tracking-[-5px] xl:z-10 xl:absolute xl:right-0">
              About
            </span>
            <img src={line} alt="line" className="hidden xl:block mb-[58px] mt-[110px]" />
            <h1 className="heading2 mb-[21px] md:mb-[38px] xl:mb-[49px]">
              Your team of <br />
              professionals
            </h1>
            <p className="paragraph">
              Our small team of world-class professionals will work with you every step of the way. Strong relationships are at the core of everything we do. This extends to the
              relationship our projects have with their surroundings.
            </p>
          </div>
        </div>
      </section>

      {/* our heritage */}
      <section className="mb-[112px] md:mb-[207px]">
        <div className="px-[5%] md:px-[13%] xl:flex xl:justify-between xl:items-start">
          <div className="xl:mr-[120px] xl:w-1/2">
            <img src={line} alt="line" className="" />
            <h2 className="heading2 mt-[68px] mb-[22px] md:mt-[49px] md:mb-[62px] xl:mt-[82px] xl:mb-[51px]">
              Our <br />
              Heritage
            </h2>
            <p className="paragraph text-darkGrey">
              Founded in 2007, we started as a trio of architects. Our complimentary skills and relentless attention to detail turned Arch into one of the most sought after
              boutique firms in the country. <br />
              <br />
              Specializing in Urban Design allowed us to focus on creating exceptional structures that live in harmony with their surroundings. We consider every detail from every
              surrounding element to inform our designs. <br />
              <br />
              Our small team of world-class professionals provides input on every project.
            </p>
          </div>

          <div className="xl:w-1/2">
            <img src={heritage} alt="our heritage" className="hidden xl:block w-[540px] h-full object-contain" />
          </div>
        </div>
      </section>

      {/* the leaders */}
      <section className="mb-[111px] md:mb-[239px] xl:mb-[159px]">
        <div className="px-[5%] md:px-[13%] xl:flex xl:items-start xl:justify-between">
          <h2 className="heading2 mb-[55px] md:mb-[49px] xl:mr-[120px]">
            The <br />
            Leaders
          </h2>
          <div className="space-y-20 md:grid md:grid-cols-2 md:space-y-0 md:gap-x-[11px] md:gap-y-[103px] xl:gap-x-[30px] xl:gap-y-[63px]">
            {/* Jake Richards */}
            <div>
              <div className="relative group overflow-hidden">
                <img src={jake} alt="Jake Richards" className="w-full object-cover object-center" />
                {/* overlay */}
                <div className="opacity-0 absolute inset-0 transition-opacity duration-300 group-hover:opacity-100 bg-black/50 w-full h-full top-0 left-0 right-0 bottom-0 cursor-default flex justify-center items-center space-x-8">
                  <a href="/">
                    <img src={linkedin} alt="linkedin" className="cursor-pointer hover:scale-105" />
                  </a>
                  <a href="/">
                    <img src={twitter} alt="twitter" className="cursor-pointer hover:scale-105" />
                  </a>
                </div>
              </div>

              <h3 className="heading3 text-darkBlue mt-[15px]">Jake Richards</h3>
              <p className="paragraph">Chief Architect</p>
            </div>

            {/* Thompson Smith */}
            <div>
              <div className="relative group overflow-hidden">
                <img src={thompson} alt="Thompson Smith" className="w-full object-cover object-center" />
                {/* overlay */}
                <div className="opacity-0 absolute inset-0 transition-opacity duration-300 group-hover:opacity-100 bg-black/50 w-full h-full top-0 left-0 right-0 bottom-0 cursor-default flex justify-center items-center space-x-8">
                  <a href="/">
                    <img src={linkedin} alt="linkedin" className="cursor-pointer hover:scale-105" />
                  </a>
                  <a href="/">
                    <img src={twitter} alt="twitter" className="cursor-pointer hover:scale-105" />
                  </a>
                </div>
              </div>

              <h3 className="heading3 text-darkBlue mt-[15px]">Thompson Smith</h3>
              <p className="paragraph">Head of Finance</p>
            </div>

            {/* Jackson Rourke */}
            <div>
              <div className="relative group overflow-hidden">
                <img src={jackson} alt="Jackson Rourke" className="w-full object-cover object-center" />
                {/* overlay */}
                <div className="opacity-0 absolute inset-0 transition-opacity duration-300 group-hover:opacity-100 bg-black/50 w-full h-full top-0 left-0 right-0 bottom-0 cursor-default flex justify-center items-center space-x-8">
                  <a href="/">
                    <img src={linkedin} alt="linkedin" className="cursor-pointer hover:scale-105" />
                  </a>
                  <a href="/">
                    <img src={twitter} alt="twitter" className="cursor-pointer hover:scale-105" />
                  </a>
                </div>
              </div>

              <h3 className="heading3 text-darkBlue mt-[15px]">Jackson Rourke</h3>
              <p className="paragraph">Lead Designer</p>
            </div>

            {/* Maria Simpson*/}
            <div>
              <div className="relative group overflow-hidden">
                <img src={maria} alt="Maria Simpson" className="w-full object-cover object-center" />
                {/* overlay */}
                <div className="opacity-0 absolute inset-0 transition-opacity duration-300 group-hover:opacity-100 bg-black/50 w-full h-full top-0 left-0 right-0 bottom-0 cursor-default flex justify-center items-center space-x-8">
                  <a href="/">
                    <img src={linkedin} alt="linkedin" className="cursor-pointer hover:scale-105" />
                  </a>
                  <a href="/">
                    <img src={twitter} alt="twitter" className="cursor-pointer hover:scale-105" />
                  </a>
                </div>
              </div>

              <h3 className="heading3 text-darkBlue mt-[15px]">Maria Simpson</h3>
              <p className="paragraph">Senior Architect</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
