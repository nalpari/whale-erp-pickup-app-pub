'use client'
import { useEffect, useState } from 'react'
import { usePopupControler } from '@/store/usePopupControler'
import { ToastContainer, toast, Slide } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function AddressEditPop() {
  const [active, setActive] = useState(false)
  const addressEditPopup = usePopupControler((state) => state.addressEditPopup)
  const setAddressEditPopup = usePopupControler((state) => state.setAddressEditPopup)

  useEffect(() => {
    // 팝업 열기 시간 필요
    const timer = setTimeout(() => {
      setActive(addressEditPopup)
    }, 100)

    return () => clearTimeout(timer)
  }, [addressEditPopup])

  // 팝업 닫기 시간 필요
  const handleClose = () => {
    setActive(false)
    setTimeout(() => {
      setAddressEditPopup(false)
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
              <div className="address-edit-list">
                <div className="address-edit-item">
                  <button className="drag-btn" onClick={notify}></button>
                  <div className="address-edit-item-info">
                    <div className="address-edit-item-name">현대백화점 판교점</div>
                    <div className="address-edit-item-address">[주소] 경기 성남시 분당구 판교역로 146번길 20</div>
                  </div>
                  <button className="address-edit-item-delete"></button>
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
