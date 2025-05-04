import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../../../hooks/useCart';

const CheckoutStep1 = () => {
  const { cart, updateQuantity, removeFromCart } = useCart();
  const navigate = useNavigate();
  
  const handleContinue = (e) => {
    e.preventDefault();
    navigate('/checkout/step-2');
  };
  
  if (cart.items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-xl mx-auto text-center">
          <h1 className="text-3xl font-serif font-bold text-primary-800 mb-6">Your Cart is Empty</h1>
          <p className="text-primary-600 mb-8">Looks like you haven't added any items to your cart yet.</p>
          <Link 
            to="/new-arrivals" 
            className="inline-block bg-primary-800 text-white px-6 py-3 rounded-md font-medium hover:bg-primary-700 transition-colors duration-200"
          >
            Explore Products
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Progress indicator - Visibility principle */}
        <div className="flex justify-between items-center mb-12">
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-primary-800 text-white flex items-center justify-center font-bold">1</div>
            <p className="mt-2 font-medium text-primary-800">Cart</p>
          </div>
          <div className="flex-1 h-1 bg-primary-200 mx-4"></div>
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-primary-200 text-primary-500 flex items-center justify-center font-bold">2</div>
            <p className="mt-2 font-medium text-primary-500">Shipping</p>
          </div>
          <div className="flex-1 h-1 bg-primary-200 mx-4"></div>
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-primary-200 text-primary-500 flex items-center justify-center font-bold">3</div>
            <p className="mt-2 font-medium text-primary-500">Payment</p>
          </div>
        </div>
        
        <h1 className="text-3xl font-serif font-bold text-primary-800 mb-8">Shopping Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Cart items */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                {cart.items.map(item => (
                  <div key={item.id} className="flex flex-col md:flex-row py-6 border-b border-primary-100 last:border-0">
                    <div className="w-full md:w-24 h-24 bg-primary-100 rounded-md overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                    
                    <div className="flex-1 md:ml-6 mt-4 md:mt-0">
                      <div className="flex flex-col md:flex-row md:justify-between">
                        <div>
                          <h3 className="text-lg font-medium text-primary-800">{item.name}</h3>
                          <p className="text-sm text-primary-500">{item.category}</p>
                        </div>
                        <p className="text-lg font-bold text-primary-800 mt-2 md:mt-0">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                      
                      <div className="flex justify-between items-center mt-4">
                        <div className="flex items-center border border-primary-200 rounded-md">
                          <button 
                            onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                            className="px-3 py-1 text-primary-800 hover:bg-primary-100"
                          >
                            -
                          </button>
                          <span className="px-3 py-1 border-x border-primary-200">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="px-3 py-1 text-primary-800 hover:bg-primary-100"
                          >
                            +
                          </button>
                        </div>
                        
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-primary-500 hover:text-primary-700"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Order summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h2 className="text-xl font-bold text-primary-800 mb-6">Order Summary</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <p className="text-primary-600">Subtotal</p>
                    <p className="font-medium">${cart.subtotal.toFixed(2)}</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-primary-600">Shipping</p>
                    <p className="font-medium">
                      {cart.shipping === 0 ? 'Free' : `${cart.shipping.toFixed(2)}`}
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
                
                <button 
                  onClick={handleContinue}
                  className="w-full bg-primary-800 text-white py-3 rounded-md font-medium hover:bg-primary-700 transition-colors duration-200"
                >
                  Continue to Shipping
                </button>
                
                <div className="mt-6">
                  <h3 className="font-medium text-primary-800 mb-3">We Accept</h3>
                  <div className="flex space-x-3">
                    <img src="/src/assets/images/visa.svg" alt="Visa" className="h-8" />
                    <img src="/src/assets/images/mastercard.svg" alt="Mastercard" className="h-8" />
                    <img src="/src/assets/images/amex.svg" alt="American Express" className="h-8" />
                    <img src="/src/assets/images/paypal.svg" alt="PayPal" className="h-8" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Security info - Trust signals */}
            <div className="mt-6 bg-primary-50 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <div>
                  <h3 className="font-medium text-primary-800">Secure Checkout</h3>
                  <p className="text-sm text-primary-600">Your payment information is encrypted and secure.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutStep1;