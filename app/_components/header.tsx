"use client";

import GradientCard from "@/components/glowing_button";
import VerticalSlider from "@/components/vertical_prop"; // Import the VerticalSlider component
import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import TextSlider from "./text_transitions";

const Header: React.FC = () => {
  const getCurrentYear = (): number => {
    return new Date().getFullYear();
  };

  const year = getCurrentYear().toString();
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="flex flex-col w-full ">
      <header className=" w-full z-20 font-urban flex flex-col">
        <div className="w-full bg-blueish py-5 px-10 flex justify-between items-center">
          <img src="/logo_white.png" alt="/logo_white" className="w-[10rem] " />
          <div className="hidden lg:block">
            <GradientCard
              backgroundColor="bg-white"
              text={"Book a Table"}
              textColor="text-black"
            />
          </div>
        </div>
        <div className="w-full b-nav px-5 py-2 bg-lightGray hidden lg:block">
          <ul className="flex justify-center items-center space-x-10">
            <li className="text-black font-urban font-semibold">Home</li>
            <li className="text-black font-urban font-semibold">About</li>
            <li className="text-black font-urban font-semibold">Exhibitors</li>
            <li className="text-black font-urban font-semibold">Visitors</li>
            <li className="text-black font-urban font-semibold">Contact</li>
          </ul>
        </div>
      </header>
      <div className="w-full h-[65vh] lg:h-[90vh] relative">
        <ParallaxBanner
          layers={[{ image: "/sliders/slider1.jpg", speed: -5 }]}
          className="aspect-[2/1] h-[65vh] lg:h-[90vh]"
        >
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-t bg-white z-10 opacity-[0.25]"></div>

          <div className="absolute inset-0 flex items-start pt-24  lg:py-28 justify-start lg:justify-start w-full px-2  z-20 lg:px-24">
            <div className="flex flex-col justify-start items-start ">
              <div className="">
                <h2 className="text-slate-200 font-semibold text-sm lg:text-xl">
                  MIDDLE EAST & AFRICA
                </h2>
                <h1 className="text-[1.8rem] lg:text-[5.5rem] text-white z-20 font-urban h-full w-[100%] whitespace-nowrap font-[900] relative leading-[1]">
                  Attend The Premier
                  <br /> Energy Leadership
                  <TextSlider TEXTS={[" Conference.", ` Awards ${year}.`]} />
                </h1>
              
              </div>
              <div className="mt-0 lg:mt-10  z-20  lg:mx-5 flex flex-row justify-start space-x-1 lg:space-x-5">
                <div className="flex space-x-1 justify-start ">
                  <div className="w-[0.1rem] h-10 bg-gradient-to-r-custom"></div>
                  <div className="flex flex-col justify-start ">
                    <h4 className="text-white text-2xl  lg:text-3xl">10K</h4>
                    <span className="text-nav text-sm  lg:text-lg">
                      Energy Leaders
                    </span>
                  </div>
                </div>
                <div className="flex space-x-1 justify-start ">
                  <div className="w-[0.1rem] h-10 bg-gradient-to-r-custom"></div>
                  <div className="flex flex-col justify-start ">
                    <h4 className="text-white text-2xl  lg:text-3xl">200</h4>
                    <span className="text-nav text-sm  lg:text-lg">
                      Top Companies
                    </span>
                  </div>
                </div>
                <div className="flex space-x-1 justify-start ">
                  <div className="w-[0.1rem] h-10 bg-gradient-to-r-custom"></div>
                  <div className="flex flex-col justify-start ">
                    <h4 className="text-white text-2xl  lg:text-3xl">$20Bn</h4>
                    <span className="text-nav text-sm  lg:text-lg">
                      Investments
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <GradientCard
                  backgroundColor="bg-blueish"
                  text={"Book a Table"}
                  textColor="text-white"
                />
              </div>
            </div>
          </div>
        </ParallaxBanner>
      </div>
    </div>
  );
};

export default Header;
