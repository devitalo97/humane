import { useState, useEffect } from 'react';

interface Props {
  components: React.ReactNode[];
}

const useCarousel = ({ components }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % components.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + components.length) % components.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return {
    currentIndex,
    handleNext,
    handlePrev,
  };
};

export default useCarousel;
