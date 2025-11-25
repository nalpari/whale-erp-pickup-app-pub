import Link from "next/link";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-left">
        <Link href="/" className="footer-btn">
          <span className="icon01"></span>
          <span className="text">홈</span>
        </Link>
        <Link href="/" className="footer-btn act">
          <span className="icon02"></span>
          <span className="text">찜</span>
        </Link>
      </div>
      <Link href="/" className="ai-icon"></Link>
      <div className="footer-right">
        <Link href="/orderdetail" className="footer-btn">
          <span className="icon03"></span>
          <span className="text">주문내역</span>
        </Link>
        <Link href="/" className="footer-btn">
          <span className="icon04"></span>
          <span className="text">마이페이지</span>
        </Link>
      </div>
    </div>
  );
}
