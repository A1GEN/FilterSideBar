import { useSelector } from 'react-redux';
import { selectAllProducts } from '../../../redux/productSlice';
import { ProductCard } from '../ProductCard/ProductCard'; 
import styles from './ProductGrid.module.css';

export const ProductGrid = ({ isLoading }) => {
  // Получаем массив всех товаров из глобального стейта Redux
  const products = useSelector(selectAllProducts);

  // Состояние загрузки (скелетон или спиннер, пока данные подгружаются)
  if (isLoading) {
    return (
      <div className={styles.loadingWrapper}>
        <div className={styles.spinner}></div>
        <p>Загрузка трендов...</p>
      </div>
    );
  }

  // Заглушка: если в массиве нет товаров (как на твоём скриншоте)
  if (!products || products.length === 0) {
    return (
      <div className={styles.emptyGrid}>
        <h3 className={styles.emptyTitle}>Товары не найдены</h3>
        <p className={styles.emptyText}>
          Попробуйте изменить параметры фильтрации или сбросить их.
        </p>
      </div>
    );
  }

  return (
    <div className={styles.grid}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};