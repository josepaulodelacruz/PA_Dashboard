import { create } from 'zustand'
import Modal from '@/Types/Modal'

const useTestModal = create<Modal>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}))


export default useTestModal

