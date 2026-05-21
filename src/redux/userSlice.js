import { createSlice } from '@reduxjs/toolkit';

// Начальное состояние профиля пользователя
const initialState = {
  userInfo: null,      // Здесь будут объект: { id, name, email, avatarUrl, phone, city }
  token: null,         // JWT-токен сессии авторизации
  isAuthenticated: false, // Флаг: вошел ли пользователь в аккаунт
  isLoading: false,    // Индикатор отправки запросов (логин, регистрация, обновление)
  error: null,         // Текст ошибки от сервера (если запрос упал)
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // 1. Старт процесса авторизации/загрузки (включаем спиннер)
    userActionStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },

    // 2. Успешный вход или регистрация
    loginSuccess: (state, action) => {
      state.isLoading = false;
      state.userInfo = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
      state.error = null;
    },

    // 3. Ошибка при выполнении любого запроса (вход, обновление, регистрация)
    userActionFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload; // Записываем текст ошибки
    },

    // 4. Обновление данных профиля (когда Арген меняет имя, телефон или аватар)
    updateProfileSuccess: (state, action) => {
      state.isLoading = false;
      state.userInfo = { ...state.userInfo, ...action.payload };
      state.error = null;
    },

    // 5. Выход из аккаунта (очищаем все данные пользователя)
    logout: (state) => {
      state.userInfo = null;
      state.token = null;
      state.isAuthenticated = false;
      state.isLoading = false;
      state.error = null;
    },

    // 6. Сброс текста ошибки (полезно при закрытии модальных окон или переходе между страницами)
    clearUserError: (state) => {
      state.error = null;
    }
  }
});

// Экспортируем экшены для отправки (dispatch)
export const { 
  userActionStart, 
  loginSuccess, 
  userActionFailure, 
  updateProfileSuccess, 
  logout,
  clearUserError
} = userSlice.actions;

// Экспортируем удобные селекторы для получения данных в компонентах через useSelector
export const selectUser = (state) => state.user.userInfo;
export const selectIsAuthenticated = (state) => state.user.isAuthenticated;
export const selectUserLoading = (state) => state.user.isLoading;
export const selectUserError = (state) => state.user.error;

export default userSlice.reducer;