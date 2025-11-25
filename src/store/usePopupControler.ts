import { create } from "zustand";

type PopupControlerState = {
  mapPopup: boolean;
  photoPopup: boolean;
  setMapPopup: (isOpen: boolean) => void;
  setPhotoPopup: (isOpen: boolean) => void;
};

type InitialStateType = {
  mapPopup: boolean;
  photoPopup: boolean;
};

const initialState: InitialStateType = {
  mapPopup: false,
  photoPopup: false,
};

export const usePopupControler = create<PopupControlerState>((set) => ({
  ...initialState,
  setMapPopup: (isOpen: boolean) =>
    set((state) => ({ ...state, mapPopup: isOpen })),
  setPhotoPopup: (isOpen: boolean) =>
    set((state) => ({ ...state, photoPopup: isOpen })),
}));
