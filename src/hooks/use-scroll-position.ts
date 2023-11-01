import { useEffect, useState } from 'react';

function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollPrecentage, setScrollPrecentage] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPrecentage((position / window.innerHeight) * 100);
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return {scrollPosition, scrollPrecentage};
}

export default useScrollPosition;
