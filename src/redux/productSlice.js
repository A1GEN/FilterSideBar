import { createSlice } from '@reduxjs/toolkit';

const initialItems = [
  { id: 1, title: 'Удлиненный плащ "Shadow" Waterproof', price: 145, oldPrice: 190, category: 'Верхняя одежда', rating: 4.8, image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600', sizes: ['S', 'M', 'L'] },
  { id: 2, title: 'Базовый Свитшот Минимализм', price: 45, category: 'Худи и Свитшоты', rating: 4.6, image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600', sizes: ['XS', 'S', 'M'] },
  { id: 3, title: 'Классические брюки чинос', price: 65, oldPrice: 85, category: 'Брюки и Шорты', rating: 4.7, image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600', sizes: ['M', 'L', 'XL'] },
  { id: 4, title: 'Кожаная куртка-байкер', price: 180, category: 'Верхняя одежда', rating: 4.9, image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600', sizes: ['S', 'M', 'L'] },
  { id: 5, title: 'Худи Оверсайз "Lumina Heavy"', price: 55, category: 'Худи и Свитшоты', rating: 4.5, image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600', sizes: ['S', 'M', 'L', 'XL'] },
  { id: 6, title: 'Ремень из натуральной кожи', price: 25, category: 'Аксессуары', rating: 4.4, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600', sizes: ['One Size'] }
];

const productSlice = createSlice({
  name: 'products',
  initialState: {
    items: initialItems,
    filteredItems: initialItems,
    selectedCategory: 'Все товары',
    maxPrice: 500,
    selectedSize: '', // Новое состояние для размера
    searchQuery: '',
    favorites: [] // Список избранного
  },
  reducers: {
    setCategory: (state, action) => {
      state.selectedCategory = action.payload;
      productSlice.caseReducers.applyFilters(state);
    },
    setMaxPrice: (state, action) => {
      state.maxPrice = action.payload;
      productSlice.caseReducers.applyFilters(state);
    },
    setSize: (state, action) => {
      // Если кликнули на уже выбранный размер — сбрасываем фильтр размера
      state.selectedSize = state.selectedSize === action.payload ? '' : action.payload;
      productSlice.caseReducers.applyFilters(state);
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
      productSlice.caseReducers.applyFilters(state);
    },
    toggleFavorite: (state, action) => {
      const productId = action.payload;
      if (state.favorites.includes(productId)) {
        state.favorites = state.favorites.filter(id => id !== productId);
      } else {
        state.favorites.push(productId);
      }
    },
    applyFilters: (state) => {
      state.filteredItems = state.items.filter(item => {
        const matchesCategory = state.selectedCategory === 'Все товары' || item.category === state.selectedCategory;
        const matchesPrice = item.price <= state.maxPrice;
        const matchesSearch = item.title.toLowerCase().includes(state.searchQuery.toLowerCase());
        const matchesSize = state.selectedSize === '' || item.sizes.includes(state.selectedSize) || item.sizes.includes('One Size');
        
        return matchesCategory && matchesPrice && matchesSearch && matchesSize;
      });
    }
  }
});

export const { setCategory, setMaxPrice, setSize, setSearchQuery, toggleFavorite } = productSlice.actions;

export const selectAllProducts = (state) => state.products.filteredItems;
export const selectCurrentCategory = (state) => state.products.selectedCategory;
export const selectMaxPrice = (state) => state.products.maxPrice;
export const selectSelectedSize = (state) => state.products.selectedSize;
export const selectFavorites = (state) => state.products.favorites;

export default productSlice.reducer;