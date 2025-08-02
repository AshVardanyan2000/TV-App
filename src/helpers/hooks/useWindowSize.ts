import { useEffect, useState } from 'react';

const useWindowSize = (): { windowWidth: number; windowHeight: number } => {
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [windowHeight, setWindowHeight] = useState<number>(0);

  useEffect(() => {
    const handleScreen = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleScreen);

    handleScreen();

    return () => window.removeEventListener('resize', handleScreen);
  }, []);

  return { windowWidth, windowHeight };
};

export default useWindowSize;
