import React from 'react';
import { CartItem } from '../types';
import { formatPrice } from '../utils/currency';
import { CheckCircle, Download, BookOpen, X } from 'lucide-react';

interface PaymentSuccessProps {
  orderId: string;
  cartItems: CartItem[];
  total: number;
  onClose: () => void;
}

export const PaymentSuccess: React.FC<PaymentSuccessProps> = ({ 
  orderId, 
  cartItems, 
  total, 
  onClose 
}) => {
  const handleDownloadReceipt = () => {
    // Simulate receipt download
    const receiptData = {
      orderId,
      items: cartItems.map(item => ({
        title: item.course.title,
        instructor: item.course.instructor,
        price: item.course.price
      })),
      total,
      date: new Date().toISOString()
    };
    
    const dataStr = JSON.stringify(receiptData, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = `LearnHub_Receipt_${orderId}.txt`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-8 text-white text-center relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-12 h-12 text-white" />
          </div>
          
          <h2 className="text-3xl font-bold mb-2">Payment Successful!</h2>
          <p className="text-green-100 text-lg">
            Your courses are now available in your account
          </p>
        </div>

        <div className="p-8">
          {/* Order Details */}
          <div className="bg-gray-50 rounded-xl p-6 mb-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Order Details</h3>
              <span className="text-sm text-gray-600">Order ID: {orderId}</span>
            </div>
            
            <div className="space-y-3 mb-4">
              {cartItems.map((item) => (
                <div key={item.courseId} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
                  <div className="flex items-center gap-3">
                    <img
                      src={item.course.image}
                      alt={item.course.title}
                      className="w-12 h-12 object-cover rounded-lg"
                    />
                    <div>
                      <p className="font-medium text-gray-900">{item.course.title}</p>
                      <p className="text-sm text-gray-600">by {item.course.instructor}</p>
                    </div>
                  </div>
                  <p className="font-semibold text-gray-900">{formatPrice(item.course.price)}</p>
                </div>
              ))}
            </div>
            
            <div className="border-t border-gray-200 pt-4">
              <div className="flex justify-between items-center text-xl font-bold text-gray-900">
                <span>Total Paid:</span>
                <span className="text-green-600">{formatPrice(total)}</span>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">What's Next?</h3>
            <div className="space-y-2 text-blue-800">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                <span>Access your courses immediately from your dashboard</span>
              </div>
              <div className="flex items-center gap-2">
                <Download className="w-4 h-4" />
                <span>Download course materials and certificates</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>Start learning at your own pace</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button
              onClick={handleDownloadReceipt}
              className="flex-1 bg-gray-100 text-gray-700 py-3 px-6 rounded-lg hover:bg-gray-200 transition-colors font-medium flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download Receipt
            </button>
            <button
              onClick={onClose}
              className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all font-medium flex items-center justify-center gap-2"
            >
              <BookOpen className="w-5 h-5" />
              Start Learning
            </button>
          </div>

          {/* Support Info */}
          <div className="text-center mt-6 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              Need help? Contact our support team at{' '}
              <a href="mailto:support@learnhub.com" className="text-blue-600 hover:text-blue-700">
                support@learnhub.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};