import PowerTile from './PowerTile';

export default {
  title: 'Business/PowerTile',
  component: PowerTile,
  parameters: {
    docs: {
      description: {
        component: '전력량 표시 대시보드 타일 컴포넌트.'
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

export const Default = {
  args: {
    title: "현재 전력량",
    value: 8765.43,
    subtitle: "실시간 사용량"
  }
};

export const AutoConvertToMWh = {
  args: {
    title: "일간 전력량", 
    value: 126783.75,
    subtitle: "오늘 누적 사용량"
  }
};

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

export const Loading = {
  args: {
    title: "실시간 전력량",
    loading: true
  }
};