import { create } from 'zustand'

interface ToggleDrawer {
  isOpen: boolean,
  isToggled: () => void,
  isClosed: () => void,
}

const useToggleDrawer = create<ToggleDrawer>((set, get) => ({
  isOpen: true,
  isToggled: () => {
    const _isOpen = get().isOpen;
    set({ isOpen: !_isOpen })
    console.log(get().isOpen)
  },
  isClosed: () => {
    set({ isOpen: false })
  }
})) 


export default useToggleDrawer
