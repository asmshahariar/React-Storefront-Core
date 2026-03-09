import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      {/* Dynamic Navigation Bar Component */}
      <Navbar />

      {/* Dynamic Page Content matched by React Router routes */}
      <main className="flex-grow w-full">
        <Outlet />
      </main>

      {/* Global Footer Component */}
      <Footer />
    </div>
  );
};

export default MainLayout;
