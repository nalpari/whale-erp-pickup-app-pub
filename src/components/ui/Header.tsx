"use client";
import { useRouter } from "next/navigation";
import { HEADER_MENUS, HeaderMenuType } from "@/constants/HeaderMenu";

type HeaderProps = {
  menuKey?: keyof typeof HEADER_MENUS;
  url?: string;
  title?: string;
  basket?: boolean;
};

export default function Header({
  menuKey,
  url,
  title,
  basket,
}: HeaderProps) {
  const router = useRouter();

  let headerConfig: HeaderMenuType;

  if (menuKey && HEADER_MENUS[menuKey]) {
    headerConfig = HEADER_MENUS[menuKey];
  } else {
    headerConfig = {
      url: url || "/",
      title: title || "",
      basket: basket || false,
    };
  }

  return (
    <div className="header">
      <div className="header-inner">
        <div className="back-btn-bx">
          <button
            className="back-btn"
            onClick={() => router.push(headerConfig.url)}
          ></button>
        </div>
        {headerConfig.title && <h1>{headerConfig.title}</h1>}
        {headerConfig.basket && (
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
