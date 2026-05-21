import styles from './ChatMessage.module.css';

export const ChatMessage = ({ message, isOwn }) => {
  const { text, timestamp, senderName } = message;

  // Форматирование времени (например, "14:32")
  const formatTime = (time) => {
    if (!time) return '';
    const date = new Date(time);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className={`${styles.messageWrapper} ${isOwn ? styles.own : styles.incoming}`}>
      {/* Имя отправителя над сообщением (только для поддержки) */}
      {!isOwn && <span className={styles.senderName}>{senderName || 'Поддержка'}</span>}
      
      <div className={styles.bubbleContainer}>
        <div className={styles.bubble}>
          <p className={styles.text}>{text}</p>
          <span className={styles.time}>{formatTime(timestamp)}</span>
        </div>
      </div>
    </div>
  );
};