import { Sheet } from 'react-modal-sheet'
import { useBottomSheetControler } from '@/store/useBottomSheetControler'

export default function PasswordCheckSheet() {
  const bottomSheetControler = useBottomSheetControler()

  const handlePasswordReset = () => {
    bottomSheetControler.setPasswordSettingSheet(true)
    bottomSheetControler.setPasswordCheckSheet(false)
  }
  return (
    <Sheet
      isOpen={bottomSheetControler.passwordCheckSheet}
      onClose={() => bottomSheetControler.setPasswordCheckSheet(false)}
      detent="content"
      disableScrollLocking={true}
    >
      <Sheet.Container>
        <Sheet.Header />
        <Sheet.Content>
          <div className="bottom-sheet">
            <div className="bottom-sheet-header">
              <h3>현재 비밀번호 확인</h3>
            </div>
            <div className=" bottom-sheet-body">
              <div className="password-check-form">
                <div className="filed-form">
                  <div className="filed-item">
                    <div className="filed-guide">
                      비밀번호를 재설정 하려면 <br /> 현재 사용중인 비밀번호를 입력해주세요
                    </div>
                    <div className="input-icon-frame ">
                      <input type="password" placeholder="비밀번호" />
                      <button type="button" className="input-icon-btn del mr10"></button>
                      <button type="button" className="input-icon-btn pw"></button>
                    </div>
                    <div className="msg err mt10">비밀번호를 입력해 주세요.</div>
                  </div>
                </div>
              </div>
              <div className="bottom-sheet-footer">
                <button className="btn-form outline">취소</button>
                <button className="btn-form black" onClick={handlePasswordReset}>
                  비밀번호 재설정
                </button>
              </div>
            </div>
          </div>
        </Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop onTap={() => bottomSheetControler.setPasswordCheckSheet(false)} />
    </Sheet>
  )
}
