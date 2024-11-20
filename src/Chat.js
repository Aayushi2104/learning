// src/Chat.js
import React, { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: "You" }]);
      setInput("");
      setIsTyping(true);

      // Mock typing effect for the response message
      setTimeout(() => {
        setMessages((prev) => [...prev, { text: "This is an auto-reply.", sender: "Bot" }]);
        setIsTyping(false);
      }, 1000); // Adjust delay for typing effect
    }
  };

  return (
    <div className="flex flex-col h-full p-4 bg-gray-900 text-white">
      <div className="flex-grow overflow-y-auto mb-4 border border-gray-700 rounded-lg p-4">
        {messages.map((msg, index) => (
          <MessageBubble key={index} text={msg.text} sender={msg.sender} />
        ))}
        {isTyping && <TypingIndicator />}
      </div>
      <div className="flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          className="flex-grow px-4 py-2 rounded-l-lg bg-gray-800 outline-none"
        />
        <button
          onClick={handleSend}
          className="px-4 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600"
        >
          Send
        </button>
      </div>
    </div>
  );
};

// Message bubble with fade-in and slide-up animation
const MessageBubble = ({ text, sender }) => {
  const animationProps = useSpring({
    opacity: 1,
    transform: 'translateY(0px)',
    from: { opacity: 0, transform: 'translateY(20px)' },
    config: { tension: 200, friction: 20 },
  });

  return (
    <animated.div style={animationProps} className={`mb-2 ${sender === "You" ? "text-right" : "text-left"}`}>
      <span className={`inline-block px-4 py-2 rounded-lg ${sender === "You" ? "bg-blue-500" : "bg-gray-700"}`}>
        {text}
      </span>
    </animated.div>
  );
};

// Typing indicator animation
const TypingIndicator = () => {
  const typingDots = ["dot1", "dot2", "dot3"];
  return (
    <div className="text-left mb-2">
      <div className="inline-block px-4 py-2 bg-gray-700 rounded-lg flex space-x-1">
        {typingDots.map((dot, index) => (
          <span key={index} className={`w-2 h-2 bg-blue-400 rounded-full animate-bounce ${dot}`} />
        ))}
      </div>
    </div>
  );
};

export default Chat;
