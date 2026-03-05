'use client'
import LoginFooter from '../login/LoginFooter'
import { useBottomSheetControler } from '@/store/useBottomSheetControler'

export default function MypageEdit() {
  const bottomSheetControler = useBottomSheetControler()
  return (
    <div className="login-contents">
      <div className="login-contents-inner">
        <div className="signup-form">
          <div className="signup-item">
            <div className="signup-item-tit">
              이메일 <span className="red">*</span>
            </div>
            <div className="signup-item-data-wrap">
              <div className="input-icon-frame ">
                <input type="text" placeholder="이메일" readOnly />
              </div>
              <div className="signup-btn">
                <button
                  className="btn-form black-outline block"
                  onClick={() => bottomSheetControler.setPasswordCheckSheet(true)}
                >
                  비밀번호 재설정
                </button>
              </div>
            </div>
          </div>

          <div className="signup-item">
            <div className="signup-item-tit">
              이름 <span className="red">*</span>
            </div>
            <div className="signup-item-data-wrap">
              <div className="input-icon-frame ">
                <input type="text" placeholder="이름" readOnly />
              </div>
            </div>
          </div>
          <div className="signup-item">
            <div className="signup-item-tit">
              휴대폰 번호 <span className="red">*</span>
            </div>
            <div className="signup-item-data-wrap">
              <div className="input-icon-frame">
                <input type="text" placeholder="-제외하고 입력" readOnly />
              </div>
              <div className="signup-btn">
                <button className="btn-form black-outline block">변경하기</button>
              </div>
            </div>
          </div>
          <div className="signup-item">
            <div className="signup-item-tit">성별</div>
            <div className="signup-item-data-wrap">
              <div className="signup-flx-wrap">
                <div className="signup-btn">
                  <button className="btn-form grey-outline block active">여자</button>
                </div>
                <div className="signup-btn">
                  <button className="btn-form grey-outline block">남자</button>
                </div>
              </div>
            </div>
          </div>
          <div className="signup-item">
            <div className="signup-item-tit">생년월일</div>
            <div className="signup-item-data-wrap">
              <div className="signup-flx-wrap">
                <div className="data-frame ">
                  <div className="input-icon-frame">
                    <input type="text" placeholder="연도입력" />
                  </div>
                </div>
                <div className="data-frame">
                  <select className="select-form">
                    <option value="1">1월</option>
                  </select>
                </div>
                <div className="data-frame">
                  <select className="select-form">
                    <option value="1">1일</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="signup-item">
            <div className="sns-wrap">
              <div className="sns-item-tit">SNS 계정 로그인</div>
              <div className="sns-item">
                <div className="signup-item-tit">카카오</div>
                <div className="signup-item-data-wrap">
                  <div className="input-icon-frame">
                    <input type="text" placeholder="-제외하고 입력" readOnly />
                  </div>
                  <div className="signup-btn">
                    <button
                      className="btn-form black-outline block"
                      onClick={() => bottomSheetControler.setSnsDisconnectSheet(true)}
                    >
                      연결 해제
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="signup-item">
            <button className="btn-form black block">저장</button>
          </div>
        </div>
      </div>
      <LoginFooter />
    </div>
  )
}
