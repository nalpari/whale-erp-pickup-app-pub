"use client";
import Link from "next/link";
import { usePopupControler } from "@/store/usePopupControler";
import { usePathname } from "next/navigation";

export default function Footer() {
  const popupControler = usePopupControler();
  const pathname = usePathname();

  return (
    <div className="footer">
      <div className="footer-left">
        <Link
          href="/"
          className={`footer-btn ${pathname === "/" ? "act" : ""}`}
        >
          <span className="icon01"></span>
          <span className="text">홈</span>
        </Link>
        <Link href="/" className="footer-btn ">
          <span className="icon02"></span>
          <span className="text">찜</span>
        </Link>
      </div>
      <button
        className="ai-icon"
        onClick={() => popupControler.setAiChatPopup(true)}
      ></button>
      <div className="footer-right">
        <Link
          href="/orderhistory"
          className={`footer-btn ${pathname === "/orderhistory" ? "act" : ""}`}
        >
          <span className="icon03"></span>
          <span className="text">주문내역</span>
        </Link>
        <Link
          href={"/login"}
          className={`footer-btn ${pathname === "/mypage" ? "act" : ""}`}
        >
          <span className="icon04"></span>
          <span className="text">마이페이지</span>
        </Link>
      </div>
    </div>
  );
}
