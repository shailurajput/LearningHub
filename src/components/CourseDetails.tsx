import React from 'react';
import { Course } from '../types';
import { formatPrice } from '../utils/currency';
import { X, Star, Clock, Users, CheckCircle, Play, ShoppingCart, BookOpen } from 'lucide-react';

interface CourseDetailsProps {
  course: Course;
  onClose: () => void;
  onAddToCart: (course: Course) => void;
  onViewNotes: (course: Course) => void;
  isInCart: boolean;
  isPurchased?: boolean;
}

export const CourseDetails: React.FC<CourseDetailsProps> = ({ 
  course, 
  onClose, 
  onAddToCart, 
  onViewNotes,
  isInCart,
  isPurchased = false
}) => {
  const discountPercentage = course.originalPrice 
    ? Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100)
    : 0;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">Course Details</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-sm text-blue-600 font-medium">{course.category}</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    course.level === 'Beginner' ? 'bg-green-100 text-green-800' :
                    course.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {course.level}
                  </span>
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">{course.title}</h1>
                <p className="text-gray-600 text-lg leading-relaxed">{course.description}</p>
              </div>

              <div className="flex items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="font-medium">{course.rating}</span>
                  <span>({course.studentsEnrolled.toLocaleString()} students)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>{course.duration}</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <img
                  src="public/images/blankperson.jpg"
                  alt={course.instructor}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-900">{course.instructor}</p>
                  <p className="text-sm text-gray-600">Course Instructor</p>
                </div>
              </div>

              {/* What You'll Learn */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">What you'll learn</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {course.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Course Curriculum */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Course Curriculum</h3>
                <div className="space-y-3">
                  {course.curriculum.map((module, index) => (
                    <div key={module.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold">
                            {index + 1}
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">{module.title}</h4>
                            <p className="text-sm text-gray-600">
                              {module.lessons} lessons • {module.duration}
                            </p>
                          </div>
                        </div>
                        <Play className="w-5 h-5 text-gray-400" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-6">
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-40 object-cover rounded-lg mb-4"
                  />
                  
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-3xl font-bold text-gray-900">
                        {formatPrice(course.price)}
                      </span>
                      {course.originalPrice && (
                        <>
                          <span className="text-xl text-gray-500 line-through">
                            {formatPrice(course.originalPrice)}
                          </span>
                          <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                            {discountPercentage}% OFF
                          </span>
                        </>
                      )}
                    </div>
                    <p className="text-sm text-gray-600">30-day money-back guarantee</p>
                  </div>

                  <button
                    onClick={() => onAddToCart(course)}
                    disabled={isInCart}
                    className={`w-full px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 mb-4 ${
                      isInCart
                        ? 'bg-gray-100 text-gray-500 cursor-not-allowed'
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}
                  >
                    <ShoppingCart className="w-5 h-5" />
                    {isInCart ? 'Already in Cart' : 'Add to Cart'}
                  </button>
                
                <button
                  onClick={() => onViewNotes(course)}
                  className={`w-full px-6 py-3 rounded-lg transition-colors font-semibold flex items-center justify-center gap-2 mb-4 ${
                    isPurchased 
                      ? 'bg-green-600 text-white hover:bg-green-700' 
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                  disabled={!isPurchased}
                  title={isPurchased ? 'View Study Notes' : 'Purchase course to unlock notes'}
                >
                  <BookOpen className="w-5 h-5" />
                  {isPurchased ? 'View Study Notes' : '🔒 Notes Locked'}
                </button>
                
                {isPurchased && (
                  <div className="w-full px-6 py-3 bg-green-600 text-white rounded-lg font-semibold flex items-center justify-center gap-2 mb-4">
                    ✅ Course Purchased
                  </div>
                )}

                  <div className="space-y-3 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Duration</span>
                      <span className="font-medium">{course.duration}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Students</span>
                      <span className="font-medium">{course.studentsEnrolled.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Level</span>
                      <span className="font-medium">{course.level}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Modules</span>
                      <span className="font-medium">{course.curriculum.length}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};