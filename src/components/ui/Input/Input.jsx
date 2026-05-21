import styles from './Input.module.css';

export const Input = ({
  label,
  error,
  icon: Icon, // Компонент иконки Lucide (опционально)
  type = 'text',
  id,
  ...props
}) => {
  return (
    <div className={styles.inputGroup}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}
      
      <div className={styles.wrapper}>
        {Icon && <Icon size={18} className={styles.icon} />}
        <input
          type={type}
          id={id}
          className={`${styles.input} ${Icon ? styles.withIcon : ''} ${error ? styles.hasError : ''}`}
          {...props}
        />
      </div>

      {error && <span className={styles.errorText}>{error}</span>}
    </div>
  );
};