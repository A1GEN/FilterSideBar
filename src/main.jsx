import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// 1. Импортируем Provider из react-redux
import { Provider } from 'react-redux';

// 2. Импортируем твой созданный store
import { store } from './redux/store.js'; // Проверь правильность пути к файлу store.js

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 3. Оборачиваем App в Provider и передаем туда наш store */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);