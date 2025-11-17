import Link from "next/link";
import Image from "next/image";

export default function MainHeader() {
  return (
    <div className="main-header">
      <div className="main-header-top">
        <div className="order-point">
          <span>P</span>
          <span>1,200</span>
        </div>
        <Link className="logo" href="/">
          <Image src="/assets/images/layout/logo.svg" alt="logo" fill />
        </Link>
        <div className="order-side">
          <button className="order-ring">
            <span>2</span>
          </button>
          <button className="order-basket">
            <span>2</span>
          </button>
        </div>
      </div>
      <div className="main-header-body"></div>
    </div>
  );
}
