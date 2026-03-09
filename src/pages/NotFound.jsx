import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center p-8 text-center">
      <h1 className="text-9xl font-black text-indigo-100">404</h1>
      <h2 className="text-3xl font-bold text-slate-800 mt-4 mb-2">Page Not Found</h2>
      <p className="text-slate-500 mb-8">Oops! We couldn't find the page you were looking for.</p>
      <Link to="/" className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition">
        Return Home
      </Link>
    </div>
  );
};

export default NotFound;
