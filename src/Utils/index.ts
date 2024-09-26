import { RefObject, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import useScroll from '@/Hooks/useScroll';

interface ScrollToTopProps {
  scrollRef: RefObject<HTMLElement>
}

const ScrollToTop = ({ scrollRef }: ScrollToTopProps) => {
  const { pathname } = useLocation();
  const { userScrolled } = useScroll()

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pathname, scrollRef, userScrolled]);

  return null;
};

const globalSnackbar = ({ 
  message,
  variant
} : { 
  message: string,
  variant: 'default' | 'error' | 'success' | 'warning' | 'info'
}) => {
  const { enqueueSnackbar } = useSnackbar()

  enqueueSnackbar(message, {
    variant: variant,
    anchorOrigin: {
      horizontal: 'right',
      vertical: 'bottom',
    },
  })


}

export {
  ScrollToTop,
  globalSnackbar
}

