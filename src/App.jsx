import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Импортируем общий макет (шапку сайта)
import { Navbar } from './components/layout/Navbar/Navbar'; 

// Импортируем страницы по новой профессиональной структуре папок
import { Home } from './pages/Home/Home';
import { Catalog } from './pages/Catalog/Catalog';
import { ProductDetail } from './pages/ProductDetail/ProductDetail';
import { CartPage } from './pages/CartPage/CartPage';
import { ProfilePage } from './pages/ProfilePage/ProfilePage';
import { NotFound } from './pages/NotFound/NotFound';

// Глобальные стили приложения
import './App.css';

function App() {
  return (
    <Router>
      {/* Шапка Navbar рендерится всегда, на любой странице */}
      <Navbar />
      
      {/* Основной контейнер для контента страниц */}
      <main className="main-content">
        <Routes>
          {/* Главная страница */}
          <Route path="/" element={<Home />} />
          
          {/* Каталог товаров с фильтрами и поиском */}
          <Route path="/catalog" element={<Catalog />} />
          
          {/* Детальная карточка конкретного товара по его ID */}
          <Route path="/product/:id" element={<ProductDetail />} />
          
          {/* Страница корзины и управления покупками */}
          <Route path="/cart" element={<CartPage />} />
          
          {/* Личный кабинет пользователя */}
          <Route path="/profile" element={<ProfilePage />} />
          
          {/* Заглушка 404, если пользователь ввёл несуществующий адрес */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;