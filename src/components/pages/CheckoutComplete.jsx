import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const CheckoutComplete = () => {
  // Generate a random order number
  const orderNumber = `ELG-${Math.floor(100000 + Math.random() * 900000)}`;
  
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto text-center">
        <div className="w-20 h-20 rounded-full bg-primary-100 flex items-center justify-center mx-auto mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        
        <h1 className="text-3xl font-serif font-bold text-primary-800 mb-4">Thank You for Your Order!</h1>
        <p className="text-lg text-primary-600 mb-6">
          Your order #{orderNumber} has been placed successfully.
        </p>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-medium text-primary-800 mb-4">What's Next?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mx-auto mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-medium text-primary-800 mb-1">Order Confirmation</h3>
              <p className="text-primary-600 text-sm">
                We've sent a confirmation email to your inbox.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mx-auto mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
              </div>
              <h3 className="font-medium text-primary-800 mb-1">Packing & Shipping</h3>
              <p className="text-primary-600 text-sm">
                Your items will be carefully packed and shipped within 1-2 business days.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mx-auto mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="font-medium text-primary-800 mb-1">Delivery</h3>
              <p className="text-primary-600 text-sm">
                Expected delivery within 3-5 business days with tracking updates.
              </p>
            </div>
          </div>
        </div>
        
        {/* Social proof - showing others have purchased */}
        <div className="bg-primary-50 rounded-lg p-4 mb-8">
          <p className="text-primary-800 mb-2">
            <span className="font-medium">42 customers</span> have made a purchase in the last 24 hours
          </p>
          <div className="flex justify-center space-x-1">
            <div className="w-8 h-8 rounded-full bg-primary-200 overflow-hidden">
              <img src="/src/assets/images/customer-1.jpg" alt="Customer" className="w-full h-full object-cover" />
            </div>
            <div className="w-8 h-8 rounded-full bg-primary-200 overflow-hidden">
              <img src="/src/assets/images/customer-2.jpg" alt="Customer" className="w-full h-full object-cover" />
            </div>
            <div className="w-8 h-8 rounded-full bg-primary-200 overflow-hidden">
              <img src="/src/assets/images/customer-3.jpg" alt="Customer" className="w-full h-full object-cover" />
            </div>
            <div className="w-8 h-8 rounded-full bg-primary-200 flex items-center justify-center text-xs font-medium text-primary-800">
              +39
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link
            to="/"
            className="bg-primary-800 text-white px-6 py-3 rounded-md font-medium hover:bg-primary-700 transition-colors duration-200"
          >
            Continue Shopping
          </Link>
          
          <a
            href={`#track-order/${orderNumber}`}
            className="bg-white border border-primary-800 text-primary-800 px-6 py-3 rounded-md font-medium hover:bg-primary-50 transition-colors duration-200"
          >
            Track Your Order
          </a>
        </div>
      </div>
    </div>
  );
};

export default CheckoutComplete;