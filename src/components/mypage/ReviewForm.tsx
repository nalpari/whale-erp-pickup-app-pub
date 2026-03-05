'use client'
import { useState } from 'react'
import ReviewWriteable from './review/ReviewWriteable'
import ReviewCompleted from './review/ReviewCompleted'

export default function ReviewForm() {
  const [activeTab, setActiveTab] = useState('writeable')
  return (
    <div className="sub-contents">
      <div className="notification-tab">
        <button
          className={`notification-tab-item ${activeTab === 'writeable' ? 'act' : ''}`}
          onClick={() => setActiveTab('writeable')}
        >
          <span>작성가능</span>
        </button>
        <button
          className={`notification-tab-item ${activeTab === 'completed' ? 'act' : ''}`}
          onClick={() => setActiveTab('completed')}
        >
          <span>작성완료</span>
        </button>
      </div>
      {activeTab === 'writeable' && <ReviewWriteable />} {activeTab === 'completed' && <ReviewCompleted />}
    </div>
  )
}
