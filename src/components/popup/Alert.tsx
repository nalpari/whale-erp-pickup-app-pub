"use client";
import { usePopupControler } from "@/store/usePopupControler";

export default function Alert() {
  const popupControler = usePopupControler();
  return (
    <div className="modal-popup alert">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body">
            <div className="alert-frame">
              <div className="alert-tit">[접수완료] 아메리카노 1개</div>
              <div className="alert-info">
                <span>
                  픽업번호 : <b>100</b>
                </span>
                <span>픽업대에서 수령하세요.</span>
              </div>
              <div className="alert-btn">
                <button
                  className="btn-form black block"
                  onClick={() => popupControler.setAlertPopup(false)}
                >
                  확인
                </button>
                {/* alert 팝업시 취소 버튼 숨김 confirm 팝업시 취소 버튼 노출 */}
                {/* <button
                  className="btn-form blue-b block"
                  onClick={() => popupControler.setAlertPopup(false)}
                >
                  취소
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
