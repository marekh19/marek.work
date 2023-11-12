import { create } from 'zustand'

type MenuState = {
  isOpen: boolean
  toggleOpen: () => void
  close: () => void
}

export const useMobileMenuStore = create<MenuState>()(set => ({
  isOpen: false,
  toggleOpen: () => set(state => ({ isOpen: !state.isOpen })),
  close: () => set({ isOpen: false }),
}))
