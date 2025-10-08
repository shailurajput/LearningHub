import React from 'react';
import { Code, Globe, Smartphone, Database, Brain } from 'lucide-react';

interface CategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const categories = [
  { id: 'all', name: 'All Courses', icon: Globe },
  { id: 'Programming', name: 'Programming', icon: Code },
  { id: 'Web Development', name: 'Web Development', icon: Globe },
  { id: 'Mobile Development', name: 'Mobile Development', icon: Smartphone },
  { id: 'Data Science', name: 'Data Science', icon: Database },
  { id: 'Machine Learning', name: 'Machine Learning', icon: Brain },
  { id: 'Core CS Subjects', name: 'Core CS Subjects', icon: Code },
];

export const CategoryFilter: React.FC<CategoryFilterProps> = ({ 
  selectedCategory, 
  onCategoryChange 
}) => {
  return (
    <div className="bg-white py-8 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Browse by Category</h2>
        <div className="flex flex-wrap gap-4">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => onCategoryChange(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Icon className="w-5 h-5" />
                {category.name}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};