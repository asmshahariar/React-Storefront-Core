import ProductCard from '../components/ProductCard';

const Shop = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
      <h2 className="text-3xl font-black tracking-tight text-slate-900 mb-8">Our Collection</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <ProductCard key={item} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
