import { usePopupControler } from "@/store/usePopupControler";
import { useEffect, useState } from "react";

export default function OrderBillPopup() {
  const [active, setActive] = useState(false);
  const popupControler = usePopupControler();

  useEffect(() => {
    // 팝업 열기 시간 필요
    setTimeout(() => {
      setActive(popupControler.orderBillPopup);
    }, 100);
  }, [popupControler.orderBillPopup]);

  // 팝업 닫기 시간 필요
  const handleClose = () => {
    setActive(false);
    setTimeout(() => {
      popupControler.setOrderBillPopup(false);
    }, 250);
  };
  return (
    <div className={`modal-popup ${active ? "act" : ""}`}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h3>전자 영수증</h3>
            <button className="modal-close" onClick={handleClose}></button>
          </div>
          <div className="modal-body">
            <div className="bill-frame">
              <div className="bill-table-wrap">
                <table className="bill-table">
                  <colgroup>
                    <col width="80px" />
                    <col />
                  </colgroup>
                  <tbody>
                    <tr>
                      <td>점포명</td>
                      <td className="end">
                        힘이나는 커피생활 종로 젊음의 거리점
                      </td>
                    </tr>
                    <tr>
                      <td>전화번호</td>
                      <td className="end">02-1234-1234</td>
                    </tr>
                    <tr>
                      <td>주소</td>
                      <td className="end">서울 종로구</td>
                    </tr>
                    <tr>
                      <td>대표자</td>
                      <td className="end">홍길동</td>
                    </tr>
                    <tr>
                      <td>사업자 번호</td>
                      <td className="end">123-12-12345</td>
                    </tr>
                    <tr>
                      <td>판매 일자</td>
                      <td className="end">2025-10-21 10 : 25 : 15</td>
                    </tr>
                    <tr>
                      <td>주문번호</td>
                      <td className="end">516302701</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="bill-frame-bx">
                <table className="bill-menu-table">
                  <colgroup>
                    <col />
                    <col width="65px" />
                    <col width="60px" />
                    <col width="80px" />
                  </colgroup>
                  <thead>
                    <tr>
                      <th>메뉴</th>
                      <th>단가</th>
                      <th>수량</th>
                      <th>금액</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="al-l">복숭아 아이스티</td>
                      <td>1,600원</td>
                      <td>1</td>
                      <td className="b">1,600원</td>
                    </tr>
                    <tr>
                      <td className="al-l">
                        <div className="option-name">ICED</div>
                      </td>
                      <td></td>
                      <td></td>
                      <td className="b"></td>
                    </tr>
                    <tr>
                      <td className="al-l">
                        <div className="option-name">M</div>
                      </td>
                      <td></td>
                      <td></td>
                      <td className="b"></td>
                    </tr>
                    <tr>
                      <td className="al-l">
                        <div className="option-name">샷 추가</div>
                      </td>
                      <td>500</td>
                      <td>2</td>
                      <td className="b">1,000원</td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td className="al-l">아메리카노</td>
                      <td>1,600원</td>
                      <td>1</td>
                      <td className="b">1,600원</td>
                    </tr>
                    <tr>
                      <td className="al-l">
                        <div className="option-name">ICED</div>
                      </td>
                      <td></td>
                      <td></td>
                      <td className="b"></td>
                    </tr>
                  </tbody>
                </table>
                <div className="bill-menu-total">
                  <div className="bill-total-data">
                    <p className="total-name">주문 금액</p>
                    <p className="total-price">5,800원</p>
                  </div>
                  <div className="bill-total-data">
                    <p className="total-name light">할인 금액</p>
                    <p className="total-price">0원</p>
                  </div>
                  <div className="bill-total-data">
                    <p className="total-name">결제 금액</p>
                    <p className="total-price">5,800원</p>
                  </div>
                  <div className="bill-total-data">
                    <p className="total-name option">과세 금액</p>
                    <p className="total-price">5,800원</p>
                  </div>
                  <div className="bill-total-data">
                    <p className="total-name option">부가세</p>
                    <p className="total-price">527원</p>
                  </div>
                </div>
              </div>
              <div className="bill-frame-bx">
                <div className="bill-frame-bx-tit">
                  <p className="tit-name">카드 결제</p>
                  <p className="tit-price">5,800원</p>
                </div>
                <div className="bill-frame-bx-inner">
                  <table className="bill-table">
                    <colgroup>
                      <col width="65px" />
                      <col />
                    </colgroup>
                    <tbody>
                      <tr>
                        <td>카드 번호</td>
                        <td className="end">1234-12**-****-****</td>
                      </tr>
                      <tr>
                        <td>거래 종류</td>
                        <td className="end">신용구매</td>
                      </tr>
                      <tr>
                        <td>거래 구분</td>
                        <td className="end">일시불</td>
                      </tr>
                      <tr>
                        <td>승인 번호</td>
                        <td className="end">12345678</td>
                      </tr>
                      <tr>
                        <td>승인 일시</td>
                        <td className="end">123-12-12345</td>
                      </tr>
                      <tr>
                        <td>판매 일자</td>
                        <td className="end">2025.10.21 10:25:15</td>
                      </tr>
                      <tr>
                        <td>매입 사명</td>
                        <td className="end">행복카드</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="bill-frame-bx">
                <div className="bill-frame-bx-inner">
                  <button className="btn-form black block">
                    <i className="icon-down"></i> 전자 영수증 다운로드
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
