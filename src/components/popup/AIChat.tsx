import { usePopupControler } from "@/store/usePopupControler";
import { useEffect, useState } from "react";

export default function AIChat() {
  const [active, setActive] = useState(false);
  const popupControler = usePopupControler();

  useEffect(() => {
    // 팝업 열기 시간 필요
    setTimeout(() => {
      setActive(popupControler.aiChatPopup);
    }, 100);
  }, [popupControler.aiChatPopup]);

  // 팝업 닫기 시간 필요
  const handleClose = () => {
    setActive(false);
    setTimeout(() => {
      popupControler.setAiChatPopup(false);
    }, 250);
  };

  return (
    <div className={`modal-popup ${active ? "act" : ""}`}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header ai">
            <button className="modal-close" onClick={handleClose}></button>
          </div>
          <div className="modal-body">
            <div className="ai-chat-frame">
              <div className="ai-chat-body">
                <div className="ai-chat-inner">sss</div>
              </div>
              <div className="ai-chat-footer">
                <div className="chat-input-wrap">
                  <input type="text" placeholder="Type a message..." />
                  <button className="chat-mick-btn"></button>
                </div>
                <button className="send-message-btn"></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
