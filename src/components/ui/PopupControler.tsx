"use client";

import { useEffect } from "react";
import { usePopupControler } from "@/store/usePopupControler";
import MapPopup from "../popup/MapPopup";
import PhotoPopup from "../popup/PhotoPopup";

export default function PopupControler() {
  const popupControler = usePopupControler();

  useEffect(() => {
    // 모든 팝업 상태를 배열로 확인
    const isAnyPopupOpen = popupControler.mapPopup || popupControler.photoPopup;

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
  }, [popupControler.mapPopup, popupControler.photoPopup]);

  return (
    <>
      {popupControler.mapPopup && <MapPopup />}
      {popupControler.photoPopup && <PhotoPopup />}
    </>
  );
}
