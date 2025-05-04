import { useState, useEffect } from 'react';
import ProductCard from '../common/ProductCard';

// Sample data - in a real app, this would come from an API
const newArrivalsProducts = [
  {
    id: 14,
    name: 'Modern Striped Blazer',
    category: 'Women\'s Outerwear',
    price: 199.99,
    image: '/src/assets/images/womens-striped-blazer.jpg',
    rating: 4.7,
    reviewCount: 23,
    limitedEdition: false
  },
  {
    id: 15,
    name: 'Textured Linen Shirt',
    category: 'Men\'s Tops',
    price: 109.99,
    image: '/src/assets/images/mens-linen-shirt.jpg',
    rating: 4.5,
    reviewCount: 18,
    limitedEdition: false
  },
  {
    id: 16,
    name: 'Designer Crossbody Bag',
    category: 'Women\'s Accessories',
    price: 249.99,
    image: '/src/assets/images/womens-crossbody.jpg',
    rating: 4.8,
    reviewCount: 14,
    limitedEdition: false
  },
  {
    id: 17,
    name: 'Lightweight Summer Chinos',
    category: 'Men\'s Bottoms',
    price: 129.99,
    image: '/src/assets/images/mens-chinos.jpg',
    rating: 4.6,
    reviewCount: 21,
    limitedEdition: false
  },
  {
    id: 18,
    name: 'Floral Print Maxi Dress',
    category: 'Women\'s Dresses',
    price: 169.99,
    image: '/src/assets/images/womens-maxi-dress.jpg',
    rating: 4.9,
    reviewCount: 16,
    limitedEdition: false
  },
  {
    id: 19,
    name: 'Minimalist Leather Watch',
    category: 'Accessories',
    price: 159.99,
    image: '/src/assets/images/minimalist-watch.jpg',
    rating: 4.7,
    reviewCount: 19,
    limitedEdition: false
  }
];

const NewArrivals = () => {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    // Simulate API call
    setProducts(newArrivalsProducts);
  }, []);
  
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero section */}
      <div className="bg-gradient-to-r from-primary-800 to-secondary-800 rounded-lg overflow-hidden mb-12">
        <div className="container mx-auto px-4 py-16 md:py-20 relative">
          <div className="max-w-xl">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
              New Arrivals
            </h1>
            <p className="text-primary-200 text-lg mb-6">
              Be the first to explore our latest pieces, fresh from design to showcase.
              Discover what's trending this season in our newest collection.
            </p>
            <div className="inline-block bg-white text-primary-800 px-4 py-2 rounded-md font-medium">
              Just Landed
            </div>
          </div>
        </div>
      </div>
      
      {/* Products section */}
      <div className="mb-12">
        <h2 className="text-2xl font-serif font-bold text-primary-800 mb-8">
          Latest Additions
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      
      {/* Season trends */}
      <div className="bg-primary-50 p-8 rounded-lg mb-12">
        <h2 className="text-2xl font-serif font-bold text-primary-800 mb-4">
          Season Trends
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-medium text-primary-700 mb-2">
              Spring/Summer Collection Highlights
            </h3>
            <p className="text-primary-600 mb-4">
              This season brings lightweight fabrics, breathable textures, and vibrant yet sophisticated color palettes.
              Our designers have focused on versatility and comfort without compromising on elegance.
            </p>
            <ul className="list-disc list-inside text-primary-600 space-y-1">
              <li>Natural fabrics like linen and organic cotton</li>
              <li>Earth tones with unexpected color accents</li>
              <li>Relaxed silhouettes with refined details</li>
              <li>Sustainable materials and production methods</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium text-primary-700 mb-2">
              Styling Our New Pieces
            </h3>
            <p className="text-primary-600 mb-4">
              Our new arrivals are designed to integrate seamlessly with your existing wardrobe while
              bringing fresh energy to your personal style.
            </p>
            <ul className="list-disc list-inside text-primary-600 space-y-1">
              <li>Layer the striped blazer over summer dresses or casual tees</li>
              <li>Pair the linen shirt with tailored shorts or relaxed trousers</li>
              <li>Style the maxi dress with minimal accessories for elegant simplicity</li>
              <li>Complement the leather watch with both casual and formal attire</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;