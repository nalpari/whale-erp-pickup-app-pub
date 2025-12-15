import { usePopupControler } from "@/store/usePopupControler";

export default function LocationAllowPopup() {
  const popupControler = usePopupControler();
  return (
    <div className={`modal-popup allow`}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <button
              className="modal-close"
              onClick={() => popupControler.setLocationAllowPopup(false)}
            ></button>
          </div>
          <div className="modal-body">
            <div className="location-allow-wrap">
              <div className="location-allow-guide">
                <div className="location-allow-guide-tit">
                  WHALE 픽업오더 앱이 사용자의 위치를 사용하도록
                  허용하시겠습니까?
                </div>
                <div className="location-allow-guide-txt">
                  내 주변 점포를 찾기 위해 위치정보 접근 권한이 필요합니다.
                </div>
              </div>
              <div className="location-allow-iframe">
                <button className="location-iframe-btn">
                  <i className="icon-location"></i>
                  <span>정확한 위치: 켬</span>
                </button>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d197.68317559302065!2d126.93430203167927!3d37.556693898035014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c98951c31c69f%3A0x712f7522319162fa!2z6rOE7LKc67mM65Sp!5e0!3m2!1sko!2skr!4v1765780541958!5m2!1sko!2skr"
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="location-allow-access-wrap">
                <button className="location-allow-access-btn">
                  앱을 사용하는 동안 허용
                </button>
                <button className="location-allow-access-btn">
                  한 번 허용
                </button>
                <button className="location-allow-access-btn">
                  허용 안 함
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
