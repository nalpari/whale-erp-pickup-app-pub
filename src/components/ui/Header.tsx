"use client";
import { useRouter } from "next/navigation";

export default function Header({
  url,
  title,
  basket,
}: {
  url: string;
  title: string;
  basket: boolean;
}) {
  const router = useRouter();
  return (
    <div className="header">
      <div className="header-inner">
        <div className="back-btn-bx">
          <button
            className="back-btn"
            onClick={() => router.push(url)}
          ></button>
        </div>
        {title && <h1>{title}</h1>}
        {basket && (
          <div className="order-side">
            <button className="order-basket">
              <span>2</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
