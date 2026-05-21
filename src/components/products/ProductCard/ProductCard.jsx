import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../../redux/cartSlice';
import { toggleFavorite, selectFavorites } from '../../../redux/productSlice';
import { Heart, ShoppingCart } from 'lucide-react';
import styles from './ProductCard.module.css';

export const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  
  const isFavorite = favorites.includes(product.id);

  const handleAddToCart = (e) => {
    e.preventDefault(); // Защита от перехода по ссылке
    dispatch(addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      size: product.sizes ? product.sizes[0] : 'M', // Берем первый доступный размер по умолчанию
      quantity: 1
    }));
    alert(`Товар "${product.title}" добавлен в корзину!`);
  };

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={product.image} alt={product.title} className={styles.image} />
        {product.oldPrice && (
          <span className={styles.discount}>
            -{Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}%
          </span>
        )}
        <button 
          type="button" 
          className={`${styles.favoriteBtn} ${isFavorite ? styles.favoriteActive : ''}`}
          onClick={() => dispatch(toggleFavorite(product.id))}
        >
          <Heart size={20} fill={isFavorite ? '#dc2626' : 'none'} stroke={isFavorite ? '#dc2626' : '#0f172a'} />
        </button>
      </div>

      <div className={styles.info}>
        <div className={styles.rating}>⭐ {product.rating}</div>
        <h3 className={styles.title}>{product.title}</h3>
        
        <div className={styles.footer}>
          <div className={styles.prices}>
            <span className={styles.price}>${product.price}</span>
            {product.oldPrice && <span className={styles.oldPrice}>${product.oldPrice}</span>}
          </div>
          
          <button type="button" className={styles.cartBtn} onClick={handleAddToCart}>
            <ShoppingCart size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};