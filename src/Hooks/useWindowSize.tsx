import { useState, useEffect } from 'react';

type CurrentWindowSize = {
  width: number;
  height: number;
};

export default function useWindowSize(): CurrentWindowSize {
  const [windowSize, setWindowSize] = useState<CurrentWindowSize>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  function changeWindowSize(): void {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  }

  useEffect(() => {
    window.addEventListener('resize', changeWindowSize);

    return () => {
      window.removeEventListener('resize', changeWindowSize);
    };
  }, []);

  return windowSize;
}
