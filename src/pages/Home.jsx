import { Link } from 'react-router-dom';
import { FiArrowRight, FiTruck, FiShield, FiRefreshCw, FiClock } from 'react-icons/fi';
import ProductCard from '../components/ProductCard';

const Home = () => {
  // Mock category data
  const categories = [
    { id: 1, name: "Electronics", image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&q=80&w=600" },
    { id: 2, name: "Minimal Fashion", image: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80&w=600" },
    { id: 3, name: "Home Living", image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80&w=600" },
    { id: 4, name: "Wearables", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=600" },
    { id: 5, name: "Photography", image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=600" },
    { id: 6, name: "Accessories", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=600" },
  ];

  return (
    <div className="w-full flex flex-col">
      
      {/* 1. Hero Banner Section */}
      <section className="relative h-[85vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden bg-slate-900">
        {/* Banner Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1920" 
            alt="Hero Background" 
            className="w-full h-full object-cover object-center opacity-40 hover:scale-105 transition-transform duration-[10s] ease-linear"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
        </div>

        {/* Banner Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
          <span className="text-indigo-400 font-bold tracking-widest uppercase mb-4 text-sm md:text-base animate-pulse">
            Spring Collection 2026
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
            <Link to="/categories" className="bg-transparent border-2 border-slate-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:border-white hover:bg-white/10 transition-all duration-300 flex items-center justify-center">
              Explore Categories
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Badges - Quick Bar */}
      <section className="bg-white border-b border-slate-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center gap-2 group cursor-default">
              <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600 mb-2 group-hover:scale-110 transition-transform">
                <FiTruck className="text-xl" />
              </div>
              <h4 className="font-bold text-slate-900 text-sm md:text-base">Free Shipping</h4>
              <p className="text-slate-500 text-xs md:text-sm">On orders over $100</p>
            </div>
            <div className="flex flex-col items-center gap-2 group cursor-default">
              <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600 mb-2 group-hover:scale-110 transition-transform">
                <FiShield className="text-xl" />
              </div>
              <h4 className="font-bold text-slate-900 text-sm md:text-base">Secure Payment</h4>
              <p className="text-slate-500 text-xs md:text-sm">100% secure checkout</p>
            </div>
            <div className="flex flex-col items-center gap-2 group cursor-default">
              <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600 mb-2 group-hover:scale-110 transition-transform">
                <FiRefreshCw className="text-xl" />
              </div>
              <h4 className="font-bold text-slate-900 text-sm md:text-base">Easy Returns</h4>
              <p className="text-slate-500 text-xs md:text-sm">30 days return policy</p>
            </div>
            <div className="flex flex-col items-center gap-2 group cursor-default">
              <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600 mb-2 group-hover:scale-110 transition-transform">
                <FiClock className="text-xl" />
              </div>
              <h4 className="font-bold text-slate-900 text-sm md:text-base">24/7 Support</h4>
              <p className="text-slate-500 text-xs md:text-sm">Dedicated friendly support</p>
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
            <Link to="/categories" className="hidden sm:flex text-indigo-600 font-bold hover:text-indigo-800 items-center gap-1 group">
              View All <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 md:gap-6">
            {categories.map((cat) => (
              <Link key={cat.id} to={`/shop?category=${cat.id}`} className="group flex flex-col items-center gap-4 cursor-pointer">
                <div className="w-full aspect-square rounded-full overflow-hidden shadow-sm border-4 border-white group-hover:shadow-xl group-hover:border-indigo-100 transition-all duration-300 relative">
                  <img src={cat.image} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors"></div>
                </div>
                <h3 className="font-bold text-slate-800 text-center group-hover:text-indigo-600 transition-colors">
                  {cat.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Featured Products Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-indigo-600 font-bold uppercase tracking-wider text-sm">Top Picks</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mt-2 mb-4">Featured Products</h2>
            <div className="w-24 h-1.5 bg-indigo-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Calling the reusable component */}
            <ProductCard />
            <ProductCard product={{ id: 2, title: 'Ergonomic Cotton Setup', price: 129.99, image: 'https://images.unsplash.com/photo-1524143986875-3b098d78b363?auto=format&fit=crop&q=80&w=800', rating: 5, reviews: 89, isNew: false, discount: 0 }} />
            <ProductCard product={{ id: 3, title: 'Stainless Steel Watch', price: 199.50, originalPrice: 250.00, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800', rating: 4, reviews: 312, isNew: false, discount: 20 }} />
            <ProductCard product={{ id: 4, title: 'Smart Home Speaker', price: 89.99, image: 'https://images.unsplash.com/photo-1589003077984-394fb208b5be?auto=format&fit=crop&q=80&w=800', rating: 4.5, reviews: 45, isNew: true, discount: 0 }} />
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/shop" className="inline-block border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-full font-bold hover:bg-indigo-600 hover:text-white hover:shadow-lg hover:shadow-indigo-600/30 transition-all duration-300">
              Browse More Favorites
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Promotional Banner Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-indigo-900 to-purple-900 rounded-3xl overflow-hidden shadow-2xl relative flex flex-col md:flex-row items-center border border-indigo-800">
            {/* Background Graphic Patterns */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl"></div>

            {/* Promo Image */}
            <div className="w-full md:w-1/2 h-64 md:h-96 relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=1200" 
                alt="Promo Model" 
                className="w-full h-full object-cover rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-indigo-900 to-transparent"></div>
            </div>

            {/* Promo Content */}
            <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 relative z-10 text-center md:text-left">
              <span className="bg-rose-500 text-white font-bold px-3 py-1 rounded-full text-sm uppercase tracking-wider mb-6 inline-block shadow-md">
                Limited Time Offer
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-4">
                Mid-Season Sale! <br /> <span className="text-indigo-400">Up to 50% Off</span>
              </h2>
              <p className="text-slate-300 text-lg mb-8 max-w-md mx-auto md:mx-0">
                Upgrade your wardrobe and living spaces with our premium collection at unbeatable prices. Event ends this weekend.
              </p>
              <Link to="/shop?sale=true" className="bg-white text-indigo-900 font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-white/20 hover:bg-slate-50 transition-all inline-block hover:-translate-y-1">
                Claim Your Discount
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Best Sellers Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mt-2 mb-4">Best Sellers</h2>
            <div className="w-24 h-1.5 bg-slate-300 mx-auto rounded-full"></div>
            <p className="mt-4 text-slate-500 max-w-2xl mx-auto">Our most popular items loved and rated highly by thousands of our happy customers.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <ProductCard product={{ id: 5, title: 'Classic Aviator Sunglasses', price: 145.00, image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=800', rating: 5, reviews: 1042, isNew: false, discount: 0 }} />
            <ProductCard product={{ id: 6, title: 'Premium Leather Boots', price: 189.99, image: 'https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&q=80&w=800', rating: 4.5, reviews: 753, isNew: false, discount: 0 }} />
            <ProductCard product={{ id: 7, title: 'Vintage Camera Lens', price: 349.00, originalPrice: 400.00, image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800', rating: 4, reviews: 215, isNew: false, discount: 15 }} />
            <ProductCard product={{ id: 8, title: 'Sleek Laptop Bag', price: 79.99, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=800', rating: 5, reviews: 541, isNew: true, discount: 0 }} />
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
