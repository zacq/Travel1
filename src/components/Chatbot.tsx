import { useState, useEffect, useRef } from 'react';
import { ChatBubbleLeftRightIcon, XMarkIcon, PaperAirplaneIcon, UserCircleIcon } from '@heroicons/react/24/outline';

// Message type definition
type Message = {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
};

// FAQ responses for common travel questions
const faqResponses: Record<string, string[]> = {
  'destinations': [
    "We offer adventures to amazing destinations like Patagonia, Iceland, New Zealand, and the Swiss Alps.",
    "Our most popular destinations include Bali, Costa Rica, and the Norwegian Fjords.",
    "Looking for something off the beaten path? Consider our tours to Mongolia or Madagascar!"
  ],
  'activities': [
    "We offer hiking, mountain biking, kayaking, rock climbing, and many more adventure activities.",
    "Our most popular activities include white water rafting, zip-lining, and guided hiking tours.",
    "For extreme adventure seekers, we also offer paragliding, ice climbing, and multi-day wilderness expeditions."
  ],
  'pricing': [
    "Our adventure packages start at $1,200 for weekend trips and range up to $5,000 for premium two-week expeditions.",
    "All our prices include accommodation, guides, equipment, and most meals.",
    "We offer a 10% discount for early bookings made 6 months in advance!"
  ],
  'booking': [
    "You can book directly through our website or contact our team at bookings@tundatravels.com.",
    "To secure your booking, we require a 20% deposit, with the balance due 60 days before departure.",
    "We recommend booking at least 3 months in advance for popular destinations during peak season."
  ],
  'default': [
    "Thanks for your message! How can I help you plan your next adventure?",
    "I'd be happy to assist with any questions about our destinations or activities.",
    "Feel free to ask about our booking process, pricing, or adventure packages!"
  ]
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ text: string; isUser: boolean }>>([
    { text: "Hello! How can I help you plan your next adventure?", isUser: false }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    // Create and add user message
    const userMessage: Message = {
      id: generateId(),
      text: inputMessage,
      isUser: true,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);

    // Clear input and show typing indicator
    setInputMessage('');
    setIsTyping(true);

    // Generate intelligent response based on keywords
    const response = generateResponse(inputMessage);

    // Simulate typing delay (between 1-2 seconds)
    const typingDelay = Math.floor(Math.random() * 1000) + 1000;

    setTimeout(() => {
      setIsTyping(false);

      // Add bot response
      const botMessage: Message = {
        id: generateId(),
        text: response,
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    }, typingDelay);
  };

  const generateResponse = (userInput: string) => {
    // Convert to lowercase for easier matching
    const input = userInput.toLowerCase();

    // Check for keywords and return appropriate responses
    if (input.includes('hello') || input.includes('hi') || input.includes('hey')) {
      return "Hello there! How can I help with your travel plans today?";
    } else if (input.includes('destination') || input.includes('where') || input.includes('place') || input.includes('country')) {
      return getRandomResponse('destinations');
    } else if (input.includes('activity') || input.includes('adventure') || input.includes('do') || input.includes('experience')) {
      return getRandomResponse('activities');
    } else if (input.includes('price') || input.includes('cost') || input.includes('expensive') || input.includes('cheap')) {
      return getRandomResponse('pricing');
    } else if (input.includes('book') || input.includes('reserve') || input.includes('payment') || input.includes('deposit')) {
      return getRandomResponse('booking');
    } else if (input.includes('thank')) {
      return "You're welcome! Is there anything else I can help you with?";
    } else if (input.includes('bye') || input.includes('goodbye')) {
      return "Thank you for chatting with us! Feel free to return if you have more questions. Happy travels!";
    } else {
      return getRandomResponse('default');
    }
  };

  const getRandomResponse = (category: string) => {
    const responses = faqResponses[category] || faqResponses['default'];
    const randomIndex = Math.floor(Math.random() * responses.length);
    return responses[randomIndex];
  };

  const clearChat = () => {
    localStorage.removeItem('chatMessages');
    setInitialMessage();
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${
          isOpen ? 'hidden' : 'flex'
        } items-center justify-center w-14 h-14 rounded-full bg-primary text-white shadow-lg hover:bg-primary/90 transition-all duration-300`}
      >
        <ChatBubbleLeftRightIcon className="w-6 h-6" />
      </button>

      {/* Chat Window */}
      <div
        className={`${
          isOpen ? 'flex' : 'hidden'
        } flex-col bg-white rounded-lg shadow-xl w-80 h-96 overflow-hidden`}
      >
        {/* Header */}
        <div className="flex items-center justify-between bg-primary text-white p-4">
          <h3 className="font-semibold">Travel Assistant</h3>
          <div className="flex items-center space-x-2">
            <button
              onClick={clearChat}
              className="text-white hover:text-gray-200 text-xs"
              title="Clear chat history"
            >
              Clear
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
            >
              {!message.isUser && (
                <div className="flex-shrink-0 mr-2">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">
                    <span className="text-xs font-bold">TT</span>
                  </div>
                </div>
              )}
              <div className="flex flex-col">
                <div
                  className={`max-w-[220px] rounded-lg p-3 ${
                    message.isUser
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {message.text}
                </div>
                <span className="text-xs text-gray-500 mt-1 self-end">
                  {formatTime(message.timestamp)}
                </span>
              </div>
              {message.isUser && (
                <div className="flex-shrink-0 ml-2">
                  <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
                    <UserCircleIcon className="w-8 h-8 text-gray-600" />
                  </div>
                </div>
              )}
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="flex-shrink-0 mr-2">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">
                  <span className="text-xs font-bold">TT</span>
                </div>
              </div>
              <div className="bg-gray-100 text-gray-800 rounded-lg p-3 flex space-x-1">
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <form onSubmit={handleSendMessage} className="border-t p-4">
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              type="submit"
              className="bg-primary text-white rounded-full p-2 hover:bg-primary/90 transition-colors"
            >
              <PaperAirplaneIcon className="w-5 h-5" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}