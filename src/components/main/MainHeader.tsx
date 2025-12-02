"use client";
import Link from "next/link";
import Image from "next/image";
import { useBottomSheetControler } from "@/store/useBottomSheetControler";
import { usePopupControler } from "@/store/usePopupControler";
import { useRouter } from "next/navigation";

export default function MainHeader() {
  const bottomSheetControler = useBottomSheetControler();
  const popupControler = usePopupControler();
  const router = useRouter();
  return (
    <div className="main-header">
      <div className="main-header-top">
        <button
          className="order-point"
          onClick={() => popupControler.setMypagePointPopup(true)}
        >
          <span>P</span>
          <span>1,200</span>
        </button>
        <Link className="logo" href="/">
          <Image src="/assets/images/layout/logo.svg" alt="logo" fill />
        </Link>
        <div className="order-side">
          <button className="order-ring">
            <span>2</span>
          </button>
          <button
            className="order-basket"
            onClick={() => router.push("/basket")}
          >
            <span>2</span>
          </button>
        </div>
      </div>
      <div className="main-header-body">
        <div className="search-btn-wrap">
          <button className="search-btn">매장명, 메뉴검색</button>
        </div>
        <div className="location-btn-wrap">
          <button
            className={`location-btn ${
              bottomSheetControler.locationSheet ? "act" : ""
            }`}
            onClick={() => bottomSheetControler.setLocationSheet(true)}
          >
            <span className="location-icon"></span>
            <span className="location-text">위치를 설정해 주세요</span>
          </button>
        </div>
        <div className="filter-wrap">
          <button
            className={`filter-btn ${
              bottomSheetControler.arraySheet ? "act" : ""
            }`}
            onClick={() => bottomSheetControler.setArraySheet(true)}
          >
            <span className="filter-text">리뷰 많은 순</span>
          </button>
          <button className="filter-btn act">
            <span className="filter-text">영업중</span>
          </button>
          <button className="filter-btn ">
            <span className="reset-icon"></span>
            <span className="filter-text">초기화</span>
          </button>
        </div>
      </div>
    </div>
  );
}
