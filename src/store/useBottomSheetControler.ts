import { create } from "zustand";

type BottomSheetControlerState = {
  locationSheet: boolean;
  arraySheet: boolean;
  categorySheet: boolean;
  orderRequestSheet: boolean;
  setLocationSheet: (isOpen: boolean) => void;
  setArraySheet: (isOpen: boolean) => void;
  setCategorySheet: (isOpen: boolean) => void;
  setOrderRequestSheet: (isOpen: boolean) => void;
};

type InitialStateType = {
  locationSheet: boolean;
  arraySheet: boolean;
  categorySheet: boolean;
  orderRequestSheet: boolean;
};

const initialState: InitialStateType = {
  locationSheet: false,
  arraySheet: false,
  categorySheet: false,
  orderRequestSheet: false,
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
  })
);
