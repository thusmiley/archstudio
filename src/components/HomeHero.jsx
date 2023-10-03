import React, { useEffect, useState, useRef } from "react";
import arrow from "../assets/icons/icon-arrow.svg";
import verticalLine from "../assets/icons/vertical-line.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import "../sass/carousel.css";

const HomeHero = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <section className="mt-[96px] text-white md:mt-0">
      {/* page tag */}
      <div className="hidden md:flex absolute top-0 left-[5%] flex-col items-center justify-center z-20 ">
        <img src={verticalLine} alt="vertical line" className="w-[1px] h-[104px] object-contain" />
        <span className="text-lightGrey paragraph tracking-[18px] tag mt-12">HOME</span>
      </div>

      {/* carousel */}
      <div className="relative md:mx-[13%] ">
        <Swiper
          pagination={pagination}
          modules={[Autoplay, Pagination]}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          className="mySwiper"
        >
          {/* project paramour */}
          <SwiperSlide>
            <div className="home-hero-bg-paramour px-[5%] py-[110px] min-w-full w-full h-[560px] md:h-[720px] md:py-[180px] md:px-[58px] xl:px-[190px]">
              <h1 className="heading1">
                Project <br />
                Paramour
              </h1>
              <p className="paragraph mt-[11px] mb-[90px] md:mb-[41px] xl:max-w-[445px]">
                Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture.
              </p>
              <a href="/portfolio" className="cta text-white">
                See Our Portfolio <img src={arrow} alt="arrow" className="w-6 h-[18px] ml-6" />
              </a>
            </div>
          </SwiperSlide>

          {/* seraph station */}
          <SwiperSlide>
            <div className="home-hero-bg-seraph px-[5%] py-[116px] min-w-full h-[560px] md:h-[720px] md:py-[180px] md:px-[58px] xl:px-[190px]">
              <h1 className="heading1">
                Seraph <br />
                Station
              </h1>
              <p className="paragraph mt-[11px] mb-[90px] md:mb-[41px] xl:max-w-[445px]">
                The Seraph Station project challenged us to design a unique station that would transport people through time. The result is a fresh and futuristic model inspired by
                space stations.
              </p>
              <a href="/portfolio" className="cta text-white">
                See Our Portfolio <img src={arrow} alt="arrow" className="w-6 h-[18px] ml-6" />
              </a>
            </div>
          </SwiperSlide>

          {/* federal ii tower*/}
          <SwiperSlide>
            <div className="home-hero-bg-federal px-[5%] py-[116px] min-w-full h-[560px] md:h-[720px] md:py-[180px] md:px-[58px] xl:px-[190px]">
              <h1 className="heading1">
                Federal II <br />
                Tower
              </h1>
              <p className="paragraph mt-[11px] mb-[90px] md:mb-[41px] xl:max-w-[445px]">
                A sequel theme project for a tower originally built in the 1800s. We achieved this with a striking look of brutal minimalism with modern touches.
              </p>
              <a href="/portfolio" className="cta text-white">
                See Our Portfolio <img src={arrow} alt="arrow" className="w-6 h-[18px] ml-6" />
              </a>
            </div>
          </SwiperSlide>

          {/* trinity bank tower */}
          <SwiperSlide>
            <div className="home-hero-bg-trinity px-[5%] py-[116px] min-w-full h-[560px] md:h-[720px] md:py-[180px] md:px-[58px] xl:px-[190px]">
              <h1 className="heading1">
                Trinity Bank <br />
                Tower
              </h1>
              <p className="paragraph mt-[11px] mb-[90px] backdrop-blur-sm md:mb-[41px] xl:max-w-[445px]">
                Trinity Bank challenged us to make a concept for a 84 story building located in the middle of a city with a high earthquake frequency. For this project we used
                curves to blend design and stability to meet our objectives.
              </p>
              <a href="/portfolio" className="cta text-white">
                See Our Portfolio <img src={arrow} alt="arrow" className="w-6 h-[18px] ml-6" />
              </a>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default HomeHero;
