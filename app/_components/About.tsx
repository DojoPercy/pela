import React, { useEffect, useRef, useState } from 'react';


const About = () => {
  const getCurrentYear = (): number => {
    return new Date().getFullYear();
  };
  const year = getCurrentYear().toString();
  const text = `#Pela ${year}, top-level energy leadership C-level leadership conference and awards developed by The Governance & Business Boardroom and The Boardroom Magazine. This prestigious program is dedicated to honouring individuals and organizations who are leading the way in shaping the future of the energy sector.`;

  const [isInView, setIsInView] = useState(false);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  return (
    <div className='px-20 py-10 bg-secondaryWhite w-full flex space-y-5 lg:flex-row flex-col-reverse justify-center items-center'>
      <span ref={textRef} className='text-xl lg:text-3xl leading-[2rem] bg-gradient-to-t font-manrope font-semibold'>
        {text.split('').map((char, index) => (
          <span
            key={index}
            className={`fade-letter ${isInView ? 'visible' : ''}`}
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            {char}
          </span>
        ))}
      </span>
      <img src="/logo.png" alt="placeholder" className='w-[28rem]' />
    </div>
  );
};

export default About;
