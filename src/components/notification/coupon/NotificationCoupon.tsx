export default function NotificationCoupon() {
  return (
    <div className="notification-body coupon">
      <div className="swich-tab-wrap">
        <button className="swich-tab-item act">전체</button>
        <button className="swich-tab-item">찜한 점포</button>
      </div>
      <div className="notification-coupon-wrap">
        <div className="notification-coupon-count">
          총 <span>28</span>개
        </div>
        <div className="notification-coupon-list">
          <div className="notification-coupon-item">
            <div className="coupon-item">
              <div className="coupon-sub-tit">시즌음료 구매시 할인</div>
              <div className="coupon-main-tit">아메리카노 10%할인쿠폰</div>
              <button className="coupon-down">쿠폰 다운로드</button>
            </div>
            <div className="coupon-date-wrap">
              <div className="coupon-date">25.11.09 23:59까지 사용</div>
              <div className="coupon-btn">
                <button className="coupon-use-btn">
                  쿠폰상세 <i className="arr-icon"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
