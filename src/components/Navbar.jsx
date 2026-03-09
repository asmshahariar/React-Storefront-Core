import { Link } from 'react-router-dom';
import { FiShoppingCart, FiUser, FiSearch, FiMenu } from 'react-icons/fi';

const Navbar = () => {
  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-2 group">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-indigo-600 text-white rounded-xl flex items-center justify-center font-bold text-xl group-hover:bg-indigo-700 transition-colors">
              S
            </div>
            <span className="text-xl md:text-2xl font-black tracking-tight text-slate-900 group-hover:text-indigo-600 transition-colors">
              Storefront<span className="text-indigo-600">.</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            <Link to="/" className="text-slate-600 hover:text-indigo-600 font-semibold transition-colors">Home</Link>
            <Link to="/shop" className="text-slate-600 hover:text-indigo-600 font-semibold transition-colors">Shop</Link>
          </nav>

          {/* Icons Row */}
          <div className="flex items-center gap-4 md:gap-6">
            <button className="text-slate-500 hover:text-indigo-600 transition-colors p-2">
              <FiSearch className="text-xl md:text-2xl" />
            </button>
            <Link to="/login" className="text-slate-500 hover:text-indigo-600 transition-colors p-2">
              <FiUser className="text-xl md:text-2xl" />
            </Link>
            <Link to="/cart" className="text-slate-500 hover:text-indigo-600 transition-colors p-2 relative">
              <FiShoppingCart className="text-xl md:text-2xl" />
              <span className="absolute top-0 right-0 -mt-1 -mr-1 bg-indigo-600 text-white text-[10px] font-bold w-4 h-4 md:w-5 md:h-5 rounded-full flex items-center justify-center border-2 border-white">
                0
              </span>
            </Link>
            <button className="md:hidden text-slate-500 hover:text-indigo-600 transition-colors p-2">
              <FiMenu className="text-2xl" />
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Navbar;
