import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import { useCart } from '../../hooks/useCart';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cart } = useCart();
  
  return (
    <header className="bg-primary-800 text-primary-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo - Scale principle */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="font-serif text-2xl md:text-3xl font-bold tracking-tight">ELEGANZA</span>
          </Link>
          
          {/* Mobile menu button - Visibility principle */}
          <button 
            className="md:hidden p-2" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          
          {/* Desktop Navigation - Consistency principle */}
          <div className="hidden md:flex items-center space-x-8">
            <Navbar />
            
            {/* Cart - Feedback principle */}
            <Link to="/checkout/step-1" className="relative group">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {cart.items.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-accent-light text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cart.items.length}
                </span>
              )}
              <span className="absolute inset-0 scale-0 group-hover:scale-100 bg-primary-700 rounded-full transition-all duration-200 ease-in-out opacity-30"></span>
            </Link>
          </div>
        </div>
        
        {/* Mobile Navigation - Constraint principle */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4">
            <Navbar isMobile={true} />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
