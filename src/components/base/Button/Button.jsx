import React from 'react';
import styles from './Button.module.css';

export const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  onClick = () => {},
  type = 'button',
  className = ''
}) => {
  const getButtonClass = () => {
    let classes = [styles.button];
    
    classes.push(styles[variant]);
    classes.push(styles[size]);
    
    if (disabled || loading) classes.push(styles.disabled);
    if (className) classes.push(className);
    
    return classes.join(' ');
  };

  return (
    <button
      type={type}
      className={getButtonClass()}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {loading ? (
        <>
          <span className={styles.spinner}></span>
          로딩중...
        </>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;