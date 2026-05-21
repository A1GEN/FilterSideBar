import { useState } from 'react';
import { ShoppingBag, Trash2, ArrowLeft, CreditCard } from 'lucide-react';
import { Button } from '../../components/ui/Button/Button';
import styles from './CartPage.module.css';

export const CartPage = () => {
  // Фейковый массив товаров в корзине для верстки и демонстрации
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: 'Удлиненный плащ "Shadow"',
      price: 145,
      quantity: 1,
      size: 'L',
      image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400'
    },
    {
      id: 2,
      title: 'Базовый Свитшот Минимализм',
      price: 45,
      quantity: 2,
      size: 'M',
      image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400'
    }
  ]);

  // Изменение количества товара
  const updateQuantity = (id, delta) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  // Удаление товара из корзины
  const removeItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  // Расчет стоимости
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const delivery = subtotal > 100 ? 0 : 15; // Бесплатная доставка от $100
  const total = subtotal + delivery;

  if (cartItems.length === 0) {
    return (
      <div className={styles.emptyCart}>
        <ShoppingBag size={64} className={styles.emptyIcon} />
        <h2>Ваша корзина пуста</h2>
        <p>Похоже, вы еще ничего не добавили в корзину.</p>
        <a href="/catalog" className={styles.backLinkBtn}>
          <Button variant="primary" iconLeft={ArrowLeft}>В каталог</Button>
        </a>
      </div>
    );
  }

  return (
    <div className={styles.cartPage}>
      <h1 className={styles.pageTitle}>Корзина покупок</h1>
      
      <div className={styles.layout}>
        {/* Список товаров слева */}
        <div className={styles.itemsList}>
          {cartItems.map((item) => (
            <div key={item.id} className={styles.cartItem}>
              <div className={styles.imgWrapper}>
                <img src={item.image} alt={item.title} className={styles.itemImg} />
              </div>
              
              <div className={styles.itemInfo}>
                <h3 className={styles.itemTitle}>{item.title}</h3>
                <p className={styles.itemMeta}>Размер: <span>{item.size}</span></p>
                <span className={styles.itemPrice}>${item.price}</span>
              </div>

              {/* Управление количеством */}
              <div className={styles.quantityControls}>
                <button 
                  type="button" 
                  onClick={() => updateQuantity(item.id, -1)} 
                  className={styles.qtyBtn}
                >
                  -
                </button>
                <span className={styles.qtyValue}>{item.quantity}</span>
                <button 
                  type="button" 
                  onClick={() => updateQuantity(item.id, 1)} 
                  className={styles.qtyBtn}
                >
                  +
                </button>
              </div>

              {/* Итоговая цена позиции и удаление */}
              <div className={styles.itemRightBlock}>
                <span className={styles.itemTotalPrice}>${item.price * item.quantity}</span>
                <button 
                  type="button" 
                  onClick={() => removeItem(item.id)} 
                  className={styles.deleteBtn}
                  aria-label="Удалить товар"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))}

          <a href="/catalog" className={styles.continueShopping}>
            <ArrowLeft size={16} />
            <span>Продолжить покупки</span>
          </a>
        </div>

        {/* Чек / Сводка заказа справа */}
        <aside className={styles.summaryCard}>
          <h2 className={styles.summaryTitle}>Сводка заказа</h2>
          
          <div className={styles.summaryRows}>
            <div className={styles.summaryRow}>
              <span>Промежуточный итог</span>
              <span>${subtotal}</span>
            </div>
            <div className={styles.summaryRow}>
              <span>Доставка</span>
              <span>{delivery === 0 ? 'Бесплатно' : `$${delivery}`}</span>
            </div>
            {delivery > 0 && (
              <p className={styles.deliveryNotice}>
                Добавьте товаров еще на <strong>${100 - subtotal}</strong> для бесплатной доставки!
              </p>
            )}
            <hr className={styles.divider} />
            <div className={`${styles.summaryRow} ${styles.totalRow}`}>
              <span>Итого к оплате</span>
              <span>${total}</span>
            </div>
          </div>

          <Button variant="primary" size="large" iconLeft={CreditCard}>
            Оформить заказ
          </Button>
        </aside>
      </div>
    </div>
  );
};