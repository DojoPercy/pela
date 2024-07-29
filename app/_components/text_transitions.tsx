import React from 'react';
import TextTransition, { presets } from 'react-text-transition';

interface TextSliderProps {
    TEXTS: [String, String, String];
}

const TextSlider : React.FC<TextSliderProps> = ({TEXTS}) => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      5000, // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <h1 className="text-[1.2rem] lg:text-[3.5rem] flex-wrap text-white z-20 font-manrope font-[600] h-full w-[70%] flex items-center whitespace-nowrap">
    ATTEND THE PREMIER ENERGY LEADERSHIP
    <TextTransition springConfig={presets.stiff}>
      <div
        key={index}
        className="text-[1.5rem] lg:text-[3.5rem] bg-gradient-to-r-custom bg-clip-text text-fill-transparent font-manrope font-[600] lg:leading-[6rem] leading-[3rem]"
      >
        {TEXTS[index % TEXTS.length]}
      </div>
    </TextTransition>
  </h1>
  );
};

export default TextSlider;