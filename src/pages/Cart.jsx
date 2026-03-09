import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiTrash2, FiMinus, FiPlus, FiArrowRight, FiShield } from 'react-icons/fi';

const Cart = () => {
  // Mock initial cart data
  const initialCart = [
    {
      id: 1,
      title: 'Premium Minimalist Headphones',
      price: 249.99,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=300',
      color: 'Matte Black',
      quantity: 1,
    },
    {
      id: 3,
      title: 'Stainless Steel Watch',
      price: 199.50,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=300',
      color: 'Silver',
      quantity: 2,
    }
  ];

  const [cartItems, setCartItems] = useState(initialCart);

  const updateQuantity = (id, change) => {
    setCartItems(cartItems.map(item => {
      if (item.id === id) {
        const newQuantity = item.quantity + change;
        return { ...item, quantity: newQuantity > 0 ? newQuantity : 1 };
      }
      return item;
    }));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  // Calculations
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 100 ? 0 : 15.00;
  const tax = subtotal * 0.08; // 8% mock tax
  const total = subtotal + shipping + tax;

  if (cartItems.length === 0) {
    return (
      <div className="bg-slate-50 min-h-[70vh] flex flex-col items-center justify-center p-4">
        <div className="w-24 h-24 bg-indigo-100 rounded-full flex items-center justify-center mb-6 text-indigo-600">
          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
        </div>
        <h2 className="text-3xl font-black text-slate-900 tracking-tight mb-2">Your cart is empty</h2>
        <p className="text-slate-500 mb-8 max-w-md text-center">Looks like you haven't added anything to your cart yet. Let's find something special for you.</p>
        <Link to="/shop" className="bg-indigo-600 text-white px-8 py-3.5 rounded-full font-bold hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-600/30 transition-all">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-8 md:mb-12">
          Shopping Cart <span className="text-slate-400 text-2xl font-medium">({cartItems.length} items)</span>
        </h1>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* Left Column: Cart Items List */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
              
              {/* Desktop Header */}
              <div className="hidden sm:grid grid-cols-12 gap-4 p-6 bg-slate-50/50 border-b border-slate-100 text-xs font-bold text-slate-500 uppercase tracking-wider">
                <div className="col-span-6">Product</div>
                <div className="col-span-3 text-center">Quantity</div>
                <div className="col-span-3 text-right">Total</div>
              </div>

              {/* Items */}
              <ul className="divide-y divide-slate-100">
                {cartItems.map((item) => (
                  <li key={item.id} className="p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-12 gap-4 items-center group">
                    
                    {/* Img + Title */}
                    <div className="sm:col-span-6 flex items-center gap-4">
                      <Link to={`/product/${item.id}`} className="shrink-0 w-24 h-24 bg-slate-100 rounded-xl overflow-hidden relative border border-slate-100 group-hover:border-indigo-100 transition-colors">
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      </Link>
                      <div className="flex flex-col">
                        <Link to={`/product/${item.id}`} className="font-bold text-slate-900 hover:text-indigo-600 transition-colors line-clamp-2 mb-1">
                          {item.title}
                        </Link>
                        <p className="text-slate-500 text-sm mb-2">Color: {item.color}</p>
                        <button 
                          onClick={() => removeItem(item.id)}
                          className="flex items-center gap-1 text-sm font-medium text-rose-500 hover:text-rose-600 transition-colors w-max"
                        >
                          <FiTrash2 /> Remove
                        </button>
                      </div>
                    </div>

                    {/* Quantity Selector */}
                    <div className="sm:col-span-3 flex justify-between sm:justify-center items-center mt-4 sm:mt-0">
                      <span className="sm:hidden text-slate-500 font-medium text-sm">Quantity:</span>
                      <div className="flex items-center justify-between bg-slate-50 border border-slate-200 rounded-lg px-2 h-10 w-28">
                        <button onClick={() => updateQuantity(item.id, -1)} className="w-8 h-8 flex items-center justify-center text-slate-500 hover:text-indigo-600 hover:bg-slate-200/50 rounded transition-colors">
                          <FiMinus className="text-sm" />
                        </button>
                        <span className="font-bold text-slate-900 text-sm">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, 1)} className="w-8 h-8 flex items-center justify-center text-slate-500 hover:text-indigo-600 hover:bg-slate-200/50 rounded transition-colors">
                          <FiPlus className="text-sm" />
                        </button>
                      </div>
                    </div>

                    {/* Item Total */}
                    <div className="sm:col-span-3 flex justify-between sm:justify-end items-center mt-2 sm:mt-0">
                      <span className="sm:hidden text-slate-500 font-medium text-sm">Total:</span>
                      <div className="flex flex-col sm:items-end">
                        <span className="font-black text-slate-900 text-lg">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                        {item.quantity > 1 && (
                          <span className="text-xs text-slate-400 font-medium">
                            ${item.price.toFixed(2)} each
                          </span>
                        )}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-6 flex items-center gap-2 text-slate-500 text-sm">
              <FiShield className="text-indigo-600 text-lg" />
              <span>Items in your cart are non-refundable after 30 days unless damaged.</span>
            </div>
          </div>

          {/* Right Column: Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 sm:p-8 sticky top-24">
              <h2 className="text-xl font-bold text-slate-900 mb-6 pb-4 border-b border-slate-100">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center text-slate-600">
                  <span>Subtotal</span>
                  <span className="font-medium text-slate-900">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center text-slate-600">
                  <span>Shipping limit</span>
                  <span className={shipping === 0 ? "font-bold text-emerald-500" : "font-medium text-slate-900"}>
                    {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between items-center text-slate-600">
                  <span>Tax (Est.)</span>
                  <span className="font-medium text-slate-900">${tax.toFixed(2)}</span>
                </div>
              </div>

              {/* Promo Code Toggle (Visual only) */}
              <div className="mb-6 pt-4 border-t border-slate-100">
                <button className="text-indigo-600 font-bold text-sm hover:text-indigo-800 transition-colors w-full text-left flex justify-between items-center">
                  Add a promo code <FiPlus />
                </button>
              </div>

              <div className="flex justify-between items-end mb-8 pt-4 border-t border-slate-100">
                <div>
                  <h3 className="font-black text-slate-900 text-lg">Total</h3>
                  <p className="text-xs text-slate-400">Including $0.00 in taxes</p>
                </div>
                <span className="font-black text-3xl text-indigo-600">
                  ${total.toFixed(2)}
                </span>
              </div>

              <Link 
                to="/checkout" 
                className="w-full bg-slate-900 text-white h-14 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-indigo-600 hover:shadow-lg hover:shadow-indigo-600/30 transition-all shadow-md group"
              >
                Proceed to Checkout
                <FiArrowRight className="text-xl group-hover:translate-x-1 transition-transform" />
              </Link>

              <div className="mt-6 text-center">
                <Link to="/shop" className="text-indigo-600 font-bold hover:text-indigo-800 transition-colors text-sm">
                  or Continue Shopping
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Cart;
