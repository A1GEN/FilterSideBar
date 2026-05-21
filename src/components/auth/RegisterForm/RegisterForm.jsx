import { useState } from 'react';
import { User, Mail, Lock, UserPlus } from 'lucide-react';
import styles from './RegisterForm.module.css';

export const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Пароли не совпадают!');
      return;
    }
    console.log('Регистрация:', { name, email, password });
    // Сюда позже добавим Firebase Auth регистрацию
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.title}>Создать аккаунт</h2>
      
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <User className={styles.icon} size={20} />
          <input
            type="text"
            placeholder="Имя пользователя"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={styles.input}
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <Mail className={styles.icon} size={20} />
          <input
            type="email"
            placeholder="Ваш Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <Lock className={styles.icon} size={20} />
          <input
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <Lock className={styles.icon} size={20} />
          <input
            type="password"
            placeholder="Повторите пароль"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className={styles.input}
            required
          />
        </div>

        <button type="submit" className={styles.submitBtn}>
          <UserPlus size={20} />
          Зарегистрироваться
        </button>
      </form>
      
      <p className={styles.footerText}>
        Уже есть аккаунт? <a href="/" className={styles.link}>Войти</a>
      </p>
    </div>
  );
};