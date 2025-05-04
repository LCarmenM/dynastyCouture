import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../common/ProductCard';
import NewsletterSignup from '../common/NewsletterSignup';

// Sample data - in a real app, this would come from an API
const featuredProducts = [
  {
    id: 1,
    name: 'Classic Tailored Blazer',
    category: 'Women\'s Outerwear',
    price: 189.99,
    image: '/src/assets/images/womens-blazer.jpg',
    rating: 4.8,
    reviewCount: 124,
    limitedEdition: false
  },
  {
    id: 2,
    name: 'Premium Wool Overcoat',
    category: 'Men\'s Outerwear',
    price: 249.99,
    image: '/src/assets/images/mens-coat.jpg',
    rating: 4.9,
    reviewCount: 87,
    limitedEdition: false
  },
  {
    id: 3,
    name: 'Silk Evening Dress',
    category: 'Women\'s Dresses',
    price: 299.99,
    image: '/src/assets/images/womens-dress.jpg',
    rating: 4.7,
    reviewCount: 56,
    limitedEdition: true
  },
  {
    id: 4,
    name: 'Italian Leather Oxford Shoes',
    category: 'Men\'s Footwear',
    price: 179.99,
    image: '/src/assets/images/mens-shoes.jpg',
    rating: 4.6,
    reviewCount: 92,
    limitedEdition: false
  }
];

const Home = () => {
  const [newArrivals, setNewArrivals] = useState([]);
  
  useEffect(() => {
    // Simulate API call for new arrivals
    setNewArrivals(featuredProducts.slice(0, 4));
  }, []);
  
  return (
    <div>
      {/* Hero section - Visual hierarchy principle */}
      <section className="relative h-[80vh] bg-gradient-to-r from-primary-800 to-secondary-800 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/src/assets/images/hero-bg.jpg" 
            alt="Elegant clothing collection" 
            className="h-full w-full object-cover opacity-30"
          />
        </div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4">
              Elegance is an Attitude
            </h1>
            <p className="text-lg md:text-xl text-primary-200 mb-8">
              Discover our curated collection of timeless pieces that elevate your style.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                to="/womens" 
                className="bg-white text-primary-800 py-3 px-8 rounded-md font-medium hover:bg-primary-100 transition-colors duration-200"
              >
                Women's Collection
              </Link>
              <Link 
                to="/mens" 
                className="bg-transparent border-2 border-white text-white py-3 px-8 rounded-md font-medium hover:bg-white/10 transition-colors duration-200"
              >
                Men's Collection
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Categories Section - Gestalt principle of similarity */}
      <section className="py-16 bg-primary-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-primary-800 text-center mb-12">
            Shop by Category
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Each category link follows the same visual style - similarity principle */}
            <Link to="/womens" className="relative rounded-lg overflow-hidden group h-64">
              <img 
                src="/src/assets/images/women-category.jpg" 
                alt="Women's Collection" 
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <h3 className="text-2xl font-medium text-white mb-2">Women</h3>
                <span className="inline-flex items-center text-primary-100 group-hover:translate-x-2 transition-transform duration-300">
                  Shop Collection
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </div>
            </Link>
            
            <Link to="/mens" className="relative rounded-lg overflow-hidden group h-64">
              <img 
                src="/src/assets/images/men-category.jpg" 
                alt="Men's Collection" 
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <h3 className="text-2xl font-medium text-white mb-2">Men</h3>
                <span className="inline-flex items-center text-primary-100 group-hover:translate-x-2 transition-transform duration-300">
                  Shop Collection
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </div>
            </Link>
            
            <Link to="/new-arrivals" className="relative rounded-lg overflow-hidden group h-64">
              <img 
                src="/src/assets/images/new-arrivals.jpg" 
                alt="New Arrivals" 
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <h3 className="text-2xl font-medium text-white mb-2">New Arrivals</h3>
                <span className="inline-flex items-center text-primary-100 group-hover:translate-x-2 transition-transform duration-300">
                  Shop Collection
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </div>
            </Link>
            
            <Link to="/limited-edition" className="relative rounded-lg overflow-hidden group h-64">
              <img 
                src="/src/assets/images/limited-edition.jpg" 
                alt="Limited Edition" 
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <h3 className="text-2xl font-medium text-white mb-2">Limited Edition</h3>
                <span className="inline-flex items-center text-primary-100 group-hover:translate-x-2 transition-transform duration-300">
                  Shop Collection
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Featured Products - Visual hierarchy */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-primary-800 text-center mb-4">
            Featured Products
          </h2>
          <p className="text-center text-primary-500 max-w-2xl mx-auto mb-12">
            Curated selection of our finest pieces, crafted with premium materials and impeccable attention to detail.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link 
              to="/new-arrivals" 
              className="inline-flex items-center text-primary-800 hover:text-primary-600 font-medium transition-colors duration-200"
            >
              View All Products
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Social Proof Section */}
      <section className="py-16 bg-primary-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-primary-800 text-center mb-12">
            What Our Customers Say
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial cards - implementing social proof principle */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex text-accent-gold mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i} 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-primary-700 mb-4">
                "The quality of their clothing is exceptional. I've been a loyal customer for years and each piece I've purchased has become a staple in my wardrobe."
              </p>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-primary-200 overflow-hidden">
                  <img 
                    src="/src/assets/images/customer-2.jpg" 
                    alt="Customer" 
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="ml-3">
                  <p className="font-medium text-primary-800">Michael Chen</p>
                  <p className="text-sm text-primary-500">Verified Customer</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex text-accent-gold mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i} 
                    xmlns="http://www.w3.org/2000/svg" 
                    className={`h-5 w-5 ${i < 4 ? 'fill-current' : 'stroke-current'}`}
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-primary-700 mb-4">
                "Their customer service is just as impressive as their clothing. When I had an issue with sizing, they handled the exchange process seamlessly."
              </p>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-primary-200 overflow-hidden">
                  <img 
                    src="/src/assets/images/customer-3.jpg" 
                    alt="Customer" 
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="ml-3">
                  <p className="font-medium text-primary-800">Emma Rodriguez</p>
                  <p className="text-sm text-primary-500">Verified Customer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <NewsletterSignup />
    </div>
  );
};

export default Home;