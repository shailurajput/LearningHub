import React, { useState } from 'react';
import { Mail, Send, CheckCircle } from 'lucide-react';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      alert('Please enter a valid email address');
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail('');
    }, 1500);
  };

  if (isSubscribed) {
    return (
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">
            Welcome to the LearnHub Community!
          </h2>
          <p className="text-xl text-green-100 mb-8">
            You're now subscribed to our newsletter. Get ready for exclusive content, course updates, and learning tips!
          </p>
          <button
            onClick={() => setIsSubscribed(false)}
            className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Subscribe Another Email
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-purple-600 to-pink-600 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
          <Mail className="w-12 h-12 text-white" />
        </div>
        
        <h2 className="text-4xl font-bold text-white mb-4">
          Stay Updated with LearnHub
        </h2>
        <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
          Get the latest course updates, exclusive discounts, programming tips, and career guidance 
          delivered straight to your inbox. Join 50,000+ developers!
        </p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full pl-10 pr-4 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-30 text-lg"
                required
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {isLoading ? (
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-purple-600"></div>
              ) : (
                <Send className="w-5 h-5" />
              )}
              {isLoading ? 'Subscribing...' : 'Subscribe'}
            </button>
          </div>
        </form>

        <div className="mt-8 flex flex-wrap justify-center gap-6 text-purple-100">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5" />
            <span>Weekly programming tips</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5" />
            <span>Exclusive course discounts</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5" />
            <span>Career guidance</span>
          </div>
        </div>

        <p className="text-purple-200 text-sm mt-6">
          No spam, unsubscribe at any time. We respect your privacy.
        </p>
      </div>
    </div>
  );
};