"use client";
import { usePopupControler } from "@/store/usePopupControler";
import { useEffect, useState } from "react";

export default function MypagePoint() {
  const [active, setActive] = useState(false);
  const popupControler = usePopupControler();

  useEffect(() => {
    // 팝업 열기 시간 필요
    setTimeout(() => {
      setActive(popupControler.mypagePointPopup);
    }, 100);
  }, [popupControler.mypagePointPopup]);

  // 팝업 닫기 시간 필요
  const handleClose = () => {
    setActive(false);
    setTimeout(() => {
      popupControler.setMypagePointPopup(false);
    }, 250);
  };

  return (
    <div className={`modal-popup ${active ? "act" : ""}`}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h3>WHALE 포인트</h3>
            <button className="modal-close" onClick={handleClose}></button>
          </div>
          <div className="modal-body">
            <div className="point-frame">
              <div className="point-guide">
                <span>
                  ※ 유효기간은 적립시점부터 1년, 매월 1일 자동 소멸됩니다.
                </span>
                <span>※ 기본적립 2%, 할인시 0.2% 적립됩니다.</span>
              </div>
              <div className="point-data-wrap">
                <div className="point-data-item">
                  <div className="point-data-tit">보유 포인트</div>
                  <div className="point-data">300,000 P</div>
                </div>
                <div className="point-data-item">
                  <div className="point-data-tit">다음달 소멸예정</div>
                  <div className="point-data">200 P</div>
                </div>
              </div>
              <div className="point-list-wrap">
                <div className="point-item">
                  <div className="point-item-tit">
                    <div className="point-item-date">2025.12.01</div>
                    <div className="point-item-txt">주문적립</div>
                  </div>
                  <div className="point-item-info">
                    <div className="point-item-info-tit">
                      힘이나는커피생활 무교점
                    </div>
                    <div className="point-item-info-data">
                      <span>+ 1,000 P</span>
                    </div>
                  </div>
                </div>
                <div className="point-item">
                  <div className="point-item-tit">
                    <div className="point-item-date">2025.12.01</div>
                    <div className="point-item-txt">주문사용</div>
                  </div>
                  <div className="point-item-info">
                    <div className="point-item-info-tit">
                      힘이나는커피생활 무교점
                    </div>
                    <div className="point-item-info-data">
                      <span className="use">- 1,000 P</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
