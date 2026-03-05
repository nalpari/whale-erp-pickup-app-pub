'use client'
import { usePopupControler } from '@/store/usePopupControler'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
export default function MyPageMain() {
  const popupControler = usePopupControler()
  const router = useRouter()
  return (
    <div className="mypage-contents">
      <div className="mydata-bx">
        <div className="mydata-info">
          <div className="mydata-info-img">
            <Image src="/assets/images/contents/review_master.svg" alt="mydata-img" fill />
          </div>
          <div className="mydata-info-text">
            <div className="mydata-name">
              <span>김지영님</span> 반갑습니다
            </div>
            <div className="mydata-number">010 **** 2560</div>
          </div>
        </div>
        <div className="mydata-menu-list">
          <button className="mydata-menu-item" onClick={() => popupControler.setMypagePointPopup(true)}>
            <div className="mydata-item-tit">
              <i className="icon p">P</i>WHALE 포인트
            </div>
            <div className="mydata-item-data">300,000 P</div>
          </button>
          <button className="mydata-menu-item" onClick={() => router.push('/mypage/stemp')}>
            <div className="mydata-item-tit">
              <i className="icon s">S</i>스탬프
            </div>
            <div className="mydata-item-data">
              3점포 <span>발행중</span>
            </div>
          </button>
          <button className="mydata-menu-item" onClick={() => router.push('/mypage/coupon')}>
            <div className="mydata-item-tit">
              <i className="icon c">C</i>내쿠폰
            </div>
            <div className="mydata-item-data">26</div>
          </button>
        </div>
      </div>
      <div className="mypage-menu-list">
        <button className="mypage-menu-item">
          <div className="mypage-item-tit">내정보 수정 / 탈퇴</div>
          <div className="mypage-txt">
            <i className="mypage-arr"></i>
          </div>
        </button>
        <button className="mypage-menu-item">
          <div className="mypage-item-tit">구매후기 관리</div>
          <div className="mypage-txt">
            <i className="mypage-arr"></i>
          </div>
        </button>
        <button className="mypage-menu-item" onClick={() => router.push('/mypage/setting')}>
          <div className="mypage-item-tit">환경설정</div>
          <div className="mypage-txt">
            <i className="mypage-arr"></i>
          </div>
        </button>
        <button className="mypage-menu-item">
          <div className="mypage-item-tit">결제수단 관리</div>
          <div className="mypage-txt">
            <i className="mypage-arr"></i>
          </div>
        </button>
        <button className="mypage-menu-item none">
          <div className="mypage-item-tit">버전정보</div>
          <div className="mypage-txt">2.116.0</div>
        </button>
        <button className="mypage-menu-item">
          <div className="mypage-item-tit">로그아웃</div>
        </button>
      </div>
    </div>
  )
}
