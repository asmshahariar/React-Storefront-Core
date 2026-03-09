import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        {/* Navbar Placeholder */}
        <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <h1 className="text-2xl font-bold text-indigo-600 tracking-tight">
              ShopVite
            </h1>
            <nav className="hidden md:flex gap-6 font-medium text-slate-600">
              <a href="#" className="hover:text-indigo-600 transition-colors">Home</a>
              <a href="#" className="hover:text-indigo-600 transition-colors">Products</a>
              <a href="#" className="hover:text-indigo-600 transition-colors">Cart (0)</a>
            </nav>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <Routes>
            <Route 
              path="/" 
              element={
                <div className="w-full flex flex-col items-center text-center p-8 md:p-16 bg-white rounded-3xl shadow-sm border border-slate-100">
                  <span className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-sm font-semibold mb-6">
                    New Arrival
                  </span>
                  <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                    Modern E-Commerce <br className="hidden md:block" /> Experience
                  </h2>
                  <p className="max-w-2xl text-lg text-slate-500 mb-10">
                    A blazing fast, responsive, and beautiful storefront built meticulously with React, Vite, and Tailwind CSS.
                  </p>
                  <button className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg shadow-indigo-600/20 hover:bg-indigo-700 hover:shadow-xl hover:shadow-indigo-600/30 hover:-translate-y-0.5 transition-all outline-none focus:ring-4 focus:ring-indigo-600/50">
                    Explore Products
                  </button>
                </div>
              } 
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
