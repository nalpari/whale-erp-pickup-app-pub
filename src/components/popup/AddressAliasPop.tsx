import { usePopupControler } from '@/store/usePopupControler'
import { useEffect, useState } from 'react'

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
  return (
    <div className={`modal-popup ${active ? 'act' : ''}`}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h3>별명설정</h3>
            <button className="modal-close" onClick={handleClose}></button>
          </div>
          <div className="modal-body">
            <div className="alias-form-wrap">
              <div className="alias-form-item">
                <div className="alias-form-item-tit">
                  <span>현대백화점 판교점</span>
                  <span className="alias-form-item-addr">[주소] 경기 성남시 분당구 판교역로 146번길 20</span>
                </div>
                <div className="block">
                  <input type="text" className="input-frame" placeholder="상세 주소를 입력해 주세요." />
                </div>
              </div>
              <div className="alias-form-item">
                <div className="alias-form-item-tit">
                  <span>
                    별명을 입력해주세요 <i className="red">(필수)</i>
                  </span>
                </div>
                <div className="block">
                  <input type="text" className="input-frame" placeholder="위치 별명 입력(ex. 집, 회사 등)" />
                </div>
                <div className="msg err mt10">별명입력은 필수입니다.</div>
              </div>
            </div>
            <div className="alias-btn-wrap">
              <button className="btn-form black block">해당 위치로 설정</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
