import Header from "@/components/ui/Header";
import ReviewContents from "@/components/storedetail/ReviewContents";

export default function ReviewPage() {
  return (
    <div className="review-wrap">
      <Header url="/storedetail" title="구매후기" basket={true} />
      <ReviewContents />
    </div>
  );
}
