import React from 'react';
import TextTransition, { presets } from 'react-text-transition';

interface TextSliderProps {
    TEXTS: [string, string];
}

const TextSlider: React.FC<TextSliderProps> = ({ TEXTS }) => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      5000, // every 5 seconds
    );
    return () => clearInterval(intervalId);
  }, []);

  return (
    <TextTransition springConfig={presets.stiff} inline={true}>
      <div
        key={index}
        className="text-[1.8rem] lg:text-[5.5rem] bg-gradient-to-r-custom bg-clip-text lg:mb-10 text-fill-transparent font-urban font-black"
      >
        {TEXTS[index % TEXTS.length]}
      </div>
    </TextTransition>
  );
};

export default TextSlider;
