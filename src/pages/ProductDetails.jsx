import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiShoppingCart, FiHeart, FiMinus, FiPlus, FiStar, FiTruck, FiShield, FiRefreshCw } from 'react-icons/fi';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import ProductCard from '../components/ProductCard';

const ProductDetails = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  // Mock product data
  const product = {
    id: id || 1,
    title: 'Premium Minimalist Headphones',
    price: 249.99,
    originalPrice: 299.99,
    rating: 4.5,
    reviews: 128,
    description: 'Experience pure audio clarity with our Premium Minimalist Headphones. Engineered for audiophiles, these over-ear headphones deliver deep bass, crisp highs, and exceptional active noise cancellation. The breathable memory foam ear cushions ensure all-day comfort, while the sleek, unbranded design makes a subtle statement.',
    features: [
      'Active Noise Cancellation (ANC)',
      'Up to 30 hours of battery life',
      'Bluetooth 5.2 connectivity',
      'Premium aluminum and leather construction',
      'Built-in dual microphones for crystal clear calls'
    ],
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?auto=format&fit=crop&q=80&w=1000'
    ],
    inStock: true,
    colors: ['bg-slate-900', 'bg-slate-200', 'bg-indigo-600'],
  };

  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  // Mock related products
  const relatedProducts = [
    { id: 2, title: 'Ergonomic Cotton Setup', price: 129.99, image: 'https://images.unsplash.com/photo-1524143986875-3b098d78b363?auto=format&fit=crop&q=80&w=800', rating: 5, reviews: 89, isNew: false, discount: 0 },
    { id: 4, title: 'Smart Home Speaker', price: 89.99, image: 'https://images.unsplash.com/photo-1589003077984-394fb208b5be?auto=format&fit=crop&q=80&w=800', rating: 4.5, reviews: 45, isNew: true, discount: 0 },
    { id: 9, title: 'Mechanical Keyboard', price: 159.00, image: 'https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&q=80&w=800', rating: 4.8, reviews: 320, isNew: false, discount: 10 },
    { id: 8, title: 'Sleek Laptop Bag', price: 79.99, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=800', rating: 5, reviews: 541, isNew: true, discount: 0 },
  ];

  const handleQuantityDrop = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleQuantityAdd = () => {
    if (quantity < 10) setQuantity(quantity + 1);
  };

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
    <div className="bg-white min-h-screen">
      
      {/* Breadcrumb Navigation */}
      <div className="bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex text-sm text-slate-500 font-medium">
            <Link to="/" className="hover:text-indigo-600 transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/shop" className="hover:text-indigo-600 transition-colors">Shop</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-900 truncate">{product.title}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Left Column: Image Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-6">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-visible shrink-0 pb-2 md:pb-0">
              {product.images.map((img, idx) => (
                <button 
                  key={idx} 
                  onClick={() => setSelectedImage(idx)}
                  className={`w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden border-2 transition-all flex-shrink-0 ${selectedImage === idx ? 'border-indigo-600 opacity-100' : 'border-transparent opacity-60 hover:opacity-100'}`}
                >
                  <img src={img} alt={`${product.title} ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* Main Image */}
            <div className="w-full flex-1 aspect-[4/5] sm:aspect-square bg-slate-100 rounded-2xl overflow-hidden relative group">
              <img 
                src={product.images[selectedImage]} 
                alt={product.title} 
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-in-out cursor-zoom-in"
              />
              
              {/* Product Badges */}
              <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                {product.originalPrice > product.price && (
                  <span className="bg-rose-500 text-white text-xs font-bold px-3 py-1.5 rounded-lg uppercase tracking-wider shadow-sm">
                    Sale
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Product Info & Actions */}
          <div className="flex flex-col">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4">
              {product.title}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex text-lg">
                {renderStars(product.rating)}
              </div>
              <span className="text-slate-500 font-medium">({product.reviews} customer reviews)</span>
            </div>

            {/* Price */}
            <div className="flex items-end gap-3 mb-8">
              <span className="text-4xl font-black text-slate-900 tracking-tight">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice > product.price && (
                <span className="text-xl font-semibold text-slate-400 line-through mb-1">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Options Panel (Color, etc.) */}
            <div className="mb-8">
              <h4 className="font-bold text-slate-900 mb-3">Color</h4>
              <div className="flex gap-3">
                {product.colors.map((color, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setSelectedColor(color)}
                    className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all ${selectedColor === color ? 'border-indigo-600 outline outline-2 outline-offset-2 outline-indigo-200' : 'border-slate-200 hover:border-slate-300'}`}
                  >
                    <span className={`w-8 h-8 rounded-full ${color}`}></span>
                  </button>
                ))}
              </div>
            </div>

            {/* Actions: Quantity & Add to Cart */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10 pt-8 border-t border-slate-100">
              
              {/* Quantity Selector */}
              <div className="flex items-center justify-between bg-slate-50 border border-slate-200 rounded-xl px-2 h-14 sm:w-32">
                <button onClick={handleQuantityDrop} className="w-10 h-10 flex items-center justify-center text-slate-600 hover:text-indigo-600 rounded-lg hover:bg-slate-200/50 transition-colors">
                  <FiMinus className="text-xl" />
                </button>
                <span className="font-bold text-slate-900 text-lg">{quantity}</span>
                <button onClick={handleQuantityAdd} className="w-10 h-10 flex items-center justify-center text-slate-600 hover:text-indigo-600 rounded-lg hover:bg-slate-200/50 transition-colors">
                  <FiPlus className="text-xl" />
                </button>
              </div>

              {/* Add to Cart Button */}
              <button className="flex-1 bg-indigo-600 text-white h-14 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-600/30 transition-all shadow-md group">
                <FiShoppingCart className="text-xl group-hover:scale-110 transition-transform" />
                Add to Cart
              </button>

              {/* Wishlist Button */}
              <button className="h-14 px-6 rounded-xl border-2 border-slate-200 text-slate-500 hover:text-pink-600 hover:border-pink-200 hover:bg-pink-50 flex items-center justify-center transition-all bg-white group">
                <FiHeart className="text-2xl group-hover:scale-110 transition-transform" />
              </button>
            </div>

            {/* Quick Policy Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-8">
              <div className="flex items-start gap-3">
                <FiTruck className="text-indigo-600 text-xl mt-0.5" />
                <div>
                  <h5 className="font-bold text-slate-900 text-sm">Free Shipping</h5>
                  <p className="text-slate-500 text-xs mt-0.5">Estimated delivery: 3-5 days</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FiRefreshCw className="text-indigo-600 text-xl mt-0.5" />
                <div>
                  <h5 className="font-bold text-slate-900 text-sm">Free Returns</h5>
                  <p className="text-slate-500 text-xs mt-0.5">30-day satisfaction guarantee</p>
                </div>
              </div>
            </div>

            {/* Features List */}
            <div>
              <h4 className="font-bold text-slate-900 mb-4 text-lg">Key Features</h4>
              <ul className="space-y-2">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-2 shrink-0"></span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products Section */}
      <div className="bg-slate-50 py-16 lg:py-24 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-black text-slate-900 tracking-tight mb-2">You Might Also Like</h2>
              <p className="text-slate-500">Customers who bought this item also bought</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {relatedProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default ProductDetails;
