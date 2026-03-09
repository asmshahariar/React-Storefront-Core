import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  FiShoppingCart, 
  FiUser, 
  FiSearch, 
  FiMenu, 
  FiX, 
  FiHeart 
} from 'react-icons/fi';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const { itemCount } = useCart();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchTerm.trim())}`);
      setIsSearchOpen(false);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <>
      <header className="bg-white/90 backdrop-blur-md sticky top-0 z-40 shadow-sm border-b border-slate-100 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            
            {/* Left Container: Mobile Menu Toggle + Logo */}
            <div className="flex items-center gap-4 flex-1 lg:flex-none">
              <button 
                onClick={toggleMobileMenu}
                className="lg:hidden text-slate-600 hover:text-indigo-600 focus:outline-none p-2 -ml-2 transition-colors"
              >
                {isMobileMenuOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
              </button>

              {/* Logo */}
              <Link to="/" className="flex-shrink-0 flex items-center gap-2 group z-10">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-indigo-600 text-white rounded-xl flex items-center justify-center font-bold text-xl group-hover:bg-indigo-700 group-hover:shadow-md group-hover:shadow-indigo-600/20 transition-all duration-300">
                  S
                </div>
                <span className="text-xl md:text-2xl font-black tracking-tight text-slate-900 group-hover:text-indigo-600 transition-colors hidden sm:block">
                  React-Store<span className="text-indigo-600">.</span>
                </span>
              </Link>
            </div>

            {/* Center Container: Desktop Navigation Links */}
            <nav className="hidden lg:flex flex-1 justify-center items-center gap-8">
              <Link to="/" className="text-slate-600 hover:text-indigo-600 font-semibold transition-colors">Home</Link>
              <Link to="/shop" className="text-slate-600 hover:text-indigo-600 font-semibold transition-colors">Shop</Link>
              <Link to="/categories" className="text-slate-600 hover:text-indigo-600 font-semibold transition-colors">Categories</Link>
            </nav>

            {/* Right Container: Actions (Search, Wishlist, Cart, Login) */}
            <div className="flex flex-1 lg:flex-none justify-end items-center gap-2 sm:gap-4 md:gap-5 z-10">
              
              {/* Desktop Search Bar */}
              <form 
                onSubmit={handleSearch}
                className="hidden xl:flex items-center bg-slate-100 rounded-full px-4 py-2 transition-all duration-300 border border-transparent focus-within:border-indigo-300 focus-within:bg-white focus-within:shadow-sm"
              >
                <FiSearch className="text-slate-400 text-lg mr-2" />
                <input 
                  type="text" 
                  placeholder="Search products..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="bg-transparent border-none focus:outline-none text-sm w-48 xl:w-64 text-slate-700 placeholder-slate-400"
                />
              </form>

              {/* Tablet/Mobile Search Icon */}
              <button 
                onClick={toggleSearch}
                className="xl:hidden text-slate-600 hover:text-indigo-600 transition-colors p-2 rounded-full hover:bg-slate-50"
              >
                <FiSearch className="text-xl md:text-2xl" />
              </button>

              {/* Wishlist */}
              <Link to="/wishlist" className="hidden sm:block text-slate-600 hover:text-pink-600 transition-colors p-2 rounded-full hover:bg-pink-50 relative group">
                <FiHeart className="text-xl md:text-2xl" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-pink-500 rounded-full border-2 border-white opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </Link>

              {/* Cart */}
              <Link to="/cart" className="text-slate-600 hover:text-indigo-600 transition-colors p-2 rounded-full hover:bg-indigo-50 relative pointer-events-auto">
                <FiShoppingCart className="text-xl md:text-2xl" />
                <span className="absolute top-0 right-0 -mt-0.5 -mr-0.5 bg-indigo-600 text-white text-[10px] font-bold w-4 h-4 md:w-5 md:h-5 rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                  {itemCount}
                </span>
              </Link>

              {/* Login / User */}
              <Link 
                to="/login" 
                className="hidden sm:flex items-center gap-2 ml-2 bg-slate-900 text-white px-4 py-2 md:py-2.5 rounded-full font-semibold hover:bg-indigo-600 hover:shadow-lg hover:shadow-indigo-600/30 transition-all duration-300"
              >
                <FiUser className="text-lg" />
                <span className="text-sm hidden md:block">Log in</span>
              </Link>
            </div>

          </div>
        </div>

        {/* Mobile/Tablet Search Input Dropdown */}
        <div className={`xl:hidden overflow-hidden transition-all duration-300 ease-in-out ${isSearchOpen ? 'max-h-20 border-t border-slate-100 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="p-4 bg-white">
            <form onSubmit={handleSearch} className="flex items-center bg-slate-100 rounded-lg px-4 py-2 border border-slate-200">
              <FiSearch className="text-slate-400 text-lg mr-3" />
              <input 
                type="text" 
                placeholder="Search store..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-transparent border-none focus:outline-none text-sm w-full text-slate-700"
                autoFocus={isSearchOpen}
              />
            </form>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`lg:hidden fixed inset-0 z-[60] bg-slate-900/40 backdrop-blur-sm transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={toggleMobileMenu}
      ></div>

      {/* Mobile Menu Drawer */}
      <div 
        className={`lg:hidden fixed top-0 left-0 bottom-0 w-[280px] sm:w-[320px] bg-white z-[70] shadow-2xl transform transition-transform duration-300 ease-out flex flex-col ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="p-4 border-b border-slate-100 flex justify-between items-center h-16 md:h-20">
          <span className="text-xl md:text-2xl font-black tracking-tight text-slate-900">
            Menu
          </span>
          <button 
            onClick={toggleMobileMenu}
            className="text-slate-500 hover:text-rose-500 p-2 rounded-full bg-slate-50 transition-colors"
          >
            <FiX className="text-xl" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-6 px-4 flex flex-col gap-4">
          <Link to="/" onClick={toggleMobileMenu} className="text-lg font-semibold text-slate-800 p-3 rounded-xl hover:bg-indigo-50 hover:text-indigo-600 transition-colors">
            Home
          </Link>
          <Link to="/shop" onClick={toggleMobileMenu} className="text-lg font-semibold text-slate-800 p-3 rounded-xl hover:bg-indigo-50 hover:text-indigo-600 transition-colors">
            Shop All
          </Link>
          <Link to="/categories" onClick={toggleMobileMenu} className="text-lg font-semibold text-slate-800 p-3 rounded-xl hover:bg-indigo-50 hover:text-indigo-600 transition-colors">
            Categories
          </Link>
          
          <hr className="my-4 border-slate-100" />
          
          <Link to="/wishlist" onClick={toggleMobileMenu} className="flex items-center gap-3 text-lg font-medium text-slate-700 p-3 rounded-xl hover:bg-pink-50 hover:text-pink-600 transition-colors">
            <FiHeart className="text-xl" /> Wishlist
          </Link>
          <Link to="/profile" onClick={toggleMobileMenu} className="flex items-center gap-3 text-lg font-medium text-slate-700 p-3 rounded-xl hover:bg-slate-50 transition-colors">
            <FiUser className="text-xl" /> My Account
          </Link>
        </div>

        <div className="p-4 border-t border-slate-100">
          <Link 
            to="/login" 
            onClick={toggleMobileMenu}
            className="w-full flex items-center justify-center gap-2 bg-indigo-600 text-white py-3.5 rounded-xl font-bold hover:bg-indigo-700 hover:shadow-lg transition-all"
          >
            Log In / Register
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
