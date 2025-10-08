import React, { useState } from 'react';
import { CartItem, PaymentMethod, PaymentDetails } from '../types';
import { formatPrice } from '../utils/currency';
import { X, CreditCard, Smartphone, Building, Lock } from 'lucide-react';

interface PaymentFormProps {
  cartItems: CartItem[];
  total: number;
  onClose: () => void;
  onPaymentSuccess: (orderId: string) => void;
}

const paymentMethods: PaymentMethod[] = [
  { id: 'card', type: 'card', name: 'Credit/Debit Card', icon: 'CreditCard' },
  { id: 'upi', type: 'upi', name: 'UPI Payment', icon: 'Smartphone' },
  { id: 'netbanking', type: 'netbanking', name: 'Net Banking', icon: 'Building' }
];

export const PaymentForm: React.FC<PaymentFormProps> = ({ 
  cartItems, 
  total, 
  onClose, 
  onPaymentSuccess 
}) => {
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod>(paymentMethods[0]);
  const [paymentDetails, setPaymentDetails] = useState<PaymentDetails>({});
  const [isProcessing, setIsProcessing] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateCardPayment = () => {
    const newErrors: { [key: string]: string } = {};
    
    if (!paymentDetails.cardNumber || paymentDetails.cardNumber.replace(/\s/g, '').length !== 16) {
      newErrors.cardNumber = 'Please enter a valid 16-digit card number';
    }
    
    if (!paymentDetails.expiryDate || !/^\d{2}\/\d{2}$/.test(paymentDetails.expiryDate)) {
      newErrors.expiryDate = 'Please enter expiry date in MM/YY format';
    }
    
    if (!paymentDetails.cvv || paymentDetails.cvv.length !== 3) {
      newErrors.cvv = 'Please enter a valid 3-digit CVV';
    }
    
    if (!paymentDetails.cardholderName || paymentDetails.cardholderName.trim().length < 2) {
      newErrors.cardholderName = 'Please enter cardholder name';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateUPIPayment = () => {
    const newErrors: { [key: string]: string } = {};
    
    if (!paymentDetails.upiId || !paymentDetails.upiId.includes('@')) {
      newErrors.upiId = 'Please enter a valid UPI ID';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateNetBankingPayment = () => {
    const newErrors: { [key: string]: string } = {};
    
    if (!paymentDetails.bankName) {
      newErrors.bankName = 'Please select your bank';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePayment = async () => {
    let isValid = false;
    
    switch (selectedMethod.type) {
      case 'card':
        isValid = validateCardPayment();
        break;
      case 'upi':
        isValid = validateUPIPayment();
        break;
      case 'netbanking':
        isValid = validateNetBankingPayment();
        break;
    }
    
    if (!isValid) return;
    
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      const orderId = `ORD-${Date.now()}`;
      setIsProcessing(false);
      onPaymentSuccess(orderId);
    }, 3000);
  };

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join(' ');
    } else {
      return v;
    }
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCardNumber(e.target.value);
    setPaymentDetails(prev => ({ ...prev, cardNumber: formatted }));
  };

  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length >= 2) {
      value = value.substring(0, 2) + '/' + value.substring(2, 4);
    }
    setPaymentDetails(prev => ({ ...prev, expiryDate: value }));
  };

  const getMethodIcon = (iconName: string) => {
    switch (iconName) {
      case 'CreditCard': return <CreditCard className="w-5 h-5" />;
      case 'Smartphone': return <Smartphone className="w-5 h-5" />;
      case 'Building': return <Building className="w-5 h-5" />;
      default: return <CreditCard className="w-5 h-5" />;
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-white bg-opacity-20 rounded-xl flex items-center justify-center">
              <Lock className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold">Secure Payment</h2>
          </div>
          <p className="text-green-100">Complete your course purchase</p>
        </div>

        <div className="p-6">
          {/* Order Summary */}
          <div className="bg-gray-50 rounded-xl p-6 mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h3>
            <div className="space-y-3 mb-4">
              {cartItems.map((item) => (
                <div key={item.courseId} className="flex justify-between items-center">
                  <div>
                    <p className="font-medium text-gray-900 truncate">{item.course.title}</p>
                    <p className="text-sm text-gray-600">by {item.course.instructor}</p>
                  </div>
                  <p className="font-semibold text-gray-900">{formatPrice(item.course.price)}</p>
                </div>
              ))}
            </div>
            <div className="border-t border-gray-200 pt-4">
              <div className="flex justify-between items-center text-xl font-bold text-gray-900">
                <span>Total Amount:</span>
                <span>{formatPrice(total)}</span>
              </div>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Method</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {paymentMethods.map((method) => (
                <button
                  key={method.id}
                  onClick={() => setSelectedMethod(method)}
                  className={`p-4 border-2 rounded-xl transition-all ${
                    selectedMethod.id === method.id
                      ? 'border-green-500 bg-green-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {getMethodIcon(method.icon)}
                    <span className="font-medium text-gray-900">{method.name}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Payment Details Form */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Details</h3>
            
            {selectedMethod.type === 'card' && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Card Number
                  </label>
                  <input
                    type="text"
                    value={paymentDetails.cardNumber || ''}
                    onChange={handleCardNumberChange}
                    placeholder="1234 5678 9012 3456"
                    maxLength={19}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all ${
                      errors.cardNumber 
                        ? 'border-red-300 focus:ring-red-500' 
                        : 'border-gray-300 focus:ring-green-500'
                    }`}
                  />
                  {errors.cardNumber && (
                    <p className="text-red-500 text-sm mt-1">{errors.cardNumber}</p>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      value={paymentDetails.expiryDate || ''}
                      onChange={handleExpiryChange}
                      placeholder="MM/YY"
                      maxLength={5}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all ${
                        errors.expiryDate 
                          ? 'border-red-300 focus:ring-red-500' 
                          : 'border-gray-300 focus:ring-green-500'
                      }`}
                    />
                    {errors.expiryDate && (
                      <p className="text-red-500 text-sm mt-1">{errors.expiryDate}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      CVV
                    </label>
                    <input
                      type="text"
                      value={paymentDetails.cvv || ''}
                      onChange={(e) => setPaymentDetails(prev => ({ 
                        ...prev, 
                        cvv: e.target.value.replace(/\D/g, '').substring(0, 3) 
                      }))}
                      placeholder="123"
                      maxLength={3}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all ${
                        errors.cvv 
                          ? 'border-red-300 focus:ring-red-500' 
                          : 'border-gray-300 focus:ring-green-500'
                      }`}
                    />
                    {errors.cvv && (
                      <p className="text-red-500 text-sm mt-1">{errors.cvv}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Cardholder Name
                  </label>
                  <input
                    type="text"
                    value={paymentDetails.cardholderName || ''}
                    onChange={(e) => setPaymentDetails(prev => ({ 
                      ...prev, 
                      cardholderName: e.target.value 
                    }))}
                    placeholder="John Doe"
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all ${
                      errors.cardholderName 
                        ? 'border-red-300 focus:ring-red-500' 
                        : 'border-gray-300 focus:ring-green-500'
                    }`}
                  />
                  {errors.cardholderName && (
                    <p className="text-red-500 text-sm mt-1">{errors.cardholderName}</p>
                  )}
                </div>
              </div>
            )}

            {selectedMethod.type === 'upi' && (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  UPI ID
                </label>
                <input
                  type="text"
                  value={paymentDetails.upiId || ''}
                  onChange={(e) => setPaymentDetails(prev => ({ 
                    ...prev, 
                    upiId: e.target.value 
                  }))}
                  placeholder="yourname@paytm"
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all ${
                    errors.upiId 
                      ? 'border-red-300 focus:ring-red-500' 
                      : 'border-gray-300 focus:ring-green-500'
                  }`}
                />
                {errors.upiId && (
                  <p className="text-red-500 text-sm mt-1">{errors.upiId}</p>
                )}
              </div>
            )}

            {selectedMethod.type === 'netbanking' && (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Select Bank
                </label>
                <select
                  value={paymentDetails.bankName || ''}
                  onChange={(e) => setPaymentDetails(prev => ({ 
                    ...prev, 
                    bankName: e.target.value 
                  }))}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all ${
                    errors.bankName 
                      ? 'border-red-300 focus:ring-red-500' 
                      : 'border-gray-300 focus:ring-green-500'
                  }`}
                >
                  <option value="">Choose your bank</option>
                  <option value="SBI">State Bank of India</option>
                  <option value="HDFC">HDFC Bank</option>
                  <option value="ICICI">ICICI Bank</option>
                  <option value="AXIS">Axis Bank</option>
                  <option value="KOTAK">Kotak Mahindra Bank</option>
                  <option value="PNB">Punjab National Bank</option>
                </select>
                {errors.bankName && (
                  <p className="text-red-500 text-sm mt-1">{errors.bankName}</p>
                )}
              </div>
            )}
          </div>

          {/* Security Notice */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <div className="flex items-center gap-2 text-blue-800">
              <Lock className="w-5 h-5" />
              <span className="font-medium">Secure Payment</span>
            </div>
            <p className="text-blue-700 text-sm mt-1">
              Your payment information is encrypted and secure. We never store your payment details.
            </p>
          </div>

          {/* Payment Button */}
          <button
            onClick={handlePayment}
            disabled={isProcessing}
            className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-4 px-6 rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isProcessing ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                Processing Payment...
              </>
            ) : (
              <>
                <Lock className="w-5 h-5" />
                Pay {formatPrice(total)}
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};