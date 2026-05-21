import { FilterSideBar } from '../../components/products/FilterSidebar/FilterSideBar';
import { ProductGrid } from '../../components/products/ProductGrid/ProductGrid';
import { SearchBar } from '../../components/products/SearchBar/SearchBar';
import styles from './Catalog.module.css';

export const Catalog = () => {
  return (
    <div className={styles.catalogPage}>
      <div className={styles.container}>
        
        {/* Верхняя панель: Поиск и сортировка */}
        <div className={styles.topBar}>
          <SearchBar />
          {/* Здесь может быть твой компонент сортировки */}
        </div>

        {/* Основной контент: Сайдбар + Сетка товаров */}
        <div className={styles.layout}>
          <aside className={styles.sidebarSection}>
            <FilterSideBar />
          </aside>
          
          <main className={styles.gridSection}>
            <ProductGrid isLoading={false} />
          </main>
        </div>

      </div>
    </div>
  );
};