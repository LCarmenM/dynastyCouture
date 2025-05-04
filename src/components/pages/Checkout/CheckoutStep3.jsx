import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../../hooks/useCart';

const CheckoutStep3 = () => {
  const navigate = useNavigate();
  const { cart, clearCart } = useCart();
  
  const [formData, setFormData] = useState({
    cardName: '',
    cardNumber: '',
    expirationMonth: '',
    expirationYear: '',
    cvv: ''
  });
  
  const [errors, setErrors] = useState({});
  
  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Format card number with spaces
    if (name === 'cardNumber') {
      const formatted = value.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim();
      setFormData(prev => ({ ...prev, [name]: formatted }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };
  
  // Form validation
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.cardName.trim()) newErrors.cardName = 'Name on card is required';
    
    if (!formData.cardNumber.trim()) {
      newErrors.cardNumber = 'Card number is required';
    } else if (formData.cardNumber.replace(/\s/g, '').length !== 16) {
      newErrors.cardNumber = 'Card number must be 16 digits';
    }
    
    if (!formData.expirationMonth) newErrors.expirationMonth = 'Month is required';
    if (!formData.expirationYear) newErrors.expirationYear = 'Year is required';
    
    if (!formData.cvv.trim()) {
      newErrors.cvv = 'CVV is required';
    } else if (formData.cvv.length < 3 || formData.cvv.length > 4) {
      newErrors.cvv = 'CVV must be 3 or 4 digits';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // In a real app, you would process payment
      console.log('Payment info:', formData);
      
      // Clear cart and navigate to confirmation
      clearCart();
      navigate('/checkout/complete');
    }
  };
  
  // Go back to shipping
  const handleBack = () => {
    navigate('/checkout/step-2');
  };
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Progress indicator - Visibility principle */}
        <div className="flex justify-between items-center mb-12">
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-primary-300 text-primary-800 flex items-center justify-center font-bold">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="mt-2 font-medium text-primary-500">Cart</p>
          </div>
          <div className="flex-1 h-1 bg-primary-800 mx-4"></div>
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-primary-300 text-primary-800 flex items-center justify-center font-bold">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="mt-2 font-medium text-primary-500">Shipping</p>
          </div>
          <div className="flex-1 h-1 bg-primary-800 mx-4"></div>
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-primary-800 text-white flex items-center justify-center font-bold">3</div>
            <p className="mt-2 font-medium text-primary-800">Payment</p>
          </div>
        </div>
        
        <h1 className="text-3xl font-serif font-bold text-primary-800 mb-8">Payment Information</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <form onSubmit={handleSubmit} className="p-6">
                {/* Payment method selection - simplified for Hick's Law */}
                <div className="mb-6">
                  <h2 className="text-xl font-medium text-primary-800 mb-4">Payment Method</h2>
                  <div className="flex flex-wrap gap-4">
                    <label className="flex items-center p-4 border border-primary-300 rounded-md cursor-pointer bg-primary-50">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="creditCard"
                        defaultChecked
                        className="h-4 w-4 text-primary-800 focus:ring-primary-500"
                      />
                      <span className="ml-2 font-medium">Credit Card</span>
                    </label>
                    
                    {/* Additional methods disabled to reduce choices (Hick's Law) */}
                    <label className="flex items-center p-4 border border-primary-200 rounded-md cursor-not-allowed bg-primary-100 opacity-60">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="paypal"
                        disabled
                        className="h-4 w-4 text-primary-800 focus:ring-primary-500"
                      />
                      <span className="ml-2 font-medium">PayPal</span>
                    </label>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name on Card */}
                  <div className="md:col-span-2">
                    <label htmlFor="cardName" className="block text-sm font-medium text-primary-700 mb-1">
                      Name on Card <span className="text-accent-light">*</span>
                    </label>
                    <input
                      type="text"
                      id="cardName"
                      name="cardName"
                      value={formData.cardName}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 border ${errors.cardName ? 'border-accent-light' : 'border-primary-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500`}
                    />
                    {errors.cardName && (
                      <p className="mt-1 text-sm text-accent-light">{errors.cardName}</p>
                    )}
                  </div>
                  
                  {/* Card Number */}
                  <div className="md:col-span-2">
                    <label htmlFor="cardNumber" className="block text-sm font-medium text-primary-700 mb-1">
                      Card Number <span className="text-accent-light">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="cardNumber"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleChange}
                        placeholder="1234 5678 9012 3456"
                        maxLength="19" // 16 digits + 3 spaces
                        className={`w-full px-3 py-2 border ${errors.cardNumber ? 'border-accent-light' : 'border-primary-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500`}
                      />
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex space-x-2">
                        <img src="/src/assets/images/visa.svg" alt="Visa" className="h-6" />
                        <img src="/src/assets/images/mastercard.svg" alt="Mastercard" className="h-6" />
                        <img src="/src/assets/images/amex.svg" alt="American Express" className="h-6" />
                      </div>
                    </div>
                    {errors.cardNumber && (
                      <p className="mt-1 text-sm text-accent-light">{errors.cardNumber}</p>
                    )}
                  </div>
                  
                  {/* Expiration Date */}
                  <div>
                    <label className="block text-sm font-medium text-primary-700 mb-1">
                      Expiration Date <span className="text-accent-light">*</span>
                    </label>
                    <div className="flex space-x-4">
                      <div className="w-1/2">
                        <select
                          name="expirationMonth"
                          value={formData.expirationMonth}
                          onChange={handleChange}
                          className={`w-full px-3 py-2 border ${errors.expirationMonth ? 'border-accent-light' : 'border-primary-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500`}
                        >
                          <option value="">Month</option>
                          {Array.from({ length: 12 }, (_, i) => {
                            const month = i + 1;
                            return (
                              <option key={month} value={month.toString().padStart(2, '0')}>
                                {month.toString().padStart(2, '0')}
                              </option>
                            );
                          })}
                        </select>
                        {errors.expirationMonth && (
                          <p className="mt-1 text-sm text-accent-light">{errors.expirationMonth}</p>
                        )}
                      </div>
                      <div className="w-1/2">
                        <select
                          name="expirationYear"
                          value={formData.expirationYear}
                          onChange={handleChange}
                          className={`w-full px-3 py-2 border ${errors.expirationYear ? 'border-accent-light' : 'border-primary-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500`}
                        >
                          <option value="">Year</option>
                          {Array.from({ length: 10 }, (_, i) => {
                            const year = new Date().getFullYear() + i;
                            return (
                              <option key={year} value={year}>
                                {year}
                              </option>
                            );
                          })}
                        </select>
                        {errors.expirationYear && (
                          <p className="mt-1 text-sm text-accent-light">{errors.expirationYear}</p>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {/* CVV */}
                  <div>
                    <label htmlFor="cvv" className="block text-sm font-medium text-primary-700 mb-1">
                      CVV <span className="text-accent-light">*</span>
                    </label>
                    <input
                      type="text"
                      id="cvv"
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleChange}
                      maxLength="4"
                      className={`w-full px-3 py-2 border ${errors.cvv ? 'border-accent-light' : 'border-primary-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500`}
                    />
                    {errors.cvv && (
                      <p className="mt-1 text-sm text-accent-light">{errors.cvv}</p>
                    )}
                    <p className="mt-1 text-xs text-primary-500">
                      3 or 4 digit code, usually on the back of your card
                    </p>
                  </div>
                </div>
                
                {/* Save for later checkbox - Hick's law, reducing future choices */}
                <div className="mt-6">
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="rounded border-primary-300 text-primary-800 focus:ring-primary-500"
                    />
                    <span className="ml-2 text-primary-700">Save this card for future purchases</span>
                  </label>
                </div>
              </form>
            </div>
          </div>
          
          {/* Order summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h2 className="text-xl font-bold text-primary-800 mb-6">Order Summary</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <p className="text-primary-600">Items ({cart.items.length})</p>
                    <p className="font-medium">${cart.subtotal.toFixed(2)}</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-primary-600">Shipping</p>
                    <p className="font-medium">
                      {cart.shipping === 0 ? 'Free' : `$${cart.shipping.toFixed(2)}`}
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-primary-600">Tax</p>
                    <p className="font-medium">${cart.tax.toFixed(2)}</p>
                  </div>
                  <div className="border-t border-primary-200 pt-4 flex justify-between">
                    <p className="font-bold text-primary-800">Total</p>
                    <p className="font-bold text-primary-800">${cart.total.toFixed(2)}</p>
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  <button 
                    type="button"
                    onClick={handleBack}
                    className="w-1/2 bg-white border border-primary-800 text-primary-800 py-3 rounded-md font-medium hover:bg-primary-50 transition-colors duration-200"
                  >
                    Back
                  </button>
                  
                  <button 
                    type="button"
                    onClick={handleSubmit}
                    className="w-1/2 bg-primary-800 text-white py-3 rounded-md font-medium hover:bg-primary-700 transition-colors duration-200"
                  >
                    Place Order
                  </button>
                </div>
                
                {/* Security message */}
                <div className="mt-6 flex items-start space-x-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <p className="text-xs text-primary-600">
                    Your payment information is encrypted and secure. We never store your full card details.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutStep3;