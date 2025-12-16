export default function LoginFooter() {
  return (
    <div className="login-footer">
      <div className="login-footer-tit">
        <span>WHALE</span> Pickup Order
      </div>
      <ul className="footer-list">
        <li className="login-item">
          <button className="login-item-btn">회사정보</button>
        </li>
        <li className="login-item">
          <button className="login-item-btn">이용약관</button>
        </li>
        <li className="login-item">
          <button className="login-item-btn">이용안내</button>
        </li>
        <li className="login-item">
          <button className="login-item-btn">개인정보처리방침</button>
        </li>
      </ul>
      <div className="login-copyright">
        Copyright ⓒ INTERPLUG. All Rights Reserved.
      </div>
    </div>
  );
}
