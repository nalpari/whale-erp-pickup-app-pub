import { create } from "zustand";

type PopupControlerState = {
  mapPopup: boolean;
  photoPopup: boolean;
  orderBillPopup: boolean;
  alertPopup: boolean;
  aiChatPopup: boolean;
  mypagePointPopup: boolean;
  optionChangePopup: boolean;
  couponSelectPopup: boolean;
  setMapPopup: (isOpen: boolean) => void;
  setPhotoPopup: (isOpen: boolean) => void;
  setOrderBillPopup: (isOpen: boolean) => void;
  setAlertPopup: (isOpen: boolean) => void;
  setAiChatPopup: (isOpen: boolean) => void;
  setMypagePointPopup: (isOpen: boolean) => void;
  setOptionChangePopup: (isOpen: boolean) => void;
  setCouponSelectPopup: (isOpen: boolean) => void;
};

type InitialStateType = {
  mapPopup: boolean;
  photoPopup: boolean;
  orderBillPopup: boolean;
  alertPopup: boolean;
  aiChatPopup: boolean;
  mypagePointPopup: boolean;
  optionChangePopup: boolean;
  couponSelectPopup: boolean;
};

const initialState: InitialStateType = {
  mapPopup: false,
  photoPopup: false,
  orderBillPopup: false,
  alertPopup: false,
  aiChatPopup: false,
  mypagePointPopup: false,
  optionChangePopup: false,
  couponSelectPopup: false,
};

export const usePopupControler = create<PopupControlerState>((set) => ({
  ...initialState,
  setMapPopup: (isOpen: boolean) =>
    set((state) => ({ ...state, mapPopup: isOpen })),
  setPhotoPopup: (isOpen: boolean) =>
    set((state) => ({ ...state, photoPopup: isOpen })),
  setOrderBillPopup: (isOpen: boolean) =>
    set((state) => ({ ...state, orderBillPopup: isOpen })),
  setAlertPopup: (isOpen: boolean) =>
    set((state) => ({ ...state, alertPopup: isOpen })),
  setAiChatPopup: (isOpen: boolean) =>
    set((state) => ({ ...state, aiChatPopup: isOpen })),
  setMypagePointPopup: (isOpen: boolean) =>
    set((state) => ({ ...state, mypagePointPopup: isOpen })),
  setOptionChangePopup: (isOpen: boolean) =>
    set((state) => ({ ...state, optionChangePopup: isOpen })),
  setCouponSelectPopup: (isOpen: boolean) =>
    set((state) => ({ ...state, couponSelectPopup: isOpen })),
}));
