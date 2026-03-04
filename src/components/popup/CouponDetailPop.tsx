'use client'
import { usePopupControler } from '@/store/usePopupControler'
import { useEffect, useState } from 'react'

export default function CouponDetailPop() {
  const [active, setActive] = useState(false)
  const couponDetailPopup = usePopupControler((state) => state.couponDetailPopup)
  const setCouponDetailPopup = usePopupControler((state) => state.setCouponDetailPopup)

  useEffect(() => {
    // 팝업 열기 시간 필요
    const timer = setTimeout(() => {
      setActive(couponDetailPopup)
    }, 100)

    return () => clearTimeout(timer)
  }, [couponDetailPopup])

  // 팝업 닫기 시간 필요
  const handleClose = () => {
    setActive(false)
    setTimeout(() => {
      setCouponDetailPopup(false)
    }, 250)
  }

  return (
    <div className={`modal-popup ${active ? 'act' : ''}`}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h3>쿠폰 상세</h3>
            <button className="modal-close" onClick={handleClose}></button>
          </div>
          <div className="modal-body">
            <div className="back-frame">
              <div className="coupon-detail-wrap">
                <div className="coupon-detail-item">
                  <div className="coupon-detail-sub-tit">시즌음료 구매시 할인</div>
                  <div className="coupon-detail-main-tit">
                     아이스아메리카노
                    <br />
                    10% 할인
                  </div>
                  <button className="coupon-detail-down-btn"></button>
                </div>
                <div className="coupon-detail-data">
                  <div className="coupon-detail-data-item">
                    <div className="coupon-detail-data-item-tit">사용기간</div>
                    <div className="coupon-detail-data-item-txt">
                      <span>발급일로부터 7일</span>
                    </div>
                  </div>
                  <div className="coupon-detail-data-item">
                    <div className="coupon-detail-data-item-tit">대상점포</div>
                    <div className="coupon-detail-data-item-txt">
                      <span>힘이나는커피생활무교점</span>
                    </div>
                  </div>
                  <div className="coupon-detail-data-item">
                    <div className="coupon-detail-data-item-tit">지정메뉴</div>
                    <div className="coupon-detail-data-item-txt">
                      <span>아이스아메리카노</span>
                      <span>핫아메리카노</span>
                      <span>시그니처 라떼</span>
                    </div>
                  </div>
                  <div className="coupon-detail-data-item">
                    <div className="coupon-detail-data-item-tit">할인대상</div>
                    <div className="coupon-detail-data-item-txt">
                      <span>아이스아메리카노</span>
                    </div>
                  </div>
                </div>
                <div className="coupon-detail-data">
                  <div className="coupon-detail-guide-tit">유의사항</div>
                  <div className="coupon-detail-guide-wrap">
                    <div className="coupon-detail-guide-item">
                      <div className="coupon-detail-guide-item-tit">1. 주문 취소 시 쿠폰 복원</div>
                      <div className="coupon-detail-guide-item-txt">
                        <span>- 쿠폰을 적용한 주문을 취소할 때는 쿠폰 할인금액을 제외한 결제금액이 환불됩니다.</span>
                        <span>- 쿠폰을 적용한 주문은 전체 취소/환불 시에만 쿠폰이 복원됩니다.</span>
                      </div>
                    </div>
                    <div className="coupon-detail-guide-item">
                      <div className="coupon-detail-guide-item-tit">2. 쿠폰 적용 조건 및 대상</div>
                      <div className="coupon-detail-guide-item-txt">
                        <span>- 쿠폰 적용을 위한 구매조건인 상품과 쿠폰 할인 혜택을 받는 상품은 다를 수 있습니다.</span>
                        <span>- 주문 상품 중 쿠폰 적용 대상인 상품에만 쿠폰 할인 혜택을 받을 수 있습니다.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
