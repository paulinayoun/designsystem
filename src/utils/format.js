/**
 * 전력량 관련 포맷팅 유틸리티
 * 
 * 비즈니스 로직을 별도 파일로 분리해서
 * 테스트하기 쉽고 재사용하기 좋게 만듦
 */

// 상수 정의
export const POWER_UNIT_THRESHOLD = 10000; // kWh → MWh 변환 기준
export const DECIMAL_PLACES = 2; // 소수점 자릿수

/**
 * 숫자를 천단위 콤마 포맷으로 변환
 */
export const formatNumber = (value, decimals = DECIMAL_PLACES) => {
  if (value === null || value === undefined || isNaN(value)) {
    return '0';
  }
  
  return Number(value).toLocaleString('ko-KR', {
    minimumFractionDigits: 0,
    maximumFractionDigits: decimals
  });
};

/**
 * 전력량 값을 적절한 단위로 변환
 */
export const convertPowerUnit = (value) => {
  if (!value || value < POWER_UNIT_THRESHOLD) {
    return {
      value: value || 0,
      unit: 'kWh',
      displayValue: formatNumber(value || 0)
    };
  }
  
  const mwhValue = value / 1000;
  return {
    value: mwhValue,
    unit: 'MWh', 
    displayValue: formatNumber(mwhValue)
  };
};

/**
 * 완전한 전력량 표시 문자열 생성
 */
export const formatPowerDisplay = (value) => {
  const converted = convertPowerUnit(value);
  return `${converted.displayValue} ${converted.unit}`;
};

/**
 * 상태별 색상 결정
 * 나중에 비즈니스 로직이 복잡해지면 여기서 처리
 */
export const getPowerStatus = (value, thresholds = {}) => {
  const { warning = 50000, danger = 100000 } = thresholds;
  
  if (value >= danger) return 'danger';
  if (value >= warning) return 'warning';
  return 'success';
};

/**
 * 전력량 변화율 계산
 */
export const calculatePowerChange = (current, previous) => {
  if (!previous || previous === 0) return null;
  
  const changePercent = ((current - previous) / previous) * 100;
  return {
    percent: Math.abs(changePercent),
    direction: changePercent >= 0 ? 'increase' : 'decrease',
    displayPercent: `${changePercent >= 0 ? '+' : '-'}${Math.abs(changePercent).toFixed(1)}%`
  };
};