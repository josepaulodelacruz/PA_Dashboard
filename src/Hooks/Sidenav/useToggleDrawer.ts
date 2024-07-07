import { create } from 'zustand'

interface ToggleDrawer {
  isOpen: boolean,
  isToggled: () => void,
}

const useToggleDrawer = create<ToggleDrawer>((set, get) => ({
  isOpen: true,
  isToggled: () => {
    const _isOpen = get().isOpen;
    set({ isOpen: !_isOpen })
  },
})) 


export default useToggleDrawer
