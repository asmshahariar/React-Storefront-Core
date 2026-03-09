import { Link } from 'react-router-dom';

const Cart = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
      <h2 className="text-2xl font-bold text-slate-900 mb-6">Shopping Cart</h2>
      
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 text-center flex flex-col items-center">
        <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center text-slate-400 mb-4">
          🛒
        </div>
        <h3 className="text-lg font-semibold text-slate-800 mb-2">Your cart is empty</h3>
        <p className="text-slate-500 mb-6">Looks like you haven't added anything yet.</p>
        <Link to="/shop" className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-indigo-700 transition">
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default Cart;
