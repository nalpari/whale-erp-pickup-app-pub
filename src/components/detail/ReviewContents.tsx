import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import { usePopupControler } from "@/store/usePopupControler";

export default function ReviewContents() {
  const popupControler = usePopupControler();
  return (
    <div className="review-contents">
      <div className="review-wrap">
        <div className="review-item">
          <div className="review-head">
            <h2>김나영</h2>
            <div className="review-date">2025.08.06</div>
          </div>
          <div className="review-menu">
            <span>아메리카노</span>
            <span>라떼</span>
          </div>
          <div className="review-txt">
            합정에서 만나는 최고의 경험, 라떼 맛집 새로운 커피를 한번 즐겨
            보셨으면 좋겠습니다.
          </div>
          <div className="review-img-wrap">
            <Swiper
              slidesPerView={3.2}
              spaceBetween={10}
              slidesPerGroup={3}
              className="mySwiper"
            >
              {Array.from({ length: 6 }).map((_, index) => (
                <SwiperSlide key={index}>
                  <button
                    className="review-img-item"
                    onClick={() => popupControler.setPhotoPopup(true)}
                  >
                    <Image
                      src="/assets/images/contents/dummy.png"
                      alt="review-img"
                      fill
                    />
                  </button>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="review-comment">
            <div className="comment-symbol">
              <Image
                src="/assets/images/contents/review_master.svg"
                alt="master_icon"
                fill
              />
            </div>
            <div>
              <div className="comment-date">2025.08.06</div>
              <div className="comment-txt">
                안녕하세요, 고객님 저희 매장을 이용해 주셔서
                감사합니다.안녕하세요, 고객님 저희 매장을 이용해 주셔서
                감사합니다.안녕하세요, 고객님 저희 매장을 이용해 주셔서
                감사합니다.안녕하세요, 고객님 저희 매장을 이용해 주셔서
                감사합니다.안녕하세요, 고객님 저희 매장을 이용해 주셔서
                감사합니다.
              </div>
            </div>
          </div>
        </div>
        <div className="review-item">
          <div className="review-head">
            <h2>홍길동</h2>
            <div className="review-date">2025.08.06</div>
          </div>
          <div className="review-menu">
            <span>아메리카노</span>
            <span>라떼</span>
          </div>
          <div className="review-txt">
            합정에서 만나는 최고의 경험, 라떼 맛집 새로운 커피를 한번 즐겨
            보셨으면 좋겠습니다.
          </div>
        </div>
        <div className="review-item">
          <div className="review-head">
            <h2>박나영</h2>
            <div className="review-date">2025.08.06</div>
          </div>
          <div className="review-txt">
            합정에서 만나는 최고의 경험, 라떼 맛집 새로운 커피를 한번 즐겨
            보셨으면 좋겠습니다.
          </div>
          <div className="review-comment">
            <div className="comment-symbol">
              <Image
                src="/assets/images/contents/review_master.svg"
                alt="master_icon"
                fill
              />
            </div>
            <div>
              <div className="comment-date">2025.08.06</div>
              <div className="comment-txt">
                안녕하세요, 고객님 저희 매장을 이용해 주셔서
                감사합니다.안녕하세요, 고객님 저희 매장을 이용해 주셔서
                감사합니다.안녕하세요, 고객님 저희 매장을 이용해 주셔서
                감사합니다.안녕하세요, 고객님 저희 매장을 이용해 주셔서
                감사합니다.안녕하세요, 고객님 저희 매장을 이용해 주셔서
                감사합니다.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
