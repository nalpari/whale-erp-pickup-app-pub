"use client";

import { useEffect } from "react";
import { usePopupControler } from "@/store/usePopupControler";
import MapPopup from "../popup/MapPopup";
import PhotoPopup from "../popup/PhotoPopup";
import OrderBillPopup from "../popup/OrderBillPopup";
import Alert from "../popup/Alert";
import AIChat from "../popup/AIChat";
import MypagePoint from "../popup/MypagePoint";
import OptionChangePopup from "../popup/OptionChangePopup";
import CouponSelectPopup from "../popup/CouponSelectPopup";
import LocationAllowPopup from "../popup/LocationAllowPopup";
import AddressSearchPop from "../popup/AddressSearchPop";
import AddressAliasPop from "../popup/AddressAliasPop";

export default function PopupControler() {
  const popupControler = usePopupControler();

  useEffect(() => {
    const isAnyPopupOpen =
      popupControler.mapPopup ||
      popupControler.photoPopup ||
      popupControler.orderBillPopup ||
      popupControler.alertPopup ||
      popupControler.aiChatPopup ||
      popupControler.mypagePointPopup ||
      popupControler.optionChangePopup ||
      popupControler.couponSelectPopup ||
      popupControler.locationAllowPopup ||
      popupControler.addressSearchPopup ||
      popupControler.addressAliasPopup;

    if (isAnyPopupOpen) {
      document.body.classList.add("open");
    } else {
      document.body.classList.remove("open");
    }

    return () => {
      document.body.classList.remove("open");
    };
  }, [
    popupControler.mapPopup,
    popupControler.photoPopup,
    popupControler.orderBillPopup,
    popupControler.alertPopup,
    popupControler.aiChatPopup,
    popupControler.mypagePointPopup,
    popupControler.optionChangePopup,
    popupControler.couponSelectPopup,
    popupControler.locationAllowPopup,
    popupControler.addressSearchPopup,
    popupControler.addressAliasPopup,
  ]);

  return (
    <>
      {popupControler.mapPopup && <MapPopup />}
      {popupControler.photoPopup && <PhotoPopup />}
      {popupControler.orderBillPopup && <OrderBillPopup />}
      {popupControler.alertPopup && <Alert />}
      {popupControler.aiChatPopup && <AIChat />}
      {popupControler.mypagePointPopup && <MypagePoint />}
      {popupControler.optionChangePopup && <OptionChangePopup />}
      {popupControler.couponSelectPopup && <CouponSelectPopup />}
      {popupControler.locationAllowPopup && <LocationAllowPopup />}
      {popupControler.addressSearchPopup && <AddressSearchPop />}
      {popupControler.addressAliasPopup && <AddressAliasPop />}
    </>
  );
}
