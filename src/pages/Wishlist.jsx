const Wishlist = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
      <h2 className="text-2xl font-bold text-slate-900 mb-6">My Wishlist</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {[1, 2].map((item) => (
          <div key={item} className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden flex flex-col">
            <div className="h-48 bg-slate-200"></div>
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-semibold text-slate-800">Saved Item {item}</h3>
                <p className="text-indigo-600 font-bold mb-4">$59.99</p>
              </div>
              <button className="w-full border-2 border-indigo-600 text-indigo-600 py-2 rounded-lg font-semibold hover:bg-indigo-50 transition">
                Move to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
