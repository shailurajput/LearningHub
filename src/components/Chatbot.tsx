import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Minimize2, Maximize2 } from 'lucide-react';
import { Course } from '../types';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
  suggestions?: string[];
}

interface ChatbotProps {
  courses: Course[];
}

export const Chatbot: React.FC<ChatbotProps> = ({ courses }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm your LearnHub AI assistant. I can help you find courses, answer programming questions, or provide learning guidance. What would you like to know?",
      isBot: true,
      timestamp: new Date(),
      suggestions: [
        "Show me Python courses",
        "What's the best course for beginners?",
        "Explain machine learning",
        "Help me choose a career path"
      ]
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateBotResponse = (userMessage: string): { text: string; suggestions?: string[] } => {
    const message = userMessage.toLowerCase();
    
    // Course search responses
    if (message.includes('python')) {
      const pythonCourses = courses.filter(course => 
        course.title.toLowerCase().includes('python') || 
        course.tags.some(tag => tag.toLowerCase().includes('python'))
      );
      return {
        text: `I found ${pythonCourses.length} Python courses for you! Here are some popular ones:\n\n${pythonCourses.slice(0, 3).map(course => `• ${course.title} by ${course.instructor} - ₹${course.price}`).join('\n')}\n\nWould you like more details about any of these courses?`,
        suggestions: ['Show Python course details', 'Compare Python courses', 'Python learning path', 'Python career opportunities']
      };
    }
    
    if (message.includes('javascript') || message.includes('js')) {
      const jsCourses = courses.filter(course => 
        course.title.toLowerCase().includes('javascript') || 
        course.tags.some(tag => tag.toLowerCase().includes('javascript'))
      );
      return {
        text: `Great choice! JavaScript is essential for web development. I found ${jsCourses.length} JavaScript courses:\n\n${jsCourses.slice(0, 3).map(course => `• ${course.title} by ${course.instructor} - ₹${course.price}`).join('\n')}\n\nJavaScript is perfect for both frontend and backend development!`,
        suggestions: ['JavaScript learning roadmap', 'Frontend vs Backend JS', 'JavaScript frameworks', 'JS project ideas']
      };
    }
    
    if (message.includes('react')) {
      const reactCourses = courses.filter(course => 
        course.title.toLowerCase().includes('react') || 
        course.tags.some(tag => tag.toLowerCase().includes('react'))
      );
      return {
        text: `React is an excellent choice for modern web development! Here are our React courses:\n\n${reactCourses.slice(0, 3).map(course => `• ${course.title} by ${course.instructor} - ₹${course.price}`).join('\n')}\n\nReact is used by Facebook, Netflix, and many top companies!`,
        suggestions: ['React vs Angular', 'React Native mobile apps', 'React job opportunities', 'React project ideas']
      };
    }
    
    if (message.includes('machine learning') || message.includes('ml')) {
      const mlCourses = courses.filter(course => 
        course.title.toLowerCase().includes('machine learning') || 
        course.category === 'Data Science'
      );
      return {
        text: `Machine Learning is the future! Here are our ML courses:\n\n${mlCourses.slice(0, 3).map(course => `• ${course.title} by ${course.instructor} - ₹${course.price}`).join('\n')}\n\nML skills are in high demand with average salaries of ₹15+ LPA!`,
        suggestions: ['ML career path', 'Prerequisites for ML', 'AI vs ML difference', 'ML project ideas']
      };
    }
    
    // Beginner guidance
    if (message.includes('beginner') || message.includes('start') || message.includes('new')) {
      const beginnerCourses = courses.filter(course => course.level === 'Beginner');
      return {
        text: `Perfect! Starting your programming journey is exciting. Here are our top beginner courses:\n\n${beginnerCourses.slice(0, 3).map(course => `• ${course.title} (${course.level}) - ₹${course.price}`).join('\n')}\n\nI recommend starting with Python - it's beginner-friendly and versatile!`,
        suggestions: ['Why start with Python?', 'Programming fundamentals', 'Create learning schedule', 'Beginner project ideas']
      };
    }
    
    // Career guidance
    if (message.includes('career') || message.includes('job') || message.includes('salary')) {
      return {
        text: `Great question! Programming offers excellent career opportunities:\n\n• Web Developer: ₹4-12 LPA\n• Data Scientist: ₹8-25 LPA\n• Mobile Developer: ₹5-15 LPA\n• Full Stack Developer: ₹6-20 LPA\n• ML Engineer: ₹10-30 LPA\n\nOur courses are designed to make you job-ready with real projects and certificates!`,
        suggestions: ['Web development career', 'Data science career', 'Mobile development career', 'Interview preparation']
      };
    }
    
    // Course comparison
    if (message.includes('compare') || message.includes('difference') || message.includes('vs')) {
      return {
        text: `I'd be happy to help you compare courses! Here are some popular comparisons:\n\n• Python vs JavaScript: Python is easier for beginners, JS is essential for web dev\n• Frontend vs Backend: Frontend focuses on user interface, Backend on server logic\n• Web vs Mobile: Web development has more opportunities, Mobile development is specialized\n\nWhat specific comparison would you like to know about?`,
        suggestions: ['Python vs JavaScript', 'Frontend vs Backend', 'Web vs Mobile development', 'Course difficulty levels']
      };
    }
    
    // Learning path guidance
    if (message.includes('roadmap') || message.includes('path') || message.includes('order')) {
      return {
        text: `Here's a recommended learning path for different goals:\n\n🌐 Web Development:\n1. HTML/CSS basics\n2. JavaScript fundamentals\n3. React framework\n4. Backend with Node.js\n\n🐍 Data Science:\n1. Python programming\n2. Data analysis libraries\n3. Machine learning\n4. Real projects\n\nWhich path interests you most?`,
        suggestions: ['Web development roadmap', 'Data science roadmap', 'Mobile development path', 'Full stack journey']
      };
    }
    
    // General programming questions
    if (message.includes('what is') || message.includes('explain')) {
      if (message.includes('programming')) {
        return {
          text: `Programming is the process of creating instructions for computers to solve problems and automate tasks. It involves:\n\n• Writing code in programming languages\n• Problem-solving and logical thinking\n• Building applications, websites, and systems\n• Continuous learning and adaptation\n\nIt's a creative and rewarding field with endless possibilities!`,
          suggestions: ['Best programming language to start', 'Programming vs coding', 'How long to learn programming', 'Programming career benefits']
        };
      }
    }
    
    // Default responses
    const defaultResponses = [
      {
        text: `I'd be happy to help you with that! I can assist you with:\n\n• Finding the right courses for your goals\n• Explaining programming concepts\n• Career guidance and roadmaps\n• Course comparisons and recommendations\n\nWhat specific topic would you like to explore?`,
        suggestions: ['Show all courses', 'Career guidance', 'Learning roadmaps', 'Programming basics']
      },
      {
        text: `That's an interesting question! While I may not have specific information about that topic, I can help you with:\n\n• Course recommendations based on your interests\n• Programming language comparisons\n• Career advice in tech\n• Learning strategies and tips\n\nHow can I assist you with your learning journey?`,
        suggestions: ['Browse courses by category', 'Get career advice', 'Compare programming languages', 'Learning tips']
      }
    ];
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const botResponse = generateBotResponse(inputText);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse.text,
        isBot: true,
        timestamp: new Date(),
        suggestions: botResponse.suggestions
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputText(suggestion);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-50 animate-pulse hover:animate-none"
        >
          <MessageCircle className="w-8 h-8" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className={`fixed bottom-6 right-6 bg-white rounded-2xl shadow-2xl border border-gray-200 z-50 transition-all duration-300 ${
          isMinimized ? 'w-80 h-16' : 'w-96 h-[600px]'
        }`}>
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold">LearnHub AI Assistant</h3>
                <p className="text-xs text-blue-100">Online • Ready to help</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors"
              >
                {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              {/* Messages */}
              <div className="flex-1 p-4 overflow-y-auto h-96 bg-gray-50">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div key={message.id} className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}>
                      <div className={`flex items-start gap-2 max-w-[80%] ${message.isBot ? 'flex-row' : 'flex-row-reverse'}`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                          message.isBot ? 'bg-blue-100 text-blue-600' : 'bg-purple-100 text-purple-600'
                        }`}>
                          {message.isBot ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
                        </div>
                        <div className={`rounded-2xl p-3 ${
                          message.isBot 
                            ? 'bg-white text-gray-800 border border-gray-200' 
                            : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                        }`}>
                          <p className="text-sm whitespace-pre-line">{message.text}</p>
                          <p className="text-xs opacity-70 mt-1">
                            {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Suggestions */}
                  {messages.length > 0 && messages[messages.length - 1].suggestions && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {messages[messages.length - 1].suggestions!.map((suggestion, index) => (
                        <button
                          key={index}
                          onClick={() => handleSuggestionClick(suggestion)}
                          className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs hover:bg-blue-200 transition-colors"
                        >
                          {suggestion}
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Typing Indicator */}
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                          <Bot className="w-4 h-4" />
                        </div>
                        <div className="bg-white border border-gray-200 rounded-2xl p-3">
                          <div className="flex gap-1">
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="p-4 border-t border-gray-200">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask me anything about courses, programming, or careers..."
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={!inputText.trim() || isTyping}
                    className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};