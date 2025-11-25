import Link from "next/link";
import { usePopupControler } from "@/store/usePopupControler";

export default function MapContents() {
  const popupControler = usePopupControler();
  return (
    <div className="map-contents">
      <div className="map-data">
        <div className="map-name">힘이나는커피생활 무교점</div>
        <div className="map-desc-item">
          <div className="map-desc-tit">대표자명</div>
          <div className="map-desc-txt">홍길동</div>
        </div>
        <div className="map-desc-item">
          <div className="map-desc-tit">사업자번호</div>
          <div className="map-desc-txt">1005004111</div>
        </div>
        <div className="map-desc-item">
          <div className="map-desc-tit">점포위치</div>
          <div className="map-desc-txt">
            서울 성북구 월계로 52 104호 (월곡, 에스엠메디칼)
          </div>
        </div>
        <div className="map-btn-bx">
          <button
            className="map-btn"
            onClick={() => popupControler.setMapPopup(true)}
          >
            <i className="map-btn-icon"></i>지도보기
          </button>
        </div>
        <div className="map-desc-item">
          <div className="map-desc-tit">점포전화</div>
          <div className="map-desc-txt num">070-1240-0000</div>
        </div>
        <div className="map-desc-item">
          <div className="map-desc-tit">영업시간</div>
          <div className="map-desc-txt">
            <span>월화수목 07:30~21:00</span> <span>토 12:00 ~ 18:30</span>
          </div>
        </div>
        <div className="map-desc-item">
          <div className="map-desc-tit">휴무일</div>
          <div className="map-desc-txt">금,일</div>
        </div>
      </div>
      <div className="map-option-wrap">
        <div className="map-option-tit">점포소개/공지</div>
        <div className="map-option-data">
          <div className="map-option-desc">
            합정에서 만나는 최고의 경험, 라떼 맛집 새로운 커피를 한번 즐겨
            보셨으면 좋겠습니다.
          </div>
          <div className="map-notice-bx">
            <div className="map-notice-tit">공지사항</div>
            <div className="map-notice-desc">
              <span>매장 방문 시, 마들렌 무료 제공</span>
              <span>이벤트 기간 : 2025년 00월00일 ~ 00월00일</span>
              <span>준비수량 소진 시 자동 종료</span>
            </div>
          </div>
        </div>
      </div>
      <div className="map-option-wrap">
        <div className="map-option-tit">편의시설 및 서비스</div>
        <div className="map-option-data">
          <div className="map-option-service">
            <span>주차시설</span>
            <span>화장실</span>
            <span>무선인터넷</span>
          </div>
        </div>
      </div>
      <div className="map-option-wrap">
        <div className="map-option-tit">SNS</div>
        <div className="map-option-data">
          <Link
            className="sns-link"
            href="https://www.instagram.com"
            target="_blank"
          >
            <i className="insta"></i>
            http://www.Instagram.com/A12345
          </Link>
        </div>
      </div>
    </div>
  );
}
