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
    value: 93.43,
    subtitle: "실시간 사용량"
  }
};