const Profile = () => {
  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-8">
      <h2 className="text-2xl font-bold text-slate-900 mb-6">My Profile</h2>
      
      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar */}
        <div className="w-full md:w-1/4 bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col gap-4">
          <div className="text-lg font-semibold text-slate-800">John Doe</div>
          <div className="text-sm text-slate-500">john.doe@example.com</div>
          <hr className="border-slate-100 my-2" />
          <button className="text-left font-medium text-indigo-600 hover:underline hover:text-indigo-800">Account Details</button>
          <button className="text-left font-medium text-slate-600 hover:underline hover:text-slate-900">Order History</button>
          <button className="text-left font-medium text-slate-600 hover:underline hover:text-slate-900">Payment Methods</button>
        </div>
        
        {/* Main Content */}
        <div className="flex-1 bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100">
          <h3 className="text-xl font-bold text-slate-800 mb-4">Account Overview</h3>
          <p className="text-slate-600">This is where users can manage their personal information, view past purchases, and track active orders.</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
