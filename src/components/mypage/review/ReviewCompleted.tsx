'use client'
import Image from 'next/image'
import { usePopupControler } from '@/store/usePopupControler'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'

export default function ReviewCompleted() {
  const popupControler = usePopupControler()
  return (
    <div className="review-completed-wrap">
      <div className="review-completed-guide">구매후기 작성은 주문 완료일로 부터 10일 이내만 가능합니다.</div>
      <div className="review-completed-list-wrap">
        <div className="review-completed-list-total">
          총 <span>28</span>건
        </div>
        <ul className="review-completed-list">
          <li className="review-completed-item">
            <div className="review-update-wrap">
              <div className="review-update-info">
                <div className="review-update-date">
                  <span>작성일</span> : 2025.08.06 10:15
                </div>
                <div className="review-update-date">
                  <span>수정일</span> : 2025.08.06 10:15
                </div>
              </div>
              <div className="review-update-btn">
                <button className="review-update-btn-item">수정</button>
                <button className="review-update-btn-item">삭제</button>
              </div>
            </div>
            <div className="review-photo-wrap">
              <div className="review-detail-header">
                <div className="review-detail-tit">힘이나는커피생활 무교점</div>
                <div className="review-detail-category">
                  <span>아메리카노</span>
                  <span>아메리카노</span>
                  <span>아메리카노</span>
                  <span>아메리카노</span>
                  <span>라떼</span>
                </div>
              </div>
              <div className="review-photo-txt">
                합정에서 만나는 최고의 경험, 라떼 맛집 새로운 커피를 한번 즐겨 보셨으면 좋겠습니다.
              </div>
              <div className="review-img-wrap">
                <Swiper slidesPerView={3} spaceBetween={10} slidesPerGroup={1} className="mySwiper">
                  {Array.from({ length: 6 }).map((_, index) => (
                    <SwiperSlide key={index}>
                      <button className="review-img-item" onClick={() => popupControler.setPhotoPopup(true)}>
                        <Image
                          src="/assets/images/contents/dummy02.jpg"
                          alt="review-img"
                          fill
                          sizes="(max-width: 320px) 100vw, 100vw"
                        />
                      </button>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
            <div className="review-comment">
              <div className="comment-symbol">
                <Image src="/assets/images/contents/review_master.svg" alt="master_icon" fill />
              </div>
              <div>
                <div className="comment-date">2025.08.06</div>
                <div className="comment-txt">
                  안녕하세요, 고객님 저희 매장을 이용해 주셔서 감사합니다.안녕하세요, 고객님 저희 매장을 이용해 주셔서
                  감사합니다.안녕하세요, 고객님 저희 매장을 이용해 주셔서 감사합니다.안녕하세요, 고객님 저희 매장을
                  이용해 주셔서 감사합니다.안녕하세요, 고객님 저희 매장을 이용해 주셔서 감사합니다.
                </div>
              </div>
            </div>
          </li>
          <li className="review-completed-item">
            <div className="review-update-wrap">
              <div className="review-update-info">
                <div className="review-update-date">
                  <span>작성일</span> : 2025.08.06 10:15
                </div>
                <div className="review-update-date">
                  <span>수정일</span> : 2025.08.06 10:15
                </div>
              </div>
              <div className="review-update-btn">
                <button className="review-update-btn-item">수정</button>
                <button className="review-update-btn-item">삭제</button>
              </div>
            </div>
            <div className="review-photo-wrap">
              <div className="review-detail-header">
                <div className="review-detail-tit">힘이나는커피생활 무교점</div>
                <div className="review-detail-category">
                  <span>아메리카노</span>
                  <span>아메리카노</span>
                  <span>아메리카노</span>
                  <span>아메리카노</span>
                  <span>라떼</span>
                </div>
              </div>
              <div className="review-photo-txt">
                합정에서 만나는 최고의 경험, 라떼 맛집 새로운 커피를 한번 즐겨 보셨으면 좋겠습니다.
              </div>
            </div>
            <div className="review-comment">
              <div className="comment-symbol">
                <Image src="/assets/images/contents/review_master.svg" alt="master_icon" fill />
              </div>
              <div>
                <div className="comment-date">2025.08.06</div>
                <div className="comment-txt">
                  안녕하세요, 고객님 저희 매장을 이용해 주셔서 감사합니다.안녕하세요, 고객님 저희 매장을 이용해 주셔서
                  감사합니다.안녕하세요, 고객님 저희 매장을 이용해 주셔서 감사합니다.안녕하세요, 고객님 저희 매장을
                  이용해 주셔서 감사합니다.안녕하세요, 고객님 저희 매장을 이용해 주셔서 감사합니다.
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}
