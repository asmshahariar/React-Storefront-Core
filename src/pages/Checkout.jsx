const Checkout = () => {
  return (
    <div className="max-w-3xl mx-auto p-4 sm:p-6 lg:p-8">
      <h2 className="text-2xl font-bold text-slate-900 mb-6">Checkout</h2>
      
      <form className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 sm:p-8 flex flex-col gap-6">
        <div>
          <h3 className="text-lg font-semibold text-slate-800 border-b border-slate-100 pb-2 mb-4">Contact Information</h3>
          <input type="email" placeholder="Email Address" className="w-full p-3 border border-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition" />
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-slate-800 border-b border-slate-100 pb-2 mb-4">Shipping Address</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input type="text" placeholder="First Name" className="w-full p-3 border border-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-indigo-600 transition" />
            <input type="text" placeholder="Last Name" className="w-full p-3 border border-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-indigo-600 transition" />
            <input type="text" placeholder="Address" className="w-full sm:col-span-2 p-3 border border-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-indigo-600 transition" />
          </div>
        </div>

        <button type="submit" className="mt-4 bg-indigo-600 text-white w-full py-4 rounded-xl font-bold text-lg shadow-md hover:bg-indigo-700 transition">
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;
