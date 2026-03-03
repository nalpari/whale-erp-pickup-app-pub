'use client'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

import { Pagination } from 'swiper/modules'
import Image from 'next/image'

export default function BeforeSearch() {
  return (
    <div className="search-contents-body">
      <div className="search-banner-swiper">
        <Swiper
          slidesPerView={1.2}
          spaceBetween={10}
          pagination={{
            type: 'progressbar',
          }}
          speed={1000}
          centeredSlides={true}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="banner-img">
              <div className="banner-txt">이벤트 및 매장홍보 배너 영역</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="banner-img">
              <div className="banner-txt">이벤트 및 매장홍보 배너 영역</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="banner-img">
              <div className="banner-txt">이벤트 및 매장홍보 배너 영역</div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="nearest-store-wrap">
        <div className="nearest-store-header">
          <div className="nearest-store-header-icon"></div>
          <div className="nearest-store-header-tit">주변 점포</div>
        </div>
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
                <div className="contents-menu">아메리카노, 요거트, 쿠키</div>
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
            <div className="empty-text">가까운 점포가 없습니다.</div>
          </div>
        </div>
      </div>
    </div>
  )
}
