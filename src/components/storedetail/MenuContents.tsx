import Image from "next/image";
import { useState } from "react";
import { usePopupControler } from "@/store/usePopupControler";

export default function MenuContents() {
  const [count, setCount] = useState(1);

  const popupControler = usePopupControler();
  return (
    <div className="menu-contents">
      <div className="menu-item">
        <Image
          src="/assets/images/contents/menu_item.png"
          alt="menu-img"
          fill
        />
      </div>
      <div className="menu-info">
        <div className="menu-data">
          <div className="menu-badge-wrap">
            <span className="badge c">
              <b>C</b>쿠폰
            </span>
            <span className="badge s">
              <b>S</b>스템프
            </span>
          </div>
          <div className="menu-name">스위츠 복숭아 아이스티</div>
          <div className="menu-price">
            6,000원 <span className="discount">8,600원</span>
          </div>
        </div>
        <button
          className="menu-zoom"
          onClick={() => popupControler.setPhotoPopup(true)}
        ></button>
      </div>
      <div className="menu-count-wrap">
        <button
          className="menu-minus"
          onClick={() => setCount(count - 1)}
        ></button>
        <span className="menu-count">{count}</span>
        <button
          className="menu-plus"
          onClick={() => setCount(count + 1)}
        ></button>
      </div>
      <div className="menu-option-wrap">
        <h3 className="menu-option-title">
          컵 선택 <span>필수 선택 사항</span>컵 선택 <span>필수 선택 사항</span>
          컵 선택 <span>필수 선택 사항</span>컵 선택 <span>필수 선택 사항</span>
          컵 선택 <span>필수 선택 사항</span>컵 선택 <span>필수 선택 사항</span>
          컵 선택 <span>필수 선택 사항</span>컵 선택 <span>필수 선택 사항</span>
          컵 선택 <span>필수 선택 사항</span>컵 선택 <span>필수 선택 사항</span>
          컵 선택 <span>필수 선택 사항</span>컵 선택 <span>필수 선택 사항</span>
          컵 선택 <span>필수 선택 사항</span>컵 선택 <span>필수 선택 사항</span>
          컵 선택 <span>필수 선택 사항</span>컵 선택 <span>필수 선택 사항</span>
          컵 선택 <span>필수 선택 사항</span>컵 선택 <span>필수 선택 사항</span>
          컵 선택 <span>필수 선택 사항</span>컵 선택 <span>필수 선택 사항</span>
          컵 선택 <span>필수 선택 사항</span>컵 선택 <span>필수 선택 사항</span>
          컵 선택 <span>필수 선택 사항</span>컵 선택 <span>필수 선택 사항</span>
          컵 선택 <span>필수 선택 사항</span>컵 선택 <span>필수 선택 사항</span>
          컵 선택 <span>필수 선택 사항</span>컵 선택 <span>필수 선택 사항</span>
        </h3>
      </div>
      <div className="menu-btn-wrap">
        <button className="btn-form pink block">1,200원 장바구니 담기</button>
      </div>
    </div>
  );
}
