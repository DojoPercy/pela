import React from 'react';

import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css"; 


const MarqueeComp  = () => {
  return (
    <div className=''>
      <h2 className='font-manrope px-5 py-5 text-lg lg:text-2xl text-black font-bold'>
        Top Companies 
      </h2>
        <Marquee fade={true} className='flex justify-center items-center  py-10'>
           <div className='flex justify-center items-centers space-x-0'>
           <img src="/em.png" alt="placeholder" className='lg:h-14 h-14 scale-75   object-cover'/>
           <img src="/jp.png" alt="placeholder" className='lg:h-14 h-14 scale-75   object-cover'/>
           <img src="/VAURSE LOGO.png" alt="placeholder" className='lg:h-14 h-14 scale-75    object-cover'/>
           <img src="/em.png" alt="placeholder" className='lg:h-14 h-14 scale-75   object-cover'/>
           <img src="/jp.png" alt="placeholder" className='lg:h-14 h-14 scale-75   object-cover'/>
           <img src="/VAURSE LOGO.png" alt="placeholder" className=' lg:h-14 h-14 scale-75   object-cover'/>
           </div>
        </Marquee>
    </div>
  )
}

export default MarqueeComp