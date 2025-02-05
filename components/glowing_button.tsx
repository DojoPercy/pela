import React from 'react';

interface GlowingButtonProps {
  backgroundColor: 'bg-blueish' | 'bg-white';
  text: string;
  textColor: 'text-white' | 'text-black';
}

const GlowingButton: React.FC<GlowingButtonProps> = ({ backgroundColor, text, textColor }) => {
  return (
    <button className={`relative h-10 px-10 py-0 ${backgroundColor}    ${textColor} font-bold rounded-lg group`}>
      <span className="absolute h-10 inset-0 border-2 border-transparent rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"
        style={{
          borderImage: 'linear-gradient(to right, #5B714C, #F27038) 1',
        }}
      ></span>
      <span className="relative">{text}</span>
    </button>
  );
}

export default GlowingButton;
