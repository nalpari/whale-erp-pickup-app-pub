import Header from "@/components/ui/Header";
import CouponDetailContents from "@/components/mypage/CouponDetailContents";
export default function CouponDetailPage() {
  return (
    <div className="coupon-detail-wrap">
      <Header url="/mypage/coupon" title="쿠폰 상세" basket={false} />
      <CouponDetailContents />
    </div>
  );
}
