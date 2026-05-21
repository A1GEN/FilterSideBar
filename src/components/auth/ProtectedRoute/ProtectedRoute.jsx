import { Navigate, useLocation } from 'react-router-dom';

export const ProtectedRoute = ({ children }) => {
  const location = useLocation();

  // Временная проверка авторизации (через LocalStorage)
  // Когда допишем Redux, заменим это на получение юзера из стора:
  // const { user } = useSelector((state) => state.user);
  const isAuthenticated = localStorage.getItem('userToken'); 

  if (!isAuthenticated) {
    // replace удаляет эту страницу из истории, чтобы пользователь не вернулся назад кнопкой "Назад"
    // state сохраняет страницу, на которую он хотел зайти, чтобы вернуть его туда после логина
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
};