import { Sheet } from 'react-modal-sheet'
import { useBottomSheetControler } from '@/store/useBottomSheetControler'

export default function SnsDisconnectSheet() {
  const bottomSheetControler = useBottomSheetControler()

  return (
    <Sheet
      isOpen={bottomSheetControler.snsDisconnectSheet}
      onClose={() => bottomSheetControler.setSnsDisconnectSheet(false)}
      detent="content"
      disableScrollLocking={true}
    >
      <Sheet.Container>
        <Sheet.Header />
        <Sheet.Content>
          <div className="bottom-sheet">
            <div className="bottom-sheet-header">
              <h3>SNS 계정 연결 해제</h3>
            </div>
            <div className=" bottom-sheet-body">
              <div className="password-check-form">
                <div className="filed-form">
                  <div className="filed-item">
                    <div className="filed-tit">비밀번호를 설정해 주세요.</div>
                    <div className="msg ">SNS 계정 연결 해제는 비밀번호 설정 후 가능합니다.</div>
                  </div>
                </div>
              </div>
              <div className="bottom-sheet-footer">
                <button className="btn-form outline">취소</button>
                <button className="btn-form black">설정</button>
              </div>
            </div>
          </div>
        </Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop onTap={() => bottomSheetControler.setSnsDisconnectSheet(false)} />
    </Sheet>
  )
}
