import { useState } from 'react';
import { Ticket, ArrowRight } from 'lucide-react';
import styles from './CartSummary.module.css';

export const CartSummary = ({ subtotal }) => {
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [isApplied, setIsApplied] = useState(false);

  const shipping = subtotal > 150 ? 0 : 15; // Бесплатная доставка от $150
  const tax = Math.round(subtotal * 0.08); // Налог 8%
  
  const handleApplyPromo = (e) => {
    e.preventDefault();
    if (promoCode.toUpperCase() === 'LUMINA20') {
      setDiscount(Math.round(subtotal * 0.2)); // Скидка 20%
      setIsApplied(true);
    } else {
      alert('Неверный промокод. Попробуйте LUMINA20');
    }
  };

  const total = subtotal - discount + shipping + tax;

  return (
    <div className={styles.summaryContainer}>
      <h3 className={styles.title}>Сводка заказа</h3>

      {/* Форма промокода */}
      <form onSubmit={handleApplyPromo} className={styles.promoForm}>
        <div className={styles.inputWrapper}>
          <Ticket size={18} className={styles.promoIcon} />
          <input
            type="text"
            placeholder="Промокод (LUMINA20)"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
            disabled={isApplied}
            className={styles.promoInput}
          />
        </div>
        <button 
          type="submit" 
          disabled={isApplied || !promoCode} 
          className={styles.promoBtn}
        >
          {isApplied ? 'ОК' : 'Применить'}
        </button>
      </form>

      {/* Таблица цен */}
      <div className={styles.priceTable}>
        <div className={styles.row}>
          <span className={styles.label}>Стоимость товаров</span>
          <span className={styles.value}>${subtotal}</span>
        </div>
        
        {discount > 0 && (
          <div className={`${styles.row} ${styles.discountRow}`}>
            <span className={styles.label}>Скидка (20%)</span>
            <span className={styles.value}>-${discount}</span>
          </div>
        )}

        <div className={styles.row}>
          <span className={styles.label}>Доставка</span>
          <span className={styles.value}>
            {shipping === 0 ? <span className={styles.freeShipping}>Бесплатно</span> : `$${shipping}`}
          </span>
        </div>

        <div className={styles.row}>
          <span className={styles.label}>Налог (8%)</span>
          <span className={styles.value}>${tax}</span>
        </div>

        <div className={styles.divider} />

        <div className={`${styles.row} ${styles.totalRow}`}>
          <span className={styles.totalLabel}>Итого к оплате</span>
          <span className={styles.totalValue}>${total}</span>
        </div>
      </div>

      <button className={styles.checkoutBtn}>
        Перейти к оплате
        <ArrowRight size={18} className={styles.arrowIcon} />
      </button>
    </div>
  );
};