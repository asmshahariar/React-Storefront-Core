import { Link } from 'react-router-dom';
import { FiMail, FiLock, FiUser, FiArrowRight } from 'react-icons/fi';
import { FcGoogle } from 'react-icons/fc';

const Register = () => {
  return (
    <div className="flex min-h-screen bg-white">
      
      {/* Left side: Register Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12 lg:p-16">
        <div className="w-full max-w-md">
          {/* Mobile Logo (Visible only on small screens) */}
          <div className="lg:hidden w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-xl mb-8 shadow-lg shadow-indigo-500/30">
            S
          </div>

          <div className="mb-8">
            <h1 className="text-4xl font-black text-slate-900 tracking-tight mb-3">Create account.</h1>
            <p className="text-slate-500 text-lg">Join us to start curating your premium lifestyle.</p>
          </div>

          <form className="space-y-5">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Full Name</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                  <FiUser className="text-slate-400 group-focus-within:text-indigo-600 transition-colors text-lg" />
                </div>
                <input 
                  type="text" 
                  className="w-full pl-14 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition-all focus:bg-white font-medium shadow-sm" 
                  placeholder="John Doe" 
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Email Address</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                  <FiMail className="text-slate-400 group-focus-within:text-indigo-600 transition-colors text-lg" />
                </div>
                <input 
                  type="email" 
                  className="w-full pl-14 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition-all focus:bg-white font-medium shadow-sm" 
                  placeholder="hello@example.com" 
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Password</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                  <FiLock className="text-slate-400 group-focus-within:text-indigo-600 transition-colors text-lg" />
                </div>
                <input 
                  type="password" 
                  className="w-full pl-14 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition-all focus:bg-white font-medium shadow-sm" 
                  placeholder="Create a strong password" 
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Confirm Password</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                  <FiLock className="text-slate-400 group-focus-within:text-indigo-600 transition-colors text-lg" />
                </div>
                <input 
                  type="password" 
                  className="w-full pl-14 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition-all focus:bg-white font-medium shadow-sm" 
                  placeholder="Confirm your password" 
                  required
                />
              </div>
            </div>

            <div className="flex items-center pt-2">
              <label className="flex items-start gap-3 cursor-pointer group">
                <div className="relative flex items-center justify-center shrink-0 mt-0.5">
                  <input type="checkbox" className="peer appearance-none w-5 h-5 border-2 border-slate-300 rounded text-indigo-600 checked:bg-indigo-600 checked:border-indigo-600 transition-all cursor-pointer" required />
                  <svg className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                </div>
                <span className="text-sm font-semibold text-slate-600 select-none">
                  I agree to the <Link to="#" className="text-indigo-600 hover:text-indigo-800 underline decoration-2 underline-offset-4">Terms of Service</Link> and <Link to="#" className="text-indigo-600 hover:text-indigo-800 underline decoration-2 underline-offset-4">Privacy Policy</Link>.
                </span>
              </label>
            </div>

            <button type="submit" className="w-full bg-indigo-600 text-white py-4 rounded-2xl font-bold text-lg hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-600/25 flex items-center justify-center gap-2 group mt-6 hover:-translate-y-0.5">
              Create Account
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

            <button className="w-full mt-6 bg-white border border-slate-200 text-slate-900 py-3.5 rounded-2xl font-bold hover:bg-slate-50 hover:border-slate-300 transition-colors flex items-center justify-center gap-3 shadow-sm hover:-translate-y-0.5">
              <FcGoogle className="text-2xl" />
              Sign up with Google
            </button>
          </div>

          <p className="mt-8 text-center text-slate-600 font-medium text-sm sm:text-base">
            Already have an account?{' '}
            <Link to="/login" className="text-indigo-600 font-bold hover:text-indigo-800 transition-colors underline decoration-2 underline-offset-4">
              Sign in
            </Link>
          </p>

        </div>
      </div>

      {/* Right side: Image/Branding (Hidden on mobile) */}
      <div className="hidden lg:flex w-1/2 relative bg-slate-900 items-center justify-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&q=80&w=2000" 
          alt="Abstract Architecture" 
          className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent"></div>
        <div className="relative z-10 px-12 max-w-xl text-center">
          <div className="inline-flex gap-2 items-center justify-center mb-8 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-sm uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
            Premium Access
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-6">
            Unlock exclusive products <br /> and priority shipping.
          </h2>
          <p className="text-lg text-slate-300 font-medium leading-relaxed">
            Create an account today to streamline your checkout process, manage your wishlist, and receive tailored recommendations just for you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
