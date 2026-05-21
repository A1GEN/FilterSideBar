import { Facebook, Instagram, Twitter, Send } from 'lucide-react';
import styles from './Footer.module.css';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert('Спасибо за подписку на новости!');
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Блок бренда и подписки */}
        <div className={styles.brandSection}>
          <h2 className={styles.logo}>LUMINA</h2>
          <p className={styles.brandDescription}>
            Премиальный бренд одежды и аксессуаров. Создаем стиль, опережающий время.
          </p>
          <form onSubmit={handleSubscribe} className={styles.subscribeForm}>
            <input 
              type="email" 
              placeholder="Ваш Email для скидок" 
              className={styles.subscribeInput}
              required 
            />
            <button type="submit" className={styles.subscribeBtn} aria-label="Подписаться">
              <Send size={16} />
            </button>
          </form>
        </div>

        {/* Навигационные ссылки */}
        <div className={styles.linksGrid}>
          <div className={styles.linksColumn}>
            <h4 className={styles.columnTitle}>Магазин</h4>
            <a href="/catalog" className={styles.link}>Каталог</a>
            <a href="/catalog?category=new" className={styles.link}>Новинки</a>
            <a href="/catalog?category=sale" className={styles.link}>Распродажа</a>
          </div>

          <div className={styles.linksColumn}>
            <h4 className={styles.columnTitle}>Компания</h4>
            <a href="/about" className={styles.link}>О нас</a>
            <a href="/careers" className={styles.link}>Вакансии</a>
            <a href="/contacts" className={styles.link}>Контакты</a>
          </div>

          <div className={styles.linksColumn}>
            <h4 className={styles.columnTitle}>Поддержка</h4>
            <a href="/faq" className={styles.link}>FAQ</a>
            <a href="/delivery" className={styles.link}>Доставка и возврат</a>
            <a href="/privacy" className={styles.link}>Конфиденциальность</a>
          </div>
        </div>
      </div>

      <div className={styles.divider} />

      {/* Нижняя панель с копирайтом */}
      <div className={styles.bottomBar}>
        <span className={styles.copyright}>
          © {currentYear} LUMINA Store. Все права защищены.
        </span>
        <div className={styles.socials}>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className={styles.socialLink}>
            <Instagram size={20} />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className={styles.socialLink}>
            <Facebook size={20} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className={styles.socialLink}>
            <Twitter size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};