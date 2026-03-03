import { Sheet } from 'react-modal-sheet'
import { useBottomSheetControler } from '@/store/useBottomSheetControler'

export default function ArraySheet() {
  const bottomSheetControler = useBottomSheetControler()

  return (
    <Sheet
      isOpen={bottomSheetControler.arraySheet}
      onClose={() => bottomSheetControler.setArraySheet(false)}
      detent="content"
      disableScrollLocking={true}
    >
      <Sheet.Container>
        <Sheet.Header />
        <Sheet.Content>
          <div className="bottom-sheet">
            <div className="bottom-sheet-header">
              <h3>정열 방식</h3>
            </div>
            <div className=" bottom-sheet-body">
              <ul className="array-list">
                <li className="array-item act">
                  <button className="array-addr">가까운 순</button>
                </li>
                <li className="array-item">
                  <button className="array-addr">주문많은 순</button>
                </li>
                <li className="array-item">
                  <button className="array-addr">찜 많은 순</button>
                </li>
                <li className="array-item">
                  <button className="array-addr">리뷰 많은 순</button>
                </li>
              </ul>
            </div>
          </div>
        </Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop onTap={() => bottomSheetControler.setArraySheet(false)} />
    </Sheet>
  )
}
