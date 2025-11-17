# Whale ERP Pickup App

> Modern web application built with Next.js 16, React 19, and Tailwind CSS v4

## 📋 목차

- [개요](#-개요)
- [기술 스택](#-기술-스택)
- [프로젝트 구조](#-프로젝트-구조)
- [시작하기](#-시작하기)
- [개발 가이드](#-개발-가이드)
- [주요 기능](#-주요-기능)
- [배포](#-배포)

## 🎯 개요

**Whale ERP Pickup App**은 Next.js 16과 React 19의 최신 기능을 활용한 현대적인 웹 애플리케이션입니다. React Compiler를 통한 자동 최적화와 Tailwind CSS v4를 사용한 효율적인 스타일링을 제공합니다.

### 주요 특징

- ⚡ **React Compiler**: 자동 메모이제이션 및 성능 최적화
- 🎨 **Tailwind CSS v4**: PostCSS 기반 최신 버전
- 🌓 **다크 모드 지원**: 내장 다크 모드 지원
- 📱 **반응형 디자인**: 모든 디바이스에서 최적화된 UX
- 🔤 **최적화된 폰트**: Geist Sans & Geist Mono 자동 최적화
- 📦 **App Router**: Next.js 최신 라우팅 시스템

## 🛠 기술 스택

### 코어 프레임워크
- **[Next.js](https://nextjs.org)** `16.0.3` - React 기반 풀스택 프레임워크
- **[React](https://react.dev)** `19.2.0` - UI 라이브러리
- **[TypeScript](https://www.typescriptlang.org)** `^5` - 타입 안정성

### 스타일링
- **[Tailwind CSS](https://tailwindcss.com)** `^4` - 유틸리티 우선 CSS 프레임워크
- **[@tailwindcss/postcss](https://tailwindcss.com/docs/installation/using-postcss)** `^4` - PostCSS 플러그인

### 개발 도구
- **[ESLint](https://eslint.org)** `^9` - 코드 품질 도구
- **[babel-plugin-react-compiler](https://react.dev/learn/react-compiler)** `1.0.0` - React 자동 최적화

### 폰트
- **[Geist](https://vercel.com/font)** - Vercel의 최신 폰트 패밀리
  - Geist Sans (변수 폰트)
  - Geist Mono (변수 폰트)

## 📁 프로젝트 구조

```
whale-erp-pickup-app-pub/
├── src/
│   └── app/                    # Next.js App Router
│       ├── layout.tsx          # 루트 레이아웃 (폰트, 메타데이터)
│       ├── page.tsx            # 홈 페이지
│       └── globals.css         # 전역 스타일 및 Tailwind imports
│
├── public/                     # 정적 파일
│   ├── next.svg               # Next.js 로고
│   └── vercel.svg             # Vercel 로고
│
├── .next/                      # Next.js 빌드 출력 (자동 생성)
├── node_modules/              # 의존성 패키지
│
├── next.config.ts             # Next.js 설정
├── tsconfig.json              # TypeScript 설정
├── package.json               # 프로젝트 의존성
├── .gitignore                 # Git 무시 파일
├── next-env.d.ts              # Next.js TypeScript 타입 정의
├── CLAUDE.md                  # Claude Code AI 가이드라인
└── README.md                  # 프로젝트 문서 (현재 파일)
```

### 주요 파일 설명

#### `src/app/layout.tsx`
- 전체 애플리케이션의 루트 레이아웃
- Geist 폰트 최적화 및 로드
- 메타데이터 설정 (제목, 설명)
- HTML/Body 구조 정의

#### `src/app/page.tsx`
- 홈 페이지 컴포넌트
- Next.js Image 컴포넌트를 사용한 이미지 최적화
- 반응형 레이아웃 (모바일/데스크톱)
- 다크 모드 지원

#### `next.config.ts`
- Next.js 프레임워크 설정
- `reactCompiler: true` - React Compiler 활성화

#### `tsconfig.json`
- TypeScript 컴파일러 옵션
- `@/*` → `./src/*` 경로 별칭 설정
- Strict 모드 활성화

## 🚀 시작하기

### 사전 요구사항

- **Node.js** 20.x 이상
- **npm**, **yarn**, **pnpm**, 또는 **bun** 패키지 매니저

### 설치

1. **저장소 클론**
   ```bash
   git clone <repository-url>
   cd whale-erp-pickup-app-pub
   ```

2. **의존성 설치**
   ```bash
   npm install
   # 또는
   yarn install
   # 또는
   pnpm install
   # 또는
   bun install
   ```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 결과를 확인하세요.

페이지는 `src/app/page.tsx` 파일을 수정하면 자동으로 업데이트됩니다.

## 💻 개발 가이드

### 사용 가능한 명령어

```bash
# 개발 서버 시작 (포트 3000)
npm run dev

# 프로덕션 빌드 생성
npm run build

# 프로덕션 서버 시작 (빌드 후)
npm start

# ESLint 실행 (코드 품질 검사)
npm run lint
```

### App Router 사용법

이 프로젝트는 Next.js App Router를 사용합니다 (Pages Router 아님):

#### 새 페이지 생성
```
src/app/about/page.tsx        → /about
src/app/blog/[id]/page.tsx    → /blog/:id (동적 라우트)
```

#### 레이아웃 생성
```typescript
// src/app/dashboard/layout.tsx
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <section>{children}</section>
}
```

#### 서버 컴포넌트 vs 클라이언트 컴포넌트

- **기본값**: 모든 컴포넌트는 서버 컴포넌트
- **클라이언트 컴포넌트**: `"use client"` 지시문 추가

```typescript
// 클라이언트 컴포넌트 (상태, 이벤트, 브라우저 API 사용 시)
"use client"

import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)
  return <button onClick={() => setCount(count + 1)}>{count}</button>
}
```

### TypeScript 경로 별칭

`@/` 접두사를 사용하여 `src/` 디렉토리를 참조할 수 있습니다:

```typescript
import Component from '@/components/MyComponent'  // ✅ 권장
import Component from '../../components/MyComponent'  // ❌ 상대 경로
```

### 스타일링 가이드

#### Tailwind CSS 사용
```tsx
<div className="flex items-center justify-center bg-white dark:bg-black">
  <h1 className="text-3xl font-semibold text-black dark:text-white">
    Hello World
  </h1>
</div>
```

#### 다크 모드 지원
- `dark:` 접두사를 사용하여 다크 모드 스타일 적용
- 자동으로 사용자 시스템 설정을 따름

#### 전역 스타일
`src/app/globals.css`에서 전역 스타일을 관리합니다:

```css
@import "tailwindcss";

/* 커스텀 전역 스타일 추가 */
```

### 이미지 최적화

Next.js Image 컴포넌트를 사용하여 자동 최적화:

```tsx
import Image from 'next/image'

<Image
  src="/logo.png"
  alt="Logo"
  width={100}
  height={100}
  priority  // 중요한 이미지는 우선 로드
/>
```

### 폰트 최적화

`next/font`를 사용한 자동 폰트 최적화:

```typescript
import { Geist } from 'next/font/google'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

// CSS에서 사용
className={geistSans.variable}
```

## 🔧 주요 설정

### React Compiler

`next.config.ts`에서 React Compiler 활성화:

```typescript
const nextConfig: NextConfig = {
  reactCompiler: true,  // ✅ 자동 최적화
}
```

**장점:**
- 자동 메모이제이션 (useMemo, useCallback 불필요)
- 성능 최적화 자동화
- 개발자 경험 향상

### ESLint 설정

프로젝트는 다음 ESLint 구성을 사용합니다:
- `next/core-web-vitals`: Next.js 권장 규칙
- `next/typescript`: TypeScript 규칙

제외 디렉토리:
- `.next/`, `out/`, `build/`, `next-env.d.ts`

## 📚 학습 리소스

### Next.js 공식 문서
- [Next.js Documentation](https://nextjs.org/docs) - Next.js 기능 및 API
- [Learn Next.js](https://nextjs.org/learn) - 인터랙티브 튜토리얼
- [Next.js GitHub](https://github.com/vercel/next.js) - 피드백 및 기여

### React 19
- [React Documentation](https://react.dev) - React 공식 문서
- [React Compiler](https://react.dev/learn/react-compiler) - React Compiler 가이드

### Tailwind CSS
- [Tailwind CSS v4 Docs](https://tailwindcss.com/docs) - Tailwind CSS 공식 문서
- [Tailwind Play](https://play.tailwindcss.com) - 온라인 플레이그라운드

## 🚢 배포

### Vercel (권장)

Next.js를 만든 Vercel에서 가장 쉽게 배포할 수 있습니다:

1. [Vercel Platform](https://vercel.com/new)에 접속
2. GitHub 저장소 연결
3. 자동 배포 설정 완료

자세한 내용은 [Next.js 배포 문서](https://nextjs.org/docs/app/building-your-application/deploying)를 참조하세요.

### 다른 플랫폼

- **Netlify**: [Next.js on Netlify](https://docs.netlify.com/frameworks/next-js/overview/)
- **AWS Amplify**: [Deploy Next.js on AWS](https://aws.amazon.com/blogs/mobile/deploy-a-next-js-app-with-aws-amplify/)
- **Docker**: `npm run build` 후 컨테이너화

### 프로덕션 빌드 테스트

```bash
# 프로덕션 빌드 생성
npm run build

# 프로덕션 서버 로컬 실행
npm start
```

## 🤝 기여

프로젝트 개선을 위한 기여를 환영합니다!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이선스

이 프로젝트는 Private 프로젝트입니다.

## 📞 문의

프로젝트 관련 문의사항은 저장소 Issues를 통해 연락해주세요.

---

**Built with ❤️ using Next.js, React, and Tailwind CSS**
