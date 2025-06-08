# 에너지 대시보드 프로젝트

> "1인 개발자도 일관성 있는 UI를 만들 수 있다"

## 🚀 빠른 시작

\`\`\`bash
npm install
npm start          # 개발 서버 (localhost:3000)
npm run storybook  # 컴포넌트 문서 (localhost:6006)
\`\`\`

## 📋 프로젝트 구조

\`\`\`
src/
├── styles/          # 디자인 토큰 (색상, 간격 등)
├── components/
│   ├── base/        # 재사용 컴포넌트 (Button, Card)
│   └── business/    # 비즈니스 컴포넌트 (PowerTile)
└── utils/           # 헬퍼 함수들
\`\`\`

## 🎨 디자인 규칙

### 색상 (4개만 사용)
- Primary: #0d6efd (메인)
- Success: #198754 (정상)  
- Warning: #ffc107 (주의)
- Danger: #dc3545 (위험)

### 간격 (8px 배수만 사용)
- space-2: 8px
- space-4: 16px  
- space-6: 24px

### 폰트 크기
- text-base: 16px (기본)
- text-xl: 24px (제목)
- text-2xl: 32px (큰 숫자)

## 🔧 컴포넌트 사용법

### PowerTile
\`\`\`jsx
<PowerTile 
  title="전력량"
  value={126783.75}  // 자동으로 126.78 MWh 변환
  onClick={() => alert('상세보기')}
/>
\`\`\`

### Button
\`\`\`jsx
<Button variant="primary" size="medium">
  확인
</Button>
\`\`\`

## 📝 새 컴포넌트 추가하는 법

1. \`src/components/base/\` 또는 \`business/\`에 폴더 생성
2. 컴포넌트 파일 생성 (.jsx + .module.css)
3. Storybook 스토리 작성 (.stories.js)
4. 이 README에 사용법 추가

## 🚀 배포

\`\`\`bash
npm run build      # 빌드
npm run deploy     # Vercel에 배포
\`\`\`

## 🆘 문제해결

### CSS 변수가 적용 안됨
→ \`variables.css\`가 import 되었는지 확인

### 컴포넌트가 깨짐  
→ Storybook에서 다양한 케이스 테스트

### 반응형이 안됨
→ 모바일 뷰포트에서 테스트

## 💡 향후 개선 예정

- [ ] 다크모드 지원
- [ ] 차트 컴포넌트 추가  
- [ ] 애니메이션 효과
- [ ] TypeScript 마이그레이션