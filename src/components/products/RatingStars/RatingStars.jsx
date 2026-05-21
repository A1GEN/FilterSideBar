import { useState } from 'react';
import { Star } from 'lucide-react';
import styles from './RatingStars.module.css';

export const RatingStars = ({ rating = 0, maxStars = 5, isEditable = false, onChange }) => {
  const [hoverRating, setHoverRating] = useState(0);

  const handleClick = (value) => {
    if (isEditable && onChange) {
      onChange(value);
    }
  };

  const handleMouseEnter = (value) => {
    if (isEditable) {
      setHoverRating(value);
    }
  };

  const handleMouseLeave = () => {
    if (isEditable) {
      setHoverRating(0);
    }
  };

  return (
    <div 
      className={`${styles.starsContainer} ${isEditable ? styles.editable : ''}`}
      onMouseLeave={handleMouseLeave}
    >
      {Array.from({ length: maxStars }, (_, index) => {
        const starValue = index + 1;
        
        // Определяем, должна ли звезда быть закрашенной
        // Если пользователь навел мышку (hoverRating), приоритет у наведения. Иначе смотрим на рейтинг.
        const isFilled = hoverRating ? starValue <= hoverRating : starValue <= rating;

        return (
          <button
            key={starValue}
            type="button"
            className={styles.starBtn}
            disabled={!isEditable}
            onClick={() => handleClick(starValue)}
            onMouseEnter={() => handleMouseEnter(starValue)}
            aria-label={`Поставить оценку ${starValue} из ${maxStars}`}
          >
            <Star
              size={18}
              className={`${styles.starIcon} ${isFilled ? styles.filled : styles.empty}`}
              fill={isFilled ? '#f59e0b' : 'none'} 
            />
          </button>
        );
      })}
      
      {/* Если компонент интерактивный, можно рядом выводить подсказку числом */}
      {rating > 0 && !isEditable && (
        <span className={styles.ratingNumber}>{rating.toFixed(1)}</span>
      )}
    </div>
  );
};