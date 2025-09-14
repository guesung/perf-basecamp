import { useEffect, useRef } from 'react';

type ScrollHandler = () => void;

const useScrollEvent = (onScroll: ScrollHandler) => {
  const ticking = useRef(false);

  useEffect(() => {
    let rafID: number | null = null;
    const handleScroll = () => {
      if (!ticking.current) {
        rafID = requestAnimationFrame(() => {
          onScroll();
        });
        ticking.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafID !== null) {
        cancelAnimationFrame(rafID);
      }
    };
  }, [onScroll]);
};

export default useScrollEvent;
