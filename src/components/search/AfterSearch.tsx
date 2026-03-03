import Image from 'next/image'

export default function AfterSearch() {
  return (
    <div className="search-contents-body">
      <div className="contents-list">
        {Array.from({ length: 10 }).map((_, index) => (
          <div className="contents-item " key={index}>
            <div className="contents-img ">
              <div className="badge-wrap">
                <div>
                  <span className="badge c">
                    <b>C</b>쿠폰
                  </span>
                </div>
                <div>
                  <span className="badge s">
                    <b>S</b>스템프
                  </span>
                </div>
              </div>
              <Image
                src="/assets/images/layout/store_img.jpg"
                alt="contents-img"
                fill
                sizes="(max-width: 320px) 100vw, 100vw"
              />
            </div>
            <div className="contents-info">
              <div className="contents-name">동대문종합시장 1호점</div>
              <div className="contents-menu">
                <span className="search-keyword">아메리카노</span>, 요거트, 쿠키
              </div>
              <div className="contents-data">
                <span className="bookmark">28</span>
                <span className="comment">16</span>
                <span className="order">주문수 : 34</span>
              </div>
              <div className="contents-map">58m 도보 1분</div>
            </div>
          </div>
        ))}
        <div className="empty-wrap">
          <div className="empty-text">검색 결과가 없습니다.</div>
        </div>
      </div>
    </div>
  )
}
