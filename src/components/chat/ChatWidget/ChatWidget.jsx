import { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';
import { ChatMessage } from '../ChatMessage/ChatMessage';
import styles from './ChatWidget.module.css';

export const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messageText, setMessageText] = useState('');
  
  // Временный массив сообщений для демонстрации верстки
  const [messages, setMessages] = useState([
    { id: 1, text: 'Здравствуйте! Я ваш ИИ-ассистент Lumina. Чем могу помочь вам сегодня?', timestamp: new Date().setMinutes(new Date().getMinutes() - 5), senderName: 'Lumina AI' },
    { id: 2, text: 'Привет! Есть ли у вас скидки на первую покупку?', timestamp: new Date().setMinutes(new Date().getMinutes() - 3), isOwn: true }
  ]);

  const chatEndRef = useRef(null);

  // Скролл вниз при добавлении нового сообщения
  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!messageText.trim()) return;

    const newMessage = {
      id: Date.now(),
      text: messageText,
      timestamp: Date.now(),
      isOwn: true
    };

    setMessages((prev) => [...prev, newMessage]);
    setMessageText('');

    // Эмуляция быстрого ответа поддержки через секунду
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          text: 'Отличный вопрос! Попробуйте ввести промокод LUMINA20 в корзине, чтобы получить скидку 20%.',
          timestamp: Date.now(),
          senderName: 'Lumina AI'
        }
      ]);
    }, 1000);
  };

  return (
    <div className={styles.widgetContainer}>
      {/* Окно чата */}
      {isOpen && (
        <div className={styles.chatWindow}>
          {/* Шапка чата */}
          <div className={styles.chatHeader}>
            <div className={styles.chatStatus}>
              <div className={styles.onlineBadge} />
              <div>
                <h4 className={styles.chatTitle}>Онлайн-поддержка</h4>
                <p className={styles.chatSubtitle}>Отвечаем мгновенно</p>
              </div>
            </div>
            <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
              <X size={18} />
            </button>
          </div>

          {/* Тело чата (сообщения) */}
          <div className={styles.chatBody}>
            {messages.map((msg) => (
              <ChatMessage key={msg.id} message={msg} isOwn={msg.isOwn} />
            ))}
            <div ref={chatEndRef} />
          </div>

          {/* Форма отправки */}
          <form onSubmit={handleSendMessage} className={styles.chatFooter}>
            <input
              type="text"
              placeholder="Напишите сообщение..."
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
              className={styles.chatInput}
            />
            <button type="submit" disabled={!messageText.trim()} className={styles.sendBtn}>
              <Send size={16} />
            </button>
          </form>
        </div>
      )}

      {/* Кнопка открытия/закрытия чата */}
      <button 
        className={`${styles.widgetBtn} ${isOpen ? styles.activeBtn : ''}`} 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Открыть чат поддержки"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>
    </div>
  );
};