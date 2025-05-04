import { Link } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  
  return (
    // Gestalt principle of proximity - related elements grouped together
    <div className="group relative overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-xl">
      {/* Visual hierarchy - image as focal point */}
      <Link to={`/product/${product.id}`}>
        <div className="relative h-64 overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name} 
            className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
          {/* Contrast principle for limited edition tag */}
          {product.limitedEdition && (
            <div className="absolute top-0 right-0 bg-accent-gold px-2 py-1 text-xs font-bold text-white">
              LIMITED EDITION
            </div>
          )}
        </div>
      </Link>
      
      <div className="p-4">
        {/* Typography hierarchy */}
        <h3 className="text-lg font-medium text-primary-800 line-clamp-1">{product.name}</h3>
        <p className="mt-1 text-sm text-primary-500">{product.category}</p>
        
        <div className="mt-3 flex items-center justify-between">
          <p className="text-lg font-bold text-primary-900">${product.price}</p>
          
          {/* Social proof - reviews */}
          <div className="flex items-center">
            <div className="flex text-accent-gold">
              {[...Array(5)].map((_, i) => (
                <svg 
                  key={i} 
                  xmlns="http://www.w3.org/2000/svg" 
                  className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'fill-current' : 'stroke-current'}`}
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="ml-1 text-xs text-primary-500">
              ({product.reviewCount})
            </span>
          </div>
        </div>
        
        {/* Feedback principle - button with hover state */}
        <button
          onClick={() => addToCart(product)}
          className="mt-4 w-full rounded-md bg-primary-800 py-2 text-center text-sm font-medium text-white transition-colors duration-200 hover:bg-primary-700"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;