import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import userReducer from './userSlice';
import productReducer from './productSlice'; // Убедись, что файл называется именно productSlice.js

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
    products: productReducer, // Вот этот ключ "products" теперь точно на месте!
  },
});