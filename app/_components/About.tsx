import React from 'react'

const About = () => {
    const getCurrentYear = (): number => {
        return new Date().getFullYear();
      };
       const year = getCurrentYear().toString();
  return (
    <div className='px-20 py-10 bg-lightGray w-full '>
        <span className='text-2xl leading-[2rem] bg-gradient-to-t font-manrope '>
            <strong>#Pela {year}</strong>, top-level energy leadership C-level leadership conference and awards developed by The Governance & Business Boardroom and The Boardroom Magazine. This prestigious program is dedicated to honouring individuals and organizations who are leading the way in shaping the future of the energy sector.
        </span>
    </div>
  )
}

export default About