import PowerTile from './PowerTile';

export default {
  title: 'Business/PowerTile',
  component: PowerTile,
  parameters: {
    docs: {
      description: {
        component: `
# PowerTile 컴포넌트

전력량을 사용자 친화적으로 표시하는 대시보드 타일입니다.

## 주요 기능
- kWh ↔ MWh 자동 단위 변환 (10,000 기준)
- 상태별 색상 표시 (정상/주의/위험)
- 반응형 디자인 지원
- 로딩 상태 처리

## 사용법
\`\`\`jsx
<PowerTile 
  title="현재 전력량"
  value={126783.75}  // → 126.78 MWh로 자동 변환
  onClick={() => console.log('상세 보기')}
/>
\`\`\`
        `
      }
    }
  },
  argTypes: {
    value: {
      control: 'number',
      description: '전력량 값 (kWh 단위)'
    },
    thresholds: {
      control: 'object',
      description: '경고/위험 임계값 설정'
    }
  }
};

// 실제 업무에서 자주 나올 케이스들
export const Default = {
  args: {
    title: "현재 전력량",
    value: 8765.43,
    subtitle: "지난 1시간 평균"
  }
};

export const AutoConvertToMWh = {
  args: {
    title: "일간 전력량", 
    value: 126783.75, // → 126.78 MWh
    subtitle: "오늘 누적 사용량"
  }
};

export const VeryLargeValue = {
  args: {
    title: "월간 전력량",
    value: 2500000, // → 2,500.00 MWh
    subtitle: "12월 누적 사용량"
  }
};

// 상태별 표시
export const WarningState = {
  args: {
    title: "피크 전력량",
    value: 75000,
    subtitle: "주의 수준에 도달",
    thresholds: { warning: 50000, danger: 100000 }
  }
};

export const DangerState = {
  args: {
    title: "비상 전력량",
    value: 150000,
    subtitle: "즉시 조치 필요",
    thresholds: { warning: 50000, danger: 100000 }
  }
};

// 엣지 케이스
export const ZeroValue = {
  args: {
    title: "정전 상태",
    value: 0,
    subtitle: "전력 공급 중단"
  }
};

export const ThresholdExact = {
  args: {
    title: "임계값 테스트",
    value: 10000, // 정확히 10,000 → 10.00 MWh
    subtitle: "단위 변환 경계값"
  }
};

export const BelowThreshold = {
  args: {
    title: "임계값 아래",
    value: 9999.99, // → 9,999.99 kWh 유지
    subtitle: "kWh 단위 유지"
  }
};

// UI 변형
export const WithoutIcon = {
  args: {
    title: "간단한 표시",
    value: 50000,
    showIcon: false
  }
};

export const WithoutStatus = {
  args: {
    title: "상태 숨김",
    value: 80000,
    showStatus: false
  }
};

export const Loading = {
  args: {
    title: "실시간 전력량",
    loading: true
  }
};

// 실제 사용 시뮬레이션
export const RealTimeSimulation = {
  args: {
    title: "실시간 모니터링",
    value: 87654.32,
    subtitle: "1분마다 업데이트"
  },
  // 실시간 업데이트 시뮬레이션 (데모용)
  play: async () => {
    // 실제 구현시에는 setInterval로 value 업데이트
  }
};

// 모바일 뷰 테스트
export const MobileView = {
  args: {
    title: "모바일 최적화",
    value: 126783.75,
    subtitle: "터치 친화적 인터페이스"
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
};