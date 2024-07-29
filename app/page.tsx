"use client";
import Image from "next/image";
import EmblaCarousel from "./_components/EmblaSliders";
import { EmblaOptionsType } from "embla-carousel";
import AnimatedSection from "./_components/gsapAnime";
import Header from "./_components/header";
import { ParallaxProvider } from "react-scroll-parallax";


const OPTIONS: EmblaOptionsType = { loop: true, duration: 100 };
export default function Home() {
  return (
    <ParallaxProvider>
    <main className="flex flex-col justify-start items-start w-full overflow-hidden ">
     <Header />
      <div className="h-[100vh]">

      </div>
    </main>
    </ParallaxProvider>
  );
}
