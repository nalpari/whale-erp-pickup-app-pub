import { create } from "zustand";

type BottomSheetControlerState = {
  locationSheet: boolean;
  setLocationSheet: (isOpen: boolean) => void;
};

type InitialStateType = {
  locationSheet: boolean;
};

const initialState: InitialStateType = {
  locationSheet: false,
};

export const useBottomSheetControler = create<BottomSheetControlerState>(
  (set) => ({
    ...initialState,
    setLocationSheet: (isOpen: boolean) =>
      set((state) => ({ ...state, locationSheet: isOpen })),
  })
);
