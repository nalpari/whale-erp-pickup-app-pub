import { Sheet } from "react-modal-sheet";
import { useBottomSheetControler } from "@/store/useBottomSheetControler";

export default function InstallmentSheet() {
  const bottomSheetControler = useBottomSheetControler();

  return (
    <Sheet
      isOpen={bottomSheetControler.installmentSheet}
      onClose={() => bottomSheetControler.setInstallmentSheet(false)}
      detent="content"
      disableScrollLocking={true}
    >
      <Sheet.Container>
        <Sheet.Header />
        <Sheet.Content>
          <div className="bottom-sheet">
            <div className="bottom-sheet-header">
              <h3>일시불/할부 선택</h3>
            </div>
            <div className=" bottom-sheet-body">
              <div className="installment-form">
                <div className="installment-btn-bx">
                  <button className="btn-form outline block ">일시불</button>
                </div>
                <div className="installment-btn-bx">
                  <button className="btn-form outline block active">
                    할부
                  </button>
                </div>
                <div className="installment-sel-bx">
                  <select className="select-form" name="" id="">
                    <option value="">할부 개월수 선택</option>
                    <option value="">2개월</option>
                    <option value="">3개월</option>
                    <option value="">4개월</option>
                    <option value="">5개월</option>
                    <option value="">6개월</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop
        onTap={() => bottomSheetControler.setInstallmentSheet(false)}
      />
    </Sheet>
  );
}
