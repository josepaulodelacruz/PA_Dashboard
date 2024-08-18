import { create } from 'zustand'

interface useSearchNavbarProps {
  search?: string,
  onSearch: (v: string) => void,
  onReset: () => void
}

const useSearchNavbar = create<useSearchNavbarProps>((set) => ({
  search: '',
  onSearch: (v) => {
    set({ search: v })
  },
  onReset: () => {
    set({ search: ''})
  }
})) 


export default useSearchNavbar 

