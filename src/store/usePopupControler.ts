import { create } from "zustand";

type PopupControlerState = {
  mapPopup: boolean;
  photoPopup: boolean;
  orderBillPopup: boolean;
  setMapPopup: (isOpen: boolean) => void;
  setPhotoPopup: (isOpen: boolean) => void;
  setOrderBillPopup: (isOpen: boolean) => void;
};

type InitialStateType = {
  mapPopup: boolean;
  photoPopup: boolean;
  orderBillPopup: boolean;
};

const initialState: InitialStateType = {
  mapPopup: false,
  photoPopup: false,
  orderBillPopup: false,
};

export const usePopupControler = create<PopupControlerState>((set) => ({
  ...initialState,
  setMapPopup: (isOpen: boolean) =>
    set((state) => ({ ...state, mapPopup: isOpen })),
  setPhotoPopup: (isOpen: boolean) =>
    set((state) => ({ ...state, photoPopup: isOpen })),
  setOrderBillPopup: (isOpen: boolean) =>
    set((state) => ({ ...state, orderBillPopup: isOpen })),
}));
