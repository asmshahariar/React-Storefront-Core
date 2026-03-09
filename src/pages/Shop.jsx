import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FiFilter, FiChevronDown, FiX, FiCheck, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import ProductCard from '../components/ProductCard';
import { fetchProducts, fetchCategories, fetchProductsByCategory } from '../services/productService';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('search') || '';
  const categoryParam = searchParams.get('category') || 'All';
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState(['All']);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loading, setLoading] = useState(true);
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  const [sortBy, setSortBy] = useState('recommended');

  // Sync state with URL params on initial load or when params change
  useEffect(() => {
    const category = searchParams.get('category') || 'All';
    setSelectedCategory(category);
  }, [searchParams]);
  
  const priceRanges = ['Under $50', '$50 to $100', '$100 to $200', 'Over $200'];

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const fetchedCategories = await fetchCategories();
        setCategories(['All', ...fetchedCategories]);
      } catch (error) {
        console.error("Failed to load categories:", error);
      }
    };
    loadCategories();
  }, []);

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      try {
        let fetchedProducts;
        if (selectedCategory === 'All') {
          fetchedProducts = await fetchProducts();
        } else {
          fetchedProducts = await fetchProductsByCategory(selectedCategory);
        }

        // Apply search filter if searchQuery exists
        if (searchQuery) {
          fetchedProducts = fetchedProducts.filter(product => 
            product.title.toLowerCase().includes(searchQuery.toLowerCase())
          );
        }

        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Failed to load products:", error);
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, [selectedCategory, searchQuery]);

  const handleCategoryChange = (category) => {
    if (category === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', category);
    }
    setSearchParams(searchParams);
    setIsMobileFiltersOpen(false);
  };

  return (
    <div className="bg-slate-50 min-h-screen pt-8 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              {searchQuery ? `Search results for "${searchQuery}"` : 'Our Collection'}
            </h1>
            <p className="text-slate-500 mt-2">
              {loading ? "Loading..." : `Showing ${products.length} products ${selectedCategory !== 'All' ? `in ${selectedCategory}` : ''}`}
            </p>
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
          
          {/* Sidebar Filters (Desktop) */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 sticky top-24">
              <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                <FiFilter className="text-indigo-600" /> Filters
              </h3>

              {/* Category Filter */}
              <div className="mb-8">
                <h4 className="font-semibold text-slate-900 mb-4 text-sm font-bold uppercase tracking-wider">Categories</h4>
                <div className="space-y-2">
                  {categories.map((category, idx) => (
                    <button 
                      key={idx} 
                      onClick={() => handleCategoryChange(category)}
                      className={`w-full flex items-center justify-between text-left px-3 py-2 rounded-xl transition-all ${selectedCategory === category ? 'bg-indigo-50 text-indigo-600 font-bold' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}`}
                    >
                      <span className="capitalize">{category}</span>
                      {selectedCategory === category && <FiCheck className="text-sm" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Filter (Visual Mock) */}
              <div className="mb-8">
                <h4 className="font-semibold text-slate-900 mb-4 text-sm font-bold uppercase tracking-wider">Price Range</h4>
                <div className="space-y-3">
                  {priceRanges.map((range, idx) => (
                    <label key={idx} className="flex items-center gap-3 cursor-pointer group">
                      <div className="relative flex items-center justify-center">
                        <input type="radio" name="price" className="peer appearance-none w-5 h-5 border-2 border-slate-300 rounded-full text-indigo-600 checked:border-indigo-600 transition-all cursor-pointer" />
                        <div className="absolute w-2.5 h-2.5 bg-indigo-600 rounded-full opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity"></div>
                      </div>
                      <span className="text-slate-600 group-hover:text-slate-900 transition-colors select-none text-sm">{range}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button 
                onClick={() => setSearchParams({})}
                className="w-full bg-slate-100 text-slate-700 py-3 rounded-xl font-bold hover:bg-slate-200 transition-colors"
              >
                Reset Filters
              </button>
            </div>
          </aside>

          {/* Product Grid Area */}
          <div className="flex-1 flex flex-col">
            
            {loading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="h-[400px] bg-white rounded-2xl border border-slate-100"></div>
                ))}
              </div>
            ) : products.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 bg-white rounded-3xl border border-slate-100">
                <FiX className="text-5xl text-slate-300 mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-2">No products found</h3>
                <p className="text-slate-500 mb-8">Try adjusting your search or filters to find what you're looking for.</p>
                <button 
                  onClick={() => setSearchParams({})}
                  className="bg-indigo-600 text-white px-8 py-3 rounded-full font-bold hover:bg-indigo-700 transition-all"
                >
                  Clear All Search
                </button>
              </div>
            )}

            {/* Pagination Component */}
            {!loading && products.length > 0 && (
              <div className="flex justify-center items-center mt-auto pb-4">
                <nav className="flex items-center gap-2">
                  <button className="p-2 rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50 hover:text-indigo-600 transition-colors">
                    <FiChevronLeft className="text-xl" />
                  </button>
                  <button className="w-10 h-10 rounded-lg bg-indigo-600 text-white font-bold shadow-md shadow-indigo-600/30 flex items-center justify-center">
                    1
                  </button>
                  <button className="w-10 h-10 rounded-lg bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 font-medium transition-colors flex items-center justify-center">
                    2
                  </button>
                  <button className="p-2 rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50 hover:text-indigo-600 transition-colors">
                    <FiChevronRight className="text-xl" />
                  </button>
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filters Modal */}
      {isMobileFiltersOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex flex-col bg-white">
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-lg font-bold">Filters</h2>
            <button onClick={() => setIsMobileFiltersOpen(false)} className="p-2"><FiX className="text-2xl" /></button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-8">
            <div>
              <h3 className="font-bold mb-4 uppercase text-xs tracking-widest text-slate-400">Categories</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((category, idx) => (
                  <button 
                    key={idx} 
                    onClick={() => handleCategoryChange(category)}
                    className={`px-4 py-2 rounded-full border transition-all capitalize font-medium ${selectedCategory === category ? 'bg-indigo-600 border-indigo-600 text-white shadow-lg shadow-indigo-200' : 'border-slate-200 text-slate-600'}`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="p-4 border-t">
            <button onClick={() => setIsMobileFiltersOpen(false)} className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold">Apply Filters</button>
          </div>
        </div>
      )}

    </div>
  );
};

export default Shop;
