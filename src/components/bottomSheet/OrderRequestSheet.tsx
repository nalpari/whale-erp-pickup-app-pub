import { Sheet } from "react-modal-sheet";
import { useBottomSheetControler } from "@/store/useBottomSheetControler";
import { useState } from "react";

export default function OrderRequestSheet() {
  const bottomSheetControler = useBottomSheetControler();

  const [requestCustomOpen, setRequestCustomOpen] = useState(false); // 직접 입력 스위칭

  const requestLength = 2; // 요청사항 더미 개수

  return (
    <Sheet
      isOpen={bottomSheetControler.orderRequestSheet}
      onClose={() => bottomSheetControler.setOrderRequestSheet(false)}
      detent="content"
      disableScrollLocking={true}
    >
      <Sheet.Container>
        <Sheet.Header />
        <Sheet.Content>
          <div className="bottom-sheet">
            <div className="bottom-sheet-header">
              <h3> {requestCustomOpen ? "요청사항 직접 입력" : "요청사항"}</h3>
            </div>
            <div className=" bottom-sheet-body">
              <div className="request-form-box">
                {!requestCustomOpen ? (
                  <>
                    {requestLength > 0 ? (
                      <ul className="request-list">
                        <li className="request-item act">
                          <button className="request-btn">요청사항</button>
                        </li>
                        {Array.from({ length: requestLength }).map(
                          (_, index) => (
                            <li className="request-item" key={index}>
                              <button className="request-btn">
                                요청사항 {index + 1}
                              </button>
                            </li>
                          )
                        )}
                      </ul>
                    ) : (
                      <div className="request-empty">
                        저장된 요청사항이 없습니다.
                      </div>
                    )}
                    <div className="request-custom-btn">
                      <button
                        className="btn-form outline block"
                        onClick={() => setRequestCustomOpen(true)}
                      >
                        직접입력
                      </button>
                    </div>
                    <div className="requst-guide">
                      ※최근 사용한 요청사항이 5개까지 표시됩니다.
                    </div>
                  </>
                ) : (
                  <div className="request-custom-box">
                    <div className="request-custom-textarea">
                      <textarea
                        className="textarea-form"
                        placeholder="요청사항을 입력해주세요."
                      ></textarea>
                    </div>
                    <div className="request-custom-guide">
                      <span className="request-custom-warning">
                        입력된 요청사항이 없습니다.
                      </span>
                      <span className="request-custom-length">
                        <i className="txt-count">0</i>/80
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
            {requestCustomOpen && (
              <div className="bottom-sheet-footer">
                <button
                  className="btn-form grey"
                  onClick={() => setRequestCustomOpen(false)}
                >
                  취소
                </button>
                <button
                  className="btn-form black"
                  onClick={() =>
                    bottomSheetControler.setOrderRequestSheet(false)
                  }
                >
                  입력
                </button>
              </div>
            )}
          </div>
        </Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop
        onTap={() => bottomSheetControler.setOrderRequestSheet(false)}
      />
    </Sheet>
  );
}
