'use client'
import { Slide, toast, ToastContainer } from 'react-toastify'

export default function SettingContents() {
  const notify = () => toast('저장되었습니다.')
  return (
    <div className="sub-contents">
      <div className="sub-white-wrap">
        <div className="setting-list">
          <div className="setting-item">
            <div className="setting-item-tit">마케팅 Push 알림 동의</div>
            <div className="toggle-btn blue">
              <input type="checkbox" id="auto-login" onChange={notify} />
              <label className="slider" htmlFor="auto-login"></label>
            </div>
          </div>
          <div className="setting-item">
            <div className="setting-item-tit">마케팅 문자(SMS) 수신 동의</div>
            <div className="toggle-btn blue">
              <input type="checkbox" id="auto-login" onChange={notify} />
              <label className="slider" htmlFor="auto-login"></label>
            </div>
          </div>
          <div className="setting-item">
            <div className="setting-item-tit">위치기반서비스 이용동의</div>
            <div className="toggle-btn blue">
              <input type="checkbox" id="auto-login" onChange={notify} />
              <label className="slider" htmlFor="auto-login"></label>
            </div>
          </div>
        </div>
        <div className="setting-location-txt">
          위치정보 서비스 이용을 위해 기기 설정에서 위치정보 권한을 허용해주세요.
        </div>
      </div>
      <ToastContainer
        className="toast-container"
        position="bottom-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="light"
        transition={Slide}
      />
    </div>
  )
}
