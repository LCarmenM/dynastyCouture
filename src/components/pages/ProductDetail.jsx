import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';

// Sample data - in a real app, this would come from an API
const allProducts = [
  {
    id: 1,
    name: 'Classic Tailored Blazer',
    category: 'Women\'s Outerwear',
    price: 189.99,
    image: '/src/assets/images/womens-blazer.jpg',
    rating: 4.8,
    reviewCount: 124,
    limitedEdition: false,
    description: 'A timeless tailored blazer crafted from premium wool blend. Features a slim fit, notched lapels, and a single-button closure. Perfect for elevating both office attire and casual outfits.',
    details: [
      'Premium wool blend (80% wool, 20% polyester)',
      'Fully lined with interior pockets',
      'Notched lapels and padded shoulders',
      'Single-button closure',
      'Available in sizes XS to XL'
    ],
    colors: ['Black', 'Navy', 'Charcoal'],
    sizes: ['XS', 'S', 'M', 'L', 'XL']
  },
  {
    id: 2,
    name: 'Premium Wool Overcoat',
    category: 'Men\'s Outerwear',
    price: 249.99,
    image: '/src/assets/images/mens-coat.jpg',
    rating: 4.9,
    reviewCount: 87,
    limitedEdition: false,
    description: 'A sophisticated overcoat crafted from luxurious Italian wool. Features a classic silhouette with notched lapels, a three-button closure, and a back vent for ease of movement. Fully lined for comfort and warmth.',
    details: [
      'Italian wool (90% wool, 10% cashmere)',
      'Fully lined with interior pockets',
      'Notched lapels',
      'Three-button closure',
      'Back vent for ease of movement',
      'Available in sizes S to XXL'
    ],
    colors: ['Camel', 'Black', 'Navy'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 3,
    name: 'Silk Evening Dress',
    category: 'Women\'s Dresses',
    price: 299.99,
    image: '/src/assets/images/womens-dress.jpg',
    rating: 4.7,
    reviewCount: 56,
    limitedEdition: true,
    description: 'An elegant evening dress crafted from pure silk. Features a flowing silhouette, delicate straps, and a subtle side slit. The perfect choice for special occasions that demand sophistication.',
    details: [
      '100% natural silk',
      'Flowing silhouette with bias cut',
      'Adjustable straps',
      'Side slit for ease of movement',
      'Concealed back zipper',
      'Available in sizes XS to XL'
    ],
    colors: ['Burgundy', 'Emerald', 'Black'],
    sizes: ['XS', 'S', 'M', 'L', 'XL']
  },
  // Add more products as needed to match your sample data
];

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState('');
  
  useEffect(() => {
    // Simulate API call
    const fetchProduct = () => {
      setLoading(true);
      
      // Find product in our sample data
      const foundProduct = allProducts.find(p => p.id === parseInt(id));
      
      if (foundProduct) {
        setProduct(foundProduct);
        // Set default selections
        setSelectedColor(foundProduct.colors[0]);
        setSelectedSize(foundProduct.sizes[0]);
      }
      
      setLoading(false);
    };
    
    fetchProduct();
  }, [id]);
  
  const handleAddToCart = () => {
    if (!selectedColor || !selectedSize) {
      setError('Please select both color and size');
      return;
    }
    
    // Clear any previous errors
    setError('');
    
    // Add to cart with selected options
    const productWithOptions = {
      ...product,
      selectedColor,
      selectedSize
    };
    
    addToCart(productWithOptions, quantity);
    
    // Show confirmation (in a real app, you might use a toast notification)
    alert('Added to cart!');
  };
  
  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-center items-center h-64">
          <p className="text-primary-800 font-medium">Loading product details...</p>
        </div>
      </div>
    );
  }
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center justify-center h-64">
          <h2 className="text-2xl font-serif font-bold text-primary-800 mb-4">
            Product Not Found
          </h2>
          <p className="text-primary-600 mb-6">
            We couldn't find the product you're looking for.
          </p>
          <Link
            to="/new-arrivals"
            className="bg-primary-800 text-white px-6 py-3 rounded-md font-medium hover:bg-primary-700 transition-colors duration-200"
          >
            Browse Our Collection
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="bg-white rounded-lg overflow-hidden shadow-md">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover object-center"
          />
          {product.limitedEdition && (
            <div className="absolute top-4 right-4 bg-accent-gold px-3 py-1 rounded-md text-white font-medium">
              Limited Edition
            </div>
          )}
        </div>
        
        {/* Product Info */}
        <div>
          <nav className="flex mb-4 text-sm">
            <Link to="/" className="text-primary-500 hover:text-primary-800">Home</Link>
            <span className="mx-2 text-primary-500">/</span>
            <Link to={`/${product.category.toLowerCase().includes('women') ? 'womens' : 'mens'}`} className="text-primary-500 hover:text-primary-800">
              {product.category.split("'")[0]}
            </Link>
            <span className="mx-2 text-primary-500">/</span>
            <span className="text-primary-800">{product.name}</span>
          </nav>
          
          <h1 className="text-3xl font-serif font-bold text-primary-800 mb-2">
            {product.name}
          </h1>
          
          <p className="text-primary-500 mb-4">{product.category}</p>
          
          <div className="flex items-center mb-6">
            <div className="flex text-accent-gold">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'fill-current' : 'stroke-current'}`}
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="ml-2 text-primary-500">
              {product.rating} ({product.reviewCount} reviews)
            </span>
          </div>
          
          <p className="text-2xl font-bold text-primary-800 mb-6">
            ${product.price.toFixed(2)}
          </p>
          
          <p className="text-primary-600 mb-8">
            {product.description}
          </p>
          
          {/* Color selection */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-primary-700 mb-2">
              Color: <span className="font-normal">{selectedColor}</span>
            </h3>
            <div className="flex space-x-3">
              {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`w-10 h-10 rounded-full border ${
                    selectedColor === color
                      ? 'ring-2 ring-primary-800 ring-offset-2'
                      : 'border-primary-300'
                  }`}
                  style={{
                    backgroundColor: color.toLowerCase(),
                    border: color.toLowerCase() === 'white' ? '1px solid #e5e5e5' : 'none'
                  }}
                  aria-label={color}
                ></button>
              ))}
            </div>
          </div>
          
          {/* Size selection */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-primary-700 mb-2">Size</h3>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border rounded-md ${
                    selectedSize === size
                      ? 'bg-primary-800 text-white border-primary-800'
                      : 'border-primary-300 text-primary-700 hover:border-primary-800'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          
          {/* Quantity */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-primary-700 mb-2">Quantity</h3>
            <div className="flex items-center border border-primary-300 rounded-md w-32">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-1 text-primary-800 hover:bg-primary-100"
              >
                -
              </button>
              <span className="px-3 py-1 border-x border-primary-300 flex-1 text-center">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-1 text-primary-800 hover:bg-primary-100"
              >
                +
              </button>
            </div>
          </div>
          
          {/* Error message */}
          {error && (
            <div className="mb-4 text-accent-light font-medium">
              {error}
            </div>
          )}
          
          {/* Add to cart button */}
          <div className="mb-8">
            <button
              onClick={handleAddToCart}
              className="w-full bg-primary-800 text-white py-3 rounded-md font-medium hover:bg-primary-700 transition-colors duration-200"
            >
              Add to Cart
            </button>
          </div>
          
          {/* Product details */}
          <div className="border-t border-primary-200 pt-6">
            <h3 className="text-lg font-medium text-primary-800 mb-4">Details</h3>
            <ul className="list-disc list-inside text-primary-600 space-y-2">
              {product.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;