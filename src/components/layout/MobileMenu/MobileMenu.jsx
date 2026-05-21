import { X, Home, ShoppingBag, User, Heart, MessageSquare } from 'lucide-react';
import styles from './MobileMenu.module.css';

export const MobileMenu = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.sidebar} onClick={(e) => e.stopPropagation()}>
        {/* Шапка меню */}
        <div className={styles.header}>
          <span className={styles.logo}>LUMINA</span>
          <button className={styles.closeBtn} onClick={onClose} aria-label="Закрыть меню">
            <X size={24} />
          </button>
        </div>

        {/* Навигационные ссылки */}
        <nav className={styles.nav}>
          <a href="/" className={styles.navLink} onClick={onClose}>
            <Home size={20} />
            Главная
          </a>
          <a href="/catalog" className={styles.navLink} onClick={onClose}>
            <ShoppingBag size={20} />
            Каталог
          </a>
          <a href="/profile" className={styles.navLink} onClick={onClose}>
            <User size={20} />
            Личный кабинет
          </a>
          <a href="/wishlist" className={styles.navLink} onClick={onClose}>
            <Heart size={20} />
            Избранное
          </a>
        </nav>

        {/* Информационный подвал внутри меню */}
        <div className={styles.footer}>
          <p className={styles.phone}>+996 (555) 00-11-22</p>
          <p className={styles.hours}>Ежедневно: с 10:00 до 22:00</p>
        </div>
      </div>
    </div>
  );
};