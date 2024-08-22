import { create } from 'zustand'

interface UseScrollProps {
  isScrolled: boolean,
  onScroll: (scrollState: boolean) => void,
}

const useScroll = create<UseScrollProps>((set) => ({
  isScrolled: false,
  onScroll: (scrollState) => {
    set({ isScrolled: scrollState })
  }
})) 


export default useScroll 
