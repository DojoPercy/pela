"use client";
import Image from "next/image";
import EmblaCarousel from "./_components/EmblaSliders";
import { EmblaOptionsType } from "embla-carousel";
import AnimatedSection from "./_components/gsapAnime";
import Header from "./_components/header";
import { ParallaxProvider } from "react-scroll-parallax";
import MarqueeComp from "@/components/Marquee";
import About from "./_components/About";



export default function Home() {
  return (
    <ParallaxProvider>
    <main className="flex flex-col justify-start items-start w-full overflow-hidden ">
     <Header />
  <MarqueeComp/>
    <About />
    </main>
    </ParallaxProvider>
  );
}
