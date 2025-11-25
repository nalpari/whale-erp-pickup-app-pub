import Image from "next/image";

export default function OrderHistoryContents() {
  const arrayLength = 1;

  return (
    <div className="order-history-contents">
      {arrayLength > 0 ? (
        <>
          <div className="history-data-wrap">
            <div className="history-data">
               최근 <span>1년</span>까지의 이력만 조회 가능합니다.
            </div>
            <button className="history-data-btn"></button>
          </div>
          <div className="history-list-wrap">
            {Array.from({ length: arrayLength }).map((_, index) => (
              <div className="history-list-item" key={index}>
                <div className="history-list-item-img">
                  <Image
                    src="/assets/images/contents/menu_item.png"
                    alt="history-list-item-img"
                    fill
                  />
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="history-empty">
          <div className="empty-wrap">
            <div className="empty-icon-bx">
              <i className="empty-icon"></i>
            </div>
            <div className="empty-text">주문하신 내역이 없습니다.</div>
            <button className="empty-btn">주문하러 가기</button>
          </div>
        </div>
      )}
    </div>
  );
}
