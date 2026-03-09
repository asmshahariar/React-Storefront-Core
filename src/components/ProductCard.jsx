import { Link } from 'react-router-dom';
import { FiHeart, FiShoppingCart } from 'react-icons/fi';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  // Default mock data if no product prop is passed
  const data = product ? {
    ...product,
    rating: product.rating?.rate || 0,
    reviews: product.rating?.count || 0
  } : {
    id: 1,
    title: 'Premium Minimalist Headphones',
    price: 249.99,
    originalPrice: 299.99,
    rating: 4.5,
    reviews: 128,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800',
    isNew: true,
    discount: 16
  };

  // Helper function to render stars based on rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        if (rating >= i) {
            stars.push(<FaStar key={i} className="text-yellow-400" />);
        } else if (rating >= i - 0.5) {
            stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
        } else {
            stars.push(<FaRegStar key={i} className="text-yellow-400" />);
        }
    }
    return stars;
  };

  return (
    <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl border border-slate-100 overflow-hidden flex flex-col transition-all duration-300 relative">
      
      {/* Product Badges */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
        {data.isNew && (
          <span className="bg-indigo-600 text-white text-xs font-bold px-2.5 py-1 rounded-md uppercase tracking-wider shadow-sm">
            New
          </span>
        )}
        {data.discount > 0 && (
          <span className="bg-rose-500 text-white text-xs font-bold px-2.5 py-1 rounded-md uppercase tracking-wider shadow-sm">
            -{data.discount}%
          </span>
        )}
      </div>

      {/* Dynamic Wishlist Button (Hidden until hover on Desktop) */}
      <button 
        className="absolute top-3 right-3 z-10 bg-white/90 backdrop-blur-sm p-2.5 rounded-full text-slate-400 hover:text-pink-600 hover:bg-white shadow-sm opacity-100 lg:opacity-0 group-hover:opacity-100 lg:-translate-y-2 group-hover:translate-y-0 transition-all duration-300"
        aria-label="Add to wishlist"
      >
        <FiHeart className="text-lg" />
      </button>

      {/* Image Container with Zoom Effect */}
      <div className="relative h-64 overflow-hidden bg-slate-100 block">
        <Link to={`/product/${data.id}`}>
          <img 
            src={data.image} 
            alt={data.title}
            className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-in-out"
            loading="lazy"
          />
        </Link>
        
        {/* Quick Add Overlay (Desktop Only) */}
        <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 hidden md:block">
           <button 
            onClick={(e) => {
              e.preventDefault();
              addToCart(data);
            }}
            className="w-full bg-white/95 backdrop-blur-sm text-indigo-600 font-bold py-3 rounded-xl shadow-lg hover:bg-indigo-600 hover:text-white flex items-center justify-center gap-2 transition-colors"
           >
              <FiShoppingCart className="text-lg" /> Quick Add
           </button>
        </div>
      </div>

      {/* Product Content */}
      <div className="p-5 flex flex-col flex-1">
        
        {/* Rating Row */}
        <div className="flex items-center gap-1 mb-2">
          <div className="flex text-sm">
            {renderStars(data.rating)}
          </div>
          <span className="text-xs font-medium text-slate-500 ml-1">({data.reviews})</span>
        </div>

        {/* Title */}
        <Link to={`/product/${data.id}`} className="text-lg font-bold text-slate-900 hover:text-indigo-600 transition-colors line-clamp-2 mb-2">
          {data.title}
        </Link>
        
        {/* Spacer to push the price area to the bottom perfectly */}
        <div className="flex-grow"></div>

        {/* Price & Mobile Add to Cart */}
        <div className="flex items-end justify-between mt-4">
          <div className="flex flex-col">
             {data.originalPrice > data.price && (
                <span className="text-sm font-semibold text-slate-400 line-through mb-0.5">
                  ${data.originalPrice.toFixed(2)}
                </span>
             )}
             <span className="text-2xl font-black text-slate-900 tracking-tight">
               ${data.price.toFixed(2)}
             </span>
          </div>

          {/* Mobile/Tablet Add to Cart Button (Hidden on Desktop because of Quick Add) */}
          <button 
            onClick={(e) => {
              e.preventDefault();
              addToCart(data);
            }}
            className="md:hidden bg-indigo-600 text-white p-3 rounded-xl shadow-md hover:bg-indigo-700 transition-colors"
            aria-label="Add to cart"
          >
            <FiShoppingCart className="text-xl" />
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default ProductCard;
