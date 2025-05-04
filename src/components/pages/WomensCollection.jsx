import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../common/ProductCard';

// Sample data - in a real app, this would come from an API
const womensProducts = [
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
    id: 5,
    name: 'Handcrafted Leather Bag',
    category: 'Women\'s Accessories',
    price: 349.99,
    image: '/src/assets/images/womens-bag.jpg',
    rating: 4.9,
    reviewCount: 42,
    limitedEdition: true
  },
  {
    id: 8,
    name: 'Embroidered Silk Blouse',
    category: 'Women\'s Tops',
    price: 229.99,
    image: '/src/assets/images/womens-blouse.jpg',
    rating: 4.6,
    reviewCount: 31,
    limitedEdition: true
  },
  {
    id: 12,
    name: 'High-Waisted Wool Trousers',
    category: 'Women\'s Bottoms',
    price: 159.99,
    image: '/src/assets/images/womens-trousers.jpg',
    rating: 4.7,
    reviewCount: 89,
    limitedEdition: false
  },
  {
    id: 13,
    name: 'Cashmere Sweater',
    category: 'Women\'s Tops',
    price: 179.99,
    image: '/src/assets/images/womens-sweater.jpg',
    rating: 4.8,
    reviewCount: 76,
    limitedEdition: false
  }
];

const WomensCollection = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');
  
  const categories = ['All', 'Outerwear', 'Dresses', 'Tops', 'Bottoms', 'Accessories'];
  
  useEffect(() => {
    // Simulate API call
    setProducts(womensProducts);
    setFilteredProducts(womensProducts);
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
              Women's Collection
            </h1>
            <p className="text-primary-200 text-lg mb-6">
              Discover our collection of elegant, timeless pieces designed to elevate
              your wardrobe with sophistication and style.
            </p>
            <Link 
              to="/limited-edition" 
              className="inline-block bg-accent-light text-white px-4 py-2 rounded-md font-medium hover:bg-accent-light/90 transition-colors duration-200"
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
      
      {/* Styling Tips */}
      <div className="bg-primary-50 p-8 rounded-lg">
        <h2 className="text-2xl font-serif font-bold text-primary-800 mb-4">
          Styling Tips
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-medium text-primary-700 mb-2">
              The Art of Capsule Wardrobes
            </h3>
            <p className="text-primary-600 mb-4">
              Invest in versatile pieces that can be mixed and matched to create numerous outfits.
              Our collection focuses on timeless designs that transcend seasonal trends.
            </p>
            <ul className="list-disc list-inside text-primary-600 space-y-1">
              <li>Choose quality over quantity</li>
              <li>Focus on versatile items that work together</li>
              <li>Build around a consistent color palette</li>
              <li>Accessorize to transform basic outfits</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium text-primary-700 mb-2">
              Care Instructions
            </h3>
            <p className="text-primary-600 mb-4">
              Proper care extends the life of your garments and preserves their beauty.
              Each of our pieces comes with detailed care instructions tailored to its specific materials.
            </p>
            <ul className="list-disc list-inside text-primary-600 space-y-1">
              <li>Store silk items on padded hangers</li>
              <li>Dry clean wool and delicate garments</li>
              <li>Hand wash cashmere in cold water with gentle detergent</li>
              <li>Keep leather items away from direct sunlight</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WomensCollection;