"use client";
import Image from "next/image";
import { useState } from "react";
import { usePopupControler } from "@/store/usePopupControler";
import AnimateHeight from "react-animate-height";

export default function MenuContents() {
  const [count, setCount] = useState(1);
  const [optionSetting, setOptionSetting] = useState("all_same");
  const [cupOptionHeight, setCupOptionHeight] = useState(true);

  const cupLength = 3;

  const popupControler = usePopupControler();
  return (
    <div className="menu-contents">
      <div className="menu-content-bx">
        <div className="menu-content-data">
          <div className="menu-item">
            <Image
              src="/assets/images/contents/menu_item.png"
              alt="menu-img"
              fill
            />
          </div>
          <div className="menu-info">
            <div className="menu-data">
              <div className="menu-badge-wrap">
                <span className="badge c">
                  <b>C</b>쿠폰
                </span>
                <span className="badge s">
                  <b>S</b>스템프
                </span>
              </div>
              <div className="menu-name">스위츠 복숭아 아이스티</div>
              <div className="menu-price">
                6,000원 <span className="discount">8,600원</span>
              </div>
            </div>
            <button
              className="menu-zoom"
              onClick={() => popupControler.setPhotoPopup(true)}
            ></button>
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
      </div>
      <div className="menu-content-bx">
        <div className="menu-option-setting">
          <div className="option-setting-tit">옵션 설정</div>
          <div className="option-setting-list">
            <div className="radio-form-box">
              <input
                type="radio"
                id="all_same"
                name="option1"
                checked={optionSetting === "all_same"}
                onChange={() => setOptionSetting("all_same")}
              />
              <label htmlFor="all_same">전체 동일 옵션</label>
            </div>
            <div className="radio-form-box">
              <input
                type="radio"
                id="separate"
                name="option1"
                checked={optionSetting === "separate"}
                onChange={() => setOptionSetting("separate")}
              />
              <label htmlFor="separate">잔별 개별 옵션</label>
            </div>
          </div>
        </div>
      </div>
      {optionSetting === "all_same" ? (
        <div className="menu-content-bx">
          <div className="menu-option-wrap all_same">
            <div className="menu-option-list">
              <div className="menu-option-item">
                <div className="option-tit">
                  <span>음료 온도</span>
                  <span className="required">필수선택</span>
                </div>
                <div className="check-wrap">
                  <div className="option-check-wrap">
                    <div className="radio-form-box">
                      <input type="radio" id="radio1" name="radio1" />
                      <label htmlFor="radio1">HOT</label>
                    </div>
                    <div className="option-info-wrap">
                      <div className="option-cost">0원</div>
                    </div>
                  </div>
                  <div className="option-check-wrap">
                    <div className="radio-form-box">
                      <input
                        type="radio"
                        id="radio2"
                        name="radio1"
                        defaultChecked
                      />
                      <label htmlFor="radio2">ICE</label>
                    </div>
                    <div className="option-info-wrap">
                      {/* checked 클래스 추가 시 체크 색상 변경 */}
                      <div className="option-cost checked">+300원</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="menu-option-item">
                <div className="option-tit">
                  <span>원두 종류</span>
                  <span className="required">필수선택</span>
                </div>
                <div className="check-wrap">
                  <div className="option-check-wrap">
                    <div className="radio-form-box">
                      <input type="radio" id="radio3" name="radio2" />
                      <label htmlFor="radio3">메인블렌드</label>
                    </div>
                    <div className="option-info-wrap">
                      <div className="option-cost ">0원</div>
                    </div>
                  </div>
                  <div className="option-check-wrap">
                    <div className="radio-form-box">
                      <input
                        type="radio"
                        id="radio4"
                        name="radio2"
                        defaultChecked
                      />
                      <label htmlFor="radio4">코케허니</label>
                    </div>
                    <div className="option-info-wrap">
                      {/* checked 클래스 추가 시 체크 색상 변경 */}
                      <div className="option-cost checked">+300원</div>
                    </div>
                  </div>
                  <div className="option-check-wrap">
                    <div className="radio-form-box">
                      <input type="radio" id="radio5" name="radio2" />
                      <label htmlFor="radio5">디카페인</label>
                    </div>
                    <div className="option-info-wrap">
                      <div className="option-cost ">0원</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="menu-option-item">
                <div className="option-tit">
                  <span>샷추가</span>
                </div>
                <div className="check-wrap">
                  <div className="option-check-wrap">
                    <div className="check-form-box">
                      <input type="checkbox" id="check1" name="check1" />
                      <label htmlFor="check1">연하게</label>
                    </div>
                    <div className="option-info-wrap">
                      {/* checked 클래스 추가 시 체크 색상 변경 */}
                      <div className="option-cost checked">0원</div>
                    </div>
                  </div>
                  <div className="option-check-wrap">
                    <div className="check-form-box">
                      <input
                        type="checkbox"
                        id="check2"
                        name="check1"
                        defaultChecked
                      />
                      <label htmlFor="check2">샷 추가</label>
                    </div>
                    <div className="option-info-wrap">
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
                      {/* checked 클래스 추가 시 체크 색상 변경 */}
                      <div className="option-cost checked">+8000원</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        Array.from({ length: cupLength }).map((_, index) => (
          <div className="menu-content-bx" key={index}>
            <div className="menu-option-wrap">
              <button
                type="button"
                className="menu-option-num"
                onClick={() => setCupOptionHeight(!cupOptionHeight)}
              >
                <span>1번 컵</span>
                <span
                  className={`menu-option-arr ${cupOptionHeight ? "act" : ""}`}
                ></span>
              </button>
              <AnimateHeight
                duration={300}
                height={cupOptionHeight ? 0 : "auto"}
              >
                <div className="menu-option-list">
                  <div className="menu-option-item">
                    <div className="option-tit">
                      <span>음료 온도</span>
                      <span className="required">필수선택</span>
                    </div>
                    <div className="check-wrap">
                      <div className="option-check-wrap">
                        <div className="radio-form-box">
                          <input type="radio" id="radio1" name="radio1" />
                          <label htmlFor="radio1">HOT</label>
                        </div>
                        <div className="option-info-wrap">
                          <div className="option-cost">0원</div>
                        </div>
                      </div>
                      <div className="option-check-wrap">
                        <div className="radio-form-box">
                          <input
                            type="radio"
                            id="radio2"
                            name="radio1"
                            defaultChecked
                          />
                          <label htmlFor="radio2">ICE</label>
                        </div>
                        <div className="option-info-wrap">
                          {/* checked 클래스 추가 시 체크 색상 변경 */}
                          <div className="option-cost checked">+300원</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="menu-option-item">
                    <div className="option-tit">
                      <span>원두 종류</span>
                      <span className="required">필수선택</span>
                    </div>
                    <div className="check-wrap">
                      <div className="option-check-wrap">
                        <div className="radio-form-box">
                          <input type="radio" id="radio3" name="radio2" />
                          <label htmlFor="radio3">메인블렌드</label>
                        </div>
                        <div className="option-info-wrap">
                          <div className="option-cost ">0원</div>
                        </div>
                      </div>
                      <div className="option-check-wrap">
                        <div className="radio-form-box">
                          <input
                            type="radio"
                            id="radio4"
                            name="radio2"
                            defaultChecked
                          />
                          <label htmlFor="radio4">코케허니</label>
                        </div>
                        <div className="option-info-wrap">
                          {/* checked 클래스 추가 시 체크 색상 변경 */}
                          <div className="option-cost checked">+300원</div>
                        </div>
                      </div>
                      <div className="option-check-wrap">
                        <div className="radio-form-box">
                          <input type="radio" id="radio5" name="radio2" />
                          <label htmlFor="radio5">디카페인</label>
                        </div>
                        <div className="option-info-wrap">
                          <div className="option-cost ">0원</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="menu-option-item">
                    <div className="option-tit">
                      <span>샷추가</span>
                    </div>
                    <div className="check-wrap">
                      <div className="option-check-wrap">
                        <div className="check-form-box">
                          <input type="checkbox" id="check1" name="check1" />
                          <label htmlFor="check1">연하게</label>
                        </div>
                        <div className="option-info-wrap">
                          {/* checked 클래스 추가 시 체크 색상 변경 */}
                          <div className="option-cost checked">0원</div>
                        </div>
                      </div>
                      <div className="option-check-wrap">
                        <div className="check-form-box">
                          <input
                            type="checkbox"
                            id="check2"
                            name="check1"
                            defaultChecked
                          />
                          <label htmlFor="check2">샷 추가</label>
                        </div>
                        <div className="option-info-wrap">
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
                          {/* checked 클래스 추가 시 체크 색상 변경 */}
                          <div className="option-cost checked">+8000원</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateHeight>
            </div>
          </div>
        ))
      )}

      <div className="menu-btn-wrap">
        <button className="btn-form black block">
          <span>1,200원</span> 장바구니 담기
        </button>
      </div>
    </div>
  );
}
