import { Link } from 'react-router-dom';
import { 
  FiInstagram, 
  FiTwitter, 
  FiFacebook, 
  FiYoutube, 
  FiMail, 
  FiMapPin, 
  FiPhone 
} from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* About Section */}
          <div className="col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6 text-white group">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center font-bold text-lg group-hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-600/20">
                S
              </div>
              <span className="text-2xl font-black tracking-tight group-hover:text-indigo-400 transition-colors">
                Storefront<span className="text-indigo-500">.</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              Your premium destination for modern, high-quality products. We are dedicated to providing the best shopping experience with top-tier customer service and exclusive selections.
            </p>
            <div className="space-y-4 text-sm text-slate-400">
              <p className="flex items-start gap-3 group cursor-default">
                <FiMapPin className="text-indigo-500 text-lg group-hover:text-indigo-400 transition-colors mt-0.5" /> 
                <span>123 Commerce St, Suite 100<br />New York, NY 10001</span>
              </p>
              <p className="flex items-center gap-3 group cursor-default">
                <FiPhone className="text-indigo-500 text-lg group-hover:text-indigo-400 transition-colors" /> 
                <span>+1 (555) 123-4567</span>
              </p>
              <p className="flex items-center gap-3 group hover:text-indigo-400 transition-colors cursor-pointer">
                <FiMail className="text-indigo-500 text-lg group-hover:text-indigo-400 transition-colors" /> 
                <span>support@storefront.com</span>
              </p>
            </div>
          </div>

          {/* Quick Navigation Section */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 relative inline-block">
              Quick Navigation
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-indigo-600 rounded-full"></span>
            </h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link to="/" className="text-slate-400 hover:text-indigo-400 flex items-center gap-2 transition-transform hover:translate-x-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-700"></span>Home
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-slate-400 hover:text-indigo-400 flex items-center gap-2 transition-transform hover:translate-x-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-700"></span>Shop All
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-slate-400 hover:text-indigo-400 flex items-center gap-2 transition-transform hover:translate-x-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-700"></span>Categories
                </Link>
              </li>
              <li>
                <Link to="/cart" className="text-slate-400 hover:text-indigo-400 flex items-center gap-2 transition-transform hover:translate-x-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-700"></span>Shopping Cart
                </Link>
              </li>
              <li>
                <Link to="/wishlist" className="text-slate-400 hover:text-indigo-400 flex items-center gap-2 transition-transform hover:translate-x-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-700"></span>My Wishlist
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Support Section */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 relative inline-block">
              Customer Support
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-indigo-600 rounded-full"></span>
            </h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link to="#" className="text-slate-400 hover:text-indigo-400 flex items-center gap-2 transition-transform hover:translate-x-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-700"></span>Help Center & FAQ
                </Link>
              </li>
              <li>
                <Link to="#" className="text-slate-400 hover:text-indigo-400 flex items-center gap-2 transition-transform hover:translate-x-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-700"></span>Shipping & Delivery
                </Link>
              </li>
              <li>
                <Link to="#" className="text-slate-400 hover:text-indigo-400 flex items-center gap-2 transition-transform hover:translate-x-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-700"></span>Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link to="#" className="text-slate-400 hover:text-indigo-400 flex items-center gap-2 transition-transform hover:translate-x-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-700"></span>Track Your Order
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-indigo-400 flex items-center gap-2 transition-transform hover:translate-x-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-700"></span>Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media & Newsletter Section */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 relative inline-block">
              Connect With Us
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-indigo-600 rounded-full"></span>
            </h4>
            <p className="text-slate-400 text-sm mb-6">
              Join our community and stay updated with the latest trends and exclusive offers.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex gap-4 mb-8">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 hover:-translate-y-1 text-white transition-all duration-300 shadow-lg group">
                <FiInstagram className="text-lg group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 hover:-translate-y-1 text-white transition-all duration-300 shadow-lg group">
                <FiTwitter className="text-lg group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 hover:-translate-y-1 text-white transition-all duration-300 shadow-lg group">
                <FiFacebook className="text-lg group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 hover:-translate-y-1 text-white transition-all duration-300 shadow-lg group">
                <FiYoutube className="text-lg group-hover:scale-110 transition-transform" />
              </a>
            </div>

            <h4 className="text-white font-bold text-sm mb-4">Subscribe to our Newsletter</h4>
            <form className="flex w-full relative">
              <input 
                type="email" 
                placeholder="Email address..." 
                className="w-full bg-slate-800 border border-slate-700 rounded-lg pl-4 pr-24 py-3 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-white placeholder-slate-500 transition-colors" 
              />
              <button 
                type="button" 
                className="absolute right-1.5 top-1.5 bottom-1.5 bg-indigo-600 text-white px-4 rounded-md font-bold text-xs hover:bg-indigo-500 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 border-t border-slate-800 text-sm text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} React-Storefront-Core. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="#" className="hover:text-indigo-400 transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-indigo-400 transition-colors">Terms of Service</Link>
            <Link to="#" className="hover:text-indigo-400 transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
