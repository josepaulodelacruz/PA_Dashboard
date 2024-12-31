import { RefObject, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import useScroll from '@/Hooks/useScroll';
import { useNavigate } from 'react-router-dom';
import { flushSync } from 'react-dom';

// Custom hook to handle view transitions
const useViewTransition = () => {
  const navigate = useNavigate();

  const navigateWithTransition = async (to: string) => {
    if (!document.startViewTransition) {
      navigate(to);
      return;
    }

    console.log(document.startViewTransition)

    document.startViewTransition(() => {
      flushSync(() => {
        navigate(to);
      })
    });
  };

  return { navigateWithTransition };
};

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

interface ScrollToBottomProps {
  scrollRef: RefObject<HTMLElement>
}

const ScrollToBottom = ({ scrollRef }: ScrollToBottomProps) => {
  const { userScrolledToBottom, onTiggeredScrollToBottomReset } = useScroll()

  useEffect(() => {
    if (userScrolledToBottom && scrollRef.current) {
      scrollRef.current.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }
    onTiggeredScrollToBottomReset()
  }, [scrollRef, userScrolledToBottom]);

  return null;
}

const globalSnackbar = ({
  message,
  variant
}: {
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
  ScrollToBottom,
  globalSnackbar,
  useViewTransition
}

