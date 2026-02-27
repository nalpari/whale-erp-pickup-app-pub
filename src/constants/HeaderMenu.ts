export type HeaderMenuType = {
  url: string;
  title: string;
  basket: boolean;
};

export type HeaderMenuConfigType = {
  [pathname: string]: HeaderMenuType;
};

// 공통 헤더가 필요 없는 페이지들 (커스텀 헤더 사용)
export const PAGES_WITHOUT_COMMON_HEADER = [
  "/",
  "/main",
  "/storedetail",
  "/list",
];

// pathname에 따른 헤더 설정
export const HEADER_MENU_CONFIG: HeaderMenuConfigType = {
  "/login": {
    url: "/",
    title: "로그인",
    basket: false,
  },
  "/login/signup": {
    url: "/login",
    title: "회원가입",
    basket: false,
  },
  "/login/singup-success": {
    url: "/login",
    title: "회원가입",
    basket: false,
  },
  "/basket": {
    url: "/",
    title: "장바구니",
    basket: false,
  },
  "/mypage": {
    url: "/",
    title: "마이페이지",
    basket: false,
  },
  "/mypage/coupon": {
    url: "/mypage",
    title: "쿠폰",
    basket: false,
  },
  "/orderhistory": {
    url: "/",
    title: "주문내역",
    basket: false,
  },
  "/storedetail/map": {
    url: "/storedetail",
    title: "점포정보",
    basket: false,
  },
  "/storedetail/review": {
    url: "/storedetail",
    title: "구매후기",
    basket: true,
  },
};

// 동적 라우트 패턴 매칭을 위한 함수
export function getHeaderConfigByPathname(pathname: string): HeaderMenuType | null {
  // 정확한 매칭 먼저 확인
  if (HEADER_MENU_CONFIG[pathname]) {
    return HEADER_MENU_CONFIG[pathname];
  }

  // 동적 라우트 패턴 매칭
  if (pathname.startsWith("/orderhistory/") && pathname !== "/orderhistory/") {
    return {
      url: "/orderhistory",
      title: "주문 상세 내역",
      basket: false,
    };
  }

  if (pathname.startsWith("/storedetail/") && pathname !== "/storedetail/" && !pathname.startsWith("/storedetail/map") && !pathname.startsWith("/storedetail/review")) {
    return {
      url: "/storedetail",
      title: "스위츠 복숭아 아이스티",
      basket: true,
    };
  }

  if (pathname.startsWith("/mypage/coupon/") && pathname !== "/mypage/coupon/") {
    return {
      url: "/mypage/coupon",
      title: "쿠폰 상세",
      basket: false,
    };
  }

  return null;
}

// 메뉴 키 기반 설정 (기존 호환성 유지)
export const HEADER_MENUS: Record<string, HeaderMenuType> = {
  LOGIN: {
    url: "/",
    title: "로그인",
    basket: false,
  },
  SIGNUP: {
    url: "/login",
    title: "회원가입",
    basket: false,
  },
  SIGNUP_SUCCESS: {
    url: "/login",
    title: "회원가입",
    basket: false,
  },
  BASKET: {
    url: "/",
    title: "장바구니",
    basket: false,
  },
  MYPAGE: {
    url: "/",
    title: "마이페이지",
    basket: false,
  },
  COUPON: {
    url: "/mypage",
    title: "쿠폰",
    basket: false,
  },
  ORDER_HISTORY: {
    url: "/",
    title: "주문내역",
    basket: false,
  },
  ORDER_HISTORY_DETAIL: {
    url: "/orderhistory",
    title: "주문 상세 내역",
    basket: false,
  },
  STORE_DETAIL: {
    url: "/",
    title: "힘이나는커피생활무교점",
    basket: true,
  },
  STORE_MAP: {
    url: "/storedetail",
    title: "점포정보",
    basket: false,
  },
  STORE_REVIEW: {
    url: "/storedetail",
    title: "구매후기",
    basket: true,
  },
  MENU_DETAIL: {
    url: "/storedetail",
    title: "스위츠 복숭아 아이스티",
    basket: true,
  },
  COUPON_DETAIL: {
    url: "/mypage/coupon",
    title: "쿠폰 상세",
    basket: false,
  },
};

