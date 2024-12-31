import { create } from 'zustand'

interface UseScrollProps {
  isScrolled: boolean,
  onScroll: (scrollState: boolean) => void,
  userScrolled: boolean,
  userScrolledToBottom: boolean,
  onTriggeredScrolling: () => void,
  onTiggeredScrollToBottomReset: () => void,
}

const useScroll = create<UseScrollProps>((set, get) => ({
  userScrolled: false,
  userScrolledToBottom: false,
  isScrolled: false,
  onScroll: (scrollState) => {
    set({ isScrolled: scrollState })
  },
  onTriggeredScrolling: () => {
    let a  = get().userScrolled
    set({ userScrolled: !a })
  },
  onTriggeredScrollingToBottom: () => {
    set({ userScrolledToBottom: true })
  },
  onTiggeredScrollToBottomReset: () => {
    set({ userScrolledToBottom: false })
  }
})) 


export default useScroll 
