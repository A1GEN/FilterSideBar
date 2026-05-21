import { useState } from 'react';
import { Menu, ShoppingBag, User, Heart, Search } from 'lucide-react';
import { CartDrawer } from '../../cart/CartDrawer/CartDrawer';
import { MobileMenu } from '../MobileMenu/MobileMenu';
import styles from './Navbar.module.css';

export const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Фейковое количество товаров для иконки корзины (позже подключим Redux)
  const cartCount = 3; 

  return (
    <>
      <header className={styles.navbar}>
        <div className={styles.container}>
          {/* Бургер-меню для мобилок */}
          <button 
            className={styles.burgerBtn} 
            onClick={() => setIsMenuOpen(true)}
            aria-label="Открыть меню"
          >
            <Menu size={24} />
          </button>

          {/* Логотип */}
          <a href="/" className={styles.logo}>
            LUMINA
          </a>

          {/* Навигация для десктопа */}
          <nav className={styles.desktopNav}>
            <a href="/" className={styles.navLink}>Главная</a>
            <a href="/catalog" className={styles.navLink}>Каталог</a>
            <a href="/catalog?category=new" className={styles.navLink}>Новинки</a>
            <a href="/about" className={styles.navLink}>О нас</a>
          </nav>

          {/* Правый блок с иконками действий */}
          <div className={styles.actions}>
            <button className={styles.actionBtn} aria-label="Поиск">
              <Search size={20} />
            </button>
            
            <a href="/profile" className={`${styles.actionBtn} ${styles.desktopIcon}`} aria-label="Профиль">
              <User size={20} />
            </a>

            <a href="/wishlist" className={`${styles.actionBtn} ${styles.desktopIcon}`} aria-label="Избранное">
              <Heart size={20} />
            </a>

            {/* Кнопка корзины с бейджем количества */}
            <button 
              className={styles.actionBtn} 
              onClick={() => setIsCartOpen(true)}
              aria-label="Открыть корзину"
            >
              <div className={styles.cartIconWrapper}>
                <ShoppingBag size={20} />
                {cartCount > 0 && <span className={styles.badge}>{cartCount}</span>}
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Выезжающие компоненты, которые мы создали ранее */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};