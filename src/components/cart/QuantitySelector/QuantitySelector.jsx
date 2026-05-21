import { Plus, Minus } from 'lucide-react';
import styles from './QuantitySelector.module.css';

export const QuantitySelector = ({ quantity, onIncrease, onDecrease, min = 1, max = 10 }) => {
  return (
    <div className={styles.selector}>
      <button 
        type="button"
        className={styles.btn} 
        onClick={onDecrease}
        disabled={quantity <= min}
        aria-label="Уменьшить количество"
      >
        <Minus size={14} />
      </button>
      
      <span className={styles.value}>{quantity}</span>
      
      <button 
        type="button"
        className={styles.btn} 
        onClick={onIncrease}
        disabled={quantity >= max}
        aria-label="Увеличить количество"
      >
        <Plus size={14} />
      </button>
    </div>
  );
};