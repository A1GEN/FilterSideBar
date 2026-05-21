import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../../../redux/productSlice';
import { Search } from 'lucide-react';
import styles from './SearchBar.module.css';

export const SearchBar = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    dispatch(setSearchQuery(text)); // Передаем текст в Redux, и товары фильтруются!
  };

  return (
    <form onSubmit={handleSearchSubmit} className={styles.searchForm}>
      <div className={styles.inputContainer}>
        <Search size={18} className={styles.searchIcon} />
        <input 
          type="text" 
          placeholder="Поиск товаров (например, плащ)..." 
          value={text}
          onChange={(e) => setText(e.target.value)}
          className={styles.searchInput}
        />
        <button type="submit" className={styles.searchBtn}>
          Найти
        </button>
      </div>
    </form>
  );
};