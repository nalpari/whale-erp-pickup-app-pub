'use client'
import { useBottomSheetControler } from '@/store/useBottomSheetControler'
import Image from 'next/image'

export default function SaveStoreContents() {
  const bottomSheetControler = useBottomSheetControler()

  const datalength = 10
  return (
    <div className="sub-contents">
      {datalength > 0 ? (
        <div className="search-contents-wrap">
          <div className="save-store-top">
            <div className="filter-wrap">
              <button
                className={`filter-btn ${bottomSheetControler.arraySheet ? 'act' : ''}`}
                onClick={() => bottomSheetControler.setArraySheet(true)}
              >
                <span className="filter-text">리뷰 많은 순</span>
              </button>
              <button className="filter-btn act">
                <span className="filter-text">영업중</span>
              </button>
              <button className="filter-btn ">
                <span className="reset-icon"></span>
                <span className="filter-text">초기화</span>
              </button>
            </div>
          </div>
          <div className="search-contents-body">
            <div className="save-store-count">
              검색결과 <span>28</span>건
            </div>
            <div className="contents-list">
              {Array.from({ length: datalength }).map((_, index) => (
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
                    <div className="contents-menu">아메리카노, 요거트, 쿠키</div>
                    <div className="contents-data">
                      <span className="bookmark">28</span>
                      <span className="comment">16</span>
                      <span className="order">주문수 : 34</span>
                    </div>
                    <div className="contents-map">58m 도보 1분</div>
                    <button className="save-store">
                      <i className="save-store-icon"></i>
                      <span>찜 삭제</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="search-contents-wrap empty">
          <div className="save-store-empty-wrap">
            <div className="save-store-empty-icon">
              <Image src="/assets/images/contents/save_empty_icon.svg" alt="save-empty-icon" width={120} height={120} />
            </div>
            <div className="empty-text">
              <span>찜한 점포가 없습니다.</span>
              <span>좋아하는 맛집에 별표를 눌러주세요.</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
