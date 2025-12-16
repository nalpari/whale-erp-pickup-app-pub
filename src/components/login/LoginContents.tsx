import Image from "next/image";

export default function LoginContents() {
  return (
    <div className="login-contents">
      <div className="login-contents-inner">
        <div className="login-logo">
          <div className="login-logo-img">
            <Image
              src="/assets/images/contents/login_logo.svg"
              alt="logo"
              fill
            />
          </div>
          <div className="login-logo-txt">
            <span className="login-logo-txt-tit">WHALE</span>
            <span className="login-logo-txt-sub">Pickup Order</span>
          </div>
        </div>
        <div className="login-form-wrap">
          <div className="login-form">
            <div className="login-form-item">
              <div className="input-icon-frame">
                <input type="text" placeholder="E-Mail" />
              </div>
            </div>
            <div className="login-form-item">
              <div className="input-icon-frame pw">
                <input type="password" placeholder="Password" />
                <button type="button" className="input-icon-btn show"></button>
              </div>
            </div>
            <div className="login-form-item">
              <button className="btn-form black block">LOGIN</button>
            </div>
          </div>
          <div className="login-form-sub">
            <div className="toggle-btn">
              <input type="checkbox" id="auto-login" />
              <label className="slider" htmlFor="auto-login">
                자동 로그인
              </label>
            </div>
            <div className="id-find">
              <button className="id-find-btn">ID 찿기 / 비밀번호 찿기</button>
            </div>
          </div>
          <div className="login-warning">
            입력하신 아이디와 비밀번호가 일치하지 않습니다.
          </div>
        </div>
        <div className="login-btn-wrap">
          <button className="btn-form outline block">
            WHALE ORDER 회원가입
          </button>
          <button className="btn-form outline block">
            <span className="kakao-icon"></span>
            카카오 로그인
          </button>
          <button className="btn-form outline block">
            <span className="naver-icon"></span>
            네이버 로그인
          </button>
          <button className="btn-form outline block">
            <span className="google-icon"></span>
            Google 로그인
          </button>
        </div>
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
      </div>
    </div>
  );
}
