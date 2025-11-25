import DetailHeader from "@/components/storedetail/DetailHeader";
import DetailContents from "@/components/storedetail/DetailContents";

export default function DetailPage() {
  return (
    <div className="detail-wrap">
      <DetailHeader />
      <DetailContents />
      <button className="basket-btn">
        <span className="basket-btn-name">
          <i className="basket-btn-icon"></i>
          <b>
            장바구니 보기 <i>2</i>
          </b>
        </span>
        <span className="basket-btn-count">1,200원</span>
      </button>
      {/* act 클래스 추가시 bottom: 150px 없으면 50px */}
      <button className="AI-btn act"></button>
    </div>
  );
}
