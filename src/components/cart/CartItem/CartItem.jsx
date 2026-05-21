import { Trash2, Plus, Minus } from 'lucide-react';
import styles from './CartItem.module.css';

export const CartItem = ({ item }) => {
  const { title, price, quantity, size, image } = item;

  return (
    <div className={styles.cartItem}>
      <img src={image} alt={title} className={styles.itemImage} />
      
      <div className={styles.itemInfo}>
        <h4 className={styles.itemTitle}>{title}</h4>
        <p className={styles.itemMeta}>Размер: <span className={styles.metaValue}>{size}</span></p>
        
        <div className={styles.itemActions}>
          {/* Селектор количества внутри карточки */}
          <div className={styles.quantitySelector}>
            <button className={styles.qtyBtn} aria-label="Уменьшить количество">
              <Minus size={14} />
            </button>
            <span className={styles.qtyValue}>{quantity}</span>
            <button className={styles.qtyBtn} aria-label="Увеличить количество">
              <Plus size={14} />
            </button>
          </div>

          <button className={styles.deleteBtn} aria-label="Удалить товар">
            <Trash2 size={16} />
          </button>
        </div>
      </div>
      
      <div className={styles.itemPrice}>
        ${price * quantity}
      </div>
    </div>
  );
};