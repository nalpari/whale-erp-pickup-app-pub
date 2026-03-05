import { usePopupControler } from '@/store/usePopupControler'
import { useEffect, useState } from 'react'

export default function AddPaymentPop() {
  const [active, setActive] = useState(false)
  const addPaymentPopup = usePopupControler((state) => state.addPaymentPopup)
  const setAddPaymentPopup = usePopupControler((state) => state.setAddPaymentPopup)

  useEffect(() => {
    // 팝업 열기 시간 필요
    const timer = setTimeout(() => {
      setActive(addPaymentPopup)
    }, 100)

    return () => clearTimeout(timer)
  }, [addPaymentPopup])

  // 팝업 닫기 시간 필요
  const handleClose = () => {
    setActive(false)
    setTimeout(() => {
      setAddPaymentPopup(false)
    }, 250)
  }
  return (
    <div className={`modal-popup ${active ? 'act' : ''}`}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h3>결제카드 등록</h3>
            <button className="modal-close" onClick={handleClose}></button>
          </div>
          <div className="modal-body">
            <div className="add-payment-frame">
              <div className="add-payment-guide">※ 본인명의 카드로 최대2개까지 등록이 가능합니다.</div>
              <div className="add-payment-form">
                <div className="filed-form">
                  <div className="filed-item">
                    <div className="filed-tit">
                      결제카드 선택 <span className="red">*</span>
                    </div>
                    <div className="block">
                      <select className="select-form" name="card-type" id="card-type">
                        <option value="1">신용/체크카드 선택</option>
                        <option value="2">체크카드</option>
                      </select>
                    </div>
                    <div className="msg err mt10">카드 선택을 해 주세요.</div>
                  </div>
                  <div className="filed-item">
                    <div className="filed-tit">
                      카드번호 <span className="red">*</span>
                    </div>
                    <div className="block">
                      <input type="text" className="input-frame" placeholder="카드번호" />
                    </div>
                    <div className="msg err mt10">카드번호를 입력해 주세요.</div>
                  </div>
                </div>
              </div>
              <div className="add-payment-btn">
                <div className="payment-check-wrap">
                  <div className="check-form-box">
                    <input type="checkbox" id="check1" name="check1" />
                    <label htmlFor="check1">[카드등록] 개인정보 제3자 제공 동의 (필수)</label>
                  </div>
                  <button className="review-update-btn-item">보기</button>
                </div>
                <button className="btn-form black block">등록하기</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
