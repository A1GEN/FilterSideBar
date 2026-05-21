import { useState } from 'react';
import { User, Mail, Phone, Lock, CheckCircle } from 'lucide-react';
import styles from './AccountSettings.module.css';

export const AccountSettings = () => {
  // Инициализируем стейт профиля (позже свяжем с бэкендом/Supabase)
  const [profile, setProfile] = useState({
    name: 'Арген',
    email: 'argen@example.com',
    phone: '+996 (555) 00-11-22',
  });

  const [password, setPassword] = useState({
    current: '',
    new: '',
    confirm: '',
  });

  const [isSaved, setIsSaved] = useState(false);

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPassword((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitProfile = (e) => {
    e.preventDefault();
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000); // Скрываем уведомление через 3 секунды
  };

  return (
    <div className={styles.settingsContainer}>
      <h2 className={styles.mainTitle}>Настройки аккаунта</h2>

      {isSaved && (
        <div className={styles.successToast}>
          <CheckCircle size={18} />
          <span>Изменения успешно сохранены!</span>
        </div>
      )}

      <div className={styles.grid}>
        {/* Секция: Личные данные */}
        <form onSubmit={handleSubmitProfile} className={styles.card}>
          <h3 className={styles.sectionTitle}>Личная информация</h3>
          
          <div className={styles.inputGroup}>
            <label className={styles.label}>Имя</label>
            <div className={styles.inputWrapper}>
              <User size={18} className={styles.icon} />
              <input
                type="text"
                name="name"
                value={profile.name}
                onChange={handleProfileChange}
                className={styles.input}
                required
              />
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Email адрес</label>
            <div className={styles.inputWrapper}>
              <Mail size={18} className={styles.icon} />
              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleProfileChange}
                className={styles.input}
                required
              />
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Номер телефона</label>
            <div className={styles.inputWrapper}>
              <Phone size={18} className={styles.icon} />
              <input
                type="tel"
                name="phone"
                value={profile.phone}
                onChange={handleProfileChange}
                className={styles.input}
              />
            </div>
          </div>

          <button type="submit" className={styles.saveBtn}>
            Сохранить изменения
          </button>
        </form>

        {/* Секция: Безопасность */}
        <form onSubmit={(e) => e.preventDefault()} className={styles.card}>
          <h3 className={styles.sectionTitle}>Безопасность</h3>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Текущий пароль</label>
            <div className={styles.inputWrapper}>
              <Lock size={18} className={styles.icon} />
              <input
                type="password"
                name="current"
                value={password.current}
                onChange={handlePasswordChange}
                placeholder="••••••••"
                className={styles.input}
              />
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Новый пароль</label>
            <div className={styles.inputWrapper}>
              <Lock size={18} className={styles.icon} />
              <input
                type="password"
                name="new"
                value={password.new}
                onChange={handlePasswordChange}
                placeholder="Минимум 6 символов"
                className={styles.input}
              />
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Подтвердите пароль</label>
            <div className={styles.inputWrapper}>
              <Lock size={18} className={styles.icon} />
              <input
                type="password"
                name="confirm"
                value={password.confirm}
                onChange={handlePasswordChange}
                placeholder="••••••••"
                className={styles.input}
              />
            </div>
          </div>

          <button type="submit" className={styles.passwordBtn}>
            Обновить пароль
          </button>
        </form>
      </div>
    </div>
  );
};