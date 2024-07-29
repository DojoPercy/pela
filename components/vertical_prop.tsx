import React, { useEffect, useState } from 'react';

interface VerticalSliderProps {
  words: string[];
  duration?: number;
}

const VerticalSlider: React.FC<VerticalSliderProps> = ({ words, duration = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);

    return () => clearInterval(interval);
  }, [words.length, duration]);

  return (
    
    <div className="relative h-[3rem] w-[70vw] overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full flex flex-col transition-transform duration-1000"
        style={{
          transform: `translateY(-${currentIndex * 100}%)`,
          height: `${words.length * 3}rem`, // Adjust this if needed
        }}
      >
        {words.map((word, index) => (
           
          <div
            key={index}
            className="text-[1.5rem] lg:text-[3.5rem] bg-gradient-to-r-custom bg-clip-text text-fill-transparent font-manrope font-[600] lg:leading-[6rem] leading-[3rem]"
          >
            {word}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerticalSlider;
