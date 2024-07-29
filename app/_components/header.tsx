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
    <div className="w-full h-[60vh] lg:h-[100vh] relative">
      <ParallaxBanner
        layers={[{ image: "/sliders/slider1.jpg", speed: -20 }]}
        className="aspect-[2/1] h-[75vh] lg:h-[100vh]"
      >
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-darkGray to-lightGray z-10 opacity-20"></div>
        <header className="absolute top-0 right-0 w-full z-20 font-manrope flex flex-col">
          <div className="w-full bg-bgColor py-5 px-5 flex justify-between items-center">
            <img src="/logo.png" alt="/logo" className="w-[10rem]" />
            <div className="hidden lg:block">
            <GradientCard backgroundColor="bg-white" text={"Book a Table"} />
            </div>
          </div>
          <div className="w-full b-nav px-5 py-2 bg-nav hidden lg:block">
            <ul className="flex justify-center items-center space-x-10">
              <li className="text-black font-manrope font-semibold">Home</li>
              <li className="text-black font-manrope font-semibold">About</li>
              <li className="text-black font-manrope font-semibold">
                Exhibitors
              </li>
              <li className="text-black font-manrope font-semibold">
                Visitors
              </li>
              <li className="text-black font-manrope font-semibold">Contact</li>
            </ul>
          </div>
        </header>
        <div className="absolute inset-0 flex items-center justify-start w-full px-5 lg:px-24">
          <div className="flex flex-col justify-start items-start lg:mt-20">
          <div>
          <span className="text-[1.2rem] flex-wrap lg:text-[3.5rem] text-white z-20 font-manrope font-[600] leading-[6rem] h-full w-[80%]">
            
            </span>
            <TextSlider TEXTS={['CONFERENCE', 'EXHIBITION', `AWARDS ${year}`]} />
          </div>
            <div className=" mt-24 mx-5 lg:mx-5 flex flex-row justify-start space-x-3 lg:space-x-10">
              <div className="flex space-x-1 justify-start ">
                <div className="w-[0.1rem] h-10 bg-gradient-to-r-custom"></div>
                <div className="flex flex-col justify-start ">
                  <h4 className="text-white text-3xl">10K</h4>
                  <span className="text-bgColor text-lg">Energy Leaders</span>
                </div>
              </div>
              <div className="flex space-x-1 justify-start ">
                <div className="w-[0.1rem] h-10 bg-gradient-to-r-custom"></div>
                <div className="flex flex-col justify-start ">
                  <h4 className="text-white text-3xl">200</h4>
                  <span className="text-bgColor text-lg">Top Companies</span>
                </div>
              </div>
              <div className="flex space-x-1 justify-start ">
                <div className="w-[0.1rem] h-10 bg-gradient-to-r-custom"></div>
                <div className="flex flex-col justify-start ">
                  <h4 className="text-white text-3xl">$20Bn</h4>
                  <span className="text-bgColor text-lg">Investments</span>
                </div>
              </div>
              
            </div>
            <div className="mt-10">
            <GradientCard backgroundColor="bg-customGreen" text={"Book a Table"} />
            </div>
          </div>
        </div>
      </ParallaxBanner>
    </div>
  );
};

export default Header;
