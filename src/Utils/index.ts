import { RefObject, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface ScrollToTopProps {
  scrollRef: RefObject<HTMLElement>
}

const ScrollToTop = ({ scrollRef }: ScrollToTopProps) => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pathname, scrollRef]);

  return null;
};

export {
  ScrollToTop
}

