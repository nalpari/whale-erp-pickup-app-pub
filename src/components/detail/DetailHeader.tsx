"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

export default function DetailHeader() {
  return (
    <div className="detail-header">
      <div className="detail-img-wrap">
        <div className="store-ready">
          <span>매장 점검 중 입니다.</span>
        </div>
        <Swiper
          pagination={{
            type: "fraction",
          }}
          modules={[Pagination]}
          className="detail-img-swiper"
        >
          <SwiperSlide>
            <div className="store-img">
              <Image
                src="/assets/images/contents/store_img.png"
                alt="store-img"
                fill
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="store-img">
              <Image
                src="/assets/images/layout/store_img.jpg"
                alt="store-img"
                fill
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="store-img">
              <Image
                src="/assets/images/layout/store_img.jpg"
                alt="store-img"
                fill
              />
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="store-badge-wrap">
          <span className="badge c">
            <b>C</b>쿠폰
          </span>
          <span className="badge s">
            <b>S</b>스템프
          </span>
          <span className="badge r">
            <b>E</b>매장 진행 이벤트
          </span>
        </div>
      </div>
      <div className="detail-info-wrap">
        <div className="store-name">힘이나는커피생활 무교점</div>
        <div className="store-desc-wrap">
          <div className="store-desc">스페셜티 커피의 환상적인 맛</div>
          <div className="store-desc-info">
            <span className="order">주문수 34</span>
            <span className="bookmark">28</span>
            <span className="comment">5,086</span>
          </div>
        </div>
        <div className="detail-tab-wrap">
          <button className="detail-tab-item">
            <span className="location icon"></span>
            <span>점포정보</span>
          </button>
          <button className="detail-tab-item">
            <span className="comment icon"></span>
            <span>후기</span>
          </button>
          <button className="detail-tab-item">
            <span className="bookmark icon"></span>
            <span>찜</span>
          </button>
        </div>
        <div className="detail-store-data">
          <Link href="/">
            이번 신메뉴는 말차+크림 음료 3종입니다! 9월16일부터 일주일간 1,000원
            할인된 금액으로 할인된 금액으로할인된 금액으로할인된 금액으로
          </Link>
        </div>
      </div>
    </div>
  );
}
