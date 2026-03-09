import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8 md:p-16 text-center">
      <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 focus:outline-none">
        Discover Quality Products
      </h1>
      <p className="max-w-2xl text-lg text-slate-500 mb-8">
        Your one-stop shop for everything you need. Premium quality, best prices, delivered directly to your doorstep.
      </p>
      <Link to="/shop" className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-indigo-700 hover:shadow-lg transition-all">
        Start Shopping
      </Link>
    </div>
  );
};

export default Home;
