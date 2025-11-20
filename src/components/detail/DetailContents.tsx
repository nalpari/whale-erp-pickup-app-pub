import Image from "next/image";

export default function DetailContents() {
  return (
    <div className="detail-contents">
      <div className="dt-contents-inner">
        <div className="contents-tab-wrap">
          <button className="tab-item">시그니처</button>
        </div>
        <dl className="menu-list">
          <dt className="menu-title">시그니처</dt>
          <dd className="menu-item ready">
            <button className="menu-item-btn">
              <div className="menu-item-img">
                <Image
                  src="/assets/images/contents/menu_img01.svg"
                  alt="menu-img"
                  fill
                />
              </div>
              <div className="menu-item-info">
                <div className="menu-name">말차코튼샷라떼</div>
                <div className="menu-price">
                  6,000원 <span className="discount">8,600원</span>
                </div>
                <div className="menu-desc">
                  상큼한 복숭아의 달콤함과 부드러운 복숭아요거트
                </div>
              </div>
            </button>
          </dd>
          {Array.from({ length: 2 }).map((_, index) => (
            <dd className="menu-item" key={index}>
              <button className="menu-item-btn">
                <div className="menu-item-img">
                  <Image
                    src="/assets/images/contents/menu_img01.svg"
                    alt="menu-img"
                    fill
                  />
                </div>
                <div className="menu-item-info">
                  <div className="menu-name">말차코튼샷라떼</div>
                  <div className="menu-price">
                    6,000원 <span className="discount">8,600원</span>
                  </div>
                  <div className="menu-desc">
                    상큼한 복숭아의 달콤함과 부드러운 복숭아요거트
                  </div>
                </div>
              </button>
            </dd>
          ))}
        </dl>
        <dl className="menu-list">
          <dt className="menu-title">아메리카노</dt>
          <dd className="menu-item">
            <button className="menu-item-btn">
              <div className="menu-item-img">
                <Image
                  src="/assets/images/contents/menu_img01.svg"
                  alt="menu-img"
                  fill
                />
              </div>
              <div className="menu-item-info">
                <div className="menu-name">말차코튼샷라떼</div>
                <div className="menu-price">
                  6,000원 <span className="discount">8,600원</span>
                </div>
                <div className="menu-desc">
                  상큼한 복숭아의 달콤함과 부드러운 복숭아요거트
                </div>
              </div>
            </button>
          </dd>
          {Array.from({ length: 2 }).map((_, index) => (
            <dd className="menu-item" key={index}>
              <button className="menu-item-btn">
                <div className="menu-item-img">
                  <Image
                    src="/assets/images/contents/menu_img01.svg"
                    alt="menu-img"
                    fill
                  />
                </div>
                <div className="menu-item-info">
                  <div className="menu-name">말차코튼샷라떼</div>
                  <div className="menu-price">
                    6,000원 <span className="discount">8,600원</span>
                  </div>
                  <div className="menu-desc">
                    상큼한 복숭아의 달콤함과 부드러운 복숭아요거트
                  </div>
                </div>
              </button>
            </dd>
          ))}
        </dl>
      </div>
    </div>
  );
}
