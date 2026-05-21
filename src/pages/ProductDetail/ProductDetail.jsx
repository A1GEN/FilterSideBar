import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  Star, 
  ShoppingCart, 
  Heart, 
  ArrowLeft, 
  ShieldCheck, 
  Truck, 
  RefreshCw 
} from 'lucide-react';
import { Button } from '../../components/ui/Button/Button';
import { Badge } from '../../components/ui/Badge/Badge';
import styles from './ProductDetail.module.css';

export const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);
  const [activeImg, setActiveImg] = useState(0);

  // Фейковые данные товара (в реальности придут по id через API/Supabase)
  const product = {
    title: 'Удлиненный плащ "Shadow" Waterproof',
    price: 145,
    oldPrice: 190,
    rating: 4.8,
    reviews: 124,
    description: 'Премиальный плащ из технологичной ткани с водоотталкивающей пропиткой. Идеальный крой оверсайз, глубокие карманы и минималистичная фурнитура. Подходит для температурного режима от +5 до +15 градусов.',
    sizes: ['S', 'M', 'L', 'XL'],
    images: [
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800',
      'https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=800',
      'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800'
    ]
  };

  const handleAddToCart = () => {
    console.log(`Добавлено в корзину: ${product.title}, размер: ${selectedSize}, кол-во: ${quantity}`);
    // Здесь будет вызов контекста корзины
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        {/* Кнопка назад */}
        <button onClick={() => navigate(-1)} className={styles.backBtn}>
          <ArrowLeft size={20} />
          <span>Назад в каталог</span>
        </button>

        <div className={styles.grid}>
          {/* Левая колонка: Галерея */}
          <section className={styles.gallery}>
            <div className={styles.mainImgWrapper}>
              <img src={product.images[activeImg]} alt={product.title} className={styles.mainImg} />
            </div>
            <div className={styles.thumbnails}>
              {product.images.map((img, idx) => (
                <div 
                  key={idx} 
                  className={`${styles.thumb} ${activeImg === idx ? styles.activeThumb : ''}`}
                  onClick={() => setActiveImg(idx)}
                >
                  <img src={img} alt={`Превью ${idx}`} />
                </div>
              ))}
            </div>
          </section>

          {/* Правая колонка: Информация */}
          <section className={styles.info}>
            <div className={styles.header}>
              <Badge variant="danger">Bestseller</Badge>
              <h1 className={styles.title}>{product.title}</h1>
              <div className={styles.ratingRow}>
                <div className={styles.stars}>
                  <Star size={16} fill="#FFC107" color="#FFC107" />
                  <span>{product.rating}</span>
                </div>
                <span className={styles.reviewsCount}>({product.reviews} отзывов)</span>
              </div>
            </div>

            <div className={styles.priceRow}>
              <span className={styles.currentPrice}>${product.price}</span>
              <span className={styles.oldPrice}>${product.oldPrice}</span>
            </div>

            <p className={styles.description}>{product.description}</p>

            {/* Выбор размера */}
            <div className={styles.optionsSection}>
              <h3 className={styles.optionTitle}>Выберите размер</h3>
              <div className={styles.sizeGrid}>
                {product.sizes.map(size => (
                  <button
                    key={size}
                    className={`${styles.sizeChip} ${selectedSize === size ? styles.activeSize : ''}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Количество и кнопка */}
            <div className={styles.actions}>
              <div className={styles.qtyControl}>
                <button onClick={() => setQuantity(q => Math.max(1, q - 1))}>-</button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(q => q + 1)}>+</button>
              </div>
              <div className={styles.mainBtns}>
                <Button 
                  variant="primary" 
                  size="large" 
                  iconLeft={ShoppingCart}
                  onClick={handleAddToCart}
                >
                  Добавить в корзину
                </Button>
                <button className={styles.wishBtn}>
                  <Heart size={24} />
                </button>
              </div>
            </div>

            {/* Преимущества под кнопкой */}
            <div className={styles.benefits}>
              <div className={styles.benefitItem}>
                <Truck size={20} />
                <span>Быстрая доставка (1-3 дня)</span>
              </div>
              <div className={styles.benefitItem}>
                <RefreshCw size={20} />
                <span>Бесплатный возврат в течение 14 дней</span>
              </div>
              <div className={styles.benefitItem}>
                <ShieldCheck size={20} />
                <span>Оригинальный товар премиум качества</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};