import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './ProductGallery.module.css';

export const ProductGallery = ({ images = [] }) => {
  // На случай, если картинок нет, ставим дефолтную заглушку
  const defaultImages = images.length > 0 ? images : [
    'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800',
    'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800',
    'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800'
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? defaultImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === defaultImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className={styles.galleryContainer}>
      {/* Левая панель: Миниатюры (Десктоп) */}
      <div className={styles.thumbnails}>
        {defaultImages.map((img, idx) => (
          <button
            key={idx}
            className={`${styles.thumbBtn} ${idx === activeIndex ? styles.activeThumb : ''}`}
            onClick={() => setActiveIndex(idx)}
            onMouseEnter={() => setActiveIndex(idx)} // Переключение при наведении для удобства
          >
            <img src={img} alt={`Превью ${idx + 1}`} className={styles.thumbImage} />
          </button>
        ))}
      </div>

      {/* Правая панель: Главное изображение */}
      <div className={styles.mainDisplay}>
        <img 
          src={defaultImages[activeIndex]} 
          alt="Главное изображение товара" 
          className={styles.mainImage} 
        />

        {/* Навигационные стрелки для мобильных устройств или быстрого клика */}
        <button className={`${styles.navBtn} ${styles.prev}`} onClick={handlePrev} aria-label="Назад">
          <ChevronLeft size={24} />
        </button>
        <button className={`${styles.navBtn} ${styles.next}`} onClick={handleNext} aria-label="Вперед">
          <ChevronRight size={24} />
        </button>

        {/* Точки-индикаторы для мобильной верстки */}
        <div className={styles.indicators}>
          {defaultImages.map((_, idx) => (
            <div 
              key={idx} 
              className={`${styles.dot} ${idx === activeIndex ? styles.activeDot : ''}`} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};