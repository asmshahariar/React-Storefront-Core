import { Outlet, Link } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col">
      {/* Basic Navbar Placeholder */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-black tracking-tight text-indigo-600">
            Storefront
          </Link>
          <nav className="flex gap-6 font-medium text-sm text-slate-600">
            <Link to="/" className="hover:text-indigo-600 transition-colors">Home</Link>
            <Link to="/shop" className="hover:text-indigo-600 transition-colors">Shop</Link>
            <Link to="/categories" className="hover:text-indigo-600 transition-colors">Categories</Link>
          </nav>
          <div className="flex gap-4 items-center font-medium text-sm">
            <Link to="/login" className="text-slate-600 hover:text-indigo-600">Login</Link>
            <Link to="/cart" className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
              Cart (0)
            </Link>
          </div>
        </div>
      </header>

      {/* Dynamic Page Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Basic Footer Placeholder */}
      <footer className="bg-slate-900 text-slate-400 py-8 text-center text-sm">
        <p>© {new Date().getFullYear()} Storefront. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default MainLayout;
