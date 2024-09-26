import { create } from 'zustand'

interface UseScrollProps {
  isScrolled: boolean,
  onScroll: (scrollState: boolean) => void,
  userScrolled: boolean,
  onTriggeredScrolling: () => void,
}

const useScroll = create<UseScrollProps>((set, get) => ({
  userScrolled: false,
  isScrolled: false,
  onScroll: (scrollState) => {
    set({ isScrolled: scrollState })
  },
  onTriggeredScrolling: () => {
    let a  = get().userScrolled
    set({ userScrolled: !a })
  }
})) 


export default useScroll 
