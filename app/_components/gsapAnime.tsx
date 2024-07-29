"use client";
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaCircleCheck } from 'react-icons/fa6';

gsap.registerPlugin(ScrollTrigger);

const AnimatedSection: React.FC = () => {
  useEffect(() => {
    const sections = gsap.utils.toArray('.point');
    sections.forEach((section: any, index: number) => {
      gsap.fromTo(section,
        { opacity: 0, x: -50, scale: 0.9 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1,
          delay: index * 0.3,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "top 30%",
            scrub: true,
            markers: false,
          }
        }
      );
    });

    ScrollTrigger.create({
      trigger: "#pinned-section",
      start: "top top",
      end: "bottom+=3000 top",
      pin: true,
      markers: false,
      pinSpacing: false,
    });
  }, []);

  return (
    <div className="p-6 bg-gradient-to-r from-blue-500 to-indigo-500 min-h-screen">
      <div id="pinned-section" className="bg-white sticky top-0 z-10 p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-extrabold text-gray-800">WHY YOU SHOULD PARTICIPATE AT PELA</h1>
      </div>
      <div className="flex flex-col items-start mt-8 space-y-16 w-full lg:w-3/4 mx-auto">
        <div id="point1" className="point flex items-center space-x-4 bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <div className="flex items-center justify-center w-12 h-12 bg-green-500 text-white rounded-full text-2xl">
            <FaCircleCheck />
          </div>
          <p className="text-xl font-semibold text-gray-800">Recognition at Leading Energy Sector Focused B2B Platform</p>
        </div>
        <div id="point2" className="point flex items-center space-x-4 bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <div className="flex items-center justify-center w-12 h-12 bg-green-500 text-white rounded-full text-2xl">
            <FaCircleCheck />
          </div>
          <p className="text-xl font-semibold text-gray-800">
            Build new partnerships with industries in smart solutions, renewable & clean energy, energy storage, green hydrogen, transmission & distribution, critical & backup power, energy consumption, and diversify your energy mix
          </p>
        </div>
        <div id="point3" className="point flex items-center space-x-4 bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <div className="flex items-center justify-center w-12 h-12 bg-green-500 text-white rounded-full text-2xl">
            <FaCircleCheck />
          </div>
          <p className="text-xl font-semibold text-gray-800">
            Learn more about trending energy solutions and connect with companies that will maximise the value of your energy project
          </p>
        </div>
        <div id="point4" className="point flex items-center space-x-4 bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <div className="flex items-center justify-center w-12 h-12 bg-green-500 text-white rounded-full text-2xl">
            <FaCircleCheck />
          </div>
          <p className="text-xl font-semibold text-gray-800">
            Encourage innovation and excellence within your organization by celebrating and learning from industry trailblazers
          </p>
        </div>
      </div>
    </div>
  );
};

export default AnimatedSection;
