import { Link } from 'react-router-dom';
import { FiMail, FiLock, FiArrowRight } from 'react-icons/fi';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
  return (
    <div className="flex min-h-screen bg-white">
      {/* Left side: Image/Branding (Hidden on mobile) */}
      <div className="hidden lg:flex w-1/2 relative bg-slate-900 items-center justify-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000&auto=format&fit=crop" 
          alt="Abstract Art" 
          className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-overlay scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
        <div className="relative z-10 px-12 max-w-xl text-center">
          <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center text-white font-bold text-3xl mx-auto mb-8 shadow-2xl shadow-indigo-500/50">
            S
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tight mb-6 leading-tight">
            Elevate Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Shopping Experience</span>
          </h2>
          <p className="text-lg text-slate-300 font-medium leading-relaxed">
            Join thousands of satisfied customers who have discovered the perfect blend of style, quality, and convenience.
          </p>
        </div>
      </div>

      {/* Right side: Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12 lg:p-16">
        <div className="w-full max-w-md">
          {/* Mobile Logo (Visible only on small screens) */}
          <div className="lg:hidden w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-xl mb-8 shadow-lg shadow-indigo-500/30">
            S
          </div>

          <div className="mb-10">
            <h1 className="text-4xl font-black text-slate-900 tracking-tight mb-3">Welcome back.</h1>
            <p className="text-slate-500 text-lg">Enter your credentials to access your account.</p>
          </div>

          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Email Address</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                  <FiMail className="text-slate-400 group-focus-within:text-indigo-600 transition-colors text-lg" />
                </div>
                <input 
                  type="email" 
                  className="w-full pl-14 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition-all focus:bg-white font-medium shadow-sm" 
                  placeholder="hello@example.com" 
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Password</label>
                <Link to="#" className="text-sm font-bold text-indigo-600 hover:text-indigo-800 transition-colors">
                  Forgot?
                </Link>
              </div>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                  <FiLock className="text-slate-400 group-focus-within:text-indigo-600 transition-colors text-lg" />
                </div>
                <input 
                  type="password" 
                  className="w-full pl-14 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition-all focus:bg-white font-medium shadow-sm" 
                  placeholder="••••••••" 
                  required
                />
              </div>
            </div>

            <div className="flex items-center">
              <label className="flex items-center gap-3 cursor-pointer group">
                <div className="relative flex items-center justify-center">
                  <input type="checkbox" className="peer appearance-none w-5 h-5 border-2 border-slate-300 rounded text-indigo-600 checked:bg-indigo-600 checked:border-indigo-600 transition-all cursor-pointer" />
                  <svg className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                </div>
                <span className="text-sm font-semibold text-slate-600 group-hover:text-slate-900 transition-colors select-none">Remember for 30 days</span>
              </label>
            </div>

            <button type="submit" className="w-full bg-indigo-600 text-white py-4 rounded-2xl font-bold text-lg hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-600/25 flex items-center justify-center gap-2 group mt-2 hover:-translate-y-0.5">
              Sign In
              <FiArrowRight className="text-xl group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-4 text-slate-400 font-bold tracking-widest uppercase text-xs">Or continue with</span>
              </div>
            </div>

            <button className="w-full mt-8 bg-white border border-slate-200 text-slate-900 py-4 rounded-2xl font-bold hover:bg-slate-50 hover:border-slate-300 transition-colors flex items-center justify-center gap-3 shadow-sm hover:-translate-y-0.5">
              <FcGoogle className="text-2xl" />
              Sign in with Google
            </button>
          </div>

          <p className="mt-10 text-center text-slate-600 font-medium text-sm sm:text-base">
            Don't have an account?{' '}
            <Link to="/register" className="text-indigo-600 font-bold hover:text-indigo-800 transition-colors underline decoration-2 underline-offset-4">
              Create an account
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
};

export default Login;
