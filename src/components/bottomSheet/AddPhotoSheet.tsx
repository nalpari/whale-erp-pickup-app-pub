import { Sheet } from 'react-modal-sheet'
import { useBottomSheetControler } from '@/store/useBottomSheetControler'

export default function AddPhotoSheet() {
  const bottomSheetControler = useBottomSheetControler()

  return (
    <Sheet
      isOpen={bottomSheetControler.addPhotoSheet}
      onClose={() => bottomSheetControler.setAddPhotoSheet(false)}
      detent="content"
      disableScrollLocking={true}
    >
      <Sheet.Container>
        <Sheet.Header />
        <Sheet.Content>
          <div className="bottom-sheet">
            <div className="bottom-sheet-header">
              <h3>사진등록</h3>
            </div>
            <div className=" bottom-sheet-body">
              <ul className="array-list">
                <li className="array-item act">
                  <button className="array-addr">카메라로 촬영하기</button>
                </li>
                <li className="array-item">
                  <button className="array-addr">앨범에서 선택하기</button>
                </li>
              </ul>
            </div>
          </div>
        </Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop onTap={() => bottomSheetControler.setAddPhotoSheet(false)} />
    </Sheet>
  )
}
