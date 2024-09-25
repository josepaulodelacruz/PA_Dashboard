import { create } from 'zustand'

interface UseScrollProps {
  isScrolled: boolean,
  onScroll: (scrollState: boolean) => void,
  triggeredScrolling: () => void,
}

const useScroll = create<UseScrollProps>((set) => ({
  isScrolled: false,
  onScroll: (scrollState) => {
    set({ isScrolled: scrollState })
  },
  triggeredScrolling: () => {
    console.log('triggered scrolling');
  }
})) 


export default useScroll 
