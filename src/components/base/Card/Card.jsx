import React from 'react';
import styles from './Card.module.css';

export const Card = ({
  children,
  variant = 'default',
  padding = 'medium',
  hover = false,
  clickable = false,
  onClick = () => {},
  className = ''
}) => {
  const getCardClass = () => {
    let classes = [styles.card];
    
    classes.push(styles[variant]);
    classes.push(styles[padding]);
    
    if (hover) classes.push(styles.hover);
    if (clickable) classes.push(styles.clickable);
    if (className) classes.push(className);
    
    return classes.join(' ');
  };

  return (
    <div 
      className={getCardClass()}
      onClick={clickable ? onClick : undefined}
      role={clickable ? 'button' : undefined}
      tabIndex={clickable ? 0 : undefined}
    >
      {children}
    </div>
  );
};

export default Card;