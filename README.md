# 2eo Portfolio v2

2eo의 개인 포트폴리오. React + TypeScript + Vite, Tailwind CSS, React Router.

## Stack

React · TypeScript · Vite · Tailwind CSS v4 · React Router v7 · AOS

## 구조

```
src/
├── assets/
├── css/
│   ├── base.css          Tailwind 진입점, @theme 토큰, @font-face
│   └── style.css         전역 스타일 (scroll-behavior 등)
├── layout/
│   ├── Layout.tsx         Header + main + Footer
│   ├── Header.tsx         반응형 헤더
│   ├── Footer.tsx
│   ├── NavItem.tsx        헤더에서 사용하는 네비 재사용 컴포넌트
│   └── ScrollToTop.tsx    
├── pages/
│   ├── Home.tsx           /
│   ├── About.tsx          /about
│   ├── Work.tsx            /work
│   ├── SideProjects.tsx    /side-projects
│   └── Contact.tsx         /contact
├── App.tsx                Routes 정의
└── main.tsx               entry, BrowserRouter 등록
```

## Tailwind @theme 토큰

`css/base.css`에서 primary 컬러 / 기본 폰트(Pretendard) / 3xl 브레이크포인트 커스텀.

## Run

```bash
npm install
npm run dev
```
