import styles from './Spinner.module.css';

export const Spinner = ({ 
  size = 'medium', // small | medium | large
  variant = 'dark' // dark | light | primary
}) => {
  const spinnerClass = `${styles.spinner} ${styles[size]} ${styles[variant]}`;

  return (
    <div className={styles.spinnerWrapper} role="status" aria-label="Загрузка">
      <div className={spinnerClass} />
    </div>
  );
};