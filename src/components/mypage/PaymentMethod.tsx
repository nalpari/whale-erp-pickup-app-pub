export default function PaymentMethod() {
  return (
    <div className="sub-contents">
      <div className="sub-contents-inner">
        <div className="payment-method-list">
          <div className="payment-method-item">
            <div className="payment-method-item-date">
              <span className="tit">등록일</span>
              <span className="data">2025.08.06</span>
            </div>
            <div className="payment-method-item-data-wrap">
              <div className="payment-method-item-info">
                <div className="payment-method-item-tit">현대 ZERO Ed3</div>
                <div className="payment-method-item-data">12345***+*123*</div>
              </div>
              <button className="review-update-btn-item">삭제</button>
            </div>
          </div>
          <div className="payment-method-item">
            <div className="payment-method-item-date">
              <span className="tit">등록일</span>
              <span className="data">2025.08.06</span>
            </div>
            <div className="payment-method-item-data-wrap">
              <div className="payment-method-item-info">
                <div className="payment-method-item-tit">현대 ZERO Ed3</div>
                <div className="payment-method-item-data">12345***+*123*</div>
              </div>
              <button className="review-update-btn-item">삭제</button>
            </div>
          </div>
          <div className="payment-method-item">
            <div className="payment-method-item-date">
              <span className="tit">등록일</span>
              <span className="data">2025.08.06</span>
            </div>
            <div className="payment-method-item-data-wrap">
              <div className="payment-method-item-info">
                <div className="payment-method-item-tit">현대 ZERO Ed3</div>
                <div className="payment-method-item-data">12345***+*123*</div>
              </div>
              <button className="review-update-btn-item">삭제</button>
            </div>
          </div>
          <div className="payment-method-item">
            <div className="payment-method-item-empty">등록된 결제수단이 없습니다.</div>
          </div>
        </div>
        <div className="payment-method-btn-wrap">
          <button className="btn-form black block">신용/체크카드 등록</button>
        </div>
      </div>
    </div>
  )
}
