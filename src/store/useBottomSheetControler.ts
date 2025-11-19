import { create } from "zustand";

type BottomSheetControlerState = {
  locationSheet: boolean;
  arraySheet: boolean;
  setLocationSheet: (isOpen: boolean) => void;
  setArraySheet: (isOpen: boolean) => void;
};

type InitialStateType = {
  locationSheet: boolean;
  arraySheet: boolean;
};

const initialState: InitialStateType = {
  locationSheet: false,
  arraySheet: false,
};

export const useBottomSheetControler = create<BottomSheetControlerState>(
  (set) => ({
    ...initialState,
    setLocationSheet: (isOpen: boolean) =>
      set((state) => ({ ...state, locationSheet: isOpen })),
    setArraySheet: (isOpen: boolean) =>
      set((state) => ({ ...state, arraySheet: isOpen })),
  })
);
