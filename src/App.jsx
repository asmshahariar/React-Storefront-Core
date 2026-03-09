import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layouts
import MainLayout from './layouts/MainLayout';

// Pages
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Wishlist from './pages/Wishlist';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        {/* Main Application Layout Wrapper */}
        <Route path="/" element={<MainLayout />}>
          
          {/* Public Routes */}
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="product/:id" element={<ProductDetails />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
          
          {/* Auth Routes */}
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          
          {/* Protected/User Routes */}
          <Route path="profile" element={<Profile />} />
          <Route path="wishlist" element={<Wishlist />} />

          {/* Catch-all 404 Route */}
          <Route path="*" element={<NotFound />} />

        </Route>
      </Routes>
    </Router>
  );
}

export default App;
