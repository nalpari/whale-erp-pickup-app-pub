export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-left">
        <button className="footer-btn">
          <span className="icon01"></span>
          <span className="text">홈</span>
        </button>
        <button className="footer-btn act">
          <span className="icon02"></span>
          <span className="text">찜</span>
        </button>
      </div>
      <button className="ai-icon"></button>
      <div className="footer-right">
        <button className="footer-btn">
          <span className="icon03"></span>
          <span className="text">주문내역</span>
        </button>
        <button className="footer-btn">
          <span className="icon04"></span>
          <span className="text">마이페이지</span>
        </button>
      </div>
    </div>
  );
}
