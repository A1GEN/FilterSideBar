import { useState, useRef, useEffect } from 'react';
import { ChevronDown, ArrowUpDown } from 'lucide-react';
import styles from './SortDropdown.module.css';

export const SortDropdown = ({ onSortChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState({
    value: 'default',
    label: 'По умолчанию'
  });

  const dropdownRef = useRef(null);

  const options = [
    { value: 'default', label: 'По умолчанию' },
    { value: 'price-asc', label: 'Цена: по возрастанию' },
    { value: 'price-desc', label: 'Цена: по убыванию' },
    { value: 'newest', label: 'Сначала новинки' },
    { value: 'rating', label: 'По популярности' }
  ];

  // Закрытие дропдауна при клике в любое другое место экрана
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    if (onSortChange) {
      onSortChange(option.value);
    }
  };

  return (
    <div className={styles.dropdownContainer} ref={dropdownRef}>
      <button 
        type="button" 
        className={styles.triggerBtn} 
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <ArrowUpDown size={16} className={styles.sortIcon} />
        <span className={styles.label}>Сортировка:</span>
        <span className={styles.currentValue}>{selectedOption.label}</span>
        <ChevronDown size={16} className={`${styles.arrow} ${isOpen ? styles.arrowOpen : ''}`} />
      </button>

      {isOpen && (
        <ul className={styles.optionsList} role="listbox">
          {options.map((option) => (
            <li 
              key={option.value}
              className={`${styles.optionItem} ${option.value === selectedOption.value ? styles.activeOption : ''}`}
              onClick={() => handleSelect(option)}
              role="option"
              aria-selected={option.value === selectedOption.value}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};