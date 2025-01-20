import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faTimes } from '@fortawesome/free-solid-svg-icons';

const HealthcareChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  
  const responses = {
    "Hello": { text: "Hi! How can I help you today? 👋", suggestions: ["What can you do?", "Tell me about yourself", "Help me with a task"] },
    "What can you do?": { text: "I can help you with various tasks! Here are some examples:", suggestions: ["Technical support", "Learning resources", "General questions", "Product info"] },
    // Add other responses similarly...
    "Bye": { text: "Goodbye! Have a great day! 👋 Feel free to return if you need more help.", suggestions: ["Start new chat", "Rate experience", "Need help later"] }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen && messages.length === 0) {
      addMessage("Hello! How can I help you today? 👋", 'bot');
    }
  };

  const closeChat = () => setIsOpen(false);

  const addMessage = (text, sender) => {
    const newMessage = { text, sender };
    setMessages(prev => [...prev, newMessage]);

    if (sender === 'bot' && responses[text]) {
      const response = responses[text];
      response.suggestions.forEach(suggestion => {
        const suggestionMessage = { text: suggestion, sender: 'suggestion' };
        setMessages(prev => [...prev, suggestionMessage]);
      });
    }
  };

  const handleUserInput = (e) => {
    e.preventDefault();
    if (message.trim()) {
      addMessage(message, 'user');
      setMessage('');
      setTimeout(() => {
        const responseObj = responses[message];
        const response = responseObj ? responseObj.text : "I don't quite understand. Here are some things I can help with:";
        addMessage(response, 'bot');
        if (!responseObj) {
          addMessage("What can you do?", 'bot');
        }
      }, 500);
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
          width: '350px',
          height: '400px',
          flexDirection: 'column',
          zIndex: 1000
        }}
      >
        {/* Header with Close Button */}
        <div className="bg-primary text-white p-4 d-flex justify-content-between align-items-center">
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
        <div className="flex-grow-1 p-4 overflow-auto">
          {messages.map((msg, index) => (
            <div key={index} className={`mb-2 ${msg.sender === 'user' ? 'text-end' : ''}`}>
              <span className={`d-inline-block p-2 rounded ${
                msg.sender === 'user' 
                  ? 'bg-primary text-white' 
                  : msg.sender === 'bot' 
                    ? 'bg-light' 
                    : 'bg-secondary text-white'
              }`}>
                {msg.text}
              </span>
            </div>
          ))}
        </div>

        {/* Input Area */}
        <form onSubmit={handleUserInput} className="p-3 border-top">
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
