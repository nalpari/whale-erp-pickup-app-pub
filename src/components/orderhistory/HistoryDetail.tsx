"use client";
import { usePopupControler } from "@/store/usePopupControler";

export default function HistoryDetail() {
  const popupControler = usePopupControler();
  return (
    <div className="order-history-contents">
      <div className="history-data-wrap">
        <div className="history-data">
          픽업번호 : <span>98</span>
        </div>
        <div className="history-btn-bx">
          <button className="history-reset-btn"></button>
        </div>
      </div>
      <div className="history-detail-bx">
        <ul className="item-step-list">
          <li className="step-item act">주문접수</li>
          <li className="step-item act">제조중</li>
          <li className="step-item">제조완료</li>
          <li className="step-item">픽업완료</li>
        </ul>
        <div className="detail-data-wrap">
          <div className="detail-data-name">
            힘이 나는 커피 생활 종로 젊음의 거리점
          </div>
          <div className="detail-data">
            <span>결제 완료일시 : 25.11.04 09:18</span>
            <span>주문번호 : 516302700</span>
          </div>
          <div className="bill-btn">
            <button
              className="btn-form outline block"
              onClick={() => popupControler.setOrderBillPopup(true)}
            >
              영수증 보기
            </button>
          </div>
        </div>
      </div>
      <div className="history-detail-bx">
        <div className="history-detail-form">
          <div className="detail-form-tit">예상 픽업 시간</div>
          <div className="detail-form-txt">
            <span>09:45분</span>에 픽업 합니다.
          </div>
        </div>
      </div>
      <div className="history-detail-bx">
        <div className="history-detail-form">
          <div className="detail-form-tit">요청 사항</div>
          <div className="detail-form-txt">얼음 많이 넣어 주세요.</div>
        </div>
      </div>
      <div className="history-detail-bx">
        <div className="history-cost-form">
          <div className="cost-form-tit">
            <p className="name">아메리카노</p>
            <p className="cost">
              <span>2,600원</span>
              <span>1개</span>
              <span>2,600원</span>
            </p>
          </div>
          <div className="cost-form-sub">
            <ul className="sub-list dot">
              <li className="sub-item">
                <p className="sub-item-name">ICED</p>
                <p className="sub-item-cost"></p>
              </li>
              <li className="sub-item">
                <p className="sub-item-name">M</p>
                <p className="sub-item-cost"></p>
              </li>
              <li className="sub-item">
                <p className="sub-item-name">샷 추가</p>
                <p className="sub-item-cost">
                  <span>500원</span>
                  <span>2개</span>
                  <span>+1,000원</span>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="history-detail-bx">
        <div className="history-cost-form">
          <div className="cost-form-tit">
            <p className="name">주문금액</p>
            <p className="cost">
              <span>2,600원</span>
            </p>
          </div>
          <div className="cost-form-sub">
            <ul className="sub-list ">
              <li className="sub-item">
                <p className="sub-item-name">프로모션 할인</p>
                <p className="sub-item-cost">
                  <span>-800원</span>
                </p>
              </li>
              <li className="sub-item">
                <p className="sub-item-name">쿠폰 할인</p>
                <p className="sub-item-cost">
                  <span>-800원</span>
                </p>
              </li>
              <li className="sub-item">
                <p className="sub-item-name">스탬프 할인</p>
                <p className="sub-item-cost">
                  <span>-800원</span>
                </p>
              </li>
            </ul>
          </div>
          <div className="cost-form-total">
            <p className="total-name">결제 금액</p>
            <p className="total-cost">
              <span>2,600원</span>
            </p>
          </div>
        </div>
      </div>
      <div className="history-detail-bx">
        <div className="history-detail-guide">
          <span>
            제조 완료된 상품 및 제품은 1시간 동안 보관되며, 기한 경과 시
            위생∙안전상 폐기됩니다.  
          </span>
          <span>고객 사유 미수령의 경우 재제공 및 환불이 불가합니다.</span>
        </div>
      </div>
      <div className="history-detail-bx">
        <div className="history-detail-btn-bx">
          <button className="btn-form black block">구매 후기 작성</button>
          <button className="btn-form org block">같은 메뉴 담기</button>
          {/* 주문취소 버튼 추가 시 주석 해제 */}
          {/* <button className="btn-form pink block">주문 취소 하기</button> */}
        </div>
      </div>
    </div>
  );
}
