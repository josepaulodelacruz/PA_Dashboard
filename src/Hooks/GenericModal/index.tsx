import { create } from 'zustand'
import Modal from '@/Types/Modal'

const useGenericModal = create<Modal>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}))


export default useGenericModal 

