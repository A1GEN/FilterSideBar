import { useEffect } from 'react';
import { X } from 'lucide-react';
import styles from './Modal.module.css';

export const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  size = 'medium' // small | medium | large
}) => {
  // Закрытие по клавише Esc и блокировка скролла body
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Обработка клика по подложке (overlay)
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const sizeClass = styles[size] || styles.medium;

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={`${styles.modalContainer} ${sizeClass}`}>
        {/* Шапка модального окна */}
        <div className={styles.header}>
          {title && <h3 className={styles.title}>{title}</h3>}
          <button type="button" className={styles.closeBtn} onClick={onClose} aria-label="Закрыть">
            <X size={20} />
          </button>
        </div>

        {/* Контентная часть */}
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </div>
  );
};