import Image from "next/image";

export default function MainContents() {
  return (
    <div className="main-contents">
      <div className="contents-list">
        {Array.from({ length: 10 }).map((_, index) => (
          <div className="contents-item " key={index}>
            <div className="contents-img ">
              <div className="badge-wrap">
                <div className="badge">쿠폰</div>
                <div className="badge">스템프</div>
              </div>
              <Image
                src="/assets/images/layout/store_img.jpg"
                alt="contents-img"
                fill
              />
            </div>
            <div className="contents-info">
              <div className="contents-name">동대문종합시장 1호점</div>
              <div className="contents-menu">아메리카노, 요거트, 쿠키</div>
              <div className="contents-data">
                <span className="bookmark">28</span>
                <span className="comment">16</span>
                <span className="order">주문수 : 34</span>
              </div>
              <div className="contents-map">58m 도보 1분</div>
              <div className="btn-wrap">
                <button className="call-btn act"> 전화</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
