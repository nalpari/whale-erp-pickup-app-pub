'use client'
import { useBottomSheetControler } from '@/store/useBottomSheetControler'
import { usePopupControler } from '@/store/usePopupControler'
import { Sheet } from 'react-modal-sheet'

export default function LocationSheet() {
  const bottomSheetControler = useBottomSheetControler()
  const dataLength = 3
  const setAddressSearchPopup = usePopupControler((state) => state.setAddressSearchPopup)

  const handleAddressSearch = () => {
    setAddressSearchPopup(true)
    bottomSheetControler.setLocationSheet(false)
  }
  return (
    <Sheet
      isOpen={bottomSheetControler.locationSheet}
      onClose={() => bottomSheetControler.setLocationSheet(false)}
      detent="content"
      disableScrollLocking={true}
    >
      <Sheet.Container>
        <Sheet.Header />
        <Sheet.Content>
          <div className="bottom-sheet">
            <div className="bottom-sheet-header">
              <h3>위치 설정</h3>
              <div className="bt-sh-btn-wrap">
                {dataLength > 0 && <button className="btn-form outline min">수정</button>}
              </div>
            </div>
            <div className=" bottom-sheet-body">
              {dataLength > 0 ? (
                <ul className="location-list">
                  <li className="location-item">
                    <button className="location-addr act">
                      <span className="location-tit">우리집</span>
                      <span className="location-text">경기 성남시 분당구 판교역로 146번길 20</span>
                    </button>
                  </li>
                  {Array.from({ length: dataLength }).map((_, index) => (
                    <li className="location-item" key={index}>
                      <button className="location-addr ">
                        <span className="location-tit">인터플러그</span>
                        <span className="location-text">서울 서대문구 연세로5다길22</span>
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="empty-list">
                  <span>인근 점포 검색을 위해</span>
                  <span>내 위치를 설정해주세요.</span>
                </div>
              )}
            </div>
            <div className="bottom-sheet-footer">
              <button className="btn-form black">현재 위치로 설정</button>
              <button className="btn-form blue-b" onClick={handleAddressSearch}>
                위치 추가
              </button>
            </div>
          </div>
        </Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop onTap={() => bottomSheetControler.setLocationSheet(false)} />
    </Sheet>
  )
}
