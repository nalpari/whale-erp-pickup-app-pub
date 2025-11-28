import Header from "@/components/ui/Header";
import CouponContents from "@/components/mypage/CouponContents";
export default function CouponPage() {
  return (
    <div className="coupon-wrap">
      <Header url="/mypage/coupon" title="쿠폰" basket={false} />
      <CouponContents />
    </div>
  );
}
