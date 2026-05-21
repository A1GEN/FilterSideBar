import { useDispatch, useSelector } from 'react-redux';
import { 
  setCategory, 
  setMaxPrice, 
  setSize,
  selectCurrentCategory, 
  selectMaxPrice,
  selectSelectedSize
} from '../../../redux/productSlice';
import styles from './FilterSideBar.module.css';

export const FilterSideBar = () => {
  const dispatch = useDispatch();
  
  const activeCategory = useSelector(selectCurrentCategory);
  const maxPrice = useSelector(selectMaxPrice);
  const activeSize = useSelector(selectSelectedSize);

  const categories = ['Все товары', 'Худи и Свитшоты', 'Брюки и Шорты', 'Верхняя одежда', 'Аксессуары'];
  const sizes = ['XS', 'S', 'M', 'L', 'XL'];

  return (
    <aside className={styles.sidebar}>
      <div className={styles.header}>
        <h3 className={styles.title}>Фильтры</h3>
        <button 
          type="button" 
          className={styles.clearBtn}
          onClick={() => {
            dispatch(setCategory('Все товары'));
            dispatch(setMaxPrice(500));
            if(activeSize) dispatch(setSize(''));
          }}
        >
          Очистить
        </button>
      </div>

      {/* Категории */}
      <div className={styles.section}>
        <h4 className={styles.sectionTitle}>Категория</h4>
        <div className={styles.categoryList}>
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={`${styles.categoryBtn} ${activeCategory === category ? styles.activeCategory : ''}`}
              onClick={() => dispatch(setCategory(category))}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Цена */}
      <div className={styles.section}>
        <h4 className={styles.sectionTitle}>Максимальная цена</h4>
        <div className={styles.priceContainer}>
          <input
            type="range"
            min="10"
            max="500"
            step="5"
            value={maxPrice}
            onChange={(e) => dispatch(setMaxPrice(Number(e.target.value)))}
            className={styles.priceRange}
          />
          <div className={styles.priceLabels}>
            <span>$10</span>
            <span className={styles.currentPrice}>до ${maxPrice}</span>
          </div>
        </div>
      </div>

      {/* Размеры */}
      <div className={styles.section}>
        <h4 className={styles.sectionTitle}>Размер</h4>
        <div className={styles.sizeGrid}>
          {sizes.map((size) => (
            <button 
              key={size} 
              type="button" 
              className={`${styles.sizeBtn} ${activeSize === size ? styles.activeSize : ''}`}
              onClick={() => dispatch(setSize(size))}
            >
              {size}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
};