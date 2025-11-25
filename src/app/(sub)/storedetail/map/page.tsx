"use client";
import { useRouter } from "next/navigation";
import MapContents from "@/components/storedetail/MapContents";

export default function MapPage() {
  const router = useRouter();
  return (
    <div className="map-wrap">
      <div className="header">
        <div className="header-inner">
          <div className="back-btn-bx">
            <button
              className="back-btn"
              onClick={() => router.push("/storedetail")}
            ></button>
          </div>
          <h1>점포정보</h1>
        </div>
      </div>
      <MapContents />
    </div>
  );
}
