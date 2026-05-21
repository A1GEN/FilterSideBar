import { useState } from 'react';
import { UserAvatar } from '../../components/profile/UserAvatar/UserAvatar';
import { AccountSettings } from '../../components/profile/AccountSettings/AccountSettings';
import { OrderHistory } from '../../components/profile/OrderHistory/OrderHistory';
import { User, ShoppingBag, LogOut } from 'lucide-react';
import styles from './ProfilePage.module.css';

export const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('settings'); // settings | orders

  return (
    <div className={styles.profilePage}>
      <div className={styles.container}>
        {/* Левый блок: Сайдбар навигации */}
        <aside className={styles.sidebar}>
          <div className={styles.userInfo}>
            <UserAvatar name="Арген" size="large" isEditable={true} />
            <h3 className={styles.userName}>Арген Абзарбеков</h3>
            <p className={styles.userEmail}>argen@example.com</p>
          </div>

          <nav className={styles.nav}>
            <button 
              type="button"
              className={`${styles.navBtn} ${activeTab === 'settings' ? styles.activeTab : ''}`}
              onClick={() => setActiveTab('settings')}
            >
              <User size={18} />
              <span>Профиль</span>
            </button>
            
            <button 
              type="button"
              className={`${styles.navBtn} ${activeTab === 'orders' ? styles.activeTab : ''}`}
              onClick={() => setActiveTab('orders')}
            >
              <ShoppingBag size={18} />
              <span>Мои заказы</span>
            </button>
            
            <button type="button" className={`${styles.navBtn} ${styles.logoutBtn}`}>
              <LogOut size={18} />
              <span>Выйти</span>
            </button>
          </nav>
        </aside>

        {/* Правый блок: Отображение контента текущей вкладки */}
        <main className={styles.content}>
          {activeTab === 'settings' && <AccountSettings />}
          {activeTab === 'orders' && <OrderHistory />}
        </main>
      </div>
    </div>
  );
};