import heroMobile from "../assets/contact/mobile/image-hero.jpg";
import heroTablet from "../assets/contact/tablet/image-hero.jpg";
import heroDesktop from "../assets/contact/desktop/image-hero.jpg";
import mapsMobile from "../assets/contact/mobile/image-map.png";
import mapsTablet from "../assets/contact/tablet/image-map.png";
import mapsDesktop from "../assets/contact/desktop/image-map.png";
import line from "../assets/icons/line.svg";
import verticalLine from "../assets/icons/vertical-line.svg";
import arrow from "../assets/icons/icon-arrow.svg";
import greyArrow from "../assets/icons/icon-grey-arrow.svg";
import { useState } from "react";
import validator from "validator";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameEmpty, setNameEmpty] = useState(true);
  const [emailEmpty, setEmailEmpty] = useState(true);
  const [messageEmpty, setMessageEmpty] = useState(true);
  const [emailValid, setEmailValid] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name == "" || name == null) {
      setNameEmpty(false);
    }
    if (email == "" || email == null) {
      setEmailEmpty(false);
    }
    if (message == "" || message == null) {
      setMessageEmpty(false);
    }
    if (!validator.isEmail(email)) {
      setEmailValid(false);
    }
    if ((!name == "" || name == null) && (!email == "" || email == null) && (!message == "" || message == null) && validator.isEmail(email)) {
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <div>
      {/* hero */}
      <section className="mt-[96px] mb-[76px] md:mt-0 md:mb-[200px] xl:mb-[274px]">
        {/* page tag */}
        <div className="hidden md:flex absolute top-0 left-[5%] flex-col items-center justify-center z-20 ">
          <img src={verticalLine} alt="vertical line" className="w-[1px] h-[104px] object-contain" />
          <span className="text-lightGrey paragraph tracking-[18px] tag mt-12">CONTACT</span>
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
              Contact
            </span>
            <img src={line} alt="line" className="hidden md:block mb-[73px] xl:mt-[120px]" />
            <h1 className="heading2 mb-[21px] md:mb-[38px] xl:mb-[49px]">
              Tell us about <br />
              your project
            </h1>
            <p className="paragraph">
              We’d love to hear more about your project. Please, leave a message below or give us a call. We have two offices, one in Texas and one in Tennessee. If you find
              yourself nearby, come say hello!
            </p>
          </div>
        </div>
      </section>

      {/* contact details */}
      <section className="mb-[71px] md:mb-[226px] xl:mb-[200px]">
        <div className="px-[5%] md:px-[13%] xl:flex xl:justify-start xl:items-start xl:space-x-[120px]">
          <div>
            <img src={line} alt="line" className="" />
            <h2 className="heading2 mt-[68px] mb-10 md:mt-[49px] md:mb-[42px] xl:mt-[82px] xl:mb-[51px]">
              Contact <br />
              Details
            </h2>
          </div>

          <div className="space-y-10 md:space-y-[43px] xl:flex xl:justify-end xl:items-start xl:space-y-0 xl:space-x-[30px] xl:mt-[73px]">
            <div className="md:flex md:justify-between md:items-end xl:flex-col xl:justify-normal xl:items-start">
              <div>
                <p className="text-[18px] leading-[35px] text-darkGrey font-bold">Main Office</p>
                <p className="paragraph mt-[14px] mb-[43px] md:mb-0 xl:mb-[59px]">
                  Mail : archone@mail.com <br />
                  Address : 1892 Chenoweth Drive TN <br />
                  Phone : 123-456-3451
                </p>
              </div>

              <a href="/contact" className="inline-flex items-center text-[18px] leading-[25px] text-darkBlue font-bold">
                View on Map <img src={greyArrow} alt="arrow" className="w-6 h-[18px] ml-6" />
              </a>
            </div>

            <div className="md:flex md:justify-between md:items-end xl:flex-col xl:justify-normal xl:items-start">
              <div>
                <p className="text-[18px] leading-[35px] text-darkGrey font-bold">Office II</p>
                <p className="paragraph mt-[14px] mb-[43px] md:mb-0 xl:mb-[59px]">
                  Mail : archtwo@mail.com
                  <br />
                  Address : 3399 Wines Lane TX
                  <br />
                  Phone : 832-123-4321
                </p>
              </div>

              <a href="/contact" className="inline-flex items-center text-[18px] leading-[25px] text-darkBlue font-bold hover:underline">
                View on Map <img src={greyArrow} alt="arrow" className="w-6 h-[18px] ml-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* maps */}
      <section className="md:px-[13%]">
        <picture className="">
          <source media="(max-width: 768px)" srcset={mapsMobile} />
          <source media="(max-width: 1280px)" srcset={mapsTablet} />
          <source media="(min-width: 1281px)" srcset={mapsDesktop} />
          <img src={mapsMobile} alt="map image" className="w-full h-full object-contain" />
          <div className=" w-full h-full object-contain" />
        </picture>
      </section>

      {/* connect with us */}
      <section className="mt-[73px] mb-[152px] md:mt-[200px] md:mb-[280px] xl:mt-[159px] xl:mb-[240px]">
        <div className="px-[5%] md:px-[13%] xl:flex xl:justify-between xl:items-start">
          <h2 className="heading2 mb-[42px] md:mb-[62px] xl:mb-0">
            Connect <br className="md:hidden xl:block" />
            with us
          </h2>

          <form id="form-contact" className="group xl:w-[730px] xl:ml-[120px]">
            <div className="form-input">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                required
                onFocus={() => setNameEmpty(true)}
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`${nameEmpty ? "" : "border-lightRed placeholder:text-lightRed/50"}`}
              />
              <span className={`${!nameEmpty ? "block" : "hidden"} error`}>Can't be empty</span>
            </div>

            <div className="form-input">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                required
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                onFocus={() => {
                  setEmailEmpty(true);
                  setEmailValid(true);
                }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`${emailEmpty || emailValid ? "" : "border-lightRed placeholder:text-lightRed/50"}`}
              />
              <span className={`${!emailValid ? "block" : "hidden"} error`}>Required</span>
            </div>

            <div className="form-input">
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="2"
                placeholder="Message"
                required
                onFocus={() => setMessageEmpty(true)}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={`${messageEmpty ? "" : "border-lightRed placeholder:text-lightRed/50"} peer resize-none`}
              ></textarea>
              <span className={`${!messageEmpty ? "block" : "hidden"} error`}>Can't be empty</span>
            </div>

            <button
              type="submit"
              name="submit"
              id="submit"
              form="form-contact"
              className="bg-darkBlue border-none cursor-pointer group-invalid:bg-darkGrey w-20 h-20 float-right mt-[-10px]"
              onClick={handleSubmit}
            >
              <img src={arrow} alt="arrow" className="w-full h-[18px] object-contain object-center" />
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
