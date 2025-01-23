import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BuyNow from './pages/BuyNow';
import AddToCart from './pages/AddToCart';
import Billing from './pages/Billing';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buynow" element={<BuyNow />} />
        <Route path="/addtocart" element={<AddToCart />} />
        <Route path="/billing" element={<Billing />} />
      </Routes>
    </Router>
  );
}

export default App;
