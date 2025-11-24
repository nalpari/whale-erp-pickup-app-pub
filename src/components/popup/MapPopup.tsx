import { usePopupControler } from "@/store/usePopupControler";
import { useEffect, useState } from "react";

export default function MapPopup() {
  const [active, setActive] = useState(false);
  const popupControler = usePopupControler();

  useEffect(() => {
    // 팝업 열기 시간 필요
    setTimeout(() => {
      setActive(popupControler.mapPopup);
    }, 100);
  }, [popupControler.mapPopup]);

  // 팝업 닫기 시간 필요
  const handleClose = () => {
    setActive(false);
    setTimeout(() => {
      popupControler.setMapPopup(false);
    }, 250);
  };

  return (
    <div className={`modal-popup ${active ? "act" : ""}`}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h3>힘이나는커피생활무교점</h3>
            <button className="modal-close" onClick={handleClose}></button>
          </div>
          <div className="modal-body">
            <div className="map-frame">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1581.2203231688407!2d126.9769877983948!3d37.568240300000035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca339ca718985%3A0xf511f652dc96a07b!2z7Z6Y7J2064KY64qUIOy7pO2UvOyDne2ZnCDrrLTqtZDsoJA!5e0!3m2!1sko!2skr!4v1763964615637!5m2!1sko!2skr"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
