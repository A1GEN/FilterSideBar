import { useState } from 'react';
import { Mail, Lock, LogIn } from 'lucide-react';
import styles from './LoginForm.module.css';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Попытка входа:', { email, password });
    // Позже здесь подключим Firebase Auth и Redux
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.title}>Вход в аккаунт</h2>
      
      <form onSubmit={handleSubmit} className={styles.form}>
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

        <button type="submit" className={styles.submitBtn}>
          <LogIn size={20} />
          Войти
        </button>

        <div className={styles.divider}>или</div>

        <button type="button" className={styles.googleBtn}>
          <img 
            src="https://www.svgrepo.com/show/475656/google-color.svg" 
            alt="Google" 
            className={styles.googleIcon} 
          />
          Войти через Google
        </button>
      </form>
      
      <p className={styles.footerText}>
        Нет аккаунта? <a href="/register" className={styles.link}>Зарегистрируйтесь</a>
      </p>
    </div>
  );
};