import styles from './Skeleton.module.css';

export const Skeleton = ({ 
  variant = 'text', // text | circle | rectangle
  width, 
  height, 
  className = '' 
}) => {
  const skeletonClass = `${styles.skeleton} ${styles[variant]} ${className}`;

  // Применяем инлайновые стили для кастомных размеров, если они переданы через пропсы
  const customStyles = {
    width: width || undefined,
    height: height || undefined,
  };

  return (
    <div 
      className={skeletonClass} 
      style={customStyles} 
      aria-hidden="true"
    />
  );
};