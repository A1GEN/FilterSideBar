import { createSlice } from '@reduxjs/toolkit';

// Начальное состояние корзины
const initialState = {
  items: [], // Здесь будут храниться объекты товаров: { id, title, price, image, size, quantity }
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // 1. Добавление товара в корзину
    addToCart: (state, action) => {
      const { id, size, quantity } = action.payload;
      
      // Ищем, есть ли уже ТОЧНО ТАКОЙ ЖЕ товар с ТАКИМ ЖЕ размером в корзине
      const existingItem = state.items.find(
        (item) => item.id === id && item.size === size
      );

      if (existingItem) {
        // Если нашли, просто увеличиваем его количество
        existingItem.quantity += quantity || 1;
      } else {
        // Если такого товара еще нет, добавляем его как новый элемент
        state.items.push({ ...action.payload, quantity: quantity || 1 });
      }
    },

    // 2. Удаление конкретной позиции (учитывая ID и размер)
    removeFromCart: (state, action) => {
      const { id, size } = action.payload;
      state.items = state.items.filter(
        (item) => !(item.id === id && item.size === size)
      );
    },

    // 3. Изменение количества товара (+1 или -1)
    updateQuantity: (state, action) => {
      const { id, size, delta } = action.payload; // delta: 1 или -1
      const item = state.items.find(
        (item) => item.id === id && item.size === size
      );

      if (item) {
        item.quantity += delta;
        // Если количество опустилось до 0, можно либо оставить 1, либо удалить. 
        // Сделаем ограничение: минимум 1 единица товара.
        if (item.quantity < 1) {
          item.quantity = 1;
        }
      }
    },

    // 4. Полная очистка корзины (после успешного оформления заказа)
    clearCart: (state) => {
      state.items = [];
    }
  }
});

// Экспортируем экшены для вызова через useDispatch
export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;

// Экспортируем селекторы для быстрого доступа к данным через useSelector
export const selectCartItems = (state) => state.cart.items;

// Селектор общего количества вещей в корзине (для счетчика в Navbar)
export const selectCartTotalQuantity = (state) => 
  state.cart.items.reduce((total, item) => total + item.quantity, 0);

// Селектор итоговой суммы всей корзины
export const selectCartTotalPrice = (state) => 
  state.cart.items.reduce((total, item) => total + item.price * item.quantity, 0);

export default cartSlice.reducer;