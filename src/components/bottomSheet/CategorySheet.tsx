import { Sheet } from "react-modal-sheet";
import { useBottomSheetControler } from "@/store/useBottomSheetControler";

export default function CategorySheet() {
  const bottomSheetControler = useBottomSheetControler();

  return (
    <Sheet
      isOpen={bottomSheetControler.categorySheet}
      onClose={() => bottomSheetControler.setCategorySheet(false)}
      detent="content"
      disableScrollLocking={true}
    >
      <Sheet.Container>
        <Sheet.Header />
        <Sheet.Content>
          <div className="bottom-sheet">
            <div className="bottom-sheet-header">
              <h3>전체 메뉴 카테고리</h3>
            </div>
            <div className=" bottom-sheet-body">
              <ul className="category-list">
                <li className="category-item">
                  <button className="category-btn">시그니처</button>
                </li>
                <li className="category-item">
                  <button className="category-btn">커피</button>
                </li>
                <li className="category-item">
                  <button className="category-btn">논커피</button>
                </li>
                <li className="category-item">
                  <button className="category-btn">라떼</button>
                </li>
                <li className="category-item act">
                  <button className="category-btn">에이드&주스</button>
                </li>
                <li className="category-item">
                  <button className="category-btn">스무디&프라페</button>
                </li>
                <li className="category-item">
                  <button className="category-btn">TEA</button>
                </li>
                <li className="category-item">
                  <button className="category-btn">디저트</button>
                </li>
              </ul>
            </div>
          </div>
        </Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop
        onTap={() => bottomSheetControler.setCategorySheet(false)}
      />
    </Sheet>
  );
}
