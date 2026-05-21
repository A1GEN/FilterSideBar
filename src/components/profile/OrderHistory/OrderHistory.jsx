import { useState } from 'react';
import { ShoppingBag, ChevronRight, Calendar, DollarSign } from 'lucide-react';
import styles from './OrderHistory.module.css';

export const OrderHistory = () => {
  // Фейковый массив заказов для верстки
  const [orders] = useState([
    {
      id: 'LM-9482',
      date: '14 мая 2026',
      total: 235,
      itemsCount: 3,
      status: 'delivering', // delivering | delivered | canceled
      statusText: 'Доставляется',
      items: [
        { title: 'Удлиненный плащ "Shadow"', quantity: 1, price: 145 },
        { title: 'Базовый Свитшот Минимализм', quantity: 2, price: 45 }
      ]
    },
    {
      id: 'LM-8104',
      date: '28 апреля 2026',
      total: 90,
      itemsCount: 1,
      status: 'delivered',
      statusText: 'Доставлен',
      items: [
        { title: 'Кроссовки Lumina Urban Tech', quantity: 1, price: 90 }
      ]
    },
    {
      id: 'LM-7391',
      date: '10 марта 2026',
      total: 35,
      itemsCount: 1,
      status: 'canceled',
      statusText: 'Отменён',
      items: [
        { title: 'Футболка Oversize Heavy Cotton', quantity: 1, price: 35 }
      ]
    }
  ]);

  return (
    <div className={styles.historyContainer}>
      <h2 className={styles.mainTitle}>История заказов</h2>

      {orders.length === 0 ? (
        <div className={styles.emptyState}>
          <ShoppingBag size={48} className={styles.emptyIcon} />
          <p className={styles.emptyText}>Вы еще не совершали покупок.</p>
        </div>
      ) : (
        <div className={styles.ordersList}>
          {orders.map((order) => (
            <div key={order.id} className={styles.orderCard}>
              {/* Шапка карточки заказа */}
              <div className={styles.orderHeader}>
                <div className={styles.metaInfo}>
                  <span className={styles.orderId}>Заказ #{order.id}</span>
                  <div className={styles.dateWrapper}>
                    <Calendar size={14} />
                    <span>{order.date}</span>
                  </div>
                </div>
                
                {/* Динамический класс для статуса */}
                <span className={`${styles.statusBadge} ${styles[order.status]}`}>
                  {order.statusText}
                </span>
              </div>

              {/* Тело карточки: Краткий список позиций */}
              <div className={styles.orderBody}>
                <div className={styles.productsSummary}>
                  {order.items.map((item, idx) => (
                    <div key={idx} className={styles.productRow}>
                      <span className={styles.productName}>{item.title}</span>
                      <span className={styles.productQty}>x{item.quantity}</span>
                    </div>
                  ))}
                </div>

                {/* Нижняя часть: Итого */}
                <div className={styles.orderFooter}>
                  <div className={styles.totalInfo}>
                    <span className={styles.totalLabel}>Всего товаров: {order.itemsCount}</span>
                    <div className={styles.priceWrapper}>
                      <span className={styles.totalPrice}>${order.total}</span>
                    </div>
                  </div>
                  
                  <button className={styles.detailsBtn}>
                    <span>Детали</span>
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};