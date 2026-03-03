'use client'
import { useState } from 'react'
import AnimateHeight from 'react-animate-height'

export default function NotificationNotice() {
  const [noticeItemHeight, setNoticeItemHeight] = useState(false)
  return (
    <div className="notification-body">
      <div className="notice-count">
        총 <span>28</span>건
      </div>
      <ul className="notice-list">
        <li className="notice-item">
          <div className="notice-item-info" onClick={() => setNoticeItemHeight(!noticeItemHeight)}>
            <div className="notice-item-info-inner">
              <div className="notice-item-date">2025-10-25</div>
              <div className="notice-item-tit">개인정보 이용,제공내역 안내</div>
            </div>
            <button className={`list-arr-btn ${noticeItemHeight ? 'act' : ''}`}></button>
          </div>
          <AnimateHeight duration={300} height={noticeItemHeight ? 'auto' : 0}>
            <div className="notice-content">
              <div className="notice-file-wrap">
                <div className="notice-file-item">
                  <div className="notice-file-name">개인정보보리방침.PDF</div>
                  <button className="notice-file-btn"></button>
                </div>
                <div className="notice-file-item">
                  <div className="notice-file-name">개인정보보리방침.PDF</div>
                  <button className="notice-file-btn"></button>
                </div>
              </div>
              <div className="notice-content-text">
                당사는 개인정보 보호법 제20조의2(개인정보 이용·제공 내역의 통지)에 근거하여, 고객 여러분의 개인정보 이용
                및 제3자 제공 현황을 정기적으로 안내드립니다. 고객님은 언제든지 개인정보 열람, 정정, 삭제, 처리정지
                요구를 하실 수 있습니다.
              </div>
            </div>
          </AnimateHeight>
        </li>
        <li className="notice-item">
          <div className="notice-item-info" onClick={() => setNoticeItemHeight(!noticeItemHeight)}>
            <div className="notice-item-info-inner">
              <div className="notice-item-date">2025-10-25</div>
              <div className="notice-item-tit">개인정보 이용,제공내역 안내</div>
            </div>
            <button className={`list-arr-btn ${noticeItemHeight ? 'act' : ''}`}></button>
          </div>
          <AnimateHeight duration={300} height={noticeItemHeight ? 'auto' : 0}>
            <div className="notice-content">
              <div className="notice-file-wrap">
                <div className="notice-file-item">
                  <div className="notice-file-name">개인정보보리방침.PDF</div>
                  <button className="notice-file-btn"></button>
                </div>
                <div className="notice-file-item">
                  <div className="notice-file-name">개인정보보리방침.PDF</div>
                  <button className="notice-file-btn"></button>
                </div>
              </div>
              <div className="notice-content-text">
                당사는 개인정보 보호법 제20조의2(개인정보 이용·제공 내역의 통지)에 근거하여, 고객 여러분의 개인정보 이용
                및 제3자 제공 현황을 정기적으로 안내드립니다. 고객님은 언제든지 개인정보 열람, 정정, 삭제, 처리정지
                요구를 하실 수 있습니다.
              </div>
            </div>
          </AnimateHeight>
        </li>
        <li className="notice-item">
          <div className="notice-item-info" onClick={() => setNoticeItemHeight(!noticeItemHeight)}>
            <div className="notice-item-info-inner">
              <div className="notice-item-date">2025-10-25</div>
              <div className="notice-item-tit">개인정보 이용,제공내역 안내</div>
            </div>
            <button className={`list-arr-btn ${noticeItemHeight ? 'act' : ''}`}></button>
          </div>
          <AnimateHeight duration={300} height={noticeItemHeight ? 'auto' : 0}>
            <div className="notice-content">
              <div className="notice-file-wrap">
                <div className="notice-file-item">
                  <div className="notice-file-name">개인정보보리방침.PDF</div>
                  <button className="notice-file-btn"></button>
                </div>
                <div className="notice-file-item">
                  <div className="notice-file-name">개인정보보리방침.PDF</div>
                  <button className="notice-file-btn"></button>
                </div>
              </div>
              <div className="notice-content-text">
                당사는 개인정보 보호법 제20조의2(개인정보 이용·제공 내역의 통지)에 근거하여, 고객 여러분의 개인정보 이용
                및 제3자 제공 현황을 정기적으로 안내드립니다. 고객님은 언제든지 개인정보 열람, 정정, 삭제, 처리정지
                요구를 하실 수 있습니다.
              </div>
            </div>
          </AnimateHeight>
        </li>
        <li className="notice-item">
          <div className="notice-item-empty">
            <div className="notice-item-empty-text">공지사항이 없습니다.</div>
          </div>
        </li>
      </ul>
    </div>
  )
}
