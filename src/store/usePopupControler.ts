import { create } from "zustand";

type PopupControlerState = {
  mapPopup: boolean;
  setMapPopup: (isOpen: boolean) => void;
};

type InitialStateType = {
  mapPopup: boolean;
};

const initialState: InitialStateType = {
  mapPopup: false,
};

export const usePopupControler = create<PopupControlerState>((set) => ({
  ...initialState,
  setMapPopup: (isOpen: boolean) =>
    set((state) => ({ ...state, mapPopup: isOpen })),
}));
