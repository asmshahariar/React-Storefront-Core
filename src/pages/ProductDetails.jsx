import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiShoppingCart, FiHeart, FiMinus, FiPlus, FiArrowRight, FiTruck, FiShield, FiRefreshCw } from 'react-icons/fi';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import ProductCard from '../components/ProductCard';
import { useCart } from '../context/CartContext';
import { fetchProductById, fetchProductsByCategory } from '../services/productService';

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    const loadProductData = async () => {
      setLoading(true);
      try {
        const fetchedProduct = await fetchProductById(id);
        setProduct(fetchedProduct);
        
        // Fetch related products after finding the category
        if (fetchedProduct.category) {
          const fetchedRelated = await fetchProductsByCategory(fetchedProduct.category);
          // Filter out current product and limit to 4
          setRelatedProducts(fetchedRelated.filter(p => p.id !== parseInt(id)).slice(0, 4));
        }
      } catch (error) {
        console.error("Failed to load product data:", error);
      } finally {
        setLoading(false);
      }
    };
    loadProductData();
  }, [id]);

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

  if (loading) {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>
          <p className="text-slate-500 font-bold tracking-widest uppercase text-xs">Loading Details...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center p-4">
        <div className="text-center">
          <h2 className="text-3xl font-black text-slate-900 mb-4">Product Not Found</h2>
          <p className="text-slate-500 mb-8">We couldn't find the product you're looking for.</p>
          <Link to="/shop" className="bg-indigo-600 text-white px-8 py-3 rounded-full font-bold">Back to Shop</Link>
        </div>
      </div>
    );
  }

  // Handle image galleries (FakeStore only has one image usually, but I'll make it compatible)
  const productImages = [product.image];

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
            <span className="text-slate-900 truncate uppercase tracking-tight">{product.category}</span>
            <span className="mx-2">/</span>
            <span className="text-slate-900 truncate">{product.title}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Left Column: Image Area */}
          <div className="flex flex-col gap-6">
            <div className="w-full aspect-square bg-white border border-slate-100 rounded-3xl overflow-hidden p-8 sm:p-12 md:p-16">
              <img 
                src={product.image} 
                alt={product.title} 
                className="w-full h-full object-contain hover:scale-105 transition-transform duration-700 ease-in-out cursor-zoom-in"
              />
            </div>
          </div>

          {/* Right Column: Info Area */}
          <div className="flex flex-col">
            <div className="inline-block self-start bg-indigo-50 text-indigo-600 font-bold px-4 py-1.5 rounded-full text-xs uppercase tracking-widest mb-6 border border-indigo-100">
              {product.category}
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4">
              {product.title}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex text-lg items-center gap-1.5">
                <div className="flex">{renderStars(product.rating?.rate || 0)}</div>
                <span className="text-slate-900 font-black text-lg ml-1">{product.rating?.rate}</span>
              </div>
              <div className="w-1.5 h-1.5 bg-slate-300 rounded-full"></div>
              <span className="text-slate-500 font-bold uppercase tracking-widest text-xs">{product.rating?.count} Reviews</span>
            </div>

            {/* Price */}
            <div className="flex items-end gap-3 mb-8">
              <span className="text-5xl font-black text-indigo-600 tracking-tighter">
                ${product.price.toFixed(2)}
              </span>
            </div>

            {/* Description */}
            <p className="text-slate-600 text-lg leading-relaxed mb-10 border-l-4 border-indigo-500 pl-6 italic">
              {product.description}
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10 pt-10 border-t border-slate-100">
              <div className="flex items-center justify-between bg-slate-50 border border-slate-200 rounded-xl px-2 h-14 sm:w-36">
                <button onClick={handleQuantityDrop} className="w-10 h-10 flex items-center justify-center text-slate-600 hover:text-indigo-600 rounded-lg transition-colors">
                  <FiMinus className="text-xl" />
                </button>
                <span className="font-bold text-slate-900 text-lg">{quantity}</span>
                <button onClick={handleQuantityAdd} className="w-10 h-10 flex items-center justify-center text-slate-600 hover:text-indigo-600 rounded-lg transition-colors">
                  <FiPlus className="text-xl" />
                </button>
              </div>

              <button 
                onClick={() => addToCart(product, quantity)}
                className="flex-1 bg-slate-900 text-white h-14 rounded-xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-indigo-600 hover:shadow-xl transition-all shadow-md group"
              >
                <FiShoppingCart className="text-xl group-hover:scale-110 transition-transform" />
                Add to Cart
              </button>

              <button className="h-14 px-6 rounded-xl border-2 border-slate-100 text-slate-400 hover:text-pink-600 hover:border-pink-200 hover:bg-pink-50 flex items-center justify-center transition-all bg-white group">
                <FiHeart className="text-2xl group-hover:scale-110 transition-transform" />
              </button>
            </div>

            {/* Trust Policies */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-8 bg-slate-50 rounded-3xl border border-slate-100">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-indigo-600 shadow-sm border border-indigo-50 shrink-0">
                  <FiTruck className="text-xl" />
                </div>
                <div>
                  <h5 className="font-bold text-slate-900 mb-1">Fast Delivery</h5>
                  <p className="text-slate-500 text-xs">Ships in 24-48 hours</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-indigo-600 shadow-sm border border-indigo-50 shrink-0">
                  <FiRefreshCw className="text-xl" />
                </div>
                <div>
                  <h5 className="font-bold text-slate-900 mb-1">Easy Returns</h5>
                  <p className="text-slate-500 text-xs">30-day return policy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="bg-slate-50 py-20 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight mb-10">You Might Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default ProductDetails;
