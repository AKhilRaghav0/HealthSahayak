import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faTimes } from '@fortawesome/free-solid-svg-icons';

const HealthcareChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const closeChat = () => {
    setIsOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      setMessages([...messages, { text: message, sender: 'user' }]);
      setMessage('');
      setTimeout(() => {
        setMessages(prev => [...prev, { 
          text: "Thank you for your message. How can I help you today?", 
          sender: 'bot' 
        }]);
      }, 1000);
    }
  };

  return (
    <div className="chatbot-container">
      {/* Toggle Button */}
      <button
        className="btn btn-primary rounded-circle position-fixed"
        style={{
          bottom: '20px',
          right: '20px',
          width: '60px',
          height: '60px',
          zIndex: 1000
        }}
        onClick={toggleChat}
      >
        <FontAwesomeIcon icon={faComment} />
      </button>

      {/* Chat Window */}
      <div 
        className={`position-fixed bg-white rounded shadow ${isOpen ? 'd-flex' : 'd-none'}`}
        style={{
          bottom: '100px',
          right: '20px',
          width: '300px',
          height: '400px',
          flexDirection: 'column',
          zIndex: 1000
        }}
      >
        {/* Header with Close Button */}
        <div className="bg-primary text-white p-3 d-flex justify-content-between align-items-center">
          <span className="fw-bold">HealthCare Assistant</span>
          <button 
            className="btn btn-link text-white p-0 border-0"
            onClick={closeChat}
            style={{ fontSize: '1.2rem' }}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>

        {/* Messages Area */}
        <div className="flex-grow-1 p-3 overflow-auto">
          {messages.map((msg, index) => (
            <div 
              key={index} 
              className={`mb-2 ${msg.sender === 'user' ? 'text-end' : ''}`}
            >
              <span className={`d-inline-block p-2 rounded ${
                msg.sender === 'user' 
                  ? 'bg-primary text-white' 
                  : 'bg-light'
              }`}>
                {msg.text}
              </span>
            </div>
          ))}
        </div>

        {/* Input Area */}
        <form onSubmit={handleSubmit} className="p-3 border-top">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Type your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button type="submit" className="btn btn-primary">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HealthcareChatbot;