import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../../hooks/useCart';

const CheckoutStep2 = () => {
  const navigate = useNavigate();
  const { cart } = useCart();
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'US',
    phone: ''
  });
  
  const [errors, setErrors] = useState({});
  
  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
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
    
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.state.trim()) newErrors.state = 'State is required';
    if (!formData.zipCode.trim()) newErrors.zipCode = 'ZIP code is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // In a real app, you would save shipping info
      console.log('Shipping info:', formData);
      navigate('/checkout/step-3');
    }
  };
  
  // Go back to cart
  const handleBack = () => {
    navigate('/checkout/step-1');
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
            <div className="w-10 h-10 rounded-full bg-primary-800 text-white flex items-center justify-center font-bold">2</div>
            <p className="mt-2 font-medium text-primary-800">Shipping</p>
          </div>
          <div className="flex-1 h-1 bg-primary-200 mx-4"></div>
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-primary-200 text-primary-500 flex items-center justify-center font-bold">3</div>
            <p className="mt-2 font-medium text-primary-500">Payment</p>
          </div>
        </div>
        
        <h1 className="text-3xl font-serif font-bold text-primary-800 mb-8">Shipping Information</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <form onSubmit={handleSubmit} className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* First Name */}
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-primary-700 mb-1">
                      First Name <span className="text-accent-light">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 border ${errors.firstName ? 'border-accent-light' : 'border-primary-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500`}
                    />
                    {errors.firstName && (
                      <p className="mt-1 text-sm text-accent-light">{errors.firstName}</p>
                    )}
                  </div>
                  
                  {/* Last Name */}
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-primary-700 mb-1">
                      Last Name <span className="text-accent-light">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 border ${errors.lastName ? 'border-accent-light' : 'border-primary-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500`}
                    />
                    {errors.lastName && (
                      <p className="mt-1 text-sm text-accent-light">{errors.lastName}</p>
                    )}
                  </div>
                  
                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-primary-700 mb-1">
                      Email <span className="text-accent-light">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 border ${errors.email ? 'border-accent-light' : 'border-primary-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-accent-light">{errors.email}</p>
                    )}
                  </div>
                  
                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-primary-700 mb-1">
                      Phone <span className="text-accent-light">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 border ${errors.phone ? 'border-accent-light' : 'border-primary-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500`}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-accent-light">{errors.phone}</p>
                    )}
                  </div>
                  
                  {/* Address */}
                  <div className="md:col-span-2">
                    <label htmlFor="address" className="block text-sm font-medium text-primary-700 mb-1">
                      Address <span className="text-accent-light">*</span>
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 border ${errors.address ? 'border-accent-light' : 'border-primary-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500`}
                    />
                    {errors.address && (
                      <p className="mt-1 text-sm text-accent-light">{errors.address}</p>
                    )}
                  </div>
                  
                  {/* City */}
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-primary-700 mb-1">
                      City <span className="text-accent-light">*</span>
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 border ${errors.city ? 'border-accent-light' : 'border-primary-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500`}
                    />
                    {errors.city && (
                      <p className="mt-1 text-sm text-accent-light">{errors.city}</p>
                    )}
                  </div>
                  
                  {/* State */}
                  <div>
                    <label htmlFor="state" className="block text-sm font-medium text-primary-700 mb-1">
                      State <span className="text-accent-light">*</span>
                    </label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 border ${errors.state ? 'border-accent-light' : 'border-primary-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500`}
                    />
                    {errors.state && (
                      <p className="mt-1 text-sm text-accent-light">{errors.state}</p>
                    )}
                  </div>
                  
                  {/* ZIP Code */}
                  <div>
                    <label htmlFor="zipCode" className="block text-sm font-medium text-primary-700 mb-1">
                      ZIP Code <span className="text-accent-light">*</span>
                    </label>
                    <input
                      type="text"
                      id="zipCode"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 border ${errors.zipCode ? 'border-accent-light' : 'border-primary-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500`}
                    />
                    {errors.zipCode && (
                      <p className="mt-1 text-sm text-accent-light">{errors.zipCode}</p>
                    )}
                  </div>
                  
                  {/* Country */}
                  <div>
                    <label htmlFor="country" className="block text-sm font-medium text-primary-700 mb-1">
                      Country <span className="text-accent-light">*</span>
                    </label>
                    <select
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-primary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    >
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="UK">United Kingdom</option>
                      <option value="AU">Australia</option>
                      <option value="DE">Germany</option>
                      <option value="FR">France</option>
                    </select>
                  </div>
                </div>
                
                {/* Save for later checkbox - Hick's law, reducing future choices */}
                <div className="mt-6">
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="rounded border-primary-300 text-primary-800 focus:ring-primary-500"
                    />
                    <span className="ml-2 text-primary-700">Save this address for future orders</span>
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
                    Continue
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutStep2;