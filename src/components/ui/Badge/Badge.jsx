import styles from './Badge.module.css';

export const Badge = ({ 
  children, 
  variant = 'default', // default | success | danger | warning | info
  size = 'medium'      // small | medium
}) => {
  const badgeClass = `${styles.badge} ${styles[variant]} ${styles[size]}`;

  return (
    <span className={badgeClass}>
      {children}
    </span>
  );
};