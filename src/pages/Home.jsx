import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiTruck, FiShield, FiRefreshCw, FiClock } from 'react-icons/fi';
import ProductCard from '../components/ProductCard';
import { fetchProducts } from '../services/productService';

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [bestSellers, setBestSellers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Mock category data (Still useful for the layout as the API categories don't have images)
  const categories = [
    { id: 1, name: "Electronics", image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&q=80&w=600", slug: "electronics" },
    { id: 2, name: "Jewelery", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=600", slug: "jewelery" },
    { id: 3, name: "Men's Clothing", image: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80&w=600", slug: "men's clothing" },
    { id: 4, name: "Women's Clothing", image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=600", slug: "women's clothing" },
  ];

  useEffect(() => {
    const loadHomeData = async () => {
      setLoading(true);
      try {
        const allProducts = await fetchProducts();
        // Just take some slices for featured and best sellers
        setFeaturedProducts(allProducts.slice(0, 4));
        setBestSellers(allProducts.slice(4, 8));
      } catch (error) {
        console.error("Failed to load home products:", error);
      } finally {
        setLoading(false);
      }
    };
    loadHomeData();
  }, []);

  return (
    <div className="w-full flex flex-col">
      
      {/* 1. Hero Banner Section */}
      <section className="relative h-[85vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1920" 
            alt="Hero Background" 
            className="w-full h-full object-cover object-center opacity-40 hover:scale-105 transition-transform duration-[10s] ease-linear"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
          <span className="text-indigo-400 font-bold tracking-widest uppercase mb-4 text-sm md:text-base animate-pulse">
            New arrivals 2026
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight drop-shadow-lg">
            Elevate Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              Lifestyle.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl font-light leading-relaxed">
            Discover our curated collection of premium products, designed to bring modern aesthetics and unparalleled functionality to your everyday routine.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link to="/shop" className="bg-white text-slate-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-indigo-50 hover:-translate-y-1 transition-all duration-300 shadow-xl shadow-white/10 flex items-center justify-center gap-2">
              Shop Now <FiArrowRight />
            </Link>
            <Link to="/shop" className="bg-transparent border-2 border-slate-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:border-white hover:bg-white/10 transition-all duration-300 flex items-center justify-center">
              Explore Collections
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-white border-b border-slate-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center gap-2 group cursor-default">
              <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600 mb-2 group-hover:scale-110 transition-transform">
                <FiTruck className="text-xl" />
              </div>
              <h4 className="font-bold text-slate-900 text-sm">Free Shipping</h4>
              <p className="text-slate-500 text-xs text-xs">On orders over $100</p>
            </div>
            <div className="flex flex-col items-center gap-2 group cursor-default">
              <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600 mb-2 group-hover:scale-110 transition-transform">
                <FiShield className="text-xl" />
              </div>
              <h4 className="font-bold text-slate-900 text-sm">Secure Payment</h4>
              <p className="text-slate-500 text-xs text-xs">100% secure checkout</p>
            </div>
            <div className="flex flex-col items-center gap-2 group cursor-default">
              <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600 mb-2 group-hover:scale-110 transition-transform">
                <FiRefreshCw className="text-xl" />
              </div>
              <h4 className="font-bold text-slate-900 text-sm">Easy Returns</h4>
              <p className="text-slate-500 text-xs text-xs">30 days return policy</p>
            </div>
            <div className="flex flex-col items-center gap-2 group cursor-default">
              <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600 mb-2 group-hover:scale-110 transition-transform">
                <FiClock className="text-xl" />
              </div>
              <h4 className="font-bold text-slate-900 text-sm">24/7 Support</h4>
              <p className="text-slate-500 text-xs text-xs">Friendly support</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Top Categories Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-2">Shop by Category</h2>
              <p className="text-slate-500">Find exactly what you are looking for.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <Link key={cat.id} to={`/shop?category=${encodeURIComponent(cat.slug)}`} className="group relative h-64 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
                <img src={cat.image} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl font-bold mb-1 capitalize tracking-tight">{cat.name}</h3>
                  <p className="text-slate-300 text-sm flex items-center gap-2 font-medium">
                    Browse Collection <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Featured Products Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-indigo-600 font-bold uppercase tracking-widest text-sm bg-indigo-50 px-4 py-1.5 rounded-full border border-indigo-100">Top Picks</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mt-6 mb-4">Featured Products</h2>
            <div className="w-24 h-1.5 bg-indigo-600 mx-auto rounded-full"></div>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 animate-pulse">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-96 bg-slate-100 rounded-3xl"></div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredProducts.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-[3rem] overflow-hidden relative flex flex-col md:flex-row items-center border border-slate-800 shadow-2xl">
            <div className="w-full md:w-1/2 h-80 md:h-[500px] relative">
              <img 
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=1200" 
                alt="Promo Model" 
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-slate-900 to-transparent"></div>
            </div>

            <div className="w-full md:w-1/2 p-10 md:p-16 text-center md:text-left">
              <span className="bg-indigo-600 text-white font-bold px-4 py-1.5 rounded-full text-xs uppercase tracking-widest mb-6 inline-block">
                Limited Time Offer
              </span>
              <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
                Mid-Season Sale! <br /> <span className="text-indigo-400">Up to 70% Off</span>
              </h2>
              <p className="text-slate-400 text-lg mb-10 max-w-md mx-auto md:mx-0 font-medium">
                Upgrade your wardrobe with our newest collections at unbeatable prices.
              </p>
              <Link to="/shop" className="bg-white text-slate-900 font-bold px-10 py-4 rounded-2xl shadow-lg hover:bg-slate-50 transition-all inline-block hover:-translate-y-1">
                Shop the Sale
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Best Sellers Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">Best Sellers</h2>
            <div className="w-24 h-1.5 bg-slate-300 mx-auto rounded-full"></div>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 animate-pulse">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-96 bg-white rounded-3xl"></div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {bestSellers.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}
        </div>
      </section>

    </div>
  );
};

export default Home;
