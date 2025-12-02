"use client";
import { useState } from "react";
import AnimateHeight from "react-animate-height";
import { useRouter } from "next/navigation";

export default function BasketContents() {
  const router = useRouter();
  const [count, setCount] = useState(1);
  const [paymentMethodHeight, setPaymentMethodHeight] = useState(false);

  const dataLength = 2;
  return (
    <div className="basket-contents">
      {dataLength > 0 ? (
        <div className="basket-contents-inner">
          <div className="basket-map-data">
            <div className="map-inner">
              <div className="map-inner-data">
                <span className="tit">수령 방법</span>
                <span>테이크 아웃</span>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.4404669974238!2d126.9767946764059!3d37.568244524028984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca339ca718985%3A0xf511f652dc96a07b!2z7Z6Y7J2064KY64qUIOy7pO2UvOyDne2ZnCDrrLTqtZDsoJA!5e0!3m2!1sko!2skr!4v1764565012069!5m2!1sko!2skr"
                width="600"
                height="450"
                style={{ border: "0", width: "100%", height: "100%" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="map-inner-info">
              <div className="map-info-data">
                <div className="map-info-data-name">
                  힘이나는커피생활 무교점
                </div>
                <div className="map-info-data-address">
                  서울특별시 영등포구 연세로 775
                </div>
              </div>
              <div className="map-info-distance">8.6km</div>
            </div>
          </div>
          <div className="basket-conts-bx">
            <div className="basket-conts-tit">주문 상품정보</div>
            <div className="basket-conts-body">
              <div className="basket-menu-list">
                {Array.from({ length: dataLength }).map((_, index) => (
                  <div className="basket-menu-item" key={index}>
                    <div className="menu-item-header">
                      <div className="menu-item-badge">
                        <span className="badge c">
                          <b>C</b>쿠폰
                        </span>
                        <span className="badge s">
                          <b>S</b>스템프
                        </span>
                      </div>
                      <div className="menu-item-btn-wrap">
                        <button className="menu-option">옵션변경</button>
                        <button className="menu-del">삭제</button>
                      </div>
                    </div>
                    <div className="basket-menu-info">
                      <div className="basket-menu-tit">복숭아 아이스티</div>
                      <div className="basket-menu-price">
                        <span className="original-price">8,600원</span>
                        <span className="discount-price">6,000원</span>
                      </div>
                    </div>
                    <div className="basket-menu-option">
                      <div className="basket-menu-option-item">
                        <div className="basket-option-name">일반컵</div>
                        <div className="basket-option-price">0원</div>
                      </div>
                      <div className="basket-menu-option-item">
                        <div className="basket-option-name">캔 변경</div>
                        <div className="basket-option-price">+300원</div>
                      </div>
                      <div className="basket-menu-option-item">
                        <div className="basket-option-name">얼음빼고 캔</div>
                        <div className="basket-option-price">+8000원</div>
                      </div>
                      <div className="basket-menu-option-item">
                        <div className="basket-option-name b">총 가격</div>
                        <div className="basket-option-price b">8,600원</div>
                      </div>
                    </div>
                    <div className="menu-count-wrap">
                      <button
                        className="menu-minus"
                        onClick={() => setCount(count - 1)}
                        disabled={count === 1}
                      ></button>
                      <span className="menu-count">{count}</span>
                      <button
                        className="menu-plus"
                        onClick={() => setCount(count + 1)}
                      ></button>
                    </div>
                  </div>
                ))}
              </div>
              <button className="btn-form outline block add-menu">
                <i className="plus-icon"></i>메뉴추가
              </button>
            </div>
          </div>
          <div className="basket-conts-bx">
            <div className="basket-conts-tit">
              예상 픽업시간 <span className="red">*</span>
            </div>
            <div className="basket-conts-body">
              <div className="pickup-time-list">
                <button className="pickup-time-item" value="now">
                  지금
                </button>
                <button className="pickup-time-item" value="5">
                  5분
                </button>
                <button className="pickup-time-item act" value="10">
                  10분
                </button>
                <button className="pickup-time-item" value="15">
                  15분
                </button>
                <button className="pickup-time-item" value="20">
                  20분
                </button>
                <button className="pickup-time-item" value="30">
                  30분
                </button>
                <button className="pickup-time-item" value="40">
                  40분
                </button>
                <button className="pickup-time-item" value="custom">
                  입력
                </button>
              </div>
              <div className="pickup-guide">
                ※ 1시간 이상인 경우, 요청사항에 입력해주세요.
              </div>
              <div className="pickup-option-wrap">
                <div className="pickup-option-tit">요청 사항</div>
                <button className="option-btn-select">
                  <span>
                    요청사항 선택요청사항 선택요청사항 선택요청사항 선택요청사항
                    선택요청사항 선택요청사항 선택요청사항 선택요청사항 선택
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="basket-conts-bx">
            <div className="basket-conts-tit">할인/부가 결제 </div>
            <div className="basket-conts-body">
              <div className="discount-guide">
                <span>※ 쿠폰/포인트/스탬프는 동시 사용할 수 없습니다.</span>
                <span>
                  ※ 쿠폰 사용 시, 쿠폰을 사용한 메뉴를 제외하고 스탬프가
                  적립됩니다.
                </span>
              </div>
              <div className="discount-data-wrap">
                <div className="discount-data-item">
                  <div className="discount-data-item-tit">쿠폰</div>
                  <div className="discount-data-item-input">
                    <div className="input-icon-frame del ">
                      <input type="number" defaultValue={0} readOnly />
                      <button className="input-icon-btn"></button>
                    </div>
                    <button className="discount-btn">쿠폰 선택</button>
                  </div>
                </div>
                <div className="discount-data-item">
                  <div className="discount-data-item-tit">스템프</div>
                  <div className="discount-data-item-input">
                    <div className="input-icon-frame del ">
                      <input type="number" defaultValue={0} />
                      <button className="input-icon-btn"></button>
                    </div>
                    <button className="discount-btn">모두 사용</button>
                  </div>
                  <div className="discount-point-wrap">
                    <div className="discount-point">
                      보유 스탬프 <span>23</span>
                    </div>
                    <div className="discount-point">
                      <span>1,000</span>원 이상 사용가능
                    </div>
                  </div>
                </div>
                <div className="discount-data-item">
                  <div className="discount-data-item-tit">포인트</div>
                  <div className="discount-data-item-input">
                    <div className="input-icon-frame del ">
                      <input type="number" defaultValue={0} />
                      <button className="input-icon-btn"></button>
                    </div>
                    <button className="discount-btn">모두 사용</button>
                  </div>
                  <div className="discount-point-wrap">
                    <div className="discount-point">
                      보유 포인트 <span> 5,000</span>
                    </div>
                    <div className="discount-point">
                      <span>1,000</span>원 이상 사용가능
                    </div>
                  </div>
                </div>
              </div>
              <div className="discount-total-wrap">
                <div className="discount-total-tit">할인 금액</div>
                <div className="discount-total-price">2,800원</div>
              </div>
            </div>
          </div>
          <div className="basket-conts-bx">
            <div className="basket-conts-tit">결제 수단</div>
            <div className="basket-conts-body">
              <ul className="payment-method-list">
                <li className="payment-method-item">
                  <button
                    className={`btn-form outline block ${
                      paymentMethodHeight ? "active" : ""
                    }`}
                    onClick={() => setPaymentMethodHeight(!paymentMethodHeight)}
                  >
                    <i className="card-icon"></i>
                    신용/체크카드
                  </button>
                  <AnimateHeight
                    duration={300}
                    height={paymentMethodHeight ? "auto" : 0}
                  >
                    <ul className="payment-method-list-sub">
                      <li className="payment-method-item-sub">
                        <button className="option-btn-select">
                          <span>신용/체크카드 선택</span>
                        </button>
                      </li>
                      <li className="payment-method-item-sub">
                        <button className="option-btn-select">
                          <span>일시불/할부 선택</span>
                        </button>
                      </li>
                    </ul>
                  </AnimateHeight>
                </li>
                <li className="payment-method-item">
                  <button className="btn-form outline block">
                    <i className="kakao-icon"></i> 카카오페이
                  </button>
                </li>
                <li className="payment-method-item">
                  <button className="btn-form outline block">
                    <i className="naver-icon"></i> 네이버페이
                  </button>
                </li>
                <li className="payment-method-item">
                  <button className="btn-form outline block">
                    <i className="toss-icon"></i> 토스페이
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="basket-conts-bx">
            <div className="basket-conts-tit">적립혜택</div>
            <div className="basket-conts-body">
              <div className="earn-point-wrap">
                <div className="earn-point-item">
                  <div className="earn-point-item-tit">포인트</div>
                  <div className="earn-point-item-data">5,000</div>
                </div>
                <div className="earn-point-item">
                  <div className="earn-point-item-tit">스템프</div>
                  <div className="earn-point-item-data">800</div>
                </div>
              </div>
            </div>
          </div>
          <div className="basket-conts-bx">
            <div className="basket-conts-body">
              <div className="check-form-box">
                <input type="checkbox" id="check1" name="check1" />
                <label htmlFor="check1">
                  결제 수단과 입력정보를 다음에도 사용
                </label>
              </div>
              <div className="basket-pay-btn">
                <button className="btn-form pink block">
                  <span className="btn-text">결제하기</span>
                  <span className="btn-price">28,500원</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="history-empty">
          <div className="empty-wrap">
            <div className="empty-icon-bx">
              <i className="empty-icon"></i>
            </div>
            <div className="empty-text">장바구니에 담은 메뉴가 없습니다.</div>
            <button className="empty-btn" onClick={() => router.push("/")}>
              점포 둘러보기
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
