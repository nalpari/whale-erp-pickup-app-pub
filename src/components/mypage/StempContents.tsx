'use client'
import { usePopupControler } from '@/store/usePopupControler'

export default function StempContents() {
  const popupControler = usePopupControler()
  return (
    <div className="sub-contents">
      <div className="sub-contents-inner">
        <div className="stemp-list">
          <button className="stemp-item" onClick={() => popupControler.setStempDetailPopup(true)}>
            <div className="stemp-item-info">
              <div className="stemp-item-tit">크리스피도넛 미아점</div>
              <div className="stemp-item-data">
                <i className="stemp">s</i>
                <span>
                  보유중인 스탬프 : <b>12</b>
                </span>
              </div>
            </div>
            <div className="list-arr-btn "></div>
          </button>
          <button className="stemp-item">
            <div className="stemp-item-info">
              <div className="stemp-item-tit">힘이나는커피생활 종로 젊음의 거리점</div>
              <div className="stemp-item-data">
                <i className="stemp">s</i>
                <span>
                  보유중인 스탬프 : <b>12</b>
                </span>
              </div>
            </div>
            <div className="list-arr-btn "></div>
          </button>
          <button className="stemp-item">
            <div className="stemp-item-info">
              <div className="stemp-item-tit">크리스피도넛 미아점</div>
              <div className="stemp-item-data">
                <i className="stemp">s</i>
                <span>
                  보유중인 스탬프 : <b>12</b>
                </span>
              </div>
            </div>
            <div className="list-arr-btn "></div>
          </button>
          <button className="stemp-item">
            <div className="stemp-item-info">
              <div className="stemp-item-tit">힘이나는커피생활 종로 젊음의 거리점</div>
              <div className="stemp-item-data">
                <i className="stemp">s</i>
                <span>
                  보유중인 스탬프 : <b>12</b>
                </span>
              </div>
            </div>
            <div className="list-arr-btn "></div>
          </button>
        </div>
      </div>
    </div>
  )
}
