'use client'
import { useState } from 'react'
import NotificationNotice from './notice/NotificationNotice'
import NotificationEvent from './event/NotificationEvent'
import NotificationCoupon from './coupon/NotificationCoupon'

export default function NotificationForm() {
  const [activeTab, setActiveTab] = useState('notice')
  return (
    <div className="sub-contents">
      <div className="notification-contents">
        <div className="notification-tab">
          <button
            className={`notification-tab-item ${activeTab === 'notice' ? 'act' : ''}`}
            onClick={() => setActiveTab('notice')}
          >
            <span>공지사항</span>
          </button>
          <button
            className={`notification-tab-item ${activeTab === 'event' ? 'act' : ''}`}
            onClick={() => setActiveTab('event')}
          >
            <span>이벤트</span>
          </button>
          <button
            className={`notification-tab-item ${activeTab === 'coupon' ? 'act' : ''}`}
            onClick={() => setActiveTab('coupon')}
          >
            <span>쿠폰</span>
          </button>
        </div>
        {activeTab === 'notice' && <NotificationNotice />}
        {activeTab === 'event' && <NotificationEvent />}
        {activeTab === 'coupon' && <NotificationCoupon />}
      </div>
    </div>
  )
}
