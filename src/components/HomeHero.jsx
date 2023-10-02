import React, { useEffect, useState } from "react";
import arrow from "../assets/icons/icon-arrow.svg";
import "../sass/slider.css";
import verticalLine from "../assets/icons/vertical-line.svg";

const HomeHero = () => {
  return (
    <section className="mt-[96px] text-white md:mt-0">
      {/* page tag */}
      <div className="hidden md:flex absolute top-0 left-[5%] flex-col items-center justify-center z-20 ">
        <img src={verticalLine} alt="vertical line" className="w-[1px] h-[104px] object-contain" />
        <span className="text-lightGrey paragraph tracking-[18px] tag mt-12">HOME</span>
      </div>

      {/* carousel */}
      <div className="relative md:mx-[13%]">
        <div id="carousel" class="carousel slide" data-ride="carousel">
          {/* indicators */}
          <ol class="hidden md:flex carousel-indicators xl:ml-[-80px] xl:justify-start">
            <li data-target="#carousel" data-slide-to="0" class="active">
              01
            </li>
            <li data-target="#carousel" data-slide-to="1">
              02
            </li>
            <li data-target="#carousel" data-slide-to="2">
              03
            </li>
            <li data-target="#carousel" data-slide-to="3">
              04
            </li>
          </ol>

          <div class="carousel-inner">
            {/* project paramour */}
            <div className="carousel-item active home-hero-bg-paramour px-[5%] py-[110px] min-w-full w-full h-[560px] md:h-[720px] md:py-[180px] md:px-[58px] xl:px-[190px]">
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

            {/* seraph station */}
            <div className="carousel-item home-hero-bg-seraph px-[5%] py-[116px] min-w-full h-[560px] md:h-[720px] md:py-[180px] md:px-[58px] xl:px-[190px]">
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

            {/* federal ii tower*/}
            <div className="carousel-item home-hero-bg-federal px-[5%] py-[116px] min-w-full h-[560px] md:h-[720px] md:py-[180px] md:px-[58px] xl:px-[190px]">
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

            {/* trinity bank tower */}
            <div className="carousel-item home-hero-bg-trinity px-[5%] py-[116px] min-w-full h-[560px] md:h-[720px] md:py-[180px] md:px-[58px] xl:px-[190px]">
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
          </div>

          {/* next prev buttons */}
          <a className="carousel-control-prev md:hidden" href="#carousel" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon md:hidden" aria-hidden="true"></span>
          </a>
          <a className="carousel-control-next md:hidden" href="#carousel" role="button" data-slide="next">
            <span className="carousel-control-next-icon md:hidden" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
