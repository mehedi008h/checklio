import { create } from "zustand";

type ModalStore = {
    isOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
    toggleModal: () => void;
    // Optional: Add modal content/context
    modalContent: React.ReactNode | null;
    setModalContent: (content: React.ReactNode) => void;
};

export const useModalStore = create<ModalStore>((set) => ({
    isOpen: false,
    modalContent: null,

    openModal: () => set({ isOpen: true }),
    closeModal: () => set({ isOpen: false }),
    toggleModal: () => set((state) => ({ isOpen: !state.isOpen })),

    setModalContent: (content) => set({ modalContent: content }),
}));
