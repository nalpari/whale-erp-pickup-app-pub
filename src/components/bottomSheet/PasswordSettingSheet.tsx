import { Sheet } from 'react-modal-sheet'
import { useBottomSheetControler } from '@/store/useBottomSheetControler'

export default function PasswordSettingSheet() {
  const bottomSheetControler = useBottomSheetControler()

  return (
    <Sheet
      isOpen={bottomSheetControler.passwordSettingSheet}
      onClose={() => bottomSheetControler.setPasswordSettingSheet(false)}
      detent="content"
      disableScrollLocking={true}
    >
      <Sheet.Container>
        <Sheet.Header />
        <Sheet.Content>
          <div className="bottom-sheet">
            <div className="bottom-sheet-header">
              <h3>비밀번호 재설정</h3>
            </div>
            <div className=" bottom-sheet-body">
              <div className="password-check-form">
                <div className="filed-form">
                  <div className="filed-item">
                    <div className="filed-tit">
                      비밀번호 <span className="red">*</span>
                    </div>
                    <div className="input-icon-frame ">
                      <input type="password" placeholder="비밀번호" />
                      <button type="button" className="input-icon-btn del mr10"></button>
                      <button type="button" className="input-icon-btn pw"></button>
                    </div>
                    <div className="msg err mt10">8~16자의 영문 대/소문자, 숫자, 특수문자를 사용해 주세요.</div>
                  </div>
                  <div className="filed-item">
                    <div className="filed-tit">
                      비밀번호 확인 <span className="red">*</span>
                    </div>
                    <div className="input-icon-frame ">
                      <input type="password" placeholder="비밀번호" />
                      <button type="button" className="input-icon-btn del mr10"></button>
                      <button type="button" className="input-icon-btn pw"></button>
                    </div>
                    <div className="msg  mt10">입력 하신 비밀번호가 일치 합니다.</div>
                  </div>
                </div>
              </div>
              <div className="bottom-sheet-footer">
                <button className="btn-form outline">취소</button>
                <button className="btn-form black">저장</button>
              </div>
            </div>
          </div>
        </Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop onTap={() => bottomSheetControler.setPasswordSettingSheet(false)} />
    </Sheet>
  )
}
