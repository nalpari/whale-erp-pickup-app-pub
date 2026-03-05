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
  locationAllowPopup: boolean;
  addressSearchPopup: boolean;
  addressAliasPopup: boolean;
  addressEditPopup: boolean;
  couponDetailPopup: boolean;
  stempDetailPopup: boolean;
  addPaymentPopup: boolean;
  setMapPopup: (isOpen: boolean) => void;
  setPhotoPopup: (isOpen: boolean) => void;
  setOrderBillPopup: (isOpen: boolean) => void;
  setAlertPopup: (isOpen: boolean) => void;
  setAiChatPopup: (isOpen: boolean) => void;
  setMypagePointPopup: (isOpen: boolean) => void;
  setOptionChangePopup: (isOpen: boolean) => void;
  setCouponSelectPopup: (isOpen: boolean) => void;
  setLocationAllowPopup: (isOpen: boolean) => void;
  setAddressSearchPopup: (isOpen: boolean) => void;
  setAddressAliasPopup: (isOpen: boolean) => void;
  setAddressEditPopup: (isOpen: boolean) => void;
  setCouponDetailPopup: (isOpen: boolean) => void;
  setStempDetailPopup: (isOpen: boolean) => void;
  setAddPaymentPopup: (isOpen: boolean) => void;
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
  locationAllowPopup: boolean;
  addressSearchPopup: boolean;
  addressAliasPopup: boolean;
  addressEditPopup: boolean;
  couponDetailPopup: boolean;
  stempDetailPopup: boolean;
  addPaymentPopup: boolean;
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
  locationAllowPopup: false,
  addressSearchPopup: false,
  addressAliasPopup: false,
  addressEditPopup: false,
  couponDetailPopup: false,
  stempDetailPopup: false,
  addPaymentPopup: false,
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
  setLocationAllowPopup: (isOpen: boolean) =>
    set((state) => ({ ...state, locationAllowPopup: isOpen })),
  setAddressSearchPopup: (isOpen: boolean) =>
    set((state) => ({ ...state, addressSearchPopup: isOpen })),
  setAddressAliasPopup: (isOpen: boolean) =>
    set((state) => ({ ...state, addressAliasPopup: isOpen })),
  setAddressEditPopup: (isOpen: boolean) =>
    set((state) => ({ ...state, addressEditPopup: isOpen })),
  setCouponDetailPopup: (isOpen: boolean) =>
    set((state) => ({ ...state, couponDetailPopup: isOpen })),
  setStempDetailPopup: (isOpen: boolean) =>
    set((state) => ({ ...state, stempDetailPopup: isOpen })),
  setAddPaymentPopup: (isOpen: boolean) =>
    set((state) => ({ ...state, addPaymentPopup: isOpen })),
}));
