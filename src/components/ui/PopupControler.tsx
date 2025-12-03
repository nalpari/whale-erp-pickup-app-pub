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

export default function PopupControler() {
  const popupControler = usePopupControler();

  useEffect(() => {
    // 모든 팝업 상태를 배열로 확인
    const isAnyPopupOpen =
      popupControler.mapPopup ||
      popupControler.photoPopup ||
      popupControler.orderBillPopup ||
      popupControler.alertPopup ||
      popupControler.aiChatPopup ||
      popupControler.mypagePointPopup ||
      popupControler.optionChangePopup ||
      popupControler.couponSelectPopup;

    // body 클래스 토글
    if (isAnyPopupOpen) {
      document.body.classList.add("open");
    } else {
      document.body.classList.remove("open");
    }

    // 컴포넌트 언마운트 시 클래스 제거
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
    </>
  );
}
