import React from 'react';
import { Course } from '../types';
import { formatPrice } from '../utils/currency';
import { Star, Clock, Users, ShoppingCart, BookOpen } from 'lucide-react';

interface CourseCardProps {
  course: Course;
  onAddToCart: (course: Course) => void;
  onViewDetails: (course: Course) => void;
  onViewNotes: (course: Course) => void;
  isInCart: boolean;
  isPurchased: boolean;
}

export const CourseCard: React.FC<CourseCardProps> = ({ 
  course, 
  onAddToCart, 
  onViewDetails, 
  onViewNotes,
  isInCart,
  isPurchased
}) => {
  const discountPercentage = course.originalPrice 
    ? Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100)
    : 0;

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100">
      <div className="relative overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
            course.level === 'Beginner' ? 'bg-green-100 text-green-800' :
            course.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
            'bg-red-100 text-red-800'
          }`}>
            {course.level}
          </span>
        </div>
        {discountPercentage > 0 && (
          <div className="absolute top-4 right-4">
            <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
              {discountPercentage}% OFF
            </span>
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="mb-3">
          <span className="text-sm text-blue-600 font-medium">{course.category}</span>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {course.title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {course.description}
        </p>

        <div className="flex items-center gap-2 mb-4">
          <img
            src="public/images/blankperson.jpg"
            alt={course.instructor}
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="text-sm text-gray-700 font-medium">{course.instructor}</span>
        </div>

        <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="font-medium">{course.rating}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{course.studentsEnrolled.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{course.duration}</span>
          </div>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-gray-900">
              {formatPrice(course.price)}
            </span>
            {course.originalPrice && (
              <span className="text-lg text-gray-500 line-through">
                {formatPrice(course.originalPrice)}
              </span>
            )}
          </div>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => onViewDetails(course)}
            className="flex-1 px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium"
          >
            View Details
          </button>
          <button
            onClick={() => onViewNotes(course)}
            className={`px-4 py-2 border rounded-lg transition-colors font-medium flex items-center gap-1 ${
              isPurchased 
                ? 'border-green-600 text-green-600 hover:bg-green-50' 
                : 'border-gray-300 text-gray-400 cursor-not-allowed'
            }`}
            disabled={!isPurchased}
            title={isPurchased ? 'View Study Notes' : 'Purchase course to unlock notes'}
          >
            <BookOpen className="w-4 h-4" />
            {isPurchased ? 'Notes' : '🔒 Notes'}
          </button>
          {!isPurchased && (
            <button
              onClick={() => onAddToCart(course)}
              disabled={isInCart}
              className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 ${
                isInCart
                  ? 'bg-gray-100 text-gray-500 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              <ShoppingCart className="w-4 h-4" />
              {isInCart ? 'In Cart' : 'Add to Cart'}
            </button>
          )}
          {isPurchased && (
            <button
              className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg font-medium flex items-center justify-center gap-2"
              disabled
            >
              ✅ Purchased
            </button>
          )}
        </div>
      </div>
    </div>
  );
};