const Shop = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
      <h2 className="text-2xl font-bold text-slate-900 mb-6">Our Collection</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Placeholder for ProductCards */}
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <div key={item} className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden group cursor-pointer hover:shadow-md transition">
            <div className="h-48 bg-slate-200 w-full animate-pulse group-hover:opacity-90 transition-opacity"></div>
            <div className="p-4">
              <h3 className="font-semibold text-slate-800 mb-1">Product {item}</h3>
              <p className="text-indigo-600 font-bold">$99.00</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
