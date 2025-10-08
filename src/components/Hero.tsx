import React, { useState, useRef, useEffect } from 'react';
import { Search, Users, Award, Play, Star } from 'lucide-react';

interface HeroProps {
  onSearch: (query: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchResults, setShowSearchResults] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSearchResults(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);



  return (
    <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white bg-opacity-10 rounded-full blur-xl"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-purple-400 bg-opacity-20 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-blue-400 bg-opacity-15 rounded-full blur-xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Master Programming
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Skills That Matter
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Learn from industry experts, build real projects, and advance your career with our 
              comprehensive programming courses designed for the modern developer.
            </p>
          </div>

         
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold mb-1">50K+</div>
              <div className="text-blue-200">Active Students</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Play className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold mb-1">100+</div>
              <div className="text-blue-200">Video Courses</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Star className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold mb-1">4.8</div>
              <div className="text-blue-200">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold mb-1">95%</div>
              <div className="text-blue-200">Success Rate</div>
            </div>
          </div>

          {/* Popular Topics */}
          <div className="flex flex-wrap justify-center gap-3">
            <span className="text-blue-200 text-lg font-medium mr-4">Popular:</span>
            {['React', 'Python', 'JavaScript', 'Machine Learning', 'Data Structures'].map((topic) => (
              <button
                key={topic}
                onClick={() => onSearch(topic)}
                className="px-4 py-2 bg-white bg-opacity-20 rounded-full text-white hover:bg-opacity-30 transition-all backdrop-blur-sm border border-white border-opacity-20"
              >
                {topic}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};