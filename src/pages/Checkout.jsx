import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiCreditCard, FiLock, FiCheckCircle, FiChevronRight } from 'react-icons/fi';
import { FaCcVisa, FaCcMastercard, FaPaypal, FaApplePay } from 'react-icons/fa';

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState('credit-card');

  // Mock cart data for summary
  const subtotal = 449.49;
  const shipping = 0.00;
  const tax = 35.96;
  const total = 485.45;

  return (
    <div className="bg-slate-50 min-h-screen py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Checkout Header */}
        <div className="mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">Checkout</h1>
          <div className="flex items-center gap-2 mt-4 text-sm font-medium text-slate-500">
            <Link to="/cart" className="hover:text-indigo-600 transition-colors">Cart</Link>
            <FiChevronRight className="text-slate-400" />
            <span className="text-slate-900">Information & Payment</span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* Left Column: Forms */}
          <div className="lg:w-2/3 flex flex-col gap-8">
            
            {/* 1. Contact Info & Shipping Address */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 sm:p-8">
              <h2 className="text-xl font-bold text-slate-900 mb-6">Shipping Address</h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                    <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-400 transition-all" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                    <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-400 transition-all" placeholder="Doe" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                  <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-400 transition-all" placeholder="john.doe@example.com" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Street Address</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-400 transition-all" placeholder="123 Commerce St, Suite 100" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="sm:col-span-1">
                    <label className="block text-sm font-medium text-slate-700 mb-2">City</label>
                    <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-400 transition-all" placeholder="New York" />
                  </div>
                  <div className="sm:col-span-1">
                    <label className="block text-sm font-medium text-slate-700 mb-2">State</label>
                    <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-400 transition-all appearance-none">
                      <option>New York</option>
                      <option>California</option>
                      <option>Texas</option>
                      <option>Florida</option>
                    </select>
                  </div>
                  <div className="sm:col-span-1">
                    <label className="block text-sm font-medium text-slate-700 mb-2">ZIP Code</label>
                    <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-400 transition-all" placeholder="10001" />
                  </div>
                </div>
              </form>
            </div>

            {/* 2. Payment Method */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 sm:p-8">
              <h2 className="text-xl font-bold text-slate-900 mb-6">Payment Method</h2>
              
              <div className="space-y-4">
                
                {/* Credit Card Option */}
                <div className={`border-2 rounded-xl overflow-hidden transition-all ${paymentMethod === 'credit-card' ? 'border-indigo-600' : 'border-slate-200'}`}>
                  <label className="flex items-center justify-between p-5 cursor-pointer hover:bg-slate-50">
                    <div className="flex items-center gap-4">
                      <div className="relative flex items-center justify-center">
                        <input 
                          type="radio" 
                          name="payment" 
                          value="credit-card"
                          checked={paymentMethod === 'credit-card'}
                          onChange={() => setPaymentMethod('credit-card')}
                          className="peer appearance-none w-5 h-5 border-2 border-slate-300 rounded-full text-indigo-600 checked:border-indigo-600 transition-all cursor-pointer" 
                        />
                        <div className="absolute w-2.5 h-2.5 bg-indigo-600 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none"></div>
                      </div>
                      <span className="font-bold text-slate-900">Credit Card</span>
                    </div>
                    <div className="flex gap-2 text-2xl text-slate-400">
                      <FaCcVisa className={paymentMethod === 'credit-card' ? 'text-indigo-600' : ''} />
                      <FaCcMastercard className={paymentMethod === 'credit-card' ? 'text-indigo-600' : ''} />
                    </div>
                  </label>
                  
                  {/* Credit Card Form (Visible if selected) */}
                  {paymentMethod === 'credit-card' && (
                    <div className="p-5 bg-slate-50 border-t border-slate-100 space-y-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Card Number</label>
                        <div className="relative">
                          <input type="text" className="w-full bg-white border border-slate-200 rounded-lg pl-10 pr-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-400 transition-all font-mono" placeholder="0000 0000 0000 0000" />
                          <FiCreditCard className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Expiry Date</label>
                          <input type="text" className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-400 transition-all font-mono" placeholder="MM/YY" />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">CVC</label>
                          <input type="text" className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-400 transition-all font-mono" placeholder="123" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* PayPal Option */}
                <div className={`border-2 rounded-xl transition-all ${paymentMethod === 'paypal' ? 'border-indigo-600' : 'border-slate-200'}`}>
                  <label className="flex items-center justify-between p-5 cursor-pointer hover:bg-slate-50 rounded-xl">
                    <div className="flex items-center gap-4">
                      <div className="relative flex items-center justify-center">
                        <input 
                          type="radio" 
                          name="payment" 
                          value="paypal"
                          checked={paymentMethod === 'paypal'}
                          onChange={() => setPaymentMethod('paypal')}
                          className="peer appearance-none w-5 h-5 border-2 border-slate-300 rounded-full text-indigo-600 checked:border-indigo-600 transition-all cursor-pointer" 
                        />
                        <div className="absolute w-2.5 h-2.5 bg-indigo-600 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none"></div>
                      </div>
                      <span className="font-bold text-slate-900">PayPal</span>
                    </div>
                    <FaPaypal className={`text-2xl ${paymentMethod === 'paypal' ? 'text-blue-600' : 'text-slate-400'}`} />
                  </label>
                </div>

                {/* Apple Pay Option */}
                <div className={`border-2 rounded-xl transition-all ${paymentMethod === 'apple-pay' ? 'border-indigo-600' : 'border-slate-200'}`}>
                  <label className="flex items-center justify-between p-5 cursor-pointer hover:bg-slate-50 rounded-xl">
                    <div className="flex items-center gap-4">
                      <div className="relative flex items-center justify-center">
                        <input 
                          type="radio" 
                          name="payment" 
                          value="apple-pay"
                          checked={paymentMethod === 'apple-pay'}
                          onChange={() => setPaymentMethod('apple-pay')}
                          className="peer appearance-none w-5 h-5 border-2 border-slate-300 rounded-full text-indigo-600 checked:border-indigo-600 transition-all cursor-pointer" 
                        />
                        <div className="absolute w-2.5 h-2.5 bg-indigo-600 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none"></div>
                      </div>
                      <span className="font-bold text-slate-900">Apple Pay</span>
                    </div>
                    <FaApplePay className={`text-3xl ${paymentMethod === 'apple-pay' ? 'text-black' : 'text-slate-400'}`} />
                  </label>
                </div>

              </div>
            </div>

          </div>

          {/* Right Column: Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 sm:p-8 sticky top-24">
              <h2 className="text-xl font-bold text-slate-900 mb-6 pb-4 border-b border-slate-100">Order Summary</h2>
              
              {/* Mock items list in summary */}
              <div className="flex flex-col gap-4 mb-6 pb-6 border-b border-slate-100">
                <div className="flex gap-4">
                  <div className="w-16 h-16 bg-slate-100 rounded-lg overflow-hidden shrink-0 border border-slate-200">
                    <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=300" alt="Item" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 flex flex-col justify-center">
                    <h4 className="font-bold text-slate-900 text-sm line-clamp-1">Premium Minimalist Headphones</h4>
                    <p className="text-slate-500 text-xs">Qty: 1</p>
                  </div>
                  <div className="font-bold text-slate-900 text-sm flex items-center">
                    $249.99
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-16 h-16 bg-slate-100 rounded-lg overflow-hidden shrink-0 border border-slate-200">
                    <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=300" alt="Item" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 flex flex-col justify-center">
                    <h4 className="font-bold text-slate-900 text-sm line-clamp-1">Stainless Steel Watch</h4>
                    <p className="text-slate-500 text-xs">Qty: 2</p>
                  </div>
                  <div className="font-bold text-slate-900 text-sm flex items-center">
                    $199.50
                  </div>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center text-slate-600 text-sm">
                  <span>Subtotal</span>
                  <span className="font-medium text-slate-900">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center text-slate-600 text-sm">
                  <span>Shipping</span>
                  <span className={shipping === 0 ? "font-bold text-emerald-500" : "font-medium text-slate-900"}>
                    {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between items-center text-slate-600 text-sm">
                  <span>Taxes</span>
                  <span className="font-medium text-slate-900">${tax.toFixed(2)}</span>
                </div>
              </div>

              <div className="flex justify-between items-end mb-8 pt-4 border-t border-slate-100">
                <h3 className="font-black text-slate-900 text-lg">Total</h3>
                <span className="font-black text-3xl text-indigo-600">
                  ${total.toFixed(2)}
                </span>
              </div>

              <Link 
                to="/checkout" 
                className="w-full bg-slate-900 text-white h-14 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-indigo-600 hover:shadow-lg hover:shadow-indigo-600/30 transition-all shadow-md group mb-4"
              >
                <FiLock className="text-lg" />
                Pay ${total.toFixed(2)}
              </Link>
              
              <div className="flex items-center justify-center gap-2 text-xs text-slate-500 font-medium">
                <FiCheckCircle className="text-emerald-500 text-sm" />
                Payments are secure and encrypted.
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Checkout;
