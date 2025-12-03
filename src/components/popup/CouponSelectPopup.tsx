import { usePopupControler } from "@/store/usePopupControler";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function CouponSelectPopup() {
  const [active, setActive] = useState(false);
  const popupControler = usePopupControler();

  const itemDataLength = 2; // 상품쿠폰 더미 데이터 개수
  const basketDataLength = 2; // 장바구니 쿠폰 더미 데이터 개수

  useEffect(() => {
    // 팝업 열기 시간 필요
    setTimeout(() => {
      setActive(popupControler.couponSelectPopup);
    }, 100);
  }, [popupControler.couponSelectPopup]);

  // 팝업 닫기 시간 필요
  const handleClose = () => {
    setActive(false);
    setTimeout(() => {
      popupControler.setCouponSelectPopup(false);
    }, 250);
  };

  return (
    <div className={`modal-popup ${active ? "act" : ""}`}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h3>쿠폰선택</h3>
            <button className="modal-close" onClick={handleClose}></button>
          </div>
          <div className="modal-body">
            <div className="coupon-select-frame">
              <div className="coupon-select-bx">
                <div className="coupon-select-item-tit">상품쿠폰</div>
                {itemDataLength > 0 ? (
                  <ul className="coupon-item-list">
                    {Array.from({ length: itemDataLength }).map((_, index) => (
                      <li lang="coupon-list-data" key={index}>
                        <div className="coupon-data-wrap">
                          <div className="coupon-img">
                            <Image
                              src="/assets/images/contents/menu_item.png"
                              alt="item-info-img"
                              fill
                            />
                          </div>
                          <div className="coupon-data-info">
                            <div className="coupon-data-name">
                              아이스아메리카노
                            </div>
                            <div className="coupon-data-price">6,000원</div>
                          </div>
                        </div>
                        <div className="coupon-data-sel">
                          <select className="select-form" name="" id="">
                            <option value="">쿠폰선택</option>
                          </select>
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="coupon-empty">
                    <div className="empty-icon"></div>
                    <div className="empty-txt">보유한 쿠폰이 없습니다.</div>
                  </div>
                )}
              </div>
              <div className="coupon-select-bx basket">
                <div className="coupon-select-item-tit">장바구니 쿠폰</div>
                {basketDataLength > 0 ? (
                  <div className="basket-coupon-sel">
                    <select className="select-form" name="" id="">
                      <option value="">쿠폰선택</option>
                    </select>
                  </div>
                ) : (
                  <div className="coupon-empty">
                    <div className="empty-icon"></div>
                    <div className="empty-txt">보유한 쿠폰이 없습니다.</div>
                  </div>
                )}
              </div>
              {itemDataLength + basketDataLength > 0 && (
                <div className="coupon-select-btn-wrap">
                  <button className="btn-form black block">
                    총{" "}
                    <span>
                      28,500<i>원</i>
                    </span>{" "}
                    할인 적용
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
