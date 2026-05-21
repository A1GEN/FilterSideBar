import { useState, useRef } from 'react';
import { Camera } from 'lucide-react';
import styles from './UserAvatar.module.css';

export const UserAvatar = ({ src, name = 'Пользователь', size = 'medium', isEditable = false, onImageChange }) => {
  const [avatarSrc, setAvatarSrc] = useState(src);
  const fileInputRef = useRef(null);

  // Получаем первую букву имени для заглушки
  const getInitials = (name) => {
    return name ? name.trim().charAt(0).toUpperCase() : 'U';
  };

  const handleAvatarClick = () => {
    if (isEditable && fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setAvatarSrc(imageUrl); // Локально обновляем превью
      
      if (onImageChange) {
        onImageChange(file); // Передаем файл родителю для загрузки в базу (например, Firebase/Supabase)
      }
    }
  };

  // Динамические размеры аватара
  const sizeClass = styles[size] || styles.medium;

  return (
    <div 
      className={`${styles.avatarContainer} ${sizeClass} ${isEditable ? styles.editable : ''}`}
      onClick={handleAvatarClick}
    >
      {avatarSrc ? (
        <img src={avatarSrc} alt={name} className={styles.image} />
      ) : (
        <div className={styles.fallback}>
          {getInitials(name)}
        </div>
      )}

      {/* Оверлей с иконкой камеры при редактировании */}
      {isEditable && (
        <div className={styles.overlay}>
          <Camera size={18} className={styles.cameraIcon} />
          <input 
            type="file" 
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/*"
            className={styles.hiddenInput}
          />
        </div>
      )}
    </div>
  );
};