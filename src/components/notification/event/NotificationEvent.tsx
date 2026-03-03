'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useState } from 'react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

import { Pagination } from 'swiper/modules'
import AnimateHeight from 'react-animate-height'
import Image from 'next/image'

export default function NotificationEvent() {
  const [eventItemHeight, setEventItemHeight] = useState(false)
  return (
    <div className="notification-body">
      <div className="swich-tab-wrap">
        <button className="swich-tab-item act">진행중인 이벤트</button>
        <button className="swich-tab-item">당첨자자 발표</button>
      </div>
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
      <div className="event-list-wrap">
        <div className="event-list-count">
          총 <span>28</span>개
        </div>
        <ul className="event-list">
          <li className="event-item">
            <div className="event-item-info" onClick={() => setEventItemHeight(!eventItemHeight)}>
              <div className="event-item-info-inner">
                <div className="event-item-title">아이스 아메카노 20% Big Sale</div>
                <div className="event-item-desc">
                  <span>이벤트기간: 2025-10-25 ~ 2025-10-25</span>
                  <span>당첨자발표 : 2025-10-27</span>
                  <span>대상점포 : 힘이나는커피생활 전체매장</span>
                </div>
              </div>
              <button className={`list-arr-btn ${eventItemHeight ? 'act' : ''}`}></button>
            </div>
            <AnimateHeight duration={300} height={eventItemHeight ? 'auto' : 0}>
              <div className="event-content">
                <div className="event-img-wrap">
                  <div className="event-img">이벤트 상세 이미지</div>
                </div>
                <div className="event-categoty">
                  <div className="event-category-tit">대상 메뉴</div>
                  <div className="event-category-cont">
                    <dl className="menu-list">
                      {/* ready 클래스 추가시 일시품절 표시 */}
                      {Array.from({ length: 3 }).map((_, index) => (
                        <dd className="menu-item" key={index}>
                          <button className="menu-item-btn">
                            <div className="menu-item-img">
                              <Image src="/assets/images/contents/menu_item.png" alt="menu-img" fill />
                            </div>
                            <div className="menu-item-info">
                              <div className="menu-name">말차코튼샷라떼</div>
                              <div className="menu-desc">상큼한 복숭아의 달콤함과 부드러운 복숭아요거트</div>
                            </div>
                          </button>
                        </dd>
                      ))}
                    </dl>
                  </div>
                </div>
                <div className="event-categoty">
                  <div className="event-category-tit">쿠폰 다운로드</div>
                  <div className="event-category-cont">
                    <div className="notice-file-wrap">
                      <div className="notice-file-item">
                        <div className="event-file-name">아메리카노 10%할인쿠폰</div>
                        <button className="notice-file-btn"></button>
                      </div>
                      <div className="notice-file-item">
                        <div className="event-file-name">아메리카노 10%할인쿠폰</div>
                        <button className="notice-file-btn"></button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="event-categoty">
                  <div className="event-category-tit">이벤트 유의사항</div>
                  <div className="event-category-cont">
                    <div className="event-guide">
                      관리사이트에서 입력한 유의사항이 있는 경우 표시 관리사이트에서 입력한 유의사항이 있는 경우 표시
                    </div>
                  </div>
                </div>
              </div>
            </AnimateHeight>
          </li>
          <li className="event-item">
            <div className="event-item-info" onClick={() => setEventItemHeight(!eventItemHeight)}>
              <div className="event-item-info-inner">
                <div className="event-item-title">아이스 아메카노 20% Big Sale</div>
                <div className="event-item-desc">
                  <span>이벤트기간: 2025-10-25 ~ 2025-10-25</span>
                  <span>당첨자발표 : 2025-10-27</span>
                  <span>대상점포 : 힘이나는커피생활 전체매장</span>
                </div>
              </div>
              <button className={`list-arr-btn ${eventItemHeight ? 'act' : ''}`}></button>
            </div>
            <AnimateHeight duration={300} height={eventItemHeight ? 'auto' : 0}>
              <div className="event-content">
                <div className="event-img-wrap">
                  <div className="event-img">이벤트 상세 이미지</div>
                </div>
                <div className="event-categoty">
                  <div className="event-category-tit">대상 메뉴</div>
                  <div className="event-category-cont">
                    <dl className="menu-list">
                      {/* ready 클래스 추가시 일시품절 표시 */}
                      {Array.from({ length: 3 }).map((_, index) => (
                        <dd className="menu-item" key={index}>
                          <button className="menu-item-btn">
                            <div className="menu-item-img">
                              <Image src="/assets/images/contents/menu_item.png" alt="menu-img" fill />
                            </div>
                            <div className="menu-item-info">
                              <div className="menu-name">말차코튼샷라떼</div>
                              <div className="menu-desc">상큼한 복숭아의 달콤함과 부드러운 복숭아요거트</div>
                            </div>
                          </button>
                        </dd>
                      ))}
                    </dl>
                  </div>
                </div>
                <div className="event-categoty">
                  <div className="event-category-tit">쿠폰 다운로드</div>
                  <div className="event-category-cont">
                    <div className="notice-file-wrap">
                      <div className="notice-file-item">
                        <div className="event-file-name">아메리카노 10%할인쿠폰</div>
                        <button className="notice-file-btn"></button>
                      </div>
                      <div className="notice-file-item">
                        <div className="event-file-name">아메리카노 10%할인쿠폰</div>
                        <button className="notice-file-btn"></button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="event-categoty">
                  <div className="event-category-tit">이벤트 유의사항</div>
                  <div className="event-category-cont">
                    <div className="event-guide">
                      관리사이트에서 입력한 유의사항이 있는 경우 표시 관리사이트에서 입력한 유의사항이 있는 경우 표시
                    </div>
                  </div>
                </div>
              </div>
            </AnimateHeight>
          </li>
          <li className="event-item">
            <div className="event-item-empty">
              <div className="event-item-empty-text">이벤트가 없습니다.</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}
