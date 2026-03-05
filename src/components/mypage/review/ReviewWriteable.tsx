'use client'
import { useRouter } from 'next/navigation'

export default function ReviewWriteable() {
  const router = useRouter()
  return (
    <div className="sub-contents-inner">
      <div className="review-writeable-wrap">
        <div className="review-writeable-guide">구매후기 작성은 주문 완료일로 부터 10일 이내만 가능합니다.</div>
        <div className="review-writeable-list-wrap">
          <div className="review-writeable-list-total">
            총 <span>28</span>건
          </div>
          <ul className="review-writeable-list">
            <li className="review-writeable-list-item">
              <div className="review-writeable-info">
                <div className="review-writeable-info-item">
                  <div className="review-writeable-info-item-tit">주문일/주문번호</div>
                  <div className="review-writeable-info-item-desc">2025.11.06 / BA123411234</div>
                </div>
                <div className="review-writeable-info-item">
                  <div className="review-writeable-info-item-tit">점포명</div>
                  <div className="review-writeable-info-item-desc">힘이나는커피생활무교점</div>
                </div>
                <div className="review-writeable-info-item">
                  <div className="review-writeable-info-item-tit">메뉴</div>
                  <div className="review-writeable-info-item-desc">아이스아메리카노 외</div>
                </div>
              </div>
              <div className="review-writeable-btn-bx">
                <div className="review-writeable-btn-date">작성기한 : 2025.11.16</div>
                <button className="review-writeable-btn" onClick={() => router.push(`/mypage/review/1`)}>
                  작성하기
                </button>
              </div>
            </li>
            <li className="review-writeable-list-item">
              <div className="review-writeable-info">
                <div className="review-writeable-info-item">
                  <div className="review-writeable-info-item-tit">주문일/주문번호</div>
                  <div className="review-writeable-info-item-desc">2025.11.06 / BA123411234</div>
                </div>
                <div className="review-writeable-info-item">
                  <div className="review-writeable-info-item-tit">점포명</div>
                  <div className="review-writeable-info-item-desc">힘이나는커피생활무교점</div>
                </div>
                <div className="review-writeable-info-item">
                  <div className="review-writeable-info-item-tit">메뉴</div>
                  <div className="review-writeable-info-item-desc">아이스아메리카노 외</div>
                </div>
              </div>
              <div className="review-writeable-btn-bx">
                <div className="review-writeable-btn-date">작성기한 : 2025.11.16</div>
                <button className="review-writeable-btn" onClick={() => router.push(`/mypage/review/1`)}>
                  작성하기
                </button>
              </div>
            </li>
            <li className="review-writeable-list-item">
              <div className="review-writeable-list-item-empty">작성가능한 구매후기가 없습니다.</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
