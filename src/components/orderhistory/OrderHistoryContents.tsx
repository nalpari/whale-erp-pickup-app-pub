"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function OrderHistoryContents() {
  const router = useRouter();
  const arrayLength = 2;

  return (
    <div className="order-history-contents">
      {arrayLength > 0 ? (
        <>
          <div className="history-data-wrap">
            <div className="history-data">
               최근 <span>1년</span>까지의 이력만 조회 가능합니다.
            </div>
            <div className="history-btn-bx">
              <button className="history-data-btn"></button>
            </div>
          </div>
          <div className="history-list-wrap">
            {/* cancel 클래스 추가 시 주문취소 */}
            <button className="history-list-item cancel">
              <ul className="item-step-list">
                <li className="step-item">주문접수</li>
                <li className="step-item">제조중</li>
                <li className="step-item ">제조완료</li>
                <li className="step-item">픽업완료</li>
              </ul>
              <div className="item-info">
                <div className="item-info-img">
                  <Image
                    src="/assets/images/contents/menu_item.png"
                    alt="item-info-img"
                    fill
                  />
                </div>
                <div className="item-info-text">
                  <div className="item-info-date">25.11.04 09:18</div>
                  <div className="item-info-name">코튼크림말차라떼 외 3개</div>
                  <div className="item-info-location">
                    힘이나는 커피생활 종로점
                  </div>
                </div>
              </div>
            </button>
            {Array.from({ length: arrayLength }).map((_, index) => (
              <button
                className="history-list-item"
                key={index}
                onClick={() => router.push(`/orderhistory/${index + 1}`)}
              >
                <ul className="item-step-list">
                  <li className="step-item act">주문접수</li>
                  <li className="step-item act">제조중</li>
                  <li className="step-item ">제조완료</li>
                  <li className="step-item">픽업완료</li>
                </ul>
                <div className="item-info">
                  <div className="item-info-img">
                    <Image
                      src="/assets/images/contents/menu_item.png"
                      alt="item-info-img"
                      fill
                    />
                  </div>
                  <div className="item-info-text">
                    <div className="item-info-date">25.11.04 09:18</div>
                    <div className="item-info-name">
                      코튼크림말차라떼 외 3개
                    </div>
                    <div className="item-info-location">
                      힘이나는 커피생활 종로점
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </>
      ) : (
        // 주문하신 내역이 없습니다.
        <div className="history-empty">
          <div className="empty-wrap">
            <div className="empty-icon-bx">
              <i className="empty-icon"></i>
            </div>
            <div className="empty-text">주문하신 내역이 없습니다.</div>
            <button className="empty-btn" onClick={() => router.push("/")}>
              주문하러 가기
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
