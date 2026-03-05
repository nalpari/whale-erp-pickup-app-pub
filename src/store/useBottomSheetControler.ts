import { create } from "zustand";

type BottomSheetControlerState = {
  locationSheet: boolean;
  arraySheet: boolean;
  categorySheet: boolean;
  orderRequestSheet: boolean;
  cardSelectSheet: boolean;
  installmentSheet: boolean;
  addPhotoSheet: boolean;
  setLocationSheet: (isOpen: boolean) => void;
  setArraySheet: (isOpen: boolean) => void;
  setCategorySheet: (isOpen: boolean) => void;
  setOrderRequestSheet: (isOpen: boolean) => void;
  setCardSelectSheet: (isOpen: boolean) => void;
  setInstallmentSheet: (isOpen: boolean) => void;
  setAddPhotoSheet: (isOpen: boolean) => void;
};

type InitialStateType = {
  locationSheet: boolean;
  arraySheet: boolean;
  categorySheet: boolean;
  orderRequestSheet: boolean;
  cardSelectSheet: boolean;
  installmentSheet: boolean;
  addPhotoSheet: boolean;
};

const initialState: InitialStateType = {
  locationSheet: false,
  arraySheet: false,
  categorySheet: false,
  orderRequestSheet: false,
  cardSelectSheet: false,
  installmentSheet: false,
  addPhotoSheet: false,
};

export const useBottomSheetControler = create<BottomSheetControlerState>(
  (set) => ({
    ...initialState,
    setLocationSheet: (isOpen: boolean) =>
      set((state) => ({ ...state, locationSheet: isOpen })),
    setArraySheet: (isOpen: boolean) =>
      set((state) => ({ ...state, arraySheet: isOpen })),
    setCategorySheet: (isOpen: boolean) =>
      set((state) => ({ ...state, categorySheet: isOpen })),
    setOrderRequestSheet: (isOpen: boolean) =>
      set((state) => ({ ...state, orderRequestSheet: isOpen })),
    setCardSelectSheet: (isOpen: boolean) =>
      set((state) => ({ ...state, cardSelectSheet: isOpen })),
    setInstallmentSheet: (isOpen: boolean) =>
      set((state) => ({ ...state, installmentSheet: isOpen })),
    setAddPhotoSheet: (isOpen: boolean) =>
      set((state) => ({ ...state, addPhotoSheet: isOpen })),
  })
);
