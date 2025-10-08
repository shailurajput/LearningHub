import React from 'react';
import { CartItem } from '../types';
import { formatPrice } from '../utils/currency';
import { X, Trash2, ShoppingBag } from 'lucide-react';

interface CartProps {
  cartItems: CartItem[];
  onClose: () => void;
  onRemoveItem: (courseId: string) => void;
  onCheckout: () => void;
}

export const Cart: React.FC<CartProps> = ({ cartItems, onClose, onRemoveItem, onCheckout }) => {
  const total = cartItems.reduce((sum, item) => sum + item.course.price, 0);
  const originalTotal = cartItems.reduce((sum, item) => sum + (item.course.originalPrice || item.course.price), 0);
  const savings = originalTotal - total;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">Shopping Cart</h2>
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm font-medium">
              {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>

        <div className="p-6">
          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingBag className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Your cart is empty</h3>
              <p className="text-gray-600">Browse our courses and add them to your cart!</p>
            </div>
          ) : (
            <>
              <div className="space-y-4 mb-6">
                {cartItems.map((item) => (
                  <div key={item.courseId} className="flex gap-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <img
                      src={item.course.image}
                      alt={item.course.title}
                      className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2">
                        {item.course.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">by {item.course.instructor}</p>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-gray-900">
                          {formatPrice(item.course.price)}
                        </span>
                        {item.course.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">
                            {formatPrice(item.course.originalPrice)}
                          </span>
                        )}
                      </div>
                    </div>
                    <button
                      onClick={() => onRemoveItem(item.courseId)}
                      className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 pt-6">
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal:</span>
                    <span>{formatPrice(originalTotal)}</span>
                  </div>
                  {savings > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span>Savings:</span>
                      <span>-{formatPrice(savings)}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-xl font-bold text-gray-900 pt-2 border-t border-gray-200">
                    <span>Total:</span>
                    <span>{formatPrice(total)}</span>
                  </div>
                </div>

                <button
                  onClick={onCheckout}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all font-semibold text-lg shadow-lg hover:shadow-xl"
                >
                  Proceed to Checkout
                </button>
                
                <p className="text-center text-sm text-gray-500 mt-4">
                  30-day money-back guarantee on all courses
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};