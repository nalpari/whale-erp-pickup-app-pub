"use client";
import { useRouter } from "next/navigation";
import MenuContents from "@/components/storedetail/MenuContents";

export default function MenuDetailPage() {
  const router = useRouter();
  return (
    <div className="menu-wrap">
      <div className="header">
        <div className="header-inner">
          <div className="back-btn-bx">
            <button
              className="back-btn"
              onClick={() => router.push("/storedetail")}
            ></button>
          </div>
          <div className="order-side">
            <button className="order-basket">
              <span>2</span>
            </button>
          </div>
        </div>
      </div>
      <MenuContents />
    </div>
  );
}
