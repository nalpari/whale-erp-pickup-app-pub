import { usePopupControler } from "@/store/usePopupControler";
import { useEffect, useState } from "react";

export default function OptionChangePopup() {
  const [active, setActive] = useState(false);
  const popupControler = usePopupControler();

  const [count, setCount] = useState(1); //메뉴 더미 개수

  useEffect(() => {
    // 팝업 열기 시간 필요
    setTimeout(() => {
      setActive(popupControler.optionChangePopup);
    }, 100);
  }, [popupControler.optionChangePopup]);

  // 팝업 닫기 시간 필요
  const handleClose = () => {
    setActive(false);
    setTimeout(() => {
      popupControler.setOptionChangePopup(false);
    }, 250);
  };

  return (
    <div className={`modal-popup ${active ? "act" : ""}`}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h3>옵션변경</h3>
            <button className="modal-close" onClick={handleClose}></button>
          </div>
          <div className="modal-body">
            <div className="option-change-frame">
              <div className="option-menu-data">
                <div className="option-menu-name">이탈리안 비엠티(15CM)</div>
                <div className="option-menu-price">
                  <span className="original-price">8,600원</span>
                  <span className="discount-price">6,000원</span>
                </div>
              </div>
              <div className="option-change-bx">
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
              </div>
              <div className="option-change-bx">
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
              </div>
              <div className="option-change-bx">
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
              <div className="option-change-btn-bx">
                <div className="basket-pay-btn">
                  <button className="btn-form black block">
                    <span className="btn-text">결제하기</span>
                    <span className="btn-price">28,500원</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
