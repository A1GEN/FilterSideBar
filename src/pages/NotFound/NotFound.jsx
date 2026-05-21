import { useNavigate } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import { Button } from '../../components/ui/Button/Button';
import styles from './NotFound.module.css';

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.notFoundPage}>
      <div className={styles.content}>
        {/* Крупный стильный номер ошибки */}
        <h1 className={styles.errorCode}>404</h1>
        
        <h2 className={styles.title}>Страница не найдена</h2>
        <p className={styles.description}>
          Возможно, этот товар уже раскупили, ссылка устарела или в адресе допущена опечатка. 
          Не переживайте, вы можете вернуться на главную.
        </p>

        {/* Интерактивные кнопки для возврата */}
        <div className={styles.actions}>
          <Button 
            variant="outline" 
            iconLeft={ArrowLeft} 
            onClick={() => navigate(-1)}
          >
            Назад
          </Button>
          
          <a href="/" className={styles.link}>
            <Button 
              variant="primary" 
              iconLeft={Home}
            >
              На главную
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};