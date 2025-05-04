import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import Home from './components/pages/Home';
import MensCollection from './components/pages/MensCollection';
import WomensCollection from './components/pages/WomensCollection';
import NewArrivals from './components/pages/NewArrivals';
import LimitedEdition from './components/pages/LimitedEdition';
import ProductDetail from './components/pages/ProductDetail';
import CheckoutStep1 from './components/pages/Checkout/CheckoutStep1';
import CheckoutStep2 from './components/pages/Checkout/CheckoutStep2';
import CheckoutStep3 from './components/pages/Checkout/CheckoutStep3';
import CheckoutComplete from './components/pages/Checkout/CheckoutComplete';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="mens" element={<MensCollection />} />
            <Route path="womens" element={<WomensCollection />} />
            <Route path="new-arrivals" element={<NewArrivals />} />
            <Route path="limited-edition" element={<LimitedEdition />} />
            <Route path="product/:id" element={<ProductDetail />} />
            <Route path="checkout/step-1" element={<CheckoutStep1 />} />
            <Route path="checkout/step-2" element={<CheckoutStep2 />} />
            <Route path="checkout/step-3" element={<CheckoutStep3 />} />
            <Route path="checkout/complete" element={<CheckoutComplete />} />
          </Route>
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;