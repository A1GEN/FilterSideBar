import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ProductGrid } from '../../components/products/ProductGrid/ProductGrid';
import { Button } from '../../components/ui/Button/Button';
import { ArrowRight, Sparkles, ShieldCheck, Truck } from 'lucide-react';
import styles from './Home.module.css';

export const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Имитируем небольшую загрузку для красоты (чтобы сработал спиннер в ProductGrid)
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.homePage}>
      {/* Промо-баннер (Hero Section) */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.subtitle}>Новая коллекция 2026</span>
          <h1 className={styles.title}>Одежда, которая определяет твой стиль</h1>
          <p className={styles.description}>
            Минималистичные силуэты, премиальные ткани и абсолютный комфорт в каждой детали. Открой для себя новое прочтение уличной моды.
          </p>
          <div className={styles.heroButtons}>
            {/* Делаем кнопку рабочей: теперь она ведет прямо в каталог товаров */}
            <Link to="/catalog" className={styles.catalogLink}>
              <Button variant="primary" size="large" iconRight={ArrowRight}>
                В каталог
              </Button>
            </Link>
          </div>
        </div>
        <div className={styles.heroImageWrapper}>
          <img 
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1000" 
            alt="Премиальная одежда" 
            className={styles.heroImage} 
          />
        </div>
      </section>

      {/* Блок преимуществ */}
      <section className={styles.advantages}>
        <div className={styles.advCard}>
          <div className={styles.iconWrapper}>
            <Truck size={28} />
          </div>
          <h3>Быстрая доставка</h3>
          <p>Бесплатная доставка курьером при заказе от $100</p>
        </div>
        <div className={styles.advCard}>
          <div className={styles.iconWrapper}>
            <ShieldCheck size={28} />
          </div>
          <h3>Гарантия качества</h3>
          <p>Только оригинальные премиум-материалы и фурнитура</p>
        </div>
        <div className={styles.advCard}>
          <div className={styles.iconWrapper}>
            <Sparkles size={28} />
          </div>
          <h3>Премиум сервис</h3>
          <p>Поддержка персонального менеджера 24/7 и лёгкий возврат</p>
        </div>
      </section>

      {/* Сетка трендовых товаров */}
      <section className={styles.trending}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Тренды сезона</h2>
          <p className={styles.sectionSubtitle}>Самые популярные модели этой недели</p>
        </div>
        {/* Компонент сам заберет товары из Redux и отобразит их на главной */}
        <ProductGrid isLoading={isLoading} />
      </section>
    </div>
  );
};