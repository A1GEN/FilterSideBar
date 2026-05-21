import { X, ShoppingBag, Trash2, Plus, Minus } from 'lucide-react';
import styles from './CartDrawer.module.css';

export const CartDrawer = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  // Временные фейковые данные для верстки (позже привяжем к Redux)
  const cartItems = [
    {
      id: 1,
      title: 'Премиальный Худи "Lumina"',
      price: 89,
      quantity: 1,
      size: 'L',
      image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=500'
    },
    {
      id: 2,
      title: 'Спортивные Брюки Oversize',
      price: 65,
      quantity: 2,
      size: 'M',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500'
    }
  ];

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.drawer} onClick={(e) => e.stopPropagation()}>
        {/* Шапка корзины */}
        <div className={styles.header}>
          <div className={styles.titleGroup}>
            <ShoppingBag size={22} />
            <span className={styles.title}>Корзина ({cartItems.length})</span>
          </div>
          <button className={styles.closeBtn} onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        {/* Список товаров */}
        <div className={styles.content}>
          {cartItems.length === 0 ? (
            <div className={styles.emptyState}>
              <ShoppingBag size={48} className={styles.emptyIcon} />
              <p>Ваша корзина пуста</p>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className={styles.cartItem}>
                <img src={item.image} alt={item.title} className={styles.itemImage} />
                <div className={styles.itemInfo}>
                  <h4 className={styles.itemTitle}>{item.title}</h4>
                  <p className={styles.itemMeta}>Размер: {item.size}</p>
                  
                  <div className={styles.itemActions}>
                    {/* Переключатель количества (QuantitySelector) */}
                    <div className={styles.quantitySelector}>
                      <button className={styles.qtyBtn}><Minus size={14} /></button>
                      <span className={styles.qtyValue}>{item.quantity}</span>
                      <button className={styles.qtyBtn}><Plus size={14} /></button>
                    </div>

                    <button className={styles.deleteBtn}>
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
                <div className={styles.itemPrice}>${item.price * item.quantity}</div>
              </div>
            ))
          )}
        </div>

        {/* Нижняя часть с ценой и кнопкой */}
        {cartItems.length > 0 && (
          <div className={styles.footer}>
            <div className={styles.summaryRow}>
              <span>Итого:</span>
              <span className={styles.totalPrice}>${totalPrice}</span>
            </div>
            <p className={styles.taxInfo}>Доставка и налоги рассчитываются при оформлении.</p>
            <button className={styles.checkoutBtn}>Оформить заказ</button>
          </div>
        )}
      </div>
    </div>
  );
};