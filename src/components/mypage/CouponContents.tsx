"use client";
import { useRouter } from "next/navigation";

export default function CouponContents() {
  const router = useRouter();
  return (
    <div className="coupon-contents">
      <div className="coupon-list-contents">
        <div className="coupon-header">
          <div className="coupon-header-tit">
            <div className="count">
              <b>16</b>개
            </div>
            <div className="sort">마감 임박순</div>
          </div>
          <div className="coupon-item-bx">
            <button
              className="coupon-item"
              onClick={() => router.push("/mypage/coupon/1")}
            >
              <div className="coupon-sub-tit">시즌음료 구매시 할인</div>
              <div className="coupon-main-tit">아메리카노 10%할인쿠폰</div>
              <div className="coupon-data-wrap">
                <div className="coupon-badge o">미사용</div>
                <div className="coupon-use-btn">
                  쿠폰상세 <i className="arr-icon"></i>
                </div>
              </div>
            </button>
          </div>
          <div className="target-store-wrap">
            <div className="target-store-tit">대상점포</div>
            <div className="target-store-txt">힘이나는커피생활 무교점</div>
          </div>
        </div>
        <div className="coupon-body">
          <div className="coupon-list-wrap">
            <div className="coupon-item-bx">
              <button
                className="coupon-item"
                onClick={() => router.push("/mypage/coupon/1")}
              >
                <div className="coupon-sub-tit">시즌음료 구매시 할인</div>
                <div className="coupon-main-tit">
                  아이스아메리카노 2천원 할인
                </div>
                <div className="coupon-data-wrap">
                  <div className="coupon-badge g">기간만료</div>
                  <div className="coupon-use-btn">
                    쿠폰상세 <i className="arr-icon"></i>
                  </div>
                </div>
              </button>
            </div>
            <div className="coupon-item-bx">
              <button
                className="coupon-item"
                onClick={() => router.push("/mypage/coupon/1")}
              >
                <div className="coupon-sub-tit">시즌음료 구매시 할인</div>
                <div className="coupon-main-tit">아메리카노 10%할인쿠폰</div>
                <div className="coupon-data-wrap">
                  <div className="coupon-badge b">사용완료</div>
                  <div className="coupon-use-btn">
                    쿠폰상세 <i className="arr-icon"></i>
                  </div>
                </div>
              </button>
            </div>
            <div className="coupon-item-bx">
              <button
                className="coupon-item"
                onClick={() => router.push("/mypage/coupon/1")}
              >
                <div className="coupon-sub-tit">시즌음료 구매시 할인</div>
                <div className="coupon-main-tit">아메리카노 10%할인쿠폰</div>
                <div className="coupon-data-wrap">
                  <div className="coupon-badge o">미사용</div>
                  <div className="coupon-use-btn">
                    쿠폰상세 <i className="arr-icon"></i>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
