import React from 'react';

import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css"; 


const MarqueeComp  = () => {
  return (
    <div className=''>
      <h2 className='font-manrope px-5 py-5 text-lg lg:text-2xl text-black font-bold'>
        Top Companies 
      </h2>
        <Marquee fade={true} pauseOnHover={true}>
           <img src="/em.png" alt="placeholder" className=' w-44'/>
           <img src="/jp.png" alt="placeholder" className=' w-44'/>
           <img src="/VAURSE LOGO.png" alt="placeholder" className=' w-44'/>
           <img src="/em.png" alt="placeholder" className=' w-44'/>
           <img src="/jp.png" alt="placeholder" className=' w-44'/>
           <img src="/VAURSE LOGO.png" alt="placeholder" className=' w-44'/>
        </Marquee>
    </div>
  )
}

export default MarqueeComp