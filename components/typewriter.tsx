import React, { useEffect, useRef, useState } from 'react';

interface TypewriterProps {
  words: string[];
  speed?: number;
}

const Typewriter: React.FC<TypewriterProps> = ({ words, speed = 100 }) => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentWord, setCurrentWord] = useState(words[0]);

  useEffect(() => {
    const handleType = () => {
      setText((prev) => {
        const word = currentWord.substring(0, isDeleting ? prev.length - 1 : prev.length + 1);
        if (isDeleting) {
          if (word === '') {
            setIsDeleting(false);
            setIndex((prev) => (prev + 1) % words.length);
            setCurrentWord(words[(index + 1) % words.length]);
          }
        } else {
          if (word === currentWord) {
            setIsDeleting(true);
          }
        }
        return word;
      });
    };

    const timer = setTimeout(handleType, speed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, currentWord, index, words, speed]);

  return (
    <span className="text-[3.5rem] bg-gradient-to-r-custom bg-clip-text text-fill-transparent font-manrope font-[600] leading-[6rem]">
      {text}
    </span>
  );
};

export default Typewriter;
