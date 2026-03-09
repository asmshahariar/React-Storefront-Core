import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
        <h2 className="text-3xl font-extrabold text-center text-slate-900 mb-6">Create Account</h2>
        
        <form className="space-y-4">
          <input 
            type="text" 
            placeholder="Full Name" 
            required
            className="w-full px-4 py-3 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-600 rounded-xl"
          />
          <input 
            type="email" 
            placeholder="Email address" 
            required
            className="w-full px-4 py-3 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-600 rounded-xl"
          />
          <input 
            type="password" 
            placeholder="Password" 
            required
            className="w-full px-4 py-3 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-600 rounded-xl"
          />
          <button className="w-full bg-indigo-600 text-white font-bold py-3 rounded-xl hover:bg-indigo-700 transition">
            Register
          </button>
        </form>
        
        <p className="mt-6 text-center text-sm text-slate-600">
          Already have an account?{' '}
          <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
