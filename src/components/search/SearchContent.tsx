'use client'
import { useState } from 'react'
import BeforeSearch from './BeforeSearch'
import AfterSearch from './AfterSearch'
import { useBottomSheetControler } from '@/store/useBottomSheetControler'

export default function SearchContent() {
  const [searchValue, setSearchValue] = useState('')
  const bottomSheetControler = useBottomSheetControler()

  return (
    <div className="sub-contents">
      <div className="search-contents-wrap">
        <div className="search-contents-top">
          <div className="input-icon-frame search">
            <input
              type="text"
              placeholder="지점명 또는 메뉴로 검색"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <button className="input-icon-btn search"></button>
          </div>
          {searchValue && (
            <div className="filter-wrap">
              <button
                className={`filter-btn ${bottomSheetControler.arraySheet ? 'act' : ''}`}
                onClick={() => bottomSheetControler.setArraySheet(true)}
              >
                <span className="filter-text">리뷰 많은 순</span>
              </button>
              <button className="filter-btn act">
                <span className="filter-text">영업중</span>
              </button>
              <button className="filter-btn ">
                <span className="reset-icon"></span>
                <span className="filter-text">초기화</span>
              </button>
            </div>
          )}
        </div>
        {searchValue ? <AfterSearch /> : <BeforeSearch />}
      </div>
    </div>
  )
}
