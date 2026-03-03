'use client'
import { useEffect, useState } from 'react'
import { usePopupControler } from '@/store/usePopupControler'
import { ToastContainer, toast, Slide } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function AddressAliasPop() {
  const [active, setActive] = useState(false)
  const addressAliasPopup = usePopupControler((state) => state.addressAliasPopup)
  const setAddressAliasPopup = usePopupControler((state) => state.setAddressAliasPopup)

  useEffect(() => {
    // 팝업 열기 시간 필요
    const timer = setTimeout(() => {
      setActive(addressAliasPopup)
    }, 100)

    return () => clearTimeout(timer)
  }, [addressAliasPopup])

  // 팝업 닫기 시간 필요
  const handleClose = () => {
    setActive(false)
    setTimeout(() => {
      setAddressAliasPopup(false)
    }, 250)
  }

  const notify = () => toast('저장되었습니다.')
  return (
    <div className={`modal-popup ${active ? 'act' : ''}`}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h3>위치편집</h3>
            <button className="modal-close" onClick={handleClose}></button>
          </div>
          <div className="modal-body">
            <div className="back-frame">
              <div className="alias-list">
                <div className="alias-item">
                  <button className="drag-btn" onClick={notify}></button>
                  <div className="alias-item-info">
                    <div className="alias-item-name">현대백화점 판교점</div>
                    <div className="alias-item-address">[주소] 경기 성남시 분당구 판교역로 146번길 20</div>
                  </div>
                  <button className="alias-item-delete"></button>
                </div>
                <div className="alias-item">
                  <button className="drag-btn"></button>
                  <div className="alias-item-info">
                    <div className="alias-item-name">현대백화점 판교점</div>
                    <div className="alias-item-address">[주소] 경기 성남시 분당구 판교역로 146번길 20</div>
                  </div>
                  <button className="alias-item-delete"></button>
                </div>
                <div className="alias-item">
                  <button className="drag-btn"></button>
                  <div className="alias-item-info">
                    <div className="alias-item-name">현대백화점 판교점</div>
                    <div className="alias-item-address">[주소] 경기 성남시 분당구 판교역로 146번길 20</div>
                  </div>
                  <button className="alias-item-delete"></button>
                </div>
                <div className="alias-item">
                  <button className="drag-btn"></button>
                  <div className="alias-item-info">
                    <div className="alias-item-name">현대백화점 판교점</div>
                    <div className="alias-item-address">[주소] 경기 성남시 분당구 판교역로 146번길 20</div>
                  </div>
                  <button className="alias-item-delete"></button>
                </div>
                <div className="alias-item">
                  <button className="drag-btn"></button>
                  <div className="alias-item-info">
                    <div className="alias-item-name">현대백화점 판교점</div>
                    <div className="alias-item-address">[주소] 경기 성남시 분당구 판교역로 146번길 20</div>
                  </div>
                  <button className="alias-item-delete"></button>
                </div>
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
        </div>
      </div>
    </div>
  )
}
