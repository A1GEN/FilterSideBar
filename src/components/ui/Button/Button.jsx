import styles from './Button.module.css';

export const Button = ({
  children,
  type = 'button',
  variant = 'primary', // primary | secondary | outline | danger
  size = 'medium',     // small | medium | large
  isLoading = false,
  disabled = false,
  iconLeft: IconLeft,   // Компонент иконки Lucide (опционально)
  iconRight: IconRight, // Компонент иконки Lucide (опционально)
  onClick,
  ...props
}) => {
  const buttonClass = `
    ${styles.btn} 
    ${styles[variant]} 
    ${styles[size]} 
    ${isLoading ? styles.loading : ''}
  `.trim();

  return (
    <button
      type={type}
      className={buttonClass}
      disabled={disabled || isLoading}
      onClick={onClick}
      {...props}
    >
      {/* Спиннер загрузки */}
      {isLoading && <div className={styles.spinner} />}

      {/* Иконка слева */}
      {!isLoading && IconLeft && <IconLeft size={size === 'small' ? 16 : 18} className={styles.iconLeft} />}

      {/* Текст кнопки */}
      <span className={styles.content}>{children}</span>

      {/* Иконка справа */}
      {!isLoading && IconRight && <IconRight size={size === 'small' ? 16 : 18} className={styles.iconRight} />}
    </button>
  );
};