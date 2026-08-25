# 2eo Portfolio v2

React + TypeScript + Vite 기반으로 제작

- Demo: https://2eo2yeo.github.io/2eo_portfolio_v2/
- Repo: https://github.com/2eo2yeo/2eo_portfolio_v2

## Stack

React · TypeScript · Vite · Tailwind CSS v4 · React Router · AOS · framer-motion · react-icons

## 구조

```
src/
├── assets/
├── components/
│   ├── CursorHintLink.tsx    커서 호버 힌트가 붙은 링크 컴포넌트
│   ├── NavDots.tsx           섹션 네비게이션 dot
│   └── ProjectList.tsx       dataUrl로 받은 JSON을 렌더링 (work/side-projects 공용)
├── css/
│   ├── base.css               Tailwind 변수 설정, @theme 토큰, @font-face
│   └── style.css              커스텀 CSS
├── layout/
│   ├── Layout.tsx         레이아웃 파일
│   ├── Header.tsx              
│   ├── Footer.tsx
│   ├── NavItem.tsx        헤더에서 사용하는 네비 재사용 컴포넌트
│   └── ScrollToTop.tsx
├── pages/
│   ├── Home.tsx                 /
│   ├── Work.tsx                 /work   
│   └── SideProjects.tsx         /side-projects
├── App.tsx                     Routes 정의 + AOS 초기화
└── main.tsx                    
```

## 데이터
`public/data/work.json`, `public/data/side-projects.json`에 프로젝트 목록(제목, 기간, 스택, 링크, 설명)을 분리해두고, `Work.tsx` / `SideProjects.tsx`는 각자 다른 JSON을 `ProjectList` 컴포넌트 하나에 넘겨 렌더링합니다.

프로젝트가 늘어나거나 내용이 바뀌어도 카드마다 JSX를 새로 작성할 필요가 없습니다. 마크업(구조)은 `ProjectList` 하나로 고정하고, 실제 내용(데이터)만 JSON으로 갈아끼우는 방식이라 페이지마다 같은 구조를 중복 작성하지 않고, 프로젝트 추가·수정도 코드 수정 없이 JSON 배열에 항목만 추가하면 되도록 구성하였습니다.

## CSS 
`css/base.css`
- 컬러변수
- 기본 폰트(Pretendard), 포인트 폰트(silkscreen) @font-face
- 3xl 브레이크포인트 커스텀.


## 실행

```bash
npm install
npm run dev
```
