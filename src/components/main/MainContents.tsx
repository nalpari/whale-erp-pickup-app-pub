"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function MainContents() {
  const router = useRouter();
  return (
    <div className="main-contents">
      <div className="contents-list">
        <div className="contents-item ready">
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
        {Array.from({ length: 10 }).map((_, index) => (
          <div
            className="contents-item "
            key={index}
            onClick={() => router.push(`/detail`)}
          >
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
                <button className="call-btn "> 전화</button>
              </div>
            </div>
          </div>
        ))}
        <div className="empty-wrap">
          <div className="empty-text">가까운 점포가 없습니다.</div>
        </div>
      </div>
    </div>
  );
}
