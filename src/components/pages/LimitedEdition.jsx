import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../common/ProductCard';

// Sample data - in a real app, this would come from an API
const limitedEditionProducts = [
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
    id: 9,
    name: 'Designer Sunglasses',
    category: 'Accessories',
    price: 189.99,
    image: '/src/assets/images/sunglasses.jpg',
    rating: 4.7,
    reviewCount: 45,
    limitedEdition: true
  }
];

const LimitedEdition = () => {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    // Simulate API call
    setProducts(limitedEditionProducts);
  }, []);
  
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero section */}
      <div className="bg-gradient-to-r from-primary-800 to-secondary-800 rounded-lg overflow-hidden mb-12">
        <div className="container mx-auto px-4 py-16 md:py-20 relative">
          <div className="max-w-xl">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
              Limited Edition Collection
            </h1>
            <p className="text-primary-200 text-lg mb-6">
              Exclusive pieces crafted with exceptional materials and exquisite attention to detail. 
              Each item is available in limited quantities for a truly unique style statement.
            </p>
            <div className="inline-block bg-accent-gold text-white px-4 py-2 rounded-md font-medium">
              Limited Availability
            </div>
          </div>
        </div>
      </div>
      
      {/* Products section */}
      <div className="mb-12">
        <h2 className="text-2xl font-serif font-bold text-primary-800 mb-8">
          Limited Edition Pieces
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      
      {/* Designer note */}
      <div className="bg-primary-50 p-8 rounded-lg mb-12">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-6 md:mb-0 md:pr-8">
            <img 
              src="/src/assets/images/designer.jpg" 
              alt="Lead Designer" 
              className="w-32 h-32 rounded-full mx-auto"
            />
          </div>
          <div className="md:w-2/3">
            <h3 className="text-xl font-serif font-bold text-primary-800 mb-3">A Note From Our Designer</h3>
            <p className="text-primary-600 mb-4">
              "Our limited edition pieces are designed with the modern sophisticated individual in mind. 
              Each item is meticulously crafted using the finest materials sourced from around the world, 
              ensuring both exceptional quality and unique character that stands the test of time."
            </p>
            <p className="font-medium text-primary-700">
              - Isabella Chen, Creative Director
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LimitedEdition;