import { useParams, Link } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
      <Link to="/shop" className="text-indigo-600 hover:text-indigo-800 font-medium mb-6 inline-block">
        &larr; Back to Shop
      </Link>
      
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 flex flex-col md:flex-row gap-8">
        {/* Image Placeholder */}
        <div className="w-full md:w-1/2 h-96 bg-slate-200 rounded-xl flex items-center justify-center text-slate-400">
          Product Image {id}
        </div>
        
        {/* Details Placeholder */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Premium Item {id}</h2>
          <p className="text-2xl text-indigo-600 font-bold mb-6">$120.00</p>
          <p className="text-slate-600 mb-8 leading-relaxed">
            This is a beautiful, high-quality product description. It contains detailed information about the materials used, sizing, and shipping policies.
          </p>
          <button className="bg-indigo-600 text-white w-full md:w-auto px-8 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
