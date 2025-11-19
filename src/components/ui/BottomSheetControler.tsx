"use client";

import { useEffect } from "react";
import LocationSheet from "../bottomSheet/LocationSheet";
import { useBottomSheetControler } from "@/store/useBottomSheetControler";

export default function BottomSheetControler() {
  const bottomSheetControler = useBottomSheetControler();

  useEffect(() => {
    // 모든 팝업 상태를 배열로 확인
    const isAnyBottomSheetOpen = bottomSheetControler.locationSheet;

    // body 클래스 토글
    if (isAnyBottomSheetOpen) {
      document.body.classList.add("open");
    } else {
      document.body.classList.remove("open");
    }

    // 컴포넌트 언마운트 시 클래스 제거
    return () => {
      document.body.classList.remove("open");
    };
  }, [bottomSheetControler.locationSheet]);

  return <>{bottomSheetControler.locationSheet && <LocationSheet />}</>;
}
