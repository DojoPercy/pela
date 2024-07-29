"use client";
import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay, { AutoplayOptionsType } from 'embla-carousel-autoplay'
import Fade from 'embla-carousel-fade'
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from './EmblaCauouselArrows'


type PropType = {
  slides: string[]
  options?: EmblaOptionsType
}


const autoplayOptions: AutoplayOptionsType = {
    delay: 25000 
  }
const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Fade(), Autoplay(autoplayOptions)])

 

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <div className="relative w-full overflow-hidden h-full mx-auto ">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y -ml-4 h-[100vh]">
          {slides.map((item ,index) => (
            <div className="flex-none w-full h-full" key={index}>
              <img
                className="h-full w-full object-cover"
                src={`${item}`}
                alt="sliders"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="w-full h-full flex flex-col top-0 right-0 absolute justify-start items-center z-10 bg-gradient-to-t from-white/35 to-transparent backdrop-blur-[1px] ">

</div>

      <div className="w-full h-full flex flex-col top-0 right-0 absolute justify-start items-center z-20">
        <div className='bg-gray-200 w-[98%] h-32 mt-2 mx-auto rounded-t-sm '>
          <div className='flex flex-row justify-between w-full h-full '>
            <img src='/logo.png' className='object-cover scale-[0.60]' alt='logo' />
            <div>
            <div className='flex flex-col justify-center items-center h-full mr-10 space-y-1'>
               
                   <a href={""} className='px-5 py-2 rounded-sm bg-customGreen hover:border hover:text-black hover:border-black hover:bg-white text-white'>
                    Attend as a Vistor
                   </a>
                   <a href={""} className='px-5 py-2 rounded-sm bg-white border border-black  text-black'>
                    Register as a Delegate
                   </a>

              
            </div>
          </div>
          </div>
          
        </div>
        <div className='flex justify-start items-start mt-20 flex-col w-full lg:px-36 px-10'>
        <div>
            <h1 className='text-2xl  text-white font-extrabold'>
            MIDDLE EAST & AFRICA
            </h1>
            <h1 className='text-[4rem] text-white font-extrabold'>
            
Premier Energy Leadership
Awards 2024|
            </h1>
            <p className='text-sm text-gray-300 font-medium'>Recognising the changemakers transforming the energy industry Powered by The Governance & Business Boardroom.</p>
        </div>
        </div>

      </div>
      <div className="absolute bottom-4 right-4 flex space-x-2 opacity-75 z-20">
        <PrevButton
          onClick={onPrevButtonClick}
          disabled={prevBtnDisabled}
          className="w-8 h-8 bg-gray-800 text-white rounded-full flex items-center justify-center opacity-75 hover:opacity-100"
        />
        <NextButton
          onClick={onNextButtonClick}
          disabled={nextBtnDisabled}
          className="w-8 h-8 bg-gray-800 text-white rounded-full flex items-center justify-center opacity-75 hover:opacity-100"
        />
      </div>

    </div>
  )
}

export default EmblaCarousel
