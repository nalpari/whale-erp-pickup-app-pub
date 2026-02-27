"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/ui/Header";
import {
  getHeaderConfigByPathname,
  PAGES_WITHOUT_COMMON_HEADER,
} from "@/constants/HeaderMenu";

export default function CommonHeader() {
  const pathname = usePathname();

  // 공통 헤더를 사용하지 않는 페이지는 null 반환
  if (PAGES_WITHOUT_COMMON_HEADER.includes(pathname)) {
    return null;
  }

  // pathname에 해당하는 헤더 설정 찾기 (동적 라우트 포함)
  const headerConfig = getHeaderConfigByPathname(pathname);

  // 설정이 없으면 헤더를 렌더링하지 않음
  if (!headerConfig) {
    return null;
  }

  return (
    <Header
      url={headerConfig.url}
      title={headerConfig.title}
      basket={headerConfig.basket}
    />
  );
}
