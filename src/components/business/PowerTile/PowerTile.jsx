import React from 'react';
import Card from '../../base/Card';
import { convertPowerUnit, getPowerStatus } from '../../../utils/format';
import styles from './PowerTile.module.css';

export const PowerTile = ({
  title = "전력량",
  value = 0,
  subtitle = null,
  showIcon = true,
  showStatus = true,
  thresholds = {},
  loading = false,
  onClick = () => {},
  className = ""
}) => {
  // 전력량 데이터 변환
  const powerData = convertPowerUnit(value);
  const status = showStatus ? getPowerStatus(value, thresholds) : 'default';
  
  // 아이콘 선택 (실제 프로젝트에서는 아이콘 라이브러리 사용)
  const getIcon = () => {
    switch (status) {
      case 'stable': return '🔌';
      case 'success': return '⚡';
      case 'warning': return '⚠️';
      case 'danger': return '🔥';
      default: return '⚡';
    }
  };

  if (loading) {
    return (
      <Card 
        variant={status} 
        padding="medium" 
        className={`${styles.powerTile} ${className}`}
      >
        <div className={styles.loadingState}>
          <div className={styles.spinner}></div>
          <span className="text-muted">데이터 로딩 중...</span>
        </div>
      </Card>
    );
  }

  return (
    <Card
      variant={status}
      padding="medium"
      hover={true}
      clickable={!!onClick}
      onClick={onClick}
      className={`${styles.powerTile} ${className}`}
    >
      {/* 헤더 */}
      <div 
        padding="large"
        className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
        {showIcon && (
          <span className={styles.icon} role="img" aria-label={`${status} 상태`}>
            {getIcon()}
          </span>
        )}
      </div>

      {/* 메인 값 */}
      <div className={styles.main}>
        {subtitle && (
          <p className={styles.subtitle}>{subtitle}</p>
        )}

        <div className={styles.valueContainer}>
          <span className={styles.value}>
            {powerData.displayValue}
          </span>
          <span className={styles.unit}>
            {powerData.unit}
          </span>
        </div>
      </div>

      {/* 상태 표시 */}
      {showStatus && (
        <div className={styles.footer}>
          <span className={`${styles.statusBadge} ${styles[status]}`}>
            {status === 'stable' && '정상'}
            {status === 'success' && '관심'}
            {status === 'warning' && '주의'}
            {status === 'danger' && '위험'}
          </span>
        </div>
      )}
    </Card>
  );
};

export default PowerTile;