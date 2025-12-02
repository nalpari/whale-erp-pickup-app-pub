import { Sheet } from "react-modal-sheet";
import { useBottomSheetControler } from "@/store/useBottomSheetControler";

export default function CardSelectSheet() {
  const bottomSheetControler = useBottomSheetControler();

  return (
    <Sheet
      isOpen={bottomSheetControler.cardSelectSheet}
      onClose={() => bottomSheetControler.setCardSelectSheet(false)}
      detent="content"
      disableScrollLocking={true}
    >
      <Sheet.Container>
        <Sheet.Header />
        <Sheet.Content>
          <div className="bottom-sheet">
            <div className="bottom-sheet-header">
              <h3>신용/체크카드 선택</h3>
            </div>
            <div className=" bottom-sheet-body">
              <ul className="category-list">
                <li className="category-item">
                  <button className="category-btn">현대</button>
                </li>
                <li className="category-item">
                  <button className="category-btn">신한</button>
                </li>
                <li className="category-item">
                  <button className="category-btn">비씨(페이북)</button>
                </li>
                <li className="category-item">
                  <button className="category-btn">KB국민</button>
                </li>
                <li className="category-item act">
                  <button className="category-btn">삼성</button>
                </li>
                <li className="category-item">
                  <button className="category-btn">롯데</button>
                </li>
                <li className="category-item">
                  <button className="category-btn">하나(외환)</button>
                </li>
                <li className="category-item">
                  <button className="category-btn">NH채움</button>
                </li>
                <li className="category-item">
                  <button className="category-btn">우리</button>
                </li>
                <li className="category-item">
                  <button className="category-btn">수협</button>
                </li>
                <li className="category-item">
                  <button className="category-btn">시티</button>
                </li>
                <li className="category-item">
                  <button className="category-btn">광주</button>
                </li>
                <li className="category-item">
                  <button className="category-btn">전북</button>
                </li>
                <li className="category-item">
                  <button className="category-btn">제주</button>
                </li>
                <li className="category-item">
                  <button className="category-btn">신협체크</button>
                </li>
                <li className="category-item">
                  <button className="category-btn">MG새마을체크</button>
                </li>
                <li className="category-item">
                  <button className="category-btn">저축은행체크</button>
                </li>
                <li className="category-item">
                  <button className="category-btn">우체국카드</button>
                </li>
                <li className="category-item">
                  <button className="category-btn">KDB산업은행</button>
                </li>
                <li className="category-item">
                  <button className="category-btn">카카오뱅크</button>
                </li>
              </ul>
            </div>
          </div>
        </Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop
        onTap={() => bottomSheetControler.setCardSelectSheet(false)}
      />
    </Sheet>
  );
}
