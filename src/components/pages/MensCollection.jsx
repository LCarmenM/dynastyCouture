import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../common/ProductCard';

// Sample data - in a real app, this would come from an API
const mensProducts = [
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
    id: 4,
    name: 'Italian Leather Oxford Shoes',
    category: 'Men\'s Footwear',
    price: 179.99,
    image: '/src/assets/images/mens-shoes.jpg',
    rating: 4.6,
    reviewCount: 92,
    limitedEdition: false
  },
  {
    id: 6,
    name: 'Limited Edition Watch',
    category: 'Men\'s Accessories',
    price: 599.99,
    image: '/src/assets/images/mens-watch.jpg',
    rating: 5.0,
    reviewCount: 28,
    limitedEdition: true
  },
  {
    id: 7,
    name: 'Cashmere Overcoat',
    category: 'Men\'s Outerwear',
    price: 499.99,
    image: '/src/assets/images/mens-overcoat.jpg',
    rating: 4.8,
    reviewCount: 36,
    limitedEdition: true
  },
  {
    id: 10,
    name: 'Slim Fit Dress Shirt',
    category: 'Men\'s Tops',
    price: 89.99,
    image: '/src/assets/images/mens-shirt.jpg',
    rating: 4.5,
    reviewCount: 112,
    limitedEdition: false
  },
  {
    id: 11,
    name: 'Tailored Wool Suit',
    category: 'Men\'s Formalwear',
    price: 399.99,
    image: '/src/assets/images/mens-suit.jpg',
    rating: 4.7,
    reviewCount: 64,
    limitedEdition: false
  }
];

const MensCollection = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');
  
  const categories = ['All', 'Outerwear', 'Footwear', 'Accessories', 'Tops', 'Formalwear'];
  
  useEffect(() => {
    // Simulate API call
    setProducts(mensProducts);
    setFilteredProducts(mensProducts);
  }, []);
  
  // Filter products by category
  const filterByCategory = (category) => {
    setActiveCategory(category);
    
    if (category === 'All') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(product => 
        product.category.toLowerCase().includes(category.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };
  
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero section */}
      <div className="bg-gradient-to-r from-primary-800 to-secondary-800 rounded-lg overflow-hidden mb-12">
        <div className="container mx-auto px-4 py-16 md:py-20 relative">
          <div className="max-w-xl">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
              Men's Collection
            </h1>
            <p className="text-primary-200 text-lg mb-6">
              Elevate your style with our premium men's collection, featuring timeless pieces 
              crafted with exceptional materials and attention to detail.
            </p>
            <Link 
              to="/limited-edition" 
              className="inline-block bg-accent-dark text-white px-4 py-2 rounded-md font-medium hover:bg-accent-dark/90 transition-colors duration-200"
            >
              Explore Limited Edition
            </Link>
          </div>
        </div>
      </div>
      
      {/* Category filters */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => filterByCategory(category)}
              className={`px-4 py-2 rounded-md font-medium ${
                activeCategory === category
                  ? 'bg-primary-800 text-white'
                  : 'bg-primary-100 text-primary-800 hover:bg-primary-200'
              } transition-colors duration-200`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      
      {/* Products section */}
      <div className="mb-12">
        <h2 className="text-2xl font-serif font-bold text-primary-800 mb-8">
          {activeCategory === 'All' ? 'All Products' : `${activeCategory} Collection`}
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      
      {/* Style guide */}
      <div className="bg-primary-50 p-8 rounded-lg">
        <h2 className="text-2xl font-serif font-bold text-primary-800 mb-4">
          Style Guide
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-medium text-primary-700 mb-2">
              The Modern Gentleman
            </h3>
            <p className="text-primary-600 mb-4">
              Our collection is designed for the modern man who values quality, comfort, and timeless style.
              Each piece is carefully crafted to transition seamlessly from day to evening, work to weekend.
            </p>
            <ul className="list-disc list-inside text-primary-600 space-y-1">
              <li>Choose quality over quantity</li>
              <li>Invest in timeless pieces that transcend seasons</li>
              <li>Pay attention to fit and proportion</li>
              <li>Embrace subtle sophistication</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium text-primary-700 mb-2">
              How to Care for Your Garments
            </h3>
            <p className="text-primary-600 mb-4">
              Proper care extends the life of your clothing and preserves its appearance. 
              Follow these general guidelines for our premium garments:
            </p>
            <ul className="list-disc list-inside text-primary-600 space-y-1">
              <li>Always check the care label before washing or cleaning</li>
              <li>Store wool items folded to maintain shape</li>
              <li>Allow shoes to rest between wears with shoe trees</li>
              <li>Clean and condition leather goods regularly</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MensCollection;