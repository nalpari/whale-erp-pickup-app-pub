"use client";
import { useRouter } from "next/navigation";
import ReviewContents from "@/components/storedetail/ReviewContents";

export default function ReviewPage() {
  const router = useRouter();
  return (
    <div className="review-wrap">
      <div className="header">
        <div className="header-inner">
          <div className="back-btn-bx">
            <button
              className="back-btn"
              onClick={() => router.push("/storedetail")}
            ></button>
          </div>
          <h1>구매후기</h1>
          <div className="order-side">
            <button className="order-basket">
              <span>2</span>
            </button>
          </div>
        </div>
      </div>
      <ReviewContents />
    </div>
  );
}
