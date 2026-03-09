import { useState } from 'react';
import { FiFilter, FiChevronDown, FiX, FiCheck, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import ProductCard from '../components/ProductCard';

const Shop = () => {
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  const [sortBy, setSortBy] = useState('recommended');
  
  // Mock products data
  const mockProducts = [
    { id: 1, title: 'Premium Minimalist Headphones', price: 249.99, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800', rating: 4.5, reviews: 128, isNew: true, discount: 16 },
    { id: 2, title: 'Ergonomic Cotton Setup', price: 129.99, image: 'https://images.unsplash.com/photo-1524143986875-3b098d78b363?auto=format&fit=crop&q=80&w=800', rating: 5, reviews: 89, isNew: false, discount: 0 },
    { id: 3, title: 'Stainless Steel Watch', price: 199.50, originalPrice: 250.00, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800', rating: 4, reviews: 312, isNew: false, discount: 20 },
    { id: 4, title: 'Smart Home Speaker', price: 89.99, image: 'https://unsplash.com/photos/a-person-holding-a-cell-phone-next-to-a-smart-device-A-bI5AsuxJs?auto=format&fit=crop&q=80&w=800', rating: 4.5, reviews: 45, isNew: true, discount: 0 },
    { id: 5, title: 'Classic Aviator Sunglasses', price: 145.00, image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=800', rating: 5, reviews: 1042, isNew: false, discount: 0 },
    { id: 6, title: 'Premium Leather Boots', price: 189.99, image: 'https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&q=80&w=800', rating: 4.5, reviews: 753, isNew: false, discount: 0 },
    { id: 7, title: 'Vintage Camera Lens', price: 349.00, originalPrice: 400.00, image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800', rating: 4, reviews: 215, isNew: false, discount: 15 },
    { id: 8, title: 'Sleek Laptop Bag', price: 79.99, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=800', rating: 5, reviews: 541, isNew: true, discount: 0 },
    { id: 9, title: 'Mechanical Keyboard', price: 159.00, image: 'https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&q=80&w=800', rating: 4.8, reviews: 320, isNew: false, discount: 10 },
  ];

  const categories = ['All', 'Electronics', 'Fashion', 'Home Living', 'Accessories', 'Beauty'];
  const priceRanges = ['Under $50', '$50 to $100', '$100 to $200', 'Over $200'];

  return (
    <div className="bg-slate-50 min-h-screen pt-8 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">Our Collection</h1>
            <p className="text-slate-500 mt-2">Showing 1-9 of 36 products</p>
          </div>

          <div className="flex items-center gap-4">
            {/* Mobile Filter Toggle */}
            <button 
              onClick={() => setIsMobileFiltersOpen(true)}
              className="lg:hidden flex items-center gap-2 bg-white border border-slate-200 px-4 py-2.5 rounded-lg text-slate-700 font-medium hover:bg-slate-50 transition-colors shadow-sm"
            >
              <FiFilter /> Filters
            </button>

            {/* Desktop Sort Dropdown */}
            <div className="relative inline-block text-left">
              <div className="flex items-center gap-2">
                <span className="text-slate-500 text-sm hidden sm:block">Sort by:</span>
                <select 
                  className="bg-white border border-slate-200 outline-none px-4 py-2.5 rounded-lg text-slate-700 font-medium hover:border-slate-300 focus:ring-2 focus:ring-indigo-100 focus:border-indigo-400 transition-all shadow-sm appearance-none cursor-pointer pr-10"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="recommended">Recommended</option>
                  <option value="newest">Newest Arrivals</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
                <FiChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar Filters (Desktop) -> matches Left column */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 sticky top-24">
              <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                <FiFilter className="text-indigo-600" /> Filters
              </h3>

              {/* Category Filter */}
              <div className="mb-8">
                <h4 className="font-semibold text-slate-900 mb-4">Categories</h4>
                <div className="space-y-3">
                  {categories.map((category, idx) => (
                    <label key={idx} className="flex items-center gap-3 cursor-pointer group">
                      <div className="relative flex items-center justify-center">
                        <input type="checkbox" className="peer appearance-none w-5 h-5 border-2 border-slate-300 rounded text-indigo-600 checked:bg-indigo-600 checked:border-indigo-600 transition-all cursor-pointer" defaultChecked={idx === 0} />
                        <FiCheck className="absolute text-white opacity-0 peer-checked:opacity-100 pointer-events-none text-sm transition-opacity" />
                      </div>
                      <span className="text-slate-600 group-hover:text-slate-900 transition-colors select-none">{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div className="mb-8">
                <h4 className="font-semibold text-slate-900 mb-4">Price Range</h4>
                <div className="space-y-3">
                  {priceRanges.map((range, idx) => (
                    <label key={idx} className="flex items-center gap-3 cursor-pointer group">
                      <div className="relative flex items-center justify-center">
                        <input type="radio" name="price" className="peer appearance-none w-5 h-5 border-2 border-slate-300 rounded-full text-indigo-600 checked:border-indigo-600 transition-all cursor-pointer" />
                        <div className="absolute w-2.5 h-2.5 bg-indigo-600 rounded-full opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity"></div>
                      </div>
                      <span className="text-slate-600 group-hover:text-slate-900 transition-colors select-none">{range}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button className="w-full bg-slate-100 text-slate-700 py-3 rounded-xl font-bold hover:bg-slate-200 transition-colors">
                Reset Filters
              </button>
            </div>
          </aside>

          {/* Product Grid Area (Right Column) */}
          <div className="flex-1 flex flex-col">
            
            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {mockProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Pagination Component */}
            <div className="flex justify-center items-center mt-auto pb-4">
              <nav className="flex items-center gap-2">
                <button className="p-2 rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50 hover:text-indigo-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                  <FiChevronLeft className="text-xl" />
                </button>
                <button className="w-10 h-10 rounded-lg bg-indigo-600 text-white font-bold shadow-md shadow-indigo-600/30 flex items-center justify-center">
                  1
                </button>
                <button className="w-10 h-10 rounded-lg bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 font-medium transition-colors flex items-center justify-center">
                  2
                </button>
                <button className="w-10 h-10 rounded-lg bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 font-medium transition-colors flex items-center justify-center">
                  3
                </button>
                <span className="text-slate-400 px-1">...</span>
                <button className="w-10 h-10 rounded-lg bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 font-medium transition-colors flex items-center justify-center">
                  8
                </button>
                <button className="p-2 rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50 hover:text-indigo-600 transition-colors">
                  <FiChevronRight className="text-xl" />
                </button>
              </nav>
            </div>

          </div>
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      <div 
        className={`lg:hidden fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 transition-opacity duration-300 ${isMobileFiltersOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMobileFiltersOpen(false)}
      ></div>

      {/* Mobile Sidebar Content */}
      <div className={`lg:hidden fixed inset-y-0 right-0 w-[300px] bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col ${isMobileFiltersOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        
        <div className="flex items-center justify-between p-4 border-b border-slate-100">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <FiFilter className="text-indigo-600" /> Filters
          </h2>
          <button 
            onClick={() => setIsMobileFiltersOpen(false)}
            className="p-2 text-slate-500 hover:text-rose-500 hover:bg-slate-50 rounded-full transition-colors"
          >
            <FiX className="text-xl" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-8">
           {/* Mobile Category Filter */}
           <div>
              <h4 className="font-semibold text-slate-900 mb-4">Categories</h4>
              <div className="space-y-4">
                {categories.map((category, idx) => (
                  <label key={idx} className="flex items-center gap-3 cursor-pointer">
                    <div className="relative flex items-center justify-center">
                      <input type="checkbox" className="peer appearance-none w-6 h-6 border-2 border-slate-300 rounded text-indigo-600 checked:bg-indigo-600 checked:border-indigo-600 transition-all cursor-pointer" defaultChecked={idx === 0} />
                      <FiCheck className="absolute text-white opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity" />
                    </div>
                    <span className="text-slate-700">{category}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Mobile Price Filter */}
            <div>
              <h4 className="font-semibold text-slate-900 mb-4">Price Range</h4>
              <div className="space-y-4">
                {priceRanges.map((range, idx) => (
                  <label key={idx} className="flex items-center gap-3 cursor-pointer">
                    <div className="relative flex items-center justify-center">
                      <input type="radio" name="mobile-price" className="peer appearance-none w-6 h-6 border-2 border-slate-300 rounded-full text-indigo-600 checked:border-indigo-600 transition-all cursor-pointer" />
                      <div className="absolute w-3 h-3 bg-indigo-600 rounded-full opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity"></div>
                    </div>
                    <span className="text-slate-700">{range}</span>
                  </label>
                ))}
              </div>
            </div>
        </div>

        <div className="p-4 border-t border-slate-100 flex gap-4">
          <button 
            onClick={() => setIsMobileFiltersOpen(false)}
            className="flex-1 bg-slate-100 text-slate-700 py-3.5 rounded-xl font-bold hover:bg-slate-200 transition-colors"
          >
            Reset
          </button>
          <button 
            onClick={() => setIsMobileFiltersOpen(false)}
            className="flex-1 bg-indigo-600 text-white py-3.5 rounded-xl font-bold shadow-lg shadow-indigo-600/30 hover:bg-indigo-700 transition-colors"
          >
            Apply
          </button>
        </div>
      </div>

    </div>
  );
};

export default Shop;
