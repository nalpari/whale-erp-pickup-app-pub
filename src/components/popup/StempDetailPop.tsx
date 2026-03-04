'use client'
import { useEffect, useState } from 'react'
import { usePopupControler } from '@/store/usePopupControler'

export default function StempDetailPop() {
  const [active, setActive] = useState(false)
  const stempDetailPopup = usePopupControler((state) => state.stempDetailPopup)
  const setStempDetailPopup = usePopupControler((state) => state.setStempDetailPopup)

  useEffect(() => {
    // 팝업 열기 시간 필요
    const timer = setTimeout(() => {
      setActive(stempDetailPopup)
    }, 100)

    return () => clearTimeout(timer)
  }, [stempDetailPopup])

  // 팝업 닫기 시간 필요
  const handleClose = () => {
    setActive(false)
    setTimeout(() => {
      setStempDetailPopup(false)
    }, 250)
  }

  return (
    <div className={`modal-popup ${active ? 'act' : ''}`}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h3>스탬프 상세</h3>
            <button className="modal-close" onClick={handleClose}></button>
          </div>
          <div className="modal-body">
            <div className="stemp-detail">
              <div className="stemp-detail-inner">
                <div className="stemp-detail-tit">크리스피도넛 미아점</div>
                <div className="stemp-detail-guide">
                  <div className="stemp-detail-guide-tit">적립기준</div>
                  <div className="stemp-detail-guide-desc">
                    <span>5,000원 이상 구매 시 1개 적립</span>
                    <span>10,000원 이상 구매 시 2개 적립</span>
                    <span>15,000원 이상 구매 시 3개 적립</span>
                    <span>20,000원 이상 구매 시 4개 적립 [최대]</span>
                  </div>
                </div>
                <div className="stemp-detail-favor">
                  <div className="stemp-detail-favor-tit">혜택</div>
                  <div className="stemp-detail-favor-desc">
                    <span>스탬프 10개 적립 시 오리지널 글레이즈드 하프더즌 무료 쿠폰 증정</span>
                  </div>
                </div>
              </div>
              <div className="stemp-total">
                <div className="stemp-total-tit">보유 스탬프</div>
                <div className="stemp-total-data">20개</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
