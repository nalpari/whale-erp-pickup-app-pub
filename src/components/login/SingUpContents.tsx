'use client'
import AnimateHeight from 'react-animate-height'
import LoginFooter from './LoginFooter'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function SingUpContents() {
  const [serviceCheckHeight, setServiceCheckHeight] = useState(false)
  const router = useRouter()
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
                <input type="text" placeholder="이메일" />
                <button type="button" className="input-icon-btn del"></button>
              </div>
              <div className="signup-btn">
                <button className="btn-form black-outline block">중복 확인</button>
              </div>
              <div className="signup-warning">이메일 중복 확인을 해주세요.</div>
            </div>
          </div>
          <div className="signup-item">
            <div className="signup-item-tit">
              비밀번호 <span className="red">*</span>
            </div>
            <div className="signup-item-data-wrap">
              <div className="input-icon-frame ">
                <input type="password" placeholder="비밀번호" />
                <button type="button" className="input-icon-btn del mr10"></button>
                <button type="button" className="input-icon-btn pw"></button>
              </div>
              <div className="signup-warning">8~16자의 영문 대/소문자, 숫자, 특수문자를 사용해 주세요.</div>
            </div>
          </div>
          <div className="signup-item">
            <div className="signup-item-tit">
              비밀번호 확인 <span className="red">*</span>
            </div>
            <div className="signup-item-data-wrap">
              <div className="input-icon-frame ">
                <input type="password" placeholder="비밀번호 재입력" />
                <button type="button" className="input-icon-btn del mr10"></button>
                <button type="button" className="input-icon-btn pw"></button>
              </div>
              <div className="signup-warning right">입력 하신 비밀번호가 일치 합니다.</div>
            </div>
          </div>
          <div className="signup-item">
            <div className="signup-item-tit">
              이름 <span className="red">*</span>
            </div>
            <div className="signup-item-data-wrap">
              <div className="input-icon-frame ">
                <input type="text" placeholder="이름" />
              </div>
              <div className="signup-warning">이름을 입력해 주세요.</div>
            </div>
          </div>
          <div className="signup-item">
            <div className="signup-item-tit">
              휴대폰 번호 <span className="red">*</span>
            </div>
            <div className="signup-item-data-wrap">
              <div className="input-icon-frame">
                <input type="text" placeholder="-제외하고 입력" />
              </div>
              <div className="signup-btn">
                <button className="btn-form black-outline block">중복 확인</button>
              </div>
              <div className="signup-warning">휴대폰 번호를 입력해 주세요.</div>
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
              <div className="signup-warning">성별을 선택해 주세요.</div>
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
              <div className="signup-warning">생년월일을 입력해 주세요.</div>
            </div>
          </div>
          <div className="signup-item">
            <div className="service-check-wrap">
              <div className="service-check-header">
                <div className="check-form-box">
                  <input type="checkbox" id="service" />
                  <label htmlFor="service">
                    서비스 이용 약관 동의 <span className="red">*</span>
                  </label>
                </div>
                <div className="service-arr-btn">
                  <button
                    type="button"
                    className={`arr-btn ${serviceCheckHeight ? 'act' : ''}`}
                    onClick={() => setServiceCheckHeight(!serviceCheckHeight)}
                  ></button>
                </div>
              </div>
              <AnimateHeight duration={300} height={serviceCheckHeight ? 'auto' : 0}>
                <div className="service-check-content">
                  <div className="service-check-item">
                    <div className="check-form-box">
                      <input type="checkbox" id="service" />
                      <label htmlFor="service">[필수] 이용약관</label>
                    </div>
                    <button className="service-check-btn">보기</button>
                  </div>
                  <div className="service-check-item">
                    <div className="check-form-box">
                      <input type="checkbox" id="service" />
                      <label htmlFor="service">[필수] 개인정보 수집 이용</label>
                    </div>
                    <button className="service-check-btn">보기</button>
                  </div>
                  <div className="service-check-item">
                    <div className="check-form-box">
                      <input type="checkbox" id="service" />
                      <label htmlFor="service">[필수] 개인정보 제3자 제공</label>
                    </div>
                    <button className="service-check-btn">보기</button>
                  </div>
                  <div className="service-check-item">
                    <div className="check-form-box">
                      <input type="checkbox" id="service" />
                      <label htmlFor="service">[선택] 마케팅 수신 동의</label>
                    </div>
                    <button className="service-check-btn">보기</button>
                  </div>
                  <div className="service-check-item">
                    <div className="check-form-box">
                      <input type="checkbox" id="service" />
                      <label htmlFor="service">앱푸시</label>
                    </div>
                    <div className="check-form-box">
                      <input type="checkbox" id="service" />
                      <label htmlFor="service">문자</label>
                    </div>
                    <div className="check-form-box">
                      <input type="checkbox" id="service" />
                      <label htmlFor="service">이메일</label>
                    </div>
                  </div>
                </div>
              </AnimateHeight>
            </div>
          </div>
          <div className="signup-item">
            <button className="btn-form black block" onClick={() => router.push('/login/singup-success')}>
              저장
            </button>
          </div>
        </div>
      </div>
      <LoginFooter />
    </div>
  )
}
